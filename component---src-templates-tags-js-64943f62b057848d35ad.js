(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Bl7J:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){var t,a=e.location,l=e.title,i=e.children,c="/"===a.pathname;return t=c?n.a.createElement("h1",{className:"main-heading"},n.a.createElement(r.a,{to:"/"},l)):n.a.createElement(r.a,{className:"header-link-home",to:"/"},l),n.a.createElement("div",{className:"global-wrapper","data-is-root-path":c},n.a.createElement("header",{className:"global-header"},t),n.a.createElement("main",null,i),n.a.createElement("footer",null,"(c) 2021 ",l))}},MN1z:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("Bl7J"),c=a("V33N");t.default=function(e){var t,a=e.pageContext,l=e.data,o=e.location,m=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.tag,u=l.allMarkdownRemark,d=u.edges,p='"'+s+'" : '+u.totalCount+"件";return n.a.createElement(i.a,{location:o,title:m},n.a.createElement("h2",null,p),n.a.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.node;return n.a.createElement(c.a,{node:t})}))),n.a.createElement(r.a,{to:"/tags"},"All tags"))}},V33N:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("tBDR");t.a=function(e){var t,a,l=e.node;return n.a.createElement("li",{className:"post-list",key:l.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.a,{to:l.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},l.frontmatter.title))),n.a.createElement("small",null,l.frontmatter.created),n.a.createElement("div",{className:"tag-list"},null===(t=l.frontmatter.tag)||void 0===t?void 0:t.map((function(e){return n.a.createElement("small",null,n.a.createElement("div",{className:"tag"},n.a.createElement(r.a,{to:"/tags/"+e+"/"},e)))})))),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:l.frontmatter.description||l.excerpt},itemProp:"description"})),null===(a=l.frontmatter.author)||void 0===a?void 0:a.map((function(e){return n.a.createElement("small",{className:"profile-mini"},n.a.createElement("figure",null,n.a.createElement(i.a,{filename:"profile-pic-"+e+".jpg",style:{borderRadius:"50%"},fixed:!0})),n.a.createElement("div",null,e))}))),n.a.createElement("hr",null))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-64943f62b057848d35ad.js.map