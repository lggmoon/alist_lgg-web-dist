import{a as v,b as C,aW as l,b9 as r,cj as $,cT as w,m as I,h as t,cU as R,E as T,ba as o,n as p,ae as L,C as u,a4 as _}from"./index.537ea6b4.js";import{b as x}from"./useTitle.79657caa.js";import{I as j}from"./SettingItem.425668ac.js";import{R as B}from"./ResponsiveGrid.acd9ef06.js";import"./index.7a11b862.js";import"./index.02bb9cb7.js";import"./index.e8c0500c.js";import"./item_type.be442da4.js";const W=m=>{const s=v(),{pathname:d}=C();x(`manage.sidemenu.${d().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${m.group}`)),[c,i]=$([]),a=async()=>{const e=await f();o(e,i)};a();const[S,b]=l(()=>r.post("/admin/setting/save",w(c))),[k,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(B,{get children(){return t(R,{each:c,children:(e,D)=>t(j,T(e,{onChange:n=>{i(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(L,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(u,{get loading(){return S()},onClick:async()=>{const e=await b();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{W as default};
