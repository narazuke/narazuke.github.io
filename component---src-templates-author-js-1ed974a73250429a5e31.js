"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[756],{6822:function(e,t,r){var a=r(7294),l=r(1082),n=r(5679),o=r(5440);t.Z=e=>{var t,r;let{node:m}=e,c=null;return c="diary"===m.frontmatter.category?m.frontmatter.created:m.frontmatter.updated,a.createElement("li",{className:"post-list",key:m.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("small",null,a.createElement("div",{className:"category "+m.frontmatter.category},a.createElement(l.rU,{to:"/category/"+m.frontmatter.category},m.frontmatter.category))),a.createElement("h2",null,a.createElement(l.rU,{to:m.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},m.frontmatter.title))),a.createElement("small",null,a.createElement(o.Z,{dateStr:c})),a.createElement("div",{className:"tag-list"},null===(t=m.frontmatter.tag)||void 0===t?void 0:t.map((e=>a.createElement("small",{key:"post-list-"+e},a.createElement("div",{className:"tag"},a.createElement(l.rU,{to:"/tag/"+e+"/"},e))))))),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:m.frontmatter.description||m.excerpt},itemProp:"description"})),null===(r=m.frontmatter.author)||void 0===r?void 0:r.map((e=>a.createElement("small",{key:"author-list-"+e},a.createElement(l.rU,{to:"/author/"+e+"/",className:"profile-mini"},a.createElement("figure",null,a.createElement(n.Z,{filename:"profile-pic-"+e+".jpg",style:{borderRadius:"50%"},fixed:!0})),a.createElement("div",null,e)))))),a.createElement("hr",null))}},3173:function(e,t,r){r.r(t);var a=r(7294),l=r(1082),n=r(8678),o=r(6822);t.default=e=>{var t;let{pageContext:r,data:m,location:c}=e;const i=(null===(t=m.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",{author:s}=r,{edges:d,totalCount:u}=m.allMarkdownRemark,p="author "+s+" : "+u+"件";return a.createElement(n.Z,{location:c,title:i},a.createElement("h2",null,p),a.createElement("ol",{style:{listStyle:"none"}},d.sort((function(e,t){let r,a;return r="diary"===e.node.frontmatter.category?e.node.frontmatter.created:e.node.frontmatter.updated,a="diary"===t.node.frontmatter.category?t.node.frontmatter.created:t.node.frontmatter.updated,Date.parse(a)-Date.parse(r)})).map((e=>{let{node:t}=e;return a.createElement(o.Z,{node:t})}))),a.createElement(l.rU,{to:"/authors"},"All authors"))}}}]);
//# sourceMappingURL=component---src-templates-author-js-1ed974a73250429a5e31.js.map