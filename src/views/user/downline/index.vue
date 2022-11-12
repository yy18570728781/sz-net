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
        temList.filter(
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
        label="备注名"
        align="center"
        prop="userRemark"
        sort-by="userRemark"
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
        label="球网流水佣金 %"
        align="center"
        prop="turnoverRebateFb"
        sort-by="turnoverRebateFb"
        sortable
      >
      </el-table-column>
      
      <el-table-column
        class-name="status-col"
        label="流水提成%"
        align="center"
        prop="turnoverRebate"
        sort-by="turnoverRebate"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="利润提成%"
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
        label="代理网登录"
        align="center"
        prop="loginInd"
        sort-by="loginInd"
        sortable
      >
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        
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
            v-if="scope.row.cashInd == 'N'"
            :disabled="scope.row.cashInd !== 'N'"
            @click="moreInfo(scope.row)"
          ></el-button>
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
    <el-dialog title="收货地址" :visible.sync="dialogMoreVisible" width="40%">
      <el-form label-position="left" label-width="120px">

        <el-form-item label="下线名:">
          <el-input v-model="userName" disabled></el-input>
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
          <el-input v-model="creditLimit" maxlength="11" disabled>
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
    </el-dialog>
    <!-- 修改 -->
    <el-dialog
      title="修改 Edit"
      :visible.sync="dialogEditVisible"
      @close="closeEdit"
      width="40%"
    >
      <el-form :model="currentDown">
        <el-form-item label="备注名" :label-width="formLabelWidth">
          <el-input
            v-model="currentDown.userRemark"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="流水提成 %" :label-width="formLabelWidth">
          <!-- /^\d+\.?\d{0,2}%$/ -->
          <!-- /^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/ -->
          <el-input
            v-model="currentDown.turnoverRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="利润提成 %" :label-width="formLabelWidth">
          <el-input
            v-model="currentDown.profitRebate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="球网流水佣金 %" :label-width="formLabelWidth">
          <el-input
            v-model="currentDown.turnoverRebateFb"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="代理网登录" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="currentDown.loginInd" label="Yes">Yes</el-radio>
            <el-radio v-model="currentDown.loginInd" label="No">No</el-radio>
          </template>
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
import { getDownline, updateRebate ,topupPoint,withdrawPoint,addCredit,minusCredit,} from "@/api/user";
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

      userInfo: JSON.parse(localStorage.getItem('userInfo')),
      userName:'',
      creditLimit: "" ,
      appUserId: "",
      currentPoint: "",
      // 上下分
      addPoint: "",
      minusPoint: "",
      // 加减信用额度
      addCreditValue: "",
      minusCreditValue: "",

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
        this.getTemList()
    },
    //显示第几页
    handleCurrentChange(val) {
      console.log(val,'val');
        //改变默认的页数
        this.currentPage=val
        this.getTemList()
        console.log(this.currentPage,'this.curpage');
    },
    getTemList(){
      this.temList =  this.downlineList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.push(this.count)
    },

    getList() {
      this.listLoading = true;
      getDownline()
        .then((res) => {
          console.log(res);
          this.downlineList = res.data;
          this.getTemList()
          this.totalCount = res.data.length
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
    moreInfo(row) {
      this.userName = row.userName
      this.appUserId = row.appUserId
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
        console.log({ gnuserId, turnoverRebate, profitRebate });
        updateRebate({ gnuserId, turnoverRebate, profitRebate , userRemark , turnoverRebateFb , loginInd})
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
          message: "流水提成、球网流水佣金与利润提成皆为0到100之间最多允许包含2位小数",
        });
      }
    },
    closeEdit() {
      this.dialogEditVisible = false;
      this.getList();
    },

    // 上分
    topupPoint() {
      console.log("topupPoint");
      
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
            this.addPoint = ''
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
    },
    // 下分
    withdrawPoint() {
      
      // gnuserId    +   point:this.minusPoint
      withdrawPoint({gnuserId:this.appUserId,point:this.minusPoint})
        .then((res) => {
          console.log(res);
          // this.getInfo()
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.minusPoint = ''
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
    },
    // 加信用额度
    addCredit() {
      console.log("addCredit");
      // gnuserId    +   credit:this.addCreditValue
      addCredit({gnuserId:this.appUserId,credit:this.addCreditValue})
        .then((res) => {
          if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.addCreditValue = ''
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
    },
    // 减信用额度
    minusCredit() {
      console.log("minusCredit");
      
      // gnuserId    +   credit:this.minusCreditValue
      minusCredit({gnuserId:this.appUserId,credit:this.minusCreditValue})
        .then((res) => {
           if(res.data.remark == '' || res.data.status == 'success'){
            this.$message({
              type:'success',
              message:res.message
            })
            this.minusCreditValue = ''
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