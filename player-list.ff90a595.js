// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/player-list.js":[function(require,module,exports) {
var PlayerList = [{
  "hash": "FAD5D2BECE63B606C4C83DCDF9FE90D4",
  "timelength": 210000,
  "filesize": 3371864,
  "audio_name": "\u9648\u4E4B - \u534A\u7A7A",
  "have_album": 1,
  "album_name": "\u534A\u7A7A",
  "album_id": "45508217",
  "img": "http:\/\/imge.kugou.com\/stdmusic\/20210618\/20210618152315717142.jpg",
  "have_mv": 0,
  "video_id": 0,
  "author_name": "\u9648\u4E4B",
  "song_name": "\u534A\u7A7A",
  "lyrics": "\uFEFF[id:$00000000]\r\n[ar:\u9648\u4E4B]\r\n[ti:\u534A\u7A7A]\r\n[by:zhaoxin_karakal]\r\n[hash:fad5d2bece63b606c4c83dcdf9fe90d4]\r\n[al:]\r\n[sign:]\r\n[qq:]\r\n[total:0]\r\n[offset:0]\r\n[00:00.00]\u534A\u7A7A - \u9648\u4E4B\r\n[00:03.01]\u8BCD\uFF1A\u7C73\u5609\u7389\r\n[00:03.72]\u66F2\uFF1A\u4E09\u73CA\r\n[00:04.26]\u7F16\u66F2\uFF1A\u7B71\u660E\r\n[00:05.00]\u5236\u4F5C\u4EBA\uFF1A\u4E00\u5BF8\u5149\u5E74\u56E2\u961F\r\n[00:06.71]\u914D\u5531\uFF1A\u4EFB\u5BD2\u51B0\r\n[00:08.14]\u5F55\u97F3\uFF1A\u738B\u6D69\u5B89@\u884C\u4EBAStudio/\u9F50\u5C0F\u9F99@K.Sonic Entertainment\r\n[00:10.92]\u5409\u4ED6\uFF1A\u8001\u7530\r\n[00:11.52]\u548C\u58F0\uFF1A\u8D6B\u62C9Hera\r\n[00:12.29]\u97F3\u9891\u7F16\u8F91\uFF1A\u738B\u6D69\u5B89\r\n[00:13.40]\u6DF7\u97F3\uFF1A\u5F20\u9E23\u5229\r\n[00:14.19]\u5236\u4F5C\u516C\u53F8&OP\uFF1A\u4E00\u5BF8\u5149\u5E74\r\n[00:15.57]\u3010\u672A\u7ECF\u8457\u4F5C\u6743\u4EBA\u8BB8\u53EF\u4E0D\u5F97\u7FFB\u5531\uFF0C\u7FFB\u5F55\u6216\u4F7F\u7528\u3011\r\n[00:19.94]\u6700\u8FD1\u603B\u68A6\u5230\u98D8\u6D6E\u5728\u591C\u534A\u7A7A\r\n[00:22.90]\u6211\u8BDD\u97F3\u521A\u843D\u4F60\u6709\u4E9B\u8BCD\u7A77\r\n[00:27.63]\u7EA6\u597D\u4ECA\u665A\u6BEB\u65E0\u4FDD\u7559\u7684\u6C9F\u901A\r\n[00:30.87]\u5374\u9694\u7740\u96BE\u903E\u8D8A\u7684\u88C2\u7F1D\r\n[00:35.68]\u8BA4\u771F\u4EB2\u543B\u4E86\u4F60\u51B0\u51B7\u7684\u8138\u5B54\r\n[00:38.81]\u4F46\u4F60\u77B3\u5B54\u91CC\u4F9D\u65E7\u662F\u7A7A\u6D1E\r\n[00:44.12]\u6211\u5DF2\u7ECF\u5C3D\u529B\u7F16\u9020\u51FA\u4E00\u4E1D\u7B11\u5BB9\r\n[00:46.84]\u6CEA\u5374\u6233\u7A7F\u7684\u90A3\u4E48\u8F7B\u677E\r\n[00:50.27]\u90FD\u602A\u6211 \u4E0E\u4F60\u6709\u8FC7\u7480\u74A8\u7684\u68A6\r\n[00:53.96]\u624D\u4E0D\u613F\u8F6C\u8EAB\u76EE\u9001\r\n[00:55.36]\u7231\u5DF2\u8E29\u7A7A \u8DCC\u843D\u7684\u75DB\r\n[00:58.22]\u660E\u660E\u662F \u4F60\u6700\u521D\u5148\u64A9\u62E8\u5FC3\u52A8\r\n[01:01.84]\u7ED3\u5C40\u6211\u4E00\u4E2A\u4EBA\u75DB\r\n[01:03.43]\u6574\u9897\u5FC3\u5DF2 \u5343\u75AE\u767E\u5B54\r\n[01:06.51]\u90FD\u602A\u6211 \u65E0\u6570\u6B21\u5728\u591C\u91CC\u7FFB\u6D8C\r\n[01:09.69]\u4F60\u6577\u884D\u4E00\u53E5\u62B1\u6B49\r\n[01:11.59]\u6211\u5C31\u539F\u8C05 \u8F7B\u6613\u611F\u52A8\r\n[01:14.30]\u660E\u660E\u662F \u4E3A\u4F60\u624D\u5C06\u81EA\u6211\u638F\u7A7A\r\n[01:17.82]\u6700\u540E\u4F60\u9003\u4E4B\u592D\u592D\r\n[01:19.37]\u9762\u5BF9\u6B8B\u5C40 \u65E0\u52A8\u4E8E\u8877\r\n[01:39.97]\u65F6\u95F4\u662F\u57CB\u4F0F\u5728\u5FC3\u91CC\u7684\u771F\u51F6\r\n[01:43.14]\u4F60\u7ED9\u7684\u504F\u7231\u88AB\u6D17\u52AB\u4E00\u7A7A\r\n[01:48.08]\u8BB0\u5FC6\u8FD8\u5728\u64AD\u6620\u8FC7\u5F80\u7684\u79CD\u79CD\r\n[01:51.01]\u53EA\u662F\u6211\u4EEC\u90FD\u505A\u56DE\u89C2\u4F17\r\n[01:56.05]\u6CA1\u80FD\u4FA5\u5E78\u5F97\u5230\u547D\u8FD0\u7684\u901A\u878D\r\n[01:59.00]\u518D\u7528\u529B\u7684\u7231\u4E5F\u65E0\u6CD5\u5584\u7EC8\r\n[02:03.89]\u7EC8\u4E8E\u6211\u8BD5\u7740\u5C06\u4F60\u653E\u751F\u4EBA\u6D77\u4E2D\r\n[02:07.22]\u4E0D\u540C\u7684\u4F59\u751F \u5404\u81EA\u5306\u5306\r\n[02:10.62]\u90FD\u602A\u6211 \u4E0E\u4F60\u6709\u8FC7\u7480\u74A8\u7684\u68A6\r\n[02:13.94]\u624D\u4E0D\u613F\u8F6C\u8EAB\u76EE\u9001\r\n[02:15.35]\u7231\u5DF2\u8E29\u7A7A \u8DCC\u843D\u7684\u75DB\r\n[02:18.28]\u660E\u660E\u662F \u4F60\u6700\u521D\u5148\u64A9\u62E8\u5FC3\u52A8\r\n[02:21.89]\u7ED3\u5C40\u6211\u4E00\u4E2A\u4EBA\u75DB\r\n[02:23.72]\u6574\u9897\u5FC3\u5DF2 \u5343\u75AE\u767E\u5B54\r\n[02:26.52]\u90FD\u602A\u6211 \u65E0\u6570\u6B21\u5728\u591C\u91CC\u7FFB\u6D8C\r\n[02:29.88]\u4F60\u6577\u884D\u4E00\u53E5\u62B1\u6B49\r\n[02:31.53]\u6211\u5C31\u539F\u8C05 \u8F7B\u6613\u611F\u52A8\r\n[02:34.47]\u660E\u660E\u662F \u4E3A\u4F60\u624D\u5C06\u81EA\u6211\u638F\u7A7A\r\n[02:37.82]\u6700\u540E\u4F60\u9003\u4E4B\u592D\u592D\r\n[02:39.80]\u9762\u5BF9\u6B8B\u5C40 \u65E0\u52A8\u4E8E\u8877\r\n[02:42.15]\u90FD\u602A\u6211 \u4E0E\u4F60\u6709\u8FC7\u7480\u74A8\u7684\u68A6\r\n[02:45.62]\u624D\u4E0D\u613F\u8F6C\u8EAB\u76EE\u9001\r\n[02:47.25]\u7231\u5DF2\u8E29\u7A7A \u8DCC\u843D\u7684\u75DB\r\n[02:50.49]\u660E\u660E\u662F \u4F60\u6700\u521D\u5148\u64A9\u62E8\u5FC3\u52A8\r\n[02:53.86]\u7ED3\u5C40\u6211\u4E00\u4E2A\u4EBA\u75DB\r\n[02:55.29]\u6574\u9897\u5FC3\u5DF2 \u5343\u75AE\u767E\u5B54\r\n[02:58.29]\u90FD\u602A\u6211 \u65E0\u6570\u6B21\u5728\u591C\u91CC\u7FFB\u6D8C\r\n[03:01.88]\u4F60\u6577\u884D\u4E00\u53E5\u62B1\u6B49\r\n[03:03.43]\u6211\u5C31\u539F\u8C05 \u8F7B\u6613\u611F\u52A8\r\n[03:06.36]\u660E\u660E\u662F \u4E3A\u4F60\u624D\u5C06\u81EA\u6211\u638F\u7A7A\r\n[03:09.81]\u6700\u540E\u4F60\u9003\u4E4B\u592D\u592D\r\n[03:11.44]\u9762\u5BF9\u6B8B\u5C40 \u65E0\u52A8\u4E8E\u8877\r\n",
  "author_id": "988083",
  "privilege": 8,
  "privilege2": "1000",
  "play_url": "https:\/\/webfs.yun.kugou.com\/202106182115\/eeddc41e13848c3c9e57352e924a5171\/KGTX\/CLTX001\/fad5d2bece63b606c4c83dcdf9fe90d4.mp3",
  "authors": [{
    "author_id": "988083",
    "author_name": "\u9648\u4E4B",
    "is_publish": "1",
    "sizable_avatar": "http:\/\/singerimg.kugou.com\/uploadpic\/softhead\/{size}\/20210521\/20210521121230651514.jpg",
    "avatar": "http:\/\/singerimg.kugou.com\/uploadpic\/softhead\/400\/20210521\/20210521121230651514.jpg"
  }],
  "is_free_part": 0,
  "bitrate": 128,
  "recommend_album_id": "45508217",
  "audio_id": "110723595",
  "has_privilege": true,
  "play_backup_url": "https:\/\/webfs.cloud.kugou.com\/202106182115\/20a5d11b41be4e96e3287a6dad84d7f9\/KGTX\/CLTX001\/fad5d2bece63b606c4c83dcdf9fe90d4.mp3"
}];
module.exports = {
  PlayerList: PlayerList
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54921" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/player-list.js"], null)
//# sourceMappingURL=/player-list.ff90a595.js.map