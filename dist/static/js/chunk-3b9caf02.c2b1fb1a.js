(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b9caf02"],{1148:function(e,t,a){"use strict";var r=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(a+=t);return a}},"1f49":function(e,t,a){"use strict";a("dddc")},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},4905:function(e,t,a){},"7ec3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userCredit app-container"},[a("div",{staticClass:"flex-box"},[a("div",{staticClass:"item"},[a("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:e.getList},model:{value:e.searchFrom.showDate,callback:function(t){e.$set(e.searchFrom,"showDate",t)},expression:"searchFrom.showDate"}},e._l(e.dataList,(function(e){return a("el-option",{key:e.showDate,attrs:{label:e.showDate,value:e.showDate}})})),1)],1),a("div",{staticClass:"item"},[a("el-select",{staticClass:"select",attrs:{placeholder:"Please select type "},on:{change:e.getList},model:{value:e.searchFrom.userType,callback:function(t){e.$set(e.searchFrom,"userType",t)},expression:"searchFrom.userType"}},e._l(e.gameList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.description,value:e.description}})})),1)],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{"show-summary":!0,data:e.temList,height:"600","element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[a("el-table-column",{attrs:{label:"操作",align:"center",prop:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.gametxnId?a("el-button",{attrs:{type:"primary",round:"",size:"small"},on:{click:function(a){return e.changeShow(t.row)}}},[e._v("明细")]):a("span",{staticStyle:{"fpnt-size":"20px"}},[e._v("总计")])]}}])}),a("el-table-column",{attrs:{label:"场数",align:"center",prop:"gameNo"}}),a("el-table-column",{attrs:{label:"人数 ",align:"center",prop:"totalPlayer","sort-by":"totalPlayer",sortable:""}}),a("el-table-column",{attrs:{label:"上庄费",align:"center",prop:"hostFee"}}),a("el-table-column",{attrs:{label:"服务费",align:"center",prop:"serviceFee"}}),a("el-table-column",{attrs:{label:"庄赢抽水",align:"center",prop:"bankerWinFee","sort-by":"bankerWinFee",sortable:""}}),a("el-table-column",{attrs:{label:"闲赢抽水",align:"center",prop:"playerWinFee","sort-by":"playerWinFee",sortable:""}}),a("el-table-column",{attrs:{label:"带包费",align:"center",prop:"packetFee","sort-by":"packetFee",sortable:""}}),a("el-table-column",{attrs:{label:"时间",align:"center",prop:"drawDate"}})],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("Detail",{ref:"detail",attrs:{DetDialog:e.DetDialog,fromDate:e.searchFrom.fromDate,toDate:e.searchFrom.toDate,DetailFrom:e.DetailFrom},on:{changeDetDialog:e.changeDetDialog}})],1)},n=[],i=(a("a4d3"),a("e01a"),a("fb6a"),a("a9e3"),a("d3b7"),a("159b"),a("b680"),a("8194")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"总结明细",visible:e.DetDialog_,center:"",width:"98%"},on:{close:e.closeEdit}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"userName",order:"descending"}}},[a("el-table-column",{attrs:{label:"会员名",align:"center",prop:"playerName"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.playerName?a("span",[e._v(e._s(t.row.playerName)+" ")]):a("span",{staticStyle:{"fpnt-size":"20px"}},[e._v("总计")])]}}])}),a("el-table-column",{attrs:{label:"类型",align:"center",prop:"betType"}}),a("el-table-column",{attrs:{label:"下注",align:"center",prop:"bet"}}),a("el-table-column",{attrs:{label:"包点数",align:"center",prop:"packetPoint"}}),a("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),a("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose"}}),a("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},s=[],l={name:"Detail",props:{DetDialog:{type:Boolean,default:!1},gnuserId:{type:String},fromDate:{type:String},toDate:{type:String}},data:function(){return{listLoading:!1,agencypList:[],detailShow:!1,memberList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{}}},created:function(){},mounted:function(){},components:{},computed:{DetDialog_:{get:function(){return this.DetDialog},set:function(e){this.$emit("changeDetDialog",e)}}},methods:{closeEdit:function(){this.$emit("changeDetDialog",!1)},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.temList.unshift(this.count)},getList:function(e,t,a){var r=this;console.log(this.DetDialog,this.gnuserId,this.fromDate,this.toDate),this.fromDate&&this.toDate?(this.listLoading=!0,Object(i["l"])({gametxnId:e}).then((function(e){console.log(e,"游戏明细总结"),r.memberList=e.data;var t=0,a=0,n=0,i=0,o=0;r.memberList.forEach((function(e){t+=Number(e.bet),a+=Number(e.packetPoint),n+=Number(e.serviceFee),i+=Number(e.turnover),o+=Number(e.winLose)})),t=Number(t).toFixed(2),a=Number(a).toFixed(2),n=Number(n).toFixed(2),i=Number(i).toFixed(2),o=Number(o).toFixed(2),r.count={bet:t,packetPoint:a,serviceFee:n,turnover:i,winLose:o},r.count.firstColumn="总计",r.getTemList(),r.listLoading=!1})).catch((function(e){r.listLoading=!1,console.log(e)}))):this.$message({type:"info",message:"Please select time"})}}},c=l,u=(a("c985"),a("2877")),g=Object(u["a"])(c,o,s,!1,null,"0d7348d3",null),h=g.exports,m={name:"userCredit",components:{Detail:h},data:function(){return{listLoading:!1,searchFrom:{userInfo:JSON.parse(localStorage.getItem("userInfo")),fromDate:"",toDate:"",showDate:"",userType:""},DetailFrom:{},dataList:[],gameList:[],DetDialog:!1,gametxnId:"",pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{}}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=t,Object(i["i"])().then((function(t){0==t.code&&(e.dataList=t.data,e.searchFrom.showDate=e.dataList[0].showDate,console.log(e.dataList,"时间列表"),e.getList())})),Object(i["g"])().then((function(t){0==t.code&&(e.gameList=t.data,e.searchFrom.userType=e.gameList[0].description,console.log(t,"游戏类型列表"))}))},mounted:function(){},methods:{changeShow:function(e){console.log(e),this.gametxnId=e.gametxnId,this.DetDialog=!0,this.$refs.detail.getList(this.gametxnId,this.searchFrom.fromDate,this.searchFrom.toDate)},changeDetDialog:function(e){this.DetDialog=e},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList(),console.log(e,"条数")},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.temList.unshift(this.count)},getList:function(){var e=this,t=this.searchFrom.showDate.indexOf(" - ");if(this.searchFrom.fromDate=this.searchFrom.showDate.substring(0,t),this.searchFrom.toDate=this.searchFrom.showDate.substring(Number(t)+3),this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var a=this.searchFrom,r=a.fromDate,n=a.toDate,o=a.userType;Object(i["j"])({userType:o,fromDate:r,toDate:n}).then((function(t){console.log(t,"游戏"),e.pointList=t.data;var a="",r=0,n=0,i=0,o=0,s=0,l=0,c="";e.pointList.forEach((function(e){r+=Number(e.totalPlayer),n+=Number(e.hostFee),i+=Number(e.serviceFee),o+=Number(e.bankerWinFee),s+=Number(e.playerWinFee),l+=Number(e.packetFee)})),r=Number(r).toFixed(2),n=Number(n).toFixed(2),i=Number(i).toFixed(2),o=Number(o).toFixed(2),s=Number(s).toFixed(2),l=Number(l).toFixed(2),e.count={gameNo:a,totalPlayer:r,hostFee:n,serviceFee:i,bankerWinFee:o,playerWinFee:s,packetFee:l,drawDate:c},e.count.firstColumn="总计",e.getTemList(),e.totalCount=t.data.length,e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))}else this.$message({type:"info",message:"Please select time"})}}},p=m,d=(a("1f49"),Object(u["a"])(p,r,n,!1,null,"0375f184",null));t["default"]=d.exports},8194:function(e,t,a){"use strict";a.d(t,"k",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"i",(function(){return s})),a.d(t,"h",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return h})),a.d(t,"g",(function(){return m})),a.d(t,"j",(function(){return p})),a.d(t,"l",(function(){return d}));var r=a("b775");function n(e){return Object(r["a"])({url:"/WebC/api/User",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/WebC/api/TopupTxn",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/WebC/api/CreditTxn",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function l(e){return Object(r["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function c(e){return Object(r["a"])({url:"/WebC/api/DrlAgentLevel",method:"get",params:e})}function u(e){return Object(r["a"])({url:"/WebC/api/GetAdminAgentSum",method:"get",params:e})}function g(e){return Object(r["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function h(e){return Object(r["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function m(e){return Object(r["a"])({url:"/WebC/api/DrlGame",method:"get",params:e})}function p(e){return Object(r["a"])({url:"/WebC/api/GetGameTxnSum",method:"get",params:e})}function d(e){return Object(r["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),i=a("94ca"),o=a("6eeb"),s=a("5135"),l=a("c6b6"),c=a("7156"),u=a("c04e"),g=a("d039"),h=a("7c73"),m=a("241c").f,p=a("06cf").f,d=a("9bf2").f,f=a("58a8").trim,b="Number",D=n[b],F=D.prototype,v=l(h(F))==b,L=function(e){var t,a,r,n,i,o,s,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=f(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(i=c.slice(2),o=i.length,s=0;s<o;s++)if(l=i.charCodeAt(s),l<48||l>n)return NaN;return parseInt(i,r)}return+c};if(i(b,!D(" 0o1")||!D("0b1")||D("+0x1"))){for(var N,y=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof y&&(v?g((function(){F.valueOf.call(a)})):l(a)!=b)?c(new D(L(t)),a,y):L(t)},w=r?m(D):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)s(D,N=w[x])&&!s(y,N)&&d(y,N,p(D,N));y.prototype=F,F.constructor=y,o(n,b,y)}},b680:function(e,t,a){"use strict";var r=a("23e7"),n=a("a691"),i=a("408a"),o=a("1148"),s=a("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,a){return 0===t?a:t%2===1?u(e,t-1,a*e):u(e*e,t/2,a)},g=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,a,r,s,l=i(this),h=n(e),m=[0,0,0,0,0,0],p="",d="0",f=function(e,t){var a=-1,r=t;while(++a<6)r+=e*m[a],m[a]=r%1e7,r=c(r/1e7)},b=function(e){var t=6,a=0;while(--t>=0)a+=m[t],m[t]=c(a/e),a=a%e*1e7},D=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==m[e]){var a=String(m[e]);t=""===t?a:t+o.call("0",7-a.length)+a}return t};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(t=g(l*u(2,69,1))-69,a=t<0?l*u(2,-t,1):l/u(2,t,1),a*=4503599627370496,t=52-t,t>0){f(0,a),r=h;while(r>=7)f(1e7,0),r-=7;f(u(10,r,1),0),r=t-1;while(r>=23)b(1<<23),r-=23;b(1<<r),f(1,1),b(2),d=D()}else f(0,a),f(1<<-t,0),d=D()+o.call("0",h);return h>0?(s=d.length,d=p+(s<=h?"0."+o.call("0",h-s)+d:d.slice(0,s-h)+"."+d.slice(s-h))):d=p+d,d}})},c985:function(e,t,a){"use strict";a("4905")},dddc:function(e,t,a){}}]);