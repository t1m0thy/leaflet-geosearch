(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{k2q9:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return s})),r.d(t,"default",(function(){return u}));r("5hJT"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("PJhk");var n=r("/FXl"),a=r("TjRS"),o=r("KUxS"),l=r("yYOO"),c=r("lEln");r("aD51");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/usage.mdx"}});var i={_frontmatter:s},b=a.a;function u(e){var t,r,u=e.components,d=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(b,p({},i,d,{components:u,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"usage"},"Usage"),Object(n.b)("p",null,"There are two ways in which ",Object(n.b)("inlineCode",{parentName:"p"},"leaflet-geosearch")," can be used. Direct usage, for example for address forms, or embedded in a leaflet map to search for points of interest."),Object(n.b)("h2",{id:"using-the-providers-directly"},"Using the providers directly"),Object(n.b)("p",null,"All providers can be used without leaflet. You might want to bind them to a form;"),Object(n.b)(o.a,{__position:0,__code:'<Search provider="OpenStreetMap" />',__scope:(t={props:d,DefaultLayout:a.a,Playground:o.a,Map:l.a,Search:c.a},t.DefaultLayout=a.a,t._frontmatter=s,t),mdxType:"Playground"},Object(n.b)(c.a,{provider:"OpenStreetMap",mdxType:"Search"})),Object(n.b)("pre",null,Object(n.b)("code",p({parentName:"pre"},{className:"language-js"}),"import { OpenStreetMapProvider } from 'leaflet-geosearch';\n\nconst provider = new OpenStreetMapProvider();\nconst results = await provider.search({ query: input.value });\n")),Object(n.b)("h2",{id:"using-the-leaflet-control"},"Using the leaflet control"),Object(n.b)("p",null,"Or add the ",Object(n.b)("inlineCode",{parentName:"p"},"GeoSearchControl")," to the leaflet map instance, to render a search control on your map;"),Object(n.b)("p",null,"See ",Object(n.b)("a",p({parentName:"p"},{href:"/leaflet-control"}),"Leaflet Control")," for more info about the the options this control provides."),Object(n.b)(o.a,{__position:1,__code:'<Map provider="OpenStreetMap" />',__scope:(r={props:d,DefaultLayout:a.a,Playground:o.a,Map:l.a,Search:c.a},r.DefaultLayout=a.a,r._frontmatter=s,r),mdxType:"Playground"},Object(n.b)(l.a,{provider:"OpenStreetMap",mdxType:"Map"})),Object(n.b)("pre",null,Object(n.b)("code",p({parentName:"pre"},{className:"language-js"}),"import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';\n\nconst searchControl = new GeoSearchControl({\n  provider: new OpenStreetMapProvider(),\n});\n\nmap.addControl(searchControl);\n")),Object(n.b)("h2",{id:"results"},"Results"),Object(n.b)("p",null,"The search event of all providers return an array of ",Object(n.b)("inlineCode",{parentName:"p"},"result")," objects. The base structure is uniform between the providers. It contains objects matching the following interface:"),Object(n.b)("pre",null,Object(n.b)("code",p({parentName:"pre"},{className:"language-ts"}),"interface result {\n  x: number; // lon\n  y: number; // lat\n  label: string; // formatted address\n  bounds: [\n    [number, number], // south, west - lat, lon\n    [number, number], // north, east - lat, lon\n  ];\n  raw: any; // raw provider result\n}\n")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/usage.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-usage-mdx-599efa7e0fb41d99ef5d.js.map