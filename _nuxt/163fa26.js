(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{658:function(e,t,r){"use strict";r.r(t);var n=r(245),o=r(189),c=r(0),l=(r(47),r(82),r(191),r(10),r(5),r(8),r(77),r(131),r(9),r(11),r(13),r(14),r(18)),h=r(155),v=r(260);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=Object(l.a)(h.a,Object(v.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}),w=r(243),_=r(652),O=(r(87),r(22)),y=(r(81),r(23),r(182)),j=r(132),x=r.n(j),N=Object(y.b)({props:{gameInfo:{type:Object,required:!0},pageName:{type:String,required:!0}},setup:function(e){var t=Object(y.f)(!0),r=Object(y.f)(!0),n=Object(y.f)(""),o=Object(y.f)(!1),c=Object(y.a)((function(){return!0!==o.value&&!t.value})),l=Object(y.h)().$recaptcha;Object(y.e)((function(){localStorage.getItem("registered_name_".concat(e.gameInfo.directoryName))&&(t.value=!1,r.value=!1,n.value=localStorage.getItem("registered_name_".concat(e.gameInfo.directoryName))||"",""===n.value&&(o.value=!0))})),Object(y.d)((function(){l.destroy()}));var h=function(){var o=Object(O.a)(regeneratorRuntime.mark((function o(){var c,h;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(""!==n.value.trim()){o.next=2;break}return o.abrupt("return");case 2:return o.prev=2,o.next=5,l.getResponse();case 5:if(c=o.sent,!window.confirm("登録名：「".concat(n.value,"」で登録します\nよろしいですか?"))){o.next=11;break}return r.value=!1,h="".concat(e.gameInfo.rankingUrl,"register/").concat(e.pageName,"/"),o.next=11,x.a.post(h,{name:n.value,token:c}).then((function(o){200===o.status?(t.value=!1,localStorage.setItem("registered_name_".concat(e.gameInfo.directoryName),n.value.trim())):(alert("登録に失敗しました。"),r.value=!0)})).catch((function(){alert("ネットワークエラーが発生しました。"),r.value=!0}));case 11:return o.next=13,l.reset();case 13:o.next=17;break;case 15:o.prev=15,o.t0=o.catch(2);case 17:case"end":return o.stop()}}),o,null,[[2,15]])})));return function(){return o.apply(this,arguments)}}();return{showForm:t,inputName:n,showPostBtn:r,registerRanking:h,noName:o,existName:c}}}),B=N,k=r(76),component=Object(k.a)(B,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t(o.d,{staticClass:"d-flex text--black"},[t(w.a,{staticClass:"mr-2",attrs:{color:"black"}},[e._v("mdi-crown")]),e._v(" "),t("div",[e._v("ランキング登録")])],1),e._v(" "),t(o.c,{staticClass:"ml-8 py-0"},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}]},[e._v("・複数回の登録はお控えください。")]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}]},[e._v("・チームでプレイされた場合は、代表者がチーム名を1回登録してください。")]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}]},[e._v("・入力できる名前は最大20文字です。")]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.existName,expression:"existName"}]},[e._v("・登録名：「"+e._s(e.inputName.trim())+"」で登録しました。")]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.noName,expression:"noName"}]},[e._v("・登録しました。")])]),e._v(" "),t(o.c,{staticClass:"pt-0"},[t(d,{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],on:{submit:function(t){return t.preventDefault(),e.registerRanking.apply(null,arguments)}}},[t(_.a,{attrs:{readonly:!e.showPostBtn,placeholder:"登録名を入力してください。",maxlength:"20",counter:""},model:{value:e.inputName,callback:function(t){e.inputName=t},expression:"inputName"}}),e._v(" "),t("recaptcha"),e._v(" "),t(n.a,{directives:[{name:"show",rawName:"v-show",value:e.showPostBtn,expression:"showPostBtn"}],staticClass:"mt-4",attrs:{color:"primary",type:"submit"}},[e._v("登録")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);