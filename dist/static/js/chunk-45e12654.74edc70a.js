(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45e12654"],{1148:function(e,t,r){"use strict";var a=r("a691"),o=r("1d80");e.exports="".repeat||function(e){var t=String(o(this)),r="",s=a(e);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(r+=t);return r}},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"408a":function(e,t,r){var a=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"841c":function(e,t,r){"use strict";var a=r("d784"),o=r("825a"),s=r("1d80"),i=r("129f"),n=r("14c3");a("search",1,(function(e,t,r){return[function(t){var r=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r):new RegExp(t)[e](String(r))},function(e){var a=r(t,e,this);if(a.done)return a.value;var s=o(e),l=String(this),c=s.lastIndex;i(c,0)||(s.lastIndex=0);var u=n(s,l);return i(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]}))},a5bf:function(e,t,r){"use strict";r("d5ca")},a9e3:function(e,t,r){"use strict";var a=r("83ab"),o=r("da84"),s=r("94ca"),i=r("6eeb"),n=r("5135"),l=r("c6b6"),c=r("7156"),u=r("c04e"),h=r("d039"),d=r("7c73"),m=r("241c").f,b=r("06cf").f,g=r("9bf2").f,f=r("58a8").trim,p="Number",L=o[p],w=L.prototype,C=l(d(w))==p,v=function(e){var t,r,a,o,s,i,n,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=f(c),t=c.charCodeAt(0),43===t||45===t){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+c}for(s=c.slice(2),i=s.length,n=0;n<i;n++)if(l=s.charCodeAt(n),l<48||l>o)return NaN;return parseInt(s,a)}return+c};if(s(p,!L(" 0o1")||!L("0b1")||L("+0x1"))){for(var N,x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(C?h((function(){w.valueOf.call(r)})):l(r)!=p)?c(new L(v(t)),r,x):v(t)},D=a?m(L):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;D.length>P;P++)n(L,N=D[P])&&!n(x,N)&&g(x,N,b(L,N));x.prototype=w,w.constructor=x,i(o,p,x)}},b0c7:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"userCredit app-container"},[r("div",{staticClass:"flex-box"},[r("div",{staticClass:"item"},[r("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:e.selectChange},model:{value:e.searchFrom.showDate,callback:function(t){e.$set(e.searchFrom,"showDate",t)},expression:"searchFrom.showDate"}},e._l(e.dataList,(function(e){return r("el-option",{key:e.showDate,attrs:{label:e.showDate,value:e.showDate}})})),1)],1),r("div",{staticClass:"item"},[r("el-input",{attrs:{placeholder:"输入关键字搜索"},on:{input:e.searchTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),r("div",{staticClass:"Pdiv"},[r("div",{staticClass:"Cdiv"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList.filter((function(t){return!e.search||t.userName.toLowerCase().includes(e.search.toLowerCase())||t.userRemark.toLowerCase().includes(e.search.toLowerCase())||t.turnover.toLowerCase().includes(e.search.toLowerCase())||t.playerProfitBonus.toLowerCase().includes(e.search.toLowerCase())||t.turnoverBonus.toLowerCase().includes(e.search.toLowerCase())||t.profitBonus.toLowerCase().includes(e.search.toLowerCase())||t.wallet.toLowerCase().includes(e.search.toLowerCase())||t.transfer.toLowerCase().includes(e.search.toLowerCase())||t.winLose.toLowerCase().includes(e.search.toLowerCase())||t.profit.toLowerCase().includes(e.search.toLowerCase())||t.playerProfit.toLowerCase().includes(e.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[r("el-table-column",{attrs:{label:"操作",align:"center",prop:"",sortable:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.gnuserId?r("el-button",{attrs:{type:"primary",round:"",size:"small"},on:{click:function(r){return e.changeShow(t.row)}}},[e._v("明细")]):r("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"会员名",align:"center",prop:"userName",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"备注名",align:"center",prop:"userRemark",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"会员提成",align:"center",prop:"playerProfitBonus",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"我的流水提成",align:"center",prop:"turnoverBonus","sort-by":"turnoverBonus",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"我的利润提成",align:"center",prop:"profitBonus","sort-by":"profitBonus",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet","sort-by":"wallet",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"积分转移",align:"center",prop:"transfer","sort-by":"transfer",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"会员总结",align:"center",prop:"playerProfit",sortable:"","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{label:"我的总结",align:"center",prop:"profit",sortable:"","show-overflow-tooltip":""}})],1),r("div",{staticClass:"footer_div"},[r("div",[e._v("总计")]),e._l(e.countList,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])}))],2)],1)]),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._m(0),r("Detail",{ref:"detail",attrs:{DetDialog:e.DetDialog,fromDate:e.searchFrom.fromDate,toDate:e.searchFrom.toDate,DetailFrom:e.DetailFrom},on:{changeDetDialog:e.changeDetDialog}})],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("**会员总结 = 输赢 + 会员提成 + 钱包 + 积分转移")]),r("p",[e._v("**我的总结 = 玩家总结 + 我的流水提成 + 我的利润提成")])])}],s=(r("c740"),r("ac1f"),r("841c"),r("fb6a"),r("4de4"),r("d3b7"),r("caad"),r("2532"),r("159b"),r("a9e3"),r("b680"),r("c24f")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"会员总结明细",visible:e.DetDialog_,center:"",width:"98%"},on:{close:e.closeEdit}},[r("div",{staticClass:"flex"},[r("div",{staticClass:"item"},[r("el-input",{attrs:{placeholder:"输入关键字搜索"},on:{input:e.searchTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),r("div",{staticClass:"Pdiv"},[r("div",{staticClass:"Cdiv"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList.filter((function(t){return!e.search||t.game.toLowerCase().includes(e.search.toLowerCase())||t.gameNo.toLowerCase().includes(e.search.toLowerCase())||t.type.toLowerCase().includes(e.search.toLowerCase())||t.bet.toLowerCase().includes(e.search.toLowerCase())||t.odds.toLowerCase().includes(e.search.toLowerCase())||t.status.toLowerCase().includes(e.search.toLowerCase())||t.wallet.toLowerCase().includes(e.search.toLowerCase())||t.winLose.toLowerCase().includes(e.search.toLowerCase())||t.time.toLowerCase().includes(e.search.toLowerCase())||t.turnover.toLowerCase().includes(e.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[r("el-table-column",{attrs:{label:"游戏 1",align:"center",prop:""}},[r("el-table-column",{attrs:{label:"游戏",align:"center",prop:"game",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.game?r("span",[e._v(e._s(t.row.game)+" ")]):r("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"期数",align:"center",prop:"gameNo",sortable:""}}),r("el-table-column",{attrs:{label:"类型",align:"center",prop:"type",sortable:""}}),r("el-table-column",{attrs:{label:"下注",align:"center",prop:"bet",sortable:""}}),r("el-table-column",{attrs:{label:"赔率",align:"center",prop:"odds",sortable:""}}),r("el-table-column",{attrs:{label:"结果",align:"center",prop:"status",sortable:""}}),r("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet",sortable:""}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose",sortable:""}}),r("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1)],1),r("div",{staticClass:"footer_div"},[r("div",[e._v("总计")]),e._l(e.countList,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])}))],2)],1)]),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("div",{staticClass:"flex"},[r("div",{staticClass:"item"},[r("el-input",{attrs:{placeholder:"输入关键字搜索"},on:{input:e.searchTable1},model:{value:e.search1,callback:function(t){e.search1=t},expression:"search1"}})],1)]),r("div",{staticClass:"Pdiv"},[r("div",{staticClass:"Cdiv"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList1.filter((function(t){return!e.search1||t.game.toLowerCase().includes(e.search1.toLowerCase())||t.gameNo.toLowerCase().includes(e.search1.toLowerCase())||t.team.toLowerCase().includes(e.search1.toLowerCase())||t.type.toLowerCase().includes(e.search1.toLowerCase())||t.bet.toLowerCase().includes(e.search1.toLowerCase())||t.odds.toLowerCase().includes(e.search1.toLowerCase())||t.status.toLowerCase().includes(e.search1.toLowerCase())||t.turnover.toLowerCase().includes(e.search1.toLowerCase())||t.winLose.toLowerCase().includes(e.search1.toLowerCase())||t.time.toLowerCase().includes(e.search1.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[r("el-table-column",{attrs:{label:"游戏 2",align:"center",prop:""}},[r("el-table-column",{attrs:{label:"游戏",align:"center",prop:"game",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.time?r("span",[e._v(e._s(t.row.game)+" ")]):r("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")])]}}])}),r("el-table-column",{attrs:{label:"场数",align:"center",prop:"gameNo",sortable:""}}),r("el-table-column",{attrs:{label:"类型",align:"center",prop:"type",sortable:""}}),r("el-table-column",{attrs:{label:"球队",align:"center",prop:"team",sortable:""}}),r("el-table-column",{attrs:{label:"下注",align:"center",prop:"bet",sortable:""}}),r("el-table-column",{attrs:{label:"赔率",align:"center",prop:"odds",sortable:""}}),r("el-table-column",{attrs:{label:"结果",align:"center",prop:"status",sortable:""}}),r("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),r("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose",sortable:""}}),r("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1)],1),r("div",{staticClass:"footer_div"},[r("div",[e._v("总计")]),e._l(e.countList1,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])}))],2)],1)]),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage1,"page-sizes":e.pageSizes1,"page-size":e.PageSize1,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount1},on:{"size-change":e.handleSizeChange1,"current-change":e.handleCurrentChange1}})],1),r("div",{staticClass:"flex"},[r("div",{staticClass:"item"},[r("el-input",{attrs:{placeholder:"输入关键字搜索"},on:{input:e.searchTable2},model:{value:e.search2,callback:function(t){e.search2=t},expression:"search2"}})],1)]),r("div",{staticClass:"Pdiv"},[r("div",{staticClass:"Cdiv"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList2.filter((function(t){return!e.search2||t.game.toLowerCase().includes(e.search2.toLowerCase())||t.transferType.toLowerCase().includes(e.search2.toLowerCase())||t.time.toLowerCase().includes(e.search2.toLowerCase())||t.point.toLowerCase().includes(e.search2.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[r("el-table-column",{attrs:{label:"积分转移",align:"center",prop:""}},[r("el-table-column",{attrs:{label:"游戏",align:"center",prop:"game",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.time?r("span",[e._v(e._s(t.row.game)+" ")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"类型",align:"center",prop:"transferType",sortable:""}}),r("el-table-column",{attrs:{label:"积分",align:"center",prop:"point",sortable:""}}),r("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1)],1),r("div",{staticClass:"footer_div"},[r("div",[e._v("总计")]),e._l(e.countList2,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])}))],2)],1)]),r("div",{staticClass:"page"},[r("el-pagination",{attrs:{"current-page":e.currentPage2,"page-sizes":e.pageSizes2,"page-size":e.PageSize2,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount2},on:{"size-change":e.handleSizeChange2,"current-change":e.handleCurrentChange2}})],1)])},n=[],l=r("ade3"),c={name:"Detail",props:{DetDialog:{type:Boolean,default:!1},gnuserId:{type:String},fromDate:{type:String},toDate:{type:String}},data:function(){var e;return e={listLoading:!1,memberList:[],agencypList:[],detailShow:!1,search:""},Object(l["a"])(e,"memberList",[]),Object(l["a"])(e,"temList",[]),Object(l["a"])(e,"currentPage",1),Object(l["a"])(e,"totalCount",1),Object(l["a"])(e,"pageSizes",[5,10,20,30]),Object(l["a"])(e,"PageSize",10),Object(l["a"])(e,"count",{}),Object(l["a"])(e,"search1",""),Object(l["a"])(e,"memberList1",[]),Object(l["a"])(e,"temList1",[]),Object(l["a"])(e,"currentPage1",1),Object(l["a"])(e,"totalCount1",1),Object(l["a"])(e,"pageSizes1",[5,10,20,30]),Object(l["a"])(e,"PageSize1",10),Object(l["a"])(e,"count1",{}),Object(l["a"])(e,"search2",""),Object(l["a"])(e,"memberList2",[]),Object(l["a"])(e,"temList2",[]),Object(l["a"])(e,"currentPage2",1),Object(l["a"])(e,"totalCount2",1),Object(l["a"])(e,"pageSizes2",[5,10,20,30]),Object(l["a"])(e,"PageSize2",10),Object(l["a"])(e,"count2",{}),Object(l["a"])(e,"countList",[]),Object(l["a"])(e,"countList1",[]),Object(l["a"])(e,"countList2",[]),Object(l["a"])(e,"searchList",[]),Object(l["a"])(e,"searchList1",[]),Object(l["a"])(e,"searchList2",[]),e},created:function(){},mounted:function(){},components:{},computed:{DetDialog_:{get:function(){return this.DetDialog},set:function(e){this.$emit("changeDetDialog",e)}}},methods:{closeEdit:function(){this.$emit("changeDetDialog",!1)},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.search?this.searchTable():this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.search?this.searchTable():this.getTemList()},getTemList:function(){this.temList=this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)},searchTable:function(){var e=this;this.search?(this.searchList=this.memberList.filter((function(t){return!e.search||t.game.toLowerCase().includes(e.search.toLowerCase())||t.gameNo.toLowerCase().includes(e.search.toLowerCase())||t.type.toLowerCase().includes(e.search.toLowerCase())||t.bet.toLowerCase().includes(e.search.toLowerCase())||t.odds.toLowerCase().includes(e.search.toLowerCase())||t.status.toLowerCase().includes(e.search.toLowerCase())||t.wallet.toLowerCase().includes(e.search.toLowerCase())||t.winLose.toLowerCase().includes(e.search.toLowerCase())||t.turnover.toLowerCase().includes(e.search.toLowerCase())})),this.currentPage=1,this.countDeatil(this.searchList)):this.countDeatil(this.memberList)},countDeatil:function(e){this.totalCount=e.length;var t="",r="",a=0,o="",s=0,i=0,n=0,l="",c="",u="",h="";e.forEach((function(e){a+=Number(e.bet),s+=Number(e.turnover),i+=Number(e.winLose),n+=Number(e.wallet)})),a=Number(a).toFixed(2),s=Number(s).toFixed(2),i=Number(i).toFixed(2),n=Number(n).toFixed(2),this.count={userCode:t,userName:r,bet:a,turnover:s,winLose:i,wallet:n},this.count.firstColumn="总计",this.temList=e.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.countList=[l,c,a,o,h,n,s,i,u]},handleSizeChange1:function(e){this.PageSize1=e,this.currentPage1=1,this.getTemList1()},handleCurrentChange1:function(e){console.log(e,"val"),this.currentPage1=e,this.getTemList1(),console.log(this.currentPage1,"this.curpage")},getTemList1:function(){this.temList1=this.memberList1.slice((this.currentPage1-1)*this.PageSize1,this.currentPage1*this.PageSize1)},searchTable1:function(){var e=this;this.search1?(this.searchList1=this.memberList1.filter((function(t){return!e.search1||t.game.toLowerCase().includes(search1.toLowerCase())||t.gameNo.toLowerCase().includes(search1.toLowerCase())||t.team.toLowerCase().includes(search1.toLowerCase())||t.type.toLowerCase().includes(search1.toLowerCase())||t.bet.toLowerCase().includes(search1.toLowerCase())||t.odds.toLowerCase().includes(search1.toLowerCase())||t.status.toLowerCase().includes(search1.toLowerCase())||t.turnover.toLowerCase().includes(search1.toLowerCase())||t.winLose.toLowerCase().includes(search1.toLowerCase())||t.time.toLowerCase().includes(search1.toLowerCase())})),this.currentPage=1,this.countDeatil1(this.searchList1)):this.countDeatil1(this.memberList1)},countDeatil1:function(e){this.totalCount1=e.length;var t=0,r="",a=0,o="",s=0,i=0,n="",l="",c="",u="";e.forEach((function(e){t+=Number(e.game),u+=Number(e.status),a+=Number(e.bet),s+=Number(e.turnover),i+=Number(e.winLose)})),t=Number(t).toFixed(2),u=Number(u).toFixed(2),a=Number(a).toFixed(2),s=Number(s).toFixed(2),i=Number(i).toFixed(2),this.count1={game:t,gameNo:n,type:l,odds:r,team:o,status:u,bet:a,turnover:s,winLose:i},this.count1.firstColumn="总计",this.temList1=e.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.countList1=[n,l,o,a,r,u,s,i,c]},handleSizeChange2:function(e){this.PageSize2=e,this.currentPage2=1,this.getTemList1()},handleCurrentChange2:function(e){console.log(e,"val"),this.currentPage2=e,this.getTemList2()},getTemList2:function(){this.temList2=this.memberList2.slice((this.currentPage2-1)*this.PageSize2,this.currentPage2*this.PageSize2)},searchTable2:function(){var e=this;this.search2?(this.searchList2=this.memberList2.filter((function(t){return!e.search2||t.game.toLowerCase().includes(search2.toLowerCase())||t.transferType.toLowerCase().includes(search2.toLowerCase())||t.time.toLowerCase().includes(search2.toLowerCase())||t.point.toLowerCase().includes(search2.toLowerCase())})),this.currentPage=1,this.countDeatil1(this.searchList2)):this.countDeatil1(this.memberList2)},countDeatil2:function(e){this.totalCount2=e.length;var t=0,r="",a=0,o="";e.forEach((function(e){t+=Number(e.game),a+=Number(e.point)})),t=Number(t).toFixed(2),a=Number(a).toFixed(2),this.count2={game:t,transferType:r,point:a},this.temList2=e.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.countList2=[r,a,o]},getList:function(e,t,r){var a=this;this.currentPage=1,this.fromDate&&this.toDate?(this.listLoading=!0,Object(s["q"])({gnuserId:e,fromDate:t,toDate:r}).then((function(e){a.memberList=e.data,a.totalCount=e.data.length;var t="",r="",o=0,s="",i=0,n=0,l=0,c="",u="",h="",d="";a.memberList.forEach((function(e){o+=Number(e.bet),i+=Number(e.turnover),n+=Number(e.winLose),l+=Number(e.wallet)})),o=Number(o).toFixed(2),i=Number(i).toFixed(2),n=Number(n).toFixed(2),l=Number(l).toFixed(2),a.count={userCode:t,userName:r,bet:o,turnover:i,winLose:n,wallet:l},a.count.firstColumn="总计",a.getTemList(),a.countList=[c,u,o,s,d,l,i,n,h],a.listLoading=!1})).catch((function(e){a.listLoading=!1,console.log(e)})),Object(s["m"])({gnuserId:e,fromDate:t,toDate:r}).then((function(e){a.memberList1=e.data,a.totalCount1=e.data.length;var t=0,r="",o=0,s="",i=0,n=0,l="",c="",u="",h="";a.memberList1.forEach((function(e){t+=Number(e.game),h+=Number(e.status),o+=Number(e.bet),i+=Number(e.turnover),n+=Number(e.winLose)})),t=Number(t).toFixed(2),h=Number(h).toFixed(2),o=Number(o).toFixed(2),i=Number(i).toFixed(2),n=Number(n).toFixed(2),a.count1={game:t,gameNo:l,type:c,odds:r,team:s,status:h,bet:o,turnover:i,winLose:n},a.count1.firstColumn="总计",a.getTemList1(),a.countList1=[l,c,s,o,r,h,i,n,u],a.listLoading=!1})).catch((function(e){a.listLoading=!1,console.log(e)})),Object(s["l"])({gnuserId:e,fromDate:t,toDate:r}).then((function(e){a.memberList2=e.data,a.totalCount2=e.data.length;var t=0,r="",o=0,s="";a.memberList2.forEach((function(e){t+=Number(e.game),o+=Number(e.point)})),t=Number(t).toFixed(2),o=Number(o).toFixed(2),a.count2={game:t,transferType:r,point:o},a.count2.firstColumn="总计",a.getTemList2(),a.countList2=[r,o,s],a.listLoading=!1})).catch((function(e){a.listLoading=!1,console.log(e)}))):this.$message({type:"info",message:"Please select time"})}}},u=c,h=(r("beb1"),r("2877")),d=Object(h["a"])(u,i,n,!1,null,"17ac16d6",null),m=d.exports,b={name:"userCredit",components:{Detail:m},data:function(){return{listLoading:!1,search:"",searchFrom:{userInfo:JSON.parse(localStorage.getItem("userInfo")),fromDate:"",toDate:"",showDate:""},DetailFrom:{},dataList:[],DetDialog:!1,gnuserId:"",pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{},countList:[],searchList:[]}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=t,Object(s["i"])().then((function(t){0==t.code&&(e.dataList=t.data,e.searchFrom.showDate=e.dataList[0].showDate,e.searchFrom.fromDate=e.dataList[0].fromDate,e.searchFrom.toDate=e.dataList[0].toDate,e.getList())}))},methods:{selectChange:function(e){var t=this.dataList.findIndex((function(t,r){return t.showDate==e}));this.searchFrom.fromDate=this.dataList[t].fromDate,this.searchFrom.toDate=this.dataList[t].toDate,this.getList()},changeShow:function(e){this.gnuserId=e.gnuserId,this.DetDialog=!0,this.$refs.detail.getList(this.gnuserId,this.searchFrom.fromDate,this.searchFrom.toDate)},changeDetDialog:function(e){this.DetDialog=e},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.search?this.searchTable():this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.search?this.searchTable():this.getTemList()},getTemList:function(){this.temList=this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)},searchTable:function(){var e=this;""==this.search?this.countDeatil(this.pointList):(this.searchList=this.pointList.filter((function(t){return!e.search||t.userName.toLowerCase().includes(e.search.toLowerCase())||t.userRemark.toLowerCase().includes(e.search.toLowerCase())||t.turnover.toLowerCase().includes(e.search.toLowerCase())||t.playerProfitBonus.toLowerCase().includes(e.search.toLowerCase())||t.turnoverBonus.toLowerCase().includes(e.search.toLowerCase())||t.profitBonus.toLowerCase().includes(e.search.toLowerCase())||t.wallet.toLowerCase().includes(e.search.toLowerCase())||t.transfer.toLowerCase().includes(e.search.toLowerCase())||t.winLose.toLowerCase().includes(e.search.toLowerCase())||t.profit.toLowerCase().includes(e.search.toLowerCase())||t.playerProfit.toLowerCase().includes(e.search.toLowerCase())})),this.currentPage=1,this.countDeatil(this.searchList))},countDeatil:function(e){this.totalCount=e.length;var t=0,r="",a=0,o=0,s=0,i=0,n=0,l=0,c=0,u=0,h=0,d="";e.forEach((function(e){t+=Number(e.userCode),a+=Number(e.turnover),o+=Number(e.playerProfitBonus),s+=Number(e.playerProfit),i+=Number(e.turnoverBonus),n+=Number(e.profitBonus),l+=Number(e.wallet),c+=Number(e.transfer),u+=Number(e.winLose),h+=Number(e.profit)})),t=Number(t).toFixed(2),a=Number(a).toFixed(2),o=Number(o).toFixed(2),s=Number(s).toFixed(2),i=Number(i).toFixed(2),n=Number(n).toFixed(2),l=Number(l).toFixed(2),c=Number(c).toFixed(2),u=Number(u).toFixed(2),h=Number(h).toFixed(2),this.temList=e.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.countList=[r,d,a,o,i,n,l,c,u,s,h]},getList:function(){var e=this;if(this.currentPage=1,this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var t=this.searchFrom,r=t.fromDate,a=t.toDate;Object(s["p"])({gnuserId:this.userInfo.gnuserId,fromDate:r,toDate:a}).then((function(t){e.pointList=t.data,e.totalCount=t.data.length;var r=0,a="",o=0,s=0,i=0,n=0,l=0,c=0,u=0,h=0,d=0,m="";e.pointList.forEach((function(e){r+=Number(e.userCode),o+=Number(e.turnover),s+=Number(e.playerProfitBonus),i+=Number(e.playerProfit),n+=Number(e.turnoverBonus),l+=Number(e.profitBonus),c+=Number(e.wallet),u+=Number(e.transfer),h+=Number(e.winLose),d+=Number(e.profit)})),r=Number(r).toFixed(2),o=Number(o).toFixed(2),s=Number(s).toFixed(2),i=Number(i).toFixed(2),n=Number(n).toFixed(2),l=Number(l).toFixed(2),c=Number(c).toFixed(2),u=Number(u).toFixed(2),h=Number(h).toFixed(2),d=Number(d).toFixed(2),e.count={userCode:r,userName:a,turnover:o,playerProfitBonus:s,playerProfit:i,turnoverBonus:n,profitBonus:l,wallet:c,transfer:u,winLose:h,profit:d},e.count.firstColumn="总计",e.getTemList(),e.countList=[a,m,o,s,n,l,c,u,h,i,d],e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))}else this.$message({type:"info",message:"Please select time"})}}},g=b,f=(r("a5bf"),Object(h["a"])(g,a,o,!1,null,"24925948",null));t["default"]=f.exports},b680:function(e,t,r){"use strict";var a=r("23e7"),o=r("a691"),s=r("408a"),i=r("1148"),n=r("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,r){return 0===t?r:t%2===1?u(e,t-1,r*e):u(e*e,t/2,r)},h=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},d=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){l.call({})}));a({target:"Number",proto:!0,forced:d},{toFixed:function(e){var t,r,a,n,l=s(this),d=o(e),m=[0,0,0,0,0,0],b="",g="0",f=function(e,t){var r=-1,a=t;while(++r<6)a+=e*m[r],m[r]=a%1e7,a=c(a/1e7)},p=function(e){var t=6,r=0;while(--t>=0)r+=m[t],m[t]=c(r/e),r=r%e*1e7},L=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==m[e]){var r=String(m[e]);t=""===t?r:t+i.call("0",7-r.length)+r}return t};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(b="-",l=-l),l>1e-21)if(t=h(l*u(2,69,1))-69,r=t<0?l*u(2,-t,1):l/u(2,t,1),r*=4503599627370496,t=52-t,t>0){f(0,r),a=d;while(a>=7)f(1e7,0),a-=7;f(u(10,a,1),0),a=t-1;while(a>=23)p(1<<23),a-=23;p(1<<a),f(1,1),p(2),g=L()}else f(0,r),f(1<<-t,0),g=L()+i.call("0",d);return d>0?(n=g.length,g=b+(n<=d?"0."+i.call("0",d-n)+g:g.slice(0,n-d)+"."+g.slice(n-d))):g=b+g,g}})},beb1:function(e,t,r){"use strict";r("e3c4")},c24f:function(e,t,r){"use strict";r.d(t,"j",(function(){return o})),r.d(t,"g",(function(){return s})),r.d(t,"t",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"s",(function(){return u})),r.d(t,"u",(function(){return h})),r.d(t,"a",(function(){return d})),r.d(t,"r",(function(){return m})),r.d(t,"i",(function(){return b})),r.d(t,"e",(function(){return g})),r.d(t,"p",(function(){return f})),r.d(t,"q",(function(){return p})),r.d(t,"d",(function(){return L})),r.d(t,"h",(function(){return w})),r.d(t,"k",(function(){return C})),r.d(t,"m",(function(){return v})),r.d(t,"l",(function(){return N})),r.d(t,"n",(function(){return x})),r.d(t,"o",(function(){return D}));var a=r("b775");function o(){return Object(a["a"])({url:"/WebC/api/Profile",method:"get"})}function s(){return Object(a["a"])({url:"/WebC/api/Downline",method:"get"})}function i(e){return Object(a["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/WebC/api/DownlineTopupTxn",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/WebC/api/GetCreditLimit",method:"get",params:e})}function u(e){return Object(a["a"])({url:"/WebC/api/TopupPoint",method:"post",data:e})}function h(e){return Object(a["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/WebC/api/AddCredit",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/WebC/api/MinusCredit",method:"post",data:e})}function b(e){return Object(a["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function g(e){return Object(a["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function f(e){return Object(a["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function p(e){return Object(a["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}function L(e){return Object(a["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:e})}function w(e){return Object(a["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function C(e){return Object(a["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:e})}function v(e){return Object(a["a"])({url:"/WebC/api/GetMemberTxnFB",method:"get",params:e})}function N(e){return Object(a["a"])({url:"/WebC/api/GetMemberTransferTxn",method:"get",params:e})}function x(e){return Object(a["a"])({url:"/WebC/api/DrlPointTransferGame",method:"get",params:e})}function D(e){return Object(a["a"])({url:"/WebC/api/DownlineTransferTxn",method:"get",params:e})}},c740:function(e,t,r){"use strict";var a=r("23e7"),o=r("b727").findIndex,s=r("44d2"),i=r("ae40"),n="findIndex",l=!0,c=i(n);n in[]&&Array(1)[n]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!c},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),s(n)},d5ca:function(e,t,r){},e3c4:function(e,t,r){}}]);