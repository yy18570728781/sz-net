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
        <el-select  v-model="searchFrom.gameCode" @change="yanGetList" placeholder="Please select type " >
          <el-option
            v-for="item in gameList"  
            :key="item.code"
            :label="item.description"
            :value="item.code"
          />
        </el-select>
      </div>
      <div class="item item1">
        <el-input v-model="search" :placeholder="$t('InputTip.SearchKey')"
        @input="searchTable"> </el-input>
      </div>
      <!-- <div class="item">
        <el-button type="primary" @click="getList" v-loading.fullscreen.lock="butLoading">搜索</el-button>
      </div> -->
      
    </div>
    <!-- 牛牛 -->
    <div v-if="nowGame == 'G01' ">
      <div style="width:100%;overflow-x: auto;">
        <div style=" min-width: 1040px;">
          <el-table
            v-loading="listLoading"  
            :data="
              temList.filter(
                (data) =>
                  !search ||
                  data.gameNo.toLowerCase().includes(search.toLowerCase()) ||
                  data.totalPlayer.toLowerCase().includes(search.toLowerCase()) ||
                  data.hostFee.toLowerCase().includes(search.toLowerCase()) ||
                  data.serviceFee.toLowerCase().includes(search.toLowerCase()) ||
                  data.bankerWinFee.toLowerCase().includes(search.toLowerCase()) ||
                  data.playerWinFee.toLowerCase().includes(search.toLowerCase()) ||
                  data.packetFee.toLowerCase().includes(search.toLowerCase()) ||
                  data.turnover.toLowerCase().includes(search.toLowerCase()) ||
                  data.drawDate.toLowerCase().includes(search.toLowerCase()) 
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
              :label="$t('Operation')"
              align="center"
              prop=""
              sortable
            > 
              <template slot-scope="scope">
                <el-button  type="primary" round size="small" @click="changeShow(scope.row)">{{$t('Detail')}}</el-button>
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
              :label="$t('NumberPeople')"
              align="center"
              prop="totalPlayer"
              sort-by="totalPlayer"
              sortable
            >
            </el-table-column>
            <el-table-column
              :label="$t('HostFee')"
              align="center"
              prop="hostFee"
              sortable
            >
            </el-table-column>

            <el-table-column
              :label="$t('ServiceFee')"
              align="center"
              prop="serviceFee"
              sortable
            >
            </el-table-column>

            <el-table-column
              :label="$t('BankerWinFee')"
              align="center"
              prop="bankerWinFee"
              sort-by="bankerWinFee"
              sortable
            >
            </el-table-column>
            <el-table-column
              :label="$t('PlayerWinFee')"
              align="center"
              prop="playerWinFee"
              sort-by="playerWinFee"
              sortable
            >
            </el-table-column>

            <el-table-column
              :label="$t('PacketFee')"
              align="center"
              prop="packetFee"
              sort-by="packetFee"
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
              :label="$t('Time')"
              align="center"
              prop="drawDate"
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
      <div style="width:100%;overflow-x: auto;">
        <div style=" min-width: 1040px;">
          <el-table
        v-loading="listLoading"  
        :data="
          temList.filter(
            (data) =>
              !search ||
              data.league.toLowerCase().includes(search.toLowerCase()) ||
              data.homeTeam.toLowerCase().includes(search.toLowerCase()) ||
              data.scoreResult.toLowerCase().includes(search.toLowerCase()) ||
              data.totalPlayer.toLowerCase().includes(search.toLowerCase()) ||
              data.winlose.toLowerCase().includes(search.toLowerCase()) ||
              data.turnover.toLowerCase().includes(search.toLowerCase()) ||
              data.gameDate.toLowerCase().includes(search.toLowerCase()) ||
              data.resultDate.toLowerCase().includes(search.toLowerCase()) ||
              data.awayTeam.toLowerCase().includes(search.toLowerCase()) 
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
          :label="$t('League')"
          align="center"
          prop="league"
          sortable
        >
        </el-table-column>
        <el-table-column
          :label="$t('HomeTeam')"
          align="center"
          prop="homeTeam"
          sort-by="homeTeam"
          sortable
        >
        </el-table-column>
        <el-table-column
          :label="$t('AwayTeam')"
          align="center"
          prop="awayTeam"
          sortable
        >
        </el-table-column>

        <el-table-column
          :label="$t('ScoreResult')"
          align="center"
          prop="scoreResult"
          sortable
        >
        </el-table-column>

        <el-table-column
          :label="$t('TotalPlayer')"
          align="center"
          prop="totalPlayer"
          sort-by="totalPlayer"
          sortable
        >
        </el-table-column>
        <el-table-column
          :label="$t('WinLose')"
          align="center"
          prop="winlose"
          sort-by="winlose"
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
          :label="$t('GameDate')"
          align="center"
          prop="gameDate"
          sortable
        >
        </el-table-column>
        <el-table-column
          :label="$t('ResultDate')"
          align="center"
          prop="resultDate"
          sortable
        >
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
      <div style="width:100%;overflow-x: auto;">
        <div style=" min-width: 1040px;">
          <el-table
            v-loading="listLoading"  
            :data="
              temList.filter(
                (data) =>
                  !search ||
                  data.gameNo.toLowerCase().includes(search.toLowerCase()) ||
                  data.totalPlayer.toLowerCase().includes(search.toLowerCase()) ||
                  data.winlose.toLowerCase().includes(search.toLowerCase()) ||
                  data.drawDate.toLowerCase().includes(search.toLowerCase()) ||
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
              :label="$t('Operation')"
              align="center"
              prop=""
              sortable
            > 
              <template slot-scope="scope">
                <el-button  type="primary" round size="small" @click="changeShow(scope.row)">{{$t('Detail')}}</el-button>
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
              :label="$t('NumberPeople')"
              align="center"
              prop="totalPlayer"
              sort-by="totalPlayer"
              sortable
            >
            </el-table-column>
            <el-table-column
              :label="$t('WinLose')"
              align="center"
              prop="winlose"
              sort-by="winlose"
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
              :label="$t('Time')"
              align="center"
              prop="drawDate"
              sortable
            >
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
      <div style="width:100%;overflow-x: auto;">
        <div style=" min-width: 1040px;">
          <el-table
            v-loading="listLoading"  
            :data="
              temList.filter(
                (data) =>
                  !search ||
                  data.gameNo.toLowerCase().includes(search.toLowerCase()) ||
                  data.totalPlayer.toLowerCase().includes(search.toLowerCase()) ||
                  data.water.toLowerCase().includes(search.toLowerCase()) ||
                  data.drawDate.toLowerCase().includes(search.toLowerCase()) ||
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
              :label="$t('Operation')"
              align="center"
              prop=""
              sortable
            > 
              <template slot-scope="scope">
                <el-button  type="primary" round size="small" @click="changeShow(scope.row)">{{$t('Detail')}}</el-button>
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
              :label="$t('NumberPeople')"
              align="center"
              prop="totalPlayer"
              sort-by="totalPlayer"
              sortable
            >
            </el-table-column>
            <el-table-column
              :label="$t('Water')"
              align="center"
              prop="water"
              sort-by="water"
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
              :label="$t('Time')"
              align="center"
              prop="drawDate"
              sortable
            >
            </el-table-column>
            
          </el-table>
          <div class="footer_div">
            <div>{{$t('TotalOf')}}</div>
            <div v-for="(item,index) in countList3" :key="index">{{item}}</div>
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
      countList:[],
      countList1:[],
      countList2:[],
      countList3:[],

      search:'',
      searchList:[],//搜索列表
      
    };
  },
  async created(){
    
    

    let  userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userInfo = userInfo
    
    getDrlGame()
    .then((res) => {
      if(res.code == 0){
        this.gameList = res.data;
        this.searchFrom.gameCode = this.gameList[0].code
        this.nowGame = this.gameList[0].code
        
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
    selectChange(value){
      let proNum = this.dataList.findIndex((item, index) =>{
        return item.showDate == value
      })
      this.searchFrom.fromDate = this.dataList[proNum].fromDate
      this.searchFrom.toDate = this.dataList[proNum].toDate
      this.getList()
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
        if(this.nowGame == 'G01'){
          this.searchList = this.pointList.filter(
          (data) =>
            !this.search ||
            data.gameNo.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.totalPlayer.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.hostFee.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.serviceFee.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.bankerWinFee.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.playerWinFee.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.packetFee.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.turnover.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.drawDate.toLowerCase().includes(this.search.toLowerCase())  

          )
        }
        if(this.nowGame == 'G02'){
          this.searchList = this.pointList.filter(
          (data) =>
            !this.search ||
            data.league.toLowerCase().includes(this.search.toLowerCase()) ||
              data.homeTeam.toLowerCase().includes(this.search.toLowerCase()) ||
              data.scoreResult.toLowerCase().includes(this.search.toLowerCase()) ||
              data.totalPlayer.toLowerCase().includes(this.search.toLowerCase()) ||
              data.winlose.toLowerCase().includes(this.search.toLowerCase()) ||
              data.turnover.toLowerCase().includes(this.search.toLowerCase()) ||
              data.gameDate.toLowerCase().includes(this.search.toLowerCase()) ||
              data.resultDate.toLowerCase().includes(this.search.toLowerCase()) ||
              data.awayTeam.toLowerCase().includes(this.search.toLowerCase())
          )
        }
        if(this.nowGame == 'G03'){
          this.searchList = this.pointList.filter(
          (data) =>
            !this.search ||
            data.gameNo.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.totalPlayer.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.winlose.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.drawDate.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.turnover.toLowerCase().includes(this.search.toLowerCase())
          )
        }
        if(this.nowGame == 'G04'){
          this.searchList = this.pointList.filter(
          (data) =>
            !this.search ||
            data.gameNo.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.totalPlayer.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.water.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.drawDate.toLowerCase().includes(this.search.toLowerCase()) ||
                  data.turnover.toLowerCase().includes(this.search.toLowerCase())
          )
        }
        this.currentPage=1
        this.countDeatil(this.searchList)
      }
    },
    // 计算总计
    countDeatil(list){
      this.totalCount = list.length

      let gameNo = '';
            let league = '';
            let awayTeam = '';
            let scoreResult = '';
            let homeTeam = '';
            let totalPlayer = 0;
            let hostFee = 0;
            let serviceFee = 0;
            let bankerWinFee = 0;
            let playerWinFee = 0;
            let packetFee = 0;
            let turnover = 0;
            let winlose = 0;
            let water = 0;
            let drawDate = '';
            let gameDate = '';
            let resultDate = '';
            list.forEach(item=>{
              totalPlayer += Number(item.totalPlayer)
              hostFee += Number(item.hostFee)
              serviceFee += Number(item.serviceFee)
              bankerWinFee += Number(item.bankerWinFee)
              playerWinFee += Number(item.playerWinFee)
              turnover += Number(item.turnover)
              winlose += Number(item.winlose) 
              water += Number(item.water)
              packetFee += Number(item.packetFee)
            })
            totalPlayer = Number(totalPlayer).toFixed(2)
            hostFee = Number(hostFee).toFixed(2)
            serviceFee = Number(serviceFee).toFixed(2)
            bankerWinFee = Number(bankerWinFee).toFixed(2)
            playerWinFee = Number(playerWinFee).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            winlose = Number(winlose).toFixed(2)
            water = Number(water).toFixed(2)
            packetFee = Number(packetFee).toFixed(2)

            this.temList =  list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
            this.countList = [gameNo,totalPlayer,hostFee,serviceFee,bankerWinFee,playerWinFee,packetFee,turnover,drawDate]
            this.countList1 = [league,homeTeam,awayTeam,scoreResult,totalPlayer,winlose,turnover,gameDate,resultDate]
            this.countList2 = [gameNo,totalPlayer,winlose,turnover,drawDate]
            this.countList3 = [gameNo,totalPlayer,water,turnover,drawDate]
    },
    async yanGetList(){
      this.search = ''
      await this.getList()
    },
    getList(){
      this.currentPage = 1
      this.nowGame = this.searchFrom.gameCode
      this.butLoading = true
      this.listLoading = true;
      let _this = this

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {

        const { fromDate, toDate , gameCode } = this.searchFrom;
        // 牛牛
        getGameTxnSum({ gameCode, fromDate, toDate })
          .then((res) => {
            this.butLoading = false
            
            this.pointList = res.data;
            this.totalCount = res.data.length

            let gameNo = '';
            let league = '';
            let awayTeam = '';
            let scoreResult = '';
            let homeTeam = '';
            let totalPlayer = 0;
            let hostFee = 0;
            let serviceFee = 0;
            let bankerWinFee = 0;
            let playerWinFee = 0;
            let packetFee = 0;
            let turnover = 0;
            let winlose = 0;
            let water = 0;
            let drawDate = '';
            let gameDate = '';
            let resultDate = '';
            this.pointList.forEach(item=>{
              totalPlayer += Number(item.totalPlayer)
              hostFee += Number(item.hostFee)
              serviceFee += Number(item.serviceFee)
              bankerWinFee += Number(item.bankerWinFee)
              playerWinFee += Number(item.playerWinFee)
              turnover += Number(item.turnover)
              winlose += Number(item.winlose) 
              water += Number(item.water)
              packetFee += Number(item.packetFee)
            })
            totalPlayer = Number(totalPlayer).toFixed(2)
            hostFee = Number(hostFee).toFixed(2)
            serviceFee = Number(serviceFee).toFixed(2)
            bankerWinFee = Number(bankerWinFee).toFixed(2)
            playerWinFee = Number(playerWinFee).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            winlose = Number(winlose).toFixed(2)
            water = Number(water).toFixed(2)
            packetFee = Number(packetFee).toFixed(2)
            this.count = { league,scoreResult,awayTeam,homeTeam,gameNo,totalPlayer,hostFee,serviceFee, bankerWinFee,playerWinFee,turnover,winlose,water,packetFee,drawDate}
            this.count.firstColumn = '总计' 
            this.getTemList()
            this.countList = [gameNo,totalPlayer,hostFee,serviceFee,bankerWinFee,playerWinFee,packetFee,turnover,drawDate]
            this.countList1 = [league,homeTeam,awayTeam,scoreResult,totalPlayer,winlose,turnover,gameDate,resultDate]
            this.countList2 = [gameNo,totalPlayer,winlose,turnover,drawDate]
            this.countList3 = [gameNo,totalPlayer,water,turnover,drawDate]
            this.listLoading = false;
            
          })
      
      } else {
        this.listLoading = false;
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
      position: static !important;
      
    }
    
    
  // }
} 
</style>