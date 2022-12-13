<template>
  <div class="downline app-container">
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
            data.inviteCode.toLowerCase().includes(search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverRebateFb.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverRebate.toLowerCase().includes(search.toLowerCase()) ||
            data.profitRebate.toLowerCase().includes(search.toLowerCase()) ||
            data.loginInd.toLowerCase().includes(search.toLowerCase()) 
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{   }"
    >
      <el-table-column
        :label="$t('DownLineID')"
        align="center"
        prop="userCode"
        sort-by="userCode"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        :label="$t('DownLineName')"
        align="center"
        prop="userName"
        sort-by="userName"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        :label="$t('UserRemark')"
        align="center"
        prop="userRemark"
        sort-by="userRemark"
        sortable
        
      >
      </el-table-column>
      
      
      <el-table-column
        class-name="status-col"
        :label="$t('CreditLimit')"
        align="center"
        prop="creditLimit"
        sort-by="creditLimit"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        :label="$t('TurnoverRebateFb')"
        align="center"
        prop="turnoverRebateFb"
        sort-by="turnoverRebateFb"
        sortable
        
      >
      </el-table-column>
      
      <el-table-column
        class-name="status-col"
        :label="$t('TurnoverRebate')"
        align="center"
        prop="turnoverRebate"
        sort-by="turnoverRebate"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('ProfitRebate')"
        align="center"
        prop="profitRebate"
        sort-by="profitRebate"
        sortable
        
      >
      </el-table-column>
      <!-- <el-table-column
        class-name="status-col"
        label="类型"
        align="center"
        prop="userType"
        sort-by="userType"
        sortabl
      >
      </el-table-column> -->
      <el-table-column
        :label="$t('ProxyLogin')"
        align="center"
        prop="loginInd"
        sort-by="loginInd"
        sortable
        
      >
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('Operation')"
        
        fixed="right"
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
            icon="el-icon-more"
            circle
            v-if="scope.row.cashInd == 'N'"
            :disabled="scope.row.cashInd !== 'N'"
            @click="moreInfo(scope.row)"
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

    <!-- 更多信息 -->
    <el-dialog :title="$t('UpDownTitle')" :visible.sync="dialogMoreVisible" width="40%">
      <el-form label-position="left" label-width="120px">

        <el-form-item :label="$t('DownLineName')">
          <el-input v-model="userName" disabled></el-input>
        </el-form-item>

        <el-form-item :label="$t('CurrentPoints')">
          <el-input v-model="nowPoint" disabled></el-input>
        </el-form-item>

        <el-form-item :label="$t('UpPoints')">
          <el-input v-model="addPoint" maxlength="11" :disabled="userInfo.cashInd !== 'N'">
            <el-button slot="append" type="primary" @click="topupPoint"
              >{{$t('Determine')}}</el-button
            >
          </el-input>
        </el-form-item>

        <el-form-item :label="$t('DownPoints')">
          <el-input v-model="minusPoint" maxlength="11" :disabled="userInfo.cashInd !== 'N'">
            <el-button slot="append" type="primary" @click="withdrawPoint"
              >{{$t('Determine')}}</el-button
            >
          </el-input>
        </el-form-item>

        <el-form-item :label="$t('NowCreditLimit')">
          <el-input v-model=" nowCredit" maxlength="11" disabled>
          </el-input>
        </el-form-item>

        <el-form-item :label="$t('AddCreditLimit')">
          <el-input v-model="addCreditValue" maxlength="11" :disabled="userInfo.cashInd !== 'N'">
            <el-button slot="append" type="primary" @click="addCredit"
              >{{$t('Determine')}}</el-button
            >
          </el-input>
        </el-form-item>

        <el-form-item :label="$t('ReductionCreditLimit')">
          <el-input v-model="minusCreditValue" maxlength="11" :disabled="userInfo.cashInd !== 'N'">
            <el-button slot="append" type="primary" @click="minusCredit"
              >{{$t('Determine')}}</el-button
            >
          </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog
      :title="$t('Edit')"
      :visible.sync="dialogEditVisible"
      @close="closeEdit"
      width="40%"
    >
      <el-form :model="currentDown">
        <el-form-item :label="$t('UserRemark')" :label-width="formLabelWidth">
          <el-input
            v-model="currentDown.userRemark"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item :label="$t('TurnoverRebate')" :label-width="formLabelWidth">
          <!-- /^\d+\.?\d{0,2}%$/ -->
          <!-- /^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/ -->
          <el-input
            v-model="currentDown.turnoverRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item :label="$t('ProfitRebate')" :label-width="formLabelWidth">
          <el-input
            v-model="currentDown.profitRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('TurnoverRebateFbb')" :label-width="formLabelWidth">
          <el-input
            v-model="currentDown.turnoverRebateFb"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('ProxyLogin')" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="currentDown.loginInd" label="Yes">Yes</el-radio>
            <el-radio v-model="currentDown.loginInd" label="No">No</el-radio>
          </template>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeEdit">{{$t('Cancel')}}</el-button>
        <el-button type="primary" @click="editRebate">{{$t('Determine')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getDownline, updateRebate ,topupPoint,withdrawPoint,addCredit,minusCredit,getCreditLimit} from "@/api/user";
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
      searchList:[],//搜索列表

      userInfo: JSON.parse(localStorage.getItem('userInfo')),
      userName:'',
      creditLimit: "" ,
      appUserId: "",
      gnuserId: "",
      currentPoint: "",
      // 上下分
      addPoint: "",
      minusPoint: "",
      // 加减信用额度
      addCreditValue: "",
      minusCreditValue: "",
      nowPoint:'',//当前会员积分
      nowCredit:'',//当前信用额度

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
    };
  },
  created() {
    this.getList();
  },
  components: {},
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
      console.log(val,'val');
        //改变默认的页数
        this.currentPage=val
        if(this.search){
          this.searchTable()
        }else{
          this.getTemList()
        }
    },
    getTemList(){
      this.temList =  this.downlineList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.unshift(this.count)
    },

    // 当前信用额度
    getNow(){
      getCreditLimit({gnuserId:this.gnuserId}).then(res=>{
        
        this.nowPoint= res.data.point
        this.nowCredit= res.data.credit
      })
    },
    // 搜索List
    searchTable(){
      if(this.search == ''){
        this.totalCount = this.downlineList.length
        this.temList =  this.downlineList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      }else{
        this.searchList = this.downlineList.filter(
          (data) =>
              !this.search ||
            data.userCode.toLowerCase().includes(this.search.toLowerCase()) ||
            data.userName.toLowerCase().includes(this.search.toLowerCase()) ||
            data.userRemark.toLowerCase().includes(this.search.toLowerCase()) ||
            data.inviteCode.toLowerCase().includes(this.search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(this.search.toLowerCase()) ||
            data.turnoverRebateFb.toLowerCase().includes(this.search.toLowerCase()) ||
            data.turnoverRebate.toLowerCase().includes(this.search.toLowerCase()) ||
            data.profitRebate.toLowerCase().includes(this.search.toLowerCase()) ||
            data.loginInd.toLowerCase().includes(this.search.toLowerCase()) 

        )
        this.currentPage=1
        this.totalCount = this.searchList.length
        this.temList =  this.searchList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      }
    },

    getList() {
      this.currentPage = 1
      this.listLoading = true;
      getDownline()
        .then((res) => {
          this.downlineList = res.data;
          this.getTemList()
          this.totalCount = res.data.length
          this.listLoading = false;
          
        })
        .catch((err) => {
          this.listLoading = false;

        });
    },
    downlineByID(id) {
      this.currentDown = this.downlineList.filter((item) => {
        return item.gnuserId == id;
      })?.[0];
    },
    moreInfo(row) {
      this.userName = row.userName
      this.gnuserId = row.gnuserId
      this.getNow()
      this.dialogMoreVisible = true;
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
        ) &&
        /^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(
          this.currentDown.turnoverRebateFb
        )
      ) {
        const { gnuserId, turnoverRebate, profitRebate , userRemark , turnoverRebateFb , loginInd } = this.currentDown;
        updateRebate({ gnuserId, turnoverRebate, profitRebate , userRemark , turnoverRebateFb , loginInd})
          .then((res) => {
            if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.getList()
            this.dialogEditVisible = false
          }else{
            this.$message({
              type:'error',
              message:res.data.remark
            })
          }
          })
          .catch((err) => {
            console.log(err);
          });
          
      } else {
        this.$message({
          type: "info",
          message: this.$t('MessageTip.CommissionTip'),
        });
      }
    },
    closeEdit() {
      this.dialogEditVisible = false;
      this.getList();
    },

    // 上分
    topupPoint() {
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.addPoint)){
        topupPoint({gnuserId:this.gnuserId,point:this.addPoint})
        .then((res) => {
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.addPoint = ''
            this.getNow()
          }else{
            this.$message({
              type:'error',
              message:res.data.remark
            })
          }

        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        this.$message({
          type: "info",
          message: this.$t('MessageTip.CreditLimitTip'),
        });
      }
      
    },
    // 下分
    withdrawPoint() {
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.minusPoint)){
        withdrawPoint({gnuserId:this.gnuserId,point:this.minusPoint})
        .then((res) => {
          // this.getInfo()
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.minusPoint = ''
            this.getNow()
          }else{
            this.$message({
              type:'error',
              message:res.data.remark
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        this.$message({
          type: "info",
          message: this.$t('MessageTip.CreditLimitTip'),
        });
      }
      
    },
    // 加信用额度
    addCredit() {
      // gnuserId    +   credit:this.addCreditValue
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.addCreditValue)){
        addCredit({gnuserId:this.gnuserId,credit:this.addCreditValue})
        .then((res) => {
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.addCreditValue = ''
            this.getNow()
          }else{
            this.$message({
              type:'error',
              message:res.data.remark
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        this.$message({
          type: "info",
          message: this.$t('MessageTip.CreditLimitTip'),
        });
      }
      
    },
    // 减信用额度
    minusCredit() {
      
      // gnuserId    +   credit:this.minusCreditValue
      if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.minusCreditValue)){
        minusCredit({gnuserId:this.gnuserId,credit:this.minusCreditValue})
        .then((res) => {
           if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.minusCreditValue = ''
            this.getNow()
          }else{
            this.$message({
              type:'error',
              message:res.data.remark
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        this.$message({
          type: "info",
          message: this.$t('MessageTip.CreditLimitTip'),
        });
      }
      
    },
  },
};
</script>
<style lang="scss" scoped>
.flex-box{
  display:flex;
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
  .el-button{
      margin: 0;
    }
}
@media only screen and (max-width: 1200px) {
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
  
  .el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    overflow-x: auto;
  }
  
}

   
</style>