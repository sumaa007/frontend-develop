!function(e){function n(n){for(var t,r,u=n[0],c=n[1],i=0,s=[];i<u.length;i++)r=u[i],o[r]&&s.push(o[r][0]),o[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(a&&a(n);s.length;)s.shift()()}var t={},o={1:0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=u);var c=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.src=r.p+""+e+".bundle.js";var a=setTimeout(function(){s({type:"timeout",target:i})},12e4);function s(n){i.onerror=i.onload=null,clearTimeout(a);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");c.type=r,c.request=u,t[1](c)}o[e]=void 0}}i.onerror=i.onload=s,c.appendChild(i)}return Promise.all(n)},r.m=e,r.c=t,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var a=c;r(r.s=0)}([function(e,n,t){"use strict";t.r(n);const o=t(1);t.e(0).then(function(){var e=[t(2)];(function(e){console.log("muti(23, 24) = ",e(23,24))}).apply(null,e)}).catch(t.oe),console.log("sum(23,24) = ",23+24),console.log("mins(23,24) = ",o(23,24))},function(e,n){e.exports=function(e,n){return e-n}}]);