(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-pagination/uni-pagination"],{"08e8":function(n,t,e){"use strict";e.r(t);var r=e("fa9b"),u=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=u.a},5660:function(n,t,e){"use strict";var r=e("9831"),u=e.n(r);u.a},8122:function(n,t,e){"use strict";e.r(t);var r=e("d765"),u=e("08e8");for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);e("5660");var c,o=e("f0c5"),a=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"65df1c16",null,!1,r["a"],c);t["default"]=a.exports},9831:function(n,t,e){},d765:function(n,t,e){"use strict";var r={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"4dd4"))}},u=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}))},fa9b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(function(){return resolve(e("4dd4"))}.bind(null,e)).catch(e.oe)},u={name:"UniPagination",components:{uniIcons:r},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var n=1,t=Number(this.total),e=Number(this.pageSize);return t&&e&&(n=Math.ceil(t/e)),n}},watch:{current:function(n){this.currentIndex=+n}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},change:function(n){this.$emit("change",{type:n,current:this.currentIndex})}}};t.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-pagination/uni-pagination-create-component',
    {
        'components/uni-pagination/uni-pagination-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8122"))
        })
    },
    [['components/uni-pagination/uni-pagination-create-component']]
]);
