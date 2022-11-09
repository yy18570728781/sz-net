<template>
  <div class="userPoint app-container">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="searchFrom.userCode" placeholder="请输入下线 ID">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-input v-model="searchFrom.userName" placeholder="请输入下线名">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-date-picker
          v-model="searchFrom.fromDate"
          type="datetime"
          placeholder="选择开始日期时间"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
        >
        </el-date-picker>
        ~
        <el-date-picker
          v-model="searchFrom.toDate"
          type="datetime"
          placeholder="选择结束日期时间"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
        >
        </el-date-picker>
      </div>
      <div class="item">
        <el-button type="primary" @click="getList">搜索</el-button>
      </div>
    </div>

    <el-table
      v-loading="listLoading"
      :data="pointList"
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
      </el-table-column>
      <el-table-column
        label="会员名"
        align="center"
        prop="userName"
        sort-by="userName"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="上下分"
        align="center"
        prop="topup"
        sort-by="topup"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="时间"
        align="center"
        prop="createdDate"
        sort-by="createdDate"
        sortable
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { downlineTopupTxn } from "@/api/user";
export default {
  name: "userPoint",
  data() {
    return {
      // listLoading:true,
      listLoading: false,
      searchFrom: {
        userCode: "", //下线 ID
        userName: "", //下线名
        fromDate: new Date(Date.now() - (24 * 60 * 60 * 1000 * 30)), //必填
        toDate: new Date(),//必填
      },
      pointList: [],
    };
  },
  created() {
    console.log(111);
    this.getList();
  },
  components: {},
  
  methods:{
    getList() {
      this.listLoading = true;
      const { userCode, userName, fromDate, toDate } = this.searchFrom;
        downlineTopupTxn({ userCode, userName, fromDate, toDate }).then(
          (res) => {
            console.log(res);
            this.pointList = res.data;
            this.listLoading = false;
          }
        );
      // if (this.searchFrom.fromDate && this.searchFrom.toDate) {
      //   // uplineId  登录回馈的 gnuserId  + searchFrom
      //   const { userCode, userName, fromDate, toDate } = this.searchFrom;
      //   downlineTopupTxn({ userCode, userName, fromDate, toDate }).then(
      //     (res) => {
      //       console.log(res);
      //       this.pointList = res.data;
      //       this.listLoading = false;
      //     }
      //   );
      // } else {
      //   this.listLoading = false;
      //   this.$message({ type: "info", message: "请选择开始/结束时间" });
      // }
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
}
</style>