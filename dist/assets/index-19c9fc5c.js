(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const h={pwaInDevEnvironment:!1,webManifest:{href:"/manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="/manifest.webmanifest">'}},p="modulepreload",g=function(d){return"/"+d},m={},y=function(s,c,o){if(!c||c.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(c.map(e=>{if(e=g(e),e in m)return;m[e]=!0;const n=e.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!o)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!n||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":p,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((l,a)=>{r.addEventListener("load",l),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};function v(d={}){const{immediate:s=!1,onNeedRefresh:c,onOfflineReady:o,onRegistered:t,onRegisteredSW:e,onRegisterError:n}=d;let f,u;const r=async(a=!0)=>{await u};async function l(){if("serviceWorker"in navigator){const{Workbox:a}=await y(()=>import("./workbox-window.prod.es5-6bb6a4de.js"),[]);f=new a("/sw.js",{scope:"/",type:"classic"}),f.addEventListener("activated",i=>{(i.isUpdate||i.isExternal)&&window.location.reload()}),f.addEventListener("installed",i=>{i.isUpdate||o==null||o()}),f.register({immediate:s}).then(i=>{e?e("/sw.js",i):t==null||t(i)}).catch(i=>{n==null||n(i)})}}return u=l(),r}const w="2023-10-17T11:52:48.689Z";console.log(h);const L=document.querySelector("#app");L.innerHTML=`
  <div>
   <img src="/favicon.svg" alt="PWA Logo" width="60" height="60">
    <h1>Vite + TypeScript</h1>
    <p>Testing SW without <b>Injection Point (self.__WB_MANIFEST)</b></p>
    <br/>
    <p>${w}</p>
    <br/>
  </div>
`;v({immediate:!0,onNeedRefresh(){console.log("onNeedRefresh message should not appear")},onOfflineReady(){console.log("onOfflineReady message should not appear")}});
//# sourceMappingURL=index-19c9fc5c.js.map
