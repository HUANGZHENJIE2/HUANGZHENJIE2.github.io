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
  "hash": "8370245A30FDAE87D081119D69E38F71",
  "timelength": 234000,
  "filesize": 3759736,
  "audio_name": "相思岸 - 菲利丝PHY",
  "have_album": 1,
  "album_name": "相思岸",
  "album_id": "42111216",
  "img": "http://imge.kugou.com/stdmusic/20210311/20210311150427748491.jpg",
  "have_mv": 1,
  "video_id": "4532410",
  "author_name": "菲利丝PHY",
  "song_name": "相思岸",
  "lyrics": "[00:00.300]词：十满\n[00:00.300]曲：姜雨涵\n[00:00.300]出品：网易飓风工作室\n[00:00.300]\n[00:02.424]你在彼岸我在此岸\n[00:05.067]思念一盏煮一盏\n[00:07.573]你望天涯 我望青山\n[00:10.219] 壁上题诗念又念\n[00:12.301]\n[00:12.820]你在彼岸 我在此岸\n[00:15.381]飞花一瓣取一瓣\n[00:17.776]幽梦一帘又一帘\n[00:23.197]\n[00:23.479]孤村落日绕轻烟\n[00:25.841]一抹余霞点思念\n[00:28.152]望眼欲穿  往事已无回甘\n[00:33.845]\n[00:34.005]油灯燃烬昏昏然\n[00:36.170]岁月妒拜月花颜\n[00:38.407]情在笔墨两端  逞悲欢\n[00:43.719]\n[00:43.720]已然 花落枝闲  独自黯然 雪化入水面\n[00:49.561]梦疲倦 泪悄然 一声叹\n[00:54.263]甘愿 枕着孤单  合上双眼  已似水流年\n[01:00.116]等离船 多少时间\n[01:04.774]\n[01:05.036]你在彼岸我在此岸\n[01:07.637]思念一盏煮一盏\n[01:10.236]你望天涯 我望青山\n[01:12.846] 壁上题诗念又念\n[01:15.459]\n[01:15.537]你在彼岸 我在此岸\n[01:18.060]飞花一瓣取一瓣\n[01:21.334]幽梦一帘又一帘\n[01:28.673]\n[01:31.343]已然 花落枝闲  独自黯然 雪化入水面\n[01:35.952]梦疲倦 泪悄然 一声叹\n[01:41.069]甘愿 枕着孤单  合上双眼  已似水流年\n[01:46.197]等离船 多少时间\n[01:51.114]\n[01:51.920]你在彼岸我在此岸\n[01:54.506]思念一盏煮一盏\n[01:57.146]你望天涯 我望青山\n[01:59.485] 壁上题诗念又念\n[02:02.168]\n[02:02.320]你在彼岸 我在此岸\n[02:04.936]飞花一瓣取一瓣\n[02:07.405]幽梦一帘又一帘\n[02:11.169]\n[02:12.732]你在彼岸我在此岸\n[02:15.444]思念一盏煮一盏\n[02:17.982]你望天涯 我望青山\n[02:20.426] 壁上题诗念又念\n[02:22.937]\n[02:23.096]你在彼岸 我在此岸\n[02:25.885]飞花一瓣取一瓣\n[02:28.258]幽梦一帘又一帘\n[02:31.387]\n[02:31.782]编曲：季志豪\n[02:32.123]吉他：蔡秉汝\n[02:32.385]录音：黄钰龙\n[02:32.604]混音：季志豪\n[02:32.860]母带：季志豪\n[02:33.141]制作：Morerare录音棚\n[02:33.422]监制：王解\n[02:33.705]艺人商务：林苗苗/徐大亮\n[02:33.986]企划：黄紫嫣/陈亦心\n[02:34.252]统筹：黄紫嫣/陈亦心\n[02:34.467]推广：徐思灵/涂涵聃\n[02:34.723]出品人：谢奇笛\n[02:34.922]\n[02:35.071]本歌曲来自〖网易飓风计划〗\n[02:35.285]\n[02:35.397]10亿现金激励，千亿流量扶持\n[02:35.571]\n[02:35.920]业务联系：jf399@vip.163.com\n",
  "author_id": "1054058",
  "privilege": 8,
  "privilege2": "1000",
  "play_url": "media/2021/06/obj_wonDkMOGw6XDiTHCmMOi_3406609822_defb_9e18_d07d_d1c842849986e5c89dbc4a5cd0358ae6.m4a",
  "authors": [{
    "author_id": "1054058",
    "author_name": "王靖雯不胖",
    "is_publish": "1",
    "sizable_avatar": "http://singerimg.kugou.com/uploadpic/softhead/{size}/20200628/20200628000913668.jpg",
    "avatar": "http://singerimg.kugou.com/uploadpic/softhead/400/20200628/20200628000913668.jpg"
  }],
  "is_free_part": 0,
  "bitrate": 128,
  "recommend_album_id": "42111216",
  "audio_id": "96951378",
  "has_privilege": true,
  "play_backup_url": "https://webfs.cloud.kugou.com/202106200126/fed7046f2d229ef99b38f67a21f0d835/KGTX/CLTX001/8370245a30fdae87d081119d69e38f71.mp3"
}];
module.exports = {
  PlayerList: PlayerList
};
},{}],"js/lrc-player.js":[function(require,module,exports) {
function LrcPlayer(e, container) {
  var _this = this;

  this._e = e;
  this._lrc = null;
  this.line = " ";
  this.lyrics = [];
  this.tim = [];
  this.container = container;
  this.cPLrc = null;
  this.currentLrc = "sadas";
  this.index = 0;

  this.loadLrc = function (lrc) {
    this._lrc = lrc;

    this._parser();
  };

  this._parser = function () {
    var lrcLines = this._lrc.split(/\r\n|\n/);

    for (var i = 0; i < lrcLines.length; i++) {
      if (lrcLines[i].search(/^(\[)(\d*)(:)(.*)(\])(.*)/i) >= 0) {
        this.line = lrcLines[i].match(/^(\[)(\d*)(:)(.*)(\])(.*)/i);
        this.tim[i] = parseInt(this.line[2]) * 60 + parseInt(this.line[4]);
        this.lyrics[i] = this.line[6];
        console.log(this.line);
        this.container.innerHTML += "<p>".concat(this.lyrics[i], "</p>");
      }
    }

    var temp = [];

    for (var _i = 0; _i < this.tim.length; _i++) {
      if (null != this.tim[_i]) temp.push(this.tim[_i]);
    }

    this.tim = temp;
    temp = [];

    for (var _i2 = 0; _i2 < this.lyrics.length; _i2++) {
      if (null != this.lyrics[_i2]) temp.push(this.lyrics[_i2]);
    }

    this.lyrics = temp;
    console.log(this.tim);
    console.log(this.lyrics);
  };

  this._player = function (currentTime) {
    for (var i = 0; i < this.tim.length; i++) {
      if (currentTime > this.tim[i] && currentTime < this.tim[i + 1]) {
        if (this.currentLrc.indexOf(this.lyrics[i]) == -1) {
          var pLrsList = this.container.querySelectorAll("p");
          if (this.cPLrc) this.cPLrc.classList.remove("lrc-active");
          pLrsList[i].classList.add("lrc-active"); // this.container.innerHTML = `<p>${this.lyrics[i]}</p>`

          document.title = this.lyrics[i];
          this.cPLrc = pLrsList[i];
          this.index = 38 * i;
          this.currentLrc = this.lyrics[i];
          window.scrollTo(0, this.index);
        } else {
          console.log("休息中");
        }
      }
    }
  };

  this._e.addEventListener("timeupdate", function () {
    _this._player(_this._e.currentTime);
  });
}

module.exports = {
  LrcPlayer: LrcPlayer
};
},{}],"js/main.js":[function(require,module,exports) {
var PlayerList = require('./player-list').PlayerList;

var LrcPlayer = require('./lrc-player').LrcPlayer;

var huMusicPlayer = document.querySelector("#hu-music-player");
var audioName = document.querySelector("#audio_name");
var lrcContainer = document.querySelector("#lrc-container");
var a = document.querySelector("img");
var playlistIndex = 0;
var lrcPlayer = new LrcPlayer(huMusicPlayer, lrcContainer);
lrcPlayer.loadLrc(PlayerList[playlistIndex].lyrics);
huMusicPlayer.src = PlayerList[playlistIndex].play_url;
audioName.innerHTML = PlayerList[playlistIndex].audio_name;
a.src = PlayerList[playlistIndex].img;
document.title = PlayerList[playlistIndex].audio_name + " - huang zhenjie"; // const Router = require("./router").Router;
//
// let router = new Router();
//
// let routerList = [
//   {path: "/", render: ()=>{
//     return `<h1>您好世界</h1>`
//     }},
//   {path: "/huangzhenjie", render: ()=>{
//     return `<h1>您好黄振杰</h1>`
//   }}
// ]
//
// router.forRoot(routerList)
},{"./player-list":"js/player-list.js","./lrc-player":"js/lrc-player.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50333" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map