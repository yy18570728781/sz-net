(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b1049d4"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"841c":function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("1d80"),s=r("129f"),o=r("14c3");n("search",1,(function(e,t,r){return[function(t){var r=i(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,r):new RegExp(t)[e](String(r))},function(e){var n=r(t,e,this);if(n.done)return n.value;var i=a(e),l=String(this),u=i.lastIndex;s(u,0)||(i.lastIndex=0);var c=o(i,l);return s(i.lastIndex,u)||(i.lastIndex=u),null===c?-1:c.index}]}))},badd:function(e,t,r){},c24f:function(e,t,r){"use strict";r.d(t,"j",(function(){return a})),r.d(t,"g",(function(){return i})),r.d(t,"t",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"f",(function(){return u})),r.d(t,"s",(function(){return c})),r.d(t,"u",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"r",(function(){return b})),r.d(t,"i",(function(){return h})),r.d(t,"e",(function(){return p})),r.d(t,"p",(function(){return g})),r.d(t,"q",(function(){return f})),r.d(t,"d",(function(){return w})),r.d(t,"h",(function(){return C})),r.d(t,"k",(function(){return L})),r.d(t,"m",(function(){return v})),r.d(t,"l",(function(){return $})),r.d(t,"n",(function(){return P})),r.d(t,"o",(function(){return I}));var n=r("b775");function a(){return Object(n["a"])({url:"/WebC/api/Profile",method:"get"})}function i(){return Object(n["a"])({url:"/WebC/api/Downline",method:"get"})}function s(e){return Object(n["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/WebC/api/DownlineTopupTxn",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:e})}function u(e){return Object(n["a"])({url:"/WebC/api/GetCreditLimit",method:"get",params:e})}function c(e){return Object(n["a"])({url:"/WebC/api/TopupPoint",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/WebC/api/AddCredit",method:"post",data:e})}function b(e){return Object(n["a"])({url:"/WebC/api/MinusCredit",method:"post",data:e})}function h(e){return Object(n["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function p(e){return Object(n["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function g(e){return Object(n["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function f(e){return Object(n["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}function w(e){return Object(n["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:e})}function C(e){return Object(n["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function L(e){return Object(n["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:e})}function v(e){return Object(n["a"])({url:"/WebC/api/GetMemberTxnFB",method:"get",params:e})}function $(e){return Object(n["a"])({url:"/WebC/api/GetMemberTransferTxn",method:"get",params:e})}function P(e){return Object(n["a"])({url:"/WebC/api/DrlPointTransferGame",method:"get",params:e})}function I(e){return Object(n["a"])({url:"/WebC/api/DownlineTransferTxn",method:"get",params:e})}},c43d:function(e,t,r){"use strict";r("badd")},e10f:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"downline app-container"},[r("div",{staticClass:"flex-box"},[r("div",{staticClass:"item"},[r("el-input",{attrs:{placeholder:e.$t("InputTip.SearchKey")},on:{input:e.searchTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList.filter((function(t){return!e.search||t.userCode.toLowerCase().includes(e.search.toLowerCase())||t.userName.toLowerCase().includes(e.search.toLowerCase())||t.userRemark.toLowerCase().includes(e.search.toLowerCase())||t.inviteCode.toLowerCase().includes(e.search.toLowerCase())||t.creditLimit.toLowerCase().includes(e.search.toLowerCase())||t.turnoverRebateFb.toLowerCase().includes(e.search.toLowerCase())||t.turnoverRebate.toLowerCase().includes(e.search.toLowerCase())||t.profitRebate.toLowerCase().includes(e.search.toLowerCase())||t.loginInd.toLowerCase().includes(e.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[r("el-table-column",{attrs:{label:e.$t("DownLineID"),align:"center",prop:"userCode","sort-by":"userCode",sortable:""}}),r("el-table-column",{attrs:{label:e.$t("DownLineName"),align:"center",prop:"userName","sort-by":"userName",sortable:""}}),r("el-table-column",{attrs:{label:e.$t("UserRemark"),align:"center",prop:"userRemark","sort-by":"userRemark",sortable:""}}),r("el-table-column",{attrs:{"class-name":"status-col",label:e.$t("CreditLimit"),align:"center",prop:"creditLimit","sort-by":"creditLimit",sortable:""}}),r("el-table-column",{attrs:{label:e.$t("TurnoverRebateFb"),align:"center",prop:"turnoverRebateFb","sort-by":"turnoverRebateFb",sortable:""}}),r("el-table-column",{attrs:{"class-name":"status-col",label:e.$t("TurnoverRebate"),align:"center",prop:"turnoverRebate","sort-by":"turnoverRebate",sortable:""}}),r("el-table-column",{attrs:{"class-name":"status-col",label:e.$t("ProfitRebate"),align:"center",prop:"profitRebate","sort-by":"profitRebate",sortable:""}}),r("el-table-column",{attrs:{label:e.$t("ProxyLogin"),align:"center",prop:"loginInd","sort-by":"loginInd",sortable:""}}),r("el-table-column",{attrs:{align:"center",label:e.$t("Operation"),fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"but_box"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",disabled:"N"!==t.row.robotInd},on:{click:function(r){return e.openEdit(t.row.gnuserId)}}}),"N"==t.row.cashInd?r("el-button",{attrs:{type:"primary",icon:"el-icon-more",circle:"",disabled:"N"!==t.row.cashInd},on:{click:function(r){return e.moreInfo(t.row)}}}):e._e()],1)]}}])})],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:e.$t("UpDownTitle"),visible:e.dialogMoreVisible,width:"40%"},on:{"update:visible":function(t){e.dialogMoreVisible=t}}},[r("el-form",{attrs:{"label-position":"left","label-width":"120px"}},[r("el-form-item",{attrs:{label:e.$t("DownLineName")}},[r("el-input",{attrs:{disabled:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),r("el-form-item",{attrs:{label:e.$t("CurrentPoints")}},[r("el-input",{attrs:{disabled:""},model:{value:e.nowPoint,callback:function(t){e.nowPoint=t},expression:"nowPoint"}})],1),r("el-form-item",{attrs:{label:e.$t("UpPoints")}},[r("el-input",{attrs:{maxlength:"11",disabled:"N"!==e.userInfo.cashInd},model:{value:e.addPoint,callback:function(t){e.addPoint=t},expression:"addPoint"}},[r("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.topupPoint},slot:"append"},[e._v(e._s(e.$t("Determine")))])],1)],1),r("el-form-item",{attrs:{label:e.$t("DownPoints")}},[r("el-input",{attrs:{maxlength:"11",disabled:"N"!==e.userInfo.cashInd},model:{value:e.minusPoint,callback:function(t){e.minusPoint=t},expression:"minusPoint"}},[r("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.withdrawPoint},slot:"append"},[e._v(e._s(e.$t("Determine")))])],1)],1),r("el-form-item",{attrs:{label:e.$t("NowCreditLimit")}},[r("el-input",{attrs:{maxlength:"11",disabled:""},model:{value:e.nowCredit,callback:function(t){e.nowCredit=t},expression:" nowCredit"}})],1),r("el-form-item",{attrs:{label:e.$t("AddCreditLimit")}},[r("el-input",{attrs:{maxlength:"11",disabled:"N"!==e.userInfo.cashInd},model:{value:e.addCreditValue,callback:function(t){e.addCreditValue=t},expression:"addCreditValue"}},[r("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.addCredit},slot:"append"},[e._v(e._s(e.$t("Determine")))])],1)],1),r("el-form-item",{attrs:{label:e.$t("ReductionCreditLimit")}},[r("el-input",{attrs:{maxlength:"11",disabled:"N"!==e.userInfo.cashInd},model:{value:e.minusCreditValue,callback:function(t){e.minusCreditValue=t},expression:"minusCreditValue"}},[r("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.minusCredit},slot:"append"},[e._v(e._s(e.$t("Determine")))])],1)],1)],1)],1),r("el-dialog",{attrs:{title:e.$t("Edit"),visible:e.dialogEditVisible,width:"40%"},on:{"update:visible":function(t){e.dialogEditVisible=t},close:e.closeEdit}},[r("el-form",{attrs:{model:e.currentDown}},[r("el-form-item",{attrs:{label:e.$t("UserRemark"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentDown.userRemark,callback:function(t){e.$set(e.currentDown,"userRemark",t)},expression:"currentDown.userRemark"}})],1),r("el-form-item",{attrs:{label:e.$t("TurnoverRebate"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentDown.turnoverRebate,callback:function(t){e.$set(e.currentDown,"turnoverRebate",t)},expression:"currentDown.turnoverRebate"}})],1),r("el-form-item",{attrs:{label:e.$t("ProfitRebate"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentDown.profitRebate,callback:function(t){e.$set(e.currentDown,"profitRebate",t)},expression:"currentDown.profitRebate"}})],1),r("el-form-item",{attrs:{label:e.$t("TurnoverRebateFbb"),"label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentDown.turnoverRebateFb,callback:function(t){e.$set(e.currentDown,"turnoverRebateFb",t)},expression:"currentDown.turnoverRebateFb"}})],1),r("el-form-item",{attrs:{label:e.$t("ProxyLogin"),"label-width":e.formLabelWidth}},[[r("el-radio",{attrs:{label:"Yes"},model:{value:e.currentDown.loginInd,callback:function(t){e.$set(e.currentDown,"loginInd",t)},expression:"currentDown.loginInd"}},[e._v("Yes")]),r("el-radio",{attrs:{label:"No"},model:{value:e.currentDown.loginInd,callback:function(t){e.$set(e.currentDown,"loginInd",t)},expression:"currentDown.loginInd"}},[e._v("No")])]],2)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeEdit}},[e._v(e._s(e.$t("Cancel")))]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRebate}},[e._v(e._s(e.$t("Determine")))])],1)],1)],1)},a=[],i=(r("ac1f"),r("841c"),r("fb6a"),r("4de4"),r("d3b7"),r("caad"),r("2532"),r("00b4"),r("c24f")),s={name:"downline",data:function(){return{listLoading:!1,downlineList:[],currentDown:{},dialogMoreVisible:!1,dialogEditVisible:!1,formLabelWidth:"120px",search:"",searchList:[],userInfo:JSON.parse(localStorage.getItem("userInfo")),userName:"",creditLimit:"",appUserId:"",gnuserId:"",currentPoint:"",addPoint:"",minusPoint:"",addCreditValue:"",minusCreditValue:"",nowPoint:"",nowCredit:"",memberList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10}},created:function(){this.getList()},components:{},methods:{handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.search?this.searchTable():this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.search?this.searchTable():this.getTemList()},getTemList:function(){this.temList=this.downlineList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)},getNow:function(){var e=this;Object(i["f"])({gnuserId:this.gnuserId}).then((function(t){e.nowPoint=t.data.point,e.nowCredit=t.data.credit}))},searchTable:function(){var e=this;""==this.search?(this.totalCount=this.downlineList.length,this.temList=this.downlineList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)):(this.searchList=this.downlineList.filter((function(t){return!e.search||t.userCode.toLowerCase().includes(e.search.toLowerCase())||t.userName.toLowerCase().includes(e.search.toLowerCase())||t.userRemark.toLowerCase().includes(e.search.toLowerCase())||t.inviteCode.toLowerCase().includes(e.search.toLowerCase())||t.creditLimit.toLowerCase().includes(e.search.toLowerCase())||t.turnoverRebateFb.toLowerCase().includes(e.search.toLowerCase())||t.turnoverRebate.toLowerCase().includes(e.search.toLowerCase())||t.profitRebate.toLowerCase().includes(e.search.toLowerCase())||t.loginInd.toLowerCase().includes(e.search.toLowerCase())})),this.currentPage=1,this.totalCount=this.searchList.length,this.temList=this.searchList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize))},getList:function(){var e=this;this.currentPage=1,this.listLoading=!0,Object(i["g"])().then((function(t){e.downlineList=t.data,e.getTemList(),e.totalCount=t.data.length,e.listLoading=!1})).catch((function(t){e.listLoading=!1}))},downlineByID:function(e){var t;this.currentDown=null===(t=this.downlineList.filter((function(t){return t.gnuserId==e})))||void 0===t?void 0:t[0]},moreInfo:function(e){this.userName=e.userName,this.gnuserId=e.gnuserId,this.getNow(),this.dialogMoreVisible=!0},openEdit:function(e){this.dialogEditVisible=!0,this.downlineByID(e)},editRebate:function(){var e=this;if(/^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(this.currentDown.turnoverRebate)&&/^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(this.currentDown.profitRebate)&&/^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/.test(this.currentDown.turnoverRebateFb)){var t=this.currentDown,r=t.gnuserId,n=t.turnoverRebate,a=t.profitRebate,s=t.userRemark,o=t.turnoverRebateFb,l=t.loginInd;Object(i["t"])({gnuserId:r,turnoverRebate:n,profitRebate:a,userRemark:s,turnoverRebateFb:o,loginInd:l}).then((function(t){""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.getList(),e.dialogEditVisible=!1):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)}))}else this.$message({type:"info",message:this.$t("MessageTip.CommissionTip")})},closeEdit:function(){this.dialogEditVisible=!1,this.getList()},topupPoint:function(){var e=this;/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.addPoint)?Object(i["s"])({gnuserId:this.gnuserId,point:this.addPoint}).then((function(t){""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.addPoint="",e.getNow()):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)})):this.$message({type:"info",message:this.$t("MessageTip.CreditLimitTip")})},withdrawPoint:function(){var e=this;/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.minusPoint)?Object(i["u"])({gnuserId:this.gnuserId,point:this.minusPoint}).then((function(t){""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.minusPoint="",e.getNow()):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)})):this.$message({type:"info",message:this.$t("MessageTip.CreditLimitTip")})},addCredit:function(){var e=this;/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.addCreditValue)?Object(i["a"])({gnuserId:this.gnuserId,credit:this.addCreditValue}).then((function(t){""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.addCreditValue="",e.getNow()):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)})):this.$message({type:"info",message:this.$t("MessageTip.CreditLimitTip")})},minusCredit:function(){var e=this;/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.minusCreditValue)?Object(i["r"])({gnuserId:this.gnuserId,credit:this.minusCreditValue}).then((function(t){""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.minusCreditValue="",e.getNow()):e.$message({type:"error",message:t.data.remark})})).catch((function(e){console.log(e)})):this.$message({type:"info",message:this.$t("MessageTip.CreditLimitTip")})}}},o=s,l=(r("c43d"),r("2877")),u=Object(l["a"])(o,n,a,!1,null,"38281fae",null);t["default"]=u.exports}}]);