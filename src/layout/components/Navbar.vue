<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="../../assets/navHeadImg.jpeg" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> <span style="display: block;width:100%;text-align:center;">首页</span> </el-dropdown-item>
            <!-- home -->
          </router-link>

          <template v-if="role == 'admin' || role == 'staff' ">
            <el-dropdown-item  divided @click.native="changePwd" >
              <span  style="display: block">修改密码</span>
              <!-- Change Password -->
            </el-dropdown-item>
          </template>

          <el-dropdown-item divided @click.native="logout">
            <span style="display: block;width:100%;text-align:center;">退出</span>
            <!-- Log Out -->
          </el-dropdown-item>

          

        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 修改密码开始 -->
    <el-dialog
      title=""
      :visible.sync="dialogEditVisible"
      width="500px"
      v-loading="loading"
    >
      <el-form :model="pwdRow">
        <div class="title-container">
          <h3 class="title">修改密码</h3>
        </div>
        <el-form-item >
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="username"
            v-model="pwdRow.currentPass"
            placeholder="Current Password"
            name="Current Password"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>
        <el-form-item >
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="pwdRow.newPass"
            :type="passwordType"
            placeholder="new password"
            name="password"
            tabindex="2"
            auto-complete="on"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
        <el-form-item>
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType1"
            ref="password1"
            v-model="pwdRow.confirmPass"
            :type="passwordType1"
            placeholder="confirm password "
            name="password1"
            tabindex="2"
            auto-complete="on"
          />
          <span class="show-pwd" @click="showPwd1">
            <svg-icon
              :icon-class="passwordType1 === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>

        
        
      </el-form>
      <div style="width:100%; display: flex;
      padding-right:15px;
  justify-content: center;
  align-items: center;">
         <el-button
          type="primary"
          style="width: 100%;"
          @click.native.prevent="editPwd"
        >确 定</el-button
      >
        <!-- <el-button type="primary" @click="editPwd">确 定</el-button> -->
      </div>
    </el-dialog>
    <!-- 修改密码开结束 -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import { removeToken, removeRole } from "@/utils/auth";
import { UpdatePassword } from "@/api/member";
export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  data(){
    return{
      loading:false,
      dialogEditVisible:false,
      formLabelWidth:'120px',
      pwdRow:{
        currentPass:'',
        newPass:'',
        confirmPass:'',
      },
      role:'',
      passwordType: "password",
      passwordType1: "password",
    }
  },
  created(){},
  mounted(){
    this.role = JSON.parse(localStorage.getItem('roles'))[0]
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    showPwd1() {
      if (this.passwordType1 === "password") {
        this.passwordType1 = "";
      } else {
        this.passwordType1 = "password";
      }
      this.$nextTick(() => {
        this.$refs.password1.focus();
      });
    },
    changePwd(){
      this.dialogEditVisible = true
      this.pwdRow = {}
    },
    editPwd(){
      this.loading = true
      UpdatePassword(this.pwdRow).then(res=>{
        if(res.data.remark == '' || res.data.status == 'success'){
          this.$message({
            type:'success',
            message:res.message
          })
          this.pwdRow = {}
          this.loading = false
          this.dialogEditVisible = false
        }else{
          this.$message({
            type:'error',
            message:res.data.remark
          })
          this.loading = false
        }
      })
    },
    
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      removeToken()
      removeRole()
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
 

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

// .login-container {
//   min-height: 100%;
//   width: 100%;
//   background-color: $bg;
//   overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #283443;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    width: 400px;
    margin: 20px auto;
  }
  ::v-deep .el-input__inner{
    border: none;
    outline: none;
    background-color: transparent;
    
  }
@media only screen and (max-width: 1200px) {
  ::v-deep .el-form{
    width: 320px !important;
    margin: 0 !important;
  }
  ::v-deep .el-dialog{
    width: 375px !important;
  }
	.el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    width: 300px;
    margin: 20px auto;
  }
  .el-button{
    width: 300px !important;
  }
}
// }
</style>
