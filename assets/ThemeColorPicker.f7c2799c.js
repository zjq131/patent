import{av as m,a as l,dd as c,b as d,aw as u,o as r,i as o,F as C,ay as _,r as a,by as f,p as k}from"./index.f13df184.js";import{b as v}from"./index.0cb66df8.js";import"./index.c4b6df0c.js";import"./FullscreenOutlined.d9c26082.js";import"./index.604d9be5.js";import"./useWindowSizeFn.9af2568f.js";import"./useContentViewHeight.d66c3803.js";import"./useSortable.a609ba8e.js";import"./_baseIteratee.afed0e27.js";import"./_baseIsEqual.cda019a9.js";import"./get.3bd42a14.js";import"./index.04a3b06f.js";import"./warning.258b52df.js";import"./lock.674165b6.js";import"./ArrowLeftOutlined.26b3b245.js";import"./isEqual.1f535f8c.js";import"./index.da701b09.js";const h=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&v(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var G=m(h,[["render",$]]);export{G as default};
