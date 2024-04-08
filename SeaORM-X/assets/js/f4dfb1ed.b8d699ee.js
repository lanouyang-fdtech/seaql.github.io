"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[366],{5641:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(1308),i=(n(6687),n(5641));const r={},l="Using sea-orm-cli",o={unversionedId:"generate-entity/sea-orm-cli",id:"generate-entity/sea-orm-cli",title:"Using sea-orm-cli",description:"Install sea-orm-cli with cargo locally.",source:"@site/docs/04-generate-entity/01-sea-orm-cli.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/sea-orm-cli",permalink:"/SeaORM-X/docs/generate-entity/sea-orm-cli",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/04-generate-entity/01-sea-orm-cli.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712562182,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Migration",permalink:"/SeaORM-X/docs/migration/running-migration"},next:{title:"Entity Structure",permalink:"/SeaORM-X/docs/generate-entity/entity-structure"}},s={},p=[{value:"Configure Environment",id:"configure-environment",level:2},{value:"Getting Help",id:"getting-help",level:2},{value:"Generating Entity Files",id:"generating-entity-files",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-sea-orm-cli"},"Using ",(0,i.kt)("inlineCode",{parentName:"h1"},"sea-orm-cli")),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo")," locally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'cargo install --path "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-cli"\n')),(0,i.kt)("h2",{id:"configure-environment"},"Configure Environment"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, or create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in your project root. Specify your database connection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"DATABASE_URL=protocol://username:password@localhost/database\n")),(0,i.kt)("h2",{id:"getting-help"},"Getting Help"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"-h")," flag on any CLI command or subcommand for help."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# List all available commands\nsea-orm-cli -h\n\n# List all subcommands available in `generate` command\nsea-orm-cli generate -h\n\n# Show how to use `generate entity` subcommand\nsea-orm-cli generate entity -h\n")),(0,i.kt)("h2",{id:"generating-entity-files"},"Generating Entity Files"),(0,i.kt)("p",null,"Discover all tables in a database and generate a corresponding SeaORM entity file for each table."),(0,i.kt)("p",null,"Supported databases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MSSQL"),(0,i.kt)("li",{parentName:"ul"},"MySQL"),(0,i.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"SQLite")),(0,i.kt)("p",null,"Command line options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-u")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--database-url"),": database URL (default: DATABASE_URL specified in ENV)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-s")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--database-schema"),": database schema (default: DATABASE_SCHEMA specified in ENV)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for MySQL & SQLite, this argument is ignored"),(0,i.kt)("li",{parentName:"ul"},"for PostgreSQL, this argument is optional with default value 'public'"),(0,i.kt)("li",{parentName:"ul"},"for MSSQL, this argument is optional with default value 'dbo'"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-o")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--output-dir"),": entity file output directory (default: current directory)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--verbose"),": print debug messages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-l")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--lib"),": generate index file as ",(0,i.kt)("inlineCode",{parentName:"li"},"lib.rs")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"mod.rs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--include-hidden-tables"),": generate entity files from hidden tables (tables with names starting with an underscore are hidden and ignored by default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--ignore-tables"),": skip generating entity file for specified tables (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"seaql_migrations"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--compact-format"),": generate entity file of compact format (default: true)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--expanded-format"),": generate entity file of expanded format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--with-serde"),": automatically derive serde Serialize / Deserialize traits for the entity (",(0,i.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"deserialize"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"both"),") (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--serde-skip-deserializing-primary-key"),": generate entity model with primary key field labeled as ",(0,i.kt)("inlineCode",{parentName:"li"},"#[serde(skip_deserializing)]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--serde-skip-hidden-column"),": generate entity model with hidden column (column name starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),") field labeled as ",(0,i.kt)("inlineCode",{parentName:"li"},"#[serde(skip)]")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--date-time-crate"),": the datetime crate to use for generating entities (",(0,i.kt)("inlineCode",{parentName:"li"},"chrono"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"time"),") (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"chrono"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--max-connections"),": maximum number of database connections to be initialized in the connection pool (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--model-extra-derives"),": append extra derive macros to the generated model struct"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--model-extra-attributes"),": append extra attributes to generated model struct"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--seaography"),": generate addition structs in entities for seaography integration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Generate entity files of database `bakery` to `entity/src`\nsea-orm-cli generate entity -u protocol://username:password@localhost/bakery -o entity/src\n")))}d.isMDXComponent=!0}}]);