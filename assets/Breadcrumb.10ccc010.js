var L=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&R(e,r,t[r]);if(P)for(var r of P(t))O.call(t,r)&&R(e,r,t[r]);return e},B=(e,t)=>T(e,V(t));var w=(e,t,r)=>new Promise((h,p)=>{var b=u=>{try{f(r.next(u))}catch(c){p(c)}},d=u=>{try{f(r.throw(u))}catch(c){p(c)}},f=u=>u.done?h(u.value):Promise.resolve(u.value).then(b,d);f((r=r.apply(e,t)).next())});import{av as j,a as G,bf as q,au as F,v as H,bn as J,b as K,bP as Q,a$ as U,c as W,aj as X,bp as Y,bL as Z,bl as x,ez as ee,aw as y,o as g,i as E,p as te,B as M,k as A,l as ne,t as S,C as ae,r as re,d9 as se}from"./index.f13df184.js";import{B as D}from"./index.7372306c.js";const oe=G({name:"LayoutBreadcrumb",components:{Icon:q,[D.name]:D},props:{theme:F.oneOf(["dark","light"])},setup(){const e=H([]),{currentRoute:t}=J(),{prefixCls:r}=K("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=Q(),p=U(),{t:b}=W();X(()=>w(this,null,function*(){var C,I,$;if(t.value.name===Y)return;const s=yield Z(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const i=x(s,o),m=s.filter(N=>N.path===i[0]),l=d(m,i);if(!l||l.length===0)return;const _=f(l);(I=t.value.meta)!=null&&I.currentActiveMenu&&_.push(B(k({},t.value),{name:(($=t.value.meta)==null?void 0:$.title)||t.value.name})),e.value=_}));function d(s,n){const a=[];return s.forEach(o=>{var i,m;n.includes(o.path)&&a.push(B(k({},o),{name:((i=o.meta)==null?void 0:i.title)||o.name})),(m=o.children)!=null&&m.length&&a.push(...d(o.children,n))}),a}function f(s){return ee(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:i,hideBreadcrumb:m}=a;return!(!i||m)}).filter(n=>{var a;return!((a=n.meta)!=null&&a.hideBreadcrumb)})}function u(s,n,a){a==null||a.preventDefault();const{children:o,redirect:i,meta:m}=s;if((o==null?void 0:o.length)&&!i){a==null||a.stopPropagation();return}if(!(m!=null&&m.carryParam))if(i&&se(i))p(i);else{let l="";n.length===1?l=n[0]:l=`${n.slice(1).pop()||""}`,l=/^\//.test(l)?l:`/${l}`,p(l)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:b,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:u,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,p,b){const d=y("Icon"),f=y("router-link"),u=y("a-breadcrumb");return g(),E("div",{class:re([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[te(u,{routes:e.routes},{itemRender:M(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(g(),A(d,{key:0,icon:e.getIcon(c)},null,8,["icon"])):ne("",!0),e.hasRedirect(v,c)?(g(),A(f,{key:2,to:"",onClick:n=>e.handleClick(c,s,n)},{default:M(()=>[ae(S(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(g(),E("span",ce,S(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var fe=j(oe,[["render",ie]]);export{fe as default};
