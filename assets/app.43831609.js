import{_ as u,o as l,c as _,S as f,U as m,C as i,a5 as s,d as h,Q as c,a6 as A,u as g,q as v,k as y,a7 as w,a8 as P,a9 as C,aa as x,ab as S,ac as b,ad as E,ae as R,af as B,ag as I,ah as D,ai as L,M as T}from"./chunks/framework.c7d97206.js";import{t as r}from"./chunks/theme.41f4a120.js";const j="/lowcode/weixin.jpg";const O={},p=e=>(f("data-v-0fdd4fd7"),e=e(),m(),e),V={class:"content"},k=p(()=>i("img",{class:"icon",src:j},null,-1)),F=p(()=>i("span",{class:"text"},"微信公众号",-1)),$=[k,F];function M(e,t){return l(),_("div",V,$)}const N=u(O,[["render",M],["__scopeId","data-v-0fdd4fd7"]]),U={...r,Layout(){return s(r.Layout,null,{"aside-bottom":()=>s(N)})}};function d(e){if(e.extends){const t=d(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const n=d(U),q=h({name:"VitePressApp",setup(){const{site:e}=g();return v(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),w(),P(),C(),n.setup&&n.setup(),()=>s(n.Layout)}});async function G(){const e=Q(),t=H();t.provide(x,e);const a=S(e.route);return t.provide(b,a),t.component("Content",E),t.component("ClientOnly",R),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:t,router:e,siteData:B}),{app:t,router:e,data:a}}function H(){return I(q)}function Q(){let e=c,t;return D(a=>{let o=L(a);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),c&&(e=!1),T(()=>import(o),[])},n.NotFound)}c&&G().then(({app:e,router:t,data:a})=>{t.go().then(()=>{A(t.route,a.site),e.mount("#app")})});export{G as createApp};
