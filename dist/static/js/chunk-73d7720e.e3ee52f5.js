(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73d7720e"],{1148:function(e,t,r){"use strict";var a=r("a691"),n=r("1d80");e.exports="".repeat||function(e){var t=String(n(this)),r="",i=a(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1340:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"userCredit app-container"},[r("div",{staticClass:"flex-box"},[r("div",{staticClass:"item"},[r("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:e.selectChange},model:{value:e.searchFrom.showDate,callback:function(t){e.$set(e.searchFrom,"showDate",t)},expression:"searchFrom.showDate"}},e._l(e.dataList,(function(e){return r("el-option",{key:e.showDate,attrs:{label:e.showDate,value:e.showDate}})})),1)],1),r("div",{staticClass:"item"},[r("el-select",{attrs:{placeholder:"Please select type "},on:{change:function(t){return e.$forceUpdate()}},model:{value:e.searchFrom.gameCode,callback:function(t){e.$set(e.searchFrom,"gameCode",t)},expression:"searchFrom.gameCode"}},e._l(e.gameList,(function(e){return r("el-option",{key:e.code,attrs:{label:e.description,value:e.code}})})),1)],1),r("div",{staticClass:"item"},[r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.butLoading,expression:"butLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.getList}},[e._v("搜索")])],1),r("div",{staticClass:"item item1"},[r("el-input",{attrs:{placeholder:"输入关键字搜索"},on:{input:e.searchTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),r("div",{staticClass:"Pdiv"},[r("div",{staticClass:"Cdiv"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList.filter((function(t){return!e.search||t.userCode.toLowerCase().includes(e.search.toLowerCase())||t.userName.toLowerCase().includes(e.search.toLowerCase())||t.remarks.toLowerCase().includes(e.search.toLowerCase())||t.createdDate.toLowerCase().includes(e.search.toLowerCase())||t.point.toLowerCase().includes(e.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[r("el-table-column",{attrs:{label:"会员ID",align:"center",prop:"userCode",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.tag?r("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")]):r("span",[e._v(e._s(t.row.userCode)+" ")])]}}])}),r("el-table-column",{attrs:{label:"会员名 ",align:"center",prop:"userName","sort-by":"userName",sortable:""}}),r("el-table-column",{attrs:{label:"积分",align:"center",prop:"point",sortable:""}}),r("el-table-column",{attrs:{label:"备注",align:"center",prop:"remarks",sortable:""}}),r("el-table-column",{attrs:{label:"时间",align:"center",prop:"createdDate",sortable:""}})],1),r("div",{staticClass:"footer_div"},[r("div",[e._v("总计")]),e._l(e.countList,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])}))],2)],1)]),r("div")])},n=[],i=r("c7eb"),o=r("1da1"),s=(r("c740"),r("ac1f"),r("841c"),r("fb6a"),r("4de4"),r("d3b7"),r("caad"),r("2532"),r("159b"),r("a9e3"),r("b680"),r("c24f")),c={name:"userCredit",components:{},data:function(){return{listLoading:!1,searchFrom:{userInfo:JSON.parse(localStorage.getItem("userInfo")),fromDate:"",toDate:"",showDate:"",userType:""},DetailFrom:{},dataList:[],nowGame:"",gameList:[],DetDialog:!1,gametxnId:"",gameCode:"",butLoading:!1,pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{},countList:[],search:""}},created:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=JSON.parse(localStorage.getItem("userInfo")),e.userInfo=r,Object(s["n"])().then((function(t){0==t.code&&(e.gameList=t.data,e.searchFrom.gameCode=e.gameList[0].code,Object(s["i"])().then((function(t){0==t.code&&(e.dataList=t.data,e.searchFrom.showDate=e.dataList[0].showDate,e.searchFrom.fromDate=e.dataList[0].fromDate,e.searchFrom.toDate=e.dataList[0].toDate,e.getList())})))}));case 3:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{log:function(){},selectChange:function(e){var t=this.dataList.findIndex((function(t,r){return t.showDate==e}));this.searchFrom.fromDate=this.dataList[t].fromDate,this.searchFrom.toDate=this.dataList[t].toDate},changeShow:function(e){this.gametxnId=e.gametxnId,this.gameCode=e.gameCode,this.DetDialog=!0,this.$refs.detail.getList(this.gametxnId,this.gameCode,this.searchFrom.fromDate,this.searchFrom.toDate,this.nowGame)},changeDetDialog:function(e){this.DetDialog=e},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.search?this.searchTable():this.getTemList()},handleCurrentChange:function(e){this.currentPage=e,this.search?this.searchTable():this.getTemList()},getTemList:function(){this.temList=this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)},searchTable:function(){var e=this;""==this.search?this.countDeatil(this.pointList):(this.searchList=this.pointList.filter((function(t){return!e.search||t.userCode.toLowerCase().includes(e.search.toLowerCase())||t.userName.toLowerCase().includes(e.search.toLowerCase())||t.remarks.toLowerCase().includes(e.search.toLowerCase())||t.createdDate.toLowerCase().includes(e.search.toLowerCase())||t.point.toLowerCase().includes(e.search.toLowerCase())})),this.currentPage=1,this.countDeatil(this.searchList))},countDeatil:function(e){this.totalCount=e.length;var t="",r="",a="",n=0;e.forEach((function(e){n+=Number(e.point)})),n=Number(n).toFixed(2),this.temList=e.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.countList=[t,n,r,a]},getList:function(){var e=this;this.search="",this.currentPage=1,this.nowGame=this.searchFrom.gameCode,this.butLoading=!0;if(this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var t=this.searchFrom,r=t.fromDate,a=t.toDate,n=t.gameCode;Object(s["o"])({gameCode:n,fromDate:r,toDate:a}).then(function(){var t=Object(o["a"])(Object(i["a"])().mark((function t(r){var a,n,o,s,c,u;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.butLoading=!1,e.pointList=r.data,a="",n="",o="",s="",c=0,u=!0,e.pointList.forEach((function(e){c+=Number(e.point)})),c=Number(c).toFixed(2),e.count={userCode:a,userName:n,remarks:o,point:c,tag:u},t.next=13,e.getTemList();case 13:e.countList=[n,c,o,s],e.totalCount=r.data.length,e.listLoading=!1;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else this.$message({type:"info",message:"Please select time"})}}},u=c,l=(r("bcd0"),r("2877")),d=Object(l["a"])(u,a,n,!1,null,"52bf460e",null);t["default"]=d.exports},"408a":function(e,t,r){var a=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"841c":function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("1d80"),o=r("129f"),s=r("14c3");a("search",1,(function(e,t,r){return[function(t){var r=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r):new RegExp(t)[e](String(r))},function(e){var a=r(t,e,this);if(a.done)return a.value;var i=n(e),c=String(this),u=i.lastIndex;o(u,0)||(i.lastIndex=0);var l=s(i,c);return o(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),o=r("6eeb"),s=r("5135"),c=r("c6b6"),u=r("7156"),l=r("c04e"),d=r("d039"),h=r("7c73"),f=r("241c").f,m=r("06cf").f,g=r("9bf2").f,p=r("58a8").trim,b="Number",C=n[b],v=C.prototype,L=c(h(v))==b,w=function(e){var t,r,a,n,i,o,s,c,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=p(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(i=u.slice(2),o=i.length,s=0;s<o;s++)if(c=i.charCodeAt(s),c<48||c>n)return NaN;return parseInt(i,a)}return+u};if(i(b,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var D,x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(L?d((function(){v.valueOf.call(r)})):c(r)!=b)?u(new C(w(t)),r,x):w(t)},I=a?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;I.length>O;O++)s(C,D=I[O])&&!s(x,D)&&g(x,D,m(C,D));x.prototype=v,v.constructor=x,o(n,b,x)}},b680:function(e,t,r){"use strict";var a=r("23e7"),n=r("a691"),i=r("408a"),o=r("1148"),s=r("d039"),c=1..toFixed,u=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},d=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,a,s,c=i(this),h=n(e),f=[0,0,0,0,0,0],m="",g="0",p=function(e,t){var r=-1,a=t;while(++r<6)a+=e*f[r],f[r]=a%1e7,a=u(a/1e7)},b=function(e){var t=6,r=0;while(--t>=0)r+=f[t],f[t]=u(r/e),r=r%e*1e7},C=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var r=String(f[e]);t=""===t?r:t+o.call("0",7-r.length)+r}return t};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(t=d(c*l(2,69,1))-69,r=t<0?c*l(2,-t,1):c/l(2,t,1),r*=4503599627370496,t=52-t,t>0){p(0,r),a=h;while(a>=7)p(1e7,0),a-=7;p(l(10,a,1),0),a=t-1;while(a>=23)b(1<<23),a-=23;b(1<<a),p(1,1),b(2),g=C()}else p(0,r),p(1<<-t,0),g=C()+o.call("0",h);return h>0?(s=g.length,g=m+(s<=h?"0."+o.call("0",h-s)+g:g.slice(0,s-h)+"."+g.slice(s-h))):g=m+g,g}})},bcd0:function(e,t,r){"use strict";r("fe65")},c24f:function(e,t,r){"use strict";r.d(t,"j",(function(){return n})),r.d(t,"g",(function(){return i})),r.d(t,"t",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return u})),r.d(t,"s",(function(){return l})),r.d(t,"u",(function(){return d})),r.d(t,"a",(function(){return h})),r.d(t,"r",(function(){return f})),r.d(t,"i",(function(){return m})),r.d(t,"e",(function(){return g})),r.d(t,"p",(function(){return p})),r.d(t,"q",(function(){return b})),r.d(t,"d",(function(){return C})),r.d(t,"h",(function(){return v})),r.d(t,"k",(function(){return L})),r.d(t,"m",(function(){return w})),r.d(t,"l",(function(){return D})),r.d(t,"n",(function(){return x})),r.d(t,"o",(function(){return I}));var a=r("b775");function n(){return Object(a["a"])({url:"/WebC/api/Profile",method:"get"})}function i(){return Object(a["a"])({url:"/WebC/api/Downline",method:"get"})}function o(e){return Object(a["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/WebC/api/DownlineTopupTxn",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:e})}function u(e){return Object(a["a"])({url:"/WebC/api/GetCreditLimit",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/WebC/api/TopupPoint",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:e})}function h(e){return Object(a["a"])({url:"/WebC/api/AddCredit",method:"post",data:e})}function f(e){return Object(a["a"])({url:"/WebC/api/MinusCredit",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function g(e){return Object(a["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function p(e){return Object(a["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function b(e){return Object(a["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}function C(e){return Object(a["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:e})}function v(e){return Object(a["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function L(e){return Object(a["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:e})}function w(e){return Object(a["a"])({url:"/WebC/api/GetMemberTxnFB",method:"get",params:e})}function D(e){return Object(a["a"])({url:"/WebC/api/GetMemberTransferTxn",method:"get",params:e})}function x(e){return Object(a["a"])({url:"/WebC/api/DrlPointTransferGame",method:"get",params:e})}function I(e){return Object(a["a"])({url:"/WebC/api/DownlineTransferTxn",method:"get",params:e})}},c740:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").findIndex,i=r("44d2"),o=r("ae40"),s="findIndex",c=!0,u=o(s);s in[]&&Array(1)[s]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!u},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(s)},fe65:function(e,t,r){}}]);