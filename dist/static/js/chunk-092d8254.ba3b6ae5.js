(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-092d8254"],{7931:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"flex-box"},[r("div",{staticClass:"item"},[r("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"filterTable",attrs:{data:e.list.filter((function(t){return!e.search||t.gnuserId.toLowerCase().includes(e.search.toLowerCase())||t.userName.toLowerCase().includes(e.search.toLowerCase())||t.inviteCode.toLowerCase().includes(e.search.toLowerCase())||t.creditLimit.toLowerCase().includes(e.search.toLowerCase())||t.turnoverRebate.toLowerCase().includes(e.search.toLowerCase())||t.userType.toLowerCase().includes(e.search.toLowerCase())})),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"gnuserId",order:"descending"}}},[r("el-table-column",{attrs:{label:"会员 ID",align:"center",sortable:"",prop:"userCode","sort-by":"userCode"}}),r("el-table-column",{attrs:{label:"会员名",align:"center",sortable:"",prop:"userName"}}),r("el-table-column",{attrs:{label:"备注名",align:"center",sortable:"",prop:"userRemark"}}),r("el-table-column",{attrs:{"class-name":"status-col",label:"信用额度",align:"center",sortable:"",prop:"creditLimit","sort-by":"creditLimit"}}),r("el-table-column",{attrs:{"class-name":"status-col",label:"流水提成%",align:"center",sortable:"",prop:"turnoverRebate","sort-by":"turnoverRebate"}}),r("el-table-column",{attrs:{"class-name":"status-col",label:"球网流水提成%",align:"center",sortable:"",prop:"turnoverRebateFb","sort-by":"turnoverRebateFb"}}),r("el-table-column",{attrs:{"class-name":"status-col",label:"利润提成%",align:"center",sortable:"",prop:"profitRebate","sort-by":"profitRebate"}}),r("el-table-column",{attrs:{"class-name":"status-col",label:"类型",align:"center",sortable:"",prop:"userType","sort-by":"userType"}}),r("el-table-column",{attrs:{"class-name":"status-col",label:"代理网登录",align:"center",sortable:"",prop:"loginInd","sort-by":"loginInd"}}),r("el-table-column",{attrs:{align:"center",label:"操作","min-width":"200px",fixed:"right",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",disabled:"N"!==t.row.robotInd},on:{click:function(r){return e.openEdit(t.row.gnuserId)}}}),r("el-button",{attrs:{type:"primary",icon:"el-icon-top",circle:"",disabled:"N"!==t.row.cashInd},on:{click:function(r){return e.openAddCredit(t.row.gnuserId)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-bottom",circle:"",disabled:"N"!==t.row.cashInd},on:{click:function(r){return e.openMinusCredit(t.row.gnuserId)}}})]}}])})],1),r("el-dialog",{attrs:{title:"修改 Edit",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeEdit}},[r("el-form",{attrs:{model:e.currentMember}},[r("el-form-item",{attrs:{label:"备注名","label-width":e.formLabelWidth}},[r("el-input",{attrs:{maxlength:"45"},model:{value:e.currentMember.userRemark,callback:function(t){e.$set(e.currentMember,"userRemark",t)},expression:"currentMember.userRemark"}})],1),r("el-form-item",{attrs:{label:"流水提成%","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentMember.turnoverRebate,callback:function(t){e.$set(e.currentMember,"turnoverRebate",t)},expression:"currentMember.turnoverRebate"}})],1),r("el-form-item",{attrs:{label:"利润提成%","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentMember.profitRebate,callback:function(t){e.$set(e.currentMember,"profitRebate",t)},expression:"currentMember.profitRebate"}})],1),r("el-form-item",{attrs:{label:"球网流水提成%","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentMember.turnoverRebateFb,callback:function(t){e.$set(e.currentMember,"turnoverRebateFb",t)},expression:"currentMember.turnoverRebateFb"}})],1),r("el-form-item",{attrs:{label:"代理网登录","label-width":e.formLabelWidth}},[[r("el-radio",{attrs:{label:"Yes"},model:{value:e.currentMember.loginInd,callback:function(t){e.$set(e.currentMember,"loginInd",t)},expression:"currentMember.loginInd"}},[e._v("Yes")]),r("el-radio",{attrs:{label:"No"},model:{value:e.currentMember.loginInd,callback:function(t){e.$set(e.currentMember,"loginInd",t)},expression:"currentMember.loginInd"}},[e._v("No")])]],2)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeEdit}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.butLoading,expression:"butLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.editMember}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"加信用额度",visible:e.dialogFormVisibleAdd},on:{"update:visible":function(t){e.dialogFormVisibleAdd=t},close:e.closeAddCredit}},[r("el-form",{attrs:{model:e.currentMember}},[r("el-form-item",{attrs:{label:"加信用额度","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.credit,callback:function(t){e.credit=t},expression:"credit"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeAddCredit}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.butLoading,expression:"butLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.addCredit}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"减信用额度",visible:e.dialogFormVisibleMinus},on:{"update:visible":function(t){e.dialogFormVisibleMinus=t},close:e.closeMinusCredit}},[r("el-form",{attrs:{model:e.currentMember}},[r("el-form-item",{attrs:{label:"减信用额度","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.credit,callback:function(t){e.credit=t},expression:"credit"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeMinusCredit}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.butLoading,expression:"butLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.minusCredit}},[e._v("确 定")])],1)],1)],1)},o=[],a=(r("4de4"),r("d3b7"),r("ac1f"),r("00b4"),r("b775"));function s(){return Object(a["a"])({url:"/WebC/api/Senior",method:"get"})}function l(e){return Object(a["a"])({url:"/WebC/api/UpdateSeniorRebate",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/WebC/api/AddSeniorCredit",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/WebC/api/MinusSeniorCredit",method:"post",data:e})}var d={name:"seniorMember",filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:[],credit:"",currentMember:{},listLoading:!1,butLoading:!1,dialogFormVisible:!1,dialogFormVisibleAdd:!1,dialogFormVisibleMinus:!1,formLabelWidth:"120px",search:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,s().then((function(t){console.log(t),e.list=t.data,e.listLoading=!1})).catch((function(t){e.listLoading=!1,console.log(t)}))},memberByID:function(e){var t;this.currentMember=null===(t=this.list.filter((function(t){return t.gnuserId===e})))||void 0===t?void 0:t[0]},openEdit:function(e){this.dialogFormVisible=!0,this.memberByID(e)},editMember:function(){var e=this;if(this.butLoading=!0,/^(0\.\d{0,1}[0-9]|\+?[0-9][0-9]{0,2})(\.\d{1,2})?$/.test(this.currentMember.turnoverRebate)&&/^(0\.\d{0,1}[0-9]|\+?[0-9][0-9]{0,2})(\.\d{1,2})?$/.test(this.currentMember.profitRebate)&&/^(0\.\d{0,1}[0-9]|\+?[0-9][0-9]{0,2})(\.\d{1,2})?$/.test(this.currentMember.turnoverRebateFb)){var t=this.currentMember,r=t.userRemark,i=t.turnoverRebateFb,o=t.loginInd,a=t.gnuserId,s=t.turnoverRebate,n=t.profitRebate;l({userRemark:r,turnoverRebateFb:i,loginInd:o,gnuserId:a,turnoverRebate:s,profitRebate:n}).then((function(t){e.butLoading=!1,console.log(t),"Success"==t.data.status&&""==t.data.remark?(e.$message({type:"success",message:"编辑成功"}),e.closeEdit()):(e.$message({type:"error",message:t.data.remark||"编辑失败"}),e.butLoading=!1)})).catch((function(e){console.log(e)}))}else this.butLoading=!1,this.$message({type:"info",message:"流水提成、利润提成和球网利润提成皆为最多7位数整数，限2位小数"})},closeEdit:function(){this.dialogFormVisible=!1,this.fetchData()},openAddCredit:function(e){this.dialogFormVisibleAdd=!0,this.memberByID(e)},addCredit:function(){var e=this;this.butLoading=!0;var t=this.currentMember.gnuserId;/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,3})(\.\d{1,2})?$/.test(this.credit)?n({gnuserId:t,credit:this.credit}).then((function(t){e.butLoading=!1,"Success"==t.data.status&&""==t.data.remark?(e.$message({type:"success",message:"增加信用成功"}),e.closeAddCredit()):e.$message({type:"info",message:t.data.remark||"增加信用失败"})})).catch((function(t){console.log(t),e.butLoading=!1})):(this.butLoading=!1,this.$message({type:"info",message:"只能填写最多7位数整数，限2位小数"}))},closeAddCredit:function(){this.dialogFormVisibleAdd=!1,this.credit="",this.fetchData()},openMinusCredit:function(e){this.dialogFormVisibleMinus=!0,this.memberByID(e)},minusCredit:function(){var e=this;this.butLoading=!0;var t=this.currentMember.gnuserId;/^(0\.\d{0,1}[1-9]|\+?[1-9][0-9]{0,3})(\.\d{1,2})?$/.test(this.credit)?c({gnuserId:t,credit:this.credit}).then((function(t){e.butLoading=!1,"Success"==t.data.status&&""==t.data.remark?(e.$message({type:"success",message:"降低信用成功"}),e.closeMinusCredit()):e.$message({type:"info",message:t.data.remark||"降低信用失败"}),e.butLoading=!1,e.fetchData()})).catch((function(t){e.butLoading=!1,console.log(t)})):(this.butLoading=!1,this.$message({type:"info",message:"只能填写最多7位数整数，限2位小数"}))},closeMinusCredit:function(){this.dialogFormVisibleMinus=!1,this.credit=""}}},u=d,b=(r("e6c8"),r("2877")),m=Object(b["a"])(u,i,o,!1,null,"6b18c94a",null);t["default"]=m.exports},e569:function(e,t,r){},e6c8:function(e,t,r){"use strict";r("e569")}}]);