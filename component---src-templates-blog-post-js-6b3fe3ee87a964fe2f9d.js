(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=s(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||l||s(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),a=n("9rSQ"),i=n("UnBK"),s=n("SntB");function u(e){this.defaults=e,this.interceptors={request:new a,response:new a}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=u},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n("tQ2B")),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(a)})),e.exports=u}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function u(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=u(void 0,e[o])):n[o]=u(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=u(void 0,t[e]))})),r.forEach(a,c),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=u(void 0,e[o])):n[o]=u(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=u(e[r],t[r]):r in e&&(n[r]=u(void 0,e[r]))}));var l=o.concat(a).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,c),n}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),a=n("Lmem"),i=n("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},XwJu:function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,n){"use strict";var r=n("2SVd"),o=n("5oMp");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},mHol:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),a=r(n("8OQS")),i=(r(n("a1gu")),r(n("Nsbk")),r(n("VbXa"))),s=r(n("q1tI")),u=(r(n("17x9")),r(n("CzDQ")));var c=function(e){(0,i.default)(n,e);var t;t=n;function n(t){var n;return(n=e.call(this,t)||this).pluginConfig=void 0!=={clientID:"837629045eb9da51e9f1",clientSecret:"6447251cf899efc947a9ff3e1b41410308500738",repo:"narazuke.github.io",owner:"narazuke",admin:["wabetarou","nozzlex3"],pagerDirection:"first",createIssueManually:!1,distractionFreeMode:!1,enableHotKey:!0,proxy:"https://fierce-springs-80306.herokuapp.com/https://github.com/login/oauth/access_token"}&&""!=={clientID:"837629045eb9da51e9f1",clientSecret:"6447251cf899efc947a9ff3e1b41410308500738",repo:"narazuke.github.io",owner:"narazuke",admin:["wabetarou","nozzlex3"],pagerDirection:"first",createIssueManually:!1,distractionFreeMode:!1,enableHotKey:!0,proxy:"https://fierce-springs-80306.herokuapp.com/https://github.com/login/oauth/access_token"}?{clientID:"837629045eb9da51e9f1",clientSecret:"6447251cf899efc947a9ff3e1b41410308500738",repo:"narazuke.github.io",owner:"narazuke",admin:["wabetarou","nozzlex3"],pagerDirection:"first",createIssueManually:!1,distractionFreeMode:!1,enableHotKey:!0,proxy:"https://fierce-springs-80306.herokuapp.com/https://github.com/login/oauth/access_token"}:"",n}return n.prototype.render=function(){var e=this.props,t=e.options,n=(0,a.default)(e,["options"]),r=(0,o.default)({},this.pluginConfig,{},t);return"undefined"!=typeof window?s.default.createElement(u.default,(0,o.default)({},n,{options:r,__self:this,__source:{fileName:"/home/suziwen/jobdisk/git/gatsby-plugin-gitalk/src/components/Gitalk.jsx",lineNumber:16,columnNumber:9}})):s.default.createElement(s.default.Fragment,null)},n}(s.default.Component);t.default=c},nUxN:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.GitalkPluginHelper=t.default=void 0;var o=r(n("o0o1")),a=r(n("yXPU")),i=r(n("mHol")),s=r(n("vDqi")),u=function(){var e=(0,a.default)(o.default.mark((function e(t,n){var r,a,i,u,c,l,f,p,d,m,h,g,v;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n=console),r=t.owner,a=t.repo,i=t.title,u=t.body,c=t.id,l=t.labels,f=void 0===l?["Gitalk"]:l,p=t.description,d=t.personalToken,m=t.url,h='"Gitalk_'+c+'" type:issue in:body '+f.map((function(e){return"label:"+e})).join(" ")+" repo:"+r+"/"+a,g=s.default.create({baseURL:"https://api.github.com",auth:{username:r,password:d},headers:{Accept:"application/json"}}),e.next=6,g.get("/search/issues",{params:{q:h,t:Date.now()}});case 6:if(!((v=e.sent)&&v.data&&v.data.total_count)){e.next=9;break}return e.abrupt("return");case 9:return e.prev=9,e.next=12,g.post("/repos/"+r+"/"+a+"/issues",{title:i,labels:f,body:u||m+" \n\n "+p+"\n\nGitalk_"+c});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),n.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),c=i.default;t.default=c;var l={createIssue:u};t.GitalkPluginHelper=l},tKWB:function(e,t,n){},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),a=n("eqyj"),i=n("MLWZ"),s=n("g7np"),u=n("w0Vi"),c=n("OTTw"),l=n("LYNF");e.exports=function(e){return new Promise((function(t,n){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var g=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,n,a),d=null}},d.onabort=function(){d&&(n(l("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(l("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||c(g))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),f||(f=null),d.send(f)}))}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:u,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},yXPU:function(e,t){function n(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,u,"next",e)}function u(e){n(i,o,a,s,u,"throw",e)}s(void 0)}))}}},yZlL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("tBDR"),s=n("Bl7J"),u=n("vrFN"),c=(n("tKWB"),n("nUxN")),l=n.n(c),f=n("0EVa");t.default=function(e){var t,n,r,c,p=e.data,d=e.location,m=p.markdownRemark,h=(null===(t=p.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",g=p.previous,v=p.next,y=p.relatedPosts.edges,x={id:m.fields.slug,title:m.frontmatter.title},b=null,w=[],E=null;return"diary"===m.frontmatter.category?(c=m.frontmatter.created,b=null):(c=m.frontmatter.updated,b=m.frontmatter.created,p.relatedPosts.totalCount>1&&(w=function(e,t){e<t&&(t=e);var n=new Array(e).fill().map((function(e,t){return t})),r=[];for(;r.length<t&&n.length>0;){var o=Math.floor(Math.random()*n.length);r.push(n[o]),n.splice(o,1)}return r}(p.relatedPosts.totalCount,3),E=o.a.createElement("h5",null,"関連記事"))),o.a.createElement(s.a,{location:d,title:h},o.a.createElement(u.a,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),o.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement("header",null,o.a.createElement("small",null,o.a.createElement("div",{className:"category "+m.frontmatter.category},o.a.createElement(a.a,{to:"/category/"+m.frontmatter.category+"/"},m.frontmatter.category))),o.a.createElement("h1",{itemProp:"headline"},m.frontmatter.title),o.a.createElement("p",null,o.a.createElement("div",{className:"post-date"},b?o.a.createElement("span",{className:"sub-date"},o.a.createElement(f.a,{dateStr:b})):null,o.a.createElement("span",{className:"main-date"},o.a.createElement(f.a,{dateStr:c})))),o.a.createElement("div",{className:"tag-list"},null===(n=m.frontmatter.tag)||void 0===n?void 0:n.map((function(e){return o.a.createElement("small",null,o.a.createElement("div",{className:"tag"},o.a.createElement(a.a,{to:"/tag/"+e+"/"},e)))}))),o.a.createElement("small",{className:"profile-mini-list"},null===(r=m.frontmatter.author)||void 0===r?void 0:r.map((function(e){return o.a.createElement(a.a,{to:"/author/"+e+"/",className:"profile-mini"},o.a.createElement("figure",null,o.a.createElement(i.a,{filename:"profile-pic-"+e+".jpg",style:{borderRadius:"50%"},fixed:!0})),o.a.createElement("div",null,e))})))),o.a.createElement("hr",null),o.a.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"})),o.a.createElement("nav",{className:"blog-post-nav"},o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,g&&o.a.createElement(a.a,{to:g.fields.slug,rel:"prev"},"← ",g.frontmatter.title)),o.a.createElement("li",null,v&&o.a.createElement(a.a,{to:v.fields.slug,rel:"next"},v.frontmatter.title," →")))),o.a.createElement("div",{className:"related-posts"},E,y.filter((function(e,t){var n=e.node;return w.includes(t)&&n.fields.slug!==m.fields.slug})).map((function(e){var t=e.node;return o.a.createElement("li",null,o.a.createElement(a.a,{to:t.fields.slug},t.frontmatter.title))}))),o.a.createElement(l.a,{options:x}))}},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),a=n("CgaS"),i=n("SntB");function s(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var u=s(n("JEQr"));u.Axios=a,u.create=function(e){return s(i(u.defaults,e))},u.Cancel=n("endd"),u.CancelToken=n("jfS+"),u.isCancel=n("Lmem"),u.all=function(e){return Promise.all(e)},u.spread=n("DfZB"),u.isAxiosError=n("XwJu"),e.exports=u,e.exports.default=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6b3fe3ee87a964fe2f9d.js.map