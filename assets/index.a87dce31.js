import{v as o,as as k,ac as X,L as i,an as Z,a as D,a7 as G,f as J,Z as K,a8 as I,O as E,d4 as Y,S as l,p as g,_ as m,cQ as $,T as P}from"./index.f13df184.js";import{R as T,r as ee}from"./responsiveObserve.056994ac.js";import{u as ae}from"./useSize.e0e747e5.js";function re(){var h=o({}),e=null;return k(function(){e=T.subscribe(function(p){h.value=p})}),X(function(){T.unsubscribe(e)}),h}var te={prefixCls:i.string,shape:i.oneOf(Z("circle","square")).def("circle"),size:{type:[Number,String,Object],default:function(){return"default"}},src:i.string,srcset:i.string,icon:i.VNodeChild,alt:i.string,gap:i.number,draggable:i.bool,loadError:{type:Function}},ne=D({name:"AAvatar",inheritAttrs:!1,props:te,slots:["icon"],setup:function(e,p){var y=p.slots,b=p.attrs,x=o(!0),R=o(!1),S=o(1),z=o(null),C=o(null),O=G("avatar",e),W=O.prefixCls,N=ae(),w=re(),u=J(function(){if(K(e.size)==="object"){var r=ee.find(function(t){return w.value[t]}),a=e.size[r];return a}}),H=function(a){return u.value?{width:"".concat(u.value,"px"),height:"".concat(u.value,"px"),lineHeight:"".concat(u.value,"px"),fontSize:"".concat(a?u.value/2:18,"px")}:{}},_=function(){if(!(!z.value||!C.value)){var a=z.value.offsetWidth,t=C.value.offsetWidth;if(a!==0&&t!==0){var v=e.gap,c=v===void 0?4:v;c*2<t&&(S.value=t-c*2<a?(t-c*2)/a:1)}}},L=function(){var a=e.loadError,t=a==null?void 0:a();t!==!1&&(x.value=!1)};return I(function(){return e.src},function(){E(function(){x.value=!0,S.value=1})}),I(function(){return e.gap},function(){E(function(){_()})}),k(function(){E(function(){_(),R.value=!0})}),function(){var r,a,t=e.shape,v=e.size,c=e.src,B=e.alt,F=e.srcset,M=e.draggable,f=Y(y,e,"icon"),s=W.value,n=v==="default"?N.value:v,V=(r={},l(r,"".concat(b.class),!!b.class),l(r,s,!0),l(r,"".concat(s,"-lg"),n==="large"),l(r,"".concat(s,"-sm"),n==="small"),l(r,"".concat(s,"-").concat(t),t),l(r,"".concat(s,"-image"),c&&x.value),l(r,"".concat(s,"-icon"),f),r),q=typeof n=="number"?{width:"".concat(n,"px"),height:"".concat(n,"px"),lineHeight:"".concat(n,"px"),fontSize:f?"".concat(n/2,"px"):"18px"}:{},j=(a=y.default)===null||a===void 0?void 0:a.call(y),d;if(c&&x.value)d=g("img",{draggable:M,src:c,srcset:F,onError:L,alt:B},null);else if(f)d=f;else if(R.value||S.value!==1){var A="scale(".concat(S.value,") translateX(-50%)"),Q={msTransform:A,WebkitTransform:A,transform:A},U=typeof n=="number"?{lineHeight:"".concat(n,"px")}:{};d=g($,{onResize:_},{default:function(){return[g("span",{class:"".concat(s,"-string"),ref:z,style:m(m({},U),Q)},[j])]}})}else d=g("span",{class:"".concat(s,"-string"),ref:z,style:{opacity:0}},[j]);return g("span",P(P({},b),{},{ref:C,class:V,style:m(m(m({},q),H(!!f)),b.style)}),[d])}}}),oe=ne;export{oe as A,te as a,re as u};
