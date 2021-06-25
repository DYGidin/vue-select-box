import { openBlock, createBlock, renderSlot, createVNode, withKeys, withModifiers, mergeProps, Fragment, renderList, createCommentVNode, toDisplayString, toRef, computed, isRef, isReactive, ref, getCurrentInstance, watch, nextTick, onMounted, watchEffect, provide, resolveComponent, withCtx, withDirectives, vShow, onUpdated, inject, reactive, toRefs, defineComponent, h, createApp, withScopeId } from 'vue';

function k(e){return (k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var l=0,t=new Array(n);l<n;l++)t[l]=e[l];return t}function A(e,n){var l;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(l=function(e,n){if(e){if("string"==typeof e)return O(e,n);var l=Object.prototype.toString.call(e).slice(8,-1);return "Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?O(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){l&&(e=l);var t=0,u=function(){};return {s:u,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,r=!1;return {s:function(){l=e[Symbol.iterator]();},n:function(){var e=l.next();return o=e.done,e},e:function(e){r=!0,a=e;},f:function(){try{o||null==l.return||l.return();}finally{if(r)throw a}}}}var C={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup:function(t,u){var a=ref(null);return onMounted((function(){t.autofocus&&a.value.focus();})),onUpdated((function(){t.autofocus&&a.value.focus();})),{handleInput:function(e){u.emit("input",e),u.emit("update:modelValue",e.target.value);},handleChange:function(e){u.emit("change",e),u.emit("update:modelValue",e.target.value);},handleFocus:function(e){u.emit("focus",e);},handleBlur:function(e){u.emit("blur",e);},input:a,handleEscape:function(e){a.value.blur(),u.emit("escape",e);}}}},T={class:"vue-input"};C.render=function(e,n,l,d,c,p){return openBlock(),createBlock("div",T,[renderSlot(e.$slots,"prepend"),createVNode("input",{ref:"input",modelValue:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,onInput:n[1]||(n[1]=function(){return d.handleInput&&d.handleInput.apply(d,arguments)}),onChange:n[2]||(n[2]=function(){return d.handleChange&&d.handleChange.apply(d,arguments)}),onFocus:n[3]||(n[3]=function(){return d.handleFocus&&d.handleFocus.apply(d,arguments)}),onBlur:n[4]||(n[4]=function(){return d.handleBlur&&d.handleBlur.apply(d,arguments)}),onKeyup:n[5]||(n[5]=withKeys(withModifiers((function(){return d.handleEscape&&d.handleEscape.apply(d,arguments)}),["exact"]),["esc"])),tabindex:l.tabindex,autofocus:l.autofocus},null,40,["modelValue","placeholder","disabled","tabindex","autofocus"]),renderSlot(e.$slots,"append")])},C.__file="src/components/input.vue";var D={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==k(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},collapseTags:{type:Boolean}},emits:["click"],setup:function(e,n){return {dataAttrs:inject("dataAttrs"),handleClick:function(e){n.emit("click",e);}}}};D.render=function(e,n,l,r,d,h){return openBlock(),createBlock("ul",mergeProps({class:["vue-tags",{collapsed:l.collapseTags}],onMousedown:n[1]||(n[1]=withModifiers((function(){}),["prevent"])),tabindex:"-1",onClick:n[2]||(n[2]=function(){return r.handleClick&&r.handleClick.apply(r,arguments)})},r.dataAttrs),[(openBlock(!0),createBlock(Fragment,null,renderList(l.modelValue,(function(n){return openBlock(),createBlock(Fragment,{key:n.key},[n.group?createCommentVNode("v-if",!0):(openBlock(),createBlock("li",{key:0,class:["vue-tag",{selected:n.selected}]},[renderSlot(e.$slots,"default",{option:n},(function(){return [createVNode("span",null,toDisplayString(n.label),1)]}))],2))],64)})),128))],16)},D.__file="src/components/tags.vue";var N={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==k(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},headerHeight:{required:!0,type:String}},emits:["click-item","mousemove"],setup:function(e,n){return {dataAttrs:inject("dataAttrs"),handleClickItem:function(e,l){l.disabled||n.emit("click-item",e,l);},handleMousemove:function(e,l){n.emit("mousemove",e,l);}}}};N.render=function(e,n,l,r,d,h){return openBlock(),createBlock("ul",mergeProps({class:"vue-dropdown",onMousedown:n[1]||(n[1]=withModifiers((function(){}),["prevent"])),style:{top:l.headerHeight}},r.dataAttrs),[(openBlock(!0),createBlock(Fragment,null,renderList(l.modelValue,(function(n){return openBlock(),createBlock(Fragment,{key:n.key},[n.visible&&!1===n.hidden?(openBlock(),createBlock("li",{key:0,onClick:function(e){return r.handleClickItem(e,n)},class:["vue-dropdown-item",{selected:n.selected,disabled:n.disabled,highlighted:n.highlighted,group:n.group}],onMousemove:function(e){return r.handleMousemove(e,n)}},[renderSlot(e.$slots,"default",{option:n},(function(){return [createVNode("span",null,toDisplayString(n.label),1)]}))],42,["onClick","onMousemove"])):createCommentVNode("v-if",!0)],64)})),128))],16)},N.__file="src/components/dropdown.vue";var E=function(e,n,l){var t=l.valueBy;return t(e)===t(n)},L=function(e,n,l){var t=l.valueBy;return e.some((function(e){return E(e,n,{valueBy:t})}))},j=function(e,n,l){var t=l.valueBy;return e.find((function(e){return t(e)===n}))},z=function(e,n,l){var t=l.max,u=l.valueBy;return L(e,n,{valueBy:u})||e.length>=t?e:e.concat(n)},$=function(e,n,l){var t=l.min,u=l.valueBy;return !1===L(e,n,{valueBy:u})||e.length<=t?e:e.filter((function(e){return !1===E(e,n,{valueBy:u})}))},_=function(e){return computed((function(){return "function"==typeof e.value?e.value:"string"==typeof e.value?function(n){return e.value.split(".").reduce((function(e,n){return e[n]}),n)}:function(e){return e}}))},P={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},emptyModelValue:{default:null},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabledBy:{default:"disabled",type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},clearOnClose:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean},groupBy:{default:"group",type:[String,Function]}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup:function(l,t){var u=function(n){return {labelBy:_(toRef(n,"labelBy")),valueBy:_(toRef(n,"valueBy")),disabledBy:_(toRef(n,"disabledBy")),groupBy:_(toRef(n,"groupBy")),min:computed((function(){return n.multiple?n.min:Math.min(1,n.min)})),max:computed((function(){return n.multiple?n.max:1})),options:isRef(n.options)||isReactive(n.options)?toRef(n,"options"):ref(n.options)}}(l),a=u.labelBy,o=u.valueBy,r=u.disabledBy,i=u.groupBy,d=u.min,c=u.max,p=u.options;getCurrentInstance();var s=ref(),v=ref(),f=ref(),V=computed((function(){var e;return null===(e=f.value)||void 0===e?void 0:e._.refs.input})),x=ref(!1);watch((function(){return x.value}),(function(){x.value?(t.emit("opened"),l.searchable?(V.value!==document.activeElement&&V.value.focus(),t.emit("search:focus")):s.value.focus()):(l.searchable?(V.value===document.activeElement&&V.value.blur(),l.clearOnClose&&Y(),t.emit("search:blur")):s.value.blur(),t.emit("closed"));}));var F=function(){l.disabled||(x.value=!0);},S=function(){x.value=!1;};watch((function(){return l.disabled}),(function(){return S()}));var k,O,C,T,D=ref(),N=(k=D,O=function(){return l.modelValue},C=ref("0"),watch(O,T=function(){nextTick((function(){k.value&&(C.value=window.getComputedStyle(k.value).height);}));}),onMounted(T),C),E=computed((function(){return l.searchable&&l.multiple&&l.taggable?"22px":"0px"})),P=computed((function(){return parseFloat(N.value)+parseFloat(E.value)+"px"})),Z=ref(""),W=computed((function(){return new RegExp(Z.value,"i")})),q=computed((function(){return Z.value?p.value.filter((function(e){return W.value.test(a.value(e))})):void 0})),R=ref([]),U=function(){if(l.multiple){if(!1===Array.isArray(l.modelValue))return !1;if(R.value.length!==l.modelValue.length)return !1;if(Object.keys(R.value).some((function(e){return R.value[e]!==j(p.value,l.modelValue[e],{valueBy:o.value})})))return !1}else {if(0===R.value.length&&l.modelValue!==l.emptyModelValue)return !1;if(1===R.value.length&&l.modelValue===l.emptyModelValue)return !1;if(R.value[0]!==j(p.value,l.modelValue,{valueBy:o.value}))return !1}return !0},H=function(){if(!U()){R.value=[];var e,n=A(l.multiple?l.modelValue:l.modelValue===l.emptyModelValue?[]:[l.modelValue]);try{for(n.s();!(e=n.n()).done;){var t=e.value,u=j(p.value,t,{valueBy:o.value});!1!==L(p.value,u,{valueBy:o.value})&&(R.value=z(R.value,u,{max:1/0,valueBy:o.value}));}}catch(e){n.e(e);}finally{n.f();}}};H(),watch((function(){return l.modelValue}),(function(){return H()}),{deep:!0});watch((function(){return R}),(function(){return function(){if(!U()){var e=R.value.map((function(e){return o.value(e)}));l.multiple?t.emit("update:modelValue",e):e.length?t.emit("update:modelValue",e[0]):t.emit("update:modelValue",l.emptyModelValue);}}()}),{deep:!0}),watch((function(){return p.value}),(function(){var e=new Set(R.value.map((function(e){return o.value(e)})));R.value=p.value.filter((function(n){return e.has(o.value(n))}));}),{deep:!0});var G=function(e,n){(n=n.originalOption).value.every((function(e){var n=j(p.value,e,{valueBy:o.value});return L(R.value,n,{valueBy:o.value})}))?n.value.forEach((function(e){var n=j(p.value,e,{valueBy:o.value});R.value=$(R.value,n,{min:d.value,valueBy:o.value}),t.emit("removed",n);})):n.value.forEach((function(e){var n=j(p.value,e,{valueBy:o.value});L(R.value,n,{valueBy:o.value})||(R.value=z(R.value,n,{max:c.value,valueBy:o.value}),t.emit("selected",n));}));},Q=function(e,n){if(n=n.originalOption,L(R.value,n,{valueBy:o.value}))R.value=$(R.value,n,{min:d.value,valueBy:o.value}),t.emit("removed",n);else {if(!l.multiple){var u=R.value[0];R.value=$(R.value,R.value[0],{min:0,valueBy:o.value}),t.emit("removed",u);}R.value=z(R.value,n,{max:c.value,valueBy:o.value}),t.emit("selected",n);}},Y=function(){V.value.value="",V.value.dispatchEvent(new Event("input")),V.value.dispatchEvent(new Event("change"));},K=computed((function(){var e,n;return null!==(e=null!==(n=l.visibleOptions)&&void 0!==n?n:q.value)&&void 0!==e?e:p.value})),J=ref(0),X=computed((function(){var e,n=new Set(R.value.map((function(e){return o.value(e)}))),t=new Set(K.value.map((function(e){return o.value(e)}))),u=p.value.map((function(e,u){var d={key:o.value(e),label:a.value(e),group:i.value(e),highlighted:u===J.value,originalIndex:u,originalOption:e};return d.selected=d.group?e.value.every((function(e){return n.has(e)})):n.has(o.value(e)),d.disabled=d.group?r.value(e)||e.value.every((function(e){var n=j(p.value,e,{valueBy:o.value});return r.value(n)})):r.value(e),d.visible=d.group?e.value.some((function(e){return t.has(e)})):t.has(o.value(e)),d.hidden=!!l.hideSelected&&(d.group?e.value.every((function(e){return n.has(e)})):n.has(o.value(e))),d})),d=A(u);try{for(d.s();!(e=d.n()).done;){var c=e.value;!1!==c.group&&(c.disabled&&function(){var e=new Set(c.originalOption.value);u.filter((function(n){return e.has(o.value(n.originalOption))})).forEach((function(e){return e.disabled=!0}));}());}}catch(e){d.e(e);}finally{d.f();}return u})),ee=function(e,n){var l=function(l){var u=e.value.find((function(e){return e.originalIndex===l}));return void 0!==u&&!1!==t(u)&&(n.value=l,!0)},t=function(e){return !e.disabled&&!e.hidden&&e.visible},u=computed((function(){return e.value.some((function(e){return t(e)}))}));return watchEffect((function(){if(!1===u.value&&(n.value=null),e.value.length<=n.value)for(var a=0,o=e.value.reverse();a<o.length;a++){var r=o[a];if(l(r.originalIndex))break}if(null===n.value||!1===t(e.value[n.value]))for(var i=0,d=e.value;i<d.length&&(r=d[i],!l(r.originalIndex));i++);})),{pointerForward:function(){if(!1!==u.value&&null!==n.value)for(var t=n.value+1;t!==n.value&&(e.value.length<=t&&(t=0),!l(t));)++t;},pointerBackward:function(){if(!1!==u.value&&null!==n.value)for(var t=n.value-1;t!==n.value&&(t<0&&(t=e.value.length-1),!l(t));)--t;},pointerSet:l}}(X,J),ne=ee.pointerForward,le=ee.pointerBackward,te=ee.pointerSet,ue=function(){var e,n=null===(e=s.value)||void 0===e?void 0:e.querySelector(".highlighted");if(n&&v.value){for(var l=getComputedStyle(n);n.offsetTop+parseFloat(l.height)+parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)>v.value.$el.clientHeight+v.value.$el.scrollTop;)v.value.$el.scrollTop=v.value.$el.scrollTop+parseFloat(l.height)+parseFloat(l.paddingTop)+parseFloat(l.paddingBottom);for(;n.offsetTop<v.value.$el.scrollTop;)v.value.$el.scrollTop=v.value.$el.scrollTop-parseFloat(l.height)-parseFloat(l.paddingTop)-parseFloat(l.paddingBottom);}},ae=computed((function(){return {"data-is-focusing":x.value,"data-visible-length":X.value.filter((function(e){return e.visible&&!1===e.hidden})).length,"data-not-selected-length":p.value.length-X.value.filter((function(e){return e.selected})).length,"data-selected-length":X.value.filter((function(e){return e.selected})).length,"data-addable":X.value.filter((function(e){return e.selected})).length<c.value,"data-removable":X.value.filter((function(e){return e.selected})).length>d.value,"data-total-length":p.value.length,"data-multiple":l.multiple}}));provide("dataAttrs",ae);var oe=computed((function(){var e=X.value.filter((function(e){return e.selected})).filter((function(e){return !e.group}));return l.multiple?0===e.length?l.placeholder:1===e.length?"1 option selected":e.length+" options selected":0===e.length?l.placeholder:e[0].label+""}));return {isFocusing:x,wrapper:s,dropdown:v,input:f,focus:F,blur:S,toggle:function(){x.value?S():F();},header:D,headerAndInputHeight:P,searchingInputValue:Z,handleInputForInput:function(e){t.emit("search:input",e);},handleChangeForInput:function(e){t.emit("search:change",e);},handleFocusForInput:function(e){F();},handleBlurForInput:function(e){S();},optionsWithInfo:X,addOrRemoveOption:function(e,n){l.disabled||(n.group&&l.multiple?G(e,n):Q(e,n),!0===l.closeOnSelect&&(x.value=!1),!0===l.clearOnSelect&&Z.value&&Y());},dataAttrs:ae,innerPlaceholder:oe,highlightedOriginalIndex:J,pointerForward:function(){ne.apply(void 0,arguments),nextTick(ue);},pointerBackward:function(){le.apply(void 0,arguments),nextTick(ue);},pointerSet:te}},components:{VInput:C,VTags:D,VDropdown:N},__VERSION__:"2.1.1"},Z={ref:"header",class:"vue-select-header"},W={key:0,class:"vue-input"},q={class:"icon loading"},R=createVNode("div",null,null,-1),U=createVNode("div",null,null,-1),H=createVNode("div",null,null,-1),G={class:"icon loading"},Q=createVNode("div",null,null,-1),Y=createVNode("div",null,null,-1),K=createVNode("div",null,null,-1);P.render=function(e,n,l,d,s,h){var g=resolveComponent("v-tags"),y=resolveComponent("v-input"),m=resolveComponent("v-dropdown");return openBlock(),createBlock("div",mergeProps({ref:"wrapper",class:["vue-select",{disabled:e.disabled}],tabindex:e.isFocusing?-1:e.tabindex,onFocus:n[10]||(n[10]=function(){return e.focus&&e.focus.apply(e,arguments)}),onBlur:n[11]||(n[11]=function(){return !e.searchable&&e.blur()})},e.dataAttrs,{onKeypress:n[12]||(n[12]=withKeys((function(){return null!==e.highlightedOriginalIndex&&e.addOrRemoveOption(e.$event,e.optionsWithInfo[e.highlightedOriginalIndex])}),["enter"])),onKeydown:[n[13]||(n[13]=withKeys(withModifiers((function(){return e.pointerForward&&e.pointerForward.apply(e,arguments)}),["prevent"]),["down"])),n[14]||(n[14]=withKeys(withModifiers((function(){return e.pointerBackward&&e.pointerBackward.apply(e,arguments)}),["prevent"]),["up"]))]}),[createVNode("div",Z,[e.multiple&&e.taggable&&0===e.modelValue.length||!1===e.searchable&&!1===e.taggable?(openBlock(),createBlock("div",W,[createVNode("input",{placeholder:e.innerPlaceholder,readonly:"",onClick:n[1]||(n[1]=function(){return e.focus&&e.focus.apply(e,arguments)})},null,8,["placeholder"])])):createCommentVNode("v-if",!0),e.multiple&&e.taggable?(openBlock(),createBlock(Fragment,{key:1},[createVNode(g,{modelValue:e.optionsWithInfo,"collapse-tags":e.collapseTags,tabindex:"-1",onClick:e.focus},{default:withCtx((function(n){var l=n.option;return [renderSlot(e.$slots,"tag",{option:l.originalOption},(function(){return [createVNode("span",null,toDisplayString(l.label),1),createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:withModifiers((function(){return e.addOrRemoveOption(e.$event,l)}),["prevent","stop"])},null,8,["onClick"])]}))]})),_:1},8,["modelValue","collapse-tags","onClick"]),createVNode("span",{class:["icon arrow-downward",{active:e.isFocusing}],onClick:n[2]||(n[2]=function(){return e.toggle&&e.toggle.apply(e,arguments)}),onMousedown:n[3]||(n[3]=withModifiers((function(){}),["prevent","stop"]))},null,34)],64)):(openBlock(),createBlock(Fragment,{key:2},[e.searchable?(openBlock(),createBlock(y,{key:0,ref:"input",modelValue:e.searchingInputValue,"onUpdate:modelValue":n[4]||(n[4]=function(n){return e.searchingInputValue=n}),disabled:e.disabled,placeholder:e.isFocusing?e.searchPlaceholder:e.innerPlaceholder,onInput:e.handleInputForInput,onChange:e.handleChangeForInput,onFocus:e.handleFocusForInput,onBlur:e.handleBlurForInput,onEscape:e.blur,autofocus:e.autofocus||e.taggable&&e.searchable,tabindex:e.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex"])):createCommentVNode("v-if",!0),withDirectives(createVNode("span",q,[R,U,H],512),[[vShow,e.loading]]),withDirectives(createVNode("span",{class:["icon arrow-downward",{active:e.isFocusing}],onClick:n[5]||(n[5]=function(){return e.toggle&&e.toggle.apply(e,arguments)}),onMousedown:n[6]||(n[6]=withModifiers((function(){}),["prevent","stop"]))},null,34),[[vShow,!1===e.loading]])],64))],512),e.multiple&&e.taggable&&e.searchable?withDirectives((openBlock(),createBlock(y,{key:0,ref:"input",modelValue:e.searchingInputValue,"onUpdate:modelValue":n[7]||(n[7]=function(n){return e.searchingInputValue=n}),disabled:e.disabled,placeholder:e.searchPlaceholder,onInput:e.handleInputForInput,onChange:e.handleChangeForInput,onFocus:e.handleFocusForInput,onBlur:e.handleBlurForInput,onEscape:e.blur,tabindex:e.tabindex,autofocus:e.autofocus||e.taggable&&e.searchable},{append:withCtx((function(){return [withDirectives(createVNode("span",G,[Q,Y,K],512),[[vShow,e.loading]])]})),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","tabindex","autofocus"])),[[vShow,e.isFocusing]]):createCommentVNode("v-if",!0),withDirectives(createVNode(m,{ref:"dropdown",modelValue:e.optionsWithInfo,"onUpdate:modelValue":n[8]||(n[8]=function(n){return e.optionsWithInfo=n}),onClickItem:e.addOrRemoveOption,onMousemove:n[9]||(n[9]=function(n,l){return e.pointerSet(l.originalIndex)}),"header-height":e.headerAndInputHeight},{default:withCtx((function(n){var l=n.option;return [renderSlot(e.$slots,"dropdown-item",{option:l.originalOption},(function(){return [createVNode("span",null,toDisplayString(l.label),1)]}))]})),_:1},8,["modelValue","onClickItem","header-height"]),[[vShow,e.isFocusing]])],16,["tabindex"])},P.__file="src/index.vue";

var script = {
  name: "SelectBox",
  components: {
    VueSelect: P
  },
  emits: ["change", "update:modelValue"],
  props: { ...P.props,
    options: [Array],
    modelValue: [String, Object, Number],
    smallFont: {
      type: Boolean,
      default: false
    },
    selectedText: {
      type: String,
      default: "Selected"
    },
    selectedItems: {
      type: Array,
      default: []
    }
  },

  setup(props, {
    emit,
    slots
  }) {
    const state = reactive({
      value: props.modelValue,
      list: JSON.parse(JSON.stringify(props.options)),
      isFocusing: false
    }),
          selectBox = ref(),
          isFocusing = computed(() => {
      if (selectBox && selectBox.value) return selectBox.value.isFocusing;
      return false;
    });

    const select = option => {
      emit("update:modelValue", option);
      emit("change", option);

      if (Array.isArray(option) && !slots["selected-items"]) {
        const inputEl = selectBox.value.wrapper.querySelector(".vue-input input");
        nextTick(() => inputEl.placeholder = props.selectedText + " " + option.length);
      }
    };

    watch(() => props.modelValue, current => {
      state.value = current;
    });
    watch(() => props.options, current => {
      state.list = current;
    });
    watch(() => isFocusing, current => {
      state.isFocusing = current;

      if (slots["selected-items"]) {
        state.value = props.selectedItems.map(u => u.value);
      }
    });
    watch(() => props.selectedItems, current => {
      const inputEl = selectBox.value.wrapper.querySelector(".vue-input input");
      inputEl.placeholder = props.placeholder;
    });

    const injectApplyButton = () => {
      const buttonApply = defineComponent({
        render() {
          return h("div", {
            onClick: () => selectBox.value.blur()
          }, slots["apply-button"]());
        }

      }),
            list = selectBox.value.wrapper.querySelector(".vue-dropdown"),
            li = document.createElement("li");
      li.classList.add("apply-item");
      list.appendChild(li);
      const app = createApp(buttonApply);
      app.mount(li);
    };

    const injectSelectedItems = () => {
      const header = selectBox.value.wrapper.querySelector(".vue-input");
      const itemComponent = defineComponent({
        render() {
          return h("div", {
            class: computed(() => !state.isFocusing ? "selected-items-slot selected-items-slot-show" : "selected-items-slot").value
          }, slots["selected-items"]());
        }

      });
      const container = document.createElement("div");
      header.appendChild(container);
      const app = createApp(itemComponent);
      app.mount(container);
    };

    const injectSelectedItem = () => {
      const header = selectBox.value.wrapper.querySelector(".vue-input");
      const itemComponent = defineComponent({
        render() {
          return h("div", {
            class: computed(() => !state.isFocusing ? "selected-item selected-item-show" : "selected-item").value
          }, slots["selected-item"]());
        }

      });
      const container = document.createElement("div");
      header.appendChild(container);
      const app = createApp(itemComponent);
      app.mount(container);
    };

    const injectIcon = () => {
      const icon = defineComponent({
        render() {
          return h("div", {
            class: "dropdown-icon-slot"
          }, h("div", {
            class: "icon-wrapper"
          }, slots["icon"]()));
        }

      }),
            container = selectBox.value.wrapper.querySelector(".vue-select-header .arrow-downward");
      const app = createApp(icon);
      app.mount(container);
    };

    onMounted(() => {
      if (slots["selected-items"]) {
        injectSelectedItems();
      }

      if (slots["apply-button"]) {
        injectApplyButton();
      }

      if (slots["selected-item"]) {
        injectSelectedItem();
      }

      if (slots["icon"]) {
        injectIcon();
      }
    });
    return { ...toRefs(state),
      select,
      selectBox
    };
  }

};

const _withId = /*#__PURE__*/withScopeId("data-v-0256f478");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_vue_select = resolveComponent("vue-select");

  return openBlock(), createBlock("div", {
    class: ["select-box-wrapper", {
      'image-item': _ctx.$slots['selected'],
      'small-font': $props.smallFont
    }]
  }, [createVNode(_component_vue_select, mergeProps(_ctx.$props, {
    modelValue: _ctx.value,
    "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => _ctx.value = $event), _cache[2] || (_cache[2] = value => $setup.select(value))],
    options: _ctx.list,
    ref: "selectBox"
  }), {
    "dropdown-item": _withId(({
      option
    }) => [renderSlot(_ctx.$slots, "default", {
      option: option
    })]),
    _: 1
  }, 16, ["modelValue", "options"])], 2);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "[data-v-0256f478]  .apply-item {\n  padding: 5px;\n  position: sticky;\n  bottom: 0px;\n  left: 0;\n  width: 100%;\n  background: white;\n  z-index: 1;\n}\n[data-v-0256f478]  .selected-item {\n  position: absolute;\n  top: 3px;\n  left: 5px;\n  right: 5px;\n  background: white;\n  display: grid;\n  grid-auto-flow: column;\n  grid-column-gap: 10px;\n  justify-content: flex-start;\n  align-items: center;\n  padding-right: 50px;\n}\n[data-v-0256f478]  .selected-items-slot {\n  display: none;\n}\n[data-v-0256f478]  .selected-items-slot-show {\n  display: block;\n}\n[data-v-0256f478]  .dropdown-icon-slot {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  right: 5px;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid white;\n  background: white;\n}\n[data-v-0256f478]  * {\n  box-sizing: border-box;\n  outline: none;\n}\n[data-v-0256f478]  .image-item {\n  display: flex;\n  align-items: center;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #363636;\n}\n[data-v-0256f478]  .image-item img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n[data-v-0256f478]  .vue-select {\n  position: relative;\n}\n[data-v-0256f478]  .vue-select .vue-select-header {\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  border: 1px solid #c3cad9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  text-align: center;\n  color: #363636;\n  cursor: pointer;\n}\n@media (max-width: 1200px) {\n[data-v-0256f478]  .vue-select .vue-select-header {\n    height: 45px;\n}\n}\n[data-v-0256f478]  .vue-select .icon {\n  border-left: 1px solid #c3cad9;\n  width: 54px;\n  height: 100%;\n  display: block;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex-shrink: 0;\n}\n[data-v-0256f478]  .vue-select .icon:before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: url(\"@/assets/images/dropdown_arrow.png\");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  transition: 0.5s;\n}\n[data-v-0256f478]  .vue-select .icon.active:before {\n  transform: translate(-50%, -50%) rotate(-180deg);\n}\n[data-v-0256f478]  .vue-select .vue-input {\n  width: 100%;\n}\n[data-v-0256f478]  .vue-select .vue-input input {\n  color: #363636;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  height: 100%;\n  outline: 0;\n  border: 0;\n  padding-left: 25px;\n  width: 100%;\n}\n[data-v-0256f478]  .vue-select .vue-input input::placeholder {\n  color: #363636;\n}\n[data-v-0256f478]  .vue-dropdown {\n  width: 100%;\n  position: absolute;\n  z-index: 999;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: white;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);\n  border-radius: 8px;\n  margin-top: 17px;\n  max-height: 300px;\n  overflow: auto;\n}\n[data-v-0256f478]  .vue-dropdown .vue-dropdown-item {\n  cursor: pointer;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n[data-v-0256f478]  .vue-dropdown .vue-dropdown-item.selected,[data-v-0256f478]  .vue-dropdown .vue-dropdown-item:hover {\n  background: #f9fcff;\n}\n[data-v-0256f478]  .vue-dropdown[data-multiple=true] .vue-dropdown-item {\n  position: relative;\n  padding-left: 40px;\n}\n[data-v-0256f478]  .vue-dropdown[data-multiple=true] .vue-dropdown-item::after {\n  content: \"\";\n  display: block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #363636;\n  box-sizing: border-box;\n  border-radius: 4px;\n  position: absolute;\n  left: 17px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[data-v-0256f478]  .vue-dropdown[data-multiple=true] .vue-dropdown-item.selected::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  left: 22px;\n  top: 50%;\n  margin-top: -2px;\n  transform: translateY(-50%) rotate(45deg);\n  height: 9px;\n  width: 4px;\n  border-bottom: 2px solid white;\n  border-right: 2px solid white;\n}\n[data-v-0256f478]  .vue-dropdown[data-multiple=true] .vue-dropdown-item.selected::after {\n  border: 0;\n  background: #0f8af9;\n}\n.image-item[data-v-0256f478] .vue-select .vue-input input {\n  padding-left: 60px;\n}\n.small-font[data-v-0256f478] .image-item {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-0256f478";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('VueSelectBox', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
