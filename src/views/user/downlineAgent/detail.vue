<template>
  
  <el-dialog :title="title" :visible="DetDialog_" center width="98%"  @close="closeEdit">
    <div class="flex">
      <div class="item">
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
            data.turnover.toLowerCase().includes(search.toLowerCase()) ||
            data.playerProfitBonus.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverBonus.toLowerCase().includes(search.toLowerCase()) ||
            data.profitBonus.toLowerCase().includes(search.toLowerCase()) ||
            data.wallet.toLowerCase().includes(search.toLowerCase()) ||
            data.transfer.toLowerCase().includes(search.toLowerCase()) ||
            data.winLose.toLowerCase().includes(search.toLowerCase()) ||
            data.playerProfit.toLowerCase().includes(search.toLowerCase()) ||
            data.profit.toLowerCase().includes(search.toLowerCase()) ||
            data.userName.toLowerCase().includes(search.toLowerCase()) 
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{  }"
    >

      <el-table-column
        :label="$t('MemberProfit')"
        align="center"
        sortable
      >
        
        <el-table-column
          :label="$t('UserName')"
          align="center"
          prop="userName"
          sortable
        >
           <template slot-scope="scope">
            <span >{{scope.row.userName}} </span>
          </template>
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
         :label="$t('MemberCommission')"
          align="center"
          prop="playerProfitBonus"
          sort-by="playerProfitBonus"
          sortable
        >
        </el-table-column>
        <el-table-column
          :label="$t('TurnoverBonus')"
          align="center"
          prop="turnoverBonus"
          sort-by="turnoverBonus"
          sortable
        >
        </el-table-column>
        <el-table-column
          :label="$t('ProfitBonus')"
          align="center"
          prop="profitBonus"
          sort-by="profitBonus"
          sortable
        >
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
          :label="$t('PlayerProfit')"
          align="center"
          prop="playerProfit"
          sort-by="playerProfit"
          sortable
        >
        </el-table-column>
        <el-table-column
          :label="$t('AgencyProfit')"
          align="center"
          prop="profit"
          sort-by="profit"
          sortable
        >
        </el-table-column>

      </el-table-column>
        
    </el-table>
        <div class="footer_div">
            <div>{{$t('TotalOf')}}</div>
            <div v-for="(item,index) in countList" :key="index">{{item}}</div>
          </div>
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
    <div style="height:50px;"></div>

    <div class="flex">
      <div class="item">
        <el-input v-model="search1" :placeholder="$t('InputTip.SearchKey')" @input="searchTable1"> </el-input>
      </div>
    </div>
    <div class="Pdiv">
      <div class="Cdiv">
        <el-table
      v-loading="listLoading"
      :data="
        temList1.filter(
          (data) =>
            !search1 ||
            data.userName.toLowerCase().includes(search1.toLowerCase()) ||
            data.turnover.toLowerCase().includes(search1.toLowerCase()) ||
            data.playerBonus.toLowerCase().includes(search1.toLowerCase()) ||
            data.agentTurnoverBonus.toLowerCase().includes(search1.toLowerCase()) ||
            data.agentProfitBonus.toLowerCase().includes(search1.toLowerCase()) ||
            data.turnoverBonus.toLowerCase().includes(search1.toLowerCase()) ||
            data.profitBonus.toLowerCase().includes(search1.toLowerCase()) ||
            data.transfer.toLowerCase().includes(search1.toLowerCase()) ||
            data.winLose.toLowerCase().includes(search1.toLowerCase()) ||
            data.agentProfit.toLowerCase().includes(search1.toLowerCase()) ||
            data.profit.toLowerCase().includes(search1.toLowerCase()) ||
            data.wallet.toLowerCase().includes(search1.toLowerCase())
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{  }"
    >
      <el-table-column
        :label="$t('AgencyProfit')"
        align="center"
        sortable
      >
      <el-table-column
        :label="$t('AgencyName')"
        align="center"
        prop="userName"
        sortable
      >
        <template slot-scope="scope">
          <span>{{scope.row.userName}} </span>
        </template>
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
        :label="$t('MemberCommission')"
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
          :label="$t('ProfitRebate')"
          align="center"
          prop="agentProfitBonus"
          sort-by="agentProfitBonus"
          sortable
        >
        </el-table-column>

      </el-table-column>
      <el-table-column
        :label="$t('Commission')"
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
        :label="$t('Profit')"
        align="center"
        prop="profit"
        sort-by="profit"
        sortable
      >
      </el-table-column>

      </el-table-column>
      
    </el-table>
        <div class="footer_div">
            <div>{{$t('TotalOf')}}</div>
            <div v-for="(item,index) in countList1" :key="index">{{item}}</div>
          </div>
      </div>
    </div>
    
    <div class="page">
      <el-pagination 
        @size-change="handleSizeChange1" 
        @current-change="handleCurrentChange1" 
        :current-page="currentPage1" 
        :page-sizes="pageSizes1" 
        :page-size="PageSize1" layout="total, sizes, prev, pager, next, jumper" 
        :total="totalCount1">
      </el-pagination>
    </div>
  </el-dialog>
</template>
<script>
import { getDetAgentPlayerSum , getDetAgentSum } from "@/api/member";
export default {
  name: "Detail",
  props:{
    DetDialog:{
      type:Boolean,
      default:false
    },
    gnuserId:{
      type:String
    },
    fromDate:{
      type:String
    },
    toDate:{
      type:String
    },
  },
  data() {
    return {
      title:this.$t('ProfitDetail'),
      search:'',
      search1:'',
      listLoading: false,
      memberList: [],//会员列表
      agencypList: [],//代理列表

      detailShow:false,//明细开关

      // 分页
      // 总数据
      memberList: [],
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

      // 分页1
      // 总数据
      agencypList: [],
      // 展示数据
      temList1:[],
      // 默认显示第几页
      currentPage1:1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount1:1,
      // 个数选择器（可修改）
      pageSizes1:[5,10,20,30],
      // 默认每页显示的条数（可修改）
      PageSize1:10,
      count1:{},//总计

      countList:[],
      countList1:[],

      searchList:[],//搜索列表
      searchList1:[],//搜索列表
    };
  },
  created(){
    
  },
  mounted(){
    // console.log(this.DetDialog,this.gnuserId,this.fromDate,this.toDate);
  },
  components: {},
  computed:{
    DetDialog_: {
      get() {
        return this.DetDialog;
      },
      set(val) {
        //grants_改变由父组件控制
        this.$emit("changeDetDialog", val);
      }
    },
  },
  methods: {
    // 关闭弹窗
    closeEdit() {
      this.$emit("changeDetDialog", false);
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
      this.temList =  this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.$nextTick(()=>{
      //   //  this.temList.push(this.count)
      // })
      // this.temList.unshift(this.count)
    },
    // 搜索List
    searchTable(){
      if(this.search == ''){
        this.countDeatil(this.memberList)
      }else{
        this.searchList = this.memberList.filter(
          (data) =>
              !this.search ||
            data.turnover.toLowerCase().includes(this.search.toLowerCase()) ||
            data.playerProfitBonus.toLowerCase().includes(this.search.toLowerCase()) ||
            data.turnoverBonus.toLowerCase().includes(this.search.toLowerCase()) ||
            data.profitBonus.toLowerCase().includes(this.search.toLowerCase()) ||
            data.wallet.toLowerCase().includes(this.search.toLowerCase()) ||
            data.transfer.toLowerCase().includes(this.search.toLowerCase()) ||
            data.winLose.toLowerCase().includes(this.search.toLowerCase()) ||
            data.playerProfit.toLowerCase().includes(this.search.toLowerCase()) ||
            data.profit.toLowerCase().includes(this.search.toLowerCase()) ||
            data.userName.toLowerCase().includes(this.search.toLowerCase())  

        )
        this.currentPage=1
        this.countDeatil(this.searchList)
      }
    },
    // 计算总计
    countDeatil(list){
      this.totalCount = list.length

      let userCode = 0;
      let userName = 0;
      let playerProfitBonus = 0;
      let turnoverBonus = 0;
      let playerBonus = 0;
      let agentTurnoverBonus = 0;
      let profitBonus = 0;
      let turnover = 0;
      let winLose = 0;
      let wallet = 0;
      let playerProfit = 0;
      let profit = 0;
      let transfer = 0;
      list.forEach(item=>{
        userCode += Number(item.userCode)
        userName += Number(item.userName)
        playerProfitBonus += Number(item.playerProfitBonus)
        turnoverBonus += Number(item.turnoverBonus)
        profitBonus += Number(item.profitBonus)
        playerBonus += Number(item.playerBonus)
        agentTurnoverBonus += Number(item.agentTurnoverBonus)
        turnover += Number(item.turnover)
        winLose += Number(item.winLose)
        wallet += Number(item.wallet)
        transfer += Number(item.transfer)
        playerProfit += Number(item.playerProfit)
        profit += Number(item.profit)
      })
      userCode = Number(userCode).toFixed(2)
      userName = Number(userName).toFixed(2)
      playerProfitBonus = Number(playerProfitBonus).toFixed(2)
      turnoverBonus = Number(turnoverBonus).toFixed(2)
      profitBonus = Number(profitBonus).toFixed(2)
      playerBonus = Number(playerBonus).toFixed(2)
      agentTurnoverBonus = Number(agentTurnoverBonus).toFixed(2)
      turnover = Number(turnover).toFixed(2)
      winLose = Number(winLose).toFixed(2)
      wallet = Number(wallet).toFixed(2)
      transfer = Number(transfer).toFixed(2)
      playerProfit = Number(playerProfit).toFixed(2)
      profit = Number(profit).toFixed(2)
      this.temList =  list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.countList = [turnover,playerProfitBonus,turnoverBonus,profitBonus,wallet,transfer,winLose,playerProfit,profit]
    },


  // --------------------------------------------------
    //每页显示的条数
    handleSizeChange1(val) {
        // 改变每页显示的条数 
        this.PageSize1=val
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.currentPage1=1
        if(this.search){
          this.searchTable()
        }else{
          this.getTemList()
        }
    },
    //显示第几页
    handleCurrentChange1(val) {
        //改变默认的页数
        this.currentPage1=val
        if(this.search){
          this.searchTable1()
        }else{
          this.getTemList1()
        }
    },
    getTemList1(){
      this.temList1 =  this.agencypList.slice((this.currentPage1-1)*this.PageSize1,this.currentPage1*this.PageSize1)
      // this.temList1.push(this.count1)
    },

    // 搜索List
    searchTable1(){
      if(this.search1 == ''){
        this.countDeatil1(this.agencypList)
      }else{
        this.searchList1 = this.agencypList.filter(
          (data) =>
              !this.search1 ||
            data.turnover.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.playerProfitBonus.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.turnoverBonus.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.profitBonus.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.wallet.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.transfer.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.winLose.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.playerProfit.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.profit.toLowerCase().includes(this.search1.toLowerCase()) ||
            data.userName.toLowerCase().includes(this.search1.toLowerCase())  

        )
        this.currentPage=1
        this.countDeatil1(this.searchList1)
      }
    },
    // 计算总计
    countDeatil1(list){
      this.totalCount1 = list.length

      let userCode = 0;
      let userName = 0;
      let agentTurnoverBonus = 0;
      let turnoverBonus = 0;
      let playerBonus = 0;
      let agentProfitBonus = 0;
      let profitBonus = 0;
      let agentProfit = 0;
      let winLose = 0;
      let wallet = 0;
      let profit = 0;
      let turnover = 0;
      let transfer = 0;
      list.forEach(item=>{
        userCode += Number(item.userCode)
        userName += Number(item.userName)
        agentTurnoverBonus += Number(item.agentTurnoverBonus)
        turnoverBonus += Number(item.turnoverBonus)
        playerBonus += Number(item.playerBonus)
        agentProfitBonus += Number(item.agentProfitBonus)
        profitBonus += Number(item.profitBonus)
        agentProfit += Number(item.agentProfit)
        winLose += Number(item.winLose)
        wallet += Number(item.wallet)
        transfer += Number(item.transfer)
        profit += Number(item.profit)
        turnover += Number(item.turnover)
      })
      userCode = Number(userCode).toFixed(2)
      userName = Number(userName).toFixed(2)
      agentTurnoverBonus = Number(agentTurnoverBonus).toFixed(2)
      turnoverBonus = Number(turnoverBonus).toFixed(2)
      playerBonus = Number(playerBonus).toFixed(2)
      agentProfitBonus = Number(agentProfitBonus).toFixed(2)
      profitBonus = Number(profitBonus).toFixed(2)
      agentProfit = Number(agentProfit).toFixed(2)
      winLose = Number(winLose).toFixed(2)
      wallet = Number(wallet).toFixed(2)
      transfer = Number(transfer).toFixed(2)
      profit = Number(profit).toFixed(2)
      turnover = Number(turnover).toFixed(2)
      this.countList1 = [turnover,playerBonus,agentTurnoverBonus,agentProfitBonus,turnoverBonus,profitBonus,wallet,transfer,winLose,agentProfit,profit]
    },


    getList(gnuserId,fromDate,toDate) {
      this.currentPage = 1
      if (this.fromDate && this.toDate) {
        this.listLoading = true;
        getDetAgentPlayerSum({ gnuserId:gnuserId, fromDate:fromDate, toDate:toDate })
          .then((res) => {
            this.memberList = res.data;
            this.totalCount = res.data.length;

            let userCode = 0;
            let userName = 0;
            let playerProfitBonus = 0;
            let turnoverBonus = 0;
            let playerBonus = 0;
            let agentTurnoverBonus = 0;
            let profitBonus = 0;
            let turnover = 0;
            let winLose = 0;
            let wallet = 0;
            let playerProfit = 0;
            let profit = 0;
            let transfer = 0;
            let tag = true;
            this.memberList.forEach(item=>{
              userCode += Number(item.userCode)
              userName += Number(item.userName)
              playerProfitBonus += Number(item.playerProfitBonus)
              turnoverBonus += Number(item.turnoverBonus)
              profitBonus += Number(item.profitBonus)
              playerBonus += Number(item.playerBonus)
              agentTurnoverBonus += Number(item.agentTurnoverBonus)
              turnover += Number(item.turnover)
              winLose += Number(item.winLose)
              wallet += Number(item.wallet)
              transfer += Number(item.transfer)
              playerProfit += Number(item.playerProfit)
              profit += Number(item.profit)
            })
            userCode = Number(userCode).toFixed(2)
            userName = Number(userName).toFixed(2)
            playerProfitBonus = Number(playerProfitBonus).toFixed(2)
            turnoverBonus = Number(turnoverBonus).toFixed(2)
            profitBonus = Number(profitBonus).toFixed(2)
            playerBonus = Number(playerBonus).toFixed(2)
            agentTurnoverBonus = Number(agentTurnoverBonus).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            transfer = Number(transfer).toFixed(2)
            playerProfit = Number(playerProfit).toFixed(2)
            profit = Number(profit).toFixed(2)
            this.count = {userCode,userName, playerProfitBonus,turnoverBonus,profitBonus,playerBonus, turnover,winLose,wallet,playerProfit,profit,transfer,tag}
            this.count.firstColumn = '总计' 
            this.getTemList()
            this.countList = [turnover,playerProfitBonus,turnoverBonus,profitBonus,wallet,transfer,winLose,playerProfit,profit]
            
            this.listLoading = false;
          })
          .catch((err) => {
            this.listLoading = false;
            console.log(err);
          });

        getDetAgentSum({ gnuserId:gnuserId, fromDate:fromDate, toDate:toDate })
          .then((res) => {
            this.agencypList = res.data;
            this.totalCount1 = res.data.length;

            let userCode = 0;
            let userName = 0;
            let agentTurnoverBonus = 0;
            let turnoverBonus = 0;
            let playerBonus = 0;
            let agentProfitBonus = 0;
            let profitBonus = 0;
            let agentProfit = 0;
            let winLose = 0;
            let wallet = 0;
            let profit = 0;
            let turnover = 0;
            let transfer = 0;
            let tag = true;
            this.agencypList.forEach(item=>{
              userCode += Number(item.userCode)
              userName += Number(item.userName)
              agentTurnoverBonus += Number(item.agentTurnoverBonus)
              turnoverBonus += Number(item.turnoverBonus)
              playerBonus += Number(item.playerBonus)
              agentProfitBonus += Number(item.agentProfitBonus)
              profitBonus += Number(item.profitBonus)
              agentProfit += Number(item.agentProfit)
              winLose += Number(item.winLose)
              wallet += Number(item.wallet)
              transfer += Number(item.transfer)
              profit += Number(item.profit)
              turnover += Number(item.turnover)
            })
            userCode = Number(userCode).toFixed(2)
            userName = Number(userName).toFixed(2)
            agentTurnoverBonus = Number(agentTurnoverBonus).toFixed(2)
            turnoverBonus = Number(turnoverBonus).toFixed(2)
            playerBonus = Number(playerBonus).toFixed(2)
            agentProfitBonus = Number(agentProfitBonus).toFixed(2)
            profitBonus = Number(profitBonus).toFixed(2)
            agentProfit = Number(agentProfit).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            transfer = Number(transfer).toFixed(2)
            profit = Number(profit).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            this.count1 = {userCode,userName, agentTurnoverBonus,turnoverBonus,playerBonus,agentProfitBonus, profitBonus,agentProfit,winLose,wallet,transfer,profit,turnover,tag}
            this.count.firstColumn = '总计' 
            
            this.getTemList1()
            this.countList1 = [turnover,playerBonus,agentTurnoverBonus,agentProfitBonus,turnoverBonus,profitBonus,wallet,transfer,winLose,agentProfit,profit]
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

.flex{
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  .item{
    width: 200px;
  }
}

.page{
  margin-bottom: 10px;
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
  ::v-deep .el-table td{
    padding: 0 !important;
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