(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-network-type/get-network-type"],{"2cc43":function(e,t,n){"use strict";(function(e){n("78ca");o(n("66fd"));var t=o(n("897a"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"6faf":function(e,t,n){"use strict";n.r(t);var o=n("d3c8"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},"897a":function(e,t,n){"use strict";n.r(t);var o=n("fffd"),a=n("6faf");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var u,c=n("f0c5"),f=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=f.exports},d3c8:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var t=this;e.getNetworkType({success:function(e){console.log(e),t.hasNetworkType=!0,t.networkType=e.subtype||e.networkType},fail:function(){e.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType=""}}};t.default=n}).call(this,n("543d")["default"])},fffd:function(e,t,n){"use strict";var o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"b43e"))}},a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))}},[["2cc43","common/runtime","common/vendor"]]]);