(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{MN1z:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("Bl7J"),c=a("V33N");t.default=function(e){var t,a=e.pageContext,l=e.data,i=e.location,m=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.tag,u=l.allMarkdownRemark,d=u.edges,p='"'+s+'" : '+u.totalCount+"件";return n.a.createElement(o.a,{location:i,title:m},n.a.createElement("h2",null,p),n.a.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.node;return n.a.createElement(c.a,{node:t})}))),n.a.createElement(r.a,{to:"/tags"},"All tags"))}},V33N:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("tBDR");t.a=function(e){var t,a,l=e.node;return n.a.createElement("li",{className:"post-list",key:l.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("small",null,n.a.createElement("div",{className:"category "+l.frontmatter.category},n.a.createElement(r.a,{to:"/category/"+l.frontmatter.category+"/"},l.frontmatter.category))),n.a.createElement("h2",null,n.a.createElement(r.a,{to:l.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},l.frontmatter.title))),n.a.createElement("small",null,l.frontmatter.created),n.a.createElement("div",{className:"tag-list"},null===(t=l.frontmatter.tag)||void 0===t?void 0:t.map((function(e){return n.a.createElement("small",{key:"post-list"},n.a.createElement("div",{className:"tag"},n.a.createElement(r.a,{to:"/tag/"+e+"/"},e)))})))),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:l.frontmatter.description||l.excerpt},itemProp:"description"})),null===(a=l.frontmatter.author)||void 0===a?void 0:a.map((function(e){return n.a.createElement("small",{key:"author-list"},n.a.createElement(r.a,{to:"/author/"+e+"/",className:"profile-mini"},n.a.createElement("figure",null,n.a.createElement(o.a,{filename:"profile-pic-"+e+".jpg",style:{borderRadius:"50%"},fixed:!0})),n.a.createElement("div",null,e)))}))),n.a.createElement("hr",null))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-0a14a7a9ef9bb6d30f2e.js.map