<template>
  <div class="downline app-container">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="search" placeholder="输入关键字搜索"> </el-input>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="
        downlineList.filter(
          (data) =>
            !search ||
            data.userCode.toLowerCase().includes(search.toLowerCase()) ||
            data.userName.toLowerCase().includes(search.toLowerCase()) ||
            data.inviteCode.toLowerCase().includes(search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverRebate.toLowerCase().includes(search.toLowerCase()) ||
            data.profitRebate.toLowerCase().includes(search.toLowerCase()) ||
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
        label="下线 ID"
        align="center"
        fixed="left"
        prop="userCode"
        sort-by="userCode"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="下线名"
        align="center"
        prop="userName"
        sort-by="userName"
        sortable
      >
      </el-table-column>
      <el-table-column
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
        label="类型"
        align="center"
        prop="userType"
        sort-by="userType"
        sortabl
      >
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        min-width="200px"
        fixed="right"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            :disabled="scope.row.robotInd !== 'N'"
            @click="openEdit(scope.row.gnuserId)"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-more"
            circle
            :disabled="scope.row.cashInd !== 'N'"
            @click="moreInfo(scope.row.appUserId)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 更多信息 -->
    <el-dialog title="收货地址" :visible.sync="dialogMoreVisible">
      <el-table :data="currentDown">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog
      title="修改 Edit"
      :visible.sync="dialogEditVisible"
      @close="closeEdit"
    >
      <el-form :model="currentDown">
        <el-form-item label="流水佣金 %" :label-width="formLabelWidth">
          <!-- /^\d+\.?\d{0,2}%$/ -->
          <!-- /^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/ -->
          <el-input
            v-model="currentDown.turnoverRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="盈利佣金 %" :label-width="formLabelWidth">
          <el-input
            v-model="currentDown.profitRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeEdit">取 消</el-button>
        <el-button type="primary" @click="editRebate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getDownline, updateRebate } from "@/api/user";
export default {
  name: "downline",
  data() {
    return {
      listLoading: false,
      downlineList: [],
      currentDown: {},
      dialogMoreVisible: false,
      dialogEditVisible: false,
      formLabelWidth: "120px",
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
      getDownline()
        .then((res) => {
          console.log(res);
          this.downlineList = res.data;
          this.listLoading = false;
        })
        .catch((err) => {
          this.listLoading = false;

          console.log(err);
        });
    },
    downlineByID(id) {
      this.currentDown = this.downlineList.filter((item) => {
        return item.gnuserId == id;
      })?.[0];
      console.log(this.currentDown);
    },
    moreInfo(id) {
      this.dialogMoreVisible = true;
      console.log(id);
      // this.downlineByID(id);
    },
    openEdit(id) {
      this.dialogEditVisible = true;
      this.downlineByID(id);
    },
    editRebate() {
      if (
        /^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(
          this.currentDown.turnoverRebate
        ) &&
        /^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(
          this.currentDown.profitRebate
        )
      ) {
        const { gnuserId, turnoverRebate, profitRebate } = this.currentDown;
        console.log({ gnuserId, turnoverRebate, profitRebate });
        updateRebate({ gnuserId, turnoverRebate, profitRebate })
          .then((res) => {
            if (res.data?.status == "Failed") {
              this.$message({
                type: "error",
                message: res.data.remark,
              });
            } else {
              this.$message({
                type: "success",
                message: "编辑成功",
              });
            }
            this.closeEdit();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$message({
          type: "info",
          message: "流水佣金与盈利佣金皆为0到100之间最多允许包含2位小数",
        });
      }
    },
    closeEdit() {
      this.dialogEditVisible = false;
      this.getList();
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