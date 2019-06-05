!function(e){function n(n){for(var t,o,c=n[0],i=n[1],d=n[2],a=n[3]||[],s=0,u=[];s<c.length;s++)o=c[s],k[o]&&u.push(k[o][0]),k[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(R&&R(n),A.push.apply(A,a);u.length;)u.shift()();return H.push.apply(H,d||[]),r()}function r(){for(var e,n=0;n<H.length;n++){for(var r=H[n],t=!0,o=1;o<r.length;o++){var c=r[o];0!==k[c]&&(t=!1)}t&&(H.splice(n--,1),e=S(S.s=r[0]))}return 0===H.length&&(A.forEach(function(e){if(void 0===k[e]){k[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",S.nc&&n.setAttribute("nonce",S.nc),n.rel="prefetch",n.as="script",n.href=M(e),document.head.appendChild(n)}}),A.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!j[e]||!O[e])return;for(var r in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--b&&0===g&&D()}(e,n),t&&t(e,n)};var o,c=!0,i="ce09c1962ad6beca544d",d=1e4,a={},s=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:a[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,y,b=0,g=0,w={},O={},j={};function x(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,h("check"),(n=d,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=S.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(c){return r(c)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(c){return void r(c)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;O={},w={},j=e.c,y=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var r in v={},k)E(r);return"prepare"===f&&0===g&&0===b&&D(),n});var n}function E(e){j[e]?(O[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+i+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function D(){h("ready");var e=m;if(m=null,e)if(c)Promise.resolve().then(function(){return P(c)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(x(r));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,c,d;function u(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,d=o.chain;if((c=I[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<c.parents.length;a++){var s=c.parents[a],u=I[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),l(r[s],[i])):(delete r[s],n.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var O;d=x(w);var _=!1,E=!1,D=!1,P="";switch((O=v[w]?u(d):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(_=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(O),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(_)return h("abort"),Promise.reject(_);if(E)for(d in b[d]=v[d],l(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(p[d]||(p[d]=[]),l(p[d],O.outdatedDependencies[d]));D&&(l(m,[O.moduleId]),b[d]=g)}var H,A=[];for(t=0;t<m.length;t++)d=m[t],I[d]&&I[d].hot._selfAccepted&&b[d]!==g&&A.push({module:d,errorHandler:I[d].hot._selfAccepted});h("dispose"),Object.keys(j).forEach(function(e){!1===j[e]&&function(e){delete k[e]}(e)});for(var M,q,U=m.slice();U.length>0;)if(d=U.pop(),c=I[d]){var z={},R=c.hot._disposeHandlers;for(o=0;o<R.length;o++)(r=R[o])(z);for(a[d]=z,c.hot.active=!1,delete I[d],delete p[d],o=0;o<c.children.length;o++){var T=I[c.children[o]];T&&((H=T.parents.indexOf(d))>=0&&T.parents.splice(H,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(c=I[d]))for(q=p[d],o=0;o<q.length;o++)M=q[o],(H=c.children.indexOf(M))>=0&&c.children.splice(H,1);for(d in h("apply"),i=y,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var C=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(c=I[d])){q=p[d];var J=[];for(t=0;t<q.length;t++)if(M=q[t],r=c.hot._acceptedDependencies[M]){if(-1!==J.indexOf(r))continue;J.push(r)}for(t=0;t<J.length;t++){r=J[t];try{r(q)}catch(N){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:q[t],error:N}),n.ignoreErrored||C||(C=N)}}}for(t=0;t<A.length;t++){var L=A[t];d=L.module,s=[d];try{S(d)}catch(N){if("function"===typeof L.errorHandler)try{L.errorHandler(N)}catch(W){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:W,originalError:N}),n.ignoreErrored||C||(C=W),C||(C=N)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:N}),n.ignoreErrored||C||(C=N)}}return C?(h("fail"),Promise.reject(C)):(h("idle"),new Promise(function(e){e(m)}))}var I={},k={1:0},H=[],A=[];function M(e){return S.p+"static/js/"+({2:"docs-introduction"}[e]||e)+"."+{2:"9cabc544"}[e]+".js"}function S(n){if(I[n])return I[n].exports;var r=I[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=s,s=[],u),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=I[e];if(!n)return S;var r=function(r){return n.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(s=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),S(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(n){S[e]=n}}};for(var c in S)Object.prototype.hasOwnProperty.call(S,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,t(c));return r.e=function(e){return"ready"===f&&h("prepare"),g++,S.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(w[e]||E(e),0===g&&0===b&&D())}},r.t=function(e,n){return 1&n&&(e=r(e)),S.t(e,-2&n)},r}(n)),r.l=!0,r.exports}S.e=function(e){var n=[],r=k[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=k[e]=[n,t]});n.push(r[2]=t);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,S.nc&&c.setAttribute("nonce",S.nc),c.src=M(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous");var i=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(d);var r=k[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",i.type=t,i.request=o,r[1](i)}k[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},S.m=e,S.c=I,S.d=function(e,n,r){S.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},S.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,n){if(1&n&&(e=S(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(S.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)S.d(r,t,function(n){return e[n]}.bind(null,t));return r},S.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(n,"a",n),n},S.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},S.p="/react-downscreen/",S.oe=function(e){throw console.error(e),e},S.h=function(){return i};var q=window.webpackJsonp=window.webpackJsonp||[],U=q.push.bind(q);q.push=n,q=q.slice();for(var z=0;z<q.length;z++)n(q[z]);var R=U,T=(H.push([0,0]),r());n([[],{},0,[0,2]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"React Downscreen \u26f9\ufe0f",description:"React Downscreen \u26f9\ufe0f",menu:[],version:"0.2.0",repository:"https://github.com/therealparmesh/react-downscreen",native:!1,codeSandbox:!0,themeConfig:{},separator:"-",base:"/react-downscreen/",typescript:!0,propsParser:!1},entries:[{key:"docs/Introduction.mdx",value:{name:"Introduction",order:1,route:"/react-downscreen/",id:"c15c39e1d1431a3c37997b39e9e6d8fd",filepath:"docs/Introduction.mdx",link:"https://github.com/therealparmesh/react-downscreen/edit/master/docs/Introduction.mdx",slug:"docs-introduction",menu:"",headings:[{slug:"introduction",depth:1,value:"Introduction"},{slug:"install",depth:2,value:"Install"},{slug:"with-npm",depth:3,value:"With  npm"},{slug:"with-yarn",depth:3,value:"With  yarn"},{slug:"quick-examples",depth:2,value:"Quick Examples"}]}}]}},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),o=r.n(t),c=r("./node_modules/react-dom/index.js"),i=r.n(c),d=r("./node_modules/docz/dist/index.esm.js"),a=r("./node_modules/docz-theme-default/dist/index.esm.js"),s={"docs/Introduction.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./docs/Introduction.mdx"))}},u=r("./.docz/app/db.json"),l=function(){return o.a.createElement(a.a,{linkComponent:d.b,db:u},o.a.createElement(d.c,{imports:s}))},p=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;p.forEach(function(e){return e&&e()}),i.a.render(o.a.createElement(e,null),m,h)}(l)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.ce09c1962ad6beca544d.js.map