!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.6dfd4f26.js","./File-legacy.bc3c18a2.js","./icon-legacy.6da719e6.js","./index-legacy.4db981d4.js","./index-legacy.34d2f522.js","./Layout-legacy.5760b85e.js","./index-legacy.dba139fc.js","./FolderTree-legacy.35272018.js","./index-legacy.c1ba31f3.js"],(function(e){"use strict";var t,r,i,o,c,u,a,l;return{setters:[function(n){t=n.cZ,r=n.w,i=n.a,o=n.e,c=n.B,u=n.a7,a=n.c_},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(t(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=a(t).text;t&&window.open(r(),"_blank")}r((function(){f()}));var d=i();return o(u,{get loading(){return e.loading},get children(){return o(l,{get children(){return o(c,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();
