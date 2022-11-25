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
            <el-dropdown-item> Home </el-dropdown-item>
          </router-link>

          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Log Out</span>
          </el-dropdown-item>

          <el-dropdown-item divided @click.native="changePwd">
            <span style="display: block">Change Password</span>
          </el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 修改密码开始 -->
    <el-dialog
      title="修改密码"
      :visible.sync="dialogEditVisible"
      width="40%"
      v-loading="loading"
    >
      <el-form :model="pwdRow">
        <el-form-item label="当前密码" :label-width="formLabelWidth">
          <el-input
            v-model="pwdRow.currentPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="formLabelWidth">
          <el-input
            v-model="pwdRow.newPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth">
          <el-input
            v-model="pwdRow.confirmPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editPwd">确 定</el-button>
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
    }
  },
  methods: {
    changePwd(){
      this.dialogEditVisible = true
      this.pwdRow = {}
    },
    editPwd(){
      this.loading = true
      UpdatePassword(this.pwdRow).then(res=>{
        console.log(res);
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
