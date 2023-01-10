<template>
  <div class="userCredit app-container">
    <div class="flex-box">

      <div class="item">
        <el-select class="select" v-model="searchFrom.showDate" :placeholder="$t('InputTip.SelectTime')" @change="selectChange">
          <el-option
            v-for="item in dataList"
            :key="item.showDate"
            :label="item.showDate"
            :value="item.showDate"
          />
        </el-select>
      </div>
      
    </div>
    <div class="Pdiv">
      <div class="Cdiv">
        <el-table
      v-loading="listLoading"
      :data="temList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{   }"
    >
       <!-- <el-table-column
        label="操作"
        align="center"
        prop=""
      > 
        <template slot-scope="scope">
          <el-button type="primary" round size="small" @click="changeShow(scope.row)">明细</el-button>
        </template>
        
       </el-table-column> -->
      <el-table-column
        :label="$t('DownlineCategory')"
        align="center"
        prop="downlineCategory"
      >
        <template slot-scope="scope">
          <span>{{scope.row.downlineCategory}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('Turnover')"
        align="center"
        prop="turnover"
      >
      </el-table-column>

      <el-table-column
        :label="$t('DownlineBobus')"
        align="center"
        prop="downlineBobus"
      >
      </el-table-column>


      <el-table-column
        :label="$t('Bonus')"
        align="center"
        prop="bonus"
      >
      </el-table-column>
      <el-table-column
        :label="$t('Wallet')"
        align="center"
        prop="wallet"
      >
      </el-table-column>
      <el-table-column
        :label="$t('Transfer')"
        align="center"
        prop="transfer"
      >
      </el-table-column>
      <el-table-column
        :label="$t('WinLose')"
        align="center"
        prop="winLose"
      >
      </el-table-column>

      <el-table-column
        :label="$t('MyProfit')"
        align="center"
        prop="profit"
      >
      </el-table-column>
      
        </el-table>
        <div class="footer_div">
          <div>{{$t('TotalOf')}}</div>
          <div v-for="(item,index) in countList" :key="index">{{item}}</div>
        </div>
      </div>
    </div>
    
    <p>**{{$t('MyProfit')}} = {{$t('DownlineBobus')}}  + {{$t('Bonus')}} + {{$t('Wallet')}} + {{$t('Transfer')}} + {{$t('WinLose')}}</p>
    <!-- <div class="page">
      <el-pagination 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="currentPage" 
        :page-sizes="pageSizes" 
        :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" 
        :total="totalCount">
      </el-pagination>
    </div> -->
    <!-- 总结明细 -->
    <!-- <Detail ref="detail" @changeDetDialog="changeDetDialog" :DetDialog="DetDialog"  :fromDate="searchFrom.fromDate" :toDate="searchFrom.toDate" :DetailFrom="DetailFrom"></Detail> -->
  </div>
</template>
<script>
import { getAgentProfit , getDrlWeek} from "@/api/user";
// import Detail from './detail.vue'
export default {
  name: "userCredit",
  // components:{Detail},
  data() {
    return {
      // listLoading:true,
      listLoading: false,
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

      countList:[],
      
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
    },
    getTemList(){
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.push(this.count)
    },

    getList() {
      this.currentPage = 1
      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;

        const { fromDate, toDate } = this.searchFrom;
        getAgentProfit({ gnuserId:this.userInfo.gnuserId, fromDate, toDate })
          .then((res) => {
            this.pointList = res.data;
            // this.pointList = [{gnuserId:'12121'}];

            let turnover = 0;
            let downlineBobus = 0;
            let bonus = 0;
            let wallet = 0;
            let transfer = 0;
            let winLose = 0;
            let profit = 0;
            this.pointList.forEach(item=>{
              turnover += Number(item.turnover)
              downlineBobus += Number(item.downlineBobus)
              bonus += Number(item.bonus)
              wallet += Number(item.wallet)
              transfer += Number(item.transfer)
              winLose += Number(item.winLose)
              profit += Number(item.profit)
            })
            turnover = Number(turnover).toFixed(2)
            downlineBobus = Number(downlineBobus).toFixed(2)
            bonus = Number(bonus).toFixed(2)
            wallet = Number(wallet).toFixed(2)
            transfer = Number(transfer).toFixed(2)
            winLose = Number(winLose).toFixed(2)
            profit = Number(profit).toFixed(2)
            this.count = { turnover,downlineBobus,bonus,wallet,transfer,winLose,profit}
            this.count.firstColumn = '总计'
            this.countList = [turnover,downlineBobus,bonus,wallet,transfer,winLose,profit] 
            this.getTemList()

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
  .el-select{
    width: 250px !important;
  }
  .el-input__inner{
    width: 250px !important;
    
  }
}
@media screen and (max-width:1200px) {
    ::v-deep .el-dialog{
      width: 100% !important;
    }
    ::v-deep .el-table td, .el-table th{
      padding: 0 !important;
    }
  
}
</style>