(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{590:function(t,e,n){"use strict";n.r(e);n(76);var c=n(3),l=Object(c.d)({props:{gameInfo:{type:Object,required:!0}},setup:function(t){var e=Object(c.m)(!0),n=function(){var n=new Date>(t.gameInfo.publishDateNum?new Date(t.gameInfo.publishDateNum.year,t.gameInfo.publishDateNum.month-1,t.gameInfo.publishDateNum.day,t.gameInfo.publishDateNum.hour,t.gameInfo.publishDateNum.min,t.gameInfo.publishDateNum.sec):new Date);e.value=!n};return Object(c.j)((function(){setInterval(n,1e3)})),{disabled:e,openLink:function(){var link=t.gameInfo.url;window.open(link)||(location.href=link)}}}}),o=n(75),r=n(151),v=n.n(r),d=n(244),m=n(240),f=n(188),_=n(241),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card-title",{staticClass:"d-flex text--black"},[n("v-icon",{staticClass:"mr-2",attrs:{color:"black"}},[t._v("mdi-pin")]),t._v(" "),n("div",[t._v("アクセス")])],1),t._v(" "),n("v-card-text",[n("v-card",{attrs:{flat:"",outlined:""}},[n("v-card-title",[t._v("出題サイトへアクセス")]),t._v(" "),n("v-card-text",{staticClass:"pb-0"},[n("p",{staticClass:"my-0"},[t._v("公開時刻になると以下のボタンが緑色になります。")]),t._v(" "),n("p",{staticClass:"mt-0 mb-2"},[t._v("このページをリロードする必要はありません。")]),t._v(" "),n("p",{staticClass:"my-0"},[t._v("ボタンを押した先で「403」と表示される場合、少し時間をおいてそのページをリロードしてください。")])]),t._v(" "),n("v-card-actions",{staticClass:"px-4 mb-3"},[n("v-btn",{staticClass:"px-6 mt-2",attrs:{color:"success",disabled:t.disabled},on:{click:function(e){return t.openLink()}}},[t._v("出題サイト")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VIcon:_.a})}}]);