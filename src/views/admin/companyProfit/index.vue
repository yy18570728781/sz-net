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
        <el-button type="primary" @click="getFenTong" >{{$t('DividedAmount')}}</el-button>
      </div>

      <!-- <div class="item">
        <el-select  v-model="searchFrom.gameCode"  placeholder="Please select type " >
          <el-option
            v-for="item in gameList"  
            :key="item.code"
            :label="item.description"
            :value="item.code"
          />
        </el-select>
      </div> -->
      <!-- <div class="item">
        <el-button type="primary" @click="getList" v-loading.fullscreen.lock="butLoading">搜索</el-button>
      </div> -->
      
    </div>
    <div>
      <div class="Pdiv">
        <div class="Cdiv">
          <el-table
            v-loading="listLoading"  
            :data="pointList"
            element-loading-text="Loading"
            border
            fit
            highlight-current-row
            ref="filterTable"
            :default-sort="{  }"
          >
            <el-table-column
              :label="$t('Project')"
              align="center"
              prop="item"
              sort-by="item"
              
            >
              <template slot-scope="scope">
                <span v-if="scope.row.item">{{scope.row.item}}</span>
                <span v-else style="font-size:20px;font-weight: bold;">总计</span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('CashAmount')"
              align="center"
              prop="cashAmount"
              
            >
            </el-table-column>

            <el-table-column
              :label="$t('CreditAmount')"
              align="center"
              prop="creditAmount"
              
            >
            </el-table-column>

            <el-table-column
              :label="$t('TotalAmount')"
              align="center"
              prop="totalAmount"
              
            >
            </el-table-column>
            
          </el-table>
          <div class="footer_div">
            <div>{{$t('TotalOf')}}</div>
            <div v-for="(item,index) in countList" :key="index">{{item}}</div>
          </div>
        </div>
      </div>
      <el-dialog
      :title="$t('DividedAmount')"
      :visible.sync="FTvzb"
      width="40%"
    >
      <el-form :model="searchFrom">
        <el-form-item :label="$t('Amount')" label-width="100px">
          <el-input
            v-model="FTValue"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="closeEdit">取 消</el-button> -->
        <el-button type="primary" @click="editFT">{{$t('Determine')}}</el-button>
      </div>
    </el-dialog>
    </div>
  </div>
</template>
<script>
import { getTransferGame  , getDrlWeek , getCompanyAccount,getCompanyProfitAmount,addCompanyProfit} from "@/api/member";
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

      FTvzb:false,//分桶
      FTValue:'',//分桶额

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
    selectChange(value){
      let proNum = this.dataList.findIndex((item, index) =>{
        return item.showDate == value
      })
      this.searchFrom.fromDate = this.dataList[proNum].fromDate
      this.searchFrom.toDate = this.dataList[proNum].toDate
      this.getList()
    },

    //分桶
    getFenTong(){
      const { fromDate, toDate , gameCode } = this.searchFrom;
      this.FTvzb = true
      getCompanyProfitAmount({fromDate,toDate}).then(res=>{
        this.FTValue = res.data.amount
      })
    },
    editFT(){
      const { fromDate, toDate , gameCode } = this.searchFrom;
      if(/^(0\.\d{0,1}[0-9]|\+?[0-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.FTValue)){
        addCompanyProfit({fromDate,toDate,amount:this.FTValue,}).then(res=>{
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.getList()
            this.FTvzb = false
          }else{
            this.$message({
              type:'error',
              message:res.data.remark
            })
          }
        })
      }else{
        this.butLoading = false
        this.$message({
          type: "info",
          message: this.$t('CreditLimitTip'),
        });
      }
      
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
      // this.pointList.push(this.count)
    },
    
    getList(){
      this.currentPage = 1
      this.nowGame = this.searchFrom.gameCode
      this.butLoading = true
      let _this = this

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate , gameCode } = this.searchFrom;
        
        getCompanyAccount({fromDate, toDate })
          .then((res) => {
            this.butLoading = false
            this.pointList = res.data;

            let cashAmount = 0;
            let creditAmount = 0;
            let totalAmount = 0;
            this.pointList.forEach(item=>{
              cashAmount += Number(item.cashAmount)
              creditAmount += Number(item.creditAmount)
              totalAmount += Number(item.totalAmount)
            })
            cashAmount = Number(cashAmount).toFixed(2)
            creditAmount = Number(creditAmount).toFixed(2)
            totalAmount = Number(totalAmount).toFixed(2)
            this.count = { cashAmount,creditAmount,totalAmount}
            // this.count.firstColumn = '总计' 
            this.getTemList()
            this.countList = [cashAmount,creditAmount,totalAmount,]
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
  .item {
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .el-select{
    width: 250px !important;
  }
  .el-input__inner{
    width: 250px !important;
  }
}
@media only screen and (max-width: 1200px) {
  .app-container{
    ::v-deep .el-form{
      width: 320px !important;
      margin: 0 !important;
      .el-button{
      
      }
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
    .el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
        overflow-x: auto;
    }
    
  }
} 
</style>