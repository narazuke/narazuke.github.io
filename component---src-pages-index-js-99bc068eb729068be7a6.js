(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(k,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),k=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,I=e.draggable,z=g||h;if(!z)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:N?1:0,transition:V?"opacity "+y+"ms":"none"},s),H="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&P,s,f),M={title:t,alt:this.state.isVisible?"":a,style:C,className:m,itemProp:E},W=this.state.isHydrated?p(z):z[0];if(g)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&P)}),W.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:M,imageVariants:z,generateSources:R}),W.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:M,imageVariants:z,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(z),d.default.createElement(k,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:z}))}}));if(h){var j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},V&&P)}),W.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:M,imageVariants:z,generateSources:R}),W.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:M,imageVariants:z,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(z),d.default.createElement(k,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:z}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}N.propTypes={resolutions:V,sizes:T,fixed:H(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:H(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=N;t.default=P},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz");t.a=function(e){var t,a=e.location,r=e.title,l=e.children,s="/"===a.pathname;return t=s?i.a.createElement("h1",{className:"main-heading"},i.a.createElement(n.Link,{to:"/"},r)):i.a.createElement(n.Link,{className:"header-link-home",to:"/"},r),i.a.createElement("div",{className:"global-wrapper","data-is-root-path":s},i.a.createElement("header",{className:"global-header"},t),i.a.createElement("main",null,l))}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("9eSz"),s=a.n(l),o=function(e){return i.a.createElement(n.StaticQuery,{query:"3043702316",render:function(t){var a=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return a?i.a.createElement(s.a,{fluid:a.node.childImageSharp.fluid,alt:e.alt,imgStyle:e.style,className:e.className}):null}})},d=function(){var e,t=null===(e=Object(n.useStaticQuery)("3321239784").site.siteMetadata)||void 0===e?void 0:e.author;return i.a.createElement("div",{className:"bio",style:{margin:"auto"}},t.map((function(e){var t,a="profile-pic-"+e.name+".jpg";return i.a.createElement("div",{style:{width:"50%"}},i.a.createElement("div",{style:{width:"100px"}},i.a.createElement(o,{filename:a,style:{borderRadius:"50%"}})),(null==e?void 0:e.name)&&i.a.createElement("p",null,i.a.createElement("strong",null,e.name)," ",(null==e?void 0:e.summary)||null," ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://github.com/"+((null==e||null===(t=e.social)||void 0===t?void 0:t.github)||"")},"Github")))})))},c=a("Bl7J"),u=a("vrFN");t.default=function(e){var t,a=e.data,r=e.location,l=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.allMarkdownRemark.nodes;return 0===s.length?i.a.createElement(c.a,{location:r,title:l},i.a.createElement(u.a,{title:"All posts"}),i.a.createElement(d,null),i.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):i.a.createElement(c.a,{location:r,title:l},i.a.createElement(u.a,{title:"All posts"}),i.a.createElement(d,null),i.a.createElement("ol",{style:{listStyle:"none"}},s.map((function(e){var t,a=e.frontmatter.title||e.fields.slug;return i.a.createElement("li",{key:e.fields.slug},i.a.createElement("hr",null),i.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},i.a.createElement("header",null,i.a.createElement("h2",null,i.a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},i.a.createElement("span",{itemProp:"headline"},a))),i.a.createElement("small",null,e.frontmatter.created),i.a.createElement("div",{className:"tag-list"},null===(t=e.frontmatter.tag)||void 0===t?void 0:t.map((function(e){return i.a.createElement("div",{className:"tag"},i.a.createElement("small",null,i.a.createElement(n.Link,{to:"/tags/"+e+"/"},e)))})))),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},vrFN:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("TJpk"),l=a("Wbzz"),s=function(e){var t,a,r,s=e.description,o=e.lang,d=e.meta,c=e.title,u=Object(l.useStaticQuery)("500847697").site,f=s||u.siteMetadata.description,m=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return i.a.createElement(n.Helmet,{htmlAttributes:{lang:o},title:c,titleTemplate:m?"%s | "+m:null,meta:[{name:"description",content:f},{property:"og:title",content:c},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:f}].concat(d)})};s.defaultProps={lang:"en",meta:[],description:""},t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-99bc068eb729068be7a6.js.map