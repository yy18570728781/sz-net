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
        <el-button type="primary" @click="getFenTong" >分桶额</el-button>
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
          label="项目 "
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
          label="现金"
          align="center"
          prop="cashAmount"
          
        >
        </el-table-column>

        <el-table-column
          label="信用"
          align="center"
          prop="creditAmount"
          
        >
        </el-table-column>

        <el-table-column
          label="共计"
          align="center"
          prop="totalAmount"
          
        >
        </el-table-column>
        
      </el-table>
      <el-dialog
      title="分桶额"
      :visible.sync="FTvzb"
      width="40%"
    >
      <el-form :model="searchFrom">
        <el-form-item label="分桶额" label-width="100px">
          <el-input
            v-model="FTValue"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="closeEdit">取 消</el-button> -->
        <el-button type="primary" @click="editFT">确 定</el-button>
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
          message: "只能填写最多7位数整数，限2位小数",
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
      this.pointList.push(this.count)
    },
    
    getList(){
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
</style>