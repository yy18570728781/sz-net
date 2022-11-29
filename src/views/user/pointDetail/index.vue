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
        <el-input v-model="search" placeholder="输入关键字搜索" @input="searchTable"> </el-input>
      </div>
    </div>
    <div class="Pdiv">
      <div class="Cdiv">
        <el-table
          v-loading="listLoading"
          :data="
            temList.filter(
              (data) =>
                !search ||
                data.userCode.toLowerCase().includes(search.toLowerCase()) ||
                data.topup.toLowerCase().includes(search.toLowerCase()) ||
                data.createdDate.toLowerCase().includes(search.toLowerCase()) ||
                data.userName.toLowerCase().includes(search.toLowerCase()) 
            )
          "
          element-loading-text="Loading"
          border
          fit
          highlight-current-row
          ref="filterTable"
          :default-sort="{}"
        >
          <el-table-column
            label="下线ID"
            align="center"
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
            label="上下分"
            align="center"
            prop="topup"
            sort-by="topup"
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
        <div class="footer_div">
          <div>总计</div>
          <div v-for="(item,index) in countList" :key="index">{{item}}</div>
        </div>
      </div>
    </div>
    
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
      countList:[],

      search:'',
      searchList:[],//搜索列表
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
        // console.log(this.currentPage,'this.curpage');
    },
    getTemList(){
      this.temList =  this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      // this.temList.push(this.count)
    },
    // 搜索List
    searchTable(){
      if(this.search == ''){
        this.countDeatil(this.pointList)
      }else{
        this.searchList = this.pointList.filter(
          (data) =>
              !this.search ||
              data.userCode.toLowerCase().includes(this.search.toLowerCase()) ||
                data.topup.toLowerCase().includes(this.search.toLowerCase()) ||
                data.createdDate.toLowerCase().includes(this.search.toLowerCase()) ||
                data.userName.toLowerCase().includes(this.search.toLowerCase())   
        )
        this.countDeatil(this.searchList)
      }
    },
    // 计算总计
    countDeatil(list){
      this.totalCount = list.length

      let userName = '';
      let remarks = '';
      let createdDate = '';
      let topup = 0;
      list.forEach(item=>{
        topup += Number(item.topup)
      })
      topup = Number(topup).toFixed(2)
      this.temList =  list.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      this.countList = [userName,topup,createdDate,]
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
            let userName = '';
            let remarks = '';
            let createdDate = '';
            let topup = 0;
            this.pointList.forEach(item=>{
              topup += Number(item.topup)
            })
            topup = Number(topup).toFixed(2)

            this.getTemList()
            this.countList = [userName,topup,createdDate,]
            this.totalCount = res.data.length
            this.listLoading = false;
          }
        );
    },
  },
};
</script>
<style lang="scss" scoped>

.Pdiv{
  width:100%;overflow-x: auto;
  .Cdiv{
    min-width: 1040px;
  }
}
::v-deep.el-table {
  overflow-x: clip;
}
::v-deep.el-table--scrollable-x .el-table__body-wrapper{
  overflow: clip !important;
}
.el-table__header-wrapper,
.el-table__body-wrapper,
.el-table__footer-wrapper {
  min-width: 1040px !important; 
  overflow: clip;
}
.el-table__body-wrapper, .el-table__footer-wrapper, .el-table__header-wrapper{
  min-width: 1040px !important; 
}
.el-table::after {
  position: relative;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow: clip;
}
.footer_div{
  width: 100%;
  min-width: 1040px;
  border-left: 1px solid #EBEEF5;
  border-bottom: 1px solid #EBEEF5;
  display: flex;
  background-color: #e2e2e2;
  font-size: 14px;
  
  div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-right: 1px solid #EBEEF5;
    padding: 12px 0;
    color: #606266;
  }
}

  .flex-box {
    display: flex;
    flex-wrap: wrap;
    position: relative;
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