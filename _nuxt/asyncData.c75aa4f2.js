import{u as v}from"./index.c2b5f797.js";import{c as _}from"./entry.8f3a43b0.js";import{r as y,ad as x,ag as D,a as w,u as b,g as C}from"./runtime-core.esm-bundler.fd6e27b4.js";const O=()=>null;function E(...s){var h;const f=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(f);let[r,l,a={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??O,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const e=v(),u=()=>e.isHydrating?e.payload.data[r]:e.static.data[r],d=()=>u()!==void 0;e._asyncData[r]||(e._asyncData[r]={data:y(u()??((h=a.default)==null?void 0:h.call(a))??null),pending:y(!d()),error:y(e.payload._errors[r]?_(e.payload._errors[r]):null)});const n={...e._asyncData[r]};n.refresh=n.execute=(o={})=>{if(e._asyncDataPromises[r]){if(o.dedupe===!1)return e._asyncDataPromises[r];e._asyncDataPromises[r].cancelled=!0}if(o._initial&&d())return u();n.pending.value=!0;const i=new Promise((t,c)=>{try{t(l(e))}catch(P){c(P)}}).then(t=>{if(i.cancelled)return e._asyncDataPromises[r];a.transform&&(t=a.transform(t)),a.pick&&(t=k(t,a.pick)),n.data.value=t,n.error.value=null}).catch(t=>{var c;if(i.cancelled)return e._asyncDataPromises[r];n.error.value=t,n.data.value=b(((c=a.default)==null?void 0:c.call(a))??null)}).finally(()=>{i.cancelled||(n.pending.value=!1,e.payload.data[r]=n.data.value,n.error.value&&(e.payload._errors[r]=_(n.error.value)),delete e._asyncDataPromises[r])});return e._asyncDataPromises[r]=i,e._asyncDataPromises[r]};const p=()=>n.refresh({_initial:!0}),g=a.server!==!1&&e.payload.serverRendered;{const o=C();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const t=o._nuxtOnBeforeMountCbs;o&&(x(()=>{t.forEach(c=>{c()}),t.splice(0,t.length)}),D(()=>t.splice(0,t.length)))}g&&e.isHydrating&&d()?n.pending.value=!1:o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(p):a.immediate&&p(),a.watch&&w(a.watch,()=>n.refresh());const i=e.hook("app:data:refresh",t=>{if(!t||t.includes(r))return n.refresh()});o&&D(i)}const m=Promise.resolve(e._asyncDataPromises[r]).then(()=>n);return Object.assign(m,n),m}async function H(s){const f=s?Array.isArray(s)?s:[s]:void 0;await v().hooks.callHookParallel("app:data:refresh",f)}function k(s,f){const r={};for(const l of f)r[l]=s[l];return r}export{H as r,E as u};
