<template>
  
  <el-dialog :title="$t('MemberProfitDetail')" :visible="DetDialog_" center width="98%"  @close="closeEdit">
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
            data.game.toLowerCase().includes(search.toLowerCase()) ||
            data.gameNo.toLowerCase().includes(search.toLowerCase()) ||
            data.type.toLowerCase().includes(search.toLowerCase()) ||
            data.bet.toLowerCase().includes(search.toLowerCase()) ||
            data.odds.toLowerCase().includes(search.toLowerCase()) ||
            data.status.toLowerCase().includes(search.toLowerCase()) ||
            data.wallet.toLowerCase().includes(search.toLowerCase()) ||
            data.winLose.toLowerCase().includes(search.toLowerCase()) ||
            data.time.toLowerCase().includes(search.toLowerCase()) ||
            data.turnover.toLowerCase().includes(search.toLowerCase()) 
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{   }"
    >

      <el-table-column
        :label="$t('GameOne')"
        align="center"
        prop=""
      >
      <el-table-column
        :label="$t('Game')"
        align="center"
        prop="game"
        sortable
      >
        <template slot-scope="scope">
          <span>{{scope.row.game}} </span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('Nper')"
        align="center"
        prop="gameNo"
         sortable
      >
      </el-table-column>

      <el-table-column
        :label="$t('Type')"
        align="center"
        prop="type"
         sortable
      >
      </el-table-column>

      <el-table-column
        :label="$t('Bet')"
        align="center"
        prop="bet"
         sortable
      >
      </el-table-column>
      <el-table-column
        :label="$t('Odds')"
        align="center"
        prop="odds"
         sortable
      >
      </el-table-column>
      <el-table-column
        :label="$t('Status')"
        align="center"
        prop="status"
         sortable
      >
      </el-table-column>

      <el-table-column
         :label="$t('Wallet')"
        align="center"
        prop="wallet"
         sortable
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
        :label="$t('WinLose')"
        align="center"
        prop="winLose"
         sortable
      >
      </el-table-column>

      <el-table-column
        :label="$t('Time')"
        align="center"
        prop="time"
        sort-by="time"
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

    <div class="flex">
      <div class="item">
        <el-input v-model="search1" :placeholder="$t('InputTip.SearchKey')"  @input="searchTable1"> </el-input>
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
            data.game.toLowerCase().includes(search1.toLowerCase()) ||
            data.gameNo.toLowerCase().includes(search1.toLowerCase()) ||
            data.team.toLowerCase().includes(search1.toLowerCase()) ||
            data.type.toLowerCase().includes(search1.toLowerCase()) ||
            data.bet.toLowerCase().includes(search1.toLowerCase()) ||
            data.odds.toLowerCase().includes(search1.toLowerCase()) ||
            data.status.toLowerCase().includes(search1.toLowerCase()) ||
            data.turnover.toLowerCase().includes(search1.toLowerCase()) ||
            data.winLose.toLowerCase().includes(search1.toLowerCase()) ||
            data.time.toLowerCase().includes(search1.toLowerCase()) 
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{   }"
    >

      <el-table-column
        :label="$t('GameTwo')"
        align="center"
        prop=""
      >
      <el-table-column
        :label="$t('Game')"
        align="center"
        prop="game"
        sortable
      >
        <template slot-scope="scope">
          <span>{{scope.row.game}} </span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('Games')"
        align="center"
        prop="gameNo"
         sortable
      >
      </el-table-column>

      <el-table-column
        :label="$t('Type')"
        align="center"
        prop="type"
         sortable
      >
      </el-table-column>
      <el-table-column
        :label="$t('Team')"
        align="center"
        prop="team"
         sortable
      >
      </el-table-column>

      <el-table-column
        :label="$t('Bet')"
        align="center"
        prop="bet"
         sortable
      >
      </el-table-column>
      <el-table-column
        :label="$t('Odds')"
        align="center"
        prop="odds"
         sortable
      >
      </el-table-column>
      <el-table-column
        :label="$t('Status')"
        align="center"
        prop="status"
         sortable
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
        :label="$t('WinLose')"
        align="center"
        prop="winLose"
         sortable
      >
      </el-table-column>

      <el-table-column
        :label="$t('Time')"
        align="center"
        prop="time"
        sort-by="time"
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

    <div class="flex">
      <div class="item">
        <el-input v-model="search2" :placeholder="$t('InputTip.SearchKey')" @input="searchTable2"> </el-input>
      </div>
    </div>
    <div class="Pdiv">
      <div class="Cdiv">
        <el-table
      v-loading="listLoading"
      :data="
        temList2.filter(
          (data) =>
            !search2 ||
            data.game.toLowerCase().includes(search2.toLowerCase()) ||
            data.transferType.toLowerCase().includes(search2.toLowerCase()) ||
            data.time.toLowerCase().includes(search2.toLowerCase()) ||
            data.point.toLowerCase().includes(search2.toLowerCase()) 
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{   }"
    >

      <el-table-column
        :label="$t('Transfer')"
        align="center"
        prop=""
      >
      <el-table-column
        :label="$t('Game')"
        align="center"
        prop="game"
        sortable
      >
        <template slot-scope="scope">
          <span v-if="scope.row.time">{{scope.row.game}} </span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('Type')"
        align="center"
        prop="transferType"
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
        :label="$t('Time')"
        align="center"
        prop="time"
        sort-by="time"
        sortable
      >
      </el-table-column>
      </el-table-column>  
    </el-table>
        <div class="footer_div">
            <div>{{$t('TotalOf')}}</div>
            <div v-for="(item,index) in countList2" :key="index">{{item}}</div>
          </div>
      </div>
    </div>
    
    <div class="page">
      <el-pagination 
        @size-change="handleSizeChange2" 
        @current-change="handleCurrentChange2" 
        :current-page="currentPage2" 
        :page-sizes="pageSizes2" 
        :page-size="PageSize2" layout="total, sizes, prev, pager, next, jumper" 
        :total="totalCount2">
      </el-pagination>
    </div>
  </el-dialog>
</template>
<script>
import { getWindingMemberDetail , getMemberTxnFB , getMemberTransferTxn} from "@/api/user";
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
      listLoading: false,
      memberList: [],//会员列表
      agencypList: [],//代理列表

      detailShow:false,//明细开关

      // 分页
      search:'',
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
      search1:'',
      // 总数据
      memberList1: [],
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

      // 分页2
      search2:'',
      // 总数据
      memberList2: [],
      // 展示数据
      temList2:[],
      // 默认显示第几页
      currentPage2:1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount2:1,
      // 个数选择器（可修改）
      pageSizes2:[5,10,20,30],
      // 默认每页显示的条数（可修改）
      PageSize2:10,

      count2:{},//总计

      countList:[],
      countList1:[],
      countList2:[],

      searchList:[],//搜索列表
      searchList1:[],//搜索列表
      searchList2:[],//搜索列表
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
      // this.temList.push(this.count)
    },

    // 搜索List
    searchTable(){

      if(this.search){
        this.searchList = this.memberList.filter(
          (data) =>
              !this.search ||
              data.game.toLowerCase().includes(this.search.toLowerCase()) ||
              data.gameNo.toLowerCase().includes(this.search.toLowerCase()) ||
              data.type.toLowerCase().includes(this.search.toLowerCase()) ||
              data.bet.toLowerCase().includes(this.search.toLowerCase()) ||
              data.odds.toLowerCase().includes(this.search.toLowerCase()) ||
              data.status.toLowerCase().includes(this.search.toLowerCase()) ||
              data.wallet.toLowerCase().includes(this.search.toLowerCase()) ||
              data.winLose.toLowerCase().includes(this.search.toLowerCase()) ||
              data.turnover.toLowerCase().includes(this.search.toLowerCase()) 

        )
        this.currentPage=1
        this.countDeatil(this.searchList)
        
      }else{
        this.countDeatil(this.memberList)
      }
    },
    // 计算总计
    countDeatil(list){
      this.totalCount = list.length
        
        let userCode = '';
        let userName = '';
        let bet = 0;
        let odds = '';
        let turnover = 0;
        let winLose = 0;
        let wallet = 0;
        let gameNo = '';
        let type = '';
        let time = '';
        let status = '';
        list.forEach(item=>{
          bet += Number(item.bet)
          turnover += Number(item.turnover)
          winLose += Number(item.winLose)
          wallet += Number(item.wallet)
        })
        bet = Number(bet).toFixed(2)
        turnover = Number(turnover).toFixed(2)
        winLose = Number(winLose).toFixed(2)
        wallet = Number(wallet).toFixed(2)
        this.count = {userCode,userName, bet, turnover,winLose,wallet}
        this.count.firstColumn = '总计' 
        this.temList =  list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
        this.countList = [gameNo,type,bet,odds,status,wallet,turnover,winLose,time]
    },

    // 111
    //每页显示的条数
    handleSizeChange1(val) {
        // 改变每页显示的条数 
        this.PageSize1=val
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.currentPage1=1
        this.getTemList1()
    },
    //显示第几页
    handleCurrentChange1(val) {
      console.log(val,'val');
        //改变默认的页数
        this.currentPage1=val
        this.getTemList1()
        console.log(this.currentPage1,'this.curpage');
    },
    getTemList1(){
      this.temList1 =  this.memberList1.slice((this.currentPage1-1)*this.PageSize1,this.currentPage1*this.PageSize1)
      // this.temList1.push(this.count1)
    },
    // 搜索List
    searchTable1(){

      if(this.search1){
        this.searchList1 = this.memberList1.filter(
          (data) =>
              !this.search1 ||
            data.game.toLowerCase().includes(search1.toLowerCase()) ||
            data.gameNo.toLowerCase().includes(search1.toLowerCase()) ||
            data.team.toLowerCase().includes(search1.toLowerCase()) ||
            data.type.toLowerCase().includes(search1.toLowerCase()) ||
            data.bet.toLowerCase().includes(search1.toLowerCase()) ||
            data.odds.toLowerCase().includes(search1.toLowerCase()) ||
            data.status.toLowerCase().includes(search1.toLowerCase()) ||
            data.turnover.toLowerCase().includes(search1.toLowerCase()) ||
            data.winLose.toLowerCase().includes(search1.toLowerCase()) ||
            data.time.toLowerCase().includes(search1.toLowerCase()) 

        )
        this.countDeatil1(this.searchList1)
        
      }else{
        this.countDeatil1(this.memberList1)
      }
    },
    // 计算总计
    countDeatil1(list){
      this.totalCount1 = list.length
        
      let game = 0;
      let odds = '';
      let bet = 0;
      let team = '';
      let turnover = 0;
      let winLose = 0;
      let gameNo = '';
      let type = '';
      let time = '';
      let status = '';
      list.forEach(item=>{
        game += Number(item.game)
        status += Number(item.status)
        bet += Number(item.bet)
        turnover += Number(item.turnover)
        winLose += Number(item.winLose)
      })
      game = Number(game).toFixed(2)
      status = Number(status).toFixed(2)
      bet = Number(bet).toFixed(2)
      turnover = Number(turnover).toFixed(2)
      winLose = Number(winLose).toFixed(2)
      this.count1 = {game,gameNo,type,odds,team,status, bet, turnover,winLose}
      this.count1.firstColumn = '总计' 
      this.temList1 =  list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.countList1 = [gameNo,type,team,bet,odds,status,turnover,winLose,time]
    },

    // 222
    //每页显示的条数
    handleSizeChange2(val) {
        // 改变每页显示的条数 
        this.PageSize2=val
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.currentPage2=1
        this.getTemList1()
    },
    //显示第几页
    handleCurrentChange2(val) {
      console.log(val,'val');
        //改变默认的页数
        this.currentPage2=val
        this.getTemList2()
    },
    getTemList2(){
      this.temList2 =  this.memberList2.slice((this.currentPage2-1)*this.PageSize2,this.currentPage2*this.PageSize2)
      // this.temList2.push(this.count2)
    },
    // 搜索List
    searchTable2(){

      if(this.search2){
        this.searchList2 = this.memberList2.filter(
          (data) =>
              !this.search2 ||
            data.game.toLowerCase().includes(search2.toLowerCase()) ||
            data.transferType.toLowerCase().includes(search2.toLowerCase()) ||
            data.time.toLowerCase().includes(search2.toLowerCase()) ||
            data.point.toLowerCase().includes(search2.toLowerCase())  

        )
        this.countDeatil1(this.searchList2)
        
      }else{
        this.countDeatil1(this.memberList2)
      }
    },
    // 计算总计
    countDeatil2(list){
      this.totalCount2 = list.length
        
      let game = 0;
      let transferType = '';
      let point = 0;
      let time = '';
      list.forEach(item=>{
        game += Number(item.game)
        point += Number(item.point)
      })
      game = Number(game).toFixed(2)
      point = Number(point).toFixed(2)
      this.count2 = {game, transferType, point}
      this.temList2 =  list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.countList2 = [transferType,point,time,]
    },

    getList(gnuserId,fromDate,toDate) {
      this.currentPage = 1
      if (this.fromDate && this.toDate) {
        this.listLoading = true;
        getWindingMemberDetail({ gnuserId:gnuserId, fromDate:fromDate, toDate:toDate })
          .then((res) => {
            this.memberList = res.data;
            this.totalCount = res.data.length

            let userCode = '';
            let userName = '';
            let bet = 0;
            let odds = '';
            let turnover = 0;
            let winLose = 0;
            let wallet = 0;
            let gameNo = '';
            let type = '';
            let time = '';
            let status = '';
            this.memberList.forEach(item=>{
              bet += Number(item.bet)
              turnover += Number(item.turnover)
              winLose += Number(item.winLose)
              wallet += Number(item.wallet)
            })
            bet = Number(bet).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            this.count = {userCode,userName, bet, turnover,winLose,wallet}
            this.count.firstColumn = '总计' 
            this.getTemList()
            this.countList = [gameNo,type,bet,odds,status,wallet,turnover,winLose,time]

            this.listLoading = false;
          })
          .catch((err) => {
            this.listLoading = false;
            console.log(err);
          });
          // 游戏2
        getMemberTxnFB({ gnuserId:gnuserId, fromDate:fromDate, toDate:toDate })
          .then((res) => {
            this.memberList1 = res.data;
            this.totalCount1 = res.data.length

             let game = 0;
            let odds = '';
            let bet = 0;
            let team = '';
            let turnover = 0;
            let winLose = 0;
            let gameNo = '';
            let type = '';
            let time = '';
            let status = '';
            this.memberList1.forEach(item=>{
              game += Number(item.game)
              status += Number(item.status)
              bet += Number(item.bet)
              turnover += Number(item.turnover)
              winLose += Number(item.winLose)
            })
            game = Number(game).toFixed(2)
            status = Number(status).toFixed(2)
            bet = Number(bet).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            this.count1 = {game,gameNo,type,odds,team,status, bet, turnover,winLose}
            this.count1.firstColumn = '总计' 
            this.getTemList1()
            this.countList1 = [gameNo,type,team,bet,odds,status,turnover,winLose,time]

            this.listLoading = false;
          })
          .catch((err) => {
            this.listLoading = false;
            console.log(err);
          });
          // 积分转移
        getMemberTransferTxn({ gnuserId:gnuserId, fromDate:fromDate, toDate:toDate })
          .then((res) => {
            this.memberList2 = res.data;
            this.totalCount2 = res.data.length

            let game = 0;
            let transferType = '';
            let point = 0;
            let time = '';
            this.memberList2.forEach(item=>{
              game += Number(item.game)
              point += Number(item.point)
            })
            game = Number(game).toFixed(2)
            point = Number(point).toFixed(2)
            this.count2 = {game, transferType, point}
            this.count2.firstColumn = '总计' 
            this.getTemList2()
            this.countList2 = [transferType,point,time,]
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
  // .app-container{
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
    
    
  // }
} 
</style>