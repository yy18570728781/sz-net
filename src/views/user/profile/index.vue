<template>
  <div class="profile app-container">
    <el-form label-position="right" label-width="120px" class="profileForm">
      <el-form-item label="ID:">
        <el-input v-model="userInfo.userCode" disabled></el-input>
      </el-form-item>
      <el-form-item label="名字:">
        <el-input v-model="userInfo.userName" disabled></el-input>
      </el-form-item>
      <!-- <el-form-item label="邀请码:">
        <el-input v-model="userInfo.inviteCode" disabled></el-input>
      </el-form-item> -->
      <el-form-item label="信用额度:">
        <el-input v-model="userInfo.creditLimit" disabled></el-input>
      </el-form-item>
      <el-form-item label="球网流水提成 %">
        <el-input v-model="userInfo.turnoverRebateFb" disabled></el-input>
      </el-form-item>
      <el-form-item label="流水提成 %:">
        <el-input v-model="userInfo.turnoverRebate" disabled></el-input>
      </el-form-item>
      <el-form-item label="利润提成 %:">
        <el-input v-model="userInfo.profitRebate" disabled></el-input>
      </el-form-item>
      <el-form-item label="类别:">
        <el-input v-model="userInfo.userCategory" disabled></el-input>
      </el-form-item>
      <el-form-item label="类型:">
        <el-input v-model="userInfo.userType" disabled></el-input>
      </el-form-item>
      <el-form-item label="上线名:">
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
          console.log(res.data);
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
.profile {
  width: 600px;
  padding-top: 50px;
  .profileForm {
    width: 100%;
  }
}
</style>
