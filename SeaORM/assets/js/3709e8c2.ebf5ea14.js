"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[26934],{48859:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(76687);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=t(31308),o=(t(76687),t(48859));const r={},i="Conditional Expressions",d={unversionedId:"advanced-query/conditional-expression",id:"advanced-query/conditional-expression",title:"Conditional Expressions",description:"You can add conditions to SeaORM find with the filter method. You can also restrict the aggregated result with having method. Both of them take seaquery::Condition as a parameter.",source:"@site/docs/08-advanced-query/02-conditional-expression.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/conditional-expression",permalink:"/SeaORM/docs/next/advanced-query/conditional-expression",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/08-advanced-query/02-conditional-expression.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1712632948,formattedLastUpdatedAt:"Apr 9, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Select",permalink:"/SeaORM/docs/next/advanced-query/custom-select"},next:{title:"Aggregate Functions",permalink:"/SeaORM/docs/next/advanced-query/aggregate-function"}},l={},c=[{value:"AND Condition",id:"and-condition",level:2},{value:"OR Condition",id:"or-condition",level:2},{value:"Nested Condition",id:"nested-condition",level:2},{value:"Fluent conditional query",id:"fluent-conditional-query",level:2}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conditional-expressions"},"Conditional Expressions"),(0,o.kt)("p",null,"You can add conditions to SeaORM find with the ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," method. You can also restrict the aggregated result with ",(0,o.kt)("inlineCode",{parentName:"p"},"having")," method. Both of them take ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/0.12.7/sea_query/query/struct.Condition.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sea_query::Condition"))," as a parameter."),(0,o.kt)("h2",{id:"and-condition"},"AND Condition"),(0,o.kt)("p",null,"Construct the AND conditional expression with ",(0,o.kt)("inlineCode",{parentName:"p"},"Condition::all")," method, and append any condition represented in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::all()\n                .add(cake::Column::Id.gte(1))\n                .add(cake::Column::Name.like("%Cheese%"))\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "WHERE `cake`.`id` >= 1 AND `cake`.`name` LIKE \'%Cheese%\'",\n    ].join(" ")\n);\n')),(0,o.kt)("h2",{id:"or-condition"},"OR Condition"),(0,o.kt)("p",null,"Construct the OR conditional expression with ",(0,o.kt)("inlineCode",{parentName:"p"},"Condition::any")," method, and append any condition represented in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::any()\n                .add(cake::Column::Id.eq(4))\n                .add(cake::Column::Id.eq(5))\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "WHERE `cake`.`id` = 4 OR `cake`.`id` = 5",\n    ].join(" ")\n);\n')),(0,o.kt)("h2",{id:"nested-condition"},"Nested Condition"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," method can also take another conditional expression. By doing this, we can construct complex nested conditions flexibly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::any()\n                .add(\n                    Condition::all()\n                        .add(cake::Column::Id.lte(30))\n                        .add(cake::Column::Name.like("%Chocolate%"))\n                )\n                .add(\n                    Condition::all()\n                        .add(cake::Column::Id.gte(1))\n                        .add(cake::Column::Name.like("%Cheese%"))\n                )\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "WHERE (`cake`.`id` <= 30 AND `cake`.`name` LIKE \'%Chocolate%\') OR",\n        "(`cake`.`id` >= 1 AND `cake`.`name` LIKE \'%Cheese%\')",\n    ].join(" ")\n);\n')),(0,o.kt)("h2",{id:"fluent-conditional-query"},"Fluent conditional query"),(0,o.kt)("p",null,"Apply an operation on the QueryStatement if the given ",(0,o.kt)("inlineCode",{parentName:"p"},"Option<T>")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(_)"),". It keeps your query expression fluent!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, DbBackend};\n\nassert_eq!(\n    cake::Entity::find()\n        .apply_if(Some(3), |mut query, v| {\n            query.filter(cake::Column::Id.eq(v))\n        })\n        .apply_if(Some(100), QuerySelect::limit)\n        .apply_if(None, QuerySelect::offset::<Option<u64>>) // no-op\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "cake"."id" = 3 LIMIT 100"#\n);\n')))}p.isMDXComponent=!0}}]);