import"./index.c2b5f797.js";import{u as q}from"./asyncData.c75aa4f2.js";import{h as g,q as m}from"./entry.8f3a43b0.js";import{c as S,ah as b,e as C,a as k,ac as N,h as _}from"./runtime-core.esm-bundler.fd6e27b4.js";import"./DocsAsideTree.f0ab10c7.js";import"./cookie.894ea2eb.js";import"./Container.ccea6b89.js";import"./query.c3f7607a.js";const J=S({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:r,without:n,where:a,sort:o,limit:l,skip:f,locale:s,find:d}=b(i),h=C(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")});k(()=>i,()=>p(),{deep:!0});const{data:v,refresh:p}=await q(`content-query-${g(i)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),a.value&&(e=e.where(a.value)),o.value&&(e=e.sort(o.value)),l.value&&(e=e.limit(l.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t.value):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()});return{isPartial:h,data:v,refresh:p}},render(i){var y;const t=N(),{data:r,refresh:n,isPartial:a,path:o,only:l,without:f,where:s,sort:d,limit:h,skip:v,locale:p,find:e}=i,u={path:o,only:l,without:f,where:s,sort:d,limit:h,skip:v,locale:p,find:e};if(u.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((y=r==null?void 0:r.body)!=null&&y.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:a,props:u,...this.$attrs}):((c,w)=>_("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:c,data:w},null,2)))("default",{data:r,props:u,isPartial:a})}});export{J as default};
