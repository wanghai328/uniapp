(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/video/video"],{"7ae1":function(e,t,a){"use strict";var n={pageHead:function(){return a.e("components/page-head/page-head").then(a.bind(null,"b43e"))}},c=function(){var e=this,t=e.$createElement;e._self._c},u=[];a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return n}))},bf8a:function(e,t,a){"use strict";a.r(t);var n=a("7ae1"),c=a("db4e");for(var u in c)"default"!==u&&function(e){a.d(t,e,(function(){return c[e]}))}(u);a("e866");var o,r=a("f0c5"),i=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=i.exports},c9aa:function(e,t,a){},cd81:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[["camera"],["album"],["camera","album"]],n={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:"",cameraList:[{value:"back",name:"后置摄像头",checked:"true"},{value:"front",name:"前置摄像头"}],cameraIndex:0}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{radioChange:function(e){for(var t=0;t<this.cameraList.length;t++)if(this.cameraList[t].value===e.detail.value){this.cameraIndex=t;break}},sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},chooseVideo:function(){var t=this;e.chooseVideo({camera:this.cameraList[this.cameraIndex].value,sourceType:a[this.sourceTypeIndex],success:function(e){t.src=e.tempFilePath},fail:function(a){e.getSetting({success:function(a){var n=!1;switch(t.sourceTypeIndex){case 0:n=a.authSetting["scope.camera"];break;case 1:n=a.authSetting["scope.album"];break;case 2:n=a.authSetting["scope.album"]&&a.authSetting["scope.camera"];break;default:break}n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取视频，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}})}}};t.default=n}).call(this,a("543d")["default"])},db4e:function(e,t,a){"use strict";a.r(t);var n=a("cd81"),c=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,(function(){return n[e]}))}(u);t["default"]=c.a},e515:function(e,t,a){"use strict";(function(e){a("78ca");n(a("66fd"));var t=n(a("bf8a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},e866:function(e,t,a){"use strict";var n=a("c9aa"),c=a.n(n);c.a}},[["e515","common/runtime","common/vendor"]]]);