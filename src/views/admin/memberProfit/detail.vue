<template>
  
  <el-dialog title="总结明细" :visible="DetDialog_" center width="98%"  @close="closeEdit">
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
        label="会员 ID"
        align="center"
        prop="userCode"
        sort-by="userCode"
        sortable
      >
        <template slot-scope="scope">
          <span v-if="scope.row.userCode">{{scope.row.userCode}} </span>
          <span v-else style="fpnt-size:20px">总计</span>
        </template>
      </el-table-column>

      <el-table-column
        label="会员名"
        align="center"
        prop="userName"
      >
      </el-table-column>

      <el-table-column
        label="游戏"
        align="center"
        prop="game"
      >
      </el-table-column>

      <el-table-column
        label="场数"
        align="center"
        prop="gameNo"
      >
      </el-table-column>

      <el-table-column
        label="类型"
        align="center"
        prop="type"
      >
      </el-table-column>

      <el-table-column
        label="下注"
        align="center"
        prop="bet"
      >
      </el-table-column>

      <el-table-column
        label="钱包"
        align="center"
        prop="wallet"
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
        label="输赢"
        align="center"
        prop="winLose"
      >
      </el-table-column>

      <el-table-column
        label="时间"
        align="center"
        prop="time"
        sort-by="time"
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
  </el-dialog>
</template>
<script>
import { getWindingMemberDetail } from "@/api/user";
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

    getList(gnuserId,fromDate,toDate) {
      console.log(this.DetDialog,this.gnuserId,this.fromDate,this.toDate);
      if (this.fromDate && this.toDate) {
        this.listLoading = true;
        getWindingMemberDetail({ gnuserId:gnuserId, fromDate:fromDate, toDate:toDate })
          .then((res) => {
            console.log(res,'会员明细总结');
            this.memberList = res.data;

            let bet = 0;
            let turnover = 0;
            let winLose = 0;
            let wallet = 0;
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
            this.count = { bet, turnover,winLose,wallet}
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
  ::v-deep .el-table td{
    padding: 0 !important;
  }
}
</style>