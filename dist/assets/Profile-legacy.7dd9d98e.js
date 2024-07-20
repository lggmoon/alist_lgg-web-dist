System.register(["./index-legacy.94c44daa.js","./useTitle-legacy.a940a42d.js","./index-legacy.0c078113.js","./webauthn-json.browser-ponyfill-legacy.8ddd819a.js"],(function(e){"use strict";var r,n,t,s,i,a,c,o,u,l,d,g,h,p,w,_,m,f,b,$,y,v,k,C,I,x,S,j,T,E,G,L,P,U,D,F,J,R,z,A;return{setters:[e=>{r=e.a,n=e.aW,t=e.b9,s=e.m,i=e.h,a=e.cZ,c=e.a4,o=e.bP,u=e.C,l=e.ba,d=e.n,g=e.S,h=e.b,p=e.ah,w=e.c_,_=e.e,m=e.ag,f=e.aJ,b=e.c$,$=e.d0,y=e.d1,v=e.d2,k=e.ae,C=e.b5,I=e.d3,x=e.bA,S=e.bn,j=e.I,T=e.F,E=e.az,G=e.a8,L=e.G,P=e.aG,U=e.ck,D=e.bG},e=>{F=e.b},e=>{J=e.L},e=>{R=e.s,z=e.c,A=e.b}],execute:function(){const B=e=>{const h=r(),[p,w]=n((()=>t.post("/authn/delete_authn",{id:e.id}))),[_,m]=s(!1);return i(g,{get when(){return!_()},get children(){return i(a,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[i(c,{w:"$full",alignItems:"start",spacing:"$1",get children(){return i(o,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+e.fingerprint+"\tID: "+e.id}})}}),i(a,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return i(u,{colorScheme:"danger",get loading(){return p()},onClick:async()=>{const e=await w();l(e,(()=>{d.success(h("global.delete_success")),m(!0)}))},get children(){return h("global.delete")}})}})]}})}})},N=e=>i(U,{get colorScheme(){return e.can?"success":"danger"},get children(){return e.children}});e("default",(()=>{const e=r();F("manage.sidemenu.profile");const{searchParams:a,to:U}=h(),[O,W]=s(p().username),[X,Z]=s(""),[q,H]=s(""),K=f("sso_compatibility_mode"),[M,Q]=n((e=>t.post("/me/update",{username:e?p().username:O(),password:e?"":X(),sso_id:p().sso_id}))),[V,Y]=n((()=>t.get("/authn/getcredentials"))),[,ee]=n((()=>t.get("/authn/webauthn_begin_registration"))),[re,ne]=n(((e,r)=>t.post("/authn/webauthn_finish_registration",JSON.stringify(r),{headers:{session:e}}))),te=async r=>{if(X()&&X()!==q())return void d.warning(e("users.confirm_password_not_same"));const n=await Q(r);l(n,(()=>{w({...p(),username:O()}),r?U(""):(d.success(e("users.update_profile_success")),U(`/@login?redirect=${encodeURIComponent(location.pathname)}`))}))},se=a.sso_id;function ie(e){const r=e.data;r.sso_id&&(w({...p(),sso_id:r.sso_id}),te(!0))}se&&(w({...p(),sso_id:se}),te(!0)),window.addEventListener("message",ie),_((()=>{window.removeEventListener("message",ie)}));const[ae,ce]=s([]);return R()&&!m.is_guest(p())&&f("webauthn_login_enabled")&&(async()=>{const e=await Y();D(e,ce)})(),i(c,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[i(g,{get when(){return!m.is_guest(p())},get fallback(){return[i(b,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[i($,{mr:"$2_5"}),i(y,{mr:"$2_5",get children(){return e("users.guest-tips")}}),i(v,{get children(){return e("users.modify_nothing")}})]}}),i(k,{spacing:"$2",get children(){return[i(C,{get children(){return e("global.have_account")}}),i(C,{color:"$info9",as:J,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return e("global.go_login")}})]}})]},get children(){return[i(o,{get children(){return e("users.update_profile")}}),i(I,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return i(x,{get children(){return[i(S,{for:"username",get children(){return e("users.change_username")}}),i(j,{id:"username",get value(){return O()},onInput:e=>{W(e.currentTarget.value)}})]}})}}),i(I,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[i(x,{get children(){return[i(S,{for:"password",get children(){return e("users.change_password")}}),i(j,{id:"password",type:"password",placeholder:"********",get value(){return X()},onInput:e=>{Z(e.currentTarget.value)}}),i(T,{get children(){return e("users.change_password-tips")}})]}}),i(x,{get children(){return[i(S,{for:"confirm-password",get children(){return e("users.confirm_password")}}),i(j,{id:"confirm-password",type:"password",placeholder:"********",get value(){return q()},onInput:e=>{H(e.currentTarget.value)}}),i(T,{get children(){return e("users.confirm_password-tips")}})]}})]}}),i(k,{spacing:"$2",get children(){return[i(u,{get loading(){return M()},onClick:[te,!1],get children(){return e("global.save")}}),i(g,{get when(){return!p().otp},get children(){return i(u,{colorScheme:"accent",onClick:()=>{U("/@manage/2fa")},get children(){return e("users.enable_2fa")}})}})]}})]}}),i(g,{get when(){return E((()=>!!f("sso_login_enabled")))()&&!m.is_guest(p())},get children(){return[i(o,{get children(){return e("users.sso_login")}}),i(k,{spacing:"$2",get children(){return i(g,{get when(){return p().sso_id},get fallback(){return i(u,{onClick:()=>{const e=t.getUri()+"/auth/sso?method=get_sso_id";K?window.location.href=e:window.open(e,"authPopup","width=500,height=600")},get children(){return e("users.connect_sso")}})},get children(){return i(u,{colorScheme:"danger",get loading(){return M()},onClick:()=>{w({...p(),sso_id:""}),te(!0)},get children(){return e("users.disconnect_sso")}})}})}})]}}),i(g,{get when(){return E((()=>!m.is_guest(p())))()&&f("webauthn_login_enabled")},get children(){return[i(o,{get children(){return e("users.webauthn")}}),i(k,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return i(G,{get loading(){return V()},get children(){return i(L,{get each(){return ae()},children:e=>i(B,{get id(){return e.id},get fingerprint(){return e.fingerprint}})})}})}}),i(u,{get loading(){return re()},onClick:async()=>{if(!R())return void d.error(e("users.webauthn_not_supported"));const r=await ee();l(r,(async r=>{const n=z(r.options),t=r.session;try{const r=await A(n);l(await ne(t,r),(()=>{d.success(e("users.add_webauthn_success"))}))}catch(s){s instanceof Error&&d.error(s.message)}}))},get children(){return e("users.add_webauthn")}})]}}),i(k,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return i(L,{each:P,children:(r,n)=>i(N,{get can(){return m.can(p(),n())},get children(){return e(`users.permissions.${r}`)}})})}})]}})}))}}}));
