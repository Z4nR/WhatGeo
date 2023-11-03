/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var r="",f,t=n;function n(e,i){if(typeof e!="string")throw new TypeError("expected a string");if(i===1)return e;if(i===2)return e+e;var a=e.length*i;if(f!==e||typeof f>"u")f=e,r="";else if(r.length>=a)return r.substr(0,a);for(;a>r.length&&i>1;)i&1&&(r+=e),i>>=1,e+=e;return r+=e,r=r.substr(0,a),r}export{t as r};
