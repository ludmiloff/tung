!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tung",[],t):"object"==typeof exports?exports.tung=t():e.tung=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t,n){"use strict";function r(e,t,n){if(e.ns="http://www.w3.org/2000/svg","foreignObject"!==n&&void 0!==t)for(var o=0;o<t.length;++o){var i=t[o].data;void 0!==i&&r(i,t[o].children,t[o].sel)}}function o(e,t,n){var o,s,l,u={};if(void 0!==n?(u=t,a.array(n)?o=n:a.primitive(n)?s=n:n&&n.sel&&(o=[n])):void 0!==t&&(a.array(t)?o=t:a.primitive(t)?s=t:t&&t.sel?o=[t]:u=t),a.array(o))for(l=0;l<o.length;++l)a.primitive(o[l])&&(o[l]=i.vnode(void 0,void 0,void 0,o[l]));return"s"!==e[0]||"v"!==e[1]||"g"!==e[2]||3!==e.length&&"."!==e[3]&&"#"!==e[3]||r(u,o,e),i.vnode(e,u,o,s,void 0)}var i=n(2),a=n(1);t.h=o,Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function r(e){return"string"==typeof e||"number"==typeof e}t.array=Array.isArray,t.primitive=r},function(e,t,n){"use strict";function r(e,t,n,r,o){return{sel:e,data:t,children:n,text:r,elm:o,key:void 0===t?void 0:t.key}}t.vnode=r,Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";var r,o,i,a,a,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n){if("object"===s(t)&&void 0!==e)e.exports=n();else{o=[],r=n,void 0!==(i="function"==typeof r?r.apply(t,o):r)&&(e.exports=i)}}(function(){return function e(t,n,r){function o(s,l){if(!n[s]){if(!t[s]){var u="function"==typeof a&&a;if(!l&&u)return a(s,!0);if(i)return i(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return o(n||e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof a&&a,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){function r(e,t,n){if("function"==typeof e)e.call(t,n,t);else if(Array.isArray(e))if("function"==typeof e[0])if(2===e.length)e[0].call(e[1],n,t);else{var o=e.slice(1);o.push(n),o.push(t),e[0].apply(t,o)}else for(var i=0;i<e.length;i++)r(e[i]);else"object"===(void 0===e?"undefined":s(e))&&e.handleEvent.call(e,n)}function o(e,t){var n=e.type,o=t.data.on;o&&o[n]&&r(o[n],t,e)}function i(){return function e(t){o(t,e.vnode)}}function a(e,t){var n,r=e.data.on,o=e.listener,a=e.elm,s=t&&t.data.on,l=t&&t.elm;if(r===s)return void(t&&(t.listener=e.listener));if(r&&o)if(s)for(n in r)s[n]||a.removeEventListener(n,o,!1);else for(n in r)a.removeEventListener(n,o,!1);if(s){var u=t.listener=e.listener||i();if(u.vnode=t,r)for(n in s)r[n]||l.addEventListener(n,u,!1);else for(n in s)l.addEventListener(n,u,!1)}}n.eventListenersModule={create:a,update:a,destroy:a},Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.eventListenersModule},{}]},{},[1])(1)})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.listeners={}}return o(e,[{key:"on",value:function(e,t,n){this.listeners.hasOwnProperty(e)||(this.listeners[e]=[]);var r=this.listeners[e].length;return this.listeners[e][r]={},this.listeners[e][r].fn=t,this.listeners[e][r].ctx=n,this}},{key:"off",value:function(e,t){if(this.listeners.hasOwnProperty(e)){var n,r;for(n=0,r=this.listeners[e].length;n<r;n+=1)this.listeners[e][n]===t&&this.listeners[e].splice(n,1)}return this}},{key:"fire",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.listeners.hasOwnProperty(e)){var o,i;for(o=0,i=this.listeners[e].length;o<i;o+=1){if(!n)var n=[];this.listeners[e][o].fn.apply(this.listeners[e][o].ctx,n)}}}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){var n,r,i=t.elm,s=e.data.attrs,l=t.data.attrs;if((s||l)&&s!==l){s=s||{},l=l||{};for(n in l){var u=l[n];s[n]!==u&&(a[n]?u?i.setAttribute(n,""):i.removeAttribute(n):(r=n.split(":"),r.length>1&&o.hasOwnProperty(r[0])?i.setAttributeNS(o[r[0]],n,u):i.setAttribute(n,u)))}for(n in s)n in l||i.removeAttribute(n)}}for(var o={xlink:"http://www.w3.org/1999/xlink"},i=["allowfullscreen","async","autofocus","autoplay","checked","compact","controls","declare","default","defaultchecked","defaultmuted","defaultselected","defer","disabled","draggable","enabled","formnovalidate","hidden","indeterminate","inert","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","pauseonexit","readonly","required","reversed","scoped","seamless","selected","sortable","spellcheck","translate","truespeed","typemustmatch","visible"],a=Object.create(null),s=0,l=i.length;s<l;s++)a[i[s]]=!0;t.attributesModule={create:r,update:r},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.attributesModule},function(e,t,n){"use strict";function r(e,t){var n,r,o=t.elm,i=e.data.class,a=t.data.class;if((i||a)&&i!==a){i=i||{},a=a||{};for(r in i)a[r]||o.classList.remove(r);for(r in a)(n=a[r])!==i[r]&&o.classList[n?"add":"remove"](r)}}t.classModule={create:r,update:r},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.classModule},function(e,t,n){"use strict";function r(e,t){var n,r,o=t.elm,i=e.data.props,a=t.data.props;if((i||a)&&i!==a){i=i||{},a=a||{};for(n in i)a[n]||delete o[n];for(n in a)r=a[n],i[n]===r||"value"===n&&o[n]===r||(o[n]=r)}}t.propsModule={create:r,update:r},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.propsModule},function(e,t,n){"use strict";function r(e,t,n){l(function(){e[t]=n})}function o(e,t){var n,o,i=t.elm,a=e.data.style,s=t.data.style;if((a||s)&&a!==s){a=a||{},s=s||{};var l="delayed"in a;for(o in a)s[o]||("-"===o[0]&&"-"===o[1]?i.style.removeProperty(o):i.style[o]="");for(o in s)if(n=s[o],"delayed"===o)for(o in s.delayed)n=s.delayed[o],l&&n===a.delayed[o]||r(i.style,o,n);else"remove"!==o&&n!==a[o]&&("-"===o[0]&&"-"===o[1]?i.style.setProperty(o,n):i.style[o]=n)}}function i(e){var t,n,r=e.elm,o=e.data.style;if(o&&(t=o.destroy))for(n in t)r.style[n]=t[n]}function a(e,t){var n=e.data.style;if(!n||!n.remove)return void t();var r,o,i=e.elm,a=0,s=n.remove,l=0,u=[];for(r in s)u.push(r),i.style[r]=s[r];o=getComputedStyle(i);for(var f=o["transition-property"].split(", ");a<f.length;++a)u.indexOf(f[a])!==-1&&l++;i.addEventListener("transitionend",function(e){e.target===i&&--l,0===l&&t()})}var s="undefined"!=typeof window&&window.requestAnimationFrame||setTimeout,l=function(e){s(function(){s(e)})};t.styleModule={create:o,update:o,destroy:i,remove:a},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styleModule},function(e,t,n){"use strict";function r(e){return void 0===e}function o(e){return void 0!==e}function i(e,t){return e.key===t.key&&e.sel===t.sel}function a(e){return void 0!==e.sel}function s(e,t,n){var r,o,i,a={};for(r=t;r<=n;++r)null!=(i=e[r])&&void 0!==(o=i.key)&&(a[o]=r);return a}function l(e,t){function n(e){var t=e.id?"#"+e.id:"",n=e.className?"."+e.className.split(" ").join("."):"";return u.default(O.tagName(e).toLowerCase()+t+n,{},[],void 0,e)}function l(e,t){return function(){if(0==--t){var n=O.parentNode(e);O.removeChild(n,e)}}}function v(e,t){var n,i=e.data;void 0!==i&&o(n=i.hook)&&o(n=n.init)&&(n(e),i=e.data);var a=e.children,s=e.sel;if("!"===s)r(e.text)&&(e.text=""),e.elm=O.createComment(e.text);else if(void 0!==s){var l=s.indexOf("#"),u=s.indexOf(".",l),c=l>0?l:s.length,p=u>0?u:s.length,h=l!==-1||u!==-1?s.slice(0,Math.min(c,p)):s,y=e.elm=o(i)&&o(n=i.ns)?O.createElementNS(n,h):O.createElement(h);for(c<p&&(y.id=s.slice(c+1,p)),u>0&&(y.className=s.slice(p+1).replace(/\./g," ")),n=0;n<k.create.length;++n)k.create[n](d,e);if(f.array(a))for(n=0;n<a.length;++n){var m=a[n];null!=m&&O.appendChild(y,v(m,t))}else f.primitive(e.text)&&O.appendChild(y,O.createTextNode(e.text));n=e.data.hook,o(n)&&(n.create&&n.create(d,e),n.insert&&t.push(e))}else e.elm=O.createTextNode(e.text);return e.elm}function h(e,t,n,r,o,i){for(;r<=o;++r){var a=n[r];null!=a&&O.insertBefore(e,v(a,i),t)}}function y(e){var t,n,r=e.data;if(void 0!==r){for(o(t=r.hook)&&o(t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(void 0!==e.children)for(n=0;n<e.children.length;++n)null!=(t=e.children[n])&&"string"!=typeof t&&y(t)}}function m(e,t,n,r){for(;n<=r;++n){var i=void 0,a=void 0,s=void 0,u=t[n];if(null!=u)if(o(u.sel)){for(y(u),a=k.remove.length+1,s=l(u.elm,a),i=0;i<k.remove.length;++i)k.remove[i](u,s);o(i=u.data)&&o(i=i.hook)&&o(i=i.remove)?i(u,s):s()}else O.removeChild(e,u.elm)}}function g(e,t,n,o){for(var a,l,u,f,c=0,d=0,p=t.length-1,y=t[0],g=t[p],x=n.length-1,_=n[0],k=n[x];c<=p&&d<=x;)null==y?y=t[++c]:null==g?g=t[--p]:null==_?_=n[++d]:null==k?k=n[--x]:i(y,_)?(b(y,_,o),y=t[++c],_=n[++d]):i(g,k)?(b(g,k,o),g=t[--p],k=n[--x]):i(y,k)?(b(y,k,o),O.insertBefore(e,y.elm,O.nextSibling(g.elm)),y=t[++c],k=n[--x]):i(g,_)?(b(g,_,o),O.insertBefore(e,g.elm,y.elm),g=t[--p],_=n[++d]):(void 0===a&&(a=s(t,c,p)),l=a[_.key],r(l)?(O.insertBefore(e,v(_,o),y.elm),_=n[++d]):(u=t[l],u.sel!==_.sel?O.insertBefore(e,v(_,o),y.elm):(b(u,_,o),t[l]=void 0,O.insertBefore(e,u.elm,y.elm)),_=n[++d]));c>p?(f=null==n[x+1]?null:n[x+1].elm,h(e,f,n,d,x,o)):d>x&&m(e,t,c,p)}function b(e,t,n){var i,a;o(i=t.data)&&o(a=i.hook)&&o(i=a.prepatch)&&i(e,t);var s=t.elm=e.elm,l=e.children,u=t.children;if(e!==t){if(void 0!==t.data){for(i=0;i<k.update.length;++i)k.update[i](e,t);i=t.data.hook,o(i)&&o(i=i.update)&&i(e,t)}r(t.text)?o(l)&&o(u)?l!==u&&g(s,l,u,n):o(u)?(o(e.text)&&O.setTextContent(s,""),h(s,null,u,0,u.length-1,n)):o(l)?m(s,l,0,l.length-1):o(e.text)&&O.setTextContent(s,""):e.text!==t.text&&O.setTextContent(s,t.text),o(a)&&o(i=a.postpatch)&&i(e,t)}}var x,_,k={},O=void 0!==t?t:c.default;for(x=0;x<p.length;++x)for(k[p[x]]=[],_=0;_<e.length;++_){var w=e[_][p[x]];void 0!==w&&k[p[x]].push(w)}return function(e,t){var r,o,s,l=[];for(r=0;r<k.pre.length;++r)k.pre[r]();for(a(e)||(e=n(e)),i(e,t)?b(e,t,l):(o=e.elm,s=O.parentNode(o),v(t,l),null!==s&&(O.insertBefore(s,t.elm,O.nextSibling(o)),m(s,[e],0,0))),r=0;r<l.length;++r)l[r].data.hook.insert(l[r]);for(r=0;r<k.post.length;++r)k.post[r]();return t}}var u=n(2),f=n(1),c=n(10),d=u.default("",{},[],void 0,void 0),p=["create","update","remove","destroy","pre","post"],v=n(0);t.h=v.h;var h=n(11);t.thunk=h.thunk,t.init=l},function(e,t,n){"use strict";function r(e){return document.createElement(e)}function o(e,t){return document.createElementNS(e,t)}function i(e){return document.createTextNode(e)}function a(e){return document.createComment(e)}function s(e,t,n){e.insertBefore(t,n)}function l(e,t){e.removeChild(t)}function u(e,t){e.appendChild(t)}function f(e){return e.parentNode}function c(e){return e.nextSibling}function d(e){return e.tagName}function p(e,t){e.textContent=t}function v(e){return e.textContent}function h(e){return 1===e.nodeType}function y(e){return 3===e.nodeType}function m(e){return 8===e.nodeType}t.htmlDomApi={createElement:r,createElementNS:o,createTextNode:i,createComment:a,insertBefore:s,removeChild:l,appendChild:u,parentNode:f,nextSibling:c,tagName:d,setTextContent:p,getTextContent:v,isElement:h,isText:y,isComment:m},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.htmlDomApi},function(e,t,n){"use strict";function r(e,t){t.elm=e.elm,e.data.fn=t.data.fn,e.data.args=t.data.args,t.data=e.data,t.children=e.children,t.text=e.text,t.elm=e.elm}function o(e){var t=e.data;r(t.fn.apply(void 0,t.args),e)}function i(e,t){var n,o=e.data,i=t.data,a=o.args,s=i.args;for(o.fn===i.fn&&a.length===s.length||r(i.fn.apply(void 0,s),t),n=0;n<s.length;++n)if(a[n]!==s[n])return void r(i.fn.apply(void 0,s),t);r(e,t)}var a=n(0);t.thunk=function(e,t,n,r){return void 0===r&&(r=n,n=t,t=void 0),a.h(e,{key:t,hook:{init:o,prepatch:i},fn:n,args:r})},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.thunk},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Tung=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(4),c=r(f),d=n(9),p=r(d),v=n(0),h=r(v),y=n(6),m=r(y),g=n(7),b=r(g),x=n(8),_=r(x),k=n(3),O=r(k),w=n(5),C=r(w),A=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e&&e instanceof window.HTMLElement&&(n.container=e,n.patch=p.default.init([C.default,m.default,b.default,_.default,O.default])),n.refs={},n}return s(t,e),u(t,[{key:"init",value:function(){}},{key:"destroy",value:function(){}},{key:"setProps",value:function(e){this.props=e}},{key:"setView",value:function(e){this.tpl=e;for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.components=n}},{key:"setState",value:function(e){var n=this;if(t.ctx.push(this),this.state=e,this._inited)this.fire("changed");else{var r;this._render((r=this.tpl).call.apply(r,[e,this._process].concat(o(this.tpl.components.map(function(e){return n.components.find(function(t){return t.id===e||t.name.toLowerCase()===e})})))))}}},{key:"_render",value:function(e){if(this.stateRender=e,e.data.hook={remove:this._remove.bind(this)},this.container){if(this.container.stateRender)this.patch(this.container.stateRender,e);else{var t=document.createElement("div");this.container.appendChild(t),this.patch(t,e)}this.container.stateRender=e,this.els={},this._saveEls(e)}else this._inited=!0}},{key:"_process",value:function(e,n,r){var o=this,i=n.attrs&&n.attrs.block,a=t.ctx[t.ctx.length-1],s="function"==typeof e,u=void 0,f=void 0;return i&&(o=this[i],Array.isArray(o)?(r=t.processArray(o,e,r),u=!0):o?("object"!==(void 0===o?"undefined":l(o))&&(o=this),o.inheritedCtx=!0):(r=void 0,f=!0)),f||(o.inheritedCtx&&(Object.assign(n,t.getProps(o)),delete o.inheritedCtx),u||(r=t.processChild.call(a,e,r,o)),s?i&&t.executeArray(r,function(e){e.forEach(function(e){return Object.assign(e.data.attrs,n.attrs)})}):r=(0,h.default)(e,n,r)),r}},{key:"_saveEls",value:function(e){var n=e.data&&e.data.attrs&&e.data.attrs.block;n&&(this.els[n]?this.els[n]=t.executeArray(this.els[n],function(t){return t.push(e.elm),t}):this.els[n]=e.elm),e.children&&e.children.forEach(this._saveEls,this)}},{key:"_remove",value:function(e,t){this.fire("removed",this),t()}},{key:"_childRemoved",value:function(){this.setState(this.state)}},{key:"_childRemoved",value:function(e){e.destroy();var t=this.refs[e.constructor.name];if(Array.isArray(t)){var n=t.findIndex(function(t){return t===e});t.splice(n,1)}else delete this.refs[e.constructor.name]}}],[{key:"processChild",value:function(e,n,r){var i=this,a="function"==typeof e,s=e.name;if(a)if(r.inheritedCtx=!0,s){var l=this.refs[e.name];if(l&&t.executeArray(l,function(e){l=e.find(function(e){return e.relatedObj===r})}),l)l._inited=!1,l.state.inheritedCtx=r.inheritedCtx,l.setState(l.state),n=l.stateRender;else{var u=new e;u.setProps(r),u.init(),u.on("changed",this._childRemoved,this).on("removed",this._childRemoved,this),u.relatedObj=r,n=u.stateRender,t.ctx.pop(),this.refs[e.name]?this.refs[e.name]=t.executeArray(this.refs[e.name],function(e){return e.push(u),e}):this.refs[e.name]=u}}else n=e.call.apply(e,[r,this._process].concat(o(e.components.map(function(e){return i.components.find(function(t){return t.id===e})}))));return"function"==typeof n&&(n=n.call(r),Array.isArray(n[0])&&(n=n[0]),n=n.filter(function(e){return void 0!==e})),n}},{key:"executeArray",value:function(e,t){return t(Array.isArray(e)?e:[e])}},{key:"processArray",value:function(e,n,r){var o=t.ctx[t.ctx.length-1];return e.map(function(e,i){"object"!==(void 0===e?"undefined":l(e))&&(e={item:e}),e.key=i,e.inheritedCtx=!0;var a=t.processChild.call(o,n,r,e);return Array.isArray(a)&&(a.length>1&&console.error("Children have to have parent node in array."),a=a[0]),a})}},{key:"getProps",value:function(e){var n=t.ctx[t.ctx.length-1],r={};return["class","on","style","props","key"].forEach(function(t){var o=e[t];if(void 0!==o){if("on"===t)for(var i in o)"function"==typeof o[i]&&(o[i]=[o[i],n]);r[t]=o}}),r}}]),t}(c.default);A.ctx=[],t.Tung=A}])});