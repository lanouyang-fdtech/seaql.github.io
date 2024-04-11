"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[814],{5641:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(6687);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(1308),o=(t(6687),t(5641));const i={},r="Database Connection",c={unversionedId:"install-and-config/connection",id:"install-and-config/connection",title:"Database Connection",description:"To obtain a database connection, use the Database interface:",source:"@site/docs/02-install-and-config/02-connection.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/connection",permalink:"/SeaORM-X/docs/install-and-config/connection",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/02-install-and-config/02-connection.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712822926,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database & Async Runtime",permalink:"/SeaORM-X/docs/install-and-config/database-and-async-runtime"},next:{title:"Setting Up Migration",permalink:"/SeaORM-X/docs/migration/setting-up-migration"}},l={},s=[{value:"Connection String",id:"connection-string",level:2},{value:"MSSQL",id:"mssql",level:3},{value:"Specify a schema",id:"specify-a-schema",level:4},{value:"Connect Options",id:"connect-options",level:2},{value:"Checking Connection is Valid",id:"checking-connection-is-valid",level:2},{value:"Closing Connection",id:"closing-connection",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-connection"},"Database Connection"),(0,o.kt)("p",null,"To obtain a database connection, use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.Database.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Database"))," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"protocol")," can be ",(0,o.kt)("inlineCode",{parentName:"p"},"mssql:"),", etc."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"host")," is usually ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", a domain name or an IP address."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you can't get ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," to work, try putting in an IP address and port number, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1433")," or even ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.x.x"),".")),(0,o.kt)("p",null,"Under the hood, a ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlz::Pool")," is created and owned by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.DatabaseConnection.html"},(0,o.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),"."),(0,o.kt)("p",null,"Each time you call ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"query_one/all")," on it, a connection will be acquired and released from the pool."),(0,o.kt)("p",null,"Multiple queries will execute in parallel as you ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," on them."),(0,o.kt)("h2",{id:"connection-string"},"Connection String"),(0,o.kt)("p",null,"Here are some tips for database specific options:"),(0,o.kt)("h3",{id:"mssql"},"MSSQL"),(0,o.kt)("h4",{id:"specify-a-schema"},"Specify a schema"),(0,o.kt)("p",null,"If the schema is ",(0,o.kt)("inlineCode",{parentName:"p"},"dbo"),", simply write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mssql://username:password@host/database\n")),(0,o.kt)("p",null,"Or, specify the schema name by providing an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"currentSchema")," query param."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mssql://username:password@host/database?currentSchema=my_schema\n")),(0,o.kt)("h2",{id:"connect-options"},"Connect Options"),(0,o.kt)("p",null,"To configure the connection, use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ConnectOptions"))," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database");\nopt.max_connections(100)\n    .min_connections(5)\n    .connect_timeout(Duration::from_secs(8))\n    .acquire_timeout(Duration::from_secs(8))\n    .idle_timeout(Duration::from_secs(8))\n    .max_lifetime(Duration::from_secs(8))\n    .sqlx_logging(true)\n    .sqlx_logging_level(log::LevelFilter::Info);\n\nlet db = Database::connect(opt).await?;\n')),(0,o.kt)("h2",{id:"checking-connection-is-valid"},"Checking Connection is Valid"),(0,o.kt)("p",null,"Checks if a connection to the database is still valid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"|db: DatabaseConnection| {\n    assert!(db.ping().await.is_ok());\n    db.clone().close().await;\n    assert!(matches!(db.ping().await, Err(DbErr::ConnectionAcquire)));\n}\n")),(0,o.kt)("h2",{id:"closing-connection"},"Closing Connection"),(0,o.kt)("p",null,"The connection will be automatically closed on drop. To close the connection explicitly, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let db = Database::connect(url).await?;\n\n// Closing connection here\ndb.close().await?;\n")))}d.isMDXComponent=!0}}]);