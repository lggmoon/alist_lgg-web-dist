System.register(["./index-legacy.d914b7f0.js"],(function(e){"use strict";var n,t,r,a,s,c,g,i,l,u,o,d,m,h,p,f,v,$,I,b;return{setters:[e=>{n=e.h,t=e.bP,r=e.au,a=e.a,s=e.n,c=e.m,g=e.aW,i=e.b9,l=e.cj,u=e.e,o=e.a4,d=e.G,m=e.ar,h=e.E,p=e.I,f=e.ae,v=e.C,$=e.bG,I=e.aY,b=e.dl}],execute:function(){const w=e("Shower",{string:e=>n(t,{get children(){return e.content}}),image:e=>n(r,{get src(){return e.content}})}),y=()=>{const e=a();s.info(e("manage.messenger-tips"));const[r,y]=c(""),[x,C]=g((()=>i.post("/admin/message/get"))),[S,j]=g((()=>i.post("/admin/message/send",{message:r()}))),[k,G]=l([]),z=async()=>{const e=await C();$(e,(e=>{G(b((n=>n.push(e))))}))},E=async()=>{const e=await j();I(e)},M=setInterval(z,1e3);return u((()=>clearInterval(M))),n(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[n(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[n(t,{size:"xl",get children(){return e("manage.received_msgs")}}),n(d,{each:k,children:e=>n(m,h({get component(){return w[e.type]}},e))})]}}),n(p,{w:"$full",get value(){return r()},onInput:e=>y(e.currentTarget.value)}),n(f,{spacing:"$2",get children(){return[n(v,{colorScheme:"accent",get loading(){return x()},onClick:z,get children(){return e("manage.receive")}}),n(v,{get loading(){return S()},onClick:E,get children(){return e("manage.send")}})]}})]}})};e({Messenger:y,default:y})}}}));
