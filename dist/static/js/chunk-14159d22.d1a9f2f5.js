(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14159d22"],{1148:function(e,t,r){"use strict";var n=r("a691"),a=r("1d80");e.exports="".repeat||function(e){var t=String(a(this)),r="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},"2b20":function(e,t,r){},"408a":function(e,t,r){var n=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},5640:function(e,t,r){},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),o=r("94ca"),i=r("6eeb"),s=r("5135"),l=r("c6b6"),u=r("7156"),c=r("c04e"),g=r("d039"),h=r("7c73"),d=r("241c").f,f=r("06cf").f,m=r("9bf2").f,b=r("58a8").trim,p="Number",D=a[p],v=D.prototype,L=l(h(v))==p,w=function(e){var t,r,n,a,o,i,s,l,u=c(e,!1);if("string"==typeof u&&u.length>2)if(u=b(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(o=u.slice(2),i=o.length,s=0;s<i;s++)if(l=o.charCodeAt(s),l<48||l>a)return NaN;return parseInt(o,n)}return+u};if(o(p,!D(" 0o1")||!D("0b1")||D("+0x1"))){for(var N,C=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof C&&(L?g((function(){v.valueOf.call(r)})):l(r)!=p)?u(new D(w(t)),r,C):w(t)},F=n?d(D):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;F.length>S;S++)s(D,N=F[S])&&!s(C,N)&&m(C,N,f(D,N));C.prototype=v,v.constructor=C,i(a,p,C)}},b0c7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"userCredit app-container"},[r("div",{staticClass:"flex-box"},[r("div",{staticClass:"item"},[r("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:e.getList},model:{value:e.searchFrom.showDate,callback:function(t){e.$set(e.searchFrom,"showDate",t)},expression:"searchFrom.showDate"}},e._l(e.dataList,(function(e){return r("el-option",{key:e.showDate,attrs:{label:e.showDate,value:e.showDate}})})),1)],1)]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[r("el-table-column",{attrs:{label:"操作",align:"center",prop:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.gnuserId?r("el-button",{attrs:{type:"primary",round:"",size:"small"},on:{click:function(r){return e.changeShow(t.row)}}},[e._v("明细")]):r("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"会员 ID",align:"center",prop:"userCode","sort-by":"userCode",sortable:""}}),r("el-table-column",{attrs:{label:"会员名",align:"center",prop:"userName"}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover"}}),r("el-table-column",{attrs:{label:"玩家利润提成",align:"center",prop:"playerProfitBonus"}}),r("el-table-column",{attrs:{label:"流水提成",align:"center",prop:"turnoverBonus","sort-by":"turnoverBonus",sortable:""}}),r("el-table-column",{attrs:{label:"利润提成",align:"center",prop:"profitBonus","sort-by":"profitBonus",sortable:""}}),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet","sort-by":"wallet",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose"}}),r("el-table-column",{attrs:{label:"玩家总结",align:"center",prop:"playerProfit"}}),r("el-table-column",{attrs:{label:"总结",align:"center",prop:"profit"}})],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("Detail",{ref:"detail",attrs:{DetDialog:e.DetDialog,fromDate:e.searchFrom.fromDate,toDate:e.searchFrom.toDate,DetailFrom:e.DetailFrom},on:{changeDetDialog:e.changeDetDialog}})],1)},a=[],o=(r("fb6a"),r("a9e3"),r("d3b7"),r("159b"),r("b680"),r("c24f")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"总结明细",visible:e.DetDialog_,center:"",width:"98%"},on:{close:e.closeEdit}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[r("el-table-column",{attrs:{label:"会员 ID",align:"center",prop:"userCode","sort-by":"userCode",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.userCode?r("span",[e._v(e._s(t.row.userCode)+" ")]):r("span",{staticStyle:{"fpnt-size":"20px"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"会员名",align:"center",prop:"userName"}}),r("el-table-column",{attrs:{label:"游戏",align:"center",prop:"game"}}),r("el-table-column",{attrs:{label:"场数",align:"center",prop:"gameNo"}}),r("el-table-column",{attrs:{label:"类型",align:"center",prop:"type"}}),r("el-table-column",{attrs:{label:"下注",align:"center",prop:"bet"}}),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet"}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose"}}),r("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},s=[],l=r("ade3"),u={name:"Detail",props:{DetDialog:{type:Boolean,default:!1},gnuserId:{type:String},fromDate:{type:String},toDate:{type:String}},data:function(){var e;return e={listLoading:!1,memberList:[],agencypList:[],detailShow:!1},Object(l["a"])(e,"memberList",[]),Object(l["a"])(e,"temList",[]),Object(l["a"])(e,"currentPage",1),Object(l["a"])(e,"totalCount",1),Object(l["a"])(e,"pageSizes",[5,10,20,30]),Object(l["a"])(e,"PageSize",10),Object(l["a"])(e,"count",{}),e},created:function(){},mounted:function(){},components:{},computed:{DetDialog_:{get:function(){return this.DetDialog},set:function(e){this.$emit("changeDetDialog",e)}}},methods:{closeEdit:function(){this.$emit("changeDetDialog",!1)},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.temList.unshift(this.count)},getList:function(e,t,r){var n=this;console.log(this.DetDialog,this.gnuserId,this.fromDate,this.toDate),this.fromDate&&this.toDate?(this.listLoading=!0,Object(o["l"])({gnuserId:e,fromDate:t,toDate:r}).then((function(e){console.log(e,"会员明细总结"),n.memberList=e.data;var t=0,r=0,a=0,o=0;n.memberList.forEach((function(e){t+=Number(e.bet),r+=Number(e.turnover),a+=Number(e.winLose),o+=Number(e.wallet)})),t=Number(t).toFixed(2),r=Number(r).toFixed(2),a=Number(a).toFixed(2),o=Number(o).toFixed(2),n.count={bet:t,turnover:r,winLose:a,wallet:o},n.count.firstColumn="总计",n.getTemList(),n.listLoading=!1})).catch((function(e){n.listLoading=!1,console.log(e)}))):this.$message({type:"info",message:"Please select time"})}}},c=u,g=(r("dd51"),r("2877")),h=Object(g["a"])(c,i,s,!1,null,"25aedaff",null),d=h.exports,f={name:"userCredit",components:{Detail:d},data:function(){return{listLoading:!1,searchFrom:{userInfo:JSON.parse(localStorage.getItem("userInfo")),fromDate:"",toDate:"",showDate:""},DetailFrom:{},dataList:[],DetDialog:!1,gnuserId:"",pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{}}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=t,Object(o["h"])().then((function(t){0==t.code&&(e.dataList=t.data,e.searchFrom.showDate=e.dataList[0].showDate,console.log(e.dataList,"时间列表"),e.getList())}))},methods:{changeShow:function(e){console.log(e),this.gnuserId=e.gnuserId,this.DetDialog=!0,this.$refs.detail.getList(this.gnuserId,this.searchFrom.fromDate,this.searchFrom.toDate)},changeDetDialog:function(e){this.DetDialog=e},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){var e=this;this.temList=this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.$nextTick((function(){e.temList.unshift(e.count)})),console.log(this.temList)},getList:function(){var e=this,t=this.searchFrom.showDate.indexOf(" - ");if(this.searchFrom.fromDate=this.searchFrom.showDate.substring(0,t),this.searchFrom.toDate=this.searchFrom.showDate.substring(Number(t)+3),this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var r=this.searchFrom,n=r.fromDate,a=r.toDate;Object(o["k"])({gnuserId:this.userInfo.gnuserId,fromDate:n,toDate:a}).then((function(t){console.log(t,"下线会员总结"),e.pointList=t.data;var r=0,n=0,a=0,o=0,i=0,s=0,l=0,u=0;e.pointList.forEach((function(e){r+=Number(e.turnover),n+=Number(e.playerProfitBonus),a+=Number(e.playerProfit),o+=Number(e.turnoverBonus),i+=Number(e.profitBonus),s+=Number(e.wallet),l+=Number(e.winLose),u+=Number(e.profit)})),r=Number(r).toFixed(2),n=Number(n).toFixed(2),a=Number(a).toFixed(2),o=Number(o).toFixed(2),i=Number(i).toFixed(2),s=Number(s).toFixed(2),l=Number(l).toFixed(2),u=Number(u).toFixed(2),e.count={turnover:r,playerProfitBonus:n,playerProfit:a,turnoverBonus:o,profitBonus:i,wallet:s,winLose:l,profit:u},e.count.firstColumn="总计",e.getTemList(),e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))}else this.$message({type:"info",message:"Please select time"})}}},m=f,b=(r("d66b"),Object(g["a"])(m,n,a,!1,null,"c30d3c24",null));t["default"]=b.exports},b680:function(e,t,r){"use strict";var n=r("23e7"),a=r("a691"),o=r("408a"),i=r("1148"),s=r("d039"),l=1..toFixed,u=Math.floor,c=function(e,t,r){return 0===t?r:t%2===1?c(e,t-1,r*e):c(e*e,t/2,r)},g=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,n,s,l=o(this),h=a(e),d=[0,0,0,0,0,0],f="",m="0",b=function(e,t){var r=-1,n=t;while(++r<6)n+=e*d[r],d[r]=n%1e7,n=u(n/1e7)},p=function(e){var t=6,r=0;while(--t>=0)r+=d[t],d[t]=u(r/e),r=r%e*1e7},D=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==d[e]){var r=String(d[e]);t=""===t?r:t+i.call("0",7-r.length)+r}return t};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(f="-",l=-l),l>1e-21)if(t=g(l*c(2,69,1))-69,r=t<0?l*c(2,-t,1):l/c(2,t,1),r*=4503599627370496,t=52-t,t>0){b(0,r),n=h;while(n>=7)b(1e7,0),n-=7;b(c(10,n,1),0),n=t-1;while(n>=23)p(1<<23),n-=23;p(1<<n),b(1,1),p(2),m=D()}else b(0,r),b(1<<-t,0),m=D()+i.call("0",h);return h>0?(s=m.length,m=f+(s<=h?"0."+i.call("0",h-s)+m:m.slice(0,s-h)+"."+m.slice(s-h))):m=f+m,m}})},c24f:function(e,t,r){"use strict";r.d(t,"i",(function(){return a})),r.d(t,"f",(function(){return o})),r.d(t,"o",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"n",(function(){return u})),r.d(t,"p",(function(){return c})),r.d(t,"a",(function(){return g})),r.d(t,"m",(function(){return h})),r.d(t,"h",(function(){return d})),r.d(t,"e",(function(){return f})),r.d(t,"k",(function(){return m})),r.d(t,"l",(function(){return b})),r.d(t,"d",(function(){return p})),r.d(t,"g",(function(){return D})),r.d(t,"j",(function(){return v}));var n=r("b775");function a(){return Object(n["a"])({url:"/WebC/api/Profile",method:"get"})}function o(){return Object(n["a"])({url:"/WebC/api/Downline",method:"get"})}function i(e){return Object(n["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/WebC/api/TopupTxn",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:e})}function u(e){return Object(n["a"])({url:"/WebC/api/TopupPoint",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:e})}function g(e){return Object(n["a"])({url:"/WebC/api/AddCredit",method:"post",data:e})}function h(e){return Object(n["a"])({url:"/WebC/api/MinusCredit",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function f(e){return Object(n["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function m(e){return Object(n["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function b(e){return Object(n["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}function p(e){return Object(n["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:e})}function D(e){return Object(n["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function v(e){return Object(n["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:e})}},d66b:function(e,t,r){"use strict";r("2b20")},dd51:function(e,t,r){"use strict";r("5640")}}]);