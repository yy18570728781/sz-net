(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfb783a6"],{1148:function(t,e,r){"use strict";var n=r("a691"),o=r("1d80");t.exports="".repeat||function(t){var e=String(o(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"5ae4":function(t,e,r){},9068:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"userCredit app-container"},[r("div",{staticClass:"flex-box"},[r("div",{staticClass:"item"},[r("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:t.selectChange},model:{value:t.searchFrom.showDate,callback:function(e){t.$set(t.searchFrom,"showDate",e)},expression:"searchFrom.showDate"}},t._l(t.dataList,(function(t){return r("el-option",{key:t.showDate,attrs:{label:t.showDate,value:t.showDate}})})),1)],1)]),r("div",{staticClass:"Pdiv"},[r("div",{staticClass:"Cdiv"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:t.temList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[r("el-table-column",{attrs:{label:"下线类别",align:"center",prop:"downlineCategory","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.downlineCategory?r("span",[t._v(t._s(e.row.downlineCategory))]):r("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"下线提成",align:"center",prop:"downlineBobus","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"我的提成",align:"center",prop:"bonus","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"积分转移",align:"center",prop:"transfer","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"我的总结",align:"center",prop:"profit","show-overflow-tooltip":""}})],1),r("div",{staticClass:"footer_div"},[r("div",[t._v("总计")]),t._l(t.countList,(function(e,n){return r("div",{key:n},[t._v(t._s(e))])}))],2)],1)]),r("p",[t._v("**我的总结 = 下线提成 + 我的提成 + 钱包 + 积分转移 + 输赢")])])},o=[],a=(r("c740"),r("fb6a"),r("d3b7"),r("159b"),r("a9e3"),r("b680"),r("c24f")),i={name:"userCredit",data:function(){return{listLoading:!1,searchFrom:{userInfo:JSON.parse(localStorage.getItem("userInfo")),fromDate:"",toDate:"",showDate:""},DetailFrom:{},dataList:[],DetDialog:!1,gnuserId:"",pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{},countList:[]}},created:function(){var t=this,e=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=e,Object(a["i"])().then((function(e){0==e.code&&(t.dataList=e.data,t.searchFrom.showDate=t.dataList[0].showDate,t.searchFrom.fromDate=t.dataList[0].fromDate,t.searchFrom.toDate=t.dataList[0].toDate,t.getList())}))},methods:{selectChange:function(t){var e=this.dataList.findIndex((function(e,r){return e.showDate==t}));this.searchFrom.fromDate=this.dataList[e].fromDate,this.searchFrom.toDate=this.dataList[e].toDate,this.getList()},changeShow:function(t){this.gnuserId=t.gnuserId,this.DetDialog=!0,this.$refs.detail.getList(this.gnuserId,this.searchFrom.fromDate,this.searchFrom.toDate)},changeDetDialog:function(t){this.DetDialog=t},handleSizeChange:function(t){this.PageSize=t,this.currentPage=1,this.getTemList()},handleCurrentChange:function(t){console.log(t,"val"),this.currentPage=t,this.getTemList()},getTemList:function(){this.temList=this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)},getList:function(){var t=this;if(this.currentPage=1,this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var e=this.searchFrom,r=e.fromDate,n=e.toDate;Object(a["d"])({gnuserId:this.userInfo.gnuserId,fromDate:r,toDate:n}).then((function(e){t.pointList=e.data;var r=0,n=0,o=0,a=0,i=0,s=0,u=0;t.pointList.forEach((function(t){r+=Number(t.turnover),n+=Number(t.downlineBobus),o+=Number(t.bonus),a+=Number(t.wallet),i+=Number(t.transfer),s+=Number(t.winLose),u+=Number(t.profit)})),r=Number(r).toFixed(2),n=Number(n).toFixed(2),o=Number(o).toFixed(2),a=Number(a).toFixed(2),i=Number(i).toFixed(2),s=Number(s).toFixed(2),u=Number(u).toFixed(2),t.count={turnover:r,downlineBobus:n,bonus:o,wallet:a,transfer:i,winLose:s,profit:u},t.count.firstColumn="总计",t.countList=[r,n,o,a,i,s,u],t.getTemList(),t.listLoading=!1})).catch((function(e){t.listLoading=!1}))}else this.$message({type:"info",message:"Please select time"})}}},s=i,u=(r("978d"),r("2877")),c=Object(u["a"])(s,n,o,!1,null,"bcd23c10",null);e["default"]=c.exports},"978d":function(t,e,r){"use strict";r("5ae4")},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),a=r("94ca"),i=r("6eeb"),s=r("5135"),u=r("c6b6"),c=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),h=r("241c").f,b=r("06cf").f,m=r("9bf2").f,p=r("58a8").trim,g="Number",w=o[g],v=w.prototype,C=u(d(v))==g,D=function(t){var e,r,n,o,a,i,s,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=p(c),e=c.charCodeAt(0),43===e||45===e){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(a=c.slice(2),i=a.length,s=0;s<i;s++)if(u=a.charCodeAt(s),u<48||u>o)return NaN;return parseInt(a,n)}return+c};if(a(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var L,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(C?f((function(){v.valueOf.call(r)})):u(r)!=g)?c(new w(D(e)),r,N):D(e)},I=n?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;I.length>F;F++)s(w,L=I[F])&&!s(N,L)&&m(N,L,b(w,L));N.prototype=v,v.constructor=N,i(o,g,N)}},b680:function(t,e,r){"use strict";var n=r("23e7"),o=r("a691"),a=r("408a"),i=r("1148"),s=r("d039"),u=1..toFixed,c=Math.floor,l=function(t,e,r){return 0===e?r:e%2===1?l(t,e-1,r*t):l(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},d=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){u.call({})}));n({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,r,n,s,u=a(this),d=o(t),h=[0,0,0,0,0,0],b="",m="0",p=function(t,e){var r=-1,n=e;while(++r<6)n+=t*h[r],h[r]=n%1e7,n=c(n/1e7)},g=function(t){var e=6,r=0;while(--e>=0)r+=h[e],h[e]=c(r/t),r=r%t*1e7},w=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var r=String(h[t]);e=""===e?r:e+i.call("0",7-r.length)+r}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(b="-",u=-u),u>1e-21)if(e=f(u*l(2,69,1))-69,r=e<0?u*l(2,-e,1):u/l(2,e,1),r*=4503599627370496,e=52-e,e>0){p(0,r),n=d;while(n>=7)p(1e7,0),n-=7;p(l(10,n,1),0),n=e-1;while(n>=23)g(1<<23),n-=23;g(1<<n),p(1,1),g(2),m=w()}else p(0,r),p(1<<-e,0),m=w()+i.call("0",d);return d>0?(s=m.length,m=b+(s<=d?"0."+i.call("0",d-s)+m:m.slice(0,s-d)+"."+m.slice(s-d))):m=b+m,m}})},c24f:function(t,e,r){"use strict";r.d(e,"j",(function(){return o})),r.d(e,"g",(function(){return a})),r.d(e,"t",(function(){return i})),r.d(e,"c",(function(){return s})),r.d(e,"b",(function(){return u})),r.d(e,"f",(function(){return c})),r.d(e,"s",(function(){return l})),r.d(e,"u",(function(){return f})),r.d(e,"a",(function(){return d})),r.d(e,"r",(function(){return h})),r.d(e,"i",(function(){return b})),r.d(e,"e",(function(){return m})),r.d(e,"p",(function(){return p})),r.d(e,"q",(function(){return g})),r.d(e,"d",(function(){return w})),r.d(e,"h",(function(){return v})),r.d(e,"k",(function(){return C})),r.d(e,"m",(function(){return D})),r.d(e,"l",(function(){return L})),r.d(e,"n",(function(){return N})),r.d(e,"o",(function(){return I}));var n=r("b775");function o(){return Object(n["a"])({url:"/WebC/api/Profile",method:"get"})}function a(){return Object(n["a"])({url:"/WebC/api/Downline",method:"get"})}function i(t){return Object(n["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/WebC/api/DownlineTopupTxn",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/WebC/api/GetCreditLimit",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/WebC/api/TopupPoint",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/WebC/api/AddCredit",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/WebC/api/MinusCredit",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/WebC/api/DrlWeek",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:t})}function w(t){return Object(n["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:t})}function v(t){return Object(n["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:t})}function C(t){return Object(n["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:t})}function D(t){return Object(n["a"])({url:"/WebC/api/GetMemberTxnFB",method:"get",params:t})}function L(t){return Object(n["a"])({url:"/WebC/api/GetMemberTransferTxn",method:"get",params:t})}function N(t){return Object(n["a"])({url:"/WebC/api/DrlPointTransferGame",method:"get",params:t})}function I(t){return Object(n["a"])({url:"/WebC/api/DownlineTransferTxn",method:"get",params:t})}},c740:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").findIndex,a=r("44d2"),i=r("ae40"),s="findIndex",u=!0,c=i(s);s in[]&&Array(1)[s]((function(){u=!1})),n({target:"Array",proto:!0,forced:u||!c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a(s)}}]);