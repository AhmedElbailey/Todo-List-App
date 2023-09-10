// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hkuCm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "da99e7d0a93db7a0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"g0tuS":[function(require,module,exports) {
var _configJs = require("../config.js");
///////////////////////////////////////
// Variables///////////////////////////
const todoForm = document.querySelector(".todo-form");
const textInput = document.querySelector(".text-input");
const priorityInput = document.querySelector("#priority-input");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector("#root");
const errMsgContainer = document.querySelector(".error-msg-container");
const toFormLink = document.querySelector(".to-form-link");
let token;
const state = {
    allTodos: [],
    renderdTodos: "all"
};
///////////////////////////////////////
// Functions///////////////////////////
////////// Render Todos
window.addEventListener("load", async ()=>{
    try {
        // Check if token in local storage is expired
        token = JSON.parse(localStorage.getItem("todo-app-token"));
        if (!token) return toFormLink.click();
        const res = await fetch(`${(0, _configJs.API_URL)}/checkAuth`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        });
        const data = await res.json();
        ckeckAuthorization(data.statusCode);
        // Check if todos is not stored in local storage
        if (localStorage.getItem("todos") == null) {
            console.log("from server");
            // fetch todos from server
            const response = await fetch(`${(0, _configJs.API_URL)}/todo`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            });
            let data = await response.json();
            if (data.statusCode !== 200) throw new Error(data.message);
            state.allTodos = [
                ...data.data
            ];
            state.renderdTodos = "all";
            localStorage.setItem("todos", JSON.stringify(data.data));
            renderTodosArr(state.allTodos);
        } else {
            console.log("from local storage");
            // get todos from local storage
            state.allTodos = JSON.parse(localStorage.getItem("todos"));
            renderTodosArr(state.allTodos);
        }
    } catch (err) {
        console.log(err);
        errMsgContainer.innerText = "";
        errMsgContainer.insertAdjacentText("afterbegin", err.message);
    }
});
////////// Create Todo
todoForm.addEventListener("submit", async (e)=>{
    try {
        e.preventDefault();
        const response = await fetch(`${(0, _configJs.API_URL)}/todo`, {
            method: "POST",
            body: JSON.stringify({
                text: textInput.value,
                priorityLevel: priorityInput.value
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        });
        let data = await response.json();
        ckeckAuthorization(data.statusCode);
        if (data.statusCode !== 200) throw new Error(data.message);
        textInput.value = "";
        state.allTodos.push(data.data);
        localStorage.setItem("todos", JSON.stringify(state.allTodos));
        renderNewTodo(data.data);
    } catch (err) {
        console.log(err);
        errMsgContainer.innerText = "";
        errMsgContainer.insertAdjacentText("afterbegin", err.message);
    }
});
////////// Delete Todo
document.body.addEventListener("click", async (e)=>{
    try {
        if (e.target.classList.contains("delete-btn") && !e.target.querySelector("svg") || Boolean(e.target.closest(".trash-icon"))) {
            const todoId = e.target.closest("li").getAttribute("data-id");
            const res = await fetch(`${(0, _configJs.API_URL)}/todo`, {
                method: "DELETE",
                body: JSON.stringify({
                    todoId: todoId
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            });
            let data = await res.json();
            ckeckAuthorization(data.statusCode);
            if (data.statusCode !== 200) throw new Error(data.message);
            let newStateTodos = state.allTodos.filter((el, i, arr)=>el._id !== todoId);
            state.allTodos = [
                ...newStateTodos
            ];
            localStorage.setItem("todos", JSON.stringify(state.allTodos));
            renderTodosArr(state.allTodos);
        }
    } catch (err) {
        console.log(err);
        errMsgContainer.innerText = "";
        errMsgContainer.insertAdjacentText("afterbegin", err.message);
    }
});
////////// Enable Todo Editing
document.body.addEventListener("click", async (e)=>{
    try {
        let clickedBtn = e.target;
        // For PC Screens
        if (clickedBtn.classList.contains("edit-btn") && !clickedBtn.classList.contains("edit-icon-btn")) {
            console.log("shouldnot go here");
            const todoEl = e.target.closest("li");
            let todoTextEl = todoEl.querySelector("input");
            let todoPriorityEl = todoEl.querySelector("select");
            if (clickedBtn.innerText.toLowerCase() === "edit") {
                clickedBtn.innerText = "SAVE";
                todoPriorityEl.removeAttribute("disabled");
                todoPriorityEl.classList.toggle("select-disabled");
                todoPriorityEl.classList.toggle("select-enabled");
                todoTextEl.removeAttribute("readonly");
                todoTextEl.focus();
            } else {
                clickedBtn.innerText = "EDIT";
                todoPriorityEl.setAttribute("disabled", "disabled");
                todoPriorityEl.classList.toggle("select-disabled");
                todoPriorityEl.classList.toggle("select-enabled");
                todoTextEl.setAttribute("readonly", "readonly");
                const todoId = todoEl.getAttribute("data-id");
                const newText = todoTextEl.value;
                const newPriority = todoPriorityEl.value;
                editTodo(todoId, newText, newPriority);
            }
        }
        // For Mobile Screens
        if (clickedBtn.classList.contains("edit-icon")) {
            const todoEl = e.target.closest("li");
            let todoTextEl = todoEl.querySelector("input");
            let todoPriorityEl = todoEl.querySelector("select");
            if (clickedBtn.classList.contains("edit-mode")) {
                clickedBtn.classList.remove("edit-mode");
                clickedBtn.classList.add("save-mode");
                todoPriorityEl.removeAttribute("disabled");
                todoPriorityEl.classList.toggle("select-disabled");
                todoPriorityEl.classList.toggle("select-enabled");
                todoTextEl.removeAttribute("readonly");
                todoTextEl.focus();
            } else {
                clickedBtn.classList.add("edit-mode");
                clickedBtn.classList.remove("save-mode");
                todoPriorityEl.setAttribute("disabled", "disabled");
                todoPriorityEl.classList.toggle("select-disabled");
                todoPriorityEl.classList.toggle("select-enabled");
                todoTextEl.setAttribute("readonly", "readonly");
                const todoId = todoEl.getAttribute("data-id");
                const newText = todoTextEl.value;
                const newPriority = todoPriorityEl.value;
                editTodo(todoId, newText, newPriority);
            }
        }
    } catch (err) {
        console.log(err);
        errMsgContainer.innerText = "";
        errMsgContainer.insertAdjacentText("afterbegin", err.message);
    }
});
////////// Edit Todo
async function editTodo(todoId, newText, newPriority) {
    try {
        // Update in server
        const res = await fetch(`${(0, _configJs.API_URL)}/todo`, {
            method: "PATCH",
            body: JSON.stringify({
                todoId: todoId,
                newText: newText,
                newPriority: newPriority
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        });
        let data = await res.json();
        ckeckAuthorization(data.statusCode);
        if (data.statusCode !== 200) throw new Error(data.message);
        // Update in local storage and render
        let stateTodoIndex = state.allTodos.findIndex((el, i, arr)=>el._id === todoId);
        state.allTodos[stateTodoIndex].text = newText;
        state.allTodos[stateTodoIndex].priorityLevel = newPriority;
        localStorage.setItem("todos", JSON.stringify(state.allTodos));
        renderTodosArr(state.allTodos);
    } catch (err) {
        console.log(err);
        errMsgContainer.innerText = "";
        errMsgContainer.insertAdjacentText("afterbegin", err.message);
    }
}
////////// Complete & Pend Todo
window.addEventListener("click", async (e)=>{
    try {
        if (!e.target.classList.contains("list-item")) return;
        // Complete Todo
        if (!e.target.classList.contains("completed")) {
            const todoId = e.target.getAttribute("data-id");
            // Update in server
            const res = await fetch(`${(0, _configJs.API_URL)}/todo/complete`, {
                method: "PATCH",
                body: JSON.stringify({
                    todoId: todoId
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            });
            let data = await res.json();
            ckeckAuthorization(data.statusCode);
            if (data.statusCode !== 200) throw new Error(data.message);
            // Update in local storage
            e.target.classList.add("completed");
            e.target.classList.remove("pending");
            const todoIndex = state.allTodos.findIndex((el, i)=>el._id === todoId);
            state.allTodos[todoIndex].todoStatus = "completed";
            localStorage.setItem("todos", JSON.stringify(state.allTodos));
        // return renderTodosArr(state.allTodos);
        // Pend Todo
        } else if (e.target.classList.contains("completed")) {
            const todoId = e.target.getAttribute("data-id");
            // Update in server
            const res = await fetch(`${(0, _configJs.API_URL)}/todo/pend`, {
                method: "PATCH",
                body: JSON.stringify({
                    todoId: todoId
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            });
            let data = await res.json();
            ckeckAuthorization(data.statusCode);
            if (data.statusCode !== 200) throw new Error(data.message);
            // Update in local storage
            e.target.classList.remove("completed");
            e.target.classList.add("pending");
            const todoIndex = state.allTodos.findIndex((el, i)=>el._id === todoId);
            state.allTodos[todoIndex].todoStatus = "pending";
            localStorage.setItem("todos", JSON.stringify(state.allTodos));
        // renderTodosArr(state.allTodos);
        }
    } catch (err) {
        console.log("My error: ", err);
        errMsgContainer.innerText = "";
        errMsgContainer.insertAdjacentText("afterbegin", err.message);
    }
});
////////// Filter events
const filterInput = document.querySelector("#filter-select");
filterInput.addEventListener("change", ()=>{
    let filter = filterInput.value;
    if (filter === "none") {
        state.renderdTodos = "all";
        return renderTodosArr(state.allTodos);
    }
    if (filter === "pending") {
        let pendingTodos = state.allTodos.filter((el, i)=>el.todoStatus === "pending");
        state.renderdTodos = "pending";
        return renderTodosArr(pendingTodos);
    }
    if (filter === "completed") {
        let completedTodos = state.allTodos.filter((el, i)=>el.todoStatus === "completed");
        state.renderdTodos = "completed";
        return renderTodosArr(completedTodos);
    }
});
////////// Sorting events
const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e)=>{
    let sortValue = sortSelect.value;
    let renderedArr = [];
    // Sorting by Date: Oldest-to-Newest
    if (sortValue === "oldest-to-newest") {
        if (state.renderdTodos === "all") renderTodosArr(state.allTodos);
        else if (state.renderdTodos === "completed") {
            let completedTodos = getCompletedTodos();
            renderTodosArr(completedTodos);
        } else if (state.renderdTodos === "pending") {
            let pendingTodos = getPendingTodos();
            renderTodosArr(pendingTodos);
        }
    }
    // Sorting by Date: Newest-to-Oldest
    if (sortValue === "newest-to-oldest") {
        if (state.renderdTodos === "all") {
            for(let i = state.allTodos.length - 1; i >= 0; i--)renderedArr.push(state.allTodos[i]);
            renderTodosArr(renderedArr);
        } else if (state.renderdTodos === "completed") {
            let completedTodos = getCompletedTodos();
            for(let i = completedTodos.length - 1; i >= 0; i--)renderedArr.push(completedTodos[i]);
            renderTodosArr(renderedArr);
        } else if (state.renderdTodos === "pending") {
            let pendingTodos = getPendingTodos();
            for(let i = pendingTodos.length - 1; i >= 0; i--)renderedArr.push(pendingTodos[i]);
            renderTodosArr(renderedArr);
        }
    }
    // Sorting by Priority
    if (sortValue === "priority") {
        // Render High priority first then Medium then Low
        if (state.renderdTodos === "all") {
            let highPriority = state.allTodos.filter((el)=>el.priorityLevel === "high");
            let mediumPriority = state.allTodos.filter((el)=>el.priorityLevel === "medium");
            let lowPriority = state.allTodos.filter((el)=>el.priorityLevel === "low");
            renderTodosArr(highPriority);
            for(let i = 0; i < mediumPriority.length; i++)renderNewTodo(mediumPriority[i]);
            for(let i = 0; i < lowPriority.length; i++)renderNewTodo(lowPriority[i]);
        }
        if (state.renderdTodos === "pending") {
            let highPriority = state.allTodos.filter((el)=>el.priorityLevel === "high" && el.todoStatus === "pending");
            let mediumPriority = state.allTodos.filter((el)=>el.priorityLevel === "medium" && el.todoStatus === "pending");
            let lowPriority = state.allTodos.filter((el)=>el.priorityLevel === "low" && el.todoStatus === "pending");
            renderTodosArr(highPriority);
            for(let i = 0; i < mediumPriority.length; i++)renderNewTodo(mediumPriority[i]);
            for(let i = 0; i < lowPriority.length; i++)renderNewTodo(lowPriority[i]);
        }
        if (state.renderdTodos === "completed") {
            let highPriority = state.allTodos.filter((el)=>el.priorityLevel === "high" && el.todoStatus === "completed");
            let mediumPriority = state.allTodos.filter((el)=>el.priorityLevel === "medium" && el.todoStatus === "completed");
            let lowPriority = state.allTodos.filter((el)=>el.priorityLevel === "low" && el.todoStatus === "completed");
            renderTodosArr(highPriority);
            for(let i = 0; i < mediumPriority.length; i++)renderNewTodo(mediumPriority[i]);
            for(let i = 0; i < lowPriority.length; i++)renderNewTodo(lowPriority[i]);
        }
    }
});
////// Open Date Container
const showDateBtn = document.querySelector(".show-date-btn");
showDateBtn.addEventListener("click", ()=>{
    const todoItems = document.querySelectorAll(".list-item");
    const todosContainer = document.querySelector(".todos__list");
    // const dateContainer = document.querySelectorAll('.date-container');
    if (!todoItems) return;
    todoItems.forEach((el)=>{
        el.classList.toggle("open-date");
        el.querySelector(".date-container").classList.toggle("open");
    });
    todosContainer.firstElementChild.classList.remove("open-date");
});
///////////////////////////////////////////////////////////////
// Helper Functions
function renderNewTodo(data) {
    let html;
    let todosList = container.querySelector(".todos__list");
    let createdAt = new Date(data.createdAt);
    // let updatedAt = new Date(data.updatedAt);
    // let priority = data.priorityLevel;
    let options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    data.dateFormat = new Intl.DateTimeFormat("en-us", options).format(createdAt);
    let screenWidth = document.querySelector("#root").getBoundingClientRect().width;
    if (Boolean(todosList) && screenWidth > 440) {
        data.isOpenDate = todosList.firstElementChild.querySelector("span").classList.contains("open");
        html = getHtmlTodoPC(false, data);
        todosList.insertAdjacentHTML("beforeend", html);
    } else if (!Boolean(todosList) && screenWidth > 440) {
        html = getHtmlTodoPC(true, data);
        container.insertAdjacentHTML("beforeend", html);
    } else if (Boolean(todosList) && screenWidth <= 440) {
        data.isOpenDate = todosList.firstElementChild.querySelector("span").classList.contains("open");
        let html = getHtmlTodoMobile(false, data);
        todosList.insertAdjacentHTML("beforeend", html);
    } else if (!Boolean(todosList) && screenWidth <= 440) {
        let html = getHtmlTodoMobile(true, data);
        container.insertAdjacentHTML("beforeend", html);
    }
}
function renderTodosArr(todosArr) {
    let todosList = container.querySelector(".todos__list");
    if (todosList) todosList.parentNode.removeChild(todosList);
    todosArr.forEach((dataObj)=>{
        renderNewTodo(dataObj);
    });
}
function getPendingTodos() {
    let pendingTodos = state.allTodos.filter((el, i)=>el.todoStatus === "pending");
    return pendingTodos;
}
function getCompletedTodos() {
    let completedTodos = state.allTodos.filter((el, i)=>el.todoStatus === "completed");
    return completedTodos;
}
function getHtmlTodoPC(firstTodoBool, todoData) {
    let starting = `<ul class="todos__list">`;
    let ending = `</ul>`;
    let todoListItem = `
        <li data-id="${todoData._id}" class="list-item ${todoData.todoStatus} ${!firstTodoBool && todoData.isOpenDate ? "open-date" : null}">
          <input readonly value="${todoData.text}" />
          <div class="todo-list-container">
            <select
              disabled
              class="select-disabled"
              title="priority-input"
              id="priority-input-list"
            >
              <option value="high" ${todoData.priorityLevel === "high" ? "selected" : null}>High</option>
              <option value="medium" ${todoData.priorityLevel === "medium" ? "selected" : null}>Medium</option>
              <option value="low" ${todoData.priorityLevel === "low" ? "selected" : null}>Low</option>
            </select>
            <div class="todo__actions">
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
            </div>
          </div>
          <span class="date-container ${!firstTodoBool && todoData.isOpenDate ? "open" : null}">${todoData.dateFormat}</span>
        </li>
    `;
    if (firstTodoBool) return starting + todoListItem + ending;
    else return todoListItem;
}
function getHtmlTodoMobile(firstTodoBool, todoData) {
    let starting = `<ul class="todos__list">`;
    let ending = `</ul>`;
    let todoListItem = `
  <li data-id="${todoData._id}" class="list-item ${todoData.todoStatus} ${!firstTodoBool && todoData.isOpenDate ? "open-date" : null}">
  <input readonly value="${todoData.text}" />
  <div class="todo-list-container">
    <select
      disabled
      class="select-disabled"
      title="priority-input"
      id="priority-input-list"
    >
    <option value="high" ${todoData.priorityLevel === "high" ? "selected" : null}>High</option>
    <option value="medium" ${todoData.priorityLevel === "medium" ? "selected" : null}>Medium</option>
    <option value="low" ${todoData.priorityLevel === "low" ? "selected" : null}>Low</option>
    </select>
    <div class="todo__actions">
      <button class="edit-icon-btn edit-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="edit-icon edit-mode"
        >
          <defs>
            <clipPath id="mask">
           
              <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button class="delete-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="trash-icon"
        >
          <path
            fill-rule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
  <span class="date-container ${!firstTodoBool && todoData.isOpenDate ? "open" : null}">${todoData.dateFormat}</span>
</li>`;
    if (firstTodoBool) return starting + todoListItem + ending;
    else return todoListItem;
}
function ckeckAuthorization(statusCode) {
    if (statusCode === 401) {
        localStorage.removeItem("todo-app-token");
        localStorage.removeItem("todos");
        return toFormLink.click();
    }
}

},{"../config.js":"f2TEI"}],"f2TEI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
const API_URL = "https://todo-list-app-aqg0.onrender.com";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["hkuCm","g0tuS"], "g0tuS", "parcelRequiree5c7")

//# sourceMappingURL=app.a93db7a0.js.map
