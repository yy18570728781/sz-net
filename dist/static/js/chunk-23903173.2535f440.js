(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23903173"],{"0de4":function(e,t,r){},1148:function(e,t,r){"use strict";var a=r("a691"),n=r("1d80");e.exports="".repeat||function(e){var t=String(n(this)),r="",i=a(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},"408a":function(e,t,r){var a=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"44a9":function(e,t,r){},"94f0":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"userCredit app-container"},[r("div",{staticClass:"flex-box"},[r("div",{staticClass:"item"},[r("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:e.getList},model:{value:e.searchFrom.showDate,callback:function(t){e.$set(e.searchFrom,"showDate",t)},expression:"searchFrom.showDate"}},e._l(e.dataList,(function(e){return r("el-option",{key:e.showDate,attrs:{label:e.showDate,value:e.showDate}})})),1)],1),r("div",{staticClass:"item"},[r("el-select",{staticClass:"select",attrs:{placeholder:"Please select type "},on:{change:e.getList},model:{value:e.searchFrom.userType,callback:function(t){e.$set(e.searchFrom,"userType",t)},expression:"searchFrom.userType"}},e._l(e.typeList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.description,value:e.description}})})),1)],1)]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[r("el-table-column",{attrs:{label:"操作",align:"center",prop:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.gnuserId?r("el-button",{attrs:{type:"primary",round:"",size:"small"},on:{click:function(r){return e.changeShow(t.row)}}},[e._v("明细")]):r("span",[e._v("总结")])]}}])}),r("el-table-column",{attrs:{label:"代理名",align:"center",prop:"agentName"}}),r("el-table-column",{attrs:{label:"会员 ID",align:"center",prop:"userCode","sort-by":"userCode",sortable:""}}),r("el-table-column",{attrs:{label:"会员名",align:"center",prop:"userName"}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover"}}),r("el-table-column",{attrs:{label:"利润提成",align:"center",prop:"profitBonus","sort-by":"profitBonus",sortable:""}}),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet","sort-by":"wallet",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose"}}),r("el-table-column",{attrs:{label:"总结",align:"center",prop:"profit"}})],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("Detail",{ref:"detail",attrs:{DetDialog:e.DetDialog,fromDate:e.searchFrom.fromDate,toDate:e.searchFrom.toDate,DetailFrom:e.DetailFrom},on:{changeDetDialog:e.changeDetDialog}})],1)},n=[],i=(r("a4d3"),r("e01a"),r("fb6a"),r("a9e3"),r("d3b7"),r("159b"),r("b680"),r("c24f")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"总结明细",visible:e.DetDialog_,center:"",width:"98%"},on:{close:e.closeEdit}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[r("el-table-column",{attrs:{label:"会员 ID",align:"center",prop:"userCode","sort-by":"userCode",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.userCode?r("span",[e._v(e._s(t.row.userCode)+" ")]):r("span",{staticStyle:{"fpnt-size":"20px"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"会员名",align:"center",prop:"userName"}}),r("el-table-column",{attrs:{label:"游戏",align:"center",prop:"game"}}),r("el-table-column",{attrs:{label:"场数",align:"center",prop:"gameNo"}}),r("el-table-column",{attrs:{label:"类型",align:"center",prop:"type"}}),r("el-table-column",{attrs:{label:"下注",align:"center",prop:"bet"}}),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet"}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose"}}),r("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},s=[],l=r("ade3"),c={name:"Detail",props:{DetDialog:{type:Boolean,default:!1},gnuserId:{type:String},fromDate:{type:String},toDate:{type:String}},data:function(){var e;return e={listLoading:!1,memberList:[],agencypList:[],detailShow:!1},Object(l["a"])(e,"memberList",[]),Object(l["a"])(e,"temList",[]),Object(l["a"])(e,"currentPage",1),Object(l["a"])(e,"totalCount",1),Object(l["a"])(e,"pageSizes",[5,10,20,30]),Object(l["a"])(e,"PageSize",10),Object(l["a"])(e,"count",{}),e},created:function(){},mounted:function(){},components:{},computed:{DetDialog_:{get:function(){return this.DetDialog},set:function(e){this.$emit("changeDetDialog",e)}}},methods:{closeEdit:function(){this.$emit("changeDetDialog",!1)},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.temList.unshift(this.count)},getList:function(e,t,r){var a=this;console.log(this.DetDialog,this.gnuserId,this.fromDate,this.toDate),this.fromDate&&this.toDate?(this.listLoading=!0,Object(i["l"])({gnuserId:e,fromDate:t,toDate:r}).then((function(e){console.log(e,"会员明细总结"),a.memberList=e.data;var t=0,r=0,n=0,i=0;a.memberList.forEach((function(e){t+=Number(e.bet),r+=Number(e.turnover),n+=Number(e.winLose),i+=Number(e.wallet)})),t=Number(t).toFixed(2),r=Number(r).toFixed(2),n=Number(n).toFixed(2),i=Number(i).toFixed(2),a.count={bet:t,turnover:r,winLose:n,wallet:i},a.count.firstColumn="总计",a.getTemList(),a.listLoading=!1})).catch((function(e){a.listLoading=!1,console.log(e)}))):this.$message({type:"info",message:"Please select time"})}}},u=c,g=(r("cf23"),r("2877")),h=Object(g["a"])(u,o,s,!1,null,"280ad026",null),d=h.exports,p={name:"userCredit",components:{Detail:d},data:function(){return{listLoading:!1,searchFrom:{userInfo:JSON.parse(localStorage.getItem("userInfo")),fromDate:"",toDate:"",showDate:"",userType:""},DetailFrom:{},dataList:[],typeList:[],DetDialog:!1,gnuserId:"",pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{}}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=t,Object(i["h"])().then((function(t){0==t.code&&(e.dataList=t.data,e.searchFrom.showDate=e.dataList[0].showDate,console.log(e.dataList,"时间列表"),e.getList())})),Object(i["g"])().then((function(t){0==t.code&&(e.typeList=t.data,e.searchFrom.userType=e.typeList[0].description,console.log(e.typeList,"用户类型列表"))}))},methods:{changeShow:function(e){console.log(e),this.gnuserId=e.gnuserId,this.DetDialog=!0,this.$refs.detail.getList(this.gnuserId,this.searchFrom.fromDate,this.searchFrom.toDate)},changeDetDialog:function(e){this.DetDialog=e},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.temList.unshift(this.count)},getList:function(){var e=this,t=this.searchFrom.showDate.indexOf(" - ");if(this.searchFrom.fromDate=this.searchFrom.showDate.substring(0,t),this.searchFrom.toDate=this.searchFrom.showDate.substring(Number(t)+3),this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var r=this.searchFrom,a=r.fromDate,n=r.toDate,o=r.userType;Object(i["j"])({userType:o,fromDate:a,toDate:n}).then((function(t){console.log(t,"会员总结"),e.pointList=t.data;var r=0,a=0,n=0,i=0,o=0;e.pointList.forEach((function(e){r+=Number(e.turnover),a+=Number(e.profitBonus),n+=Number(e.wallet),i+=Number(e.winLose),o+=Number(e.profit)})),r=Number(r).toFixed(2),a=Number(a).toFixed(2),n=Number(n).toFixed(2),i=Number(i).toFixed(2),o=Number(o).toFixed(2),e.count={turnover:r,profitBonus:a,wallet:n,winLose:i,profit:o},e.count.firstColumn="总计",e.getTemList(),e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))}else this.$message({type:"info",message:"Please select time"})}}},m=p,f=(r("e06a"),Object(g["a"])(m,a,n,!1,null,"6702c4a2",null));t["default"]=f.exports},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),o=r("6eeb"),s=r("5135"),l=r("c6b6"),c=r("7156"),u=r("c04e"),g=r("d039"),h=r("7c73"),d=r("241c").f,p=r("06cf").f,m=r("9bf2").f,f=r("58a8").trim,b="Number",D=n[b],L=D.prototype,v=l(h(L))==b,w=function(e){var t,r,a,n,i,o,s,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=f(c),t=c.charCodeAt(0),43===t||45===t){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c}for(i=c.slice(2),o=i.length,s=0;s<o;s++)if(l=i.charCodeAt(s),l<48||l>n)return NaN;return parseInt(i,a)}return+c};if(i(b,!D(" 0o1")||!D("0b1")||D("+0x1"))){for(var C,N=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof N&&(v?g((function(){L.valueOf.call(r)})):l(r)!=b)?c(new D(w(t)),r,N):w(t)},F=a?d(D):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;F.length>y;y++)s(D,C=F[y])&&!s(N,C)&&m(N,C,p(D,C));N.prototype=L,L.constructor=N,o(n,b,N)}},b680:function(e,t,r){"use strict";var a=r("23e7"),n=r("a691"),i=r("408a"),o=r("1148"),s=r("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,r){return 0===t?r:t%2===1?u(e,t-1,r*e):u(e*e,t/2,r)},g=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,a,s,l=i(this),h=n(e),d=[0,0,0,0,0,0],p="",m="0",f=function(e,t){var r=-1,a=t;while(++r<6)a+=e*d[r],d[r]=a%1e7,a=c(a/1e7)},b=function(e){var t=6,r=0;while(--t>=0)r+=d[t],d[t]=c(r/e),r=r%e*1e7},D=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==d[e]){var r=String(d[e]);t=""===t?r:t+o.call("0",7-r.length)+r}return t};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(t=g(l*u(2,69,1))-69,r=t<0?l*u(2,-t,1):l/u(2,t,1),r*=4503599627370496,t=52-t,t>0){f(0,r),a=h;while(a>=7)f(1e7,0),a-=7;f(u(10,a,1),0),a=t-1;while(a>=23)b(1<<23),a-=23;b(1<<a),f(1,1),b(2),m=D()}else f(0,r),f(1<<-t,0),m=D()+o.call("0",h);return h>0?(s=m.length,m=p+(s<=h?"0."+o.call("0",h-s)+m:m.slice(0,s-h)+"."+m.slice(s-h))):m=p+m,m}})},c24f:function(e,t,r){"use strict";r.d(t,"i",(function(){return n})),r.d(t,"f",(function(){return i})),r.d(t,"o",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"n",(function(){return c})),r.d(t,"p",(function(){return u})),r.d(t,"a",(function(){return g})),r.d(t,"m",(function(){return h})),r.d(t,"h",(function(){return d})),r.d(t,"e",(function(){return p})),r.d(t,"k",(function(){return m})),r.d(t,"l",(function(){return f})),r.d(t,"d",(function(){return b})),r.d(t,"g",(function(){return D})),r.d(t,"j",(function(){return L}));var a=r("b775");function n(){return Object(a["a"])({url:"/WebC/api/Profile",method:"get"})}function i(){return Object(a["a"])({url:"/WebC/api/Downline",method:"get"})}function o(e){return Object(a["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/WebC/api/TopupTxn",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/WebC/api/TopupPoint",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:e})}function g(e){return Object(a["a"])({url:"/WebC/api/AddCredit",method:"post",data:e})}function h(e){return Object(a["a"])({url:"/WebC/api/MinusCredit",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function p(e){return Object(a["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function m(e){return Object(a["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function f(e){return Object(a["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}function b(e){return Object(a["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:e})}function D(e){return Object(a["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function L(e){return Object(a["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:e})}},cf23:function(e,t,r){"use strict";r("0de4")},e06a:function(e,t,r){"use strict";r("44a9")}}]);