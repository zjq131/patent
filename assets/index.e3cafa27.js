import{a as j,L as s,a7 as F,f as b,R,S as d,p as t,ct as O,cu as q,v as z,aj as D,F as G,cv as H,b7 as J}from"./index.f13df184.js";var K=j({name:"ACheckableTag",props:{prefixCls:s.string,checked:s.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(e,i){var o=i.slots,r=i.emit,h=F("tag",e),u=h.prefixCls,n=function(g){var v=e.checked;r("update:checked",!v),r("change",!v),r("click",g)},k=b(function(){var l;return R(u.value,(l={},d(l,"".concat(u.value,"-checkable"),!0),d(l,"".concat(u.value,"-checkable-checked"),e.checked),l))});return function(){var l;return t("span",{class:k.value,onClick:n},[(l=o.default)===null||l===void 0?void 0:l.call(o)])}}}),p=K,M=new RegExp("^(".concat(O.join("|"),")(-inverse)?$")),Q=new RegExp("^(".concat(q.join("|"),")$")),U={prefixCls:s.string,color:{type:String},closable:s.looseBool.def(!1),closeIcon:s.VNodeChild,visible:s.looseBool,onClose:{type:Function},icon:s.VNodeChild},C=j({name:"ATag",props:U,emits:["update:visible","close"],slots:["closeIcon","icon"],setup:function(e,i){var o=i.slots,r=i.emit,h=i.attrs,u=F("tag",e),n=u.prefixCls,k=u.direction,l=z(!0);D(function(){e.visible!==void 0&&(l.value=e.visible)});var g=function(c){c.stopPropagation(),r("update:visible",!1),r("close",c),!c.defaultPrevented&&e.visible===void 0&&(l.value=!1)},v=b(function(){var a=e.color;return a?M.test(a)||Q.test(a):!1}),S=b(function(){var a;return R(n.value,(a={},d(a,"".concat(n.value,"-").concat(e.color),v.value),d(a,"".concat(n.value,"-has-color"),e.color&&!v.value),d(a,"".concat(n.value,"-hidden"),!l.value),d(a,"".concat(n.value,"-rtl"),k.value==="rtl"),a))});return function(){var a,c,m,x=e.icon,w=x===void 0?(a=o.icon)===null||a===void 0?void 0:a.call(o):x,I=e.color,T=e.closeIcon,y=T===void 0?(c=o.closeIcon)===null||c===void 0?void 0:c.call(o):T,N=e.closable,B=N===void 0?!1:N,E=function(){return B?y?t("div",{class:"".concat(n.value,"-close-icon"),onClick:g},[y]):t(J,{class:"".concat(n.value,"-close-icon"),onClick:g},null):null},V={backgroundColor:I&&!v.value?I:void 0},P=w||null,_=(m=o.default)===null||m===void 0?void 0:m.call(o),A=P?t(G,null,[P,t("span",null,[_])]):_,W="onClick"in h,$=t("span",{class:S.value,style:V},[A,E()]);return W?t(H,null,{default:function(){return[$]}}):$}}});C.CheckableTag=p;C.install=function(f){return f.component(C.name,C),f.component(p.name,p),f};var Y=C;export{Y as T};
