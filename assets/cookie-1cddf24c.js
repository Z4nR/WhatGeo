var w={};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */w.parse=b;w.serialize=O;var p=Object.prototype.toString,m=Object.prototype.hasOwnProperty,g=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,x=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,E=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,S=/^[\u0020-\u003A\u003D-\u007E]*$/;function b(r,a){if(typeof r!="string")throw new TypeError("argument str must be a string");var e={},n=r.length;if(n<2)return e;var u=a&&a.decode||T,i=0,o=0,t=0;do{if(o=r.indexOf("=",i),o===-1)break;if(t=r.indexOf(";",i),t===-1)t=n;else if(o>t){i=r.lastIndexOf(";",o-1)+1;continue}var c=h(r,i,o),s=l(r,o,c),d=r.slice(c,s);if(!m.call(e,d)){var f=h(r,o+1,t),v=l(r,t,f);r.charCodeAt(f)===34&&r.charCodeAt(v-1)===34&&(f++,v--);var y=r.slice(f,v);e[d]=C(y,u)}i=t+1}while(i<n);return e}function h(r,a,e){do{var n=r.charCodeAt(a);if(n!==32&&n!==9)return a}while(++a<e);return e}function l(r,a,e){for(;a>e;){var n=r.charCodeAt(--a);if(n!==32&&n!==9)return a+1}return e}function O(r,a,e){var n=e&&e.encode||encodeURIComponent;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!g.test(r))throw new TypeError("argument name is invalid");var u=n(a);if(!x.test(u))throw new TypeError("argument val is invalid");var i=r+"="+u;if(!e)return i;if(e.maxAge!=null){var o=Math.floor(e.maxAge);if(!isFinite(o))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+o}if(e.domain){if(!E.test(e.domain))throw new TypeError("option domain is invalid");i+="; Domain="+e.domain}if(e.path){if(!S.test(e.path))throw new TypeError("option path is invalid");i+="; Path="+e.path}if(e.expires){var t=e.expires;if(!A(t)||isNaN(t.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+t.toUTCString()}if(e.httpOnly&&(i+="; HttpOnly"),e.secure&&(i+="; Secure"),e.partitioned&&(i+="; Partitioned"),e.priority){var c=typeof e.priority=="string"?e.priority.toLowerCase():e.priority;switch(c){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(e.sameSite){var s=typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite;switch(s){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function T(r){return r.indexOf("%")!==-1?decodeURIComponent(r):r}function A(r){return p.call(r)==="[object Date]"}function C(r,a){try{return a(r)}catch{return r}}export{w as c};