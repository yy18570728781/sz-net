(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13536bb4"],{c1e0:function(e,t,n){},c24f:function(e,t,n){"use strict";n.d(t,"j",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"r",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"q",(function(){return c})),n.d(t,"s",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"p",(function(){return b})),n.d(t,"i",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return h})),n.d(t,"d",(function(){return w})),n.d(t,"h",(function(){return C})),n.d(t,"k",(function(){return v})),n.d(t,"m",(function(){return I})),n.d(t,"l",(function(){return L}));var r=n("b775");function o(){return Object(r["a"])({url:"/WebC/api/Profile",method:"get"})}function a(){return Object(r["a"])({url:"/WebC/api/Downline",method:"get"})}function i(e){return Object(r["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/WebC/api/TopupTxn",method:"get",params:e})}function l(e){return Object(r["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:e})}function u(e){return Object(r["a"])({url:"/WebC/api/GetCreditLimit",method:"get",params:e})}function c(e){return Object(r["a"])({url:"/WebC/api/TopupPoint",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/WebC/api/AddCredit",method:"post",data:e})}function b(e){return Object(r["a"])({url:"/WebC/api/MinusCredit",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function g(e){return Object(r["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function f(e){return Object(r["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function h(e){return Object(r["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}function w(e){return Object(r["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:e})}function C(e){return Object(r["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function v(e){return Object(r["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:e})}function I(e){return Object(r["a"])({url:"/WebC/api/GetMemberTxnFB",method:"get",params:e})}function L(e){return Object(r["a"])({url:"/WebC/api/GetMemberTransferTxn",method:"get",params:e})}},e10f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"downline app-container"},[n("div",{staticClass:"flex-box"},[n("div",{staticClass:"item"},[n("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList.filter((function(t){return!e.search||t.userCode.toLowerCase().includes(e.search.toLowerCase())||t.userName.toLowerCase().includes(e.search.toLowerCase())||t.inviteCode.toLowerCase().includes(e.search.toLowerCase())||t.creditLimit.toLowerCase().includes(e.search.toLowerCase())||t.turnoverRebate.toLowerCase().includes(e.search.toLowerCase())||t.profitRebate.toLowerCase().includes(e.search.toLowerCase())||t.userType.toLowerCase().includes(e.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[n("el-table-column",{attrs:{label:"下线 ID",align:"center",prop:"userCode","sort-by":"userCode",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"下线名",align:"center",prop:"userName","sort-by":"userName",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"备注名",align:"center",prop:"userRemark","sort-by":"userRemark",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"球网流水提成%",align:"center",prop:"turnoverRebateFb","sort-by":"turnoverRebateFb",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{"class-name":"status-col",label:"信用额度",align:"center",prop:"creditLimit","sort-by":"creditLimit",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{"class-name":"status-col",label:"流水提成%",align:"center",prop:"turnoverRebate","sort-by":"turnoverRebate",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{"class-name":"status-col",label:"利润提成%",align:"center",prop:"profitRebate","sort-by":"profitRebate",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"代理网登录",align:"center",prop:"loginInd","sort-by":"loginInd",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{align:"center",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",disabled:"N"!==t.row.robotInd},on:{click:function(n){return e.openEdit(t.row.gnuserId)}}}),"N"==t.row.cashInd?n("el-button",{attrs:{type:"primary",icon:"el-icon-more",circle:"",disabled:"N"!==t.row.cashInd},on:{click:function(n){return e.moreInfo(t.row)}}}):e._e()]}}])})],1),n("div",{staticClass:"page"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),n("el-dialog",{attrs:{title:"上下分/加减信用额度",visible:e.dialogMoreVisible,width:"40%"},on:{"update:visible":function(t){e.dialogMoreVisible=t}}},[n("el-form",{attrs:{"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"下线名:"}},[n("el-input",{attrs:{disabled:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),n("el-form-item",{attrs:{label:"当前会员积分:"}},[n("el-input",{attrs:{disabled:""},model:{value:e.nowPoint,callback:function(t){e.nowPoint=t},expression:"nowPoint"}})],1),n("el-form-item",{attrs:{label:"上分:"}},[n("el-input",{attrs:{maxlength:"11",disabled:"N"!==e.userInfo.cashInd},model:{value:e.addPoint,callback:function(t){e.addPoint=t},expression:"addPoint"}},[n("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.topupPoint},slot:"append"},[e._v("确定")])],1)],1),n("el-form-item",{attrs:{label:"下分:"}},[n("el-input",{attrs:{maxlength:"11",disabled:"N"!==e.userInfo.cashInd},model:{value:e.minusPoint,callback:function(t){e.minusPoint=t},expression:"minusPoint"}},[n("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.withdrawPoint},slot:"append"},[e._v("确定")])],1)],1),n("el-form-item",{attrs:{label:"当前信用额度:"}},[n("el-input",{attrs:{maxlength:"11",disabled:""},model:{value:e.nowCredit,callback:function(t){e.nowCredit=t},expression:" nowCredit"}})],1),n("el-form-item",{attrs:{label:"加信用额度:"}},[n("el-input",{attrs:{maxlength:"11",disabled:"N"!==e.userInfo.cashInd},model:{value:e.addCreditValue,callback:function(t){e.addCreditValue=t},expression:"addCreditValue"}},[n("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.addCredit},slot:"append"},[e._v("确定")])],1)],1),n("el-form-item",{attrs:{label:"减信用额度:"}},[n("el-input",{attrs:{maxlength:"11",disabled:"N"!==e.userInfo.cashInd},model:{value:e.minusCreditValue,callback:function(t){e.minusCreditValue=t},expression:"minusCreditValue"}},[n("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.minusCredit},slot:"append"},[e._v("确定")])],1)],1)],1)],1),n("el-dialog",{attrs:{title:"修改",visible:e.dialogEditVisible,width:"40%"},on:{"update:visible":function(t){e.dialogEditVisible=t},close:e.closeEdit}},[n("el-form",{attrs:{model:e.currentDown}},[n("el-form-item",{attrs:{label:"备注名","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentDown.userRemark,callback:function(t){e.$set(e.currentDown,"userRemark",t)},expression:"currentDown.userRemark"}})],1),n("el-form-item",{attrs:{label:"流水提成 %","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentDown.turnoverRebate,callback:function(t){e.$set(e.currentDown,"turnoverRebate",t)},expression:"currentDown.turnoverRebate"}})],1),n("el-form-item",{attrs:{label:"利润提成 %","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentDown.profitRebate,callback:function(t){e.$set(e.currentDown,"profitRebate",t)},expression:"currentDown.profitRebate"}})],1),n("el-form-item",{attrs:{label:"球网流水佣金 %","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentDown.turnoverRebateFb,callback:function(t){e.$set(e.currentDown,"turnoverRebateFb",t)},expression:"currentDown.turnoverRebateFb"}})],1),n("el-form-item",{attrs:{label:"代理网登录","label-width":e.formLabelWidth}},[[n("el-radio",{attrs:{label:"Yes"},model:{value:e.currentDown.loginInd,callback:function(t){e.$set(e.currentDown,"loginInd",t)},expression:"currentDown.loginInd"}},[e._v("Yes")]),n("el-radio",{attrs:{label:"No"},model:{value:e.currentDown.loginInd,callback:function(t){e.$set(e.currentDown,"loginInd",t)},expression:"currentDown.loginInd"}},[e._v("No")])]],2)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.closeEdit}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.editRebate}},[e._v("确 定")])],1)],1)],1)},o=[],a=(n("fb6a"),n("4de4"),n("d3b7"),n("ac1f"),n("00b4"),n("c24f")),i={name:"downline",data:function(){return{listLoading:!1,downlineList:[],currentDown:{},dialogMoreVisible:!1,dialogEditVisible:!1,formLabelWidth:"120px",search:"",userInfo:JSON.parse(localStorage.getItem("userInfo")),userName:"",creditLimit:"",appUserId:"",gnuserId:"",currentPoint:"",addPoint:"",minusPoint:"",addCreditValue:"",minusCreditValue:"",nowPoint:"",nowCredit:"",memberList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10}},created:function(){this.getList()},components:{},methods:{handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.downlineList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)},getNow:function(){var e=this;Object(a["f"])({gnuserId:this.gnuserId}).then((function(t){console.log(t,"当前信用额度"),e.nowPoint=t.data.point,e.nowCredit=t.data.credit}))},getList:function(){var e=this;this.listLoading=!0,Object(a["g"])().then((function(t){console.log(t),e.downlineList=t.data,e.getTemList(),e.totalCount=t.data.length,e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))},downlineByID:function(e){var t;this.currentDown=null===(t=this.downlineList.filter((function(t){return t.gnuserId==e})))||void 0===t?void 0:t[0],console.log(this.currentDown)},moreInfo:function(e){this.userName=e.userName,this.gnuserId=e.gnuserId,this.getNow(),this.dialogMoreVisible=!0},openEdit:function(e){this.dialogEditVisible=!0,this.downlineByID(e)},editRebate:function(){var e=this;if(/^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(this.currentDown.turnoverRebate)&&/^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(this.currentDown.profitRebate)&&/^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(this.currentDown.turnoverRebateFb)){var t=this.currentDown,n=t.gnuserId,r=t.turnoverRebate,o=t.profitRebate,i=t.userRemark,s=t.turnoverRebateFb,l=t.loginInd;console.log({gnuserId:n,turnoverRebate:r,profitRebate:o}),Object(a["r"])({gnuserId:n,turnoverRebate:r,profitRebate:o,userRemark:i,turnoverRebateFb:s,loginInd:l}).then((function(t){""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.getList(),e.dialogEditVisible=!1):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)}))}else this.$message({type:"info",message:"流水提成、球网流水佣金与利润提成皆为0到100之间最多允许包含2位小数"})},closeEdit:function(){this.dialogEditVisible=!1,this.getList()},topupPoint:function(){var e=this;console.log("topupPoint"),/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.addPoint)?Object(a["q"])({gnuserId:this.gnuserId,point:this.addPoint}).then((function(t){console.log(t),""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.addPoint="",e.getNow()):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)})):this.$message({type:"info",message:"最多七位数,允许包含2位小数"})},withdrawPoint:function(){var e=this;/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.minusPoint)?Object(a["s"])({gnuserId:this.gnuserId,point:this.minusPoint}).then((function(t){console.log(t),""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.minusPoint="",e.getNow()):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)})):this.$message({type:"info",message:"最多七位数,允许包含2位小数"})},addCredit:function(){var e=this;console.log("addCredit"),/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.addCreditValue)?Object(a["a"])({gnuserId:this.gnuserId,credit:this.addCreditValue}).then((function(t){""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.addCreditValue="",e.getNow()):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)})):this.$message({type:"info",message:"最多七位数,允许包含2位小数"})},minusCredit:function(){var e=this;console.log("minusCredit"),/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.minusCreditValue)?Object(a["p"])({gnuserId:this.gnuserId,credit:this.minusCreditValue}).then((function(t){""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.minusCreditValue="",e.getNow()):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)})):this.$message({type:"info",message:"最多七位数,允许包含2位小数"})}}},s=i,l=(n("f68d"),n("2877")),u=Object(l["a"])(s,r,o,!1,null,"06b6c47f",null);t["default"]=u.exports},f68d:function(e,t,n){"use strict";n("c1e0")}}]);