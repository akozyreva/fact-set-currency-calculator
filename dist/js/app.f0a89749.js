(function(e){function t(t){for(var a,u,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)u=i[d],n[u]&&p.push(n[u][0]),n[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);o&&o(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},n={app:0},s=[];function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/fact-set-currency-calculator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var o=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"303d":function(e,t,r){"use strict";var a=r("54be"),n=r.n(a);n.a},"54be":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("CurCalculator")],1)},s=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-cur-calc-wrapper"},[r("div",{staticClass:"main-sings-wrappers"},[!e.resultBaseRate&&0!==e.resultBaseRate||!e.resultSelectedRate&&0!==e.resultSelectedRate?r("div",{staticClass:"sign-wrapper"},[r("p",{staticClass:"sign-base-cur"},[e._v("1 "+e._s(e.selectedBaseCur)+" equals ")]),r("p",{staticClass:"sign-selected-cur"},[e._v(e._s(e.rate)+" "+e._s(e.selectedTargetCur))])]):r("div",{staticClass:"sign-wrapper"},[r("p",{staticClass:"sign-base-cur"},[e._v(e._s(e.resultBaseRate)+" "+e._s(e.selectedBaseCur)+" equals ")]),r("p",{staticClass:"sign-selected-cur"},[e._v(" "+e._s(e.resultSelectedRate)+" "+e._s(e.selectedTargetCur))])]),r("p",{staticClass:"wrapper-date"},[e._v(e._s(e.currentDate))])]),r("div",{staticClass:"main-cur-wrapper"},[r("div",{staticClass:"cur-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.resultBaseRate,expression:"resultBaseRate"}],attrs:{type:"number"},domProps:{value:e.resultBaseRate},on:{input:function(t){t.target.composing||(e.resultBaseRate=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.resultSelectedRate,expression:"resultSelectedRate"}],attrs:{type:"number"},domProps:{value:e.resultSelectedRate},on:{input:function(t){t.target.composing||(e.resultSelectedRate=t.target.value)}}})]),r("div",{staticClass:"cur-wrapper"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBaseCur,expression:"selectedBaseCur"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedBaseCur=t.target.multiple?r:r[0]},function(t){return e.trigBaseCur(t)}]}},e._l(e.currencies,function(t){return r("option",{key:t.id,domProps:{value:t.baseCur}},[e._v(e._s(t.baseCur))])}),0),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTargetCur,expression:"selectedTargetCur"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedTargetCur=t.target.multiple?r:r[0]},function(t){return e.trigTargetCur(t)}]}},e._l(e.targetCurrencies,function(t){return r("option",{key:t.id,domProps:{value:t.name}},[e._v(e._s(t.name)+"\n      ")])}),0)])])])},i=[],c=(r("7514"),r("c5f6"),r("7f7f"),{name:"CurCalculator",data:function(){return{currencies:[{id:1,baseCur:"Euro",targetCur:[{id:11,name:"US Dollar",val:1.2897},{id:12,name:"Schweizer Franken",val:1.3135},{id:13,name:"Britisch Pfund",val:.8631}]},{id:2,baseCur:"US Dollar",targetCur:[{id:21,name:"JPY",val:109.62}]},{id:3,baseCur:"Schweizer Franken",targetCur:[{id:31,name:"US Dollar",val:.996}]},{id:4,baseCur:"Britisch Pfund",targetCur:[{id:41,name:"CAD",val:1.7574}]}],selectedBaseCur:"",selectedTargetCur:"",convBaseVal:1,rate:0,convTargVal:0}},created:function(){this.selectedBaseCur=this.currencies[0].baseCur,this.selectedTargetCur=this.currencies[0].targetCur[0].name,this.rate=this.round(this.currencies[0].targetCur[0].val),this.convTargVal=this.rate},methods:{round:function(e){return Number(Math.round(e+"e2")+"e-2")},trigCalcCur:function(e){var t=this;this.selectedTargetCur=e.target.value,this.rate=this.targetCurrencies.find(function(e){return e.name===t.selectedTargetCur}).val,this.convTargVal=this.round(this.convBaseVal*this.rate)},trigBaseCur:function(e){this.trigCalcCur(e)},trigTargetCur:function(e){this.trigCalcCur(e)},predefinedTargetCur:function(e){this.selectedTargetCur=e}},computed:{targetCurrencies:function(){var e=this,t=this.currencies.find(function(t){return t.baseCur===e.selectedBaseCur});return this.predefinedTargetCur(t.targetCur[0].name),t.targetCur},resultBaseRate:{get:function(){return this.convBaseVal},set:function(e){""===e||"-"===e.charAt(0)?(this.convTargVal="",this.convBaseVal=""):"0"===e.charAt(0)?(this.convTargVal=0,this.convBaseVal=0):(this.convBaseVal=e,this.convTargVal=this.round(e*this.rate))}},resultSelectedRate:{get:function(){return this.convTargVal},set:function(e){""===e||"-"===e.charAt(0)?(this.convBaseVal="",this.convTargVal=""):"0"===e.charAt(0)?(this.convTargVal=0,this.convBaseVal=0):(this.convTargVal=e,this.convBaseVal=this.round(this.convTargVal/this.rate))}},currentDate:function(){var e=new Date;return"".concat(e.getDate()," ").concat(e.toLocaleString("en-us",{month:"long"})," ").concat(e.getHours(),":").concat(e.getMinutes()," UTC")}}}),l=c,o=(r("303d"),r("2877")),d=Object(o["a"])(l,u,i,!1,null,"8b6bc7a6",null),p=d.exports,v={name:"app",components:{CurCalculator:p}},f=v,g=(r("034f"),Object(o["a"])(f,n,s,!1,null,null,null)),h=g.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(h)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.f0a89749.js.map