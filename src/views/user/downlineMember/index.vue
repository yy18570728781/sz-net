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
        <el-input v-model="search" placeholder="输入关键字搜索"> </el-input>
      </div>
    </div>

    <el-table
      v-loading="listLoading"
      :data="
        temList.filter(
          (data) =>
            !search ||
            data.userCode.toLowerCase().includes(search.toLowerCase()) ||
            data.userName.toLowerCase().includes(search.toLowerCase()) 
        )
      "
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
          <el-button v-if="scope.row.gnuserId" type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
          <span v-else style="font-size:20px;font-weight: bold;">总计</span>
        </template>
        
       </el-table-column>
      <el-table-column
        label="会员 ID"
        align="center"
        prop="userCode"
        sort-by="userCode"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="会员名"
        align="center"
        prop="userName"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="备注名"
        align="center"
        prop="userRemark"
        sortable
      >
      </el-table-column>

      <el-table-column
        label="流水"
        align="center"
        prop="turnover"
        sortable
      >
      </el-table-column>


      <el-table-column
        label="会员提成"
        align="center"
        prop="playerProfitBonus"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="我的流水提成"
        align="center"
        prop="turnoverBonus"
        sort-by="turnoverBonus"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="我的利润提成"
        align="center"
        prop="profitBonus"
        sort-by="profitBonus"
        sortable
      >
      </el-table-column>

      <el-table-column
        label="钱包"
        align="center"
        prop="wallet"
        sort-by="wallet"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="积分转移"
        align="center"
        prop="transfer"
        sort-by="transfer"
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
        label="会员总结"
        align="center"
        prop="playerProfit"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="我的总结"
        align="center"
        prop="profit"
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
    <div>
      <p>**玩家总结 = 输赢 + 会员流水提成 + 钱包 + 积分转移</p>
      <p>**我的总结 = 玩家总结 + 我的流水提成 + 我的利润提成</p>
    </div>
    <!-- 总结明细 -->
    <Detail ref="detail" @changeDetDialog="changeDetDialog" :DetDialog="DetDialog"  :fromDate="searchFrom.fromDate" :toDate="searchFrom.toDate" :DetailFrom="DetailFrom"></Detail>
  </div>
</template>
<script>
import { getWindingMember , getWindingMemberDetail , getDrlWeek} from "@/api/user";
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
        
        console.log(this.dataList,'时间列表');
        this.getList()
      }
    })
    
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
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      
      this.$nextTick(()=>{
         this.temList.unshift(this.count)
      })
      console.log(this.temList);
    },

    getList() {

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate } = this.searchFrom;
        getWindingMember({ gnuserId:this.userInfo.gnuserId, fromDate, toDate })
          .then((res) => {
            console.log(res,'下线会员总结');
            this.pointList = res.data;
            this.totalCount = res.data.length
            // this.pointList = [{gnuserId:'12121'}];

            let userCode = 0;
            let userName = 0;
            let turnover = 0;
            let playerProfitBonus = 0;
            let playerProfit = 0;
            let turnoverBonus = 0;
            let profitBonus = 0;
            let wallet = 0;
            let transfer = 0;
            let winLose = 0;
            let profit = 0;
            this.pointList.forEach(item=>{
              userCode += Number(item.userCode)
              userName += Number(item.userName)
              turnover += Number(item.turnover)
              playerProfitBonus += Number(item.playerProfitBonus)
              playerProfit += Number(item.playerProfit)
              turnoverBonus += Number(item.turnoverBonus)
              profitBonus += Number(item.profitBonus)
              wallet += Number(item.wallet)
              transfer += Number(item.transfer)
              winLose += Number(item.winLose)
              profit += Number(item.profit)
            })
            userCode = Number(userCode).toFixed(2)
            userName = Number(userName).toFixed(2)
            turnover = Number(turnover).toFixed(2)
            playerProfitBonus = Number(playerProfitBonus).toFixed(2)
            playerProfit = Number(playerProfit).toFixed(2)
            turnoverBonus = Number(turnoverBonus).toFixed(2)
            profitBonus = Number(profitBonus).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            transfer = Number(transfer).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            profit = Number(profit).toFixed(2)
            this.count = {userCode,userName, turnover,playerProfitBonus,playerProfit,turnoverBonus, profitBonus,wallet,transfer,winLose,profit}
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
</style>