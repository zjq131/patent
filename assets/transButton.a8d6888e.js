import{a as O,L as u,v as S,as as h,_ as c,p as x,T as d,b3 as b}from"./index.f13df184.js";var K=globalThis&&globalThis.__rest||function(t,l){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)l.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]]);return r},w={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},B=O({name:"TransButton",inheritAttrs:!1,props:{noStyle:u.looseBool,onClick:u.func,disabled:u.looseBool,autofocus:u.looseBool},setup:function(l,r){var e=r.slots,o=r.emit,y=r.attrs,p=r.expose,i=S(),k=function(n){var s=n.keyCode;s===b.ENTER&&n.preventDefault()},m=function(n){var s=n.keyCode;s===b.ENTER&&o("click",n)},C=function(n){o("click",n)},v=function(){i.value&&i.value.focus()},T=function(){i.value&&i.value.blur()};return h(function(){l.autofocus&&v()}),p({focus:v,blur:T}),function(){var a,n=l.noStyle,s=l.disabled,g=K(l,["noStyle","disabled"]),f={};return n||(f=c({},w)),s&&(f.pointerEvents="none"),x("div",d(d(d({role:"button",tabindex:0,ref:i},g),y),{},{onClick:C,onKeydown:k,onKeyup:m,style:c(c({},f),y.style||{})}),[(a=e.default)===null||a===void 0?void 0:a.call(e)])}}}),j=B;export{j as T};
