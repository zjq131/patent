import{av as s,a as p,b as d,c as l,f as m,aw as c,o as h,i as u,n as f,t as C,p as g,aC as _,r as v}from"./index.f13df184.js";import{S as y}from"./index.9df9d0d8.js";import{b as S}from"./index.0cb66df8.js";import"./index.c4b6df0c.js";import"./FullscreenOutlined.d9c26082.js";import"./index.604d9be5.js";import"./useWindowSizeFn.9af2568f.js";import"./useContentViewHeight.d66c3803.js";import"./useSortable.a609ba8e.js";import"./_baseIteratee.afed0e27.js";import"./_baseIsEqual.cda019a9.js";import"./get.3bd42a14.js";import"./index.04a3b06f.js";import"./warning.258b52df.js";import"./lock.674165b6.js";import"./ArrowLeftOutlined.26b3b245.js";import"./isEqual.1f535f8c.js";import"./index.da701b09.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=d("setting-switch-item"),{t:n}=l(),o=m(()=>e.def?{checked:e.def}:{});function a(i){e.event&&S(e.event,i)}return{prefixCls:t,t:n,handleChange:a,getBindValue:o}}});function w(e,t,n,o,a,i){const r=c("Switch");return h(),u("div",{class:v(e.prefixCls)},[f("span",null,C(e.title),1),g(r,_(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var L=s(b,[["render",w],["__scopeId","data-v-fd7354e2"]]);export{L as default};
