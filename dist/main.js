(()=>{"use strict";var e,t,n,r={192:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(645),a=n.n(r),i=n(667),o=n.n(i),c=n(217),l=a()((function(e){return e[1]})),s=o()(c.Z);l.push([e.id,':root{--yellow: #ffc600;--black: #272727}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}body{font-family:sans-serif;margin:0;background-image:linear-gradient(260deg, #2376ae 0%, #c16ecf 100%)}a{color:#fff;font-weight:100;letter-spacing:2px;text-decoration:none;background:rgba(0,0,0,.2);padding:20px 5px;display:inline-block;width:100%;text-align:center;transition:all .5s}a:hover{background:rgba(0,0,0,.3)}#content{max-width:1000px;margin:0 auto;padding:50px}.flex-nav ul{border:1px solid #000;list-style:none;margin:0;padding:0;display:flex}.flex-nav li{flex:3}.flex-nav .social{flex:1}.top{display:grid;grid-gap:20px;grid-template-areas:"hero hero cta1" "hero hero cta2"}.hero{grid-area:hero;min-height:400px;background:#fff url('+s+");background-size:cover;background-position:bottom right;padding:50px;display:flex;flex-direction:column;align-items:start;justify-content:center}.hero>*{background:var(--yellow);padding:5px}.cta{background:var(--yellow);display:grid;align-items:center;justify-items:center;align-content:center}.cta p{margin:0}.cta1{grid-area:cta1}.cta2{grid-area:cta2}.price{font-size:60px;font-weight:300}@media all and (max-width: 1000px){.flex-nav ul{flex-wrap:wrap}.flex-nav li{flex:1 1 50%}.flex-nav .social{flex:1 1 25%}}@media all and (max-width: 500px){.flex-nav li{flex-basis:100%}}",""]);const d=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},217:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"e21561340d13da0497e1f7c823dde1fe.jpg"},379:(e,t,n)=>{var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],l=t.base?c[0]+t.base:c[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var f=o(d),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:d,updater:h(u,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function u(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function h(e,t){var n,r,a;if(t.singleton){var i=g++;n=p||(p=l(t)),r=f.bind(null,n,i,!1),a=f.bind(null,n,i,!0)}else n=l(t),r=u.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=o(n[r]);i[a].references--}for(var l=c(e,t),s=0;s<n.length;s++){var d=o(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=l}}}}},a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={id:e,exports:{}};return r[e](t,t.exports,i),t.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),e=i(379),t=i.n(e),n=i(192),t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals})();