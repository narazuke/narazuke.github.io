(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("tBDR"),o=function(){var e,t=null===(e=Object(r.d)("3321239784").site.siteMetadata)||void 0===e?void 0:e.author;return n.a.createElement("div",{className:"bio",style:{margin:"auto"}},t.map((function(e){var t,a="profile-pic-"+e.name+".jpg";return n.a.createElement("div",{style:{width:"50%"}},n.a.createElement("div",{style:{width:"100px"}},n.a.createElement(i.a,{filename:a,style:{borderRadius:"50%"}})),(null==e?void 0:e.name)&&n.a.createElement("p",null,n.a.createElement("strong",null,e.name)," ",(null==e?void 0:e.summary)||null," ",n.a.createElement("br",null),n.a.createElement("a",{href:"https://github.com/"+((null==e||null===(t=e.social)||void 0===t?void 0:t.github)||"")},"Github")))})))},c=a("Bl7J"),s=a("vrFN"),m=a("V33N");t.default=function(e){var t,a=e.data,l=e.location,i=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=a.allMarkdownRemark.edges;return 0===u.length?n.a.createElement(c.a,{location:l,title:i},n.a.createElement(s.a,{title:"All posts"}),n.a.createElement(o,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(c.a,{location:l,title:i},n.a.createElement(s.a,{title:"All posts"}),n.a.createElement(o,null),n.a.createElement("hr",null),n.a.createElement(r.a,{to:"/tags"},"All tags"),n.a.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.node;return n.a.createElement(m.a,{node:t})}))))}},V33N:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("tBDR");t.a=function(e){var t,a,l=e.node;return n.a.createElement("li",{className:"post-list",key:l.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.a,{to:l.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},l.frontmatter.title))),n.a.createElement("small",null,l.frontmatter.created),n.a.createElement("div",{className:"tag-list"},null===(t=l.frontmatter.tag)||void 0===t?void 0:t.map((function(e){return n.a.createElement("small",null,n.a.createElement("div",{className:"tag"},n.a.createElement(r.a,{to:"/tags/"+e+"/"},e)))})))),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:l.frontmatter.description||l.excerpt},itemProp:"description"})),null===(a=l.frontmatter.author)||void 0===a?void 0:a.map((function(e){return n.a.createElement("small",{className:"profile-mini"},n.a.createElement("figure",null,n.a.createElement(i.a,{filename:"profile-pic-"+e+".jpg",style:{borderRadius:"50%"},fixed:!0})),n.a.createElement("div",null,e))}))),n.a.createElement("hr",null))}},vrFN:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("TJpk"),i=a("Wbzz"),o=function(e){var t,a,l,o=e.description,c=e.lang,s=e.meta,m=e.title,u=Object(i.d)("500847697").site,d=o||u.siteMetadata.description,p=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return n.a.createElement(r.Helmet,{htmlAttributes:{lang:c},title:m,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:d},{property:"og:title",content:m},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(l=a.social)||void 0===l?void 0:l.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:d}].concat(s)})};o.defaultProps={lang:"en",meta:[],description:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-index-js-5416bfe4849e5fc3a023.js.map