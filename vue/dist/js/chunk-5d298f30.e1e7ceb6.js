(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d298f30"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},"2a3a":function(t,e,r){"use strict";r("2fa5")},"2fa5":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new F(n||[]);return a._invoke=O(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",d={};function v(){}function y(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==r&&n.call(x,a)&&(w=x);var L=g.prototype=v.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function O(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return $()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?m:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:$}}function $(){return{value:e,done:!0}}return y.prototype=g,u(L,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},k(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},9820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticStyle:{width:"500px"}},[r("el-form",{attrs:{"label-width":"80px",size:"small"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:9090/file/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.form.avatarUrl?r("img",{staticClass:"avatar",attrs:{src:t.form.avatarUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:"",autocomplete:"off"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"昵称"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"电话"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{label:"地址"}},[r("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确 定")])],1)],1)],1)},o=[],a=r("1da1"),i=(r("e9c4"),r("96cf"),{name:"Person",data:function(){return{form:{},user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{}}},created:function(){var t=this;this.getUser().then((function(e){console.log(e),t.form=e}))},methods:{getUser:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request.get("/user/username/"+t.user.username);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))()},save:function(){var t=this;this.request.post("/user",this.form).then((function(e){"200"===e.code?(t.$message.success("保存成功"),t.$emit("refreshUser"),t.getUser().then((function(t){t.token=JSON.parse(localStorage.getItem("user")).token,localStorage.setItem("user",JSON.stringify(t))}))):t.$message.error("保存失败")}))},handleAvatarSuccess:function(t){this.form.avatarUrl=t}}}),c=i,u=(r("2a3a"),r("2877")),s=Object(u["a"])(c,n,o,!1,null,null,null);e["default"]=s.exports},e9c4:function(t,e,r){var n=r("23e7"),o=r("da84"),a=r("d066"),i=r("2ba4"),c=r("e330"),u=r("d039"),s=o.Array,l=a("JSON","stringify"),f=c(/./.exec),h=c("".charAt),p=c("".charCodeAt),m=c("".replace),d=c(1..toString),v=/[\uD800-\uDFFF]/g,y=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,w=function(t,e,r){var n=h(r,e-1),o=h(r,e+1);return f(y,t)&&!f(g,o)||f(g,t)&&!f(y,n)?"\\u"+d(p(t,0),16):t},b=u((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&n({target:"JSON",stat:!0,forced:b},{stringify:function(t,e,r){for(var n=0,o=arguments.length,a=s(o);n<o;n++)a[n]=arguments[n];var c=i(l,null,a);return"string"==typeof c?m(c,v,w):c}})}}]);
//# sourceMappingURL=chunk-5d298f30.e1e7ceb6.js.map