<template>
  <div class="userCredit app-container">
    <div class="flex-box">

      <div class="item">
        <el-select class="select" v-model="searchFrom.showDate" placeholder="Please select time" @change="getList">
          <el-option
            v-for="item in dataList"
            :key="item.showDate"
            :label="item.showDate"
            :value="item.showDate"
          />
        </el-select>
      </div>

      <div class="item">
        <el-select class="select" v-model="searchFrom.userType" placeholder="Please select type " @change="getList">
          <el-option
            v-for="item in gameList"
            :key="item.value"
            :label="item.description"
            :value="item.description"
          />
        </el-select>
      </div>
      
    </div>

    <el-table
      :show-summary="true"
      v-loading="listLoading"  
      :data="temList"
      height="600"
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
      > 
        <template slot-scope="scope">
          <el-button v-if="scope.row.gametxnId" type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
          <span v-else style="fpnt-size:20px">总计</span>
        </template>
        
       </el-table-column>
       <el-table-column
        label="场数"
        align="center"
        prop="gameNo"
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
        label="时间"
        align="center"
        prop="drawDate"
      >
      </el-table-column>
      
    </el-table>
    <!-- <div class="numDiv">
      <div v-for="(item,index) in columnNum" :key="index">
        所有数据总计
      </div>
    </div> -->
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
      gameList:[],//用户类型列表
      

      DetDialog:false,//明细开关
      gametxnId:'',//明细gametxnId

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
        
        console.log(this.dataList,'时间列表');
        this.getList()
      }
      
    })
    getDrlGame()
    .then((res) => {
      if(res.code == 0){
        this.gameList = res.data;
        this.searchFrom.userType = this.gameList[0].description
        
        console.log(res,'游戏类型列表');
        // this.getList()
      }
    })
    
  },
  mounted(){
  },
  methods: {

    changeShow(row){
      console.log(row);
      this.gametxnId = row.gametxnId
      this.DetDialog = true
      this.$refs.detail.getList(this.gametxnId,this.searchFrom.fromDate,this.searchFrom.toDate)
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
      this.temList.unshift(this.count)
    },
    
    getList() {
      let index1 = this.searchFrom.showDate.indexOf(" - ")
      this.searchFrom.fromDate = this.searchFrom.showDate.substring(0,index1);
      this.searchFrom.toDate = this.searchFrom.showDate.substring(Number(index1) + 3);
      

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate , userType } = this.searchFrom;
        getGameTxnSum({ userType, fromDate, toDate })
          .then((res) => {
            console.log(res,'游戏');
            this.pointList = res.data;
            let gameNo = '';
            let totalPlayer = 0;
            let hostFee = 0;
            let serviceFee = 0;
            let bankerWinFee = 0;
            let playerWinFee = 0;
            let packetFee = 0;
            let drawDate = '';
            this.pointList.forEach(item=>{
              totalPlayer += Number(item.totalPlayer)
              hostFee += Number(item.hostFee)
              serviceFee += Number(item.serviceFee)
              bankerWinFee += Number(item.bankerWinFee)
              playerWinFee += Number(item.playerWinFee)
              packetFee += Number(item.packetFee)
            })
            totalPlayer = Number(totalPlayer).toFixed(2)
            hostFee = Number(hostFee).toFixed(2)
            serviceFee = Number(serviceFee).toFixed(2)
            bankerWinFee = Number(bankerWinFee).toFixed(2)
            playerWinFee = Number(playerWinFee).toFixed(2)
            packetFee = Number(packetFee).toFixed(2)
            this.count = { gameNo,totalPlayer,hostFee,serviceFee, bankerWinFee,playerWinFee,packetFee,drawDate}
            this.count.firstColumn = '总计' 
            this.getTemList()
            // this.pointList = [{gnuserId:'12121'}];
            // this.pointList.push(count)
            this.totalCount = res.data.length
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