"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5549],{8859:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(k,i(i({ref:t},l),{},{components:r})):a.createElement(k,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(1308),n=(r(6687),r(8859));const o={},i="Configuring Features",s={unversionedId:"getting-started/configuration",id:"version-0.2.x/getting-started/configuration",title:"Configuring Features",description:"Cargo",source:"@site/versioned_docs/version-0.2.x/02-getting-started/01-configuration.md",sourceDirName:"02-getting-started",slug:"/getting-started/configuration",permalink:"/SeaStreamer/docs/0.2.x/getting-started/configuration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.2.x/02-getting-started/01-configuration.md",tags:[],version:"0.2.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1698392458,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaStreamer Concepts",permalink:"/SeaStreamer/docs/0.2.x/introduction/sea-streamer"},next:{title:"SeaStreamer Architecture",permalink:"/SeaStreamer/docs/0.2.x/getting-started/architecture"}},c={},p=[{value:"Cargo",id:"cargo",level:2},{value:"BACKEND: <code>kafka</code>, <code>redis</code>, <code>stdio</code> &amp; <code>socket</code>",id:"backend-kafka-redis-stdio--socket",level:2},{value:"ASYNC_RUNTIME: <code>runtime-async-std</code> &amp; <code>runtime-tokio</code>",id:"async_runtime-runtime-async-std--runtime-tokio",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuring-features"},"Configuring Features"),(0,n.kt)("h2",{id:"cargo"},"Cargo"),(0,n.kt)("p",null,"First of all, please star our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer"},"GitHub repo"),"! Your support is vital to the continued development of SeaStreamer."),(0,n.kt)("p",null,"Then, add ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer")," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of your ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-streamer = { version = "0.2", features = [ <BACKEND>, <ASYNC_RUNTIME> ] }\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer")," is a facade crate. If you don't enable any features, it will only export the types from ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer-types"),",\nwhich allows you to develop ",(0,n.kt)("em",{parentName:"p"},"pure crates")," using those traits and types, without pulling in any backend crates to the dependency tree."),(0,n.kt)("p",null,"All crates share the same major version. So ",(0,n.kt)("inlineCode",{parentName:"p"},"0.1")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer")," depends on ",(0,n.kt)("inlineCode",{parentName:"p"},"0.1")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer-socket"),"."),(0,n.kt)("h2",{id:"backend-kafka-redis-stdio--socket"},"BACKEND: ",(0,n.kt)("inlineCode",{parentName:"h2"},"kafka"),", ",(0,n.kt)("inlineCode",{parentName:"h2"},"redis"),", ",(0,n.kt)("inlineCode",{parentName:"h2"},"stdio")," & ",(0,n.kt)("inlineCode",{parentName:"h2"},"socket")),(0,n.kt)("p",null,"SeaStreamer currently supports three backends, Kafka, Redis and Stdio.\nEach has their own support crate, and they all implement the same set of abstract traits.\nIt's easy to distinguish the symbols between the crates, because they all start with a prefix."),(0,n.kt)("p",null,"However, those abstractions are static: you have to designate the concrete ",(0,n.kt)("inlineCode",{parentName:"p"},"Streamer")," type compile-time.\nTo achieve ",(0,n.kt)("em",{parentName:"p"},"runtime-abstraction"),", you can enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"socket")," flag and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Sea*")," types."),(0,n.kt)("p",null,"Here is a summary of the type names:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Trait"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Kafka"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Redis"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Stdio"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Socket"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Streamer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"KafkaStreamer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"RedisStreamer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"StdioStreamer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SeaStreamer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Producer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"KafkaProducer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"RedisProducer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"StdioProducer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SeaProducer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Consumer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"KafkaConsumer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"RedisConsumer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"StdioConsumer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SeaConsumer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Message"),(0,n.kt)("td",{parentName:"tr",align:"center"},"KafkaMessage"),(0,n.kt)("td",{parentName:"tr",align:"center"},"RedisMessage"),(0,n.kt)("td",{parentName:"tr",align:"center"},"StdioMessage"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SeaMessage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"ConnectOptions"),(0,n.kt)("td",{parentName:"tr",align:"center"},"KafkaConnectOptions"),(0,n.kt)("td",{parentName:"tr",align:"center"},"RedisConnectOptions"),(0,n.kt)("td",{parentName:"tr",align:"center"},"StdioConnectOptions"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SeaConnectOptions")))),(0,n.kt)("h2",{id:"async_runtime-runtime-async-std--runtime-tokio"},"ASYNC_RUNTIME: ",(0,n.kt)("inlineCode",{parentName:"h2"},"runtime-async-std")," & ",(0,n.kt)("inlineCode",{parentName:"h2"},"runtime-tokio")),(0,n.kt)("p",null,"SeaStreamer currently supports two async runtimes, async-std & Tokio. Enable the one you need.\nThere are also some runtime-generic functions, exposed via the ",(0,n.kt)("inlineCode",{parentName:"p"},"runtime")," flag, to help you build applications supporting both runtimes."))}d.isMDXComponent=!0}}]);