<template>
  <div class="app-container">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="search" placeholder="输入关键字搜索"> </el-input>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="
        list.filter(
          (data) =>
            !search ||
            data.gnuserId.toLowerCase().includes(search.toLowerCase()) ||
            data.userName.toLowerCase().includes(search.toLowerCase()) ||
            data.inviteCode.toLowerCase().includes(search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverRebate.toLowerCase().includes(search.toLowerCase()) ||
            data.userType.toLowerCase().includes(search.toLowerCase())
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{ prop: 'gnuserId', order: 'descending' }"
    >
      <el-table-column
        label="会员 ID"
        align="center"
        sortable
        prop="userCode"
        sort-by="userCode"
      >
      </el-table-column>
      <el-table-column label="会员名" align="center" sortable prop="userName">
      </el-table-column>
      <el-table-column label="备注名" align="center" sortable prop="userRemark">
      </el-table-column>
      <!-- <el-table-column
        label="邀请码"
        align="center"
        sortable
        prop="inviteCode"
        sort-by="inviteCode"
      >
      </el-table-column> -->
      <el-table-column
        class-name="status-col"
        label="信用额度"
        align="center"
        sortable
        prop="creditLimit"
        sort-by="creditLimit"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="流水提成%"
        align="center"
        sortable
        prop="turnoverRebate"
        sort-by="turnoverRebate"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="球网流水提成%"
        align="center"
        sortable
        prop="turnoverRebateFb"
        sort-by="turnoverRebateFb"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="利润提成%"
        align="center"
        sortable
        prop="profitRebate"
        sort-by="profitRebate"
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
      <el-table-column
        class-name="status-col"
        label="代理网登录"
        align="center"
        sortable
        prop="loginInd"
        sort-by="loginInd"
      >
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        min-width="200px"
        fixed="right"
        sortable
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
            icon="el-icon-top"
            circle
            :disabled="scope.row.cashInd !== 'N'"
            @click="openAddCredit(scope.row.gnuserId)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-bottom"
            circle
            :disabled="scope.row.cashInd !== 'N'"
            @click="openMinusCredit(scope.row.gnuserId)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改 Edit -->
    <el-dialog
      title="修改 Edit"
      :visible.sync="dialogFormVisible"
      @close="closeEdit"
    >
      <el-form :model="currentMember">
        <el-form-item label="备注名" :label-width="formLabelWidth">
          <el-input
            v-model="currentMember.userRemark"
            maxlength="45"
          ></el-input>
        </el-form-item>
        <el-form-item label="流水提成%" :label-width="formLabelWidth">
          <el-input
            v-model="currentMember.turnoverRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="利润提成%" :label-width="formLabelWidth">
          <el-input
            v-model="currentMember.profitRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="球网流水提成%" :label-width="formLabelWidth">
          <el-input
            v-model="currentMember.turnoverRebateFb"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="代理网登录" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="currentMember.loginInd" label="Yes">Yes</el-radio>
            <el-radio v-model="currentMember.loginInd" label="No">No</el-radio>
          </template>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeEdit">取 消</el-button>
        <el-button type="primary" @click="editMember" v-loading.fullscreen.lock="butLoading">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 增加信用 -->
    <el-dialog
      title="加信用额度"
      :visible.sync="dialogFormVisibleAdd"
      @close="closeAddCredit"
    >
      <el-form :model="currentMember">
        <el-form-item label="加信用额度" :label-width="formLabelWidth">
          <el-input v-model="credit" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeAddCredit">取 消</el-button>
        <el-button type="primary" @click="addCredit" v-loading.fullscreen.lock="butLoading">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 降低信用 -->
    <el-dialog
      title="减信用额度"
      :visible.sync="dialogFormVisibleMinus"
      @close="closeMinusCredit"
    >
      <el-form :model="currentMember">
        <el-form-item label="减信用额度" :label-width="formLabelWidth">
          <el-input v-model="credit" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeMinusCredit">取 消</el-button>
        <el-button type="primary" @click="minusCredit" v-loading.fullscreen.lock="butLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getList,
  UpdateSeniorRebate,
  addSeniorCredit,
  minusSeniorCredit,
} from "@/api/seniorMember";

export default {
  name: "seniorMember",
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      list: [],
      credit: "",
      currentMember: {},
      listLoading: false,

      butLoading:false,

      dialogFormVisible: false,
      dialogFormVisibleAdd: false,
      dialogFormVisibleMinus: false,
      formLabelWidth: "120px",

      search: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList()
        .then((res) => {
          console.log(res);
          this.list = res.data;
          this.listLoading = false;
        })
        .catch((err) => {
          this.listLoading = false;
          console.log(err);
        });
    },
    // 根据 gnuserId 获取会员信息
    memberByID(id) {
      this.currentMember = this.list.filter((item) => {
        return item.gnuserId === id;
      })?.[0];
    },
    // 修改 Edit
    openEdit(id) {
      this.dialogFormVisible = true;
      this.memberByID(id);
    },
    // /^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,3})(\.\d{1,2})?$/
    editMember() {
      this.butLoading = true
      if (
        /^(0\.\d{0,1}[0-9]|\+?[0-9][0-9]{0,2})(\.\d{1,2})?$/.test(
          this.currentMember.turnoverRebate
        ) &&
        /^(0\.\d{0,1}[0-9]|\+?[0-9][0-9]{0,2})(\.\d{1,2})?$/.test(
          this.currentMember.profitRebate
        ) &&
        /^(0\.\d{0,1}[0-9]|\+?[0-9][0-9]{0,2})(\.\d{1,2})?$/.test(
          this.currentMember.turnoverRebateFb
        )
      ) {
        
        const { userRemark,turnoverRebateFb,loginInd,gnuserId, turnoverRebate, profitRebate } = this.currentMember;
        UpdateSeniorRebate({ userRemark,turnoverRebateFb,loginInd,gnuserId, turnoverRebate, profitRebate })
          .then((res) => {
            this.butLoading = false
            console.log(res);
            if (res.data.status == 'Success' && res.data.remark == '') {
              this.$message({ type: "success", message: "编辑成功" });
              this.closeEdit();
              
            } else {
              this.$message({ type: "error", message: res.data.remark || "编辑失败" });
              this.butLoading = false
            }
            
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.butLoading = false
        this.$message({
          type: "info",
          message: "流水提成、利润提成和球网利润提成皆为最多7位数整数，限2位小数",
        });
      }
    },
    closeEdit() {
      this.dialogFormVisible = false;
      this.fetchData();
    },

    // 增加信用
    openAddCredit(id) {
      this.dialogFormVisibleAdd = true;
      this.memberByID(id);
    },
    addCredit() {
      this.butLoading = true
      const { gnuserId } = this.currentMember;
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,3})(\.\d{1,2})?$/.test(this.credit)){
        addSeniorCredit({
          gnuserId,
          credit: this.credit,
        })
          .then((res) => {
            this.butLoading = false
            if (res.data.status == 'Success' && res.data.remark == '') {
              this.$message({ type: "success", message: "增加信用成功" });
              this.closeAddCredit();
              
            } else {
              this.$message({ type: "info", message: res.data.remark ||"增加信用失败" });
            }
            
            
          })
          .catch((err) => {
            console.log(err);
            this.butLoading = false
          });
      }else{
        this.butLoading = false
        this.$message({
          type: "info",
          message: "只能填写最多7位数整数，限2位小数",
        });
      }
      
    },
    closeAddCredit() {
      this.dialogFormVisibleAdd = false;
      this.credit = "";
      this.fetchData();
    },

    // 降低信用
    openMinusCredit(id) {
      this.dialogFormVisibleMinus = true;
      this.memberByID(id);
    },
    minusCredit() {
      this.butLoading = true
      const { gnuserId } = this.currentMember;
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,3})(\.\d{1,2})?$/.test(this.credit)){
        minusSeniorCredit({
          gnuserId,
          credit: this.credit,
        })
          .then((res) => {
            this.butLoading = false
            if (res.data.status == "Success" && res.data.remark == '') {
              this.$message({ type: "success", message: "降低信用成功" });
              this.closeMinusCredit();
            } else {
              this.$message({ type: "info", message: res.data.remark ||"降低信用失败" });
            }
            this.butLoading = false
            this.fetchData();
          })
          .catch((err) => {
            this.butLoading = false
            console.log(err);
          });
      }else{
        this.butLoading = false
        this.$message({
          type: "info",
          message: "只能填写最多7位数整数，限2位小数",
        });
      }
      
    },
    closeMinusCredit() {
      this.dialogFormVisibleMinus = false;
      this.credit = "";
      // this.fetchData()
    },
  },
};
</script>
<style lang="sass" scoped>
.flex-box
  display: flex
  justify-content: end
  .item
    margin-right: 10px
    margin-top: 10px
    margin-bottom: 10px
</style>