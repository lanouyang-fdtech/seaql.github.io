"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1708],{8859:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,h=c["".concat(m,".").concat(u)]||c[u]||p[u]||s;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(1308),i=(n(6687),n(8859));const s={},r="Consumer",o={unversionedId:"streamer/consumer",id:"streamer/consumer",title:"Consumer",description:"The Consumer trait defines the common interface of stream consumers.",source:"@site/docs/03-streamer/03-consumer.md",sourceDirName:"03-streamer",slug:"/streamer/consumer",permalink:"/preview/pr-118/SeaStreamer/docs/next/streamer/consumer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/03-streamer/03-consumer.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1711348951,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Producer",permalink:"/preview/pr-118/SeaStreamer/docs/next/streamer/producer"},next:{title:"Inter Process",permalink:"/preview/pr-118/SeaStreamer/docs/next/processors/inter-process"}},m={},l=[{value:"<code>ConsumerOptions</code>",id:"consumeroptions",level:2},{value:"<code>ConsumerMode</code>",id:"consumermode",level:3},{value:"<code>RealTime</code>",id:"realtime",level:4},{value:"<code>Resumable</code>",id:"resumable",level:4},{value:"<code>LoadBalanced</code>",id:"loadbalanced",level:4},{value:"<code>ConsumerGroup</code>",id:"consumergroup",level:3},{value:"<code>next</code>",id:"next",level:2},{value:"<code>stream</code>",id:"stream",level:2},{value:"<code>assign</code>",id:"assign",level:2},{value:"<code>unassign</code>",id:"unassign",level:2},{value:"<code>rewind</code>",id:"rewind",level:2},{value:"<code>seek</code>",id:"seek",level:2},{value:"Auto Stream Reset",id:"auto-stream-reset",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"consumer"},"Consumer"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer/*/sea_streamer/trait.Consumer.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Consumer"))," trait defines the common interface of stream consumers."),(0,i.kt)("p",null,"Implemented by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaConsumer.html"},(0,i.kt)("inlineCode",{parentName:"a"},"KafkaConsumer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisConsumer.html"},(0,i.kt)("inlineCode",{parentName:"a"},"RedisConsumer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConsumer.html"},(0,i.kt)("inlineCode",{parentName:"a"},"StdioConsumer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-file/*/sea_streamer_file/struct.FileConsumer.html"},(0,i.kt)("inlineCode",{parentName:"a"},"FileConsumer")))),(0,i.kt)("h2",{id:"consumeroptions"},(0,i.kt)("inlineCode",{parentName:"h2"},"ConsumerOptions")),(0,i.kt)("h3",{id:"consumermode"},(0,i.kt)("inlineCode",{parentName:"h3"},"ConsumerMode")),(0,i.kt)("p",null,"There are 3 modes:"),(0,i.kt)("h4",{id:"realtime"},(0,i.kt)("inlineCode",{parentName:"h4"},"RealTime")),(0,i.kt)("p",null,"This is the 'vanilla' stream consumer. It does not auto-commit, and thus only consumes messages from now on."),(0,i.kt)("h4",{id:"resumable"},(0,i.kt)("inlineCode",{parentName:"h4"},"Resumable")),(0,i.kt)("p",null,"When the process restarts, it will resume the stream from the previous committed sequence."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"redis--kafka-semantics"},"Redis / Kafka semantics"),(0,i.kt)("p",{parentName:"admonition"},"It will use a group id unique to this host: on a physical machine, it will use the mac address.\nInside a docker container, it will use the container id.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"redis-semantics"},"Redis semantics"),(0,i.kt)("p",{parentName:"admonition"},"Redis requires consumers to self-assign consumer IDs. If unset, SeaStreamer uses a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"host id")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"process id")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"thread id")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("h4",{parentName:"admonition",id:"stdio--file-semantics"},"Stdio / File semantics"),(0,i.kt)("p",{parentName:"admonition"},"Currently unsupported.")),(0,i.kt)("h4",{id:"loadbalanced"},(0,i.kt)("inlineCode",{parentName:"h4"},"LoadBalanced")),(0,i.kt)("p",null,"You should assign a consumer group manually. The load-balancing mechanism is implementation-specific."),(0,i.kt)("h3",{id:"consumergroup"},(0,i.kt)("inlineCode",{parentName:"h3"},"ConsumerGroup")),(0,i.kt)("p",null,"A consumer group is a string for clients to identify themselves to the streaming server. So that when you reconnect, the states can be downloaded from the server. From the broker's point of view, it is all that matters. The client can connect from any host or network."),(0,i.kt)("p",null,"Multiple consumers can share the same consumer group, and remain connected to the server at the same time. Usually, the intention is to achieve load-balancing. The precise semantics is backend-specific."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"kafka-semantics"},"Kafka semantics"),(0,i.kt)("p",{parentName:"admonition"},"If multiple consumers shares the same group, only one consumer in the group will receive a message, i.e. it is load-balanced."),(0,i.kt)("p",{parentName:"admonition"},"However, the load-balancing mechanism is what makes Kafka different:"),(0,i.kt)("p",{parentName:"admonition"},"Each stream is divided into multiple shards (known as partition), and each partition will be assigned to only one consumer in a group."),(0,i.kt)("p",{parentName:"admonition"},"Say there are 2 consumers (in the group) and 2 partitions, then each consumer will receive messages from one partition, and they are thus load-balanced."),(0,i.kt)("p",{parentName:"admonition"},"If there are 2 consumers and 3 partitions, then one consumer will be assigned 2 partitions, and the other will be assigned only 1."),(0,i.kt)("p",{parentName:"admonition"},"However if the stream has only 1 partition, even if there are many consumers, these messages will only be received by the assigned consumer, and other consumers will be in stand-by mode, resulting in a hot-failover setup.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"redis-semantics-1"},"Redis semantics"),(0,i.kt)("p",{parentName:"admonition"},"Multiple consumers in the same group share the same stream. This is load-balanced in a first-ask-first-served manner. This can be considered dynamic load-balancing: faster consumers will consume more messages."),(0,i.kt)("p",{parentName:"admonition"},"As a consequence, ",(0,i.kt)("inlineCode",{parentName:"p"},"ack")," has to be done per message. It becomes two steps in SeaStreamer, ack and commit: ",(0,i.kt)("inlineCode",{parentName:"p"},"ack")," is non-blocking, it will buffer acks internally and ",(0,i.kt)("inlineCode",{parentName:"p"},"commit")," to Redis at a regular interval, or upon your request. There are multiple ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/enum.AutoCommit.html"},"auto ack / commit mechanisms")," to choose from: ",(0,i.kt)("inlineCode",{parentName:"p"},"Immediate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Delayed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Rolling"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Disabled"),"."),(0,i.kt)("p",{parentName:"admonition"},"SeaStreamer also implements automatic failover, where leftover messages for other consumers can be 'claimed' after a set period of time, assuming they are dead. This can be configured via the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisConsumerOptions.html#method.set_auto_claim_interval"},"auto claim")," options.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"stdio--file-semantics-1"},"Stdio / File semantics"),(0,i.kt)("p",{parentName:"admonition"},"If multiple consumers share the same group, only one in the group will receive a message.\nThis is load-balanced in a round-robin fashion.")),(0,i.kt)("h2",{id:"next"},(0,i.kt)("inlineCode",{parentName:"h2"},"next")),(0,i.kt)("p",null,"Poll and receive one message: it awaits until there are new messages.\nThis method can be called from multiple threads."),(0,i.kt)("h2",{id:"stream"},(0,i.kt)("inlineCode",{parentName:"h2"},"stream")),(0,i.kt)("p",null,"Returns an async stream which implements the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/futures-core/*/futures_core/stream/trait.Stream.html"},"Stream Trait"),". You cannot create multiple streams from the same consumer, nor perform any operation while streaming."),(0,i.kt)("p",null,"It allows you to do neat things:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let items = consumer\n    .stream()\n    .take(num)\n    .map(process_message)\n    .collect::<Vec<_>>()\n    .await\n")),(0,i.kt)("h2",{id:"assign"},(0,i.kt)("inlineCode",{parentName:"h2"},"assign")),(0,i.kt)("p",null,"Assign this consumer to a particular shard. Can be called multiple times to assign\nto multiple shards. You cannot assign streams that has not been subscribed."),(0,i.kt)("p",null,"It will only take effect on the next ",(0,i.kt)("inlineCode",{parentName:"p"},"Consumer::seek")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Consumer::rewind"),"."),(0,i.kt)("h2",{id:"unassign"},(0,i.kt)("inlineCode",{parentName:"h2"},"unassign")),(0,i.kt)("p",null,"Unassign a shard. Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerNotAssigned")," if this consumer has not been assigned to this stream or shard. "),(0,i.kt)("h2",{id:"rewind"},(0,i.kt)("inlineCode",{parentName:"h2"},"rewind")),(0,i.kt)("p",null,"Rewind the stream to a particular sequence number."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"kafka-semantics-1"},"Kafka semantics"),(0,i.kt)("p",{parentName:"admonition"},"If the consumer is not already assigned, shard ZERO will be used. This async method is not cancel safe. You must await this future, and this Consumer will be unusable for any operations until it finishes.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"redis-semantics-2"},"Redis semantics"),(0,i.kt)("p",{parentName:"admonition"},"In Redis a sequence number comprises a timestamp, so rewind is nearly the same as seek, but more precise: you can rewind to a particular point within a millisecond.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"file-semantics"},"File semantics"),(0,i.kt)("p",{parentName:"admonition"},"Affects all streams.\nIf the consumer is subscribing to multiple streams, it will be sought by the first stream key.\nIt revokes the group membership of the Consumer.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("h4",{parentName:"admonition",id:"stdio-semantics"},"Stdio semantics"),(0,i.kt)("p",{parentName:"admonition"},"This is not implemented by the Stdio backend.")),(0,i.kt)("h2",{id:"seek"},(0,i.kt)("inlineCode",{parentName:"h2"},"seek")),(0,i.kt)("p",null,"Seek all streams to the given point in time. It will start consuming from the earliest message with a timestamp later than ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"kafka-semantics-2"},"Kafka semantics"),(0,i.kt)("p",{parentName:"admonition"},"This will self-assign all shards. This async method is not cancel safe. You must await this future, and this Consumer will be unusable for any operations until it finishes.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"redis-semantics-3"},"Redis semantics"),(0,i.kt)("p",{parentName:"admonition"},"Seeking a Consumer will detach it from the Consumer Group, if it has been assigned one. It effectively makes it a RealTime Consumer.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"file-semantics-1"},"File semantics"),(0,i.kt)("p",{parentName:"admonition"},"Affects all streams.\nIf the consumer is subscribing to multiple streams, it will be sought by the first stream key.\nIt revokes the group membership of the Consumer.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("h4",{parentName:"admonition",id:"stdio-semantics-1"},"Stdio semantics"),(0,i.kt)("p",{parentName:"admonition"},"This is not implemented by the Stdio backend.")),(0,i.kt)("h2",{id:"auto-stream-reset"},"Auto Stream Reset"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"kafka-semantics-3"},"Kafka semantics"),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoOffsetReset")," option allows resetting the stream to ",(0,i.kt)("inlineCode",{parentName:"p"},"Earliest")," if a consumer group is not assigned, or the consumer group has no priori state. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"Latest"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"redis-semantics-4"},"Redis semantics"),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoStreamReset")," option allows resetting the stream to ",(0,i.kt)("inlineCode",{parentName:"p"},"Earliest")," if a consumer group is not assigned, or the consumer group has no priori state. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"Latest"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"file-semantics-2"},"File semantics"),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoStreamReset")," option allows resetting the stream to ",(0,i.kt)("inlineCode",{parentName:"p"},"Earliest")," upon stream start. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"Latest"),".\nMultiple consumers streaming from the same file will share the same file handle if they are all ",(0,i.kt)("inlineCode",{parentName:"p"},"Latest"),".\nCalling seek/rewind on a consumer would detach it from the consumer group, and will open a new file handle.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("h4",{parentName:"admonition",id:"stdio-semantics-2"},"Stdio semantics"),(0,i.kt)("p",{parentName:"admonition"},"This is not implemented by the Stdio backend.")))}p.isMDXComponent=!0}}]);