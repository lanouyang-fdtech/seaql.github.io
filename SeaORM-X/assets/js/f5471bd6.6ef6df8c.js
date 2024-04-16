"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[225],{5641:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(1308),r=(n(6687),n(5641));const i={},o="Index",p={unversionedId:"index",id:"index",title:"Index",description:"This document only contains the usage and information of the extended support of other database backends such as MSSQL.",source:"@site/docs/01-index.md",sourceDirName:".",slug:"/index",permalink:"/SeaORM-X/docs/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/01-index.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1713238192,formattedLastUpdatedAt:"Apr 16, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is SeaORM X",permalink:"/SeaORM-X/docs/introduction/orm"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2}],l={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"index"},"Index"),(0,r.kt)("admonition",{title:"Documentation for the base SeaORM",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This document only contains the usage and information of the extended support of other database backends such as MSSQL.\nThe documentation for the base SeaORM can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/index/"},"here"),".")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Introduction"),(0,r.kt)("p",{parentName:"li"},"1.1. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/introduction/orm"},"What is SeaORM X")),(0,r.kt)("p",{parentName:"li"},"1.2. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/introduction/tutorial"},"Tutorial & Examples")))),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,r.kt)("p",{parentName:"li"},"2.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,r.kt)("p",{parentName:"li"},"2.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/install-and-config/connection"},"Connection Pool"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Migration"),(0,r.kt)("p",{parentName:"li"},"3.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/migration/setting-up-migration"},"Setting Up Migration")),(0,r.kt)("p",{parentName:"li"},"3.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/migration/running-migration"},"Running Migration"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generating Entities"),(0,r.kt)("p",{parentName:"li"},"4.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/generate-entity/sea-orm-cli"},"Using ",(0,r.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,r.kt)("p",{parentName:"li"},"4.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/generate-entity/entity-structure"},"Entity Structure"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Basic CRUD"),(0,r.kt)("p",{parentName:"li"},"5.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM-X/docs/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")))))}d.isMDXComponent=!0}}]);