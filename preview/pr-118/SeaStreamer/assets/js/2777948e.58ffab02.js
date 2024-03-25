"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2036],{8859:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=r(1308),n=(r(6687),r(8859));const s={},a="Intra Process",i={unversionedId:"processors/intra-process",id:"version-0.3.x/processors/intra-process",title:"Intra Process",description:"Here is how you might organize a mid-to-large scale stream processing project. You have a number of crates implementing different processors, each depends on sea-streamer in a workspace. Now, you want to construct a downstream crate where you connect several processors together for testing.",source:"@site/versioned_docs/version-0.3.x/04-processors/02-intra-process.md",sourceDirName:"04-processors",slug:"/processors/intra-process",permalink:"/preview/pr-118/SeaStreamer/docs/processors/intra-process",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.3.x/04-processors/02-intra-process.md",tags:[],version:"0.3.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1711348951,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inter Process",permalink:"/preview/pr-118/SeaStreamer/docs/processors/inter-process"},next:{title:"The Roadmap",permalink:"/preview/pr-118/SeaStreamer/docs/whats-next/roadmap"}},c={},l=[{value:"Stdio",id:"stdio",level:2},{value:"File",id:"file",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"intra-process"},"Intra Process"),(0,n.kt)("p",null,"Here is how you might organize a mid-to-large scale stream processing project. You have a number of crates implementing different processors, each depends on ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer")," in a workspace. Now, you want to construct a downstream crate where you connect several processors together for testing."),(0,n.kt)("h2",{id:"stdio"},"Stdio"),(0,n.kt)("p",null,"You can execute tests involving several processors by setting Stdio's ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConnectOptions.html#method.set_loopback"},"loopback")," option, where messages produced will be feed back to consumers in the same process."),(0,n.kt)("p",null,"It's just ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo test")," without any external dependency or side effects, so it's extremely quick to execute. Use a unique stream key for each test case. So if the tests fail, you will be able to diagnose the problem from the stdout log. You can check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-stdio/tests/loopback.rs"},"full example"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let stream = StreamKey::new("hello")?;\nlet mut options = StdioConnectOptions::default();\noptions.set_loopback(true);\nlet streamer = StdioStreamer::connect(StreamerUri::zero(), options).await?;\nlet producer = streamer.create_producer(stream.clone(), Default::default()).await?;\nlet mut consumer = streamer.create_consumer(&[stream.clone()], Default::default()).await?;\n\nfor i in 0..5 {\n    let mess = format!("{}", i);\n    producer.send(mess)?;\n}\n\nlet seq = collect(&mut consumer, 5).await;\nassert_eq!(seq, [0, 1, 2, 3, 4]);\n')),(0,n.kt)("h2",{id:"file"},"File"),(0,n.kt)("p",null,"You can produce-to and consume-from the same file with the File backend. You'd want to use a random file name to avoid interference with other processes."),(0,n.kt)("p",null,"The File backend is just a thin abstraction layer over tokio / async-std's async File IO. There is no network protocol involved, so it's as raw as it can be in terms of throughput."),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-file/tests/producer.rs"},"full example"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_streamer_file::FileId;\nuse sea_streamer_types::Timestamp;\nuse std::fs::OpenOptions;\n\npub fn temp_file(name: &str) -> Result<FileId, std::io::Error> {\n    let path = format!("/tmp/{name}");\n    let _file = OpenOptions::new()\n        .read(true)\n        .write(true) // Make sure we have write permission\n        .create_new(true) // Fail if this file already exists\n        .open(&path)?;\n\n    Ok(FileId::new(path))\n}\n')))}u.isMDXComponent=!0}}]);