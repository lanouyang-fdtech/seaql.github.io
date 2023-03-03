"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,h=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Defining Graph Schema",s={unversionedId:"architecture-of-graph-query-engine/defining-graph-schema",id:"architecture-of-graph-query-engine/defining-graph-schema",title:"Defining Graph Schema",description:"The schema defines the formats of the entities and the relations to be processed by StarfishQL.",source:"@site/docs/02-architecture-of-graph-query-engine/02-defining-graph-schema.md",sourceDirName:"02-architecture-of-graph-query-engine",slug:"/architecture-of-graph-query-engine/defining-graph-schema",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/defining-graph-schema",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/02-architecture-of-graph-query-engine/02-defining-graph-schema.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1677826193,formattedLastUpdatedAt:"Mar 3, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/overview"},next:{title:"Data Storage",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/data-storage"}},l={},p=[{value:"Body format",id:"body-format",level:2},{value:"Defining the schema",id:"defining-the-schema",level:2},{value:"Appending to the schema",id:"appending-to-the-schema",level:2},{value:"Resetting the schema",id:"resetting-the-schema",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defining-graph-schema"},"Defining Graph Schema"),(0,r.kt)("p",null,"The schema defines the formats of the entities and the relations to be processed by StarfishQL."),(0,r.kt)("h2",{id:"body-format"},"Body format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Body of a POST request to be sent to `/schema`\n{\n    reset: boolean, // Default: false\n    define: { // Optional\n        entities: [\n            {\n                name: string,\n                attributes: [\n                    {\n                        name: string,\n                        datatype: "Int" | "String",\n                    }\n                ]\n            }\n        ],\n        relations: [\n            {\n                name: string,\n                from_entity: string,\n                to_entity: string,\n                directed: boolean\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"Note that all root level fields (",(0,r.kt)("inlineCode",{parentName:"p"},"reset")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"define"),") are optional; a request with an empty body ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," is a no-op."),(0,r.kt)("h2",{id:"defining-the-schema"},"Defining the schema"),(0,r.kt)("p",null,"The following request body defines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An entity with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"crate")," and attribute ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," that is a ",(0,r.kt)("em",{parentName:"li"},"String")," in the database",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"directed")," relation with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"depends")," that is defined from ",(0,r.kt)("inlineCode",{parentName:"li"},"crate")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"crate"),(0,r.kt)("sup",{parentName:"li",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "define": {\n        "entities": [\n            {\n                "name": "crate",\n                "attributes": [\n                    {"name": "version", "datatype": "String"}\n                ]\n            }\n        ],\n        "relations": [\n            {\n                "name": "depends",\n                "from_entity": "crate",\n                "to_entity": "crate",\n                "directed": true\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"appending-to-the-schema"},"Appending to the schema"),(0,r.kt)("p",null,"If you send another request with the following body, another entity named ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," will be defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "define": {\n        "entities": [\n            {\n                "name": "author",\n                "attributes": []\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"resetting-the-schema"},"Resetting the schema"),(0,r.kt)("p",null,"If you want to start over, specify ",(0,r.kt)("inlineCode",{parentName:"p"},"reset: true")," to reset the schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reset": true\n}\n')),(0,r.kt)("p",null,"If you want to reset the schema and re-define it in the same request, simply supply both ",(0,r.kt)("inlineCode",{parentName:"p"},"reset: true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"define: {...}"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reset": true,\n    "define": {\n        "entities": [\n            {\n                "name": "crate",\n                "attributes": [\n                    {"name": "version", "datatype": "String"}\n                ]\n            }\n        ],\n        "relations": [\n            {\n                "name": "depends",\n                "from_entity": "crate",\n                "to_entity": "crate",\n                "directed": true\n            }\n        ]\n    }\n}\n')),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"A unique column called ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is implicitly inserted, but an attribute called ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is still accepted. More on this in ",(0,r.kt)("a",{parentName:"li",href:"/StarfishQL/docs/architecture-of-graph-query-engine/data-storage#storage-of-entities"},"Data Storage"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"For simplicity, all relations defined in the schema are many-to-many. Therefore, a separate table is created for each relation.",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);