(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{248:function(t,e,r){"use strict";r(507);var o=r(1),n=r(104);o.default.use(n.a),e.a=new n.a({icons:{iconfont:"fa"}})},254:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var o={DARK_WHITE:"#fafafa"}},304:function(t,e,r){var content=r(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("442a81f6",content,!0,{sourceMap:!1})},306:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("25113bb9",content,!0,{sourceMap:!1})},334:function(t,e,r){"use strict";var o=r(3),n=r(254),c=Object(o.d)({setup:function(){return{COLOR:n.a}}}),l=(r(391),r(75)),v=r(151),f=r.n(v),d=r(528),_=r(240),x=r(188),h=r(529),C=r(535),w=r(519),V=r(536),y=r(530),k=r(531),O=r(532),m=r(533),E=r(534),T=r(242),N=r(243),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"app",style:{background:t.COLOR.DARK_WHITE}},[r("v-card",[r("v-toolbar",{attrs:{color:"white",flat:"",prominent:"",extended:""},scopedSlots:t._u([{key:"extension",fn:function(){return[r("v-tabs",{attrs:{centered:"",color:"black"}},[r("v-tab",{attrs:{to:"/"}},[t._v("TOP")]),t._v(" "),r("v-tab",{attrs:{to:"/kaii"}},[t._v("怪異")]),t._v(" "),r("v-tab",{attrs:{to:"/line2022"}},[t._v("2022年LINE謎")])],1)]},proxy:!0}])},[r("v-toolbar-title",{staticClass:"mx-auto"},[r("v-row",{staticClass:"justify"},[r("v-col",{staticClass:"text-h5",attrs:{cols:"12"}},[t._v("CROWD")])],1)],1)],1)],1),t._v(" "),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{padless:""}},[r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"text-center",attrs:{flat:"",tile:""}},[r("v-divider",{attrs:{color:"grey"}}),t._v(" "),r("v-card-text",{staticClass:"black--text"},[t._v(t._s((new Date).getFullYear())+" ー C-lock-row")]),t._v(" "),r("v-spacer")],1)],1)],1)],1)],1)}),[],!1,null,"4cdeebe4",null);e.a=component.exports;f()(component,{VApp:d.a,VCard:_.a,VCardText:x.c,VCol:h.a,VContainer:C.a,VDivider:w.a,VFooter:V.a,VMain:y.a,VRow:k.a,VSpacer:O.a,VTab:m.a,VTabs:E.a,VToolbar:T.a,VToolbarTitle:N.a})},340:function(t,e,r){r(341),r(342),t.exports=r(345)},385:function(t,e,r){"use strict";r(304)},386:function(t,e,r){var o=r(26)((function(i){return i[1]}));o.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),o.locals={},t.exports=o},391:function(t,e,r){"use strict";r(306)},392:function(t,e,r){var o=r(26)((function(i){return i[1]}));o.push([t.i,".app[data-v-4cdeebe4]{overflow-x:hidden;width:100%}",""]),o.locals={},t.exports=o},94:function(t,e,r){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(385),r(75)),c=r(151),l=r.n(c),v=r(528),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[340,39,5,40]]]);