(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-combox/uni-combox"],{"310d":function(t,n,e){"use strict";var i={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"4dd4"))}},o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}))},"5aa7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(function(){return resolve(e("4dd4"))}.bind(null,e)).catch(e.oe)},o={name:"uniCombox",components:{uniIcons:i},props:{label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:function(){return[]}},emptyTips:{type:String,default:"无匹配项"},value:{type:String,default:""}},data:function(){return{showSelector:!1,inputVal:""}},computed:{labelStyle:function(){return"auto"===this.labelWidth?{}:{width:this.labelWidth}},filterCandidates:function(){var t=this;return this.candidates.filter((function(n){return n.indexOf(t.inputVal)>-1}))},filterCandidatesLength:function(){return this.filterCandidates.length}},watch:{value:{handler:function(t){this.inputVal=t},immediate:!0}},methods:{toggleSelector:function(){this.showSelector=!this.showSelector},onFocus:function(){this.showSelector=!0},onBlur:function(){var t=this;setTimeout((function(){t.showSelector=!1}),50)},onSelectorClick:function(t){this.inputVal=this.filterCandidates[t],this.showSelector=!1,this.$emit("input",this.inputVal)},onInput:function(){var t=this;setTimeout((function(){t.$emit("input",t.inputVal)}))}}};n.default=o},"6ec8":function(t,n,e){"use strict";e.r(n);var i=e("310d"),o=e("a374");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("9960");var a,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"d7b62c5a",null,!1,i["a"],a);n["default"]=c.exports},9960:function(t,n,e){"use strict";var i=e("b54a2"),o=e.n(i);o.a},a374:function(t,n,e){"use strict";e.r(n);var i=e("5aa7"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},b54a2:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-combox/uni-combox-create-component',
    {
        'components/uni-combox/uni-combox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6ec8"))
        })
    },
    [['components/uni-combox/uni-combox-create-component']]
]);