if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/images/javascript.png",revision:"b1ef08eebd8e2c158963a1cddbbf873a"},{url:"bookmark.png",revision:"3d5e72efcbd61c9d815849ec8fa6ace9"},{url:"index.html",revision:"1f613aa5ca6ea5e13821dadd416c55ae"},{url:"main.2193cb8127ff11367a19.css",revision:null},{url:"main.c3ea18ebb1ab195d70ef.js",revision:null}],{})}));
