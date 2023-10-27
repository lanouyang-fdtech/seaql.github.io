"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[555],{9680:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(6687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(1308),r=(a(6687),a(9680));const i={slug:"2023-02-08-whats-new-in-seaorm-0.11.0",title:"What's new in SeaORM 0.11.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},l=void 0,o={permalink:"/blog/2023-02-08-whats-new-in-seaorm-0.11.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2023-02-08-whats-new-in-seaorm-0.11.0.md",source:"@site/blog/2023-02-08-whats-new-in-seaorm-0.11.0.md",title:"What's new in SeaORM 0.11.0",description:"\ud83c\udf89 We are pleased to release SeaORM 0.11.0!",date:"2023-02-08T00:00:00.000Z",formattedDate:"February 8, 2023",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:9.18,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2023-02-08-whats-new-in-seaorm-0.11.0",title:"What's new in SeaORM 0.11.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Introducing SeaStreamer \ud83c\udf0a",permalink:"/blog/2023-04-03-intro-sea-streamer"},nextItem:{title:"SeaORM FAQ.02",permalink:"/blog/2023-02-05-faq-02"}},s={authorsImageUrls:[void 0]},p=[{value:"Data Loader",id:"data-loader",level:2},{value:"Transaction Isolation Level and Access Mode",id:"transaction-isolation-level-and-access-mode",level:2},{value:"Cast Column Type on Select and Save",id:"cast-column-type-on-select-and-save",level:2},{value:"Changes to <code>ActiveModelBehavior</code>",id:"changes-to-activemodelbehavior",level:2},{value:"Execute Unprepared SQL Statement",id:"execute-unprepared-sql-statement",level:2},{value:"Select Into Tuple",id:"select-into-tuple",level:2},{value:"Atomic Migration",id:"atomic-migration",level:2},{value:"Types Support",id:"types-support",level:2},{value:"Opt-in Unstable Internal APIs",id:"opt-in-unstable-internal-apis",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"SeaORM Enhancements",id:"seaorm-enhancements",level:2},{value:"CLI Enhancements",id:"cli-enhancements",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.11.0"},(0,r.kt)("inlineCode",{parentName:"a"},"0.11.0")),"!"),(0,r.kt)("h2",{id:"data-loader"},"Data Loader"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1443"},"#1443"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1238"},"#1238"),"] The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html"},"LoaderTrait")," provides an API to load related entities in batches."),(0,r.kt)("p",null,"Consider this one to many relation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;\n")),(0,r.kt)("p",null,"The generated SQL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n    "cake"."id" AS "A_id",\n    "cake"."name" AS "A_name",\n    "fruit"."id" AS "B_id",\n    "fruit"."name" AS "B_name",\n    "fruit"."cake_id" AS "B_cake_id"\nFROM "cake"\nLEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id"\nORDER BY "cake"."id" ASC\n')),(0,r.kt)("p",null,"The 1 side's (Cake) data will be duplicated. If N is a large number, this would results in more data being transferred over the wire. Using the Loader would ensure each model is transferred only once."),(0,r.kt)("p",null,"The following loads the same data as above, but with two queries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\n\nfor (cake, fruits) in cakes.into_iter().zip(fruits.into_iter()) { .. }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "cake"."id", "cake"."name" FROM "cake"\nSELECT "fruit"."id", "fruit"."name", "fruit"."cake_id" FROM "fruit" WHERE "fruit"."cake_id" IN (..)\n')),(0,r.kt)("p",null,"You can even apply filters on the related entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let fruits_in_stock: Vec<Vec<fruit::Model>> = cakes.load_many(\n    fruit::Entity::find().filter(fruit::Column::Stock.gt(0i32))\n    db\n).await?;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "fruit"."id", "fruit"."name", "fruit"."cake_id" FROM "fruit"\nWHERE "fruit"."stock" > 0 AND "fruit"."cake_id" IN (..)\n')),(0,r.kt)("p",null,"To learn more, read the ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/relation/data-loader/"},"relation docs"),"."),(0,r.kt)("h2",{id:"transaction-isolation-level-and-access-mode"},"Transaction Isolation Level and Access Mode"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1230"},"#1230"),"] The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.transaction_with_config"},(0,r.kt)("inlineCode",{parentName:"a"},"transaction_with_config"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.begin_with_config"},(0,r.kt)("inlineCode",{parentName:"a"},"begin_with_config"))," allows you to specify the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.IsolationLevel.html"},"IsolationLevel")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.AccessMode.html"},"AccessMode"),"."),(0,r.kt)("p",null,"For now, they are only implemented for MySQL and Postgres. In order to align their semantic difference, MySQL will execute ",(0,r.kt)("inlineCode",{parentName:"p"},"SET TRANSACTION")," commands before begin transaction, while Postgres will execute ",(0,r.kt)("inlineCode",{parentName:"p"},"SET TRANSACTION")," commands after begin transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"db.transaction_with_config::<_, _, DbErr>(\n    |txn| { ... },\n    Some(IsolationLevel::ReadCommitted),\n    Some(AccessMode::ReadOnly),\n)\n.await?;\n\nlet transaction = db\n    .begin_with_config(IsolationLevel::ReadCommitted, AccessMode::ReadOnly)\n    .await?;\n")),(0,r.kt)("p",null,"To learn more, read the ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/advanced-query/transaction/"},"transaction docs"),"."),(0,r.kt)("h2",{id:"cast-column-type-on-select-and-save"},"Cast Column Type on Select and Save"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1304"},"#1304"),"] If you need to select a column as one type but save it into the database as another, you can specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"select_as")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"save_as")," attributes to perform the casting. A typical use case is selecting a column of type ",(0,r.kt)("inlineCode",{parentName:"p"},"citext")," (case-insensitive text) as ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," in Rust and saving it into the database as ",(0,r.kt)("inlineCode",{parentName:"p"},"citext"),". One should define the model field as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "ci_table")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    #[sea_orm(select_as = "text", save_as = "citext")]\n    pub case_insensitive_text: String\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,r.kt)("h2",{id:"changes-to-activemodelbehavior"},"Changes to ",(0,r.kt)("inlineCode",{parentName:"h2"},"ActiveModelBehavior")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1328"},"#1328"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1145"},"#1145"),"] The methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModelBehavior")," now have ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection")," as an additional parameter. It enables you to perform database operations, for example, logging the changes made to the existing model or validating the data before inserting it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[async_trait]\nimpl ActiveModelBehavior for ActiveModel {\n    /// Create a new ActiveModel with default values. Also used by `Default::default()`.\n    fn new() -> Self {\n        Self {\n            uuid: Set(Uuid::new_v4()),\n            ..ActiveModelTrait::default()\n        }\n    }\n\n    /// Will be triggered before insert / update\n    async fn before_save<C>(self, db: &C, insert: bool) -> Result<Self, DbErr>\n    where\n        C: ConnectionTrait,\n    {\n        // Logging changes\n        edit_log::ActiveModel {\n            action: Set("before_save".into()),\n            values: Set(serde_json::json!(model)),\n            ..Default::default()\n        }\n        .insert(db)\n        .await?;\n\n        Ok(self)\n    }\n}\n')),(0,r.kt)("p",null,"To learn more, read the ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/generate-entity/entity-structure/#active-model-behavior"},"entity docs"),"."),(0,r.kt)("h2",{id:"execute-unprepared-sql-statement"},"Execute Unprepared SQL Statement"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1327"},"#1327"),"] You can execute an unprepared SQL statement with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.ConnectionTrait.html#tymethod.execute_unprepared"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectionTrait::execute_unprepared")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Use `execute_unprepared` if the SQL statement doesn\'t have value bindings\ndb.execute_unprepared(\n    "CREATE TABLE `cake` (\n        `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,\n        `name` varchar(255) NOT NULL\n    )"\n)\n.await?;\n\n// Construct a `Statement` if the SQL contains value bindings\nlet stmt = Statement::from_sql_and_values(\n    manager.get_database_backend(),\n    r#"INSERT INTO `cake` (`name`) VALUES (?)"#,\n    ["Cheese Cake".into()]\n);\ndb.execute(stmt).await?;\n')),(0,r.kt)("h2",{id:"select-into-tuple"},"Select Into Tuple"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1311"},"#1311"),"] You can select a tuple (or single value) with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.Selector.html#method.into_tuple"},(0,r.kt)("inlineCode",{parentName:"a"},"into_tuple"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column(cake::Column::Name)\n    .column(cake::Column::Id.count())\n    .group_by(cake::Column::Name)\n    .into_tuple()\n    .all(&db)\n    .await?;\n")),(0,r.kt)("h2",{id:"atomic-migration"},"Atomic Migration"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1379"},"#1379"),"] Migration will be executed in Postgres atomically that means migration scripts will be executed inside a transaction. Changes done to the database will be rolled back if the migration failed. However, atomic migration is not supported in MySQL and SQLite."),(0,r.kt)("p",null,"You can start a transaction inside each migration to perform operations like ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/migration/seeding-data/#seeding-data-transactionally"},"seeding sample data")," for a newly created table."),(0,r.kt)("h2",{id:"types-support"},"Types Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1325"},"#1325"),"] Support various UUID formats that are available in ",(0,r.kt)("inlineCode",{parentName:"li"},"uuid::fmt")," module")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "uuid_fmt")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub uuid: Uuid,\n    pub uuid_braced: uuid::fmt::Braced,\n    pub uuid_hyphenated: uuid::fmt::Hyphenated,\n    pub uuid_simple: uuid::fmt::Simple,\n    pub uuid_urn: uuid::fmt::Urn,\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1210"},"#1210"),"] Support vector of enum for Postgres")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "enum_vec")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub teas: Vec<Tea>,\n    pub teas_opt: Option<Vec<Tea>>,\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1414"},"#1414"),"] Support ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveEnum")," field as primary key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "enum_primary_key")]\npub struct Model {\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub id: Tea,\n    pub category: Option<Category>,\n    pub color: Option<Color>,\n}\n')),(0,r.kt)("h2",{id:"opt-in-unstable-internal-apis"},"Opt-in Unstable Internal APIs"),(0,r.kt)("p",null,"By enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-internal")," feature you opt-in unstable internal APIs including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accessing the inner connection pool of SQLx with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/sea-orm/*/sea_orm/enum.DatabaseConnection.html#impl-DatabaseConnection-2"},(0,r.kt)("inlineCode",{parentName:"a"},"get_*_connection_pool"))," method"),(0,r.kt)("li",{parentName:"ul"},"Re-exporting ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/sea-orm/*/sea_orm/error/index.html"},"SQLx errors types"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"SqlxError"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SqlxMySqlError"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SqlxPostgresError")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SqlxSqliteError"))),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1366"},"#1366"),"] ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-query")," has been upgraded to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/releases/tag/0.28.0"},(0,r.kt)("inlineCode",{parentName:"a"},"0.28.x")),", which comes with some improvements and breaking changes. Please follow the release notes for more details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1420"},"#1420"),"] sea-orm-cli: ",(0,r.kt)("inlineCode",{parentName:"p"},"generate entity")," command enable ",(0,r.kt)("inlineCode",{parentName:"p"},"--universal-time")," flag by default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1425"},"#1425"),"] Added ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordNotInserted")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordNotUpdated")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"DbErr"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1327"},"#1327"),"] Added ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionTrait::execute_unprepared")," method")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1311"},"#1311"),"] The required method of ",(0,r.kt)("inlineCode",{parentName:"p"},"TryGetable")," changed:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// then\nfn try_get(res: &QueryResult, pre: &str, col: &str) -> Result<Self, TryGetError>;\n// now; ColIdx can be `&str` or `usize`\nfn try_get_by<I: ColIdx>(res: &QueryResult, index: I) -> Result<Self, TryGetError>;\n")),(0,r.kt)("p",null,"So if you implemented it yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"impl TryGetable for XXX {\n-   fn try_get(res: &QueryResult, pre: &str, col: &str) -> Result<Self, TryGetError> {\n+   fn try_get_by<I: sea_orm::ColIdx>(res: &QueryResult, idx: I) -> Result<Self, TryGetError> {\n-       let value: YYY = res.try_get(pre, col).map_err(TryGetError::DbErr)?;\n+       let value: YYY = res.try_get_by(idx).map_err(TryGetError::DbErr)?;\n        ..\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1328"},"#1328"),"] The ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveModelBehavior")," trait becomes async trait.\nIf you overridden the default ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveModelBehavior")," implementation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[async_trait::async_trait]\nimpl ActiveModelBehavior for ActiveModel {\n    async fn before_save<C>(self, db: &C, insert: bool) -> Result<Self, DbErr>\n    where\n        C: ConnectionTrait,\n    {\n        // ...\n    }\n\n    // ...\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1425"},"#1425"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},'DbErr::RecordNotFound("None of the database rows are affected")')," is moved to a dedicated error variant ",(0,r.kt)("inlineCode",{parentName:"li"},"DbErr::RecordNotUpdated"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let res = Update::one(cake::ActiveModel {\n        name: Set("Cheese Cake".to_owned()),\n        ..model.into_active_model()\n    })\n    .exec(&db)\n    .await;\n\n// then\nassert_eq!(\n    res,\n    Err(DbErr::RecordNotFound(\n        "None of the database rows are affected".to_owned()\n    ))\n);\n\n// now\nassert_eq!(res, Err(DbErr::RecordNotUpdated));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1395"},"#1395"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"sea_orm::ColumnType")," was replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"sea_query::ColumnType"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Method ",(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType::def")," was moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"ColumnTypeTrait")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType::Binary")," becomes a tuple variant which takes in additional option ",(0,r.kt)("inlineCode",{parentName:"li"},"sea_query::BlobSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType::Custom")," takes a ",(0,r.kt)("inlineCode",{parentName:"li"},"sea_query::DynIden")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," and thus a new method ",(0,r.kt)("inlineCode",{parentName:"li"},"custom")," is added (note the lowercase)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'// Compact Entity\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "fruit")]\npub struct Model {\n-   #[sea_orm(column_type = r#"Custom("citext".to_owned())"#)]\n+   #[sea_orm(column_type = r#"custom("citext")"#)]\n    pub column: String,\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'// Expanded Entity\nimpl ColumnTrait for Column {\n    type EntityName = Entity;\n\n    fn def(&self) -> ColumnDef {\n        match self {\n-           Self::Column => ColumnType::Custom("citext".to_owned()).def(),\n+           Self::Column => ColumnType::custom("citext").def(),\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"seaorm-enhancements"},"SeaORM Enhancements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1256"},"#1256"),"] Refactor schema module to expose functions for database alteration"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1346"},"#1346"),"] Generate compact entity with ",(0,r.kt)("inlineCode",{parentName:"li"},'#[sea_orm(column_type = "JsonBinary")]')," macro attribute"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MockDatabase::append_exec_results()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MockDatabase::append_query_results()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MockDatabase::append_exec_errors()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"MockDatabase::append_query_errors()")," [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1367"},"#1367"),"] take any types implemented ",(0,r.kt)("inlineCode",{parentName:"li"},"IntoIterator")," trait"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1362"},"#1362"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"find_by_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"delete_by_id")," take any ",(0,r.kt)("inlineCode",{parentName:"li"},"Into")," primary key value"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1410"},"#1410"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"QuerySelect::offset")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"QuerySelect::limit")," takes in ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<Option<u64>>")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," would reset them"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1236"},"#1236"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"DatabaseConnection::close")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1381"},"#1381"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"is_null")," getter for ",(0,r.kt)("inlineCode",{parentName:"li"},"ColumnDef")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1177"},"#1177"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveValue::reset")," to convert ",(0,r.kt)("inlineCode",{parentName:"li"},"Unchanged")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"Set")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1415"},"#1415"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryTrait::apply_if")," to optionally apply a filter"),(0,r.kt)("li",{parentName:"ul"},"Added the ",(0,r.kt)("inlineCode",{parentName:"li"},"sea-orm-internal")," feature flag to expose some SQLx types",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1297"},"#1297"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"DatabaseConnection::get_*_connection_pool()")," for accessing the inner SQLx connection pool"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1434"},"#1434"),"] Re-exporting SQLx errors")))),(0,r.kt)("h2",{id:"cli-enhancements"},"CLI Enhancements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/846"},"#846"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1186"},"#1186"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1318"},"#1318"),"] Generate ",(0,r.kt)("inlineCode",{parentName:"li"},"#[serde(skip_deserializing)]")," for primary key columns"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1171"},"#1171"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1320"},"#1320"),"] Generate ",(0,r.kt)("inlineCode",{parentName:"li"},"#[serde(skip)]")," for hidden columns"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1124"},"#1124"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1321"},"#1321"),"] Generate entity with extra derives and attributes for model struct")),(0,r.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,r.kt)("p",null,"SeaORM plays well with the other crates in the async ecosystem. We maintain an array of example projects for building REST, GraphQL and gRPC services. More examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/issues/269"},"wanted"),"!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix v4 Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix3_example"},"Actix v3 Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/salvo_example"},"Salvo Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic Example"))),(0,r.kt)("h2",{id:"sponsor"},"Sponsor"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," profile is up! SeaQL.org is an independent open-source organization run by passionate developers. If you enjoy using SeaORM, please star and share our repositories. If you feel generous, a small donation will be greatly appreciated, and goes a long way towards sustaining the project."),(0,r.kt)("p",null,"A big shout out to our sponsors \ud83d\ude07:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tugascript"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/64930104?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Afonso Barracha")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/deansheather"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/11241812?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Dean Sheather")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/DominoTree"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/5438118?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Nick Price")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/rgoracz"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/6758092?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Roland Gor\xe1cz")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/hgiesel"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/7188844?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Henrik Giesel")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/trueb2"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/8592049?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Jacob Trueb")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/siketyan"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/12772118?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Naoki Ikeguchi")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/manfredcml"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/27536502?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Manfred Lee")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/marcusbuffett"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1834328?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Marcus Buffett")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/efrain2007"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/65697999?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"efrain2007"))))),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and build together for Rust's future."),(0,r.kt)("p",null,"Here is the roadmap for SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/12"},(0,r.kt)("inlineCode",{parentName:"a"},"0.12.x")),"."))}u.isMDXComponent=!0}}]);