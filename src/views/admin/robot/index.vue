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
import { getRobot } from "@/api/robot";
export default {
  name: "robot",
  data() {
    return { listLoading: false, search: "" ,
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
          console.log(res);
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