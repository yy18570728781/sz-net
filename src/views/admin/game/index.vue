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
        <el-select  v-model="searchFrom.gameCode" @change="getList" placeholder="Please select type " >
          <el-option
            v-for="item in gameList"  
            :key="item.code"
            :label="item.description"
            :value="item.code"
          />
        </el-select>
      </div>
      <!-- <div class="item">
        <el-button type="primary" @click="getList" v-loading.fullscreen.lock="butLoading">搜索</el-button>
      </div> -->
      
    </div>
    <!-- 牛牛 -->
    <div v-if="nowGame == 'G01' ">
      <el-table
        v-loading="listLoading"  
        :data="temList"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        ref="filterTable"
        :default-sort="{ prop: 'userName', order: 'descending' }"
      >
        <el-table-column
          label="操作"
          align="center"
          prop=""
          sortable
        > 
          <template slot-scope="scope">
            <el-button v-if="scope.row.gametxnId" type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
            <span v-else style="font-size:20px;font-weight: bold;">总计</span>
          </template>
          
        </el-table-column>
        <el-table-column
          label="场数"
          align="center"
          prop="gameNo"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="人数 "
          align="center"
          prop="totalPlayer"
          sort-by="totalPlayer"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="上庄费"
          align="center"
          prop="hostFee"
        >
        </el-table-column>

        <el-table-column
          label="服务费"
          align="center"
          prop="serviceFee"
        >
        </el-table-column>

        <el-table-column
          label="庄赢抽水"
          align="center"
          prop="bankerWinFee"
          sort-by="bankerWinFee"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="闲赢抽水"
          align="center"
          prop="playerWinFee"
          sort-by="playerWinFee"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="带包费"
          align="center"
          prop="packetFee"
          sort-by="packetFee"
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
        <el-table-column
          label="时间"
          align="center"
          prop="drawDate"
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
        :data="temList"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        ref="filterTable"
        :default-sort="{ prop: 'userName', order: 'descending' }"
      >
        <el-table-column
          label="操作"
          align="center"
          prop=""
          sortable
        > 
          <template slot-scope="scope">
            <el-button v-if="scope.row.gametxnId" type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
            <span v-else style="font-size:20px;font-weight: bold;">总计</span>
          </template>
          
        </el-table-column>
        <el-table-column
          label="联赛"
          align="center"
          prop="league"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="主队 "
          align="center"
          prop="homeTeam"
          sort-by="homeTeam"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="客队"
          align="center"
          prop="awayTeam"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="比分"
          align="center"
          prop="scoreResult"
          sortable
        >
        </el-table-column>

        <el-table-column
          label="下注人数"
          align="center"
          prop="totalPlayer"
          sort-by="totalPlayer"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="输赢"
          align="center"
          prop="winlose"
          sort-by="winlose"
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
        <el-table-column
          label="球赛时间"
          align="center"
          prop="gameDate"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="结算时间"
          align="center"
          prop="resultDate"
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
        :data="temList"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        ref="filterTable"
        :default-sort="{ prop: 'userName', order: 'descending' }"
      >
        <el-table-column
          label="操作"
          align="center"
          prop=""
          sortable
        > 
          <template slot-scope="scope">
            <el-button v-if="scope.row.gametxnId" type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
            <span v-else style="font-size:20px;font-weight: bold;">总计</span>
          </template>
          
        </el-table-column>
        <el-table-column
          label="期数"
          align="center"
          prop="gameNo"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="人数 "
          align="center"
          prop="totalPlayer"
          sort-by="totalPlayer"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="输赢"
          align="center"
          prop="winlose"
          sort-by="winlose"
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
        <el-table-column
          label="时间"
          align="center"
          prop="drawDate"
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
        :data="temList"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        ref="filterTable"
        :default-sort="{ prop: 'userName', order: 'descending' }"
      >
        <el-table-column
          label="操作"
          align="center"
          prop=""
          sortable
        > 
          <template slot-scope="scope">
            <el-button v-if="scope.row.gametxnId" type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
            <span v-else style="font-size:20px;font-weight: bold;">总计</span>
          </template>
          
        </el-table-column>
        <el-table-column
          label="期数"
          align="center"
          prop="gameNo"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="人数 "
          align="center"
          prop="totalPlayer"
          sort-by="totalPlayer"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="赢抽水"
          align="center"
          prop="water"
          sort-by="water"
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
        <el-table-column
          label="时间"
          align="center"
          prop="drawDate"
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
    <!-- 总结明细 -->
    <Detail ref="detail" @changeDetDialog="changeDetDialog" :DetDialog="DetDialog"  :fromDate="searchFrom.fromDate" :toDate="searchFrom.toDate" :DetailFrom="DetailFrom"></Detail>
  </div>
</template>
<script>
import { getDrlGame  , getDrlWeek , getGameTxnSum} from "@/api/member";
import Detail from './detail.vue'
export default {
  name: "userCredit",
  components:{Detail},
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
      
    };
  },
  async created(){
    
    

    let  userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userInfo = userInfo
    
    getDrlGame()
    .then((res) => {
      if(res.code == 0){
        this.gameList = res.data;
        console.log(this.gameList,'gameList');
        this.searchFrom.gameCode = this.gameList[0].code
        this.nowGame = this.gameList[0].code
        
        console.log(res,'游戏类型列表');
        // this.getList()
        getDrlWeek()
        .then((res) => {
          if(res.code == 0){
            this.dataList = res.data;
            this.searchFrom.showDate = this.dataList[0].showDate
            this.searchFrom.fromDate = this.dataList[0].fromDate
            this.searchFrom.toDate = this.dataList[0].toDate
            
            console.log(this.dataList,'时间列表');
            this.getList()
          }
          
        })
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
      console.log(proNum);
      this.searchFrom.fromDate = this.dataList[proNum].fromDate
      this.searchFrom.toDate = this.dataList[proNum].toDate
      this.getList()
    },

    changeShow(row){
      console.log(row);
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
        console.log(val,'条数');
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
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.temList.push(this.count)
    },
    
    getList(){
      this.nowGame = this.searchFrom.gameCode
      this.butLoading = true
      let _this = this

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate , gameCode } = this.searchFrom;
        // 牛牛
        getGameTxnSum({ gameCode, fromDate, toDate })
          .then((res) => {
            this.butLoading = false
            console.log(res,'游戏');
            this.pointList = res.data;

            let gameNo = '';
            let totalPlayer = 0;
            let hostFee = 0;
            let serviceFee = 0;
            let bankerWinFee = 0;
            let playerWinFee = 0;
            let packetFee = 0;
            let turnover = 0;
            let winLose = 0;
            let water = 0;
            let drawDate = '';
            this.pointList.forEach(item=>{
              totalPlayer += Number(item.totalPlayer)
              hostFee += Number(item.hostFee)
              serviceFee += Number(item.serviceFee)
              bankerWinFee += Number(item.bankerWinFee)
              playerWinFee += Number(item.playerWinFee)
              turnover += Number(item.turnover)
              winLose += Number(item.winLose)
              water += Number(item.water)
              packetFee += Number(item.packetFee)
            })
            totalPlayer = Number(totalPlayer).toFixed(2)
            hostFee = Number(hostFee).toFixed(2)
            serviceFee = Number(serviceFee).toFixed(2)
            bankerWinFee = Number(bankerWinFee).toFixed(2)
            playerWinFee = Number(playerWinFee).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            water = Number(water).toFixed(2)
            packetFee = Number(packetFee).toFixed(2)
            this.count = { gameNo,totalPlayer,hostFee,serviceFee, bankerWinFee,playerWinFee,turnover,winLose,water,packetFee,drawDate}
            this.count.firstColumn = '总计' 
            this.getTemList()
            this.totalCount = res.data.length
            this.listLoading = false;
          })
        // 球网
        getGameTxnSum({ gameCode, fromDate, toDate })
          .then((res) => {
            this.butLoading = false
            console.log(res,'游戏');
            this.pointList = res.data;

            let gameNo = '';
            let totalPlayer = 0;
            let hostFee = 0;
            let serviceFee = 0;
            let bankerWinFee = 0;
            let playerWinFee = 0;
            let packetFee = 0;
            let turnover = 0;
            let winlose = 0;
            let drawDate = '';
            this.pointList.forEach(item=>{
              totalPlayer += Number(item.totalPlayer)
              hostFee += Number(item.hostFee)
              serviceFee += Number(item.serviceFee)
              bankerWinFee += Number(item.bankerWinFee)
              playerWinFee += Number(item.playerWinFee)
              turnover += Number(item.turnover)
              winlose += Number(item.winlose)
              packetFee += Number(item.packetFee)
            })
            totalPlayer = Number(totalPlayer).toFixed(2)
            hostFee = Number(hostFee).toFixed(2)
            serviceFee = Number(serviceFee).toFixed(2)
            bankerWinFee = Number(bankerWinFee).toFixed(2)
            playerWinFee = Number(playerWinFee).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            winlose = Number(winlose).toFixed(2)
            packetFee = Number(packetFee).toFixed(2)
            this.count = { gameNo,totalPlayer,hostFee,serviceFee, bankerWinFee,playerWinFee,winlose,turnover,packetFee,drawDate}
            this.count.firstColumn = '总计' 
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