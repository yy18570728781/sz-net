<template>
  <div class="member">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="searchFrom.userCode" placeholder="请输入会员 ID">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-input v-model="searchFrom.userName" placeholder="请输入会员名">
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
      :data="memberList"
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
      <el-table-column label="会员名" align="center" prop="userName" sortable>
      </el-table-column>
      <el-table-column
        label="加/减信用额度"
        align="center"
        prop="creditLimit"
        sort-by="creditLimit"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="创建者"
        align="center"
        prop="createdByName"
        sort-by="createdByName"
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
import { creditTxn } from "@/api/member";
export default {
  name: "creditDetail",
  data() {
    return {
      searchFrom: {
        userCode: "",
        userName: "",
        fromDate: new Date(Date.now() - (24 * 60 * 60 * 1000 * 30)), //必填
        toDate: new Date(),//必填
      },
      memberList: [],
      // listLoading: true,
      listLoading: false,

      value2: "",
    };
  },
  components: {},
  methods: {
    getList() {
      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;
        const { userCode, userName, fromDate, toDate } = this.searchFrom;
        creditTxn({ userCode, userName, fromDate, toDate })
          .then((res) => {
            this.memberList = res.data;
            this.listLoading = false;
          })
          .catch((err) => {
            this.listLoading = false;
            console.log(err);
          });
      } else {
        this.$message({ type: "info", message: "请选择开始/结束时间" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.member {
  padding: 0 20px;
  .flex-box {
    display: flex;
    flex-wrap: wrap;
    .item {
      margin-right: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>