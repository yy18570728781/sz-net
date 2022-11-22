<template>
  <div class="userCredit app-container">
    <div class="flex-box">

      <div class="item">
        <el-select class="select" v-model="searchFrom.showDate" placeholder="Please select time" @change="selectChange">
          <el-option
            v-for="item in dataList"
            :key="item.showDate"
            :label="item.showDate"
            :value="item.showDate"
          />
        </el-select>
      </div>

      <div class="item">
        <el-select  v-model="searchFrom.gameCode"  placeholder="Please select type "  @change="$forceUpdate()">
          <el-option
            v-for="item in gameList"  
            :key="item.code"
            :label="item.description"
            :value="item.code"
          />
        </el-select>
      </div>
      <div class="item">
        <el-button type="primary" @click="getList" v-loading.fullscreen.lock="butLoading">搜索</el-button>
      </div>

      <div class="item item1">
        <el-input v-model="search" placeholder="输入关键字搜索"> </el-input>
      </div>
      
    </div>
    <div>
      <el-table
        v-loading="listLoading"  
        :data="
          temList.filter(
            (data) =>
              !search ||
              data.userCode.toLowerCase().includes(search.toLowerCase()) ||
              data.userName.toLowerCase().includes(search.toLowerCase()) ||
              data.remarks.toLowerCase().includes(search.toLowerCase()) ||
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
          label="会员ID"
          align="center"
          prop="userCode"
          sortable
        >
          <template slot-scope="scope">
            <span v-if="scope.row.tag" style="font-size:20px;font-weight: bold;">总计</span>
            <span v-else>{{scope.row.userCode}} </span>
          </template>
        </el-table-column>
        <el-table-column
          label="会员名 "
          align="center"
          prop="userName"
          sort-by="userName"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="积分"
          align="center"
          prop="point"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="备注"
          align="center"
          prop="remarks"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="时间"
          align="center"
          prop="createdDate"
          sortable
        >
        </el-table-column>
        
      </el-table>
    </div>
  </div>
</template>
<script>
import { getTransferGame  , getDrlWeek , getTransferTxn} from "@/api/member";
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
        this.getTemList()
    },
    //显示第几页
    handleCurrentChange(val) {
        //改变默认的页数
        this.currentPage=val
        this.getTemList()
    },
    getTemList(){
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.push(this.count)
      this.pointList.push(this.count)
    },
    
    getList(){
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
            let point = 0;
            let tag = true
            this.pointList.forEach(item=>{
              point += Number(item.point)
            })
            point = Number(point).toFixed(2)
            this.count = { userCode,userName,remarks,point,tag}
            // this.count.firstColumn = '总计' 
            await this.getTemList()
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
</style>