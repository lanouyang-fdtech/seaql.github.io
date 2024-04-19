"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3949],{48859:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(31308),a=(n(76687),n(48859));const o={},i="Debug Log",l={unversionedId:"install-and-config/debug-log",id:"version-0.6.x/install-and-config/debug-log",title:"Debug Log",description:"SeaORM (with debug-print feature turned on) logs debug messages via the tracing crate.",source:"@site/versioned_docs/version-0.6.x/02-install-and-config/04-debug-log.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/debug-log",permalink:"/SeaORM/docs/0.6.x/install-and-config/debug-log",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/02-install-and-config/04-debug-log.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1713548768,formattedLastUpdatedAt:"Apr 19, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connection Pool",permalink:"/SeaORM/docs/0.6.x/install-and-config/connection"},next:{title:"Using sea-orm-cli",permalink:"/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-log"},"Debug Log"),(0,a.kt)("p",null,"SeaORM (with ",(0,a.kt)("inlineCode",{parentName:"p"},"debug-print")," feature turned on) logs debug messages via the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing"},(0,a.kt)("inlineCode",{parentName:"a"},"tracing"))," crate."),(0,a.kt)("p",null,"You need to setup ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,a.kt)("inlineCode",{parentName:"a"},"tracing-subscriber"))," to capture and view the debug log. See the snippet below and a complete example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,a.kt)("p",null,"To filter debug log from ",(0,a.kt)("inlineCode",{parentName:"p"},"sea_orm"),", you can:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ RUST_LOG=debug cargo run 2>&1 | grep sea_orm\n[2021-02-02T20:20:20Z DEBUG sea_orm::driver::sqlx_mysql] SELECT `cake`.`id`, `cake`.`name` FROM `cake` LIMIT 1\n")))}u.isMDXComponent=!0}}]);