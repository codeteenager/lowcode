function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as o,a_ as p,a$ as u,b0 as l,b1 as c,b2 as f,b3 as d,b4 as m,b5 as b,b6 as h,b7 as A,Y as g,d as _,u as P,l as v,z as R,b8 as w,b9 as y,ba as C,a5 as E}from"./chunks/framework.CGZlG5xz.js";import{R as T}from"./chunks/theme.DT3Mr39b.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(T),S=_({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=P();return v(()=>{R(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&w(),y(),C(),s.setup&&s.setup(),()=>E(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=L(),t=j();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function j(){return b(S)}function L(){let e=o,t;return h(a=>{let n=A(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=g(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{D as createApp};
