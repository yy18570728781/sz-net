<template>
  <div class="app-container">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="search" :placeholder="$t('InputTip.SearchKey')" @input="searchTable"> </el-input>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="
        temList.filter(
          (data) =>
            !search ||
            data.userCode.toLowerCase().includes(search.toLowerCase()) ||
            data.userName.toLowerCase().includes(search.toLowerCase()) ||
            data.userRemark.toLowerCase().includes(search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverRebate.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverRebateFb.toLowerCase().includes(search.toLowerCase()) ||
            data.profitRebate.toLowerCase().includes(search.toLowerCase()) ||
            data.loginInd.toLowerCase().includes(search.toLowerCase()) ||
            data.userType.toLowerCase().includes(search.toLowerCase())
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{ prop: '', order: '' }"
    >
      <el-table-column
        :label="$t('UserCode')"
        align="center"
        sortable
        prop="userCode"
        sort-by="userCode"
      >
      </el-table-column>
      <el-table-column :label="$t('UserName')" align="center" sortable prop="userName">
      </el-table-column>
      <el-table-column :label="$t('NoteName')" align="center" sortable prop="userRemark">
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
        :label="$t('CreditLimit')"
        align="center"
        sortable
        prop="creditLimit"
        sort-by="creditLimit"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('TurnoverRebate')"
        align="center"
        sortable
        prop="turnoverRebate"
        sort-by="turnoverRebate"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('TurnoverRebateFb')"
        align="center"
        sortable
        prop="turnoverRebateFb"
        sort-by="turnoverRebateFb"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('ProfitRebate')"
        align="center"
        sortable
        prop="profitRebate"
        sort-by="profitRebate"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('UserType')"
        align="center"
        sortable
        prop="userType"
        sort-by="userType"
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('ProxyLogin')"
        align="center"
        sortable
        prop="loginInd"
        sort-by="loginInd"
      >
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('Operation')"
        fixed="right"
        sortable
      >
        <template slot-scope="scope">
          <div class="but_box">
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
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="currentPage" 
        :page-sizes="pageSizes" 
        :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" 
        :total="totalCount">
      </el-pagination>
    </div>
    <!-- 修改 Edit -->
    <el-dialog
      :title="$t('Edit')"
      :visible.sync="dialogFormVisible"
      @close="closeEdit"
    >
      <el-form :model="currentMember">
        <el-form-item :label="$t('NoteName')" :label-width="formLabelWidth">
          <el-input
            v-model="currentMember.userRemark"
            maxlength="45"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('TurnoverRebate')" :label-width="formLabelWidth">
          <el-input
            v-model="currentMember.turnoverRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('ProfitRebate')" :label-width="formLabelWidth">
          <el-input
            v-model="currentMember.profitRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('TurnoverRebateFb')" :label-width="formLabelWidth">
          <el-input
            v-model="currentMember.turnoverRebateFb"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('ProxyLogin')" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="currentMember.loginInd" label="Yes">Yes</el-radio>
            <el-radio v-model="currentMember.loginInd" label="No">No</el-radio>
          </template>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeEdit">{{$t('Cancel')}}</el-button>
        <el-button type="primary" @click="editMember" v-loading.fullscreen.lock="butLoading">{{$t('Determine')}}</el-button>
      </div>
    </el-dialog>
    <!-- 增加信用 -->
    <el-dialog
      :title="$t('AddCreditLimit')"
      :visible.sync="dialogFormVisibleAdd"
      @close="closeAddCredit"
    >
      <el-form :model="currentMember">
        <el-form-item :label="$t('AddCreditLimit')" :label-width="formLabelWidth">
          <el-input v-model="credit" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeAddCredit">{{$t('Cancel')}}</el-button>
        <el-button type="primary" @click="addCredit" v-loading.fullscreen.lock="butLoading">{{$t('Determine')}}</el-button>
      </div>
    </el-dialog>
    <!-- 降低信用 -->
    <el-dialog
      :title="$t('ReductionCreditLimit')"
      :visible.sync="dialogFormVisibleMinus"
      @close="closeMinusCredit"
    >
      <el-form :model="currentMember">
        <el-form-item :label="$t('ReductionCreditLimit')" label-width="140px">
          <el-input v-model="credit" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeMinusCredit">{{$t('Cancel')}}</el-button>
        <el-button type="primary" @click="minusCredit" v-loading.fullscreen.lock="butLoading">{{$t('Determine')}}</el-button>
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
      formLabelWidth: "140px",

      // 分页
      // 总数据
      memberList: [],
      // 展示数据
      temList:[],
      // 默认显示第几页
      currentPage:1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount:1,
      // 个数选择器（可修改）
      pageSizes:[5,10,20,30],
      // 默认每页显示的条数（可修改）
      PageSize:10,

      count:{},//总计

      search: "",
      searchList:[],//搜索列表
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //每页显示的条数
    handleSizeChange(val) {
        // 改变每页显示的条数 
        this.PageSize=val
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.currentPage=1
        if(this.search){
          this.searchTable()
        }else{
          this.getTemList()
        }
    },
    //显示第几页
    handleCurrentChange(val) {
        //改变默认的页数
        this.currentPage=val
        if(this.search){
          this.searchTable()
        }else{
          this.getTemList()
        }
    },
    getTemList(){
      this.temList =  this.list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      
      // this.$nextTick(()=>{
      //    this.temList.unshift(this.count)
      // })
      // console.log(this.temList);
    },
    // 搜索List
    searchTable(){
      if(this.search == ''){
        this.totalCount = this.list.length
      }else{
        this.searchList = this.list.filter(
          (data) =>
              !this.search ||
              data.userCode.toLowerCase().includes(this.search.toLowerCase()) ||
              data.userName.toLowerCase().includes(this.search.toLowerCase()) ||
            data.userRemark.toLowerCase().includes(this.search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(this.search.toLowerCase()) ||
            data.turnoverRebate.toLowerCase().includes(this.search.toLowerCase()) ||
            data.turnoverRebateFb.toLowerCase().includes(this.search.toLowerCase()) ||
            data.profitRebate.toLowerCase().includes(this.search.toLowerCase()) ||
            data.loginInd.toLowerCase().includes(this.search.toLowerCase()) ||
            data.userType.toLowerCase().includes(this.search.toLowerCase())

        )
        // this.countDeatil(this.searchList)
        this.totalCount = this.searchList.length
        this.currentPage=1
        this.temList =  this.searchList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      }
    },
    fetchData() {
      this.listLoading = true;
      this.search = '';
      this.currentPage = 1
      getList()
        .then((res) => {
          this.list = res.data;
          this.totalCount = res.data.length
          this.getTemList()
          this.listLoading = false;
        })
        .catch((err) => {
          this.listLoading = false;
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
            if (res.data.status == 'Success' && res.data.remark == '') {
              this.$message({ type: "success", message: "success" });
              this.closeEdit();
              
            } else {
              this.$message({ type: "error", message: res.data.remark || "error" });
              this.butLoading = false
            }
            
          })
          .catch((err) => {
          });
      } else {
        this.butLoading = false
        this.$message({
          type: "info",
          message:this.$t('MessageTip.ProfitsTip'),
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
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.credit)){
        addSeniorCredit({
          gnuserId,
          credit: this.credit,
        })
          .then((res) => {
            this.butLoading = false
            if (res.data.status == 'Success' && res.data.remark == '') {
              this.$message({ type: "success", message: "success" });
              this.closeAddCredit();
              
            } else {
              this.$message({ type: "info", message: res.data.remark ||"error" });
            }
            
            
          })
          .catch((err) => {
            this.butLoading = false
          });
      }else{
        this.butLoading = false
        this.$message({
          type: "info",
          message:this.$t('MessageTip.CreditLimitTip'),
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
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.credit)){
        minusSeniorCredit({
          gnuserId,
          credit: this.credit,
        })
          .then((res) => {
            this.butLoading = false
            if (res.data.status == "Success" && res.data.remark == '') {
              this.$message({ type: "success", message: "success" });
              this.closeMinusCredit();
            } else {
              this.$message({ type: "info", message: res.data.remark ||"error" });
            }
            this.butLoading = false
            this.fetchData();
          })
          .catch((err) => {
            this.butLoading = false
          });
      }else{
        this.butLoading = false
        this.$message({
          type: "info",
          message:this.$t('MessageTip.CreditLimitTip'),
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
<style lang="scss" scoped>
.flex-box{
  display: flex;
  justify-content: end;
  .item{
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }  
}
.but_box{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: auto;
}
@media only screen and (max-width: 1200px) {
.app-container{
  ::v-deep .el-form{
    width: 320px !important;
    margin: 0 !important;
  }
  ::v-deep .el-dialog{
    width: 375px !important;
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
  .el-button{
    margin: 0;
  }
}
.el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
        overflow-x: auto;
    }
  
}
  
  
</style>