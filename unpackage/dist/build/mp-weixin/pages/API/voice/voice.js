(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/voice/voice"],{3296:function(e,t,n){"use strict";(function(e){n("78ca");o(n("66fd"));var t=o(n("7ad4"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"3a74":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("4795"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(o,r)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function c(e){a(i,o,r,c,l,"next",e)}function l(e){a(i,o,r,c,l,"throw",e)}c(void 0)}))}}var c=n("21a4"),l=null,u=null,f=null,d=null,s={data:function(){return{title:"start/stopRecord、play/stopVoice",recording:!1,playing:!1,hasRecord:!1,tempFilePath:"",recordTime:0,playTime:0,formatedRecordTime:"00:00:00",formatedPlayTime:"00:00:00"}},onUnload:function(){this.end()},onLoad:function(){var t=this;d=e.createInnerAudioContext(),d.onEnded((function(){clearInterval(l);var e=0;console.log("play voice finished"),t.playing=!1,t.formatedPlayTime=c.formatTime(e),t.playTime=e})),f=e.getRecorderManager(),f.onStart((function(){console.log("recorder start"),t.recording=!0,u=setInterval((function(){t.recordTime+=1,t.formatedRecordTime=c.formatTime(t.recordTime)}),1e3)})),f.onStop((function(e){console.log("on stop"),d.src=e.tempFilePath,t.hasRecord=!0,t.recording=!1})),f.onError((function(){console.log("recorder onError")}))},methods:{startRecord:function(){return i(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f.start({format:"mp3"});case 1:case"end":return e.stop()}}),e)})))()},stopRecord:function(){f.stop(),clearInterval(u)},playVoice:function(){var e=this;console.log("play voice"),this.playing=!0,l=setInterval((function(){e.playTime+=1,e.formatedPlayTime=c.formatTime(e.playTime)}),1e3),d.play()},stopVoice:function(){clearInterval(l),this.playing=!1,this.formatedPlayTime=c.formatTime(0),this.playTime=0,d.stop()},end:function(){d.stop(),f.stop(),clearInterval(u),clearInterval(l),this.recording=!1,this.playing=!1,this.hasRecord=!1,this.playTime=0,this.recordTime=0,this.formatedRecordTime="00:00:00",this.formatedRecordTime="00:00:00"},clear:function(){this.end()}}};t.default=s}).call(this,n("543d")["default"])},"4cf5":function(e,t,n){"use strict";var o=n("d900"),r=n.n(o);r.a},"6c49":function(e,t,n){"use strict";n.r(t);var o=n("3a74"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},"72f1":function(e,t,n){"use strict";var o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"b43e"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},"7ad4":function(e,t,n){"use strict";n.r(t);var o=n("72f1"),r=n("6c49");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("4cf5");var i,c=n("f0c5"),l=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=l.exports},d900:function(e,t,n){}},[["3296","common/runtime","common/vendor"]]]);