(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-goods-nav/uni-goods-nav"],{"2cfc":function(n,t,o){"use strict";var e=o("7c6c"),c=o.n(e);c.a},6209:function(n,t,o){"use strict";o.r(t);var e=o("640e"),c=o("6461");for(var u in c)"default"!==u&&function(n){o.d(t,n,(function(){return c[n]}))}(u);o("2cfc");var i,r=o("f0c5"),f=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,"2d25bb2e",null,!1,e["a"],i);t["default"]=f.exports},"640e":function(n,t,o){"use strict";var e={uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("components/uni-icons/uni-icons")]).then(o.bind(null,"4dd4"))}},c=function(){var n=this,t=n.$createElement;n._self._c},u=[];o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return e}))},6461:function(n,t,o){"use strict";o.r(t);var e=o("6fd7"),c=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,(function(){return e[n]}))}(u);t["default"]=c.a},"6fd7":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){Promise.all([o.e("common/vendor"),o.e("components/uni-icons/uni-icons")]).then(function(){return resolve(o("4dd4"))}.bind(null,o)).catch(o.oe)},c={name:"UniGoodsNav",components:{uniIcons:e},props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(n,t){this.$emit("click",{index:n,content:t})},buttonClick:function(t,o){n.report&&n.report(o.text,o.text),this.$emit("buttonClick",{index:t,content:o})}}};t.default=c}).call(this,o("543d")["default"])},"7c6c":function(n,t,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-goods-nav/uni-goods-nav-create-component',
    {
        'components/uni-goods-nav/uni-goods-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6209"))
        })
    },
    [['components/uni-goods-nav/uni-goods-nav-create-component']]
]);
