(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46281fe2"],{"2fdb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userCredit app-container"},[a("div",{staticClass:"flex-box"},[a("div",{staticClass:"item"},[a("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:t.selectChange},model:{value:t.searchFrom.showDate,callback:function(e){t.$set(t.searchFrom,"showDate",e)},expression:"searchFrom.showDate"}},t._l(t.dataList,(function(t){return a("el-option",{key:t.showDate,attrs:{label:t.showDate,value:t.showDate}})})),1)],1),a("div",{staticClass:"item"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addCom}},[t._v("添加")])],1),a("div",{staticClass:"item item1"},[a("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:t.pointList.filter((function(e){return!t.search||e.note.toLowerCase().includes(t.search.toLowerCase())||e.amount.toLowerCase().includes(t.search.toLowerCase())||e.createdDate.toLowerCase().includes(t.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[a("el-table-column",{attrs:{label:"备注",align:"center",prop:"note",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.tag?a("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v("总计")]):a("span",[t._v(t._s(e.row.note)+" ")])]}}])}),a("el-table-column",{attrs:{label:"金额 ",align:"center",prop:"amount","sort-by":"amount",sortable:""}}),a("el-table-column",{attrs:{label:"时间",align:"center",prop:"createdDate",sortable:""}}),a("el-table-column",{attrs:{label:"操作",align:"center",prop:"",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.tag?t._e():a("el-button",{attrs:{type:"danger",icon:"el-icon-delete-solid",circle:""},on:{click:function(a){return t.delCompany(e.row)}}})]}}])})],1),a("el-dialog",{attrs:{title:t.companyTitle,visible:t.dialogComVisible,width:"40%"},on:{"update:visible":function(e){t.dialogComVisible=e}}},[a("el-form",{attrs:{model:t.searchFrom}},[a("el-form-item",{attrs:{label:"备注","label-width":"120px"}},[a("el-input",{attrs:{type:"textarea",maxlength:"500",autocomplete:"off"},model:{value:t.searchFrom.note,callback:function(e){t.$set(t.searchFrom,"note",e)},expression:"searchFrom.note"}})],1),a("el-form-item",{attrs:{label:"金额","label-width":"120px"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.searchFrom.amount,callback:function(e){t.$set(t.searchFrom,"amount",e)},expression:"searchFrom.amount"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.butLoading,expression:"butLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:t.Rebate}},[t._v("确 定")])],1)],1)],1)])},r=[],o=a("c7eb"),s=a("1da1"),i=(a("ac1f"),a("00b4"),a("c740"),a("d3b7"),a("159b"),a("a9e3"),a("25f0"),a("8194")),c={name:"userCredit",components:{},data:function(){return{listLoading:!1,searchFrom:{fromDate:"",toDate:"",showDate:"",note:"",amount:""},formRow:{},dataList:[],nowGame:"",gameList:[],DetDialog:!1,gametxnId:"",gameCode:"",butLoading:!1,companyTitle:"",dialogComVisible:!1,pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{},search:""}},created:function(){var t=this;return Object(s["a"])(Object(o["a"])().mark((function e(){var a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=JSON.parse(localStorage.getItem("userInfo")),t.userInfo=a,Object(i["q"])().then((function(e){0==e.code&&(t.dataList=e.data,t.searchFrom.showDate=t.dataList[0].showDate,t.searchFrom.fromDate=t.dataList[0].fromDate,t.searchFrom.toDate=t.dataList[0].toDate,console.log(t.dataList,"时间列表"),t.getList())}));case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{addCom:function(){this.companyTitle="新增",this.searchFrom.note="",this.searchFrom.amount="",this.dialogComVisible=!0},Rebate:function(){var t=this;if(/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,6})(\.\d{1,2})?$/.test(this.searchFrom.amount)&&this.searchFrom.note){var e=this.searchFrom,a=e.fromDate,n=e.toDate,r=e.note,o=e.amount;Object(i["a"])({fromDate:a,toDate:n,note:r,amount:o}).then((function(e){console.log(e),""==e.data.remark||"success"==e.data.status?(t.$message({type:"success",message:e.message}),t.dialogComVisible=!1,t.searchFrom.note="",t.searchFrom.amount="",t.getList()):t.$message({type:"error",message:e.data.remark})}))}else this.$message({type:"info",message:"备注必填最多500 字节，金额最多七位数,允许包含2位小数"})},delCompany:function(t){var e=this;this.$confirm("确认删除吗","删除确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["d"])({expensestxnId:t.expensestxnId}).then((function(t){console.log(t),""==t.data.remark||"success"==t.data.status?(e.$message({type:"success",message:t.message}),e.getList()):e.$message({type:"error",message:t.data.remark})}))}))},selectChange:function(t){var e=this.dataList.findIndex((function(e,a){return e.showDate==t}));console.log(e),this.searchFrom.fromDate=this.dataList[e].fromDate,this.searchFrom.toDate=this.dataList[e].toDate,this.getList()},getTemList:function(){this.pointList.push(this.count)},getList:function(){var t=this;this.nowGame=this.searchFrom.gameCode,this.butLoading=!0;if(this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var e=this.searchFrom,a=e.fromDate,n=e.toDate;e.gameCode;Object(i["i"])({fromDate:a,toDate:n}).then(function(){var e=Object(s["a"])(Object(o["a"])().mark((function e(a){var n,r,s,i;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.butLoading=!1,console.log(a,"公司费用"),t.pointList=a.data,n="",r=0,s="",i=!0,t.pointList.forEach((function(t){r+=Number(t.amount)})),r=r.toString(),t.count={note:n,amount:r,createdDate:s,tag:i},e.next=12,t.getTemList();case 12:t.totalCount=a.data.length,t.listLoading=!1;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}else this.listLoading=!1,this.butLoading=!1,this.$message({type:"info",message:"Please select time"})}}},u=c,l=(a("e7ff"),a("2877")),m=Object(l["a"])(u,n,r,!1,null,"0efa6bcc",null);e["default"]=m.exports},8194:function(t,e,a){"use strict";a.d(e,"t",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"q",(function(){return i})),a.d(e,"p",(function(){return c})),a.d(e,"m",(function(){return u})),a.d(e,"f",(function(){return l})),a.d(e,"k",(function(){return m})),a.d(e,"l",(function(){return d})),a.d(e,"o",(function(){return f})),a.d(e,"s",(function(){return p})),a.d(e,"r",(function(){return h})),a.d(e,"u",(function(){return b})),a.d(e,"v",(function(){return g})),a.d(e,"h",(function(){return C})),a.d(e,"j",(function(){return v})),a.d(e,"b",(function(){return L})),a.d(e,"n",(function(){return w})),a.d(e,"g",(function(){return D})),a.d(e,"i",(function(){return x})),a.d(e,"a",(function(){return y})),a.d(e,"d",(function(){return O}));var n=a("b775");function r(t){return Object(n["a"])({url:"/WebC/api/User",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/WebC/api/TopupTxn",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/WebC/api/CreditTxn",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/WebC/api/DrlWeek",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/WebC/api/DrlAgentLevel",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/WebC/api/GetAdminAgentSum",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/WebC/api/DrlGame",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/WebC/api/GetGameTxnSum",method:"get",params:t})}function h(t){return Object(n["a"])({url:"/WebC/api/GetGameTxn",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/WebC/api/DrlPointTransferGame",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/WebC/api/TransferTxn",method:"get",params:t})}function C(t){return Object(n["a"])({url:"/WebC/api/GetCompanyAccount",method:"get",params:t})}function v(t){return Object(n["a"])({url:"/WebC/api/GetCompanyProfitAmount",method:"get",params:t})}function L(t){return Object(n["a"])({url:"/WebC/api/AddCompanyProfit",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/WebC/api/DrlBonus",method:"get",params:t})}function D(t){return Object(n["a"])({url:"/WebC/api/GetBonusContent",method:"get",params:t})}function x(t){return Object(n["a"])({url:"/WebC/api/GetCompanyExpenses",method:"get",params:t})}function y(t){return Object(n["a"])({url:"/WebC/api/AddCompanyExpenses",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/WebC/api/DeleteCompanyExpenses",method:"post",data:t})}},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),o=a("94ca"),s=a("6eeb"),i=a("5135"),c=a("c6b6"),u=a("7156"),l=a("c04e"),m=a("d039"),d=a("7c73"),f=a("241c").f,p=a("06cf").f,h=a("9bf2").f,b=a("58a8").trim,g="Number",C=r[g],v=C.prototype,L=c(d(v))==g,w=function(t){var e,a,n,r,o,s,i,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(o=u.slice(2),s=o.length,i=0;i<s;i++)if(c=o.charCodeAt(i),c<48||c>r)return NaN;return parseInt(o,n)}return+u};if(o(g,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var D,x=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof x&&(L?m((function(){v.valueOf.call(a)})):c(a)!=g)?u(new C(w(e)),a,x):w(e)},y=n?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;y.length>O;O++)i(C,D=y[O])&&!i(x,D)&&h(x,D,p(C,D));x.prototype=v,v.constructor=x,s(r,g,x)}},af53:function(t,e,a){},c740:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").findIndex,o=a("44d2"),s=a("ae40"),i="findIndex",c=!0,u=s(i);i in[]&&Array(1)[i]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)},e7ff:function(t,e,a){"use strict";a("af53")}}]);