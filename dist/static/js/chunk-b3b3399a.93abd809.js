(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3b3399a"],{1148:function(e,t,a){"use strict";var r=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",o=r(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(a+=t);return a}},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"638b":function(e,t,a){},"6abc":function(e,t,a){"use strict";a("b888")},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),o=a("94ca"),i=a("6eeb"),s=a("5135"),l=a("c6b6"),c=a("7156"),u=a("c04e"),g=a("d039"),b=a("7c73"),d=a("241c").f,m=a("06cf").f,h=a("9bf2").f,f=a("58a8").trim,p="Number",v=n[p],L=v.prototype,C=l(b(L))==p,w=function(e){var t,a,r,n,o,i,s,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=f(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(o=c.slice(2),i=o.length,s=0;s<i;s++)if(l=o.charCodeAt(s),l<48||l>n)return NaN;return parseInt(o,r)}return+c};if(o(p,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var N,D=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof D&&(C?g((function(){L.valueOf.call(a)})):l(a)!=p)?c(new v(w(t)),a,D):w(t)},x=r?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;x.length>P;P++)s(v,N=x[P])&&!s(D,N)&&h(D,N,m(v,N));D.prototype=L,L.constructor=D,i(n,p,D)}},b0c7:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userCredit app-container"},[a("div",{staticClass:"flex-box"},[a("div",{staticClass:"item"},[a("el-select",{staticClass:"select",attrs:{placeholder:"Please select time"},on:{change:e.selectChange},model:{value:e.searchFrom.showDate,callback:function(t){e.$set(e.searchFrom,"showDate",t)},expression:"searchFrom.showDate"}},e._l(e.dataList,(function(e){return a("el-option",{key:e.showDate,attrs:{label:e.showDate,value:e.showDate}})})),1)],1),a("div",{staticClass:"item"},[a("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),a("div",{staticClass:"Pdiv"},[a("div",{staticClass:"Cdiv"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList.filter((function(t){return!e.search||t.userCode.toLowerCase().includes(e.search.toLowerCase())||t.userName.toLowerCase().includes(e.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[a("el-table-column",{attrs:{label:"操作",align:"center",prop:"",sortable:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.gnuserId?a("el-button",{attrs:{type:"primary",round:"",size:"small"},on:{click:function(a){return e.changeShow(t.row)}}},[e._v("明细")]):a("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")])]}}])}),a("el-table-column",{attrs:{label:"会员名",align:"center",prop:"userName",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"备注名",align:"center",prop:"userRemark",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"会员提成",align:"center",prop:"playerProfitBonus",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"我的流水提成",align:"center",prop:"turnoverBonus","sort-by":"turnoverBonus",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"我的利润提成",align:"center",prop:"profitBonus","sort-by":"profitBonus",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet","sort-by":"wallet",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"积分转移",align:"center",prop:"transfer","sort-by":"transfer",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"会员总结",align:"center",prop:"playerProfit",sortable:"","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"我的总结",align:"center",prop:"profit",sortable:"","show-overflow-tooltip":""}})],1),a("div",{staticClass:"footer_div"},[a("div",[e._v("总计")]),e._l(e.countList,(function(t,r){return a("div",{key:r},[e._v(e._s(t))])}))],2)],1)]),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._m(0),a("Detail",{ref:"detail",attrs:{DetDialog:e.DetDialog,fromDate:e.searchFrom.fromDate,toDate:e.searchFrom.toDate,DetailFrom:e.DetailFrom},on:{changeDetDialog:e.changeDetDialog}})],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("**会员总结 = 输赢 + 会员提成 + 钱包 + 积分转移")]),a("p",[e._v("**我的总结 = 玩家总结 + 我的流水提成 + 我的利润提成")])])}],o=(a("c740"),a("fb6a"),a("d3b7"),a("159b"),a("a9e3"),a("b680"),a("c24f")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"会员总结明细",visible:e.DetDialog_,center:"",width:"98%"},on:{close:e.closeEdit}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"item"},[a("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),a("div",{staticClass:"Pdiv"},[a("div",{staticClass:"Cdiv"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList.filter((function(t){return!e.search||t.userCode.toLowerCase().includes(e.search.toLowerCase())||t.userName.toLowerCase().includes(e.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[a("el-table-column",{attrs:{label:"游戏 1",align:"center",prop:""}},[a("el-table-column",{attrs:{label:"游戏",align:"center",prop:"game",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.game?a("span",[e._v(e._s(t.row.game)+" ")]):a("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")])]}}])}),a("el-table-column",{attrs:{label:"期数",align:"center",prop:"gameNo",sortable:""}}),a("el-table-column",{attrs:{label:"类型",align:"center",prop:"type",sortable:""}}),a("el-table-column",{attrs:{label:"下注",align:"center",prop:"bet",sortable:""}}),a("el-table-column",{attrs:{label:"赔率",align:"center",prop:"odds",sortable:""}}),a("el-table-column",{attrs:{label:"结果",align:"center",prop:"status",sortable:""}}),a("el-table-column",{attrs:{label:"钱包",align:"center",prop:"wallet",sortable:""}}),a("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),a("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose",sortable:""}}),a("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1)],1),a("div",{staticClass:"footer_div"},[a("div",[e._v("总计")]),e._l(e.countList,(function(t,r){return a("div",{key:r},[e._v(e._s(t))])}))],2)],1)]),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("div",{staticClass:"flex"},[a("div",{staticClass:"item"},[a("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:e.search1,callback:function(t){e.search1=t},expression:"search1"}})],1)]),a("div",{staticClass:"Pdiv"},[a("div",{staticClass:"Cdiv"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList1.filter((function(t){return!e.search1||t.game.toLowerCase().includes(e.search1.toLowerCase())||t.team.toLowerCase().includes(e.search1.toLowerCase())||t.type.toLowerCase().includes(e.search1.toLowerCase())||t.gameNo.toLowerCase().includes(e.search1.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[a("el-table-column",{attrs:{label:"游戏 2",align:"center",prop:""}},[a("el-table-column",{attrs:{label:"游戏",align:"center",prop:"game",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.time?a("span",[e._v(e._s(t.row.game)+" ")]):a("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")])]}}])}),a("el-table-column",{attrs:{label:"场数",align:"center",prop:"gameNo",sortable:""}}),a("el-table-column",{attrs:{label:"类型",align:"center",prop:"type",sortable:""}}),a("el-table-column",{attrs:{label:"球队",align:"center",prop:"team",sortable:""}}),a("el-table-column",{attrs:{label:"下注",align:"center",prop:"bet",sortable:""}}),a("el-table-column",{attrs:{label:"赔率",align:"center",prop:"odds",sortable:""}}),a("el-table-column",{attrs:{label:"结果",align:"center",prop:"status",sortable:""}}),a("el-table-column",{attrs:{label:"流水",align:"center",prop:"turnover","sort-by":"turnover",sortable:""}}),a("el-table-column",{attrs:{label:"输赢",align:"center",prop:"winLose",sortable:""}}),a("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1)],1),a("div",{staticClass:"footer_div"},[a("div",[e._v("总计")]),e._l(e.countList1,(function(t,r){return a("div",{key:r},[e._v(e._s(t))])}))],2)],1)]),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.currentPage1,"page-sizes":e.pageSizes1,"page-size":e.PageSize1,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount1},on:{"size-change":e.handleSizeChange1,"current-change":e.handleCurrentChange1}})],1),a("div",{staticClass:"flex"},[a("div",{staticClass:"item"},[a("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:e.search2,callback:function(t){e.search2=t},expression:"search2"}})],1)]),a("div",{staticClass:"Pdiv"},[a("div",{staticClass:"Cdiv"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.temList2.filter((function(t){return!e.search2||t.game.toLowerCase().includes(e.search2.toLowerCase())||t.transferType.toLowerCase().includes(e.search2.toLowerCase())||t.point.toLowerCase().includes(e.search2.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{}}},[a("el-table-column",{attrs:{label:"积分转移",align:"center",prop:""}},[a("el-table-column",{attrs:{label:"游戏",align:"center",prop:"game",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.time?a("span",[e._v(e._s(t.row.game)+" ")]):a("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("总计")])]}}])}),a("el-table-column",{attrs:{label:"类型",align:"center",prop:"transferType",sortable:""}}),a("el-table-column",{attrs:{label:"积分",align:"center",prop:"point",sortable:""}}),a("el-table-column",{attrs:{label:"时间",align:"center",prop:"time","sort-by":"time",sortable:""}})],1)],1),a("div",{staticClass:"footer_div"},[a("div",[e._v("总计")]),e._l(e.countList2,(function(t,r){return a("div",{key:r},[e._v(e._s(t))])}))],2)],1)]),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.currentPage2,"page-sizes":e.pageSizes2,"page-size":e.PageSize2,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount2},on:{"size-change":e.handleSizeChange2,"current-change":e.handleCurrentChange2}})],1)])},s=[],l=a("ade3"),c={name:"Detail",props:{DetDialog:{type:Boolean,default:!1},gnuserId:{type:String},fromDate:{type:String},toDate:{type:String}},data:function(){var e;return e={listLoading:!1,memberList:[],agencypList:[],detailShow:!1,search:""},Object(l["a"])(e,"memberList",[]),Object(l["a"])(e,"temList",[]),Object(l["a"])(e,"currentPage",1),Object(l["a"])(e,"totalCount",1),Object(l["a"])(e,"pageSizes",[5,10,20,30]),Object(l["a"])(e,"PageSize",10),Object(l["a"])(e,"count",{}),Object(l["a"])(e,"search1",""),Object(l["a"])(e,"memberList1",[]),Object(l["a"])(e,"temList1",[]),Object(l["a"])(e,"currentPage1",1),Object(l["a"])(e,"totalCount1",1),Object(l["a"])(e,"pageSizes1",[5,10,20,30]),Object(l["a"])(e,"PageSize1",10),Object(l["a"])(e,"count1",{}),Object(l["a"])(e,"search2",""),Object(l["a"])(e,"memberList2",[]),Object(l["a"])(e,"temList2",[]),Object(l["a"])(e,"currentPage2",1),Object(l["a"])(e,"totalCount2",1),Object(l["a"])(e,"pageSizes2",[5,10,20,30]),Object(l["a"])(e,"PageSize2",10),Object(l["a"])(e,"count2",{}),Object(l["a"])(e,"countList",[]),Object(l["a"])(e,"countList1",[]),Object(l["a"])(e,"countList2",[]),e},created:function(){},mounted:function(){},components:{},computed:{DetDialog_:{get:function(){return this.DetDialog},set:function(e){this.$emit("changeDetDialog",e)}}},methods:{closeEdit:function(){this.$emit("changeDetDialog",!1)},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList(),console.log(this.currentPage,"this.curpage")},getTemList:function(){this.temList=this.memberList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize)},handleSizeChange1:function(e){this.PageSize1=e,this.currentPage1=1,this.getTemList1()},handleCurrentChange1:function(e){console.log(e,"val"),this.currentPage1=e,this.getTemList1(),console.log(this.currentPage1,"this.curpage")},getTemList1:function(){this.temList1=this.memberList1.slice((this.currentPage1-1)*this.PageSize1,this.currentPage1*this.PageSize1)},handleSizeChange2:function(e){this.PageSize2=e,this.currentPage2=1,this.getTemList1()},handleCurrentChange2:function(e){console.log(e,"val"),this.currentPage2=e,this.getTemList2()},getTemList2:function(){this.temList2=this.memberList2.slice((this.currentPage2-1)*this.PageSize2,this.currentPage2*this.PageSize2)},getList:function(e,t,a){var r=this;this.fromDate&&this.toDate?(this.listLoading=!0,Object(o["o"])({gnuserId:e,fromDate:t,toDate:a}).then((function(e){r.memberList=e.data,r.totalCount=e.data.length;var t="",a="",n=0,o="",i=0,s=0,l=0,c="",u="",g="",b="";r.memberList.forEach((function(e){n+=Number(e.bet),i+=Number(e.turnover),s+=Number(e.winLose),l+=Number(e.wallet)})),n=Number(n).toFixed(2),i=Number(i).toFixed(2),s=Number(s).toFixed(2),l=Number(l).toFixed(2),r.count={userCode:t,userName:a,bet:n,turnover:i,winLose:s,wallet:l},r.count.firstColumn="总计",r.getTemList(),r.countList=[c,u,n,o,b,l,i,s,g],r.listLoading=!1})).catch((function(e){r.listLoading=!1,console.log(e)})),Object(o["m"])({gnuserId:e,fromDate:t,toDate:a}).then((function(e){r.memberList1=e.data,r.totalCount1=e.data.length;var t=0,a="",n=0,o="",i=0,s=0,l="",c="",u="",g="";r.memberList1.forEach((function(e){t+=Number(e.game),g+=Number(e.status),n+=Number(e.bet),i+=Number(e.turnover),s+=Number(e.winLose)})),t=Number(t).toFixed(2),g=Number(g).toFixed(2),n=Number(n).toFixed(2),i=Number(i).toFixed(2),s=Number(s).toFixed(2),r.count1={game:t,gameNo:l,type:c,odds:a,team:o,status:g,bet:n,turnover:i,winLose:s},r.count1.firstColumn="总计",r.getTemList1(),r.countList1=[l,c,o,n,a,g,i,s,u],r.listLoading=!1})).catch((function(e){r.listLoading=!1,console.log(e)})),Object(o["l"])({gnuserId:e,fromDate:t,toDate:a}).then((function(e){r.memberList2=e.data,r.totalCount2=e.data.length;var t=0,a="",n=0,o="";r.memberList2.forEach((function(e){t+=Number(e.game),n+=Number(e.point)})),t=Number(t).toFixed(2),n=Number(n).toFixed(2),r.count2={game:t,transferType:a,point:n},r.count2.firstColumn="总计",r.getTemList2(),r.countList2=[a,n,o],r.listLoading=!1})).catch((function(e){r.listLoading=!1,console.log(e)}))):this.$message({type:"info",message:"Please select time"})}}},u=c,g=(a("6abc"),a("2877")),b=Object(g["a"])(u,i,s,!1,null,"1704dde3",null),d=b.exports,m={name:"userCredit",components:{Detail:d},data:function(){return{listLoading:!1,search:"",searchFrom:{userInfo:JSON.parse(localStorage.getItem("userInfo")),fromDate:"",toDate:"",showDate:""},DetailFrom:{},dataList:[],DetDialog:!1,gnuserId:"",pointList:[],temList:[],currentPage:1,totalCount:1,pageSizes:[5,10,20,30],PageSize:10,count:{},countList:[]}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=t,Object(o["i"])().then((function(t){0==t.code&&(e.dataList=t.data,e.searchFrom.showDate=e.dataList[0].showDate,e.searchFrom.fromDate=e.dataList[0].fromDate,e.searchFrom.toDate=e.dataList[0].toDate,e.getList())}))},methods:{selectChange:function(e){var t=this.dataList.findIndex((function(t,a){return t.showDate==e}));this.searchFrom.fromDate=this.dataList[t].fromDate,this.searchFrom.toDate=this.dataList[t].toDate,this.getList()},changeShow:function(e){this.gnuserId=e.gnuserId,this.DetDialog=!0,this.$refs.detail.getList(this.gnuserId,this.searchFrom.fromDate,this.searchFrom.toDate)},changeDetDialog:function(e){this.DetDialog=e},handleSizeChange:function(e){this.PageSize=e,this.currentPage=1,this.getTemList()},handleCurrentChange:function(e){console.log(e,"val"),this.currentPage=e,this.getTemList()},getTemList:function(){this.temList=this.pointList.slice((this.currentPage-1)*this.PageSize,this.currentPage*this.PageSize),this.$nextTick((function(){}))},getList:function(){var e=this;if(this.searchFrom.fromDate&&this.searchFrom.toDate){this.listLoading=!0;var t=this.searchFrom,a=t.fromDate,r=t.toDate;Object(o["n"])({gnuserId:this.userInfo.gnuserId,fromDate:a,toDate:r}).then((function(t){e.pointList=t.data,e.totalCount=t.data.length;var a=0,r=0,n=0,o=0,i=0,s=0,l=0,c=0,u=0,g=0,b=0,d="";e.pointList.forEach((function(e){a+=Number(e.userCode),r+=Number(e.userName),n+=Number(e.turnover),o+=Number(e.playerProfitBonus),i+=Number(e.playerProfit),s+=Number(e.turnoverBonus),l+=Number(e.profitBonus),c+=Number(e.wallet),u+=Number(e.transfer),g+=Number(e.winLose),b+=Number(e.profit)})),a=Number(a).toFixed(2),r=Number(r).toFixed(2),n=Number(n).toFixed(2),o=Number(o).toFixed(2),i=Number(i).toFixed(2),s=Number(s).toFixed(2),l=Number(l).toFixed(2),c=Number(c).toFixed(2),u=Number(u).toFixed(2),g=Number(g).toFixed(2),b=Number(b).toFixed(2),e.count={userCode:a,userName:r,turnover:n,playerProfitBonus:o,playerProfit:i,turnoverBonus:s,profitBonus:l,wallet:c,transfer:u,winLose:g,profit:b},e.count.firstColumn="总计",e.getTemList(),e.countList=[r,d,n,o,s,l,c,u,g,i,b],e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))}else this.$message({type:"info",message:"Please select time"})}}},h=m,f=(a("f93b"),Object(g["a"])(h,r,n,!1,null,"d2f05e84",null));t["default"]=f.exports},b680:function(e,t,a){"use strict";var r=a("23e7"),n=a("a691"),o=a("408a"),i=a("1148"),s=a("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,a){return 0===t?a:t%2===1?u(e,t-1,a*e):u(e*e,t/2,a)},g=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},b=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));r({target:"Number",proto:!0,forced:b},{toFixed:function(e){var t,a,r,s,l=o(this),b=n(e),d=[0,0,0,0,0,0],m="",h="0",f=function(e,t){var a=-1,r=t;while(++a<6)r+=e*d[a],d[a]=r%1e7,r=c(r/1e7)},p=function(e){var t=6,a=0;while(--t>=0)a+=d[t],d[t]=c(a/e),a=a%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==d[e]){var a=String(d[e]);t=""===t?a:t+i.call("0",7-a.length)+a}return t};if(b<0||b>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(t=g(l*u(2,69,1))-69,a=t<0?l*u(2,-t,1):l/u(2,t,1),a*=4503599627370496,t=52-t,t>0){f(0,a),r=b;while(r>=7)f(1e7,0),r-=7;f(u(10,r,1),0),r=t-1;while(r>=23)p(1<<23),r-=23;p(1<<r),f(1,1),p(2),h=v()}else f(0,a),f(1<<-t,0),h=v()+i.call("0",b);return b>0?(s=h.length,h=m+(s<=b?"0."+i.call("0",b-s)+h:h.slice(0,s-b)+"."+h.slice(s-b))):h=m+h,h}})},b888:function(e,t,a){},c24f:function(e,t,a){"use strict";a.d(t,"j",(function(){return n})),a.d(t,"g",(function(){return o})),a.d(t,"r",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"q",(function(){return u})),a.d(t,"s",(function(){return g})),a.d(t,"a",(function(){return b})),a.d(t,"p",(function(){return d})),a.d(t,"i",(function(){return m})),a.d(t,"e",(function(){return h})),a.d(t,"n",(function(){return f})),a.d(t,"o",(function(){return p})),a.d(t,"d",(function(){return v})),a.d(t,"h",(function(){return L})),a.d(t,"k",(function(){return C})),a.d(t,"m",(function(){return w})),a.d(t,"l",(function(){return N}));var r=a("b775");function n(){return Object(r["a"])({url:"/WebC/api/Profile",method:"get"})}function o(){return Object(r["a"])({url:"/WebC/api/Downline",method:"get"})}function i(e){return Object(r["a"])({url:"/WebC/api/UpdateRebate",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/WebC/api/TopupTxn",method:"get",params:e})}function l(e){return Object(r["a"])({url:"/WebC/api/DownlineCreditTxn",method:"get",params:e})}function c(e){return Object(r["a"])({url:"/WebC/api/GetCreditLimit",method:"get",params:e})}function u(e){return Object(r["a"])({url:"/WebC/api/TopupPoint",method:"post",data:e})}function g(e){return Object(r["a"])({url:"/WebC/api/WithdrawPoint",method:"post",data:e})}function b(e){return Object(r["a"])({url:"/WebC/api/AddCredit",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/WebC/api/MinusCredit",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/WebC/api/DrlWeek",method:"get",params:e})}function h(e){return Object(r["a"])({url:"/WebC/api/GetAgentSum",method:"get",params:e})}function f(e){return Object(r["a"])({url:"/WebC/api/GetAgentPlayerSum",method:"get",params:e})}function p(e){return Object(r["a"])({url:"/WebC/api/GetMemberTxn",method:"get",params:e})}function v(e){return Object(r["a"])({url:"/WebC/api/GetAgentProfit",method:"get",params:e})}function L(e){return Object(r["a"])({url:"/WebC/api/DrlMemberType",method:"get",params:e})}function C(e){return Object(r["a"])({url:"/WebC/api/GetAdminPlayerSum",method:"get",params:e})}function w(e){return Object(r["a"])({url:"/WebC/api/GetMemberTxnFB",method:"get",params:e})}function N(e){return Object(r["a"])({url:"/WebC/api/GetMemberTransferTxn",method:"get",params:e})}},c740:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").findIndex,o=a("44d2"),i=a("ae40"),s="findIndex",l=!0,c=i(s);s in[]&&Array(1)[s]((function(){l=!1})),r({target:"Array",proto:!0,forced:l||!c},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},f93b:function(e,t,a){"use strict";a("638b")}}]);