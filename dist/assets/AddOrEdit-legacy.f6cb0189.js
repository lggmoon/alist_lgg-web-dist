System.register(["./index-legacy.94c44daa.js","./FolderTree-legacy.79851566.js","./index-legacy.0c078113.js"],(function(e){"use strict";var t,r,n,a,u,l,s,c,i,g,d,h,o,p,b,m,y,f,w,_,x,v,$,C;return{setters:[e=>{t=e.a,r=e.b,n=e.cj,a=e.aW,u=e.b9,l=e.h,s=e.a4,c=e.bP,i=e.bA,g=e.bn,d=e.G,h=e.C,o=e.ba,p=e.n,b=e.a8,m=e.bQ,y=e.az,f=e.I,w=e.bz,_=e.T,x=e.ch,v=e.S,$=e.F},e=>{C=e.a},()=>{}],execute:function(){const k=e=>{const r=t();return l(i,{w:"$full",display:"flex",flexDirection:"column",get children(){return[l(g,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),l(m,{w:"$full",get direction(){return"bool"===e.type?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[y((()=>y((()=>"string"===e.type))()?l(f,{get id(){return e.name},get value(){return e.value},onInput:t=>e.onChange(t.currentTarget.value)}):y((()=>"bool"===e.type))()?l(w,{get id(){return e.name},get checked(){return e.value},onChange:t=>e.onChange(t.currentTarget.checked)}):l(_,{get id(){return e.name},get value(){return e.value},onChange:t=>e.onChange(t.currentTarget.value)}))),l(i,{w:"fit-content",display:"flex",get children(){return l(x,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:t=>e.onSub(t.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),l(v,{get when(){return e.help},get children(){return l($,{get children(){return r(`metas.${e.name}_help`)}})}})]}})};e("default",(()=>{const e=t(),{params:m,back:y}=r(),{id:f}=m,[w,_]=n({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1,header:"",header_sub:!1}),[x,v]=a((()=>u.get(`/admin/meta/get?id=${f}`)));f&&(async()=>{const e=await v();o(e,_)})();const[$,S]=a((()=>u.post("/admin/meta/"+(f?"update":"create"),w)));return l(b,{get loading(){return x()},get children(){return l(s,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[l(c,{get children(){return e("global."+(f?"edit":"add"))}}),l(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[l(g,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),l(C,{id:"path",get value(){return w.path},onChange:e=>_("path",e)})]}}),l(d,{each:[{name:"password",type:"string",sub:"p_sub"},{name:"write",type:"bool",sub:"w_sub"},{name:"hide",type:"text",sub:"h_sub",help:!0},{name:"header",type:"text",sub:"header_sub",help:!0},{name:"readme",type:"text",sub:"r_sub",help:!0}],children:e=>l(k,{get name(){return e.name},get type(){return e.type},get value(){return w[e.name]},onChange:t=>_(e.name,t),get sub(){return w[e.sub]},onSub:t=>_(e.sub,t),get help(){return e.help}})}),l(h,{get loading(){return $()},onClick:async()=>{const t=await S();o(t,(()=>{p.success(e("global.save_success")),y()}))},get children(){return e("global."+(f?"save":"add"))}})]}})}})}))}}}));
