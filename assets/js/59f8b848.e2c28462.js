"use strict";(self.webpackChunktibillet=self.webpackChunktibillet||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},l="RSS : Syndication par flux",s={unversionedId:"Utilisateur/Billetterie/rss",id:"Utilisateur/Billetterie/rss",title:"RSS : Syndication par flux",description:"Un flux RSS est cr\xe9\xe9 par Tenant. Il liste les 5 derniers \xe9v\xe8nements cr\xe9\xe9s.",source:"@site/docs/Utilisateur/Billetterie/rss.md",sourceDirName:"Utilisateur/Billetterie",slug:"/Utilisateur/Billetterie/rss",permalink:"/docs/Utilisateur/Billetterie/rss",draft:!1,editUrl:"https://github.com/TiBillet/documentation/tree/main/tibillet/docs/Utilisateur/Billetterie/rss.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Billetterie",permalink:"/docs/category/billetterie"},next:{title:"Trucs et astuces",permalink:"/docs/category/trucs-et-astuces"}},o={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rss--syndication-par-flux"},"RSS : Syndication par flux"),(0,i.kt)("p",null,"Un flux RSS est cr\xe9\xe9 par Tenant. Il liste les 5 derniers \xe9v\xe8nements cr\xe9\xe9s."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<tenant url>/rss/latest/feed\n")),(0,i.kt)("p",null,"Example :\n",(0,i.kt)("a",{parentName:"p",href:"https://demo.betabillet.tech/rss/latest/feed"},"https://demo.betabillet.tech/rss/latest/feed"),"."),(0,i.kt)("p",null,"Il est structur\xe9 de cette fa\xe7on :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n    <channel>\n        <title>Demo : Derniers \xe9v\xe8nements cr\xe9\xe9s</title>\n        <link>https://demo.betabillet.tech/rss/latest/feed/</link>\n        <description>Derniers \xe9v\xe8nements cr\xe9\xe9s</description>\n        <atom:link href="http://example.com/rss/latest/feed/" rel="self"></atom:link>\n        <language>fr-fr</language>\n        <lastBuildDate>Thu, 11 Aug 2022 12:26:00 +0000</lastBuildDate>\n        <item>\n            <title>Practical initiatives foreground : 05/15/27 14:30</title>\n            <link>https://demo.betabillet.tech/event/practical-initiatives-foreground-051527-1830/</link>\n            <description>Vel cum dicta deserunt. - Sit velit et. Dolorum perspiciatis magnam mollitia libero amet\n                corrupti consectetur sit. Nemo cupiditate vel architecto alias dolores dolor quisquam perferendis\n                voluptates. Impedit ut alias pariatur temporibus.\n            </description>\n            <pubDate>Thu, 11 Aug 2022 12:25:58 +0000</pubDate>\n            <guid>https://demo.betabillet.tech/event/practical-initiatives-foreground-051527-1830/</guid>\n            <enclosure length="166737" type="image/jpg"\n                       url="https://demo.betabillet.tech/media/images/1080_pEFtyVm.med"></enclosure>\n        </item>\n        <item>\n            <title>system TCP Functionality Account bypass : 06/26/23 14:30</title>\n            <link>https://demo.betabillet.tech/event/system-tcp-functionality-account-bypass-062623-1830/</link>\n            <description>Dicta quae enim quia placeat error fugiat neque. - Aspernatur ut esse ducimus. Quae nam\n                blanditiis natus reiciendis vitae harum. Assumenda dolor animi. Et assumenda sapiente blanditiis fuga\n                aut est magni. Ullam dicta quia dolorum pariatur sint fugiat aliquid similique rerum.\n            </description>\n            <pubDate>Thu, 11 Aug 2022 12:25:56 +0000</pubDate>\n            <guid>https://demo.betabillet.tech/event/system-tcp-functionality-account-bypass-062623-1830/</guid>\n            <enclosure length="38085" type="image/jpg"\n                       url="https://demo.betabillet.tech/media/images/1080_Yx3xFuJ.med"></enclosure>\n        </item>\n    </channel>\n</rss>\n')))}p.isMDXComponent=!0}}]);