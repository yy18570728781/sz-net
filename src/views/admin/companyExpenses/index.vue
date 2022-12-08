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

      <!-- <div class="item">
        <el-select  v-model="searchFrom.gameCode"  placeholder="Please select type "  @change="$forceUpdate()">
          <el-option
            v-for="item in gameList"  
            :key="item.code"
            :label="item.description"
            :value="item.code"
          />
        </el-select>
      </div> -->
      <div class="item">
        <el-button type="primary" @click="addCom" >添加</el-button>
      </div>

      <div class="item item1">
        <el-input v-model="search" placeholder="输入关键字搜索"
        @input="searchTable"> </el-input>
      </div>
      
    </div>
    <div>
      <div class="Pdiv">
        <div class="Cdiv">
          <el-table
        v-loading="listLoading"  
        :data="
          pointList.filter(
            (data) =>
              !search ||
              data.note.toLowerCase().includes(search.toLowerCase()) ||
              data.amount.toLowerCase().includes(search.toLowerCase()) ||
              data.createdDate.toLowerCase().includes(search.toLowerCase())
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
          label="备注"
          align="center"
          prop="note"
          sortable
        >
          <template slot-scope="scope">
            <span v-if="scope.row.tag" style="font-size:20px;font-weight: bold;">总计</span>
            <span v-else>{{scope.row.note}} </span>
          </template>
        </el-table-column>
        <el-table-column
          label="金额 "
          align="center"
          prop="amount"
          sort-by="amount"
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

        <el-table-column
          label="操作"
          align="center"
          prop=""
          sortable
        >
        <!-- v-if="scope.row.cashInd == 'N'"
            :disabled="scope.row.cashInd !== 'N'" -->
          <template slot-scope="scope">
            <el-button
              v-if="!scope.row.tag"
              type="danger"
              icon="el-icon-delete-solid"
              circle
              @click="delCompany(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
        
      </el-table>
          <div class="footer_div">
            <div>总计</div>
            <div v-for="(item,index) in countList" :key="index">{{item}}</div>
          </div>
        </div>
      </div>
      
      <el-dialog
      :title="companyTitle"
      :visible.sync="dialogComVisible"
      width="40%"
    >
      <el-form :model="searchFrom">
        <el-form-item label="备注" label-width="120px">
          <el-input
            v-model="searchFrom.note"
            type="textarea"
            maxlength="500"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="金额" label-width="120px">
          <el-input
            v-model="searchFrom.amount"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="closeEdit">取 消</el-button> -->
        <el-button type="primary" @click="Rebate" v-loading.fullscreen.lock="butLoading">确 定</el-button>
      </div>
    </el-dialog>
    </div>
  </div>
</template>
<script>
import { getTransferGame  , getDrlWeek , getCompanyExpenses,addCompanyExpenses,deleteCompanyExpenses} from "@/api/member";
export default {
  name: "userCredit",
  components:{},
  data() {
    return {
      // listLoading:true,
      listLoading: false,
      searchFrom: {
        fromDate: '', //必填
        toDate: '',//必填
        showDate:'',
        note:'',
        amount:'',
      },
      formRow:{},
      dataList:[],//星期列表
      nowGame:'',
      gameList:[],//游戏类型列表
      // [{"code":"G01","description":"牛牛"},{"code":"G02","description":"球网"},{"code":"G03","description":"ETH"},{"code":"G04","description":"麻将"}]
      

      DetDialog:false,//明细开关
      gametxnId:'',//明细gametxnId
      gameCode:'',//明细gameCode

      butLoading:false,

      companyTitle:'',//弹窗标题
      dialogComVisible:false,//弹窗开关

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
      searchList:[],//搜索列表
      
    };
  },
  async created(){
    let  userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userInfo = userInfo
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
    
  },
  mounted(){
  },
  methods: {
    addCom(){
      this.companyTitle = '新增'
      this.searchFrom.note = ''
      this.searchFrom.amount = ''
      this.dialogComVisible  = true
    },
    // 表单提交
    Rebate(){
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.searchFrom.amount)&&this.searchFrom.note ){
        const {fromDate,toDate,note,amount} = this.searchFrom
        addCompanyExpenses({fromDate,toDate,note,amount}).then(res=>{
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.dialogComVisible  = false
            this.searchFrom.note = ''
            this.searchFrom.amount = ''
            this.getList()
          }else{
            this.$message({
              type:'error',
              message:res.data.remark
            })
          }
        })
      }else{
        this.$message({
          type: "info",
          message: "备注必填最多500 字节，金额最多七位数,允许包含2位小数",
        });
      }
    },

    // 删除费用
    delCompany(row){
      this.$confirm('确认删除吗', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteCompanyExpenses({expensestxnId:row.expensestxnId}).then(res=>{
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.getList()
          }else{
            this.$message({
              type:'error',
              message:res.data.remark
            })
          }
        })
      })
      
    },

    selectChange(value){
      let proNum = this.dataList.findIndex((item, index) =>{
        return item.showDate == value
      })
      this.searchFrom.fromDate = this.dataList[proNum].fromDate
      this.searchFrom.toDate = this.dataList[proNum].toDate
      this.getList()
    },
    
    getTemList(){
      // this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.push(this.count)
      // this.pointList.push(this.count)
    },
    // 搜索List
    searchTable(){
      if(this.search == ''){
        // this.totalCount = this.list.length
      }else{
        this.searchList = this.pointList.filter(
          (data) =>
            !this.search ||
            data.note.toLowerCase().includes(this.search.toLowerCase()) ||
            data.amount.toLowerCase().includes(this.search.toLowerCase()) ||
            data.createdDate.toLowerCase().includes(this.search.toLowerCase())
        )
        let amount = 0;
        let createdDate = '';
        this.searchList.forEach(item=>{
          amount += Number(item.amount)
        })
        amount = Number(amount).toFixed(2)
        amount = amount.toString()
        this.countList = [amount,createdDate,'']
      }
    },
    
    getList(){
      this.currentPage = 1
      this.nowGame = this.searchFrom.gameCode
      this.butLoading = true
      let _this = this

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate , gameCode } = this.searchFrom;
        
        getCompanyExpenses({fromDate, toDate })
          .then(async(res) => {
            this.butLoading = false
            this.pointList = res.data;

            let note = '';
            let amount = 0;
            let createdDate = '';
            let tag = true
            this.pointList.forEach(item=>{
              amount += Number(item.amount)
            })
            amount = Number(amount).toFixed(2)
            amount = amount.toString()
            this.count = { note,amount,createdDate,tag}
            // this.count.firstColumn = '总计' 
            await this.getTemList()
            this.countList = [amount,createdDate,'']
            this.totalCount = res.data.length
            
            this.listLoading = false;
          })
          
      } else {
        this.listLoading = false;
        this.butLoading = false
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
      .el-button{
      
      }
    }
    ::v-deep .el-dialog{
      width: 100% !important;
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
    .el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
        overflow-x: auto;
    }
    .item1{
      width: 110px;
    }
    
} 
</style>