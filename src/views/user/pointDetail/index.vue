<template>
  <div class="userPoint app-container">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="searchFrom.userCode" placeholder="请输入下线 ID">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-input v-model="searchFrom.userName" placeholder="请输入下线名">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-date-picker
          v-model="searchFrom.fromDate"
          type="datetime"
          placeholder="选择开始日期时间"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
        >
        </el-date-picker>
        ~
        <el-date-picker
          v-model="searchFrom.toDate"
          type="datetime"
          placeholder="选择结束日期时间"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
        >
        </el-date-picker>
      </div>
      <div class="item">
        <el-button type="primary" @click="getList" v-loading.fullscreen.lock="butLoading">搜索</el-button>
      </div>
    </div>

    <el-table
      v-loading="listLoading"
      :data="temList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{   }"
    >
      <el-table-column
        label="会员 ID"
        align="center"
        prop="userCode"
        sort-by="userCode"
        sortable
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        label="会员名"
        align="center"
        prop="userName"
        sort-by="userName"
        sortable
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        label="上下分"
        align="center"
        prop="topup"
        sort-by="topup"
        sortable
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        label="备注"
        align="center"
        prop="remarks"
        sort-by="remarks"
        sortable
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="时间"
        align="center"
        prop="createdDate"
        sort-by="createdDate"
        sortable
        show-overflow-tooltip
      >
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
  </div>
</template>
<script>
import { downlineTopupTxn } from "@/api/user";
export default {
  name: "userPoint",
  data() {
    return {
      // listLoading:true,
      butLoading: false,
      listLoading: false,
      searchFrom: {
        userCode: "", //下线 ID
        userName: "", //下线名
        fromDate: new Date(Date.now() - (24 * 60 * 60 * 1000 * 30)), //必填
        toDate: new Date(),//必填
      },
      // 分页
      // 总数据
      pointList: [],
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
    console.log(111);
    this.getList();
  },
  components: {},
  
  methods:{
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
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.temList.push(this.count)
    },

    getList() {
      this.listLoading = true;
      this.butLoading = true;
      const { userCode, userName, fromDate, toDate } = this.searchFrom;
        downlineTopupTxn({ userCode, userName, fromDate, toDate }).then(
          
          (res) => {
            this.butLoading = false
            console.log(res);
            this.pointList = res.data;
            this.getTemList()
            this.totalCount = res.data.length
            this.listLoading = false;
          }
        );
      // if (this.searchFrom.fromDate && this.searchFrom.toDate) {
      //   // uplineId  登录回馈的 gnuserId  + searchFrom
      //   const { userCode, userName, fromDate, toDate } = this.searchFrom;
      //   downlineTopupTxn({ userCode, userName, fromDate, toDate }).then(
      //     (res) => {
      //       console.log(res);
      //       this.pointList = res.data;
      //       this.listLoading = false;
      //     }
      //   );
      // } else {
      //   this.listLoading = false;
      //   this.$message({ type: "info", message: "请选择开始/结束时间" });
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
.flex-box {
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
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