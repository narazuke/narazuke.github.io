(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz");t.a=function(e){var t,a=e.location,n=e.title,i=e.children,o="/"===a.pathname;return t=o?l.a.createElement("h1",{className:"main-heading"},l.a.createElement(r.Link,{to:"/"},n)):l.a.createElement(r.Link,{className:"header-link-home",to:"/"},n),l.a.createElement("div",{className:"global-wrapper","data-is-root-path":o},l.a.createElement("header",{className:"global-header"},t),l.a.createElement("main",null,i))}},MN1z:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("Bl7J");t.default=function(e){var t,a=e.pageContext,n=e.data,o=e.location,c=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.tag,s=n.allMarkdownRemark,d=s.edges,u=s.totalCount,p=u+" post"+(1===u?"":"s")+' tagged with "'+m+'"';return l.a.createElement(i.a,{location:o,title:c},l.a.createElement("h1",null,p),l.a.createElement("ul",null,d.map((function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter.title,i=t.frontmatter.description;return l.a.createElement("div",null,l.a.createElement("h2",{key:a},l.a.createElement(r.Link,{to:a},n)),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:i},itemProp:"description"}))}))),l.a.createElement(r.Link,{to:"/tags"},"All tags"))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-e0a3236875affbf150c7.js.map