webpackJsonp([1],{"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var i=n("lOnJ");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"3Eo+":function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"77Pl":function(t,e,n){var i=n("EqjI");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},BHSd:function(t,e){},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var i,r=n("woOf"),s=(i=r)&&i.__esModule?i:{default:i};e.default=s.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},Ibhu:function(t,e,n){var i=n("D2L2"),r=n("TcQ7"),s=n("vFc/")(!1),o=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,a=r(t),c=0,u=[];for(n in a)n!=o&&i(a,n)&&u.push(n);for(;e.length>c;)i(a,n=e[c++])&&(~s(u,n)||u.push(n));return u}},J9aP:function(t,e){},MU5D:function(t,e,n){var i=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var i=n("EqjI");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var i=n("EqjI"),r=n("7KvD").document,s=i(r)&&i(r.createElement);t.exports=function(t){return s?r.createElement(t):{}}},QRG4:function(t,e,n){var i=n("UuGF"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},R4wc:function(t,e,n){var i=n("kM2E");i(i.S+i.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SF2E:function(t,e){},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(t,e,n){var i=n("MU5D"),r=n("52gC");t.exports=function(t){return i(r(t))}},To3L:function(t,e,n){"use strict";var i=n("+E39"),r=n("lktj"),s=n("1kS7"),o=n("NpIQ"),a=n("sB3e"),c=n("MU5D"),u=Object.assign;t.exports=!u||n("S82l")(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=i})?function(t,e){for(var n=a(t),u=arguments.length,l=1,f=s.f,p=o.f;u>l;)for(var v,d=c(arguments[l++]),m=f?r(d).concat(f(d)):r(d),h=m.length,_=0;h>_;)v=m[_++],i&&!p.call(d,v)||(n[v]=d[v]);return n}:u},UuGF:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},"Va/I":function(t,e){},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},ax3d:function(t,e,n){var i=n("e8AB")("keys"),r=n("3Eo+");t.exports=function(t){return i[t]||(i[t]=r(t))}},e8AB:function(t,e,n){var i=n("FeBl"),r=n("7KvD"),s=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n("O4g8")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,e,n){var i=n("77Pl"),r=n("SfB7"),s=n("MmMw"),o=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(i(t),e=s(e,!0),i(n),r)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},fkB2:function(t,e,n){var i=n("UuGF"),r=Math.max,s=Math.min;t.exports=function(t,e){return(t=i(t))<0?r(t+e,0):s(t,e)}},hJx8:function(t,e,n){var i=n("evD5"),r=n("X8DO");t.exports=n("+E39")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},kM2E:function(t,e,n){var i=n("7KvD"),r=n("FeBl"),s=n("+ZMJ"),o=n("hJx8"),a=n("D2L2"),c=function(t,e,n){var u,l,f,p=t&c.F,v=t&c.G,d=t&c.S,m=t&c.P,h=t&c.B,_=t&c.W,g=v?r:r[e]||(r[e]={}),w=g.prototype,y=v?i:d?i[e]:(i[e]||{}).prototype;for(u in v&&(n=e),n)(l=!p&&y&&void 0!==y[u])&&a(g,u)||(f=l?y[u]:n[u],g[u]=v&&"function"!=typeof y[u]?n[u]:h&&l?s(f,i):_&&y[u]==f?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?s(Function.call,f):f,m&&((g.virtual||(g.virtual={}))[u]=f,t&c.R&&w&&!w[u]&&o(w,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},kXWq:function(t,e){},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var i=n("Ibhu"),r=n("xnc9");t.exports=Object.keys||function(t){return i(t,r)}},pb8n:function(t,e){},qbqa:function(t,e){},sB3e:function(t,e,n){var i=n("52gC");t.exports=function(t){return Object(i(t))}},"vFc/":function(t,e,n){var i=n("TcQ7"),r=n("QRG4"),s=n("fkB2");t.exports=function(t){return function(e,n,o){var a,c=i(e),u=r(c.length),l=s(o,u);if(t&&n!=n){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},wXUp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),r=n.n(i),s=n("NYxO"),o={name:"HomeHeader",computed:r()({},Object(s.c)(["city"]))},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"header-wrapper"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n                "+this._s(this.city)+"\n                "),e("i",{staticClass:"iconfont icon-unfold"})])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("i",{staticClass:"iconfont icon-back"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("i",{staticClass:"iconfont icon-search"}),this._v("\n            输入城市/景点/游玩主题\n        ")])}]};var c=n("VU/8")(o,a,!1,function(t){n("J9aP")},"data-v-c958f098",null).exports,u={name:"HomeSwiper",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},props:{list:Array},computed:{showSwiper:function(){return this.list.length}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("a",{attrs:{href:"javascript:"}},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var f=n("VU/8")(u,l,!1,function(t){n("pb8n")},"data-v-bbbf87d6",null).exports,p={name:"HomeIcons",data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},props:{list:Array},computed:{pages:function(){var t=[];return this.list.forEach(function(e,n){var i=Math.floor(n/8);t[i]||(t[i]=[]),t[i].push(e)}),t}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icons"},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,i){return n("swiper-slide",{key:i},t._l(e,function(e){return n("a",{key:e.id,staticClass:"icon",attrs:{href:"javascript:"}},[n("img",{staticClass:"icon-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),n("span",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var d=n("VU/8")(p,v,!1,function(t){n("kXWq")},"data-v-e68cf62e",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"location border-top"},[e("div",{staticClass:"position iconfont border-right"},[e("a",{staticClass:"position-desc",attrs:{href:"javascript:"}},[this._v(" 附近")])]),this._v(" "),e("div",{staticClass:"list iconfont"},[e("a",{staticClass:"list-desc",attrs:{href:"javascript:"}},[this._v(" 必游榜单")])])])}]};var h=n("VU/8")({name:"HomeLocation"},m,!1,function(t){n("BHSd")},"data-v-b8b51a3e",null).exports,_={name:"HomeHot",data:function(){return{swiperOption:{scrollbar:".swiper-scrollbar",freeMode:!0,freeModeMomentumRatio:.5,freeModeMomentumBounce:!1,slidesPerView:"auto",resistanceRatio:0}}},props:{list:Array},computed:{showSwiper:function(){return this.list.length}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot"},[t._m(0),t._v(" "),n("div",{staticClass:"hot-list"},[t.showSwiper?n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(e){return n("swiper-slide",{key:e.id,staticClass:"hot-item"},[n("router-link",{staticClass:"item-a",attrs:{to:"/detail/"+e.id}},[e.tagUrl?n("img",{staticClass:"item-tag",attrs:{src:e.tagUrl}}):t._e(),t._v(" "),n("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),n("div",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"item-price"},[n("span",{staticClass:"price"},[t._v("¥"),n("em",[t._v(t._s(e.price))])]),t._v("起\n                    ")])])],1)}),t._v(" "),n("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],2):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hot-title"},[e("img",{staticClass:"title-icon",attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png",alt:"喜欢"}}),this._v(" "),e("span",{staticClass:"title"},[this._v("本周热门榜单")])])}]};var w=n("VU/8")(_,g,!1,function(t){n("qbqa")},"data-v-a0897360",null).exports,y={name:"HomeRecommend",props:{list:Array}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[t._m(0),t._v(" "),n("ul",{staticClass:"recommend-list"},t._l(t.list,function(e,i){return n("router-link",{key:e.id,class:["recommend-item",{"border-bottom":i<t.list.length-1}],attrs:{tag:"li",to:"/detail/"+e.id}},[n("div",{staticClass:"item-img"},[n("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),n("div",{staticClass:"item-tag",style:"background-image:url("+e.tagUrl+")"},[t._v(t._s(e.tagText))]),t._v(" "),n("div",{staticClass:"item-info"},[n("div",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"item-comment"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",{staticClass:"comment"},[t._v(t._s(e.comment)+"条评论")])]),t._v(" "),n("div",{staticClass:"item-price"},[n("span",{staticClass:"price"},[t._v("¥"),n("em",[t._v(t._s(e.price))])]),t._v("起\n                    "),n("span",{staticClass:"location"},[t._v(t._s(e.location))])]),t._v(" "),""!==e.feature?n("div",{staticClass:"item-feature"},[t._v(t._s(e.feature))]):t._e()])])}),1),t._v(" "),n("a",{staticClass:"recommend-more border-top",attrs:{href:"javascript:"}},[t._v("查看所有产品")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend-title"},[e("img",{staticClass:"title-icon",attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png",alt:"喜欢"}}),this._v(" "),e("span",{staticClass:"title"},[this._v("猜你喜欢")])])}]};var b=n("VU/8")(y,C,!1,function(t){n("Va/I")},"data-v-5a2f402a",null).exports,x={name:"Homeweekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weekend"},[n("div",{staticClass:"weekend-title"},[t._v("周末去哪儿")]),t._v(" "),n("ul",{staticClass:"weekend-list"},t._l(t.list,function(e){return n("li",{key:e.id,staticClass:"weekend-item"},[n("a",{attrs:{href:"javascript:"}},[n("img",{staticClass:"weekend-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),n("div",{staticClass:"weekend-info"},[n("p",{staticClass:"weekend-name"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"weekend-desc"},[t._v(t._s(e.desc))])])])])}),0),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"price-desc"},[e("span",{staticClass:"iconfont icon-warn"}),this._v(" "),e("strong",[this._v("票面价")]),this._v("是指通过景区指定窗口售卖的纸质门票上标注的价格\n    ")])}]};var E=n("VU/8")(x,k,!1,function(t){n("SF2E")},"data-v-2ff915c5",null).exports,O=n("mtWM"),j=n.n(O),M={name:"Home",components:{HomeHeader:c,HomeSwiper:f,HomeIcons:d,HomeLocation:h,HomeHot:w,HomeRecommend:b,HomeWeekend:E},data:function(){return{swiperList:[],iconList:[],hotList:[],recommendList:[],weekendList:[],lastCity:""}},computed:r()({},Object(s.c)(["city"])),methods:{getHomeInfo:function(){j.a.get("static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.hotList=e.hotList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("home-header"),t._v(" "),n("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),n("home-icons",{attrs:{list:t.iconList}}),t._v(" "),n("home-location"),t._v(" "),n("home-hot",{attrs:{list:t.hotList}}),t._v(" "),n("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),n("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var L=n("VU/8")(M,S,!1,function(t){n("z5Ef")},"data-v-4db10c50",null);e.default=L.exports},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},z5Ef:function(t,e){}});
//# sourceMappingURL=1.5d59f59bca8fee9ee850.js.map