const h=(o,t,e=[])=>{const n=Object.getOwnPropertyDescriptors(t);for(let r of e)delete n[r];Object.defineProperties(o,n)},p=(o,t=[o])=>{const e=Object.getPrototypeOf(o);return e===null?t:p(e,[...t,e])},C=(...o)=>{if(o.length===0)return;let t;const e=o.map(n=>p(n));for(;e.every(n=>n.length>0);){const n=e.map(l=>l.pop()),r=n[0];if(n.every(l=>l===r))t=r;else break}return t},v=(o,t,e=[])=>{var n;const r=(n=C(...o))!==null&&n!==void 0?n:Object.prototype,l=Object.create(r),i=p(r);for(let s of o){let a=p(s);for(let c=a.length-1;c>=0;c--){let d=a[c];i.indexOf(d)===-1&&(h(l,d,["constructor",...e]),i.push(d))}}return l.constructor=t,l},u=o=>o.filter((t,e)=>o.indexOf(t)==e),O=new WeakMap,P=o=>O.get(o),_=(o,t)=>O.set(o,t),f=(o,t)=>{var e,n;const r=u([...Object.getOwnPropertyNames(o),...Object.getOwnPropertyNames(t)]),l={};for(let i of r)l[i]=u([...(e=o==null?void 0:o[i])!==null&&e!==void 0?e:[],...(n=t==null?void 0:t[i])!==null&&n!==void 0?n:[]]);return l},y=(o,t)=>{var e,n,r,l;return{property:f((e=o==null?void 0:o.property)!==null&&e!==void 0?e:{},(n=t==null?void 0:t.property)!==null&&n!==void 0?n:{}),method:f((r=o==null?void 0:o.method)!==null&&r!==void 0?r:{},(l=t==null?void 0:t.method)!==null&&l!==void 0?l:{})}},w=(o,t)=>{var e,n,r,l,i,s;return{class:u([...(e=o==null?void 0:o.class)!==null&&e!==void 0?e:[],...(n=t==null?void 0:t.class)!==null&&n!==void 0?n:[]]),static:y((r=o==null?void 0:o.static)!==null&&r!==void 0?r:{},(l=t==null?void 0:t.static)!==null&&l!==void 0?l:{}),instance:y((i=o==null?void 0:o.instance)!==null&&i!==void 0?i:{},(s=t==null?void 0:t.instance)!==null&&s!==void 0?s:{})}},b=new Map,g=(...o)=>{var t;const e=new Set,n=new Set([...o]);for(;n.size>0;)for(let r of n){const l=p(r.prototype).map(c=>c.constructor),i=(t=P(r))!==null&&t!==void 0?t:[],a=[...l,...i].filter(c=>!e.has(c));for(let c of a)n.add(c);e.add(r),n.delete(r)}return[...e]},x=(...o)=>{const t=g(...o).map(e=>b.get(e)).filter(e=>!!e);return t.length==0?{}:t.length==1?t[0]:t.reduce((e,n)=>w(e,n))};function D(...o){var t,e,n;const r=o.map(s=>s.prototype);function l(...s){for(const a of o)h(this,new a(...s))}l.prototype=v(r,l),Object.setPrototypeOf(l,v(o,null,["prototype"]));let i=l;{const s=x(...o);for(let a of(t=s==null?void 0:s.class)!==null&&t!==void 0?t:[]){const c=a(i);c&&(i=c)}m((e=s==null?void 0:s.static)!==null&&e!==void 0?e:{},i),m((n=s==null?void 0:s.instance)!==null&&n!==void 0?n:{},i.prototype)}return _(i,o),i}const m=(o,t)=>{const e=o.property,n=o.method;if(e)for(let r in e)for(let l of e[r])l(t,r);if(n)for(let r in n)for(let l of n[r])l(t,r,Object.getOwnPropertyDescriptor(t,r))};export{D as M};