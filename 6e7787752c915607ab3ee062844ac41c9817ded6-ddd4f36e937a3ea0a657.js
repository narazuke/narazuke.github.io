(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0EVa":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r);t.a=function(e){var t=e.dateStr,a=new Date(t);return i.a.createElement("div",null,a.toLocaleString("ja",{year:"numeric",month:"numeric",day:"numeric",timeZone:"Asia/Tokyo"}).replace(/\//g,"-")," ",a.toLocaleString("en",{weekday:"short",timeZone:"Asia/Tokyo"}).replace(/\//g,"-")," ")}},"2Zix":function(e,t,a){var r=a("NC/Y");e.exports=/MSIE|Trident/.test(r)},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=u(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(V,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),V=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,x=e.draggable,R=h||m;if(!R)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:k?1:0,transition:C?"opacity "+v+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,H={transitionDelay:v+"ms"},W=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&H,o,f),q={title:t,alt:this.state.isVisible?"":a,style:W,className:g,itemProp:S},P=this.state.isHydrated?p(R):R[0];if(h)return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&H)}),P.base64&&l.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:q,imageVariants:R,generateSources:I}),P.tracedSVG&&l.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:q,imageVariants:R,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,E(R),l.default.createElement(V,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},P,{imageVariants:R}))}}));if(m){var M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&H)}),P.base64&&l.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:q,imageVariants:R,generateSources:I}),P.tracedSVG&&l.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:q,imageVariants:R,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,E(R),l.default.createElement(V,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},P,{imageVariants:R}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function T(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:C,sizes:O,fixed:T(c.default.oneOfType([C,c.default.arrayOf(C)])),fluid:T(c.default.oneOfType([O,c.default.arrayOf(O)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=k;t.default=H},BNF5:function(e,t,a){var r=a("NC/Y").match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz");t.a=function(e){var t,a=e.location,r=e.title,s=e.children,o="/"===a.pathname;return t=o?i.a.createElement("h1",{className:"main-heading"},i.a.createElement(n.a,{to:"/"},r)):i.a.createElement(n.a,{className:"header-link-home",to:"/"},r),i.a.createElement("div",{className:"global-wrapper","data-is-root-path":o},i.a.createElement("header",{className:"global-header"},t),i.a.createElement("main",null,s),i.a.createElement("footer",{className:"global-footer"},"(c) 2021 ",r,i.a.createElement("div",{className:"footer-info"},i.a.createElement(n.a,{to:"/about"},"about"),i.a.createElement(n.a,{to:"/privacy-policy"},"privacy policy"))))}},ToJy:function(e,t,a){"use strict";var r=a("I+eb"),i=a("HAuM"),n=a("ewvW"),s=a("UMSQ"),o=a("V37c"),d=a("0Dky"),l=a("rdv8"),c=a("pkCn"),u=a("BNF5"),f=a("2Zix"),g=a("LQDL"),p=a("USzg"),h=[],m=h.sort,b=d((function(){h.sort(void 0)})),v=d((function(){h.sort(null)})),y=c("sort"),S=!d((function(){if(g)return g<70;if(!(u&&u>3)){if(f)return!0;if(p)return p<603;var e,t,a,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(r=0;r<47;r++)h.push({k:t+r,v:a})}for(h.sort((function(e,t){return t.v-e.v})),r=0;r<h.length;r++)t=h[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}}));r({target:"Array",proto:!0,forced:b||!v||!y||!S},{sort:function(e){void 0!==e&&i(e);var t=n(this);if(S)return void 0===e?m.call(t):m.call(t,e);var a,r,d=[],c=s(t.length);for(r=0;r<c;r++)r in t&&d.push(t[r]);for(a=(d=l(d,function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:o(t)>o(a)?1:-1}}(e))).length,r=0;r<a;)t[r]=d[r++];for(;r<c;)delete t[r++];return t}})},USzg:function(e,t,a){var r=a("NC/Y").match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},V37c:function(e,t,a){var r=a("2bX/");e.exports=function(e){if(r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},rdv8:function(e,t){var a=Math.floor,r=function(e,t){var s=e.length,o=a(s/2);return s<8?i(e,t):n(r(e.slice(0,o),t),r(e.slice(o),t),t)},i=function(e,t){for(var a,r,i=e.length,n=1;n<i;){for(r=n,a=e[n];r&&t(e[r-1],a)>0;)e[r]=e[--r];r!==n++&&(e[r]=a)}return e},n=function(e,t,a){for(var r=e.length,i=t.length,n=0,s=0,o=[];n<r||s<i;)n<r&&s<i?o.push(a(e[n],t[s])<=0?e[n++]:t[s++]):o.push(n<r?e[n++]:t[s++]);return o};e.exports=r},tBDR:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("9eSz"),o=a.n(s);t.a=function(e){return i.a.createElement(n.b,{query:"3284037645",render:function(t){var a=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return a?e.fixed?i.a.createElement(o.a,{fixed:a.node.childImageSharp.fixed,alt:e.alt,imgStyle:e.style,className:e.className}):i.a.createElement(o.a,{fluid:a.node.childImageSharp.fluid,alt:e.alt,imgStyle:e.style,className:e.className}):null}})}}}]);
//# sourceMappingURL=6e7787752c915607ab3ee062844ac41c9817ded6-ddd4f36e937a3ea0a657.js.map