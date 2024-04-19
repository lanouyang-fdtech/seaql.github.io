"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[52918],{48859:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(76687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(31308),n=(a(76687),a(48859));const o={},i="\ud83e\udded Seaography Intro",s={unversionedId:"seaography/seaography-intro",id:"version-0.12.x/seaography/seaography-intro",title:"\ud83e\udded Seaography Intro",description:"If you are building a full-stack application with a web GUI these days, it's likely you'd use GraphQL as the communication interface between frontend and backend. A GraphQL schema is strongly typed and self-documenting, so no doubt frontend developers love them!",source:"@site/versioned_docs/version-0.12.x/10-seaography/01-seaography-intro.md",sourceDirName:"10-seaography",slug:"/seaography/seaography-intro",permalink:"/SeaORM/docs/seaography/seaography-intro",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/10-seaography/01-seaography-intro.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1713548768,formattedLastUpdatedAt:"Apr 19, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Index",permalink:"/SeaORM/docs/schema-statement/create-index"},next:{title:"Getting Started",permalink:"/SeaORM/docs/seaography/getting-started"}},p={},l=[],c={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-seaography-intro"},"\ud83e\udded Seaography Intro"),(0,n.kt)("p",null,"If you are building a full-stack application with a web GUI these days, it's likely you'd use GraphQL as the communication interface between frontend and backend. A GraphQL schema is strongly typed and self-documenting, so no doubt frontend developers love them!"),(0,n.kt)("p",null,"However, building GraphQL resolvers is no easy task for backend developers. There is a huge impedance mismatch between GraphQL and SQL, even though they both deemed relational. Luckily, we've got your back!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"Seaography")," is a GraphQL framework built on top of SeaORM and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/async-graphql/async-graphql"},"async-graphql"),". Together with many other Rust libraries (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"tokio"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"serde"),"), we argue, the Rust ecosystem provides the best technology for building GraphQL backends!"),(0,n.kt)("p",null,"SeaORM is dynamic by design. ",(0,n.kt)("inlineCode",{parentName:"p"},"async-graphql")," ",(0,n.kt)("inlineCode",{parentName:"p"},"v5.0")," introduced ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/async-graphql/latest/async_graphql/dynamic/index.html"},"dynamic schema")," and is a perfect match with SeaORM, as we can take a SeaORM Entity and upgrade it into a GraphQL Entity."),(0,n.kt)("p",null,"Seaography started out as a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/blob/main/2022/README.md#1-a-graphql-framework-on-top-of-seaorm"},"Summer of Code 2022 project"),". It is still in an early stage, the current limitations are: 1) No mutation 2) No Data Loader, but nonetheless can be useful in prototyping and building internal-use admin panels."),(0,n.kt)("p",null,"With just a few commands, you can launch a GraphQL server from SeaORM entities!"))}d.isMDXComponent=!0}}]);