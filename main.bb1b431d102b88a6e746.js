(()=>{var e={259:()=>{"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(e){console.log("SW registered",e)})).catch((function(e){console.log("Sw Registration failed",e)}))}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(259);var e=document.getElementById("modal-container"),t=document.getElementById("show-modal"),o=document.getElementById("close-modal"),a=document.getElementById("bookmark-form"),r=document.getElementById("website-name"),s=document.getElementById("website-url"),c=document.getElementById("bookmarks-container"),i={};function d(){c.textContent="",Object.keys(i).forEach((function(e){var t=i[e],n=t.name,o=t.url,a=document.createElement("div");a.classList.add("item");var r=document.createElement("i");r.classList.add("fas","fa-times"),r.setAttribute("title","Delete Bookmark"),r.setAttribute("onclick","deleteBookmark('".concat(e,"')"));var s=document.createElement("div");s.classList.add("name");var d=document.createElement("img");d.setAttribute("src","https://s2.googleusercontent.com/s2/favicons?domain=".concat(o)),d.setAttribute("alt","Favicon");var l=document.createElement("a");l.setAttribute("href","".concat(o)),l.setAttribute("target","_blank"),l.textContent=n,s.append(d,l),a.append(r,s),c.appendChild(a)}))}function l(e){localStorage.getItem("bookmarks")&&(i=JSON.parse(localStorage.getItem("bookmarks"))),d()}t.addEventListener("click",(function(){e.classList.add("show-modal"),r.focus()})),o.addEventListener("click",(function(){return e.classList.remove("show-modal")})),window.addEventListener("click",(function(t){return t.target===e&&e.classList.remove("show-modal")})),window.deleteBookmark=function(e){i[e]&&delete i[e];localStorage.setItem("bookmarks",JSON.stringify(i)),l()},a.addEventListener("submit",(function(e){e.preventDefault();var t=r.value,n=s.value;if(!n||n.includes("http://")||n.includes("https://")||(n="https://".concat(n)),!function(e,t){var n=new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);return e?t?!!t.match(n)||(alert("Please provide a valid web address"),!1):(alert("Please submit Url field"),!1):(alert("Please submit Name field"),!1)}(t,n))return!1;var o={name:t,url:n};i[n]=o,localStorage.setItem("bookmarks",JSON.stringify(i)),d(),a.reset(),r.focus()})),document.addEventListener("DOMContentLoaded",(function(){l()}),!1)})()})();