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
      <div class="item item1">
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
            data.topup.toLowerCase().includes(search.toLowerCase()) ||
            data.remarks.toLowerCase().includes(search.toLowerCase())
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
        fromDate: new Date(new Date().setHours(0, 0, 0, 0)), //必填
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

      search:'',
    };
  },
  created() {
    this.getList();
  },
  components: {},
  
  methods:{

    // 时间格式转换
    getDataTime(dataTime){
      //this.dateTime  是需要转换的值
      let date = new Date(dataTime)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      let mm = date.getMinutes()
      let ss = date.getSeconds()
      h = h < 10 ? ('0' + h) : h
      mm = mm < 10 ? ('0' + mm) : mm
      ss = ss < 10 ? ('0' + ss) : ss
      const time =  y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' +ss ;
      return time
    },

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
        // console.log(this.currentPage,'this.curpage');
    },
    getTemList(){
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.push(this.count)
    },

    getList() {
      this.currentPage = 1
      this.listLoading = true;
      this.butLoading = true;
      // console.log(this.searchFrom);
      let temRow = {...this.searchFrom}
      temRow.fromDate = this.getDataTime(temRow.fromDate)
      temRow.toDate = this.getDataTime(temRow.toDate)
      const { userCode, userName, fromDate, toDate } = temRow;
        downlineTopupTxn({ userCode, userName, fromDate, toDate }).then(
          
          (res) => {
            this.butLoading = false
            // console.log(res);
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
    .item1{
      position: absolute;
      right:0;
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