import{a as o,v as r,a8 as l,o as s,k as m,B as d,n as c,by as p,j as f}from"./index.f13df184.js";import{C as h}from"./index.4d06da93.js";import"./index.04a3b06f.js";import"./index.1b5821d3.js";import{u as g}from"./useECharts.4e592c1a.js";import"./index.945fec30.js";import"./warning.258b52df.js";import"./responsiveObserve.056994ac.js";const S=o({__name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=r(null),{setOptions:u}=g(t);return l(()=>a.loading,()=>{a.loading||u({tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"\u7535\u5B50\u4EA7\u54C1"},{value:310,name:"\u670D\u88C5"},{value:274,name:"\u5316\u5986\u54C1"},{value:400,name:"\u5BB6\u5C45"}].sort(function(n,i){return n.value-i.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(n,i)=>(s(),m(f(h),{title:"\u6210\u4EA4\u5360\u6BD4",loading:e.loading},{default:d(()=>[c("div",{ref_key:"chartRef",ref:t,style:p({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{S as default};
