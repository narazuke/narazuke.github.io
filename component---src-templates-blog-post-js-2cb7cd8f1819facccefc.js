(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2SVd":function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},"5oMp":function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},"8oxB":function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,u=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&d())}function d(){if(!f){var t=s(p);f=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new h(t,e)),1!==u.length||f||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(t,e,r){"use strict";var n=r("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},CgaS:function(t,e,r){"use strict";var n=r("xTJ+"),o=r("MLWZ"),i=r("9rSQ"),a=r("UnBK"),s=r("SntB");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[a,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)r=r.then(e.shift(),e.shift());return r},c.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,r){return this.request(s(r||{},{method:t,url:e,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,r,n){return this.request(s(n||{},{method:t,url:e,data:r}))}})),t.exports=c},DfZB:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},HSsa:function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},JEQr:function(t,e,r){"use strict";(function(e){var n=r("xTJ+"),o=r("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(s=r("tQ2B")),s),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){c.headers[t]=n.merge(i)})),t.exports=c}).call(this,r("8oxB"))},LYNF:function(t,e,r){"use strict";var n=r("OH9c");t.exports=function(t,e,r,o,i){var a=new Error(t);return n(a,e,r,o,i)}},Lmem:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},MLWZ:function(t,e,r){"use strict";var n=r("xTJ+");function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var a=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},Nsbk:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},OH9c:function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},OTTw:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},"Rn+g":function(t,e,r){"use strict";var n=r("LYNF");t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},SntB:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=function(t,e){e=e||{};var r={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function u(o){n.isUndefined(e[o])?n.isUndefined(t[o])||(r[o]=c(void 0,t[o])):r[o]=c(t[o],e[o])}n.forEach(o,(function(t){n.isUndefined(e[t])||(r[t]=c(void 0,e[t]))})),n.forEach(i,u),n.forEach(a,(function(o){n.isUndefined(e[o])?n.isUndefined(t[o])||(r[o]=c(void 0,t[o])):r[o]=c(void 0,e[o])})),n.forEach(s,(function(n){n in e?r[n]=c(t[n],e[n]):n in t&&(r[n]=c(void 0,t[n]))}));var f=o.concat(i).concat(a).concat(s),l=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===f.indexOf(t)}));return n.forEach(l,u),r}},UnBK:function(t,e,r){"use strict";var n=r("xTJ+"),o=r("xAGQ"),i=r("Lmem"),a=r("JEQr");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return s(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||a.adapter)(t).then((function(e){return s(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},XwJu:function(t,e,r){"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},a1gu:function(t,e,r){var n=r("cDf5"),o=r("PJYZ");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},endd:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},eqyj:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(t,e,r){"use strict";var n=r("2SVd"),o=r("5oMp");t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},"jfS+":function(t,e,r){"use strict";var n=r("endd");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(j){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=c;var f={};function l(){}function p(){}function d(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==e&&r.call(v,o)&&(h=v);var y=d.prototype=l.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=y.constructor=d,d.constructor=p,p.displayName=s(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),s(y,a,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},mHol:function(t,e,r){"use strict";var n=r("TqRt");e.__esModule=!0,e.default=void 0;var o=n(r("pVnL")),i=n(r("8OQS")),a=(n(r("a1gu")),n(r("Nsbk")),n(r("VbXa"))),s=n(r("q1tI")),c=(n(r("17x9")),n(r("CzDQ")));var u=function(t){(0,a.default)(r,t);var e;e=r;function r(e){var r;return(r=t.call(this,e)||this).pluginConfig=void 0!=={clientID:"837629045eb9da51e9f1",clientSecret:"6447251cf899efc947a9ff3e1b41410308500738",repo:"narazuke.github.io",owner:"narazuke",admin:["wabetarou","nozzlex3"],pagerDirection:"first",createIssueManually:!1,distractionFreeMode:!1,enableHotKey:!0,proxy:"https://fierce-springs-80306.herokuapp.com/https://github.com/login/oauth/access_token"}&&""!=={clientID:"837629045eb9da51e9f1",clientSecret:"6447251cf899efc947a9ff3e1b41410308500738",repo:"narazuke.github.io",owner:"narazuke",admin:["wabetarou","nozzlex3"],pagerDirection:"first",createIssueManually:!1,distractionFreeMode:!1,enableHotKey:!0,proxy:"https://fierce-springs-80306.herokuapp.com/https://github.com/login/oauth/access_token"}?{clientID:"837629045eb9da51e9f1",clientSecret:"6447251cf899efc947a9ff3e1b41410308500738",repo:"narazuke.github.io",owner:"narazuke",admin:["wabetarou","nozzlex3"],pagerDirection:"first",createIssueManually:!1,distractionFreeMode:!1,enableHotKey:!0,proxy:"https://fierce-springs-80306.herokuapp.com/https://github.com/login/oauth/access_token"}:"",r}return r.prototype.render=function(){var t=this.props,e=t.options,r=(0,i.default)(t,["options"]),n=(0,o.default)({},this.pluginConfig,{},e);return"undefined"!=typeof window?s.default.createElement(c.default,(0,o.default)({},r,{options:n,__self:this,__source:{fileName:"/home/suziwen/jobdisk/git/gatsby-plugin-gitalk/src/components/Gitalk.jsx",lineNumber:16,columnNumber:9}})):s.default.createElement(s.default.Fragment,null)},r}(s.default.Component);e.default=u},nUxN:function(t,e,r){"use strict";var n=r("TqRt");e.__esModule=!0,e.GitalkPluginHelper=e.default=void 0;var o=n(r("o0o1")),i=n(r("yXPU")),a=n(r("mHol")),s=n(r("vDqi")),c=function(){var t=(0,i.default)(o.default.mark((function t(e,r){var n,i,a,c,u,f,l,p,d,h,m,v,y;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===r&&(r=console),n=e.owner,i=e.repo,a=e.title,c=e.body,u=e.id,f=e.labels,l=void 0===f?["Gitalk"]:f,p=e.description,d=e.personalToken,h=e.url,m='"Gitalk_'+u+'" type:issue in:body '+l.map((function(t){return"label:"+t})).join(" ")+" repo:"+n+"/"+i,v=s.default.create({baseURL:"https://api.github.com",auth:{username:n,password:d},headers:{Accept:"application/json"}}),t.next=6,v.get("/search/issues",{params:{q:m,t:Date.now()}});case 6:if(!((y=t.sent)&&y.data&&y.data.total_count)){t.next=9;break}return t.abrupt("return");case 9:return t.prev=9,t.next=12,v.post("/repos/"+n+"/"+i+"/issues",{title:a,labels:l,body:c||h+" \n\n "+p+"\n\nGitalk_"+u});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(9),r.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[9,14]])})));return function(e,r){return t.apply(this,arguments)}}(),u=a.default;e.default=u;var f={createIssue:c};e.GitalkPluginHelper=f},o0o1:function(t,e,r){t.exports=r("ls82")},tKWB:function(t,e,r){},tQ2B:function(t,e,r){"use strict";var n=r("xTJ+"),o=r("Rn+g"),i=r("eqyj"),a=r("MLWZ"),s=r("g7np"),c=r("w0Vi"),u=r("OTTw"),f=r("LYNF");t.exports=function(t){return new Promise((function(e,r){var l=t.data,p=t.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var v=s(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),a(v,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,i={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:t,request:d};o(e,r,i),d=null}},d.onabort=function(){d&&(r(f("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){r(f("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(f(e,t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var y=(t.withCredentials||u(v))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;y&&(p[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(p,(function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(g){if("json"!==t.responseType)throw g}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),r(t),d=null)})),l||(l=null),d.send(l)}))}},vDqi:function(t,e,r){t.exports=r("zuR4")},vrFN:function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("rid2"),a=r("Wbzz"),s=function(t){var e,r,n,s=t.description,c=t.lang,u=t.meta,f=t.title,l=Object(a.d)("500847697").site,p=s||l.siteMetadata.description,d=null===(e=l.siteMetadata)||void 0===e?void 0:e.title;return o.a.createElement(i.HelmetProvider,null,o.a.createElement(i.Helmet,{htmlAttributes:{lang:c},title:f,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:p},{property:"og:title",content:f},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:f},{name:"twitter:description",content:p}].concat(u)}))};s.defaultProps={lang:"en",meta:[],description:""},e.a=s},w0Vi:function(t,e,r){"use strict";var n=r("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,a={};return t?(n.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}})),a):a}},xAGQ:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=function(t,e,r){return n.forEach(r,(function(r){t=r(t,e)})),t}},"xTJ+":function(t,e,r){"use strict";var n=r("HSsa"),o=Object.prototype.toString;function i(t){return"[object Array]"===o.call(t)}function a(t){return void 0===t}function s(t){return null!==t&&"object"==typeof t}function c(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function u(t){return"[object Function]"===o.call(t)}function f(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),i(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:u,isStream:function(t){return s(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function t(){var e={};function r(r,n){c(e[n])&&c(r)?e[n]=t(e[n],r):c(r)?e[n]=t({},r):i(r)?e[n]=r.slice():e[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return e},extend:function(t,e,r){return f(e,(function(e,o){t[o]=r&&"function"==typeof e?n(e,r):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},yK9s:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},yXPU:function(t,e){function r(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)}))}}},yZlL:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),i=r("Wbzz"),a=r("tBDR"),s=r("Bl7J"),c=r("vrFN"),u=(r("tKWB"),r("nUxN")),f=r.n(u);e.default=function(t){var e,r,n,u=t.data,l=t.location,p=u.markdownRemark,d=(null===(e=u.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",h=u.previous,m=u.next,v={id:p.fields.slug,title:p.frontmatter.title};return console.log(v.id),o.a.createElement(s.a,{location:l,title:d},o.a.createElement(c.a,{title:p.frontmatter.title,description:p.frontmatter.description||p.excerpt}),o.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement("header",null,o.a.createElement("small",null,o.a.createElement("div",{className:"category "+p.frontmatter.category},o.a.createElement(i.a,{to:"/category/"+p.frontmatter.category+"/"},p.frontmatter.category))),o.a.createElement("h1",{itemProp:"headline"},p.frontmatter.title),o.a.createElement("p",null,p.frontmatter.created),o.a.createElement("div",{className:"tag-list"},null===(r=p.frontmatter.tag)||void 0===r?void 0:r.map((function(t){return o.a.createElement("small",null,o.a.createElement("div",{className:"tag"},o.a.createElement(i.a,{to:"/tag/"+t+"/"},t)))}))),o.a.createElement("small",{className:"profile-mini-list"},null===(n=p.frontmatter.author)||void 0===n?void 0:n.map((function(t){return o.a.createElement(i.a,{to:"/author/"+t+"/",className:"profile-mini"},o.a.createElement("figure",null,o.a.createElement(a.a,{filename:"profile-pic-"+t+".jpg",style:{borderRadius:"50%"},fixed:!0})),o.a.createElement("div",null,t))})))),o.a.createElement("hr",null),o.a.createElement("section",{dangerouslySetInnerHTML:{__html:p.html},itemProp:"articleBody"})),o.a.createElement("nav",{className:"blog-post-nav"},o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,h&&o.a.createElement(i.a,{to:h.fields.slug,rel:"prev"},"← ",h.frontmatter.title)),o.a.createElement("li",null,m&&o.a.createElement(i.a,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))),o.a.createElement(f.a,{options:v}))}},zuR4:function(t,e,r){"use strict";var n=r("xTJ+"),o=r("HSsa"),i=r("CgaS"),a=r("SntB");function s(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r}var c=s(r("JEQr"));c.Axios=i,c.create=function(t){return s(a(c.defaults,t))},c.Cancel=r("endd"),c.CancelToken=r("jfS+"),c.isCancel=r("Lmem"),c.all=function(t){return Promise.all(t)},c.spread=r("DfZB"),c.isAxiosError=r("XwJu"),t.exports=c,t.exports.default=c}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2cb7cd8f1819facccefc.js.map