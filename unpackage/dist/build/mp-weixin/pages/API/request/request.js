(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/request/request"],{"0cd2":function(t,e,n){"use strict";n.r(e);var r=n("cf8c"),o=n("6af4");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var u,s=n("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=c.exports},"52ea":function(t,e,n){"use strict";(function(t){n("78ca");r(n("66fd"));var e=r(n("0cd2"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6af4":function(t,e,n){"use strict";n.r(e);var r=n("f408"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},cf8c:function(t,e,n){"use strict";var r={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"b43e"))}},o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},f408:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return l(t)||i(t,e)||s(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done);r=!0)if(n.push(u.value),e&&n.length===e)break}catch(c){o=!0,a=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw a}}return n}}function l(t){if(Array.isArray(t))return t}function f(t,e,n,r,o,a,u){try{var s=t[a](u),c=s.value}catch(i){return void n(i)}s.done?e(c):Promise.resolve(c).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){f(a,r,o,u,s,"next",t)}function s(t){f(a,r,o,u,s,"throw",t)}u(void 0)}))}}var h="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app",p=2e3,v={data:function(){return{title:"request",loading:!1,res:""}},methods:{sendRequest:function(t){switch(this.loading=!0,t){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_request:function(){var e=this;t.request({url:h,dataType:"text",data:{noncestr:Date.now()},success:function(n){console.log("request success",n),t.showToast({title:"请求成功",icon:"success",mask:!0,duration:p}),e.res="请求结果 : "+JSON.stringify(n)},fail:function(e){console.log("request fail",e),t.showModal({content:e.errMsg,showCancel:!1})},complete:function(){e.loading=!1}})},_requestPromise:function(){var e=this;t.request({url:h,dataType:"text",data:{noncestr:Date.now()}}).then((function(n){console.log("request success",n[1]),t.showToast({title:"请求成功",icon:"success",mask:!0,duration:p}),e.res="请求结果 : "+JSON.stringify(n[1]),e.loading=!1})).catch((function(n){console.log("request fail",n),t.showModal({content:n.errMsg,showCancel:!1}),e.loading=!1}))},_requestAwait:function(){var e=this;return d(r.default.mark((function n(){var o,u,s,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.request({url:h,dataType:"text",data:{noncestr:Date.now()}});case 2:o=n.sent,u=a(o,2),s=u[0],c=u[1],s?(console.log("request fail",s),t.showModal({content:s.errMsg,showCancel:!1})):(console.log("request success",c),t.showToast({title:"请求成功",icon:"success",mask:!0,duration:p}),e.res="请求结果 : "+JSON.stringify(c)),e.loading=!1;case 8:case"end":return n.stop()}}),n)})))()}}};e.default=v}).call(this,n("543d")["default"])}},[["52ea","common/runtime","common/vendor"]]]);