var i={},c;function p(){if(c)return i;c=1;var s=Object.prototype.hasOwnProperty,f;function l(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch{return null}}function o(e){try{return encodeURIComponent(e)}catch{return null}}function y(e){for(var t=/([^=?#&]+)=?([^&]*)/g,u={},n;n=t.exec(e);){var r=l(n[1]),a=l(n[2]);r===null||a===null||r in u||(u[r]=a)}return u}function g(e,t){t=t||"";var u=[],n,r;typeof t!="string"&&(t="?");for(r in e)if(s.call(e,r)){if(n=e[r],!n&&(n===null||n===f||isNaN(n))&&(n=""),r=o(r),n=o(n),r===null||n===null)continue;u.push(r+"="+n)}return u.length?t+u.join("&"):""}return i.stringify=g,i.parse=y,i}export{p as r};
