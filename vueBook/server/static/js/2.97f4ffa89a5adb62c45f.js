webpackJsonp([2],{"I/oP":function(t,e){},lO7g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Xxa5"),r=n.n(s),i=n("exGp"),a=n.n(i),o=n("qmpX"),c=n("gyMJ"),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperSlides,function(t,n){return e("swiper-slide",{key:n},[e("img",{attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]},u=n("VU/8")({name:"carrousel",props:["swiperSlides"],data:function(){return{swiperOption:{autoplay:!0,pagination:{el:".swiper-pagination"},observeParents:!0}}}},p,!1,function(t){n("nMvA")},"data-v-58ec75bf",null).exports,l={data:function(){return{hotBooks:[],swiperSlides:[]}},created:function(){this.getHotData()},methods:{getHotData:function(){var t=this;return a()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)();case 2:return t.hotBooks=e.sent,e.next=5,Object(c.f)();case 5:t.swiperSlides=e.sent;case 6:case"end":return e.stop()}},e,t)}))()}},components:{Header:o.a,Swiper:u}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll-content"},[n("Header",[t._v("首页")]),t._v(" "),n("Swiper",{attrs:{swiperSlides:t.swiperSlides}}),t._v(" "),n("div",{staticClass:"bookList"},[n("ul",t._l(t.hotBooks,function(e,s){return n("li",{key:s},[n("img",{attrs:{src:e.bookCover,alt:""}}),t._v(" "),n("span",[t._v(t._s(e.bookName))])])}))])],1)},staticRenderFns:[]},f=n("VU/8")(l,d,!1,function(t){n("I/oP")},"data-v-69100c70",null);e.default=f.exports},nMvA:function(t,e){}});
//# sourceMappingURL=2.97f4ffa89a5adb62c45f.js.map