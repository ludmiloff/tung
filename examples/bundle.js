(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tung", [], factory);
	else if(typeof exports === 'object')
		exports["tung"] = factory();
	else
		root["tung"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(4);
var is = __webpack_require__(3);
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = h;
//# sourceMappingURL=h.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {
  if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define(["module"], factory);else if (typeof exports === 'object') exports["module"] = factory();else root["module"] = factory();
})(this, function (module = {}) {
  module.exports = function (h) {
    return h.call(
      this,
      "span",
      {
        attrs: { "class": "btn" }
      },
      function x() {
        return [this.text];
      }
    );
  };

  module.exports.id = 'btn';
  module.exports.components = [];
  return module.exports;
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observer__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_snabbdom_snabbdom__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_snabbdom_snabbdom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_snabbdom_snabbdom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_snabbdom_h__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_snabbdom_h___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_snabbdom_h__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_class__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_props__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_style__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eventlisteners__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eventlisteners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__eventlisteners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_snabbdom_modules_attributes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_snabbdom_modules_attributes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_snabbdom_modules_attributes__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tung; });











class Tung extends __WEBPACK_IMPORTED_MODULE_0__observer__["a" /* default */] {
    constructor(container) {
        super();
        
        if (container && container instanceof window.HTMLElement) {
            this.container = container;
            this.patch = __WEBPACK_IMPORTED_MODULE_1_snabbdom_snabbdom___default.a.init([__WEBPACK_IMPORTED_MODULE_7_snabbdom_modules_attributes___default.a, __WEBPACK_IMPORTED_MODULE_3_snabbdom_modules_class___default.a, __WEBPACK_IMPORTED_MODULE_4_snabbdom_modules_props___default.a, __WEBPACK_IMPORTED_MODULE_5_snabbdom_modules_style___default.a, __WEBPACK_IMPORTED_MODULE_6__eventlisteners___default.a]);
        }

        this.refs = {};
    }

    init() {}

    destroy() {}

    setProps(props) {
        this.props = props;
    }

    setView(tpl, ...components) {
        this.tpl = tpl;
        this.components = components;
    }

    setState(state) {
        Tung.ctx.push(this);
        this.state = state;

        if (!this._inited) {
            this._render(
                this.tpl.call(
                    state,
                    this._process,
                    ...this.tpl.components.map((c) => this.components.find(component => component.id === c || component.name.toLowerCase() === c))
                )
            );
        } else {
            this.fire('changed');
        }
    }

    _render(stateRender) {
        this.stateRender = stateRender;
        
        stateRender.data.hook = { remove: this._remove.bind(this) };
        
        if (this.container) {
            if (this.container.stateRender) {
                this.patch(this.container.stateRender, stateRender);
            } else {
                let div = document.createElement('div');
                this.container.appendChild(div);
                this.patch(div, stateRender);
            }
            this.container.stateRender = stateRender;
            this.els = {};
            this._saveEls(stateRender);
        } else {
            this._inited = true;
        }
    }

    _process(sel, props, child) {
        let ctx = this;
        let block = props.attrs && props.attrs.block;
        let tung = Tung.ctx[Tung.ctx.length-1];
        let isComponent = typeof sel === 'function';
        let childProcessed;
        let childIgnored;

        if (block) {
            ctx = this[block];
            if (Array.isArray(ctx)) {
                child = Tung.processArray(ctx, sel, child);
                childProcessed = true;
            } else if (ctx) {
                if (typeof ctx !== 'object') {
                    ctx = this;
                }
                ctx.inheritedCtx = true;
            } else {
                child = undefined;
                childIgnored = true;
            }
        }

        if (!childIgnored) {
            if (ctx.inheritedCtx) {
                Object.assign(props, Tung.getProps(ctx));
                delete ctx.inheritedCtx;
            }

            if (!childProcessed) {
                child = Tung.processChild.call(tung, sel, child, ctx);
            }

            if (isComponent) {
                if (block) {
                    Tung.executeArray(child, arr => {
                        arr.forEach(child => Object.assign(child.data.attrs, props.attrs))
                    });
                }
            } else {
                child = __WEBPACK_IMPORTED_MODULE_2_snabbdom_h___default()(sel, props, child);
            }
        }

        return child;
    }

    _saveEls(node) {
        let block = node.data && node.data.attrs && node.data.attrs.block;
        if (block) {
            if (this.els[block]) {
                this.els[block] = Tung.executeArray(this.els[block], arr => {
                    arr.push(node.elm);
                    return arr;
                });
            } else {
                this.els[block] = node.elm;
            }
        }

        if (node.children) {
            node.children.forEach(this._saveEls, this);
        }
    }

    _remove(v, callback) {
        this.fire('removed', this);
        callback();
    }

    _childChanged() {
        this.setState(this.state);
    }

    _childRemoved(child) {
        child.destroy();
        let ref = this.refs[child.constructor.name];
        if (Array.isArray(ref)) {
            let index = ref.findIndex(ins => ins === child);
            ref.splice(index, 1);
        } else {
            delete this.refs[child.constructor.name];
        }
    }

    static processChild(sel, child, ctx) {
        let isComponent = typeof sel === 'function';
        let isStatefulComponent = sel.name;

        if (isComponent) {
            ctx.inheritedCtx = true;

            if (isStatefulComponent) {
                let initedComponent = this.refs[sel.name];
                if (initedComponent) {
                    Tung.executeArray(initedComponent, arr => {
                        initedComponent = arr.find(c => c.relatedObj === ctx);
                    });
                }

                if (initedComponent) {
                    initedComponent._inited = false;
                    initedComponent.state.inheritedCtx = ctx.inheritedCtx;
                    initedComponent.setState(initedComponent.state);
                    child = initedComponent.stateRender;
                } else {
                    let newComponent = new sel();
                    newComponent.setProps(ctx);
                    newComponent.init();
                    newComponent
                        .on('changed', this._childChanged, this)
                        .on('removed', this._childRemoved, this);
                    newComponent.relatedObj = ctx;
                    child = newComponent.stateRender;

                    Tung.ctx.pop();
                    if (this.refs[sel.name]) {
                        this.refs[sel.name] = Tung.executeArray(this.refs[sel.name], arr => {
                            arr.push(newComponent);
                            return arr;
                        });
                    } else {
                        this.refs[sel.name] = newComponent;
                    }
                }
            } else {
                child = sel.call(ctx, this._process, ...sel.components.map((c) => this.components.find(component => component.id === c)));
            }
        }
        if (typeof child === 'function') {
            child = child.call(ctx);
            if (Array.isArray(child[0])) {
                child = child[0];
            }
            child = child.filter(node => node !== undefined);
        }
        return child;
    }

    static executeArray(arr, fn) {
        if (Array.isArray(arr)) {
            return fn(arr);
        } else {
            return fn([arr]);
        }
    }

    static processArray(ctx, sel, child) {
        let tung = Tung.ctx[Tung.ctx.length-1];

        return ctx.map((context, index) => {
            if (typeof context !== 'object') {
                context = { item: context };
            }
            context.key = index;
            context.inheritedCtx = true;

            let vnode = Tung.processChild.call(tung, sel, child, context);
            if (Array.isArray(vnode)) {
                if (vnode.length > 1) {
                    console.error('Children have to have parent node in array.');
                }
                vnode = vnode[0];
            }
            return vnode;
        });
    }

    static getProps(ctx) {
        let tung = Tung.ctx[Tung.ctx.length-1];
        let props = {};
        ['class', 'on', 'style', 'props', 'key'].forEach(it => {
            let key = ctx[it];
            if (key !== undefined) {
                if (it === 'on') {
                    for (let event in key) {
                        if (typeof key[event] === 'function') {
                            key[event] = [key[event], tung];
                        }
                    }
                }
                props[it] = key;
            }
        });
        return props;
    }
}

Tung.ctx = [];




/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
//# sourceMappingURL=is.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
exports.vnode = vnode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = vnode;
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_tung__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tpl_components_card__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tpl_components_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tpl_components_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tpl_components_btn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tpl_components_btn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tpl_components_btn__);




class Card extends __WEBPACK_IMPORTED_MODULE_0__src_tung__["a" /* Tung */] {
    constructor(container) {
        super(container);

        this.setView(__WEBPACK_IMPORTED_MODULE_1__tpl_components_card___default.a, __WEBPACK_IMPORTED_MODULE_2__tpl_components_btn___default.a);
    }

    init() {
        this.setState(Object.assign({
            btn: {
                text: 'View profile',
                on: { click: this.handleEvent.bind(this) },
                props: { data: { url: this.props.url } }
            },
            delete: {
                text: 'Delete profile',
                on: { click: this.props.onDeleteProfile },
                props: { data: { id: this.props.id } }
            },
        }, this.props));
    }

    handleEvent(e) {
        window.open(e.target.data.url, 'profile', 'width=600,height=400');
    }
}

/* harmony default export */ __webpack_exports__["a"] = Card;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {
    if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define(["module"], factory);else if (typeof exports === 'object') exports["module"] = factory();else root["module"] = factory();
})(this, function (module = {}) {
    module.exports = function (h, Card, Btn) {
        return h.call(
            this,
            "div",
            {},
            function x() {
                return [h.call(
                    this,
                    "div",
                    {
                        attrs: { "class": "users" }
                    },
                    function x() {
                        return [h.call(
                            this,
                            Card,
                            {
                                attrs: { block: "users" }
                            }
                        )];
                    }
                ), h.call(
                    this,
                    Btn,
                    {
                        attrs: { block: "btn" }
                    }
                )];
            }
        );
    };

    module.exports.id = 'page';
    module.exports.components = ["card", "btn"];
    return module.exports;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {
    if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define(["module"], factory);else if (typeof exports === 'object') exports["module"] = factory();else root["module"] = factory();
})(this, function (module = {}) {
    module.exports = function (h, Btn) {
        return h.call(
            this,
            "div",
            {
                attrs: { "class": "item item--admin" }
            },
            function x() {
                return [h.call(
                    this,
                    "img",
                    {
                        attrs: { src: this.img, width: "50", height: "50", alt: "" }
                    }
                ), h.call(
                    this,
                    "span",
                    {
                        attrs: { "class": "item__content" }
                    },
                    function x() {
                        return [this.name, h.call(
                            this,
                            "span",
                            {
                                attrs: { block: "isAdmin" }
                            },
                            function x() {
                                return [" \u2022 admin"];
                            }
                        )];
                    }
                ), h.call(
                    this,
                    Btn,
                    {
                        attrs: { block: "btn" }
                    }
                ), h.call(
                    this,
                    Btn,
                    {
                        attrs: { block: "delete" }
                    }
                )];
            }
        );
    };

    module.exports.id = 'card';
    module.exports.components = ["btn"];
    return module.exports;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
exports.htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    getTextContent: getTextContent,
    isElement: isElement,
    isText: isText,
    isComment: isComment,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.htmlDomApi;
//# sourceMappingURL=htmldomapi.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NamespaceURIs = {
    "xlink": "http://www.w3.org/1999/xlink"
};
var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare",
    "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable",
    "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple",
    "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly",
    "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate",
    "truespeed", "typemustmatch", "visible"];
var booleanAttrsDict = Object.create(null);
for (var i = 0, len = booleanAttrs.length; i < len; i++) {
    booleanAttrsDict[booleanAttrs[i]] = true;
}
function updateAttrs(oldVnode, vnode) {
    var key, elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs, namespaceSplit;
    if (!oldAttrs && !attrs)
        return;
    if (oldAttrs === attrs)
        return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        var cur = attrs[key];
        var old = oldAttrs[key];
        if (old !== cur) {
            if (booleanAttrsDict[key]) {
                if (cur) {
                    elm.setAttribute(key, "");
                }
                else {
                    elm.removeAttribute(key);
                }
            }
            else {
                namespaceSplit = key.split(":");
                if (namespaceSplit.length > 1 && NamespaceURIs.hasOwnProperty(namespaceSplit[0])) {
                    elm.setAttributeNS(NamespaceURIs[namespaceSplit[0]], key, cur);
                }
                else {
                    elm.setAttribute(key, cur);
                }
            }
        }
    }
    // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
exports.attributesModule = { create: updateAttrs, update: updateAttrs };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.attributesModule;
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function updateClass(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? 'add' : 'remove'](name);
        }
    }
}
exports.classModule = { create: updateClass, update: updateClass };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.classModule;
//# sourceMappingURL=class.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    if (oldProps === props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.propsModule;
//# sourceMappingURL=props.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed') {
            for (name in style.delayed) {
                cur = style.delayed[name];
                if (!oldHasDel || cur !== oldStyle.delayed[name]) {
                    setNextFrame(elm.style, name, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
exports.styleModule = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.styleModule;
//# sourceMappingURL=style.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(4);
var is = __webpack_require__(3);
var htmldomapi_1 = __webpack_require__(8);
function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }
var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, map = {}, key, ch;
    for (i = beginIdx; i <= endIdx; ++i) {
        ch = children[i];
        if (ch != null) {
            key = ch.key;
            if (key !== undefined)
                map[key] = i;
        }
    }
    return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
var h_1 = __webpack_require__(0);
exports.h = h_1.h;
var thunk_1 = __webpack_require__(14);
exports.thunk = thunk_1.thunk;
function init(modules, domApi) {
    var i, j, cbs = {};
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            var hook = modules[j][hooks[i]];
            if (hook !== undefined) {
                cbs[hooks[i]].push(hook);
            }
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var children = vnode.children, sel = vnode.sel;
        if (sel === '!') {
            if (isUndef(vnode.text)) {
                vnode.text = '';
            }
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel !== undefined) {
            // Parse selector
            var hashIdx = sel.indexOf('#');
            var dotIdx = sel.indexOf('.', hashIdx);
            var hash = hashIdx > 0 ? hashIdx : sel.length;
            var dot = dotIdx > 0 ? dotIdx : sel.length;
            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                : api.createElement(tag);
            if (hash < dot)
                elm.id = sel.slice(hash + 1, dot);
            if (dotIdx > 0)
                elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            if (is.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    var ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            }
            else if (is.primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (i.create)
                    i.create(emptyNode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
            }
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (j = 0; j < vnode.children.length; ++j) {
                    i = vnode.children[j];
                    if (i != null && typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
            if (ch != null) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx > oldEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i, hook;
        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (vnode.data !== undefined) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (isDef(i) && isDef(i = i.update))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (isDef(hook) && isDef(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
exports.init = init;
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var h_1 = __webpack_require__(0);
function copyToThunk(vnode, thunk) {
    thunk.elm = vnode.elm;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    var cur = thunk.data;
    var vnode = cur.fn.apply(undefined, cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    var i, old = oldVnode.data, cur = thunk.data;
    var oldArgs = old.args, args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn.apply(undefined, args), thunk);
    }
    for (i = 0; i < args.length; ++i) {
        if (oldArgs[i] !== args[i]) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
            return;
        }
    }
    copyToThunk(oldVnode, thunk);
}
exports.thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return h_1.h(sel, {
        key: key,
        hook: { init: init, prepatch: prepatch },
        fn: fn,
        args: args
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.thunk;
//# sourceMappingURL=thunk.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.snabbdom_eventlisteners = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
        // call function handler
        handler.call(vnode, event, vnode);
    }
    else if (Array.isArray(handler)) {
        // call handler with arguments
        if (typeof handler[0] === "function") {
            // special case for single argument for performance
            if (handler.length === 2) {
                handler[0].call(handler[1], event, vnode);
            }
            else {
                var args = handler.slice(1);
                args.push(event);
                args.push(vnode);
                handler[0].apply(vnode, args);
            }
        }
        else {
            // call multiple handlers
            for (var i = 0; i < handler.length; i++) {
                invokeHandler(handler[i]);
            }
        }
    }
    else if (typeof handler === "object") {
        handler.handleEvent.call(handler, event);
    }
}
function handleEvent(event, vnode) {
    var name = event.type, on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) {
        invokeHandler(on[name], vnode, event);
    }
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
    // optimization for reused immutable handlers
    if (oldOn === on) {
        if (vnode) {
           vnode.listener = oldVnode.listener;
        }
        return;
    }
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) {
            for (name in oldOn) {
                // remove listener if element was changed or existing listeners removed
                oldElm.removeEventListener(name, oldListener, false);
            }
        }
        else {
            for (name in oldOn) {
                // remove listener if existing listener removed
                if (!on[name]) {
                    oldElm.removeEventListener(name, oldListener, false);
                }
            }
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        var listener = vnode.listener = oldVnode.listener || createListener();
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) {
            for (name in on) {
                // add listener if element was changed or new listeners added
                elm.addEventListener(name, listener, false);
            }
        }
        else {
            for (name in on) {
                // add listener if new listener added
                if (!oldOn[name]) {
                    elm.addEventListener(name, listener, false);
                }
            }
        }
    }
}
exports.eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.eventListenersModule;

},{}]},{},[1])(1)
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Observer {

    constructor() {
        this.listeners = {};
    }

    on(evt, callback, ctx) {
        if (!this.listeners.hasOwnProperty(evt)) {
            this.listeners[evt] = [];
        }
        let index = this.listeners[evt].length;
        this.listeners[evt][index] = {};
        this.listeners[evt][index].fn = callback;
        this.listeners[evt][index].ctx = ctx;
        
        return this;
    }

    off(evt, callback) {
        if (this.listeners.hasOwnProperty(evt)) {
            var i, length;

            for (i = 0, length = this.listeners[evt].length; i < length; i += 1) {
                if (this.listeners[evt][i] === callback) {
                    this.listeners[evt].splice(i, 1);
                }
            }
        }
        
        return this;
    }

    fire(evt, ...args) {
        if (this.listeners.hasOwnProperty(evt)) {
            var i, length;

            for (i = 0, length = this.listeners[evt].length; i < length; i += 1) {
                if (!args) {
                    var args = [];
                }
                this.listeners[evt][i].fn.apply(this.listeners[evt][i].ctx, args);
            }
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = Observer;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_tung__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tpl_page__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tpl_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tpl_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tpl_components_btn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tpl_components_btn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__tpl_components_btn__);





class Users extends __WEBPACK_IMPORTED_MODULE_0__src_tung__["a" /* Tung */] {
    constructor(container) {
        super(container);

        this.setView(__WEBPACK_IMPORTED_MODULE_2__tpl_page___default.a, __WEBPACK_IMPORTED_MODULE_3__tpl_components_btn___default.a, __WEBPACK_IMPORTED_MODULE_1__card__["a" /* default */]);
        
        fetch('https://api.github.com/users/octocat/following')
            .then(response => response.json())
            .then(users => this.ready(users))
            .catch(console.error);
    }

    ready(users) {
        users[Symbol.iterator] = this.getUsers;
        this.usersIterator = users[Symbol.iterator]();

        this.setState({
            users: [this.buildUser(this.usersIterator.next().value)],
            btn: {
                text: 'Load more',
                on: { click: this.handleEvent }
            }
        });
    }
    
    buildUser(user) {
        return {
            name: user.login,
            img: user.avatar_url,
            url: user.html_url,
            isAdmin: user.site_admin,
            id: user.id,
            onDeleteProfile: [this.onDeleteProfile, this]
        };
    }
    
    handleEvent(e) {
        let user = this.usersIterator.next();
        if (user.done) {
            delete this.state.btn;
        }
        this.state.users.push(this.buildUser(user.value));
        this.setState(this.state);
    }
    
    onDeleteProfile(e) {
        let index = this.state.users.findIndex(user => user.id === e.target.data.id);
        this.state.users.splice(index, 1);
        this.setState(this.state);
    }

    * getUsers() {
        for (let i = 0; i < this.length; i++) {
            if (this.length === i + 1) {
                return this[i];
            } else {
                yield this[i];
            }
        }
    }
}

new Users(root);

/***/ })
/******/ ]);
});