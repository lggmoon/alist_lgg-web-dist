import{a as c,m as n,a5 as p,h as e,ae as u,C as r,dA as g,dB as d,a1 as a,dz as f}from"./index.416e00a4.js";import{F as h}from"./File.d50938b8.js";import"./icon.30f829d3.js";import"./index.175fd00b.js";import"./Layout.786bcb18.js";import"./useTitle.1e0254a4.js";import"./index.ae6c1a78.js";import"./FolderTree.1099eb94.js";import"./index.a409d4f3.js";const B=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};
