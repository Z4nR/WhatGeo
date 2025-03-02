import{r as I}from"./immutable-BTnA7MnW.js";var f={},p={exports:{}},i={},m={exports:{}},y;function P(){return y||(y=1,function(u,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){return n&&n.type==="@@redux/INIT"?"initialState argument passed to createStore":"previous state received by the reducer"},u.exports=e.default}(m,m.exports)),m.exports}var g={exports:{}},M;function w(){return M||(M=1,function(u,e){Object.defineProperty(e,"__esModule",{value:!0});var n=I(),r=a(n),d=P(),l=a(d);function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,v,x){var s=Object.keys(v);if(!s.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";var c=(0,l.default)(x);if(r.default.isImmutable?!r.default.isImmutable(t):!r.default.Iterable.isIterable(t))return"The "+c+' is of unexpected type. Expected argument to be an instance of Immutable.Collection or Immutable.Record with the following properties: "'+s.join('", "')+'".';var o=t.toSeq().keySeq().toArray().filter(function(h){return!v.hasOwnProperty(h)});return o.length>0?"Unexpected "+(o.length===1?"property":"properties")+' "'+o.join('", "')+'" found in '+c+'. Expected to find one of the known reducer property names instead: "'+s.join('", "')+'". Unexpected properties will be ignored.':null},u.exports=e.default}(g,g.exports)),g.exports}var _={exports:{}},R;function D(){return R||(R=1,function(u,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,r,d){if(n===void 0)throw new Error('Reducer "'+r+'" returned undefined when handling "'+d.type+'" action. To ignore an action, you must explicitly return the previous state.')},u.exports=e.default}(_,_.exports)),_.exports}var b;function O(){if(b)return i;b=1,Object.defineProperty(i,"__esModule",{value:!0}),i.validateNextState=i.getUnexpectedInvocationParameterMessage=i.getStateName=void 0;var u=P(),e=a(u),n=w(),r=a(n),d=D(),l=a(d);function a(t){return t&&t.__esModule?t:{default:t}}return i.getStateName=e.default,i.getUnexpectedInvocationParameterMessage=r.default,i.validateNextState=l.default,i}var q;function k(){return q||(q=1,function(u,e){Object.defineProperty(e,"__esModule",{value:!0});var n=I(),r=l(n),d=O();function l(a){return a&&a.__esModule?a:{default:a}}e.default=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r.default.Map,v=Object.keys(a);return function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t(),s=arguments[1];return x.withMutations(function(c){v.forEach(function(o){var h=a[o],U=c.get(o),S=h(U,s);(0,d.validateNextState)(S,o,s),c.set(o,S)})})}},u.exports=e.default}(p,p.exports)),p.exports}var N;function E(){if(N)return f;N=1,Object.defineProperty(f,"__esModule",{value:!0}),f.combineReducers=void 0;var u=k(),e=n(u);function n(r){return r&&r.__esModule?r:{default:r}}return f.combineReducers=e.default,f}var C=E();export{C as d};
