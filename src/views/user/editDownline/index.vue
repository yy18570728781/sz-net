<template>
  <div class="editDownline app-container">
    <el-form label-position="left" label-width="120px">
      <el-form-item label="downline:">
        <el-select
          v-model="appUserId"
          placeholder="请选择下线"
          @change="getInfo"
        >
          <el-option
            v-for="item in downlineList"
            :key="item.appUserId"
            :label="item.userName"
            :value="item.appUserId"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="当前会员积分:">
        <el-input v-model="currentPoint" disabled></el-input>
      </el-form-item>

      <el-form-item label="上分:">
        <el-input v-model="addPoint" maxlength="11" :disabled="userInfo.cashInd !== 'N'">
          <el-button slot="append" type="primary" @click="topupPoint"
            >确定</el-button
          >
        </el-input>
      </el-form-item>

      <el-form-item label="下分:">
        <el-input v-model="minusPoint" maxlength="11" :disabled="userInfo.cashInd !== 'N'">
          <el-button slot="append" type="primary" @click="withdrawPoint"
            >确定</el-button
          >
        </el-input>
      </el-form-item>

      <el-form-item label="信用额度:">
        <el-input v-model="currentDown.creditLimit" maxlength="11" disabled>
        </el-input>
      </el-form-item>

      <el-form-item label="加信用额度:">
        <el-input v-model="addCreditValue" maxlength="11" :disabled="userInfo.cashInd !== 'N'">
          <el-button slot="append" type="primary" @click="addCredit"
            >确定</el-button
          >
        </el-input>
      </el-form-item>

      <el-form-item label="减信用额度:">
        <el-input v-model="minusCreditValue" maxlength="11" :disabled="userInfo.cashInd !== 'N'">
          <el-button slot="append" type="primary" @click="minusCredit"
            >确定</el-button
          >
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  getDownline,
  topupPoint,
  withdrawPoint,
  addCredit,
  minusCredit,
} from "@/api/user";
export default {
  name: "editDownline",
  data() {
    return {
      listLoading: false,
      userInfo: JSON.parse(localStorage.getItem('userInfo')),
      downlineList: [],
      currentDown: { creditLimit: "" },
      appUserId: "",
      currentPoint: "",
      // 上下分
      addPoint: "",
      minusPoint: "",
      // 加减信用额度
      addCreditValue: "",
      minusCreditValue: "",
    };
  },
  created() {
    this.getList();
  },
  components: {},
  methods: {
    getList() {
      getDownline()
        .then((res) => {
          console.log(res);
          this.downlineList = res.data;
          console.log(this.downlineList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getInfo() {
      console.log(this.appUserId);
      // 根据appUserId 获取当前下线 会员积分 和 信用额度
    },
    // 上分
    topupPoint() {
      console.log("topupPoint");
      if(!this.appUserId){
        this.$message({
          type:'info',
          message:'Please select offline'
        })
        return
      }
      // gnuserId    +   point:this.addPoint
      topupPoint({gnuserId:this.appUserId,point:this.addPoint})
        .then((res) => {
          console.log(res);
          // this.getInfo()
          // if(res.data.remark == 'Please Fill In All The Mandatory Fields!'){
          //   this.$message({
          //     type:'error',
          //     message:res.data.remark || 'error'
          //   })
          // }
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
          }

        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 下分
    withdrawPoint() {
      if(!this.appUserId){
        this.$message({
          type:'info',
          message:'Please select offline'
        })
        return
      }
      // gnuserId    +   point:this.minusPoint
      withdrawPoint({gnuserId:this.appUserId,point:this.addPoint})
        .then((res) => {
          console.log(res);
          // this.getInfo()
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 加信用额度
    addCredit() {
      console.log("addCredit");
      if(!this.appUserId){
        this.$message({
          type:'info',
          message:'Please select offline'
        })
        return
      }
      // gnuserId    +   credit:this.addCreditValue
      addCredit({gnuserId:this.appUserId,credit:this.addCreditValue})
        .then((res) => {
           if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 减信用额度
    minusCredit() {
      console.log("minusCredit");
      if(!this.appUserId){
        this.$message({
          type:'info',
          message:'Please select offline'
        })
        return
      }
      // gnuserId    +   credit:this.minusCreditValue
      minusCredit({gnuserId:this.appUserId,credit:this.minusCreditValue})
        .then((res) => {
           if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style  lang="scss" scoped>
.editDownline{
  width: 600px;
  padding-top: 50px;
}
  
  @media screen and (max-width:1200px) {
    ::v-deep .el-dialog{
      width: 100% !important;
    }
    ::v-deep .el-table td, .el-table th{
      padding: 0 !important;
    }
  
}
</style>