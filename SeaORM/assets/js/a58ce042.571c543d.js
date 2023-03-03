"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),g=a,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={},o="Setting Up Migration",l={unversionedId:"migration/setting-up-migration",id:"version-0.6.x/migration/setting-up-migration",title:"Setting Up Migration",description:"Version control you database schema with migrations written in SeaQuery or in raw SQL.",source:"@site/versioned_docs/version-0.6.x/05-migration/01-setting-up-migration.md",sourceDirName:"05-migration",slug:"/migration/setting-up-migration",permalink:"/SeaORM/docs/0.6.x/migration/setting-up-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/05-migration/01-setting-up-migration.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1677826193,formattedLastUpdatedAt:"Mar 3, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Enum",permalink:"/SeaORM/docs/0.6.x/generate-database-schema/create-enum"},next:{title:"Writing Migration",permalink:"/SeaORM/docs/0.6.x/migration/writing-migration"}},s={},m=[{value:"Migration Table",id:"migration-table",level:2},{value:"Creating Migration Directory",id:"creating-migration-directory",level:2},{value:"Workspace Structure",id:"workspace-structure",level:2},{value:"Entity Crate",id:"entity-crate",level:3},{value:"Migration Crate",id:"migration-crate",level:3},{value:"Core Crate",id:"core-crate",level:3}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-migration"},"Setting Up Migration"),(0,a.kt)("p",null,"Version control you database schema with migrations written in SeaQuery or in raw SQL."),(0,a.kt)("h2",{id:"migration-table"},"Migration Table"),(0,a.kt)("p",null,"A table named ",(0,a.kt)("inlineCode",{parentName:"p"},"seaql_migrations")," will be created in your database to keep track the applied migrations. It will be created automatically when you run the migration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "seaql_migrations")]\npub struct Model {\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub version: String,\n    pub applied_at: i64,\n}\n')),(0,a.kt)("h2",{id:"creating-migration-directory"},"Creating Migration Directory"),(0,a.kt)("p",null,"Setup the migration directory by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-orm-cli migrate init"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Setup the migration directory in `./migration`\n$ sea-orm-cli migrate init\nInitializing migration directory...\nCreating file `./migration/src/lib.rs`\nCreating file `./migration/src/m20220101_000001_create_table.rs`\nCreating file `./migration/src/main.rs`\nCreating file `./migration/Cargo.toml`\nCreating file `./migration/README.md`\nDone!\n\n# If you want to setup the migration directory in else where\n$ sea-orm-cli migrate init -d ./other/migration/dir\nInitializing migration directory...\nCreating file `./other/migration/dir/src/lib.rs`\nCreating file `./other/migration/dir/src/m20220101_000001_create_table.rs`\nCreating file `./other/migration/dir/src/main.rs`\nCreating file `./other/migration/dir/Cargo.toml`\nCreating file `./other/migration/dir/README.md`\nDone!\n")),(0,a.kt)("p",null,"You should have a migration directory with structure like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"migration\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 lib.rs                              # Migrator, for running migration programmatically\n    \u251c\u2500\u2500 m20220101_000001_create_table.rs    # A sample migration file\n    \u2514\u2500\u2500 main.rs                             # Migrator CLI, for running migration in console\n")),(0,a.kt)("h2",{id:"workspace-structure"},"Workspace Structure"),(0,a.kt)("p",null,"It is recommanded to restructure your cargo workspace as follows to allow sharing of SeaORM entities across the core crate and the migration crate. Also, to ensure both of them depends on the same version of SeaORM through re-exporting."),(0,a.kt)("p",null,"Follow the steps below to restructure your workspace."),(0,a.kt)("p",null,"Checkout the integration examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket Example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix Example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum Example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem Example"))),(0,a.kt)("h3",{id:"entity-crate"},"Entity Crate"),(0,a.kt)("p",null,"Creates an entity crate in your root workspace. It should contains all SeaORM entities and shares SeaORM dependency across the workspace through re-exporting."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"If you don't have SeaORM entities defined?"),(0,a.kt)("p",null,"You can create an entity crate with no entity files in it. Then, write the migration and run it to create tables in the database. Finally, ",(0,a.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli"},"generate SeaORM entities")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," and output the entity files to ",(0,a.kt)("inlineCode",{parentName:"p"},"entity/src/entities")," folder."),(0,a.kt)("p",null,"After generating the entity files, you can re-export the generated entities by adding following lines in ",(0,a.kt)("inlineCode",{parentName:"p"},"entity/src/lib.rs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"mod entities;\npub use entities::*;\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"entity\n\u251c\u2500\u2500 Cargo.toml      # Include SeaORM dependency\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 lib.rs      # Re-export SeaORM and entities\n    \u2514\u2500\u2500 post.rs     # Define the `post` entity\n")),(0,a.kt)("p",null,"Specifies SeaORM dependency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="entity/Cargo.toml"',title:'"entity/Cargo.toml"'},'[dependencies]\nsea-orm = { version = "^0.6", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ], default-features = false }\n')),(0,a.kt)("p",null,"Re-exports SeaORM."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/src/lib.rs"',title:'"entity/src/lib.rs"'},"pub use sea_orm;\n")),(0,a.kt)("h3",{id:"migration-crate"},"Migration Crate"),(0,a.kt)("p",null,"For those existing SeaORM users, you might need SeaORM entity when defining the migration. For example, column names defined in entity can be reused in migration."),(0,a.kt)("p",null,"Depends on the entity crate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="migration/Cargo.toml"',title:'"migration/Cargo.toml"'},'[dependencies]\nentity = { path = "../entity" }\n')),(0,a.kt)("p",null,"Writes migration for the ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," entity, more on this in the next section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/m20220120_000001_create_post_table.rs"',title:'"migration/src/m20220120_000001_create_post_table.rs"'},'use sea_schema::migration::prelude::*;\n\npub struct Migration;\n\nimpl MigrationName for Migration {\n    fn name(&self) -> &str {\n        "m20220120_000001_create_post_table"\n    }\n}\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table(\n                Table::create()\n                    // ...\n                    .to_owned(),\n            )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table(\n                Table::drop()\n                    // ...\n                    .to_owned()\n            )\n            .await\n    }\n}\n')),(0,a.kt)("h3",{id:"core-crate"},"Core Crate"),(0,a.kt)("p",null,"This is where you put the application logics."),(0,a.kt)("p",null,"Creates a workspace that contains core, entity and migration crate and includes the entity and migration crate as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'[workspace]\nmembers = [".", "entity", "migration"]\n\n[dependencies]\nentity = { path = "entity" }\nmigration = { path = "migration" }\n')),(0,a.kt)("p",null,"Uses the re-exported SeaORM and entities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use entity::sea_orm;\n\npub use entity::post;\npub use entity::post::Entity as Post;\n")))}c.isMDXComponent=!0}}]);