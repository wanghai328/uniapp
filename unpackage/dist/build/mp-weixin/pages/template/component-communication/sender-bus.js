(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/sender-bus"],{2932:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(e("a88a"));function a(n){return n&&n.__esModule?n:{default:n}}var r={methods:{send:function(){var n=parseInt(1e4*Math.random());u.default.$emit("cc",{msg:"From event bus -> "+n})}}};t.default=r},"73e1":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}))},"7b86":function(n,t,e){"use strict";e.r(t);var u=e("2932"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=a.a},babd:function(n,t,e){"use strict";e.r(t);var u=e("73e1"),a=e("7b86");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("e9d8");var c,o=e("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=f.exports},cf36:function(n,t,e){},e9d8:function(n,t,e){"use strict";var u=e("cf36"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/sender-bus-create-component',
    {
        'pages/template/component-communication/sender-bus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("babd"))
        })
    },
    [['pages/template/component-communication/sender-bus-create-component']]
]);
