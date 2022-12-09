<template>
  <div class="member">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="searchFrom.userCode" placeholder="请输入会员 ID">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-input v-model="searchFrom.userName" placeholder="请输入会员名">
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
        <el-input v-model="search" placeholder="输入关键字搜索" @input="searchTable"> </el-input>
      </div>
    </div>

    <el-table
      v-loading="listLoading"
      :data="
        temList.filter(
          (data) =>
            !search ||
            data.userCode.toLowerCase().includes(search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(search.toLowerCase()) ||
            data.userName.toLowerCase().includes(search.toLowerCase()) ||
            data.createdDate.toLowerCase().includes(search.toLowerCase()) ||
            data.createdByName.toLowerCase().includes(search.toLowerCase())
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      ref="filterTable"
      :default-sort="{ }"
    >
      <el-table-column
        label="会员 ID"
        align="center"
        prop="userCode"
        sort-by="userCode"
        sortable
      >
      </el-table-column>
      <el-table-column label="会员名" align="center" prop="userName" sortable>
      </el-table-column>
      <el-table-column
        label="加/减信用额度"
        align="center"
        prop="creditLimit"
        sort-by="creditLimit"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="创建者"
        align="center"
        prop="createdByName"
        sort-by="createdByName"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="时间"
        align="center"
        prop="createdDate"
        sort-by="createdDate"
        sortable
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
import { creditTxn } from "@/api/member";
export default {
  name: "creditDetail",
  data() {
    return {
      searchFrom: {
        userCode: "",
        userName: "",
        fromDate: new Date(new Date().setHours(0, 0, 0, 0)), //必填
        toDate: new Date(),//必填
      },
      memberList: [],
      // listLoading: true,
      listLoading: false,

      value2: "",

      search:'',
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
      butLoading:false,
    };
  },
  components: {},
  created(){
    this.getList()
  },
  methods: {
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
    // 搜索List
    searchTable(){
      if(this.search == ''){
        this.totalCount = this.memberList.length
        this.getTemList()
      }else{
        this.searchList = this.memberList.filter(
          (data) =>
              !this.search ||
              data.userCode.toLowerCase().includes(this.search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(this.search.toLowerCase()) ||
            data.userName.toLowerCase().includes(this.search.toLowerCase()) ||
            data.createdDate.toLowerCase().includes(this.search.toLowerCase()) ||
            data.createdByName.toLowerCase().includes(this.search.toLowerCase())

        )
        this.currentPage=1
        // this.countDeatil(this.searchList)
        this.totalCount = this.searchList.length
        this.temList =  this.searchList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      }
    },

    getTemList(){
      this.temList =  this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      
      // this.$nextTick(()=>{
      //    this.temList.unshift(this.count)
      // })
      // console.log(this.temList);
    },

    getList() {
      this.search = '';
      this.currentPage = 1
      this.butLoading = true
      if (this.searchFrom.fromDate && this.searchFrom.toDate) {
        this.listLoading = true;
        let temRow = {...this.searchFrom}
        temRow.fromDate = this.getDataTime(temRow.fromDate)
        temRow.toDate = this.getDataTime(temRow.toDate)
        const { userCode, userName, fromDate, toDate } = temRow;
        creditTxn({ userCode, userName, fromDate, toDate })
          .then((res) => {
            this.butLoading = false
            this.memberList = res.data;
             this.totalCount = res.data.length
            this.getTemList()
            this.listLoading = false;
          })
          .catch((err) => {
            this.butLoading = false
            this.listLoading = false;
          });
      } else {
        this.butLoading = false
        this.$message({ type: "info", message: "请选择开始/结束时间" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.member {
  padding: 0 20px;
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
}
@media only screen and (max-width: 1200px) {
  // .app-container{
    ::v-deep .el-form{
      width: 320px !important;
      margin: 0 !important;
      .el-button{
      
      }
    }
    ::v-deep .el-dialog{
      width: 100% !important;
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
    .item1{
      position: static !important;
      
    }
    
    
  // }
} 
</style>