"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7549],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,h=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5488:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return y}});var o=r(3905),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e};const m={},f="Welcome",h={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"Welcome to the Playwright Community. We are so glad to have you here. In our community section take a look at our videos section to see videos on conference talks, live streams, feature videos and release videos.",source:"@site/community/0-welcome.mdx",sourceDirName:".",slug:"/welcome",permalink:"/community/welcome",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"community",next:{title:"Ambassadors",permalink:"/community/ambassadors"}},d={},y=[{value:"Ambassadors",id:"ambassadors",level:2},{value:"GitHub",id:"github",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Community Discord",id:"community-discord",level:2},{value:"Stack Overflow",id:"stack-overflow",level:2},{value:"YouTube",id:"youtube",level:2},{value:"Blog",id:"blog",level:2},{value:"News",id:"news",level:2}],g={toc:y};function b(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&u.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=p(p({},g),c),a(t,i({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("h1",p({},{id:"welcome"}),"Welcome"),(0,o.kt)("p",null,"Welcome to the Playwright Community. We are so glad to have you here. In our community section take a look at our videos section to see videos on ",(0,o.kt)("a",p({parentName:"p"},{href:"./conference-videos"}),"conference talks"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"./live-streams"}),"live streams"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"./feature-videos"}),"feature videos")," and ",(0,o.kt)("a",p({parentName:"p"},{href:"./release-videos"}),"release videos"),"."),(0,o.kt)("h2",p({},{id:"ambassadors"}),"Ambassadors"),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",p({parentName:"p"},{href:"./ambassadors"}),"Ambassador page")," to the see the awesome people creating Playwright content and sharing it with the community."),(0,o.kt)("h2",p({},{id:"github"}),"GitHub"),(0,o.kt)("p",null,"We love stars so make sure you ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/microsoft/playwright"}),"star us on GitHub"),"."),(0,o.kt)("p",null,"Please create an issue for the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"https://github.com/microsoft/playwright/issues/new?assignees=&labels=&template=bug.md&title=%5BBUG%5D"}),"Bug Reports")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"https://github.com/microsoft/playwright/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFeature%5D"}),"Feature Requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"https://github.com/microsoft/playwright/issues/new?assignees=&labels=&template=regression.md&title=%5BREGRESSION%5D%3A+"}),"Report Regression")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"https://github.com/microsoft/playwright/security/policy"}),"Report a security vulnerability"))),(0,o.kt)("h2",p({},{id:"contributing"}),"Contributing"),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/main/CONTRIBUTING.md"}),"contributing guide")," if you would like to contribute to Playwright."),(0,o.kt)("h2",p({},{id:"community-discord"}),"Community Discord"),(0,o.kt)("p",null,"Join our community ",(0,o.kt)("a",p({parentName:"p"},{href:"https://aka.ms/playwright/discord"}),"Discord Server")," to connect with other developers using Playwright, ask questions in our ",(0,o.kt)("a",p({parentName:"p"},{href:"https://discord.com/channels/807756831384403968/1054804523652231198"}),"'help-playwright'")," forum, share your articles and videos and join live events on the Playwright stage."),(0,o.kt)("h2",p({},{id:"stack-overflow"}),"Stack Overflow"),(0,o.kt)("p",null,"Read through the ",(0,o.kt)("a",p({parentName:"p"},{href:"https://stackoverflow.com/tags/playwright"}),"existing questions")," tagged with ",(0,o.kt)("strong",{parentName:"p"},"playwright")," or ",(0,o.kt)("a",p({parentName:"p"},{href:"https://stackoverflow.com/questions/ask?tags=playwright"}),"ask your own"),"!"),(0,o.kt)("h2",p({},{id:"youtube"}),"YouTube"),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",p({parentName:"p"},{href:"https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg"}),"YouTube channel")," for getting started series, feature videos and new releases."),(0,o.kt)("h2",p({},{id:"blog"}),"Blog"),(0,o.kt)("p",null,"Follow our ",(0,o.kt)("a",p({parentName:"p"},{href:"https://dev.to/playwright"}),"Blog")," on dev.to for official posts on Playwright."),(0,o.kt)("h2",p({},{id:"news"}),"News"),(0,o.kt)("p",null,"For the latest news about Playwright, ",(0,o.kt)("a",p({parentName:"p"},{href:"https://twitter.com/playwrightweb"}),"follow ",(0,o.kt)("strong",{parentName:"a"},"@playwrightweb")," on Twitter"),"."))}b.isMDXComponent=!0}}]);