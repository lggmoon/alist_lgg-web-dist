import{a as c,m as n,a5 as p,h as e,ae as u,C as r,dD as g,dE as d,a1 as a,dC as f}from"./index.a0597adf.js";import{F as h}from"./File.b0fbd113.js";import"./icon.908629b6.js";import"./index.0ece6518.js";import"./Layout.1eb03db6.js";import"./useTitle.3f4acbac.js";import"./index.244b91b4.js";import"./FolderTree.1124b2c9.js";import"./index.d30e332e.js";const R=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};
