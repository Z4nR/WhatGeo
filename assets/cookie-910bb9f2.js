var u={};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */u.parse=v;u.serialize=w;var h=Object.prototype.toString,p=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function v(e,s){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var a={},i=s||{},c=i.decode||d,t=0;t<e.length;){var r=e.indexOf("=",t);if(r===-1)break;var o=e.indexOf(";",t);if(o===-1)o=e.length;else if(o<r){t=e.lastIndexOf(";",r-1)+1;continue}var n=e.slice(t,r).trim();if(a[n]===void 0){var f=e.slice(r+1,o).trim();f.charCodeAt(0)===34&&(f=f.slice(1,-1)),a[n]=S(f,c)}t=o+1}return a}function w(e,s,a){var i=a||{},c=i.encode||m;if(typeof c!="function")throw new TypeError("option encode is invalid");if(!p.test(e))throw new TypeError("argument name is invalid");var t=c(s);if(t&&!p.test(t))throw new TypeError("argument val is invalid");var r=e+"="+t;if(i.maxAge!=null){var o=i.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(o)}if(i.domain){if(!p.test(i.domain))throw new TypeError("option domain is invalid");r+="; Domain="+i.domain}if(i.path){if(!p.test(i.path))throw new TypeError("option path is invalid");r+="; Path="+i.path}if(i.expires){var n=i.expires;if(!y(n)||isNaN(n.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+n.toUTCString()}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.priority){var f=typeof i.priority=="string"?i.priority.toLowerCase():i.priority;switch(f){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(i.sameSite){var l=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(l){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return r}function d(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function m(e){return encodeURIComponent(e)}function y(e){return h.call(e)==="[object Date]"||e instanceof Date}function S(e,s){try{return s(e)}catch{return e}}export{u as c};