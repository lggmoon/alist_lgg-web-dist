System.register(["./index-legacy.94c44daa.js"],(function(e){"use strict";var t,r,n,a,o,c,i,s;return{setters:[e=>{t=e.b,r=e.aW,n=e.b9,a=e._,o=e.h,c=e.a7,i=e.a8,s=e.ba}],execute:function(){e("default",(()=>{const{pathname:e}=t(),[u,d]=r((()=>n.post("/fs/other",{path:e(),password:a(),method:"doc_preview"})));return(async()=>{const e=await d();s(e,(e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})}))})(),o(i,{get loading(){return u()},get children(){return o(c,{w:"$full",h:"70vh",id:"office-preview"})}})}))}}}));
