<template>
  <div class="member">
    <div class="flex-box">
      <div class="item">
        <el-input v-model="searchFrom.userCode" :placeholder="$t('InputTip.SearchUsercode')">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-input v-model="searchFrom.userName" :placeholder="$t('InputTip.SearchUserName')">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-input v-model="searchFrom.uplineCode" :placeholder="$t('InputTip.SearchUplineCode')">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-input v-model="searchFrom.uplineName" :placeholder="$t('InputTip.SearchUplineName')">
          <!-- <el-button slot="append" icon="el-icon-search" @click="getList"
            >搜索</el-button
          > -->
        </el-input>
      </div>
      <div class="item">
        <el-button type="primary" @click="getList"  v-loading.fullscreen.lock="butLoading">{{$t('Search')}}</el-button>
      </div>
      <div class="item item1">
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
            data.profitRebate.toLowerCase().includes(search.toLowerCase()) ||
            data.uplineUserCode.toLowerCase().includes(search.toLowerCase()) ||
            data.userType.toLowerCase().includes(search.toLowerCase()) ||
            data.level.toLowerCase().includes(search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverRebate.toLowerCase().includes(search.toLowerCase()) ||
            data.turnoverRebateFb.toLowerCase().includes(search.toLowerCase()) 
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
        :label="$t('MemberID')"
        align="center"
        prop="userCode"
        sort-by="userCode"
        sortable
      >
      
      </el-table-column>
      <el-table-column
        :label="$t('MemberName')"
        align="center"
        prop="userName"
        sort-by="userName"
        sortable
      >
      </el-table-column>
      <el-table-column
        :label="$t('Level')"
        align="center"
        prop="level"
        sort-by="level"
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
        :label="$t('TurnoverRebateFb')"
        align="center"
        prop="turnoverRebateFb"
        sort-by="turnoverRebateFb"
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

      <el-table-column
        class-name="status-col"
        :label="$t('UplineUserCode')"
        align="center"
        prop="uplineUserCode"
        sort-by="uplineUserCode"
        sortable
      >
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('UplineUserName')"
        align="center"
        prop="uplineUserName"
        sort-by="uplineUserName"
        sortable
      >
      </el-table-column>

      <el-table-column
        class-name="status-col"
        :label="$t('UserType')"
        align="center"
        prop="userType"
        sort-by="userType"
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
import { getMemberList } from "@/api/member";
export default {
  name: "member",
  data() {
    return {
      searchFrom: {
        userCode: "",
        userName: "",
        uplineCode: "",
        uplineName: "",
      },
      listLoading: false,
      search: "",

      butLoading:false,

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
      countList:[],//总计

      searchList:[],//搜索列表
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
        //改变默认的页数
        this.currentPage=val
        if(this.search){
          this.searchTable()
        }else{
          this.getTemList()
        }
    },
    getTemList(){
      this.temList =  this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      
      // this.$nextTick(()=>{
      //    this.temList.unshift(this.count)
      // })
      // console.log(this.temList);
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
            data.userName.toLowerCase().includes(this.search.toLowerCase()) ||
            data.profitRebate.toLowerCase().includes(this.search.toLowerCase()) ||
            data.uplineUserCode.toLowerCase().includes(this.search.toLowerCase()) ||
            data.userType.toLowerCase().includes(this.search.toLowerCase()) ||
            data.level.toLowerCase().includes(this.search.toLowerCase()) ||
            data.creditLimit.toLowerCase().includes(this.search.toLowerCase()) ||
            data.turnoverRebate.toLowerCase().includes(this.search.toLowerCase()) ||
            data.turnoverRebateFb.toLowerCase().includes(this.search.toLowerCase())

        )
        this.currentPage=1
        // this.countDeatil(this.searchList)
        this.totalCount = this.searchList.length
        this.temList =  this.searchList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)
      }
    },

    getList() {
      this.search = '';
      this.currentPage = 1
      this.butLoading = true;
      this.listLoading = true;
      const { userCode, userName, uplineCode, uplineName } = this.searchFrom;
      getMemberList({ userCode, userName, uplineCode, uplineName })
        .then((res) => {
          this.butLoading = false;
          this.memberList = res.data;
          this.totalCount = res.data.length
          this.getTemList()
          this.listLoading = false;
        })
        .catch((err) => {
          this.butLoading = false;
          this.listLoading = false;
        });
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