"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5278],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(31308),a=(n(76687),n(48859));const o={},l="Custom Select",i={unversionedId:"advanced-query/custom-select",id:"version-0.4.x/advanced-query/custom-select",title:"Custom Select",description:"By default, SeaORM will select all columns defined in the Column enum. You can override the defaults if you wish to do so.",source:"@site/versioned_docs/version-0.4.x/08-advanced-query/01-custom-select.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-select",permalink:"/preview/pr-118/SeaORM/docs/0.4.x/advanced-query/custom-select",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/08-advanced-query/01-custom-select.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1711348951,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:1,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Using SQLite",permalink:"/preview/pr-118/SeaORM/docs/0.4.x/write-test/sqlite"},next:{title:"Conditional Expressions",permalink:"/preview/pr-118/SeaORM/docs/0.4.x/advanced-query/conditional-expression"}},s={},c=[{value:"Clear Default Selection",id:"clear-default-selection",level:2},{value:"Select Some Attributes Only",id:"select-some-attributes-only",level:2},{value:"Select Custom Expressions",id:"select-custom-expressions",level:2},{value:"Handling Custom Selects",id:"handling-custom-selects",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-select"},"Custom Select"),(0,a.kt)("p",null,"By default, SeaORM will select all columns defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Column")," enum. You can override the defaults if you wish to do so."),(0,a.kt)("h2",{id:"clear-default-selection"},"Clear Default Selection"),(0,a.kt)("p",null,"Clear the default selection by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"select_only")," method if needed. Then, you can select some of the attributes or even custom expressions after it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting all columns\nassert_eq!(\n    cake::Entity::find()\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"select-some-attributes-only"},"Select Some Attributes Only"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"select_only")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"column")," methods together to select only the attributes you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting the name column only\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"select-custom-expressions"},"Select Custom Expressions"),(0,a.kt)("p",null,"Select any custom expression with ",(0,a.kt)("inlineCode",{parentName:"p"},"column_as")," method, it takes any ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," and an alias. Use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::Expr"))," helper to build ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleExpr"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::{Alias, Expr};\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(Expr::col(cake::Column::Id).max().sub(Expr::col(cake::Column::Id)), "id_diff")\n        .column_as(Expr::cust("CURRENT_TIMESTAMP"), "current_time")\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name", MAX("id") - "id" AS "id_diff", CURRENT_TIMESTAMP AS "current_time" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"handling-custom-selects"},"Handling Custom Selects"),(0,a.kt)("p",null,"You can use a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,a.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of a complex query. It is especially useful when dealing with custom columns or multiple joins which cannot directly be converted into models. It may be used to receive the result of any query, even raw SQL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{FromQueryResult, JoinType, RelationTrait};\nuse sea_query::Expr;\n\n#[derive(FromQueryResult)]\nstruct CakeAndFillingCount {\n    id: i32,\n    name: String,\n    count: i32,\n}\n\nlet cake_counts: Vec<CakeAndFillingCount> = cake::Entity::find()\n    .column_as(filling::Column::Id.count(), "count")\n    .join_rev(\n        // construct `RelationDef` on the fly\n        JoinType::InnerJoin,\n        cake_filling::Entity::belongs_to(cake::Entity)\n            .from(cake_filling::Column::CakeId)\n            .to(cake::Column::Id)\n            .into()\n    )\n    // reuse a `Relation` from existing Entity\n    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n    .group_by(cake::Column::Id)\n    .into_model::<CakeAndFillingCount>()\n    .all(db)\n    .await?;\n')))}d.isMDXComponent=!0}}]);