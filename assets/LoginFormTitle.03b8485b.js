var d=(e,t,o)=>new Promise((n,i)=>{var g=r=>{try{s(o.next(r))}catch(c){i(c)}},f=r=>{try{s(o.throw(r))}catch(c){i(c)}},s=r=>r.done?n(r.value):Promise.resolve(r.value).then(g,f);s((o=o.apply(e,t)).next())});import{v as _,f as u,c as y,j as a,a as F,o as R,i as P,t as v}from"./index.f13df184.js";var l=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e))(l||{});const m=_(0);function S(){function e(n){m.value=n}const t=u(()=>m.value);function o(){e(0)}return{setLoginState:e,getLoginState:t,handleBackLogin:o}}function I(e){function t(){return d(this,null,function*(){const o=a(e);return o?yield o.validate():void 0})}return{validForm:t}}function O(e){const{t}=y(),o=u(()=>p(t("sys.login.accountPlaceholder"))),n=u(()=>p(t("sys.login.passwordPlaceholder"))),i=(s,r)=>d(this,null,function*(){return r?Promise.resolve():Promise.reject(t("sys.login.policyPlaceholder"))}),g=s=>(r,c)=>d(this,null,function*(){return c?c!==s?Promise.reject(t("sys.login.diffPwd")):Promise.resolve():Promise.reject(t("sys.login.passwordPlaceholder"))});return{getFormRules:u(()=>{const s=a(o),r=a(n);switch(a(m)){case 1:return{account:s,password:r,confirmPassword:[{validator:g(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:i,trigger:"change"}]};default:return{account:s,password:r}}})}}function p(e){return[{required:!0,message:e,trigger:"change"}]}const T={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},h=F({__name:"LoginFormTitle",setup(e){const{t}=y(),{getLoginState:o}=S(),n=u(()=>({[l.RESET_PASSWORD]:t("sys.login.forgetFormTitle"),[l.LOGIN]:t("sys.login.signInFormTitle"),[l.REGISTER]:t("sys.login.signUpFormTitle"),[l.MOBILE]:t("sys.login.mobileSignInFormTitle"),[l.QR_CODE]:t("sys.login.qrSignInFormTitle")})[a(o)]);return(i,g)=>(R(),P("h2",T,v(a(n)),1))}});var b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{l as L,h as _,O as a,I as b,b as c,S as u};
