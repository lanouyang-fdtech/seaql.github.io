"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[514,371],{2051:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ie});var a=n(6687),l=n(4923),o=n(4598),r=n(9861),i=n(5317),c=n(2274),s=n(9522),d=n(3934),m=n(8282),u=n(4215),b=n(5923),p=n(9819);const h="backToTopButton_pmCc",E="backToTopButtonShow_T_1n";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(i(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var g=n(8452),v=n(8064),_=n(9687),k=n(6640),C=n(5374),I=n(1308);function S(e){return a.createElement("svg",(0,I.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_zQLv",Z="collapseSidebarButtonIcon_gpRC";function T(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(S,{className:Z}))}var x=n(3279),y=n(1682);const w=Symbol("EmptyContext"),L=a.createContext(w);function A(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:o},t)}var M=n(2202),B=n(1860),F=n(543),H=n(6236);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function R(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),f=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),g=(0,c._F)(t,o),v=(0,B.Mg)(h,o),{collapsed:_,setCollapsed:C}=(0,M.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(L);if(e===w)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!_),N(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,y.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:g,collapsed:_,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&C(!0)}),[b,S,s,C,E]),a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":_},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(F.Z,(0,I.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!_:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(q,{items:m,tabIndex:_?-1:0,onItemClick:n,activePath:o,level:i+1})))}var D=n(5494),V=n(368);const W="menuExternalLink_YFFx";function z(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,o),E=(0,D.Z)(m);return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(F.Z,(0,I.Z)({className:(0,l.Z)("menu__link",!E&&W,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(V.Z,null)))}const Y="menuHtmlItem_oJ3s";function Q(e){let{item:t,level:n,index:o}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),c&&[Y,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:i}})}function K(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(R,(0,I.Z)({item:t},n));case"html":return a.createElement(Q,(0,I.Z)({item:t},n));default:return a.createElement(z,(0,I.Z)({item:t},n))}}function U(e){let{items:t,...n}=e;return a.createElement(A,null,t.map(((e,t)=>a.createElement(K,(0,I.Z)({key:t,item:e,index:t},n)))))}const q=(0,a.memo)(U),J="menu_I8mH",X="menuWithAnnouncementBar_ZQ4B";function j(e){let{path:t,sidebar:n,className:o}=e;const i=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",J,i&&X,o)},a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}const G="sidebar_XIDr",O="sidebarWithHideableNavbar_losK",$="sidebarHidden_tmtQ",ee="sidebarLogo_MfQg";function te(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,k.L)();return a.createElement("div",{className:(0,l.Z)(G,i&&O,r&&$)},i&&a.createElement(C.Z,{tabIndex:-1,className:ee}),a.createElement(j,{path:t,sidebar:n}),c&&a.createElement(T,{onClick:o}))}const ne=a.memo(te);var ae=n(9672),le=n(1771);const oe=e=>{let{sidebar:t,path:n}=e;const o=(0,le.e)();return a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function re(e){return a.createElement(ae.Zo,{component:oe,props:e})}const ie=a.memo(re);function ce(e){const t=(0,_.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ne,e),l&&a.createElement(ie,e))}const se="expandButton_ffhw",de="expandButtonIcon_RrVa";function me(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:se,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:de}))}const ue={docSidebarContainer:"docSidebarContainer_Xu8c",docSidebarContainerHidden:"docSidebarContainerHidden_MwIB",sidebarViewport:"sidebarViewport_t7Su"};function be(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function pe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,v.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),!c&&(0,g.n)()&&s(!0),o((e=>!e))}),[o,c]);return a.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,ue.docSidebarContainer,n&&ue.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue.docSidebarContainer)&&n&&s(!0)}},a.createElement(be,null,a.createElement("div",{className:(0,l.Z)(ue.sidebarViewport,c&&ue.sidebarViewportHidden)},a.createElement(ce,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(me,{toggleSidebar:d}))))}const he={docMainContainer:"docMainContainer_foid",docMainContainerEnhanced:"docMainContainerEnhanced_SnvJ",docItemWrapperEnhanced:"docItemWrapperEnhanced_gYVW"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(he.docMainContainer,(t||!o)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}const fe="docPage_Aekw",ge="docsWrapper_jMKT";function ve(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ge},a.createElement(f,null),a.createElement("div",{className:fe},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=n(371),ke=n(208);function Ce(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ie(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(_e.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ve,null,i)))))}},371:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(6687),l=n(4215),o=n(4598),r=n(8282);function i(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},9522:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>r});var a=n(6687),l=n(1682);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);