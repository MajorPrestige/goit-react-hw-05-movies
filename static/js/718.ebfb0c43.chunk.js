"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[718],{6718:function(t,r,n){n.r(r),n.d(r,{default:function(){return f}});var e=n(885),a=n(6871),u=n(2791),c=n(6436),s="movieCast_wrapper__kmrB8",i="movieCast_list__g3a5w",o="movieCast_inner__gGD0k",p=n(184),f=function(){var t=(0,u.useState)([]),r=(0,e.Z)(t,2),n=r[0],f=r[1],d=(0,u.useState)(null),v=(0,e.Z)(d,2),h=v[0],m=v[1],l=(0,a.UO)().movieId;return(0,u.useEffect)((function(){(0,c.xc)(l).then((function(t){var r=t.data;return f(r.data.cast)})).catch((function(t){return m(t.message)}))}),[l]),(0,p.jsxs)(p.Fragment,{children:[h&&(0,p.jsx)("div",{children:h}),(0,p.jsx)("ul",{className:i,children:n.map((function(t,r){var n=t.character,e=t.name,a=t.profile_path;return(0,p.jsxs)("li",{className:s,children:[a?(0,p.jsx)("img",{width:"250px",src:"https://image.tmdb.org/t/p/w500".concat(a),alt:e}):(0,p.jsx)("img",{width:"250px",src:"https://vjoy.cc/wp-content/uploads/2020/06/znak_voprosa_46_17183646.png",alt:e}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("h2",{children:e}),(0,p.jsx)("p",{children:n})]})]},r)}))})]})}},6436:function(t,r,n){n.d(r,{Hx:function(){return f},Y5:function(){return o},mv:function(){return d},uS:function(){return i},xc:function(){return p}});var e=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c);s().defaults.baseURL="https://api.themoviedb.org/3",s().defaults.params={api_key:"63a5436f31e8ed5d869f5df89d5791bc"};var i=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/trending/movie/day");case 2:return r=t.sent,t.abrupt("return",{data:r});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(r));case 2:return n=t.sent,t.abrupt("return",{data:n});case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(r,"/credits"));case 2:return n=t.sent,t.abrupt("return",{data:n});case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(r,"/reviews"));case 2:return n=t.sent,t.abrupt("return",{data:n});case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie",{params:{query:r}});case 2:return n=t.sent,t.abrupt("return",{data:n});case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=718.ebfb0c43.chunk.js.map