(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/websocket-global/websocket-global"],{2604:function(n,o,e){"use strict";var t={pageHead:function(){return e.e("components/page-head/page-head").then(e.bind(null,"b43e"))}},c=function(){var n=this,o=n.$createElement;n._self._c},s=[];e.d(o,"b",(function(){return c})),e.d(o,"c",(function(){return s})),e.d(o,"a",(function(){return t}))},"2d03":function(n,o,e){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n.getSystemInfoSync().platform,t={data:function(){return{connected:!1,connecting:!1,msg:!1,roomId:""}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){n.closeSocket(),n.hideLoading()},methods:{connect:function(){var o=this;if(this.connected||this.connecting)return n.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,n.showLoading({title:"连接中..."}),n.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},header:{"content-type":"application/json"},method:"GET",success:function(n){},fail:function(n){}}),n.onSocketOpen((function(e){o.connecting=!1,o.connected=!0,n.hideLoading(),n.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",e)})),n.onSocketError((function(e){o.connecting=!1,o.connected=!1,n.hideLoading(),n.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",e)})),n.onSocketMessage((function(n){o.msg=n.data,console.log("onMessage",n)})),n.onSocketClose((function(n){o.connected=!1,o.startRecive=!1,o.msg=!1,console.log("onClose",n)}))},send:function(){n.sendSocketMessage({data:"from "+e+" : "+parseInt(1e4*Math.random()).toString(),success:function(n){console.log(n)},fail:function(n){console.log(n)}})},close:function(){n.closeSocket()}}};o.default=t}).call(this,e("543d")["default"])},"5ac9":function(n,o,e){"use strict";var t=e("c173"),c=e.n(t);c.a},a95c:function(n,o,e){"use strict";(function(n){e("78ca");t(e("66fd"));var o=t(e("d269"));function t(n){return n&&n.__esModule?n:{default:n}}n(o.default)}).call(this,e("543d")["createPage"])},c173:function(n,o,e){},c97e:function(n,o,e){"use strict";e.r(o);var t=e("2d03"),c=e.n(t);for(var s in t)"default"!==s&&function(n){e.d(o,n,(function(){return t[n]}))}(s);o["default"]=c.a},d269:function(n,o,e){"use strict";e.r(o);var t=e("2604"),c=e("c97e");for(var s in c)"default"!==s&&function(n){e.d(o,n,(function(){return c[n]}))}(s);e("5ac9");var a,i=e("f0c5"),u=Object(i["a"])(c["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],a);o["default"]=u.exports}},[["a95c","common/runtime","common/vendor"]]]);