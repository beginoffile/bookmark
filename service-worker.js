if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/images/javascript.png",revision:"b1ef08eebd8e2c158963a1cddbbf873a"},{url:"index.html",revision:"9dc8900caddcfa01ef1b282a51436b37"},{url:"javascript.png",revision:"b1ef08eebd8e2c158963a1cddbbf873a"},{url:"main.2193cb8127ff11367a19.css",revision:null},{url:"main.c3ea18ebb1ab195d70ef.js",revision:null}],{})}));