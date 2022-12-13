<template>
  <div class="profile app-container">
    <el-form label-position="right" label-width="120px" class="profileForm">
      <el-form-item label="ID:">
        <el-input v-model="userInfo.userCode" disabled></el-input>
      </el-form-item>
      <el-form-item :label="$t('Name')">
        <el-input v-model="userInfo.userName" disabled></el-input>
      </el-form-item>
      <!-- <el-form-item label="邀请码:">
        <el-input v-model="userInfo.inviteCode" disabled></el-input>
      </el-form-item> -->
      <el-form-item :label="$t('CreditLimit')">
        <el-input v-model="userInfo.creditLimit" disabled></el-input>
      </el-form-item>
      <el-form-item :label="$t('TurnoverRebateFb')">
        <el-input v-model="userInfo.turnoverRebateFb" disabled></el-input>
      </el-form-item>
      <el-form-item :label="$t('TurnoverRebate')">
        <el-input v-model="userInfo.turnoverRebate" disabled></el-input>
      </el-form-item>
      <el-form-item :label="$t('ProfitRebate')">
        <el-input v-model="userInfo.profitRebate" disabled></el-input>
      </el-form-item>
      <el-form-item :label="$t('userCategory')">
        <el-input v-model="userInfo.userCategory" disabled></el-input>
      </el-form-item>
      <el-form-item :label="$t('userType')">
        <el-input v-model="userInfo.userType" disabled></el-input>
      </el-form-item>
      <el-form-item :label="$t('UplineUserName')">
        <el-input v-model="userInfo.uplineUserName" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getInfo } from "@/api/user";
export default {
  name: "profile",
  data() {
    return {
      // listLoading:true,
      listLoading: false,
      userInfo: {},
    };
  },
  components: {},
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.listLoading = true;
      getInfo()
        .then((res) => {
          this.userInfo = res.data;
          this.listLoading = false;
        })
        .catch((err) => {
          this.listLoading = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.profile {
  width: 600px;
  padding-top: 50px;
  .profileForm {
    width: 100%;
  }
}
@media only screen and (max-width: 1200px) {
    ::v-deep .el-form{
      width: 320px !important;
      margin: 0 !important;
      .el-button{
      
      }
    }
    ::v-deep .el-dialog{
      width: 100% !important;
    }
    ::v-deep .el-table td{
      padding: 0 !important;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      // background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      width: 300px;
      margin: 20px auto;
    }
    .el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
        overflow-x: auto;
    }
    .item1{
    position: static !important;
  }
    
} 
</style>
