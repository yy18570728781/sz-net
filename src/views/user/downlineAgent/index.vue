<template>
  <div class="userCredit app-container">
    <div class="flex-box">

      <div class="item">
        <el-select class="select" v-model="searchFrom.showDate" :placeholder="$t('InputTip.SelectTime')" @change="selectChange">
          <el-option
            v-for="item in dataList"
            :key="item.showDate"
            :label="item.showDate"
            :value="item.showDate"
          />
        </el-select>
      </div>
       <div class="item">
        <el-input v-model="search" :placeholder="$t('InputTip.SearchKey')" @input="searchTable"> </el-input>
      </div>
    </div>
    <div style="width:100%;overflow-x: auto;">
      <div style=" min-width: 1040px;">
      <el-table
      v-loading="listLoading"
      :data="temList.filter(
        (data) =>
          !search ||
          data.userName.toLowerCase().includes(search.toLowerCase()) ||
          data.turnover.toLowerCase().includes(search.toLowerCase()) ||
          data.playerBonus.toLowerCase().includes(search.toLowerCase()) ||
          data.agentTurnoverBonus.toLowerCase().includes(search.toLowerCase()) ||
          data.agentProfitBonus.toLowerCase().includes(search.toLowerCase()) ||
          data.turnoverBonus.toLowerCase().includes(search.toLowerCase()) ||
          data.profitBonus.toLowerCase().includes(search.toLowerCase()) ||
          data.wallet.toLowerCase().includes(search.toLowerCase()) ||
          data.transfer.toLowerCase().includes(search.toLowerCase()) ||
          data.winLose.toLowerCase().includes(search.toLowerCase()) ||
          data.agentProfit.toLowerCase().includes(search.toLowerCase()) ||
          data.profit.toLowerCase().includes(search.toLowerCase()) 
      )"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{   }"
    >
       <el-table-column
        :label="$t('Operation')"
        align="center"
        prop=""
        sortable
        
      > 
        <template slot-scope="scope">
          <el-button type="primary" round size="small" @click="changeShow(scope.row)">{{$t('Detail')}}</el-button>
        </template>
        
       </el-table-column> 
      <el-table-column
        :label="$t('AgencyName')"
        align="center"
        prop="userName"
      >
      </el-table-column>
      <el-table-column
        :label="$t('Turnover')"
        align="center"
        prop="turnover"
        sort-by="turnover"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        :label="$t('MemberRebate')"
        align="center"
        prop="playerBonus"
        sort-by="playerBonus"
        sortable
        
      >
      </el-table-column>

      <el-table-column
        :label="$t('AgencyCommission')"
        align="center"
        prop=""
        sort-by=""
        sortable
        
      >

        <el-table-column
          :label="$t('TurnoverRebate')"
          align="center"
          prop="agentTurnoverBonus"
          sort-by="agentTurnoverBonus"
          sortable
          
        >
        </el-table-column>
        <el-table-column
          :label="$t('AgentProfitBonus')"
          align="center"
          prop="agentProfitBonus"
          sort-by="agentProfitBonus"
          sortable
          
        >
        </el-table-column>

      </el-table-column>
      <el-table-column
        :label="$t('Bonus')"
        align="center"
        prop=""
        sort-by=""
        sortable
        
      >

        <el-table-column
          :label="$t('TurnoverRebate')"
          align="center"
          prop="turnoverBonus"
          sort-by="turnoverBonus"
          sortable
          
        >
        </el-table-column>
        <el-table-column
          :label="$t('ProfitRebate')"
          align="center"
          prop="profitBonus"
          sort-by="profitBonus"
          sortable
          
        >
        </el-table-column>

      </el-table-column>

      <el-table-column
        :label="$t('Wallet')"
        align="center"
        prop="wallet"
        sort-by="wallet"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        :label="$t('Transfer')"
        align="center"
        prop="transfer"
        sort-by="transfer"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        :label="$t('WinLose')"
        align="center"
        prop="winLose"
        sort-by="winLose"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        :label="$t('AgencyProfit')"
        align="center"
        prop="agentProfit"
        sort-by="agentProfit"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        :label="$t('MyProfit')"
        align="center"
        prop="profit"
        sort-by="profit"
        sortable
        
      >
      </el-table-column>
      
    </el-table>
    <!-- <div style="width:100%;overflow-x: auto;"> -->
      <div class="footer_div">
        <div>{{$t('TotalOf')}}</div>
        <div v-for="(item,index) in countList" :key="index">{{item}}</div>
      </div>
    <!-- </div> -->
    </div>
    </div>
    
    
    <div class="page">
      <el-pagination 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="currentPage" 
        :page-sizes="pageSizes" 
        :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" 
        :total="totalCount">
      </el-pagination>
    </div>
    <div>
      <p>**{{$t('AgencyProfit')}} = {{$t('WinLose')}} + {{$t('MemberRebate')}} + {{$t('AgencyCommission')}} + {{$t('Wallet')}} + {{$t('Transfer')}}</p>
      <p>**{{$t('MyProfit')}} = {{$t('AgencyProfit')}}+ {{$t('Bonus')}}</p>
    </div>
    <!-- 总结明细 -->
    <Detail ref="detail" @changeDetDialog="changeDetDialog" :DetDialog="DetDialog"  :fromDate="searchFrom.fromDate" :toDate="searchFrom.toDate" :DetailFrom="DetailFrom"></Detail>
  </div>
</template>
<script>
import { getDrlWeek , getAgentSum } from "@/api/user";
import Detail from './detail.vue'
export default {
  name: "userCredit",
  components:{Detail},
  data() {
    return {
      // listLoading:true,
      listLoading: false,
      search:'',
      searchFrom: {
        userInfo:JSON.parse(localStorage.getItem('userInfo')),
        fromDate: '', //必填
        toDate: '',//必填
        showDate:'',
      },
      DetailFrom:{},
      dataList:[],//星期列表

      DetDialog:false,//明细开关
      gnuserId:'',//明细gnuserId

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
      countList:[],//总计

      searchList:[],//搜索列表
    };
  },
  created(){
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
  methods: {
    selectChange(value){
      let proNum = this.dataList.findIndex((item, index) =>{
        return item.showDate == value
      })
      this.searchFrom.fromDate = this.dataList[proNum].fromDate
      this.searchFrom.toDate = this.dataList[proNum].toDate
      this.getList()
    },
    changeShow(row){
      this.gnuserId = row.gnuserId
      this.DetDialog = true
      this.$refs.detail.getList(this.gnuserId,this.searchFrom.fromDate,this.searchFrom.toDate)
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
      console.log(val,'val');
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
    },
    // 搜索List
    searchTable(){
      if(this.search == ''){
        this.countDeatil(this.pointList)
      }else{
        this.searchList = this.pointList.filter(
          (data) =>
            !this.search ||
            data.userName.toLowerCase().includes(search.toLowerCase()) ||
            data.turnover.toLowerCase().includes(search.toLowerCase()) ||
            data.playerBonus.toLowerCase().includes(search.toLowerCase()) ||
            data.agentTurnoverBonus.toLowerCase().includes(search.toLowerCase()) ||
            data.agentProfitBonus.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverBonus.toLowerCase().includes(search.toLowerCase()) ||
            data.profitBonus.toLowerCase().includes(search.toLowerCase()) ||
            data.wallet.toLowerCase().includes(search.toLowerCase()) ||
            data.transfer.toLowerCase().includes(search.toLowerCase()) ||
            data.winLose.toLowerCase().includes(search.toLowerCase()) ||
            data.agentProfit.toLowerCase().includes(search.toLowerCase()) ||
            data.profit.toLowerCase().includes(search.toLowerCase()) 

        )
        this.currentPage=1
        this.countDeatil(this.searchList)
      }
    },
    // 计算总计
    countDeatil(list){
      this.totalCount = list.length

      let userCode = 0;
      let userName = '';
      let turnover = 0;
      let agentTurnoverBonus = 0;
      let agentProfitBonus = 0;
      let turnoverBonus = 0;
      let profitBonus = 0;
      let playerBonus = 0;
      let transfer = 0;
      let wallet = 0;
      let winLose = 0;
      let agentProfit = 0;
      let profit = 0;
      list.forEach(item=>{
        userCode += Number(item.userCode)
        turnover += Number(item.turnover)
        agentTurnoverBonus += Number(item.agentTurnoverBonus)
        agentProfitBonus += Number(item.agentProfitBonus)
        turnoverBonus += Number(item.turnoverBonus)
        profitBonus += Number(item.profitBonus)
        playerBonus += Number(item.playerBonus)
        transfer += Number(item.transfer)
        wallet += Number(item.wallet)
        winLose += Number(item.winLose)
        agentProfit += Number(item.agentProfit)
        profit += Number(item.profit)
      })
      userCode = Number(userCode).toFixed(2)
      turnover = Number(turnover).toFixed(2)
      agentTurnoverBonus = Number(agentTurnoverBonus).toFixed(2)
      agentProfitBonus = Number(agentProfitBonus).toFixed(2)
      turnoverBonus = Number(turnoverBonus).toFixed(2)
      profitBonus = Number(profitBonus).toFixed(2)
      playerBonus = Number(playerBonus).toFixed(2)
      transfer = Number(transfer).toFixed(2)
      wallet = Number(wallet).toFixed(2)
      winLose = Number(winLose).toFixed(2)
      agentProfit = Number(agentProfit).toFixed(2)
      profit = Number(profit).toFixed(2)
      this.temList =  list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.countList = [userName, turnover,playerBonus,agentTurnoverBonus,agentProfitBonus,turnoverBonus,profitBonus,wallet,transfer,winLose,agentProfit,profit]
    },
    getList() {
      this.currentPage = 1
      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate } = this.searchFrom;
        getAgentSum({ gnuserId:this.userInfo.gnuserId, fromDate, toDate })
          .then((res) => {
            this.pointList = res.data;
            // this.pointList = [{gnuserId:'12121'}];
            let userCode = 0;
            let userName = '';
            let turnover = 0;
            let agentTurnoverBonus = 0;
            let agentProfitBonus = 0;
            let turnoverBonus = 0;
            let profitBonus = 0;
            let playerBonus = 0;
            let transfer = 0;
            let wallet = 0;
            let winLose = 0;
            let agentProfit = 0;
            let profit = 0;
            this.pointList.forEach(item=>{
              userCode += Number(item.userCode)
              turnover += Number(item.turnover)
              agentTurnoverBonus += Number(item.agentTurnoverBonus)
              agentProfitBonus += Number(item.agentProfitBonus)
              turnoverBonus += Number(item.turnoverBonus)
              profitBonus += Number(item.profitBonus)
              playerBonus += Number(item.playerBonus)
              transfer += Number(item.transfer)
              wallet += Number(item.wallet)
              winLose += Number(item.winLose)
              agentProfit += Number(item.agentProfit)
              profit += Number(item.profit)
            })
            userCode = Number(userCode).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            agentTurnoverBonus = Number(agentTurnoverBonus).toFixed(2)
            agentProfitBonus = Number(agentProfitBonus).toFixed(2)
            turnoverBonus = Number(turnoverBonus).toFixed(2)
            profitBonus = Number(profitBonus).toFixed(2)
            playerBonus = Number(playerBonus).toFixed(2)
            transfer = Number(transfer).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            agentProfit = Number(agentProfit).toFixed(2)
            profit = Number(profit).toFixed(2)
            this.count = {userCode,userName, turnover,agentTurnoverBonus,profitBonus,transfer,playerBonus,agentProfitBonus,turnoverBonus, wallet,winLose,agentProfit,profit}
            this.count.firstColumn = '总计' 
            this.getTemList()
            this.countList = [userName, turnover,playerBonus,agentTurnoverBonus,agentProfitBonus,turnoverBonus,profitBonus,wallet,transfer,winLose,agentProfit,profit]

            this.listLoading = false;
          })
          .catch((err) => {
            this.listLoading = false;
            console.log(err);
          });
      } else {
        this.$message({ type: "info", message: "Please select time" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep.el-table {
  overflow-x: visible;
}
.el-table--scrollable-x .el-table__body-wrapper{
  overflow: visible !important;
}
.el-table__header-wrapper,
.el-table__body-wrapper,
.el-table__footer-wrapper {
  min-width: 1040px !important; 
  overflow: visible;
}
.el-table__body-wrapper, .el-table__footer-wrapper, .el-table__header-wrapper{
  min-width: 1040px !important; 
}
.el-table::after {
  position: relative;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow: visible;
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


.flex-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
      position: static !important;
      
    }
    
} 
</style>