(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("tBDR"),o=function(){var e,t=null===(e=Object(r.d)("3321239784").site.siteMetadata)||void 0===e?void 0:e.author;return l.a.createElement("div",{className:"bio",style:{margin:"auto"}},t.map((function(e){var t,a=e.name,n="profile-pic-"+a+".jpg";return l.a.createElement("div",{key:"bio-list",style:{width:"50%"}},l.a.createElement("div",{style:{width:"100px"}},l.a.createElement(r.a,{to:"/author/"+a+"/"},l.a.createElement(i.a,{filename:n,style:{borderRadius:"50%"}}))),(null==e?void 0:e.name)&&l.a.createElement("p",null,l.a.createElement("strong",null,e.name)," ",(null==e?void 0:e.summary)||null," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/"+((null==e||null===(t=e.social)||void 0===t?void 0:t.github)||"")},"Github")))})))},c=a("Bl7J"),m=a("vrFN"),s=a("V33N");var u=function(e){var t=e.updatedIssues,a=0;return l.a.createElement("div",{className:"recent-comments"},l.a.createElement("h6",null,"最新のコメント"),l.a.createElement("ol",{className:"comments-list"},t.map((function(e){var t=e.comments;return t.totalCount>0&&(a+=1),a>5?null:l.a.createElement("li",{className:"comment-block"},t.nodes.map((function(t){var a=new Date(t.updatedAt);return l.a.createElement("div",null,l.a.createElement("div",{className:"comment-main"},l.a.createElement("div",{className:"github-avatar"},l.a.createElement("a",{href:"https://github.com/"+(t.author.login||"")}," ",l.a.createElement("img",{src:""+t.author.avatarUrl,alt:""}))),l.a.createElement("div",{className:"comment-body"},l.a.createElement("div",{className:"comment-info"},t.author.login),l.a.createElement(r.a,{to:"/"+e.body.split("/")[3]},t.body),l.a.createElement("div",{className:"comment-info"},a.toLocaleString("jp",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}).replace(/\//g,"-")))))})))}))))};t.default=function(e){var t,a=e.data,n=e.location,i=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.edges,p=a.githubData.data.organization.repository.issues.nodes;return 0===d.length?l.a.createElement(c.a,{location:n,title:i},l.a.createElement(m.a,{title:"All posts"}),l.a.createElement(o,null),l.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.a.createElement(c.a,{location:n,title:i},l.a.createElement(m.a,{title:"All posts"}),l.a.createElement(o,null),l.a.createElement(r.a,{to:"/tags"},"All tags"),l.a.createElement("hr",null),l.a.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.node;return l.a.createElement(s.a,{key:"postcolumn-list",node:t})}))),l.a.createElement(u,{updatedIssues:p}))}},V33N:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("tBDR");t.a=function(e){var t,a,n=e.node;return l.a.createElement("li",{className:"post-list",key:n.fields.slug},l.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.a.createElement("header",null,l.a.createElement("small",null,l.a.createElement("div",{className:"category "+n.frontmatter.category},l.a.createElement(r.a,{to:"/category/"+n.frontmatter.category+"/"},n.frontmatter.category))),l.a.createElement("h2",null,l.a.createElement(r.a,{to:n.fields.slug,itemProp:"url"},l.a.createElement("span",{itemProp:"headline"},n.frontmatter.title))),l.a.createElement("small",null,n.frontmatter.created),l.a.createElement("div",{className:"tag-list"},null===(t=n.frontmatter.tag)||void 0===t?void 0:t.map((function(e){return l.a.createElement("small",{key:"post-list"},l.a.createElement("div",{className:"tag"},l.a.createElement(r.a,{to:"/tag/"+e+"/"},e)))})))),l.a.createElement("section",null,l.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.frontmatter.description||n.excerpt},itemProp:"description"})),null===(a=n.frontmatter.author)||void 0===a?void 0:a.map((function(e){return l.a.createElement("small",{key:"author-list"},l.a.createElement(r.a,{to:"/author/"+e+"/",className:"profile-mini"},l.a.createElement("figure",null,l.a.createElement(i.a,{filename:"profile-pic-"+e+".jpg",style:{borderRadius:"50%"},fixed:!0})),l.a.createElement("div",null,e)))}))),l.a.createElement("hr",null))}},vrFN:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("rid2"),i=a("Wbzz"),o=function(e){var t,a,n,o=e.description,c=e.lang,m=e.meta,s=e.title,u=Object(i.d)("500847697").site,d=o||u.siteMetadata.description,p=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return l.a.createElement(r.HelmetProvider,null,l.a.createElement(r.Helmet,{htmlAttributes:{lang:c},title:s,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(n=a.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(m)}))};o.defaultProps={lang:"en",meta:[],description:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-index-js-d20cb874f97b79a57043.js.map