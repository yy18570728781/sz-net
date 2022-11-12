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
            v-for="item in typeList"
            :key="item.value"
            :label="item.description"
            :value="item.description"
          />
        </el-select>
      </div>
      
    </div>

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
      > 
        <template slot-scope="scope">
          <el-button v-if="scope.row.gnuserId" type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
          <span v-else>总结</span>
        </template>
        
       </el-table-column>
       <el-table-column
        label="代理名"
        align="center"
        prop="agentName"
      >
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
      >
      </el-table-column>

      <el-table-column
        label="流水"
        align="center"
        prop="turnover"
      >
      </el-table-column>

      <el-table-column
        label="利润提成"
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
        label="输赢"
        align="center"
        prop="winLose"
      >
      </el-table-column>
      <el-table-column
        label="总结"
        align="center"
        prop="profit"
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
    <!-- 总结明细 -->
    <Detail ref="detail" @changeDetDialog="changeDetDialog" :DetDialog="DetDialog"  :fromDate="searchFrom.fromDate" :toDate="searchFrom.toDate" :DetailFrom="DetailFrom"></Detail>
  </div>
</template>
<script>
import { getWindingMember , getMemberProfit , getDrlWeek, getDrlMemberType} from "@/api/user";
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
      typeList:[],//用户类型列表

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
        
        console.log(this.dataList,'时间列表');
        this.getList()
      }
    })
    getDrlMemberType()
    .then((res) => {
      if(res.code == 0){
        this.typeList = res.data;
        this.searchFrom.userType = this.typeList[0].description
        
        console.log(this.typeList,'用户类型列表');
        // this.getList()
      }
    })
    
  },
  methods: {
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
      this.temList.push(this.count)
    },
    getList() {
      let index1 = this.searchFrom.showDate.indexOf(" - ")
      this.searchFrom.fromDate = this.searchFrom.showDate.substring(0,index1);
      this.searchFrom.toDate = this.searchFrom.showDate.substring(Number(index1) + 3);

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate , userType } = this.searchFrom;
        getMemberProfit({ userType, fromDate, toDate })
          .then((res) => {
            console.log(res,'会员总结');
            this.pointList = res.data;
            // this.pointList = [{gnuserId:'12121'}];

            let turnover = 0;
            let profitBonus = 0;
            let wallet = 0;
            let winLose = 0;
            let profit = 0;
            this.pointList.forEach(item=>{
              turnover += Number(item.turnover)
              profitBonus += Number(item.profitBonus)
              wallet += Number(item.wallet)
              winLose += Number(item.winLose)
              profit += Number(item.profit)
            })
            turnover = Number(turnover).toFixed(2)
            profitBonus = Number(profitBonus).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            profit = Number(profit).toFixed(2)
            this.count = { turnover,profitBonus, wallet,winLose,profit}
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