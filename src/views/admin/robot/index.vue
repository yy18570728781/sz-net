<template>
  <div class="robot app-container">
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
            data.userType.toLowerCase().includes(search.toLowerCase())
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{  }"
    >
      <el-table-column
        label="机器人 ID"
        align="center"
        fixed="left"
        sortable
        prop="userCode"
        sort-by="userCode"
      >
      </el-table-column>
      <el-table-column
        label="机器人名"
        align="center"
        sortable
        prop="userName"
        sort-by="userName"
      >
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
        label="类型"
        align="center"
        sortable
        prop="userType"
        sort-by="userType"
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
            icon="el-icon-more"
            circle
            
            @click="moreInfo(scope.row)"
          ></el-button>
          <!-- v-if="scope.row.cashInd == 'N'"
            :disabled="scope.row.cashInd !== 'N'" -->
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
    <el-dialog title="上下分" :visible.sync="dialogMoreVisible" width="40%">
      <el-form label-position="left" label-width="120px">

        <el-form-item label="下线名:">
          <el-input v-model="userName" disabled></el-input>
        </el-form-item>

        <el-form-item label="当前会员积分:">
          <el-input v-model="nowPoint" disabled></el-input>
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
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { getRobot } from "@/api/robot";
import { getDownline, updateRebate ,topupPoint,withdrawPoint,addCredit,minusCredit,getCreditLimit} from "@/api/user";
export default {
  name: "robot",
  data() {
    return { 
      listLoading: false, search: "" ,
      downlineList: [],
      currentDown: {},
      dialogMoreVisible: false,
      dialogEditVisible: false,
      formLabelWidth: "120px",

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
       robotList: [],
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
    };
  },
  created() {
    this.getList();
  },
  components: {},
  methods: {
    // 上下分
    moreInfo(row) {
      this.userName = row.userName
      this.gnuserId = row.gnuserId
      this.getNow()
      this.dialogMoreVisible = true;
    },
    // 当前信用额度
    getNow(){
      getCreditLimit({gnuserId:this.gnuserId}).then(res=>{
        
        this.nowPoint= res.data.point
        this.nowCredit= res.data.credit
      })
    },
    downlineByID(id) {
      this.currentDown = this.downlineList.filter((item) => {
        return item.gnuserId == id;
      })?.[0];
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
        });
      }else{
        this.$message({
          type: "info",
          message: "最多七位数,允许包含2位小数",
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
        });
      }else{
        this.$message({
          type: "info",
          message: "最多七位数,允许包含2位小数",
        });
      }
      
    },
    // -------------------------------------------------------------

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
      this.temList =  this.robotList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      
      // this.$nextTick(()=>{
      //    this.temList.unshift(this.count)
      // })
      // console.log(this.temList);
    },
    getList() {
      this.listLoading = true;

      getRobot()
        .then((res) => {
          this.robotList = res.data;
          this.totalCount = res.data.length
            this.getTemList()
          this.listLoading = false;
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
  justify-content: end
  .item
    margin-right: 10px
    margin-top: 10px
    margin-bottom: 10px
    
</style>