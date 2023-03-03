"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[477],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>d});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return n?t.createElement(g,s(s({ref:a},m),{},{components:n})):t.createElement(g,s({ref:a},m))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4327:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const l={},s="Running the example",o={unversionedId:"running-example",id:"running-example",title:"Running the example",description:"The project codebase comes with an example database, you can use to run the example project.",source:"@site/docs/02-running-example.md",sourceDirName:".",slug:"/running-example",permalink:"/Seaography/docs/next/running-example",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/docs/02-running-example.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1677826193,formattedLastUpdatedAt:"Mar 3, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/Seaography/docs/next/getting-started"},next:{title:"Generated project structure",permalink:"/Seaography/docs/next/generated-project-structure"}},i={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Install from Cargo",id:"install-from-cargo",level:3},{value:"Install from source",id:"install-from-source",level:3},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3},{value:"SQLite",id:"sqlite",level:3},{value:"Extending and configuring code",id:"extending-and-configuring-code",level:2},{value:"Running server",id:"running-server",level:2},{value:"Regenerating code",id:"regenerating-code",level:2},{value:"Query examples",id:"query-examples",level:2},{value:"Fetch films and their actors",id:"fetch-films-and-their-actors",level:4},{value:"Fetch store and its employee",id:"fetch-store-and-its-employee",level:4},{value:"Fetch inactive customers with pagination",id:"fetch-inactive-customers-with-pagination",level:3},{value:"The query above using cursor pagination",id:"the-query-above-using-cursor-pagination",level:3}],m={toc:p};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-the-example"},"Running the example"),(0,r.kt)("p",null,"The project codebase comes with an example database, you can use to run the example project."),(0,r.kt)("p",null,"In this article we will follow the instructions on how to setup the example project, and we can perform some useful queries."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"rustup: ",(0,r.kt)("a",{parentName:"li",href:"https://rustup.rs/"},"https://rustup.rs/")),(0,r.kt)("li",{parentName:"ol"},"mysql / postgres database (optional)")),(0,r.kt)("h3",{id:"install-from-cargo"},"Install from Cargo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo install seaography-cli\n")),(0,r.kt)("h3",{id:"install-from-source"},"Install from source"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone project"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:SeaQL/seaography.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build project"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./seaography/cli\ncargo install --path .\n")))),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locate project"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./examples/mysql\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create database"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -uroot -p -h 127.0.0.1 mysql -e 'CREATE DATABASE `sakila`'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import schema"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -uroot -p -h 127.0.0.1 sakila < sakila-schema.sql\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -uroot -p -h 127.0.0.1 sakila < sakila-data.sql\n")))),(0,r.kt)("h3",{id:"postgres"},"Postgres"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locate project"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./examples/postgres\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create database"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"psql -q postgres://postgres:postgres@localhost/postgres -c 'CREATE DATABASE \"sakila\"'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import schema"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"psql -q postgres://postgres:postgres@localhost/sakila < sakila-schema.sql\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"psql -q postgres://postgres:postgres@localhost/sakila < sakila-data.sql\n")))),(0,r.kt)("h3",{id:"sqlite"},"SQLite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Locate project",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./examples/sqlite\n")))),(0,r.kt)("h2",{id:"extending-and-configuring-code"},"Extending and configuring code"),(0,r.kt)("p",null,"You are free to modify the code and change things to fit your needs. For more info ",(0,r.kt)("a",{parentName:"p",href:"/docs/extending-code"},"How to extend generated code"),"."),(0,r.kt)("h2",{id:"running-server"},"Running server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/"},"http://127.0.0.1:8000/")),(0,r.kt)("h2",{id:"regenerating-code"},"Regenerating code"),(0,r.kt)("p",null,"Here are the instructions on how we can generate the examples from scratch."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set working directory to Seaography folder"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ./seaography\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build project"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo build\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clean generated code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf ./examples/{mysql|sqlite|postgres}/src\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./examples/{mysql|sqlite|postgres}\nseaography-cli <database_url> seaography-example .\n")),(0,r.kt)("p",{parentName:"li"},"*",' Example database urls "sqlite://sakila.db", "mysql://username:',(0,r.kt)("a",{parentName:"p",href:"mailto:password@127.0.0.1"},"password@127.0.0.1"),'/sakila"'))),(0,r.kt)("h2",{id:"query-examples"},"Query examples"),(0,r.kt)("h4",{id:"fetch-films-and-their-actors"},"Fetch films and their actors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  film(pagination: { pages: { limit: 2, page: 0 } }, orderBy: { title: ASC }) {\n    nodes {\n      title\n      description\n      releaseYear\n      filmActor {\n        actor {\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n}\n\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "film": {\n      "nodes": [\n        {\n          "title": "ACADEMY DINOSAUR",\n          "description": "An Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",\n          "releaseYear": "2006",\n          "filmActor": [\n            {\n              "actor": {\n                "firstName": "PENELOPE",\n                "lastName": "GUINESS"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "CHRISTIAN",\n                "lastName": "GABLE"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "LUCILLE",\n                "lastName": "TRACY"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "SANDRA",\n                "lastName": "PECK"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "JOHNNY",\n                "lastName": "CAGE"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "MENA",\n                "lastName": "TEMPLE"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "WARREN",\n                "lastName": "NOLTE"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "OPRAH",\n                "lastName": "KILMER"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "ROCK",\n                "lastName": "DUKAKIS"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "MARY",\n                "lastName": "KEITEL"\n              }\n            }\n          ]\n        },\n        {\n          "title": "ACE GOLDFINGER",\n          "description": "A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China",\n          "releaseYear": "2006",\n          "filmActor": [\n            {\n              "actor": {\n                "firstName": "BOB",\n                "lastName": "FAWCETT"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "MINNIE",\n                "lastName": "ZELLWEGER"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "SEAN",\n                "lastName": "GUINESS"\n              }\n            },\n            {\n              "actor": {\n                "firstName": "CHRIS",\n                "lastName": "DEPP"\n              }\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"fetch-store-and-its-employee"},"Fetch store and its employee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  store(filters: { storeId: { eq: 1 } }) {\n    nodes {\n      storeId\n      address {\n        address\n        address2\n      }\n      staff {\n        firstName\n        lastName\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "store": {\n      "nodes": [\n        {\n          "storeId": 1,\n          "address": {\n            "address": "47 MySakila Drive",\n            "address2": null\n          },\n          "staff": {\n            "firstName": "Mike",\n            "lastName": "Hillyer"\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"fetch-inactive-customers-with-pagination"},"Fetch inactive customers with pagination"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  customer(\n    filters: { active: { eq: 0 } }\n    pagination: { pages: { page: 2, limit: 3 } }\n  ) {\n    nodes {\n      customerId\n      lastName\n      email\n    }\n    pages\n    current\n  }\n}\n")),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "nodes": [\n        {\n          "customerId": 315,\n          "lastName": "GOODEN",\n          "email": "KENNETH.GOODEN@sakilacustomer.org"\n        },\n        {\n          "customerId": 368,\n          "lastName": "ARCE",\n          "email": "HARRY.ARCE@sakilacustomer.org"\n        },\n        {\n          "customerId": 406,\n          "lastName": "RUNYON",\n          "email": "NATHAN.RUNYON@sakilacustomer.org"\n        }\n      ],\n      "pages": 5,\n      "current": 2\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"the-query-above-using-cursor-pagination"},"The query above using cursor pagination"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  customer(\n    filters: { active: { eq: 0 } }\n    pagination: { cursor: { limit: 3, cursor: "Int[3]:271" } }\n  ) {\n    nodes {\n      customerId\n      lastName\n      email\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      endCursor\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "nodes": [\n        {\n          "customerId": 315,\n          "lastName": "GOODEN",\n          "email": "KENNETH.GOODEN@sakilacustomer.org"\n        },\n        {\n          "customerId": 368,\n          "lastName": "ARCE",\n          "email": "HARRY.ARCE@sakilacustomer.org"\n        },\n        {\n          "customerId": 406,\n          "lastName": "RUNYON",\n          "email": "NATHAN.RUNYON@sakilacustomer.org"\n        }\n      ],\n      "pageInfo": {\n        "hasPreviousPage": true,\n        "hasNextPage": true,\n        "endCursor": "Int[3]:406"\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);