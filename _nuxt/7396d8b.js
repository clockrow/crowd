(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{656:function(e,t,r){"use strict";r.r(t);var n=r(21),o=(r(81),r(87),r(24),r(182)),c=r(132),l=r.n(c),v=Object(o.b)({props:{gameInfo:{type:Object,required:!0},pageName:{type:String,required:!0}},setup:function(e){var t=Object(o.f)(!0),r=Object(o.f)(!0),c=Object(o.f)(""),v=Object(o.f)(!1),h=Object(o.a)((function(){return!0!==v.value&&!t.value})),d=Object(o.h)().$recaptcha;Object(o.e)((function(){localStorage.getItem("registered_name_".concat(e.gameInfo.directoryName))&&(t.value=!1,r.value=!1,c.value=localStorage.getItem("registered_name_".concat(e.gameInfo.directoryName))||"",""===c.value&&(v.value=!0))})),Object(o.d)((function(){d.destroy()}));var m=function(){var o=Object(n.a)(regeneratorRuntime.mark((function n(){var o,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==c.value.trim()){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,d.getResponse();case 5:if(o=n.sent,!window.confirm("登録名：「".concat(c.value,"」で登録します\nよろしいですか?"))){n.next=11;break}return r.value=!1,v="".concat(e.gameInfo.rankingUrl,"register/").concat(e.pageName,"/"),n.next=11,l.a.post(v,{name:c.value,token:o}).then((function(n){200===n.status?(t.value=!1,localStorage.setItem("registered_name_".concat(e.gameInfo.directoryName),c.value.trim())):(alert("登録に失敗しました。"),r.value=!0)})).catch((function(){alert("ネットワークエラーが発生しました。"),r.value=!0}));case 11:return n.next=13,d.reset();case 13:n.next=17;break;case 15:n.prev=15,n.t0=n.catch(2);case 17:case"end":return n.stop()}}),n,null,[[2,15]])})));return function(){return o.apply(this,arguments)}}();return{showForm:t,inputName:c,showPostBtn:r,registerRanking:m,noName:v,existName:h}}}),h=r(75),d=r(151),m=r.n(d),f=r(244),w=r(188),_=r(0),O=(r(47),r(82),r(190),r(11),r(5),r(8),r(76),r(130),r(9),r(12),r(14),r(15),r(17)),x=r(156),y=r(259);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var B=Object(O.a)(x.a,Object(y.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:N({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}),V=r(241),k=r(650),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card-title",{staticClass:"d-flex text--black"},[r("v-icon",{staticClass:"mr-2",attrs:{color:"black"}},[e._v("mdi-crown")]),e._v(" "),r("div",[e._v("ランキング登録")])],1),e._v(" "),r("v-card-text",{staticClass:"ml-8 py-0"},[r("p",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}]},[e._v("・複数回の登録はお控えください。")]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}]},[e._v("・チームでプレイされた場合は、代表者がチーム名を1回登録してください。")]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}]},[e._v("・入力できる名前は最大20文字です。")]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.existName,expression:"existName"}]},[e._v("・登録名：「"+e._s(e.inputName.trim())+"」で登録しました。")]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.noName,expression:"noName"}]},[e._v("・登録しました。")])]),e._v(" "),r("v-card-text",{staticClass:"pt-0"},[r("v-form",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],on:{submit:function(t){return t.preventDefault(),e.registerRanking.apply(null,arguments)}}},[r("v-text-field",{attrs:{readonly:!e.showPostBtn,placeholder:"登録名を入力してください。",maxlength:"20",counter:""},model:{value:e.inputName,callback:function(t){e.inputName=t},expression:"inputName"}}),e._v(" "),r("recaptcha"),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.showPostBtn,expression:"showPostBtn"}],staticClass:"mt-4",attrs:{color:"primary",type:"submit"}},[e._v("登録")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:f.a,VCardText:w.c,VCardTitle:w.d,VForm:B,VIcon:V.a,VTextField:k.a})}}]);