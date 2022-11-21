<template>
  <div class="userCredit app-container">
    <div class="flex-box">

      <div class="item">
        <el-select class="select" v-model="searchFrom.showDate" placeholder="Please select time" @change="selectChange">
          <el-option
            v-for="(item) in dataList"
            :key="item.showDate"
            :label="item.showDate"
            :value="item.showDate"
          />
        </el-select>
      </div>
      <div class="item">
        <el-select class="select" v-model="searchFrom.userType" placeholder="Please select type " >
          <el-option
            v-for="item in typeList"
            :key="item.value"
            :label="item.description"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="item">
        <el-select class="select" v-model="searchFrom.agentLevel" placeholder="Please select agentLevel " >
          <el-option
            v-for="item in levelaList"
            :key="item.value"
            :label="item.description"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="item">
        <el-button type="primary" @click="getList" v-loading.fullscreen.lock="butLoading">搜索</el-button>
      </div>
      <div class="item item1">
        <el-input v-model="search" placeholder="输入关键字搜索"> </el-input>
      </div>
      
    </div>

    <el-table
      v-loading="listLoading"
      :data="
        temList.filter(
          (data) =>
            !search ||
            data.userName.toLowerCase().includes(search.toLowerCase()) ||
            data.level.toLowerCase().includes(search.toLowerCase()) ||
            data.userType.toLowerCase().includes(search.toLowerCase()) ||
            data.turnover.toLowerCase().includes(search.toLowerCase()) ||
            data.playerBonus.toLowerCase().includes(search.toLowerCase()) 
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
      <!-- <el-table-column
        label="会员 ID"
        align="center"
        prop="userCode"
        sort-by="userCode"
        sortable
      >
      </el-table-column> -->
      <el-table-column
        label="代理名"
        align="center"
        prop="userName"
        sortable
      >
      </el-table-column>

      <el-table-column
        label="类型"
        align="center"
        prop="userType"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="层次"
        align="center"
        prop="level"
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
        label="会员流水提成"
        align="center"
        prop="playerBonus"
        sortable
      >
      </el-table-column>

      <el-table-column
        label="代理流水提成"
        align="center"
        prop="turnoverBonus"
        sort-by="turnoverBonus"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="代理利润提成"
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
        label="总结"
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
    <p>**总结 = 输赢 + 会员流水提成 + 代理流水提成 + + 代理利润提成 + 钱包 +
积分转移</p>
    <!-- 总结明细 -->
    <Detail ref="detail" @changeDetDialog="changeDetDialog" :DetDialog="DetDialog"  :fromDate="searchFrom.fromDate" :toDate="searchFrom.toDate" :DetailFrom="DetailFrom"></Detail>
  </div>
</template>
<script>
import {getAdminAgentSum,getDrlAgentLevela, getDrlWeek, getDrlMemberType} from "@/api/member";
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
        agentLevel:'',
      },
      DetailFrom:{},
      dataList:[],//星期列表
      typeList:[],//用户类型列表
      
      levelaList:[],//等级列表
      

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

      butLoading:false,
      search:'',
    };
  },
  async created(){
    let  userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userInfo = userInfo
    
    getDrlMemberType()
    .then((res) => {
      if(res.code == 0){
        this.typeList = res.data;
        this.searchFrom.userType = this.typeList[0].value
        console.log(res,'用户类型列表');
      }
      getDrlAgentLevela()
      .then((res) => {
        if(res.code == 0){
          this.levelaList = res.data;
          this.searchFrom.agentLevel = this.levelaList[0].value
          console.log(res,'等级列表');
          // this.getList()
        }
        getDrlWeek()
        .then((res) => {
          if(res.code == 0){
            this.dataList = res.data;
            this.searchFrom.showDate = this.dataList[0].showDate
            this.searchFrom.fromDate = this.dataList[0].fromDate
            this.searchFrom.toDate = this.dataList[0].toDate
            console.log(res,'星期');
            this.getList()
          }
        });
      })
    });
    // await this.getList()
    
  },
  methods: {
    selectChange(value){
      let proNum = this.dataList.findIndex((item, index) =>{
        return item.showDate == value
      })
      console.log(proNum);
      this.searchFrom.fromDate = this.dataList[proNum].fromDate
      this.searchFrom.toDate = this.dataList[proNum].toDate
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
      this.temList.push(this.count)
    },

    getList() {
      this.butLoading = true

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate ,agentLevel,userType } = this.searchFrom;
        getAdminAgentSum({ agentLevel, userType,fromDate, toDate })
          .then((res) => {
            this.butLoading = false
            console.log(res,'高级会员总结');
            this.pointList = res.data;
            this.totalCount = res.data.length
            // this.pointList = [{gnuserId:'12121'}];

            let userName = '';
            let userType = '';
            let level = '';
            let turnover = 0;
            let turnoverBonus = 0;
            let profitBonus = 0;
            let playerBonus = 0;
            let wallet = 0;
            let transfer = 0;
            let winLose = 0;
            let profit = 0;
            let tag = true
            this.pointList.forEach(item=>{
              turnover += Number(item.turnover)
              turnoverBonus += Number(item.turnoverBonus)
              profitBonus += Number(item.profitBonus)
              playerBonus += Number(item.playerBonus)
              wallet += Number(item.wallet)
              transfer += Number(item.transfer)
              winLose += Number(item.winLose)
              profit += Number(item.profit)
            })
            turnover = Number(turnover).toFixed(2)
            turnoverBonus = Number(turnoverBonus).toFixed(2)
            profitBonus = Number(profitBonus).toFixed(2)
            playerBonus = Number(playerBonus).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            transfer = Number(transfer).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            profit = Number(profit).toFixed(2)
            this.count = { turnover,userType,level,userName,tag,turnoverBonus,profitBonus,playerBonus, wallet,transfer,winLose,profit}
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
  position: relative;
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
  .item1{
      position: absolute;
      right:0;
    }
}

</style>