System.register(["./index-legacy.94c44daa.js","./icon-legacy.92315b63.js","./video_box-legacy.fc874735.js","./hls-legacy.90b71585.js","./index-legacy.0c078113.js","./Layout-legacy.32285d24.js","./useTitle-legacy.a940a42d.js","./index-legacy.ef08dc69.js","./FolderTree-legacy.79851566.js","./index-legacy.e2087f7d.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js"],(function(e){"use strict";var t,l,o,i,n,s,r,a,c,u,d,h,p,y,f,m,w,g,v,b,k,x,_,j,z,P,C,S,L,F,M,I,W,T;return{setters:[e=>{t=e.b,l=e.a5,o=e.dx,i=e.a1,n=e.aJ,s=e.dy,r=e.cB,a=e.aL,c=e.c9,u=e.ca,d=e.aW,h=e.b9,p=e._,y=e.o,f=e.ba,m=e.n,w=e.e,g=e.m,v=e.h,b=e.a7,k=e.S,x=e.aC,_=e.ai,j=e.d,z=e.dz},e=>{P=e.O,C=e.A},e=>{S=e.A,L=e.a,F=e.V},e=>{M=e.H,I=e.a,W=e.b},e=>{T=e.r},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){var O=_("<span>");e("default",(()=>{const{pathname:e,searchParams:_}=t(),{proxyLink:q}=l(),A=o();let B=i.objs.filter((e=>e.type===P.VIDEO));0===B.length&&(B=[i.obj]);const H=()=>{const e=B.findIndex((e=>e.name===i.obj.name));e<B.length-1&&A(j(z(location.pathname),B[e+1].name)+"?auto_fullscreen="+N.fullscreen)};let N,V={id:e(),container:"#video-player",title:i.obj.name,volume:.5,autoplay:n("video_autoplay"),autoSize:!1,autoMini:!0,controls:[{name:"previous-button",index:10,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-prev-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Previous",click:function(){(()=>{const e=B.findIndex((e=>e.name===i.obj.name));e>0&&A(j(z(location.pathname),B[e-1].name)+"?auto_fullscreen="+N.fullscreen)})()}},{name:"next-button",index:11,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-next-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Next",click:function(){H()}}],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[S],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const l=new M;l.loadSource(t),l.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(s().toLowerCase())?s().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const D=i.related.filter((e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1})),E=i.related.find((e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1}));if(0!=D.length){let Z=!1;const ee=D[0];"ass"===r(ee.name).toLowerCase()?(Z=!0,V.plugins?.push(I({subUrl:q(ee,!0)}))):V.subtitle={url:q(ee,!0),type:r(ee.name)};const te=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(e){e.tooltip=e.switch?"Hide":"Show",le(!e.switch);const t=V.settings?.find((e=>"setting_subtitle"===e.id));return t&&(t.tooltip=e.tooltip),!e.switch}}];function le(e){"ass"==(Z?"ass":"webvtt")?(N.subtitle.show=!1,N.emit("artplayer-plugin-ass:visible",e)):(N.subtitle.show=e,N.emit("artplayer-plugin-ass:visible",!1))}D.forEach(((e,t)=>{var l;te.push({default:0===t,html:(l=O(),l.style.setProperty("max-width","200px"),l.style.setProperty("overflow","hidden"),l.style.setProperty("text-overflow","ellipsis"),l.style.setProperty("word-break","break-all"),l.style.setProperty("white-space","normal"),l.style.setProperty("display","-webkit-box"),l.style.setProperty("-webkit-line-clamp","2"),l.style.setProperty("-webkit-box-orient","vertical"),l.style.setProperty("font-size","12px"),a(l,(()=>e.name)),c((()=>u(l,"title",e.name))),l),name:e.name,url:q(e,!0)})})),V.settings?.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:C({size:24}),selector:te,onSelect:function(e){"ass"===r(e.name).toLowerCase()?(Z=!0,this.emit("artplayer-plugin-ass:switch",e.url),le(!0)):(Z=!1,this.subtitle.switch(e.url,{name:e.name}),this.once("subtitleLoad",le.bind(this,!0)));const t=te.find((e=>"setting_subtitle_display"===e.id));return t&&!t.switch&&t.$html?.click?.(),t?.tooltip}})}E&&V.plugins?.push(W({danmuku:q(E,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"}));const[R,U]=d((()=>h.post("/fs/other",{path:e(),password:p(),method:"video_preview"})));let $,J;async function G(){const e=await U();f(e,(async e=>{const t=e.video_preview_play_info.live_transcoding_task_list.filter((e=>e.url));if(0===t.length)return void m.error("No transcoding video found");const l=t.map(((e,l)=>({html:e.template_id,url:e.url,default:l===t.length-1})));V.quality=l,N.quality=l,J=N.currentTime;let o=N.playing;await N.switchUrl(l[l.length-1].url),o||N.pause(),setTimeout((()=>{N.seek=J}),1e3)}))}y((async()=>{const e=await U();Y(200!==e.code),f(e,(e=>{const t=e.video_preview_play_info.live_transcoding_task_list.filter((e=>e.url));if(0===t.length)return void m.error("No transcoding video found");let l;switch(V.url=t[t.length-1].url,V.quality=t.map(((e,l)=>({html:e.template_id,url:e.url,default:l===t.length-1}))),N=new L(V),_.auto_fullscreen){case"true":l=!0;case"false":l=!1;default:l=!1}N.on("ready",(()=>{N.fullscreen=l})),N.on("video:ended",(()=>{K()&&H()})),$=window.setInterval(G,84e4)}))})),w((()=>{N?.destroy(),window.clearInterval($)}));const[K,Q]=g(),[X,Y]=g(!1);return v(F,{onAutoNextChange:Q,get children(){return[v(b,{w:"$full",h:"60vh",id:"video-player"}),v(k,{get when(){return X()},get children(){return v(x,{w:"100%",h:"60vh",bgColor:"black",get children(){return v(T,{size:"4rem"})}})}})]}})}))}}}));
