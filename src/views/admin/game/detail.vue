<template>
  
  <el-dialog title="游戏明细" :visible="DetDialog_" center width="95%"  @close="closeEdit">
    <div class="flex_box">
      <div class="item">
        <el-input v-model="search" placeholder="输入关键字搜索"> </el-input>
      </div>
    </div>
    <!-- 牛牛 -->
    <div v-if="nowGame == 'G01' ">
      <el-table
        v-loading="listLoading"
        :data="
          temList.filter(
            (data) =>
              !search ||
              data.playerName.toLowerCase().includes(search.toLowerCase()) ||
              data.betType.toLowerCase().includes(search.toLowerCase()) ||
              data.packetPoint.toLowerCase().includes(search.toLowerCase()) ||
              data.packetType.toLowerCase().includes(search.toLowerCase()) ||
              data.multiply.toLowerCase().includes(search.toLowerCase()) ||
              data.status.toLowerCase().includes(search.toLowerCase()) ||
              data.bet.toLowerCase().includes(search.toLowerCase()) 
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
          label="会员名"
          align="center"
          prop="playerName"
          sortable
        >
          <template slot-scope="scope">
            <span v-if="scope.row.tag" style="font-size:20px;font-weight: bold;">总计</span>
            <span v-else>{{scope.row.playerName}} </span>
          </template>
        </el-table-column>

        <el-table-column
          label="类型"
          align="center"
          prop="betType"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="下注"
          align="center"
          prop="bet"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="包点数"
          align="center"
          prop="packetPoint"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="包名称"
          align="center"
          prop="packetType"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="倍数"
          align="center"
          prop="multiply"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="结果"
          align="center"
          prop="status"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="输赢"
          align="center"
          prop="winLose"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="上庄费"
          align="center"
          prop="hostFee"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="服务费"
          align="center"
          prop="serviceFee"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="带包费"
          align="center"
          prop="packetFee"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="赢抽水"
          align="center"
          prop="winFee"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="总输赢"
          align="center"
          prop="totalWinLose"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="流水"
          align="center"
          prop="turnover"
          sort-by="turnover"
          sortable
        >
        </el-table-column>
          
      </el-table>
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
    </div>
    <!-- 球网 -->
    <div v-if="nowGame == 'G02' ">
      <el-table
        v-loading="listLoading"
        :data="
          temList.filter(
            (data) =>
              !search ||
              data.playerName.toLowerCase().includes(search.toLowerCase()) ||
              data.betType.toLowerCase().includes(search.toLowerCase()) ||
              data.team.toLowerCase().includes(search.toLowerCase()) ||
              data.bet.toLowerCase().includes(search.toLowerCase()) ||
              data.odds.toLowerCase().includes(search.toLowerCase()) ||
              data.status.toLowerCase().includes(search.toLowerCase()) 
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
          label="会员名"
          align="center"
          prop="playerName"
          sortable
        >
          <template slot-scope="scope">
             <span v-if="scope.row.tag" style="font-size:20px;font-weight: bold;">总计</span>
            <span v-else>{{scope.row.playerName}} </span>
          </template>
        </el-table-column>

        <el-table-column
          label="类型"
          align="center"
          prop="betType"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="球队"
          align="center"
          prop="team"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="下注"
          align="center"
          prop="bet"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="赔率"
          align="center"
          prop="odds"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="结果"
          align="center"
          prop="status"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="输赢"
          align="center"
          prop="winLose"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="流水"
          align="center"
          prop="turnover"
          sort-by="turnover"
          sortable
        >
        </el-table-column>
          
      </el-table>
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
    </div>
    <!-- ETH -->
    <div v-if="nowGame == 'G03' ">
      <el-table
        v-loading="listLoading"
        :data="
          temList.filter(
            (data) =>
              !search ||
              data.playerName.toLowerCase().includes(search.toLowerCase()) ||
              data.betType.toLowerCase().includes(search.toLowerCase()) ||
              data.bet.toLowerCase().includes(search.toLowerCase()) ||
              data.odds.toLowerCase().includes(search.toLowerCase()) ||
              data.status.toLowerCase().includes(search.toLowerCase()) 
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
          label="会员名"
          align="center"
          prop="playerName"
          sortable
        >
          <template slot-scope="scope">
             <span v-if="scope.row.tag" style="font-size:20px;font-weight: bold;">总计</span>
            <span v-else>{{scope.row.playerName}} </span>
          </template>
        </el-table-column>

        <el-table-column
          label="类型"
          align="center"
          prop="betType"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="下注"
          align="center"
          prop="bet"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="赔率"
          align="center"
          prop="odds"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="结果"
          align="center"
          prop="status"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="输赢"
          align="center"
          prop="winLose"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="流水"
          align="center"
          prop="turnover"
          sort-by="turnover"
          sortable
        >
        </el-table-column>
          
      </el-table>
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
    </div>
    <!-- 麻将 -->
    <div v-if="nowGame == 'G04' ">
      <el-table
        v-loading="listLoading"
        :data="
          temList.filter(
            (data) =>
              !search ||
              data.playerName.toLowerCase().includes(search.toLowerCase()) ||
              data.status.toLowerCase().includes(search.toLowerCase()) 
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
          label="会员名"
          align="center"
          prop="playerName"
          sortable
        >
          <template slot-scope="scope">
             <span v-if="scope.row.tag" style="font-size:20px;font-weight: bold;">总计</span>
            <span v-else>{{scope.row.playerName}} </span>
          </template>
        </el-table-column>

        <el-table-column
          label="结果"
          align="center"
          prop="status"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="赢抽水"
          align="center"
          prop="water"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="输赢"
          align="center"
          prop="winLose"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="流水"
          align="center"
          prop="turnover"
          sort-by="turnover"
          sortable
        >
        </el-table-column>
          
      </el-table>
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
    </div>
  </el-dialog>
</template>
<script>
import { getGameTxn } from "@/api/member";
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
      // memberList: [],//会员列表
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

      nowGame:'',
      search:'',
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
        this.getTemList()
    },
    //显示第几页
    handleCurrentChange(val) {
      console.log(val,'val');
        //改变默认的页数
        this.currentPage=val
        this.getTemList()
        console.log(this.currentPage,'this.curpage');
    },
    getTemList(){
      this.temList =  this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.temList.push(this.count)
    },

    getList(gametxnId,gameCode,fromDate,toDate,nowGame) {
      this.search = ''
      this.nowGame = nowGame
      let _this = this
      console.log(this.DetDialog,this.gnuserId,this.fromDate,this.toDate);
      if (this.fromDate && this.toDate) {
        this.listLoading = true;
        getGameTxn({ gametxnId:gametxnId,gameCode:gameCode})
          .then((res) => {
            console.log(res,'游戏明细总结');
            this.memberList = res.data;
            this.totalCount = res.data.length
            
            let playerName = '';
            let betType = '';
            let packetType = '';
            let team = '';
            let multiply = '';
            let status = '';
            let odds = '';
            let bet = 0;
            let packetPoint = 0;
            let serviceFee = 0;
            let turnover = 0;
            let winLose = 0;
            let hostFee = 0;
            let packetFee = 0;
            let winFee = 0;
            let totalWinLose = 0;
            let tag = true
            this.memberList.forEach(item=>{
              bet += Number(item.bet)
              packetPoint += Number(item.packetPoint)
              serviceFee += Number(item.serviceFee)
              turnover += Number(item.turnover)
              winLose += Number(item.winLose)
              hostFee += Number(item.hostFee)
              packetFee += Number(item.packetFee)
              winFee += Number(item.winFee)
              totalWinLose += Number(item.totalWinLose)
            })
            bet = Number(bet).toFixed(2)
            packetPoint = Number(packetPoint).toFixed(2)
            serviceFee = Number(serviceFee).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            hostFee = Number(hostFee).toFixed(2)
            winFee = Number(winFee).toFixed(2)
            packetFee = Number(packetFee).toFixed(2)
            totalWinLose = Number(totalWinLose).toFixed(2)
            this.count = {playerName,team, betType,packetType,multiply,status,bet,packetPoint,serviceFee,tag, turnover,winLose,odds,hostFee,packetFee,totalWinLose,winFee}
            this.count.firstColumn = '总计' 
            this.getTemList()

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

.flex_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
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
</style>