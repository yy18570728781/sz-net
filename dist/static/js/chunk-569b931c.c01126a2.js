(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-569b931c"],{"0b89":function(e,o,s){"use strict";s("2064")},2064:function(e,o,s){},9487:function(e,o,s){"use strict";s("fac1")},"9ed6":function(e,o,s){"use strict";s.r(o);var t=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("Login Form")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.userCode,callback:function(o){e.$set(e.loginForm,"userCode",o)},expression:"loginForm.userCode"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleLogin(o)}},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(o){return o.preventDefault(),e.handleLogin(o)}}},[e._v("Login")])],1)],1)},n=[],r=s("61f7"),a={name:"Login",data:function(){var e=function(e,o,s){Object(r["b"])(o)?s():s(new Error("Please enter the correct user name"))},o=function(e,o,s){o.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{loginForm:{userCode:"",password:"",prefix:"+60",dassd:"+60"},loginRules:{userCode:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:o}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(o){if(!o)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(o){console.log(o),e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(o){console.log(o),e.loading=!1}))}))}}},i=a,l=(s("0b89"),s("9487"),s("2877")),c=Object(l["a"])(i,t,n,!1,null,"6ac95a53",null);o["default"]=c.exports},fac1:function(e,o,s){}}]);