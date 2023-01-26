import{f as L,g as $,i as G,c as X,e as T,r as S,C as Y,o as Z,h as U,a8 as J}from"./runtime-core.esm-bundler.fd6e27b4.js";const ee=/#/g,te=/&/g,oe=/=/g,B=/\+/g,ne=/%5b/gi,re=/%5d/gi,se=/%5e/gi,ie=/%60/gi,ae=/%7b/gi,ce=/%7c/gi,le=/%7d/gi,ue=/%20/gi;function fe(e){return encodeURI(""+e).replace(ce,"|").replace(ne,"[").replace(re,"]")}function x(e){return fe(e).replace(B,"%2B").replace(ue,"+").replace(ee,"%23").replace(te,"%26").replace(ie,"`").replace(ae,"{").replace(le,"}").replace(se,"^")}function k(e){return x(e).replace(oe,"%3D")}function M(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function he(e){return M(e.replace(B," "))}function de(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const o of e.split("&")){const n=o.match(/([^=]+)=?(.*)/)||[];if(n.length<2)continue;const r=M(n[1]);if(r==="__proto__"||r==="constructor")continue;const s=he(n[2]||"");typeof t[r]<"u"?Array.isArray(t[r])?t[r].push(s):t[r]=[t[r],s]:t[r]=s}return t}function pe(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(o=>`${k(e)}=${x(o)}`).join("&"):`${k(e)}=${x(t)}`:k(e)}function _e(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>pe(t,e[t])).join("&")}const ye=/^\w{2,}:(\/\/)?/,ge=/^\/\/[^/]+/;function v(e,t=!1){return ye.test(e)||t&&ge.test(e)}const ve=/\/$|\/\?/;function E(e="",t=!1){return t?ve.test(e):e.endsWith("/")}function q(e="",t=!1){if(!t)return(E(e)?e.slice(0,-1):e)||"/";if(!E(e,!0))return e||"/";const[o,...n]=e.split("?");return(o.slice(0,-1)||"/")+(n.length>0?`?${n.join("?")}`:"")}function be(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(E(e,!0))return e||"/";const[o,...n]=e.split("?");return o+"/"+(n.length>0?`?${n.join("?")}`:"")}function W(e=""){return e.startsWith("/")}function ke(e=""){return(W(e)?e.slice(1):e)||"/"}function et(e=""){return W(e)?e:"/"+e}function tt(e,t){if(D(t)||v(e))return e;const o=q(t);return e.startsWith(o)?e:me(o,e)}function ot(e,t){if(D(t))return e;const o=q(t);if(!e.startsWith(o))return e;const n=e.slice(o.length);return n[0]==="/"?n:"/"+n}function nt(e,t){const o=H(e),n={...de(o.search),...t};return o.search=_e(n),xe(o)}function D(e){return!e||e==="/"}function Ce(e){return e&&e!=="/"}function me(e,...t){let o=e||"";for(const n of t.filter(r=>Ce(r)))o=o?be(o)+ke(n):n;return o}function H(e="",t){if(!v(e,!0))return t?H(t+e):O(e);const[o="",n,r=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",i=""]=(r.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=O(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:o,auth:n?n.slice(0,Math.max(0,n.length-1)):"",host:s,pathname:a,search:l,hash:c}}function O(e=""){const[t="",o="",n=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:o,hash:n}}function xe(e){const t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}function R(e,t={},o){for(const n in e){const r=e[n],s=o?`${o}:${n}`:n;typeof r=="object"&&r!==null?R(r,t,s):typeof r=="function"&&(t[s]=r)}return t}function Ee(e,t){return e.reduce((o,n)=>o.then(()=>n.apply(void 0,t)),Promise.resolve())}function Re(e,t){return Promise.all(e.map(o=>o.apply(void 0,t)))}function C(e,t){for(const o of e)o(t)}class we{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,o,n={}){if(!t||typeof o!="function")return()=>{};const r=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!n.allowDeprecated){let i=s.message;i||(i=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(o),()=>{o&&(this.removeHook(t,o),o=void 0)}}hookOnce(t,o){let n,r=(...s)=>(typeof n=="function"&&n(),n=void 0,r=void 0,o(...s));return n=this.hook(t,r),n}removeHook(t,o){if(this._hooks[t]){const n=this._hooks[t].indexOf(o);n!==-1&&this._hooks[t].splice(n,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,o){this._deprecatedHooks[t]=typeof o=="string"?{to:o}:o;const n=this._hooks[t]||[];this._hooks[t]=void 0;for(const r of n)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const o in t)this.deprecateHook(o,t[o])}addHooks(t){const o=R(t),n=Object.keys(o).map(r=>this.hook(r,o[r]));return()=>{for(const r of n.splice(0,n.length))r()}}removeHooks(t){const o=R(t);for(const n in o)this.removeHook(n,o[n])}callHook(t,...o){return this.callHookWith(Ee,t,...o)}callHookParallel(t,...o){return this.callHookWith(Re,t,...o)}callHookWith(t,o,...n){const r=this._before||this._after?{name:o,args:n,context:{}}:void 0;this._before&&C(this._before,r);const s=t(this._hooks[o]||[],n);return s instanceof Promise?s.finally(()=>{this._after&&r&&C(this._after,r)}):(this._after&&r&&C(this._after,r),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const o=this._before.indexOf(t);o!==-1&&this._before.splice(o,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const o=this._after.indexOf(t);o!==-1&&this._after.splice(o,1)}}}function Ae(){return new we}function Pe(){let e,t=!1;const o=n=>{if(e&&e!==n)throw new Error("Context conflict")};return{use:()=>{if(e===void 0)throw new Error("Context is not available");return e},tryUse:()=>e,set:(n,r)=>{r||o(n),e=n,t=!0},unset:()=>{e=void 0,t=!1},call:(n,r)=>{o(n),e=n;try{return r()}finally{t||(e=void 0)}},async callAsync(n,r){e=n;const s=()=>{e=n},i=()=>e===n?s:void 0;w.add(i);try{const a=r();return t||(e=void 0),await a}finally{w.delete(i)}}}}function He(){const e={};return{get(t){return e[t]||(e[t]=Pe()),e[t],e[t]}}}const g=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},j="__unctx__",Ne=g[j]||(g[j]=He()),Le=e=>Ne.get(e),I="__unctx_async_handlers__",w=g[I]||(g[I]=new Set);function rt(e){const t=[];for(const r of w){const s=r();s&&t.push(s)}const o=()=>{for(const r of t)r()};let n=e();return n&&typeof n=="object"&&"catch"in n&&(n=n.catch(r=>{throw o(),r})),[n,o]}const Q=Le("nuxt-app"),Te="__nuxt_plugin";function st(e){let t=0;const o={provide:void 0,globalName:"nuxt",payload:L({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!o.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return o.isHydrating=!1,o.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...e};o.hooks=Ae(),o.hook=o.hooks.hook,o.callHook=o.hooks.callHook,o.provide=(s,i)=>{const a="$"+s;y(o,a,i),y(o.vueApp.config.globalProperties,a,i)},y(o.vueApp,"$nuxt",o),y(o.vueApp.config.globalProperties,"$nuxt",o);const n=L(o.payload.config),r=new Proxy(n,{get(s,i){return i==="public"?s.public:s[i]??s.public[i]},set(s,i,a){return i==="public"||i==="app"?!1:(s[i]=a,s.public[i]=a,!0)}});return o.provide("config",r),o}async function Se(e,t){if(typeof t!="function")return;const{provide:o}=await Ue(e,t,[e])||{};if(o&&typeof o=="object")for(const n in o)e.provide(n,o[n])}async function it(e,t){for(const o of t)await Se(e,o)}function at(e){return e.map(o=>typeof o!="function"?null:o.length>1?n=>o(n,n.provide):o).filter(Boolean)}function ct(e){return e[Te]=!0,e}function Ue(e,t,o){const n=()=>o?t(...o):t();return Q.set(e),n()}function f(){const e=Q.tryUse();if(!e){const t=$();if(!t)throw new Error("nuxt instance unavailable");return t.appContext.app.$nuxt}return e}function lt(){return f().$config}function y(e,t,o){Object.defineProperty(e,t,{get:()=>o})}const N=()=>{var e;return(e=f())==null?void 0:e.$router},ut=()=>$()?G("_route",f()._route):f()._route,ft=e=>e,ht=(e,t,o={})=>{const n=f();o.global||typeof e=="function"?n._middleware.global.push(typeof e=="function"?e:t):n._middleware.named[e]=t},Oe=()=>{try{if(f()._processingMiddleware)return!0}catch{return!0}return!1},je=(e,t)=>{e||(e="/");const o=typeof e=="string"?e:e.path||"/",n=v(o,!0);if(n&&!(t!=null&&t.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(n&&H(o).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!n&&Oe())return e;const r=N();return n?(t!=null&&t.replace?location.replace(o):location.href=o,Promise.resolve()):t!=null&&t.replace?r.replace(e):r.push(e)},A=globalThis.requestIdleCallback||(e=>{const t=Date.now(),o={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(o)},1)}),Ie=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),$e=e=>{const t=f();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{A(e)}):A(e)};async function K(e,t=N()){if(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(e))return;t._routePreloaded.add(e);const o=t._preloadPromises=t._preloadPromises||[];if(o.length>4)return Promise.all(o).then(()=>K(e,t));const n=t.resolve(e).matched.map(r=>{var s;return(s=r.components)==null?void 0:s.default}).filter(r=>typeof r=="function");for(const r of n){const s=Promise.resolve(r()).catch(()=>{}).finally(()=>o.splice(o.indexOf(s)));o.push(s)}await Promise.all(o)}const Be=(...e)=>e.find(t=>t!==void 0),Me="noopener noreferrer";function V(e){const t=e.componentName||"NuxtLink";return X({name:t,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(o,{slots:n}){const r=N(),s=T(()=>o.to||o.href||""),i=T(()=>o.external||o.target&&o.target!=="_self"?!0:typeof s.value=="object"?!1:s.value===""||v(s.value,!0)),a=S(!1),l=S(null);if(o.prefetch!==!1&&o.noPrefetch!==!0&&typeof s.value=="string"&&o.target!=="_blank"&&!De()){const h=f();let d,u=null;Y(()=>{const _=We();$e(()=>{d=A(()=>{var p;(p=l==null?void 0:l.value)!=null&&p.tagName&&(u=_.observe(l.value,async()=>{u==null||u(),u=null,await Promise.all([h.hooks.callHook("link:prefetch",s.value).catch(()=>{}),!i.value&&K(s.value,r).catch(()=>{})]),a.value=!0}))})})}),Z(()=>{d&&Ie(d),u==null||u(),u=null})}return()=>{var _,p;if(!i.value)return U(J("RouterLink"),{ref:b=>{l.value=b==null?void 0:b.$el},to:s.value,...a.value&&!o.custom?{class:o.prefetchedClass||e.prefetchedClass}:{},activeClass:o.activeClass||e.activeClass,exactActiveClass:o.exactActiveClass||e.exactActiveClass,replace:o.replace,ariaCurrentValue:o.ariaCurrentValue,custom:o.custom},n.default);const c=typeof s.value=="object"?((_=r.resolve(s.value))==null?void 0:_.href)??null:s.value||null,h=o.target||null,d=o.noRel?null:Be(o.rel,e.externalRelAttribute,c?Me:"")||null,u=()=>je(c,{replace:o.replace});return o.custom?n.default?n.default({href:c,navigate:u,route:r.resolve(c),rel:d,target:h,isExternal:i.value,isActive:!1,isExactActive:!1}):null:U("a",{ref:l,href:c,rel:d,target:h},(p=n.default)==null?void 0:p.call(n))}}})}const qe=V({componentName:"NuxtLink"});function We(){const e=f();if(e._observer)return e._observer;let t=null;const o=new Map,n=(s,i)=>(t||(t=new IntersectionObserver(a=>{for(const l of a){const c=o.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),o.set(s,i),t.observe(s),()=>{o.delete(s),t.unobserve(s),o.size===0&&(t.disconnect(),t=null)});return e._observer={observe:n}}function De(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:qe,defineNuxtLink:V},Symbol.toStringTag,{value:"Module"}));function m(e){return e!==null&&typeof e=="object"}function P(e,t,o=".",n){if(!m(t))return P(e,{},o,n);const r=Object.assign({},t);for(const s in e){if(s==="__proto__"||s==="constructor")continue;const i=e[s];i!=null&&(n&&n(r,s,i,o)||(Array.isArray(i)&&Array.isArray(r[s])?r[s]=[...i,...r[s]]:m(i)&&m(r[s])?r[s]=P(i,r[s],(o?`${o}.`:"")+s.toString(),n):r[s]=i))}return r}function z(e){return(...t)=>t.reduce((o,n)=>P(o,n,"",e),{})}const pt=z(),Qe=z((e,t,o,n)=>{if(typeof e[t]<"u"&&typeof o=="function")return e[t]=o(e[t]),!0}),Ke={docus:{title:"Docus",description:"The best place to start your documentation.",image:"https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",socials:{twitter:"nuxt_themes",github:"nuxt-themes/docus"},aside:{level:0,exclude:[]},header:{logo:!0,showLinkIcon:!0,exclude:[]},footer:{iconLinks:[{href:"https://nuxt.com",icon:"IconNuxtLabs"}]}}},Ve={prose:{copyButton:{iconCopy:"ph:copy",iconCopied:"ph:check"},headings:{icon:"ph:link"}}},ze={},Fe={},_t=Qe(Ke,Ve,ze,Fe),Ge=/\d/,Xe=["-","_","/","."];function Ye(e=""){if(!Ge.test(e))return e.toUpperCase()===e}function F(e,t){const o=t??Xe,n=[];if(!e||typeof e!="string")return n;let r="",s,i;for(const a of e){const l=o.includes(a);if(l===!0){n.push(r),r="",s=void 0;continue}const c=Ye(a);if(i===!1){if(s===!1&&c===!0){n.push(r),r=a,s=c;continue}if(s===!0&&c===!1&&r.length>1){const h=r[r.length-1];n.push(r.slice(0,Math.max(0,r.length-1))),r=h+a,s=c;continue}}r+=a,s=c,i=l}return n.push(r),n}function Ze(e){return e?e[0].toUpperCase()+e.slice(1):""}function yt(e){return e?(Array.isArray(e)?e:F(e)).map(t=>Ze(t)).join(""):""}function gt(e,t){return e?(Array.isArray(e)?e:F(e)).map(o=>o.toLowerCase()).join(t??"-"):""}export{be as A,yt as B,dt as C,qe as _,nt as a,lt as b,Ae as c,ct as d,ft as e,rt as f,Ue as g,ot as h,N as i,me as j,v as k,et as l,q as m,ht as n,ut as o,je as p,H as q,pt as r,at as s,st as t,f as u,it as v,tt as w,_t as x,gt as y,Ze as z};
