(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/rewarded-video-ad/rewarded-video-ad"],{"0208":function(n,o,e){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=[-5001,-5002,-5003,-5004,-5005,-5006],t={data:function(){return{title:"激励视频广告",loading:!1,loadError:!1}},onReady:function(){this.adOption={adUnitId:""},this.createAd()},methods:{createAd:function(){var o=this,t=this.rewardedVideoAd=n.createRewardedVideoAd(this.adOption);t.onLoad((function(){o.loading=!1,o.loadError=!1,console.log("onLoad event")})),t.onClose((function(e){o.loading=!0,e&&e.isEnded,console.log("onClose "+e.isEnded),setTimeout((function(){n.showToast({title:"激励视频"+(e.isEnded?"成功":"未")+"播放完毕",duration:1e4,position:"bottom"})}),500)})),t.onError((function(n){o.loading=!1,n.code&&-1!==e.indexOf(n.code)&&(o.loadError=!0),console.log("onError event",n)})),this.loading=!0},show:function(){var o=this.rewardedVideoAd;o.show().catch((function(){o.load().then((function(){return o.show()})).catch((function(o){console.log("激励视频 广告显示失败",o),n.showToast({title:o.errMsg||o.message,duration:5e3,position:"bottom"})}))}))},reloadAd:function(){this.loading=!0,this.rewardedVideoAd.load()}}};o.default=t}).call(this,e("543d")["default"])},"0787":function(n,o,e){"use strict";e.r(o);var t=e("0208"),d=e.n(t);for(var a in t)"default"!==a&&function(n){e.d(o,n,(function(){return t[n]}))}(a);o["default"]=d.a},4779:function(n,o,e){"use strict";(function(n){e("78ca");t(e("66fd"));var o=t(e("e012"));function t(n){return n&&n.__esModule?n:{default:n}}n(o.default)}).call(this,e("543d")["createPage"])},"5ea5":function(n,o,e){"use strict";var t=e("781b"),d=e.n(t);d.a},"781b":function(n,o,e){},d640:function(n,o,e){"use strict";var t={pageHead:function(){return e.e("components/page-head/page-head").then(e.bind(null,"b43e"))}},d=function(){var n=this,o=n.$createElement;n._self._c},a=[];e.d(o,"b",(function(){return d})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return t}))},e012:function(n,o,e){"use strict";e.r(o);var t=e("d640"),d=e("0787");for(var a in d)"default"!==a&&function(n){e.d(o,n,(function(){return d[n]}))}(a);e("5ea5");var i,r=e("f0c5"),u=Object(r["a"])(d["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],i);o["default"]=u.exports}},[["4779","common/runtime","common/vendor"]]]);