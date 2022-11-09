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
        <el-input v-model="searchFrom.uplineCode" placeholder="请输入上线 ID">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-input v-model="searchFrom.uplineName" placeholder="请输入上线名">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
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
        label="层次"
        align="center"
        prop="level"
        sort-by="level"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="邀请码"
        align="center"
        prop="inviteCode"
        sort-by="inviteCode"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="信用额度"
        align="center"
        prop="creditLimit"
        sort-by="creditLimit"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="流水佣金%"
        align="center"
        prop="turnoverRebate"
        sort-by="turnoverRebate"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="盈利佣金%"
        align="center"
        prop="profitRebate"
        sort-by="profitRebate"
        sortable
      >
      </el-table-column>

      <el-table-column
        class-name="status-col"
        label="上线 ID"
        align="center"
        prop="uplineUserCode"
        sort-by="uplineUserCode"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="上线名"
        align="center"
        prop="uplineUserName"
        sort-by="uplineUserName"
        sortable
      >
      </el-table-column>

      <el-table-column
        class-name="status-col"
        label="类型"
        align="center"
        prop="userType"
        sort-by="userType"
        sortable
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getMemberList } from "@/api/member";
export default {
  name: "member",
  data() {
    return {
      searchFrom: {
        userCode: "",
        userName: "",
        uplineCode: "",
        uplineName: "",
      },
      memberList: [],
      listLoading: false,
      search: "",
    };
  },
  created() {
    this.getList();
  },
  components: {},
  methods: {
    getList() {
      this.listLoading = true;
      const { userCode, userName, uplineCode, uplineName } = this.searchFrom;
      console.log(this.searchFrom);
      getMemberList({ userCode, userName, uplineCode, uplineName })
        .then((res) => {
          console.log(res);
          this.memberList = res.data;
          this.listLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.listLoading = false;
        });
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