(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/upload-file/upload-file"],{"13c5":function(e,n,t){"use strict";var o=t("d43e"),a=t.n(o);a.a},"7e79":function(e,n,t){"use strict";t.r(n);var o=t("ca5b"),a=t("f25f");for(var c in a)"default"!==c&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t("13c5");var u,i=t("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=s.exports},a0d8:function(e,n,t){"use strict";(function(e){t("78ca");o(t("66fd"));var n=o(t("7e79"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a996:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var n=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);var o=t.tempFilePaths[0];e.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:o,fileType:"image",name:"data",success:function(t){console.log("uploadImage success, res is:",t),e.showToast({title:"上传成功",icon:"success",duration:1e3}),n.imageSrc=o},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(n){console.log("chooseImage fail",n),e.getSetting({success:function(n){var t=n.authSetting["scope.album"];t||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相册获取图片，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})}})}}};n.default=t}).call(this,t("543d")["default"])},ca5b:function(e,n,t){"use strict";var o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"b43e"))}},a=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return o}))},d43e:function(e,n,t){},f25f:function(e,n,t){"use strict";t.r(n);var o=t("a996"),a=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=a.a}},[["a0d8","common/runtime","common/vendor"]]]);