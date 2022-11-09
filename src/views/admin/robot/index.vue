<template>
  <div class="robot app-container">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="search" placeholder="输入关键字搜索"> </el-input>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="
        robotList.filter(
          (data) =>
            !search ||
            data.userCode.toLowerCase().includes(search.toLowerCase()) ||
            data.userName.toLowerCase().includes(search.toLowerCase()) ||
            data.inviteCode.toLowerCase().includes(search.toLowerCase()) ||
            data.userType.toLowerCase().includes(search.toLowerCase())
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{ prop: 'userName', order: 'descending' }"
    >
      <el-table-column
        label="机器人 ID"
        align="center"
        fixed="left"
        sortable
        prop="userCode"
        sort-by="userCode"
      >
      </el-table-column>
      <el-table-column
        label="机器人名"
        align="center"
        sortable
        prop="userName"
        sort-by="userName"
      >
      </el-table-column>
      <el-table-column
        label="邀请码"
        align="center"
        sortable
        prop="inviteCode"
        sort-by="inviteCode"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="类型"
        align="center"
        sortable
        prop="userType"
        sort-by="userType"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getRobot } from "@/api/robot";
export default {
  name: "robot",
  data() {
    return { listLoading: false, robotList: [], search: "" };
  },
  created() {
    this.getList();
  },
  components: {},
  methods: {
    getList() {
      this.listLoading = true;

      getRobot()
        .then((res) => {
          console.log(res);
          this.robotList = res.data;
          this.listLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="sass" scoped>
.flex-box
  display: flex
  .item
    margin-right: 10px
    margin-top: 10px
    margin-bottom: 10px
</style>