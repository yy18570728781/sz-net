<template>
  <div class="userCredit app-container">
    <div class="flex-box">

      <div class="item">
        <el-select class="select" v-model="searchFrom.showDate" :placeholder="$t('SelectTime')" @change="selectChange">
          <el-option
            v-for="item in dataList"
            :key="item.showDate"
            :label="item.showDate"
            :value="item.showDate"
          />
        </el-select>
      </div>

      <div class="item">
        <el-select  v-model="searchFrom.gameCode"  :placeholder="$t('SelectType')"  @change="$forceUpdate()">
          <el-option
            v-for="item in gameList"  
            :key="item.code"
            :label="item.description"
            :value="item.code"
          />
        </el-select>
      </div>
      <div class="item">
        <el-button type="primary" @click="getList" v-loading.fullscreen.lock="butLoading">{{$t('Search')}}</el-button>
      </div>

      <div class="item item1">
        <el-input v-model="search" :placeholder="$t('InputTip.SearchKey')" @input="searchTable"> </el-input>
      </div>
      
    </div>
    <div class="Pdiv">
      <div class="Cdiv">
        <el-table
          v-loading="listLoading"  
          :data="
            temList.filter(
              (data) =>
                !search ||
                data.userCode.toLowerCase().includes(search.toLowerCase()) ||
                data.userName.toLowerCase().includes(search.toLowerCase()) ||
                data.remarks.toLowerCase().includes(search.toLowerCase()) ||
                data.createdDate.toLowerCase().includes(search.toLowerCase()) ||
                data.point.toLowerCase().includes(search.toLowerCase()) 
            )
          "
          element-loading-text="Loading"
          border
          fit
          highlight-current-row
          ref="filterTable"
          :default-sort="{ }"
        >
          <el-table-column
            :label="$t('DownLineID')"
            align="center"
            prop="userCode"
            sortable
          >
            <template slot-scope="scope">
              <span>{{scope.row.userCode}} </span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('DownLineName')"
            align="center"
            prop="userName"
            sort-by="userName"
            sortable
          >
          </el-table-column>
          <el-table-column
            :label="$t('Point')"
            align="center"
            prop="point"
            sortable
          >
          </el-table-column>

          <el-table-column
            :label="$t('Note')"
            align="center"
            prop="remarks"
            sortable
          >
          </el-table-column>

          <el-table-column
            :label="$t('Time')"
            align="center"
            prop="createdDate"
            sortable
          >
          </el-table-column>
          
        </el-table>
        <div class="footer_div">
          <div>{{$t('TotalOf')}}</div>
          <div v-for="(item,index) in countList" :key="index">{{item}}</div>
        </div>
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>
<script>
import { getTransferGame  , getDrlWeek , getTransferTxn} from "@/api/user";
export default {
  name: "userCredit",
  components:{},
  data() {
    return {
      // listLoading:true,
      listLoading: false,
      searchFrom: {
        userInfo:JSON.parse(localStorage.getItem('userInfo')),
        fromDate: '', //必填
        toDate: '',//必填
        showDate:'',
        userType:'',
      },
      DetailFrom:{},
      dataList:[],//星期列表
      nowGame:'',
      gameList:[],//游戏类型列表
      // [{"code":"G01","description":"牛牛"},{"code":"G02","description":"球网"},{"code":"G03","description":"ETH"},{"code":"G04","description":"麻将"}]
      

      DetDialog:false,//明细开关
      gametxnId:'',//明细gametxnId
      gameCode:'',//明细gameCode

      butLoading:false,

      // 分页
      // 总数据
      pointList: [],
      // 展示数据
      temList:[],
      // 默认显示第几页
      currentPage:1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount:1,
      // 个数选择器（可修改）
      pageSizes:[5,10,20,30],
      // 默认每页显示的条数（可修改）
      PageSize:10,

      count:{},//总计

      countList:[],

      search:'',
      
    };
  },
  async created(){
    
    

    let  userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userInfo = userInfo
    
    getTransferGame()
    .then((res) => {
      if(res.code == 0){
        this.gameList = res.data;
        this.searchFrom.gameCode = this.gameList[0].code
        
        // this.getList()
        getDrlWeek()
        .then((res) => {
          if(res.code == 0){
            this.dataList = res.data;
            this.searchFrom.showDate = this.dataList[0].showDate
            this.searchFrom.fromDate = this.dataList[0].fromDate
            this.searchFrom.toDate = this.dataList[0].toDate
            
            this.getList()
          }
          
        })
      }
    })
    
    
  },
  mounted(){
  },
  methods: {
    log(){

    },
    selectChange(value){
      let proNum = this.dataList.findIndex((item, index) =>{
        return item.showDate == value
      })
      this.searchFrom.fromDate = this.dataList[proNum].fromDate
      this.searchFrom.toDate = this.dataList[proNum].toDate
      // this.getList()
    },

    changeShow(row){
      this.gametxnId = row.gametxnId
      this.gameCode = row.gameCode
      this.DetDialog = true
      this.$refs.detail.getList(this.gametxnId,this.gameCode,this.searchFrom.fromDate,this.searchFrom.toDate,this.nowGame)
    },
    changeDetDialog(val){
      this.DetDialog = val
    },

    //每页显示的条数
    handleSizeChange(val) {
        // 改变每页显示的条数 
        this.PageSize=val
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.currentPage=1
        if(this.search){
          this.searchTable()
        }else{
          this.getTemList()
        }
    },
    //显示第几页
    handleCurrentChange(val) {
        //改变默认的页数
        this.currentPage=val
        if(this.search){
          this.searchTable()
        }else{
          this.getTemList()
        }
    },
    getTemList(){
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.push(this.count)
      // this.pointList.push(this.count)
    },
    // 搜索List
    searchTable(){
      if(this.search == ''){
        this.countDeatil(this.pointList)
      }else{
        this.searchList = this.pointList.filter(
          (data) =>
              !this.search ||
              data.userCode.toLowerCase().includes(this.search.toLowerCase()) ||
                data.userName.toLowerCase().includes(this.search.toLowerCase()) ||
                data.remarks.toLowerCase().includes(this.search.toLowerCase()) ||
                data.createdDate.toLowerCase().includes(this.search.toLowerCase()) ||
                data.point.toLowerCase().includes(this.search.toLowerCase())

        )
        this.currentPage=1
        this.countDeatil(this.searchList)
      }
    },
    // 计算总计
    countDeatil(list){
      this.totalCount = list.length

      let userCode = '';
      let userName = '';
      let remarks = '';
      let createdDate = '';
      let point = 0;
      list.forEach(item=>{
        point += Number(item.point)
      })
      point = Number(point).toFixed(2)
      this.temList =  list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.countList = [userName,point,remarks,createdDate,]
    },
    
    getList(){
      this.search = '';
      this.currentPage = 1
      this.nowGame = this.searchFrom.gameCode
      this.butLoading = true
      let _this = this

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate , gameCode } = this.searchFrom;
        
        getTransferTxn({ gameCode, fromDate, toDate })
          .then(async(res) => {
            this.butLoading = false
            this.pointList = res.data;

            let userCode = '';
            let userName = '';
            let remarks = '';
            let createdDate = '';
            let point = 0;
            let tag = true
            this.pointList.forEach(item=>{
              point += Number(item.point)
            })
            point = Number(point).toFixed(2)
            this.count = { userCode,userName,remarks,point,tag}
            // this.count.firstColumn = '总计' 
            await this.getTemList()
            this.countList = [userName,point,remarks,createdDate,]
            this.totalCount = res.data.length
            
            this.listLoading = false;
          })
          
      } else {
        this.$message({ type: "info", message: "Please select time" }); 
      }
    },
  },
};
</script>
<style lang="scss" scoped>

.Pdiv{
  width:100%;overflow-x: auto;
  .Cdiv{
    min-width: 1040px;
  }
}
::v-deep.el-table {
  overflow-x: clip;
}
::v-deep.el-table--scrollable-x .el-table__body-wrapper{
  overflow: clip !important;
}
.el-table__header-wrapper,
.el-table__body-wrapper,
.el-table__footer-wrapper {
  min-width: 1040px !important; 
  overflow: clip;
}
.el-table__body-wrapper, .el-table__footer-wrapper, .el-table__header-wrapper{
  min-width: 1040px !important; 
}
.el-table::after {
  position: relative;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow: clip;
}
.footer_div{
  width: 100%;
  min-width: 1040px;
  border-left: 1px solid #EBEEF5;
  border-bottom: 1px solid #EBEEF5;
  display: flex;
  background-color: #e2e2e2;
  font-size: 14px;
  
  div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-right: 1px solid #EBEEF5;
    padding: 12px 0;
    color: #606266;
  }
}

.numDiv{
  width: 100%;
  display: flex;
  div{
    flex: 1;
    width: 100%;
    padding: 12px 0;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    color: #606266;
  }
}
.flex-box {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .item {
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }  
  .item1{
    position: absolute;
    right:0;
  }
  .el-select{
    width: 250px !important;
  }
  .el-input__inner{
    width: 250px !important;
  }
}
@media only screen and (max-width: 1200px) {
  ::v-deep .el-form{
    width: 320px !important;
    margin: 0 !important;
  }
  ::v-deep .el-dialog{
    width: 375px !important;
  }
  ::v-deep .el-table td{
      padding: 0 !important;
    }
	.el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    // background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    width: 300px;
    margin: 20px auto;
  }
  .el-button{
    margin: 0;
  }
  .item1{
    position: static !important;
  }
  .el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
        overflow-x: auto;
    }
    .Cdiv{
    min-width:600px !important;
  }
  .footer_div{
    min-width: 600px;
  }
  
}
</style>