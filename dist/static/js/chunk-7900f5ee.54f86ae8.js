(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7900f5ee"],{1148:function(e,t,r){"use strict";var n=r("a691"),a=r("1d80");e.exports="".repeat||function(e){var t=String(a(this)),r="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},2094:function(e,t,r){},"408a":function(e,t,r){var n=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"73da":function(e,t,r){},8194:function(e,t,r){"use strict";r.d(t,"k",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"i",(function(){return s})),r.d(t,"h",(function(){return l})),r.d(t,"f",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return g})),r.d(t,"g",(function(){return p})),r.d(t,"j",(function(){return m})),r.d(t,"l",(function(){return f}));var n=r("b775");function a(e){return Object(n["a"])({url:"/WebC/api/User",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/WebC/api/TopupTxn",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/WebC/api/CreditTxn",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function u(e){return Object(n["a"])({url:"/WebC/api/DrlAgentLevel",method:"get",params:e})}function c(e){return Object(n["a"])({url:"/WebC/api/GetAdminAgentSum",method:"get",params:e})}function b(e){return Object(n["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function g(e){return Object(n["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function p(e){return Object(n["a"])({url:"/WebC/api/DrlGame",method:"get",params:e})}function m(e){return Object(n["a"])({url:"/WebC/api/GetGameTxnSum",method:"get",params:e})}function f(e){return Object(n["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}},a12a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"userCredit app-container"},[r("div",{staticClass:"flex-box"},[r("div",{staticClass:"item"},[r("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:e.getList},model:{value:e.searchFrom.showDate,callback:function(t){e.$set(e.searchFrom,"showDate",t)},expression:"searchFrom.showDate"}},e._l(e.dataList,(function(e){return r("el-option",{key:e.showDate,attrs:{label:e.showDate,value:e.showDate}})})),1)],1)]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[r("el-table-column",{attrs:{label:"操作",align:"center",prop:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.gnuserId?r("el-button",{attrs:{type:"primary",round:"",size:"small"},on:{click:function(r){return e.changeShow(t.row)}}},[e._v("明细")]):r("span",{staticStyle:{"fpnt-size":"20px"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"代理 ID",align:"center",prop:"userCode","sort-by":"userCode",sortable:""}}),r("el-table-column",{attrs:{label:"代理名",align:"center",prop:"userName"}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),r("el-table-column",{attrs:{label:"代理提成",align:"center",prop:"","sort-by":""}},[r("el-table-column",{attrs:{label:"流水提成",align:"center",prop:"agentTurnoverBonus","sort-by":"agentTurnoverBonus",sortable:""}}),r("el-table-column",{attrs:{label:"利润提成",align:"center",prop:"agentProfitBonus","sort-by":"agentProfitBonus",sortable:""}})],1),r("el-table-column",{attrs:{label:"提成",align:"center",prop:"","sort-by":""}},[r("el-table-column",{attrs:{label:"流水提成",align:"center",prop:"turnoverBonus","sort-by":"turnoverBonus",sortable:""}}),r("el-table-column",{attrs:{label:"利润提成",align:"center",prop:"profitBonus","sort-by":"profitBonus",sortable:""}})],1),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet","sort-by":"wallet",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose","sort-by":"winLose",sortable:""}}),r("el-table-column",{attrs:{label:"代理总结",align:"center",prop:"agentProfit","sort-by":"agentProfit",sortable:""}}),r("el-table-column",{attrs:{label:"总结",align:"center",prop:"profit","sort-by":"profit",sortable:""}})],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("Detail",{ref:"detail",attrs:{DetDialog:e.DetDialog,fromDate:e.searchFrom.fromDate,toDate:e.searchFrom.toDate,DetailFrom:e.DetailFrom},on:{changeDetDialog:e.changeDetDialog}})],1)},a=[],o=(r("fb6a"),r("a9e3"),r("d3b7"),r("159b"),r("b680"),r("c24f")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"总结明细",visible:e.DetDialog_,center:"",width:"98%"},on:{close:e.closeEdit}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[r("el-table-column",{attrs:{label:"会员总结",align:"center"}},[r("el-table-column",{attrs:{label:"会员 ID",align:"center",prop:"userCode","sort-by":"userCode",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.userCode?r("span",[e._v(e._s(t.row.userCode)+" ")]):r("span",{staticStyle:{"fpnt-size":"20px"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"会员名",align:"center",prop:"userName"}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),r("el-table-column",{attrs:{label:"玩家利润提成",align:"center",prop:"playerProfitBonus","sort-by":"playerProfitBonus",sortable:""}}),r("el-table-column",{attrs:{label:"流水提成",align:"center",prop:"turnoverBonus","sort-by":"turnoverBonus",sortable:""}}),r("el-table-column",{attrs:{label:"利润提成",align:"center",prop:"profitBonus","sort-by":"profitBonus",sortable:""}}),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet","sort-by":"wallet",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose","sort-by":"winLose",sortable:""}}),r("el-table-column",{attrs:{label:"玩家总结",align:"center",prop:"playerProfit","sort-by":"playerProfit",sortable:""}}),r("el-table-column",{attrs:{label:"总结",align:"center",prop:"profit","sort-by":"profit",sortable:""}})],1)],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("div",{staticStyle:{height:"50px"}}),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList1,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[r("el-table-column",{attrs:{label:"代理总结",align:"center"}},[r("el-table-column",{attrs:{label:"代理 ID",align:"center",prop:"userCode","sort-by":"userCode",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.userCode?r("span",[e._v(e._s(t.row.userCode)+" ")]):r("span",{staticStyle:{"fpnt-size":"20px"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"代理名",align:"center",prop:"userName"}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),r("el-table-column",{attrs:{label:"代理提成",align:"center",prop:"","sort-by":""}},[r("el-table-column",{attrs:{label:"流水提成",align:"center",prop:"agentTurnoverBonus","sort-by":"agentTurnoverBonus",sortable:""}}),r("el-table-column",{attrs:{label:"利润提成",align:"center",prop:"agentProfitBonus","sort-by":"agentProfitBonus",sortable:""}})],1),r("el-table-column",{attrs:{label:"提成",align:"center",prop:"","sort-by":""}},[r("el-table-column",{attrs:{label:"流水提成",align:"center",prop:"turnoverBonus","sort-by":"turnoverBonus",sortable:""}}),r("el-table-column",{attrs:{label:"利润提成",align:"center",prop:"profitBonus","sort-by":"profitBonus",sortable:""}})],1),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet","sort-by":"wallet",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose","sort-by":"winLose",sortable:""}}),r("el-table-column",{attrs:{label:"代理总结",align:"center",prop:"agentProfit","sort-by":"agentProfit",sortable:""}}),r("el-table-column",{attrs:{label:"总结",align:"center",prop:"profit","sort-by":"profit",sortable:""}})],1)],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage1,"page-sizes":e.pageSizes1,"page-size":e.PageSize1,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount1},on:{"size-change":e.handleSizeChange1,"current-change":e.handleCurrentChange1}})],1)],1)},s=[],l=r("ade3"),u=r("8194"),c={name:"Detail",props:{DetDialog:{type:Boolean,default:!1},gnuserId:{type:String},fromDate:{type:String},toDate:{type:String}},data:function(){var e;return e={listLoading:!1,memberList:[],agencypList:[],detailShow:!1},Object(l["a"])(e,"memberList",[]),Object(l["a"])(e,"temList",[]),Object(l["a"])(e,"currentPage",1),Object(l["a"])(e,"totalCount",1),Object(l["a"])(e,"pageSizes",[5,10,20,30]),Object(l["a"])(e,"PageSize",10),Object(l["a"])(e,"count",{}),Object(l["a"])(e,"agencypList",[]),Object(l["a"])(e,"temList1",[]),Object(l["a"])(e,"currentPage1",1),Object(l["a"])(e,"totalCount1",1),Object(l["a"])(e,"pageSizes1",[5,10,20,30]),Object(l["a"])(e,"PageSize1",10),Object(l["a"])(e,"count1",{}),e},created:function(){},mounted:function(){},components:{},computed:{DetDialog_:{get:function(){return this.DetDialog},set:function(e){this.$emit("changeDetDialog",e)}}},methods:{closeEdit:function(){this.$emit("changeDetDialog",!1)},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.temList.unshift(this.count)},handleSizeChange1:function(e){this.PageSize1=e,this.currentPage1=1,this.getTemList1()},handleCurrentChange1:function(e){console.log(e,"val"),this.currentPage1=e,this.getTemList1(),console.log(this.currentPage1,"this.curpage")},getTemList1:function(){this.temList1=this.agencypList.slice((this.currentPage1-1)*this.PageSize1,this.currentPage1*this.PageSize1),this.temList1.unshift(this.count1)},getList:function(e,t,r){var n=this;console.log(this.DetDialog,this.gnuserId,this.fromDate,this.toDate),this.fromDate&&this.toDate?(this.listLoading=!0,Object(u["d"])({gnuserId:e,fromDate:t,toDate:r}).then((function(e){console.log(e,"会员总结"),n.memberList=e.data;var t=0,r=0,a=0,o=0,i=0,s=0,l=0,u=0;n.memberList.forEach((function(e){t+=Number(e.playerProfitBonus),r+=Number(e.turnoverBonus),a+=Number(e.profitBonus),o+=Number(e.turnover),i+=Number(e.winLose),s+=Number(e.wallet),l+=Number(e.playerProfit),u+=Number(e.profit)})),t=Number(t).toFixed(2),r=Number(r).toFixed(2),a=Number(a).toFixed(2),o=Number(o).toFixed(2),i=Number(i).toFixed(2),s=Number(s).toFixed(2),l=Number(l).toFixed(2),u=Number(u).toFixed(2),n.count={playerProfitBonus:t,turnoverBonus:r,profitBonus:a,turnover:o,winLose:i,wallet:s,playerProfit:l,profit:u},n.count.firstColumn="总计",n.getTemList(),n.totalCount=e.data.length,n.listLoading=!1})).catch((function(e){n.listLoading=!1,console.log(e)})),Object(u["e"])({gnuserId:e,fromDate:t,toDate:r}).then((function(e){console.log(e,"代理总结"),n.agencypList=e.data;var t=0,r=0,a=0,o=0,i=0,s=0,l=0,u=0,c=0;n.agencypList.forEach((function(e){t+=Number(e.agentTurnoverBonus),r+=Number(e.turnoverBonus),a+=Number(e.agentProfitBonus),o+=Number(e.profitBonus),i+=Number(e.agentProfit),s+=Number(e.winLose),l+=Number(e.wallet),u+=Number(e.profit),c+=Number(e.turnover)})),t=Number(t).toFixed(2),r=Number(r).toFixed(2),a=Number(a).toFixed(2),o=Number(o).toFixed(2),i=Number(i).toFixed(2),s=Number(s).toFixed(2),l=Number(l).toFixed(2),u=Number(u).toFixed(2),c=Number(c).toFixed(2),n.count1={agentTurnoverBonus:t,turnoverBonus:r,agentProfitBonus:a,profitBonus:o,agentProfit:i,winLose:s,wallet:l,profit:u,turnover:c},n.count.firstColumn="总计",n.getTemList1(),n.totalCount1=e.data.length,n.listLoading=!1})).catch((function(e){n.listLoading=!1,console.log(e)}))):this.$message({type:"info",message:"Please select time"})}}},b=c,g=(r("e749"),r("2877")),p=Object(g["a"])(b,i,s,!1,null,"fa4c4bce",null),m=p.exports,f={name:"userCredit",components:{Detail:m},data:function(){return{listLoading:!1,searchFrom:{userInfo:JSON.parse(localStorage.getItem("userInfo")),fromDate:"",toDate:"",showDate:""},DetailFrom:{},dataList:[],DetDialog:!1,gnuserId:"",pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{}}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=t,Object(o["h"])().then((function(t){0==t.code&&(e.dataList=t.data,e.searchFrom.showDate=e.dataList[0].showDate,console.log(e.dataList,"dfg"),e.getList())}))},methods:{changeShow:function(e){console.log(e),this.gnuserId=e.gnuserId,this.DetDialog=!0,this.$refs.detail.getList(this.gnuserId,this.searchFrom.fromDate,this.searchFrom.toDate)},changeDetDialog:function(e){this.DetDialog=e},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.temList.unshift(this.count)},getList:function(){var e=this,t=this.searchFrom.showDate.indexOf(" - ");if(this.searchFrom.fromDate=this.searchFrom.showDate.substring(0,t),this.searchFrom.toDate=this.searchFrom.showDate.substring(Number(t)+3),this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var r=this.searchFrom,n=r.fromDate,a=r.toDate;Object(o["e"])({gnuserId:this.userInfo.gnuserId,fromDate:n,toDate:a}).then((function(t){console.log(t,"下线代理总结"),e.pointList=t.data;var r=0,n=0,a=0,o=0,i=0,s=0,l=0,u=0,c=0;e.pointList.forEach((function(e){r+=Number(e.turnover),n+=Number(e.agentTurnoverBonus),a+=Number(e.agentProfitBonus),o+=Number(e.turnoverBonus),i+=Number(e.profitBonus),s+=Number(e.wallet),l+=Number(e.winLose),u+=Number(e.agentProfit),c+=Number(e.profit)})),r=Number(r).toFixed(2),n=Number(n).toFixed(2),a=Number(a).toFixed(2),o=Number(o).toFixed(2),i=Number(i).toFixed(2),s=Number(s).toFixed(2),l=Number(l).toFixed(2),u=Number(u).toFixed(2),c=Number(c).toFixed(2),e.count={turnover:r,agentTurnoverBonus:n,agentProfitBonus:a,turnoverBonus:o,wallet:s,winLose:l,agentProfit:u,profit:c},e.count.firstColumn="总计",e.getTemList(),e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))}else this.$message({type:"info",message:"Please select time"})}}},d=f,h=(r("b8bc"),Object(g["a"])(d,n,a,!1,null,"2d72968e",null));t["default"]=h.exports},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),o=r("94ca"),i=r("6eeb"),s=r("5135"),l=r("c6b6"),u=r("7156"),c=r("c04e"),b=r("d039"),g=r("7c73"),p=r("241c").f,m=r("06cf").f,f=r("9bf2").f,d=r("58a8").trim,h="Number",v=a[h],N=v.prototype,D=l(g(N))==h,C=function(e){var t,r,n,a,o,i,s,l,u=c(e,!1);if("string"==typeof u&&u.length>2)if(u=d(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(o=u.slice(2),i=o.length,s=0;s<i;s++)if(l=o.charCodeAt(s),l<48||l>a)return NaN;return parseInt(o,n)}return+u};if(o(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var L,y=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof y&&(D?b((function(){N.valueOf.call(r)})):l(r)!=h)?u(new v(C(t)),r,y):C(t)},w=n?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;w.length>P;P++)s(v,L=w[P])&&!s(y,L)&&f(y,L,m(v,L));y.prototype=N,N.constructor=y,i(a,h,y)}},b680:function(e,t,r){"use strict";var n=r("23e7"),a=r("a691"),o=r("408a"),i=r("1148"),s=r("d039"),l=1..toFixed,u=Math.floor,c=function(e,t,r){return 0===t?r:t%2===1?c(e,t-1,r*e):c(e*e,t/2,r)},b=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},g=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));n({target:"Number",proto:!0,forced:g},{toFixed:function(e){var t,r,n,s,l=o(this),g=a(e),p=[0,0,0,0,0,0],m="",f="0",d=function(e,t){var r=-1,n=t;while(++r<6)n+=e*p[r],p[r]=n%1e7,n=u(n/1e7)},h=function(e){var t=6,r=0;while(--t>=0)r+=p[t],p[t]=u(r/e),r=r%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var r=String(p[e]);t=""===t?r:t+i.call("0",7-r.length)+r}return t};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(t=b(l*c(2,69,1))-69,r=t<0?l*c(2,-t,1):l/c(2,t,1),r*=4503599627370496,t=52-t,t>0){d(0,r),n=g;while(n>=7)d(1e7,0),n-=7;d(c(10,n,1),0),n=t-1;while(n>=23)h(1<<23),n-=23;h(1<<n),d(1,1),h(2),f=v()}else d(0,r),d(1<<-t,0),f=v()+i.call("0",g);return g>0?(s=f.length,f=m+(s<=g?"0."+i.call("0",g-s)+f:f.slice(0,s-g)+"."+f.slice(s-g))):f=m+f,f}})},b8bc:function(e,t,r){"use strict";r("73da")},c24f:function(e,t,r){"use strict";r.d(t,"i",(function(){return a})),r.d(t,"f",(function(){return o})),r.d(t,"o",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"n",(function(){return u})),r.d(t,"p",(function(){return c})),r.d(t,"a",(function(){return b})),r.d(t,"m",(function(){return g})),r.d(t,"h",(function(){return p})),r.d(t,"e",(function(){return m})),r.d(t,"k",(function(){return f})),r.d(t,"l",(function(){return d})),r.d(t,"d",(function(){return h})),r.d(t,"g",(function(){return v})),r.d(t,"j",(function(){return N}));var n=r("b775");function a(){return Object(n["a"])({url:"/WebC/api/Profile",method:"get"})}function o(){return Object(n["a"])({url:"/WebC/api/Downline",method:"get"})}function i(e){return Object(n["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/WebC/api/TopupTxn",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:e})}function u(e){return Object(n["a"])({url:"/WebC/api/TopupPoint",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:e})}function b(e){return Object(n["a"])({url:"/WebC/api/AddCredit",method:"post",data:e})}function g(e){return Object(n["a"])({url:"/WebC/api/MinusCredit",method:"post",data:e})}function p(e){return Object(n["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function m(e){return Object(n["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function f(e){return Object(n["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function d(e){return Object(n["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}function h(e){return Object(n["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:e})}function v(e){return Object(n["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function N(e){return Object(n["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:e})}},e749:function(e,t,r){"use strict";r("2094")}}]);