<template>
  <div class="pointDetail app-container">
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
import { downlineTopupTxn } from "@/api/member";
export default {
  name: "pointDetail",
  data() {
    return {
      searchFrom: {
        userCode: "",
        userName: "",
        fromDate: new Date(Date.now() - (24 * 60 * 60 * 1000 * 30)),
        toDate: new Date(),
      },
      memberList: [],
      listLoading: false,
    };
  },
  created() {
    this.getList();
  },
  components: {},
  methods: {
    // 获取昨天和上一个月
    getMonthDay() {
      let oneDay = 24 * 60 * 60 * 1000
      let date = new Date(Date.now() - oneDay)// 昨天
      let nowDate = {
        year: date.getFullYear(), // 年
        month: date.getMonth() + 1, // 月份
        day: date.getDate(), // 当前日期前一天(昨天)
      }
      let startMonth = nowDate.month - 1
      let startYear = nowDate.year
      let startDay = nowDate.day
      if (startMonth <= 0) {
        startYear = startYear - 1
        startMonth = 12
      }
      let startLastDay = this.getCurrentMonthLast(`${startYear}-${startMonth}`)
      if (nowDate.day > startLastDay) {
        startDay = startLastDay
      } else {
        startDay = nowDate.day
      }
      return [
        `${startYear}-${startMonth}-${startDay}`,
        `${nowDate.year}-${nowDate.month}-${nowDate.day}`
      ]
    },
    // 获取数据
    getList() {
      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;
        const { userCode, userName, fromDate, toDate } = this.searchFrom;

        downlineTopupTxn({ userCode, userName, fromDate, toDate })
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
<style lang="sass" scoped>
.pointDetail
  .flex-box
    display: flex
    flex-wrap: wrap
    .item
      margin-right: 10px
      margin-top: 10px
      margin-bottom: 10px
</style>