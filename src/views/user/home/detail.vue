<template>
  
  <el-dialog title="总结明细" :visible="DetDialog_" center width="98%"  @close="closeEdit">
    <el-table
      v-loading="listLoading"
      :data="memberList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{   }"
    >
 
      <el-table-column
        label="会员 ID"
        align="center"
        prop="userCode"
        sort-by="userCode"
        sortable
        show-overflow-tooltip
      >
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
        label="抢包"
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
        show-overflow-tooltip
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
        show-overflow-tooltip
      >
      </el-table-column>
        
    </el-table>
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

    getList(gnuserId,fromDate,toDate) {
      console.log(this.DetDialog,this.gnuserId,this.fromDate,this.toDate);
      if (this.fromDate && this.toDate) {
        this.listLoading = true;
        getWindingMemberDetail({ gnuserId:gnuserId, fromDate:fromDate, toDate:toDate })
          .then((res) => {
            this.memberList = res.data;
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