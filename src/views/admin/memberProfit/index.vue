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
        <el-select class="select" v-model="searchFrom.userType" placeholder="Please select type ">
          <el-option
            v-for="item in typeList"
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
    <div class="Pdiv">
        <div class="Cdiv">
          <el-table
            v-loading="listLoading"
            :data="
              temList.filter(
                (data) =>
                  !search ||
                  data.agentName.toLowerCase().includes(search.toLowerCase()) ||
                  data.userName.toLowerCase().includes(search.toLowerCase()) ||
                  data.turnover.toLowerCase().includes(search.toLowerCase()) ||
                  data.profitBonus.toLowerCase().includes(search.toLowerCase())
              )
            "
            element-loading-text="Loading"
            border
            fit
            highlight-current-row
            ref="filterTable"
            :default-sort="{ }"
          >
            <el-table-column
              label="操作"
              align="center"
              prop=""
              sortable
            > 
              <template slot-scope="scope">
                <span v-if="scope.row.tag" style="font-size:20px;font-weight: bold;">总计</span>
                <el-button v-else type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
                
              </template>
              
            </el-table-column>
            <el-table-column
              label="代理名"
              align="center"
              prop="agentName"
              sortable
            >
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
              label="会员名"
              align="center"
              prop="userName"
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
              label="流水提成"
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
          <div class="footer_div">
            <div>总计</div>
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
    <p>**总结 = 输赢 + 流水提成 + 钱包 + 积分转移</p>
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
      countList:[],//总计

      search:'',
      
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
    getDrlMemberType()
    .then((res) => {
      if(res.code == 0){
        this.typeList = res.data;
        this.searchFrom.userType = this.typeList[0].value
        
        // this.getList()
      }
    })
    
  },
  methods: {
    // 选择时间
    selectChange(value){
      let proNum = this.dataList.findIndex((item, index) =>{
        return item.showDate == value
      })
      this.searchFrom.fromDate = this.dataList[proNum].fromDate
      this.searchFrom.toDate = this.dataList[proNum].toDate
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
        this.getTemList()
    },
    //显示第几页
    handleCurrentChange(val) {
        //改变默认的页数
        this.currentPage=val
        this.getTemList()
    },
    getTemList(){
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.push(this.count)
    },
    getList() {
      this.butLoading= true
      // let index1 = this.searchFrom.showDate.indexOf(" - ")
      // this.searchFrom.fromDate = this.searchFrom.showDate.substring(0,index1);
      // this.searchFrom.toDate = this.searchFrom.showDate.substring(Number(index1) + 3);

      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate , userType } = this.searchFrom;
        getMemberProfit({ userType, fromDate, toDate })
          .then((res) => {
            this.butLoading = false
            this.pointList = res.data;
            this.totalCount = res.data.length
            // this.pointList = [{gnuserId:'12121'}];

            let agentName = '';
            let userName = '';
            let turnover = 0;
            let profitBonus = 0;
            let wallet = 0;
            let winLose = 0;
            let profit = 0;
            let transfer = 0;
            let tag = true;
            this.pointList.forEach(item=>{
              turnover += Number(item.turnover)
              profitBonus += Number(item.profitBonus)
              wallet += Number(item.wallet)
              transfer += Number(item.transfer)
              winLose += Number(item.winLose)
              profit += Number(item.profit)
            })
            turnover = Number(turnover).toFixed(2)
            profitBonus = Number(profitBonus).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            transfer = Number(transfer).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            profit = Number(profit).toFixed(2)
            this.count = { agentName,userName,turnover,profitBonus, wallet,transfer,winLose,profit,tag}
            this.count.firstColumn = '总计' 
            this.getTemList()
            this.countList = [agentName,userName,turnover,profitBonus,wallet,transfer,winLose,profit,]

            this.listLoading = false;
          })
          .catch((err) => {
            this.listLoading = false;
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

  .flex-box {
    display: flex;
    flex-wrap: wrap;
    .item {
      
      margin-right: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .item1{
      position: absolute;
      right:0;
    }
  }
</style>