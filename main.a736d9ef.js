parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PJFw":[function(require,module,exports) {
var n=[{hash:"8370245A30FDAE87D081119D69E38F71",timelength:234e3,filesize:3759736,audio_name:"故里逢春",have_album:1,album_name:"阿YueYue",album_id:"42111216",img:"http://imge.kugou.com/stdmusic/20210311/20210311150427748491.jpg",have_mv:1,video_id:"4532410",author_name:"阿YueYue",song_name:"故里逢春",lyrics:"[00:00.000] 作词 : 喔喔\n[00:01.000] 作曲 : 喔喔\n[00:02.09]本作品经过词曲著作权利方授权\n[00:02.59]编曲：田宸光\n[00:03.04]二胡：二胡妹\n[00:03.55]古筝：紫格\n[00:04.02]和声：王淑霖\n[00:04.37]混音：任天宇/王宇呈\n[00:04.85]制作人：苏晨/田宸光\n[00:05.55]监制：李永江/刘家泽\n[00:06.18]制作公司：匠心音乐\n[00:06.58]江南又梦烟雨 长河流入故里\n[00:11.97]炊烟漫漫渡过百川千万里​\n[00:17.59]我听着笙笛曲 人间清欢可期​\n[00:23.17]落落冰川流转着千年古忆\n[00:30.84]你低头 眉间落下场雪\n[00:35.97]我抚平情愫万千\n[00:41.54]帘外响起 霜将琴声冷却\n[00:47.19]刹那间 过往事皆湮灭​\n[00:51.59]江南又梦烟雨 长河流入故里\n[00:57.16]炊烟漫漫渡过百川千万里​\n[01:02.86]我听着笙笛曲 人间清欢可期​\n[01:08.40]落落冰川流转着千年古忆\n[01:15.52]\n[01:38.51]风吹过 带走岁月蹉跎\n[01:43.80]花败落却成过错\n[01:49.00]背影的轮廓无法许下承诺\n[01:54.98]千百年等你再看一遍​\n[01:59.36]江南又梦烟雨 长河流入故里\n[02:04.91]炊烟漫漫渡过百川千万里​\n[02:10.54]我听着笙笛曲 人间清欢可期​\n[02:16.20]落落冰川流转着千年古忆\n[02:21.98]江南又梦烟雨 长河流入故里\n[02:27.51]炊烟漫漫渡过百川千万里​\n[02:33.11]我听着笙笛曲 人间清欢可期​\n[02:38.63]落落冰川流转着千年古忆\n[02:44.49]江南又逢春雨 惊蛰终入故里\n[02:50.06]炊烟漫漫解冻冰河千万里​\n[02:55.66]我忆起笙笛曲 却终杳无音信\n[03:01.41]落落冰川流转着千年古忆\n[03:11.15]你执手画天下 忧愁入酒几许\n[03:16.64]几番念起是诗篇都空虚\n[03:22.48]你提一撇一捺 只管游走天涯\n[03:27.83]几番想起是深情话语\n",author_id:"1054058",privilege:8,privilege2:"1000",play_url:"media/2021/06/obj_wonDkMOGw6XDiTHCmMOi_3406609822_defb_9e18_d07d_d1c842849986e5c89dbc4a5cd0358ae6.m4a"}];module.exports={PlayerList:n};
},{}],"z74k":[function(require,module,exports) {
function i(i,t){var s=this;this._e=i,this._lrc=null,this.line=" ",this.lyrics=[],this.tim=[],this.container=t,this.cPLrc=null,this.currentLrc="sadas",this.index=0,this.loadLrc=function(i){this._lrc=i,this._parser()},this._parser=function(){for(var i=this._lrc.split(/\r\n|\n/),t=0;t<i.length;t++)i[t].search(/^(\[)(\d*)(:)(.*)(\])(.*)/i)>=0&&(this.line=i[t].match(/^(\[)(\d*)(:)(.*)(\])(.*)/i),this.tim[t]=60*parseInt(this.line[2])+parseInt(this.line[4]),this.lyrics[t]=this.line[6],console.log(this.line),this.container.innerHTML+="<p>".concat(this.lyrics[t],"</p>"));for(var s=[],r=0;r<this.tim.length;r++)null!=this.tim[r]&&s.push(this.tim[r]);this.tim=s,s=[];for(var h=0;h<this.lyrics.length;h++)null!=this.lyrics[h]&&s.push(this.lyrics[h]);this.lyrics=s,console.log(this.tim),console.log(this.lyrics)},this._player=function(i){for(var t=0;t<this.tim.length;t++)if(i>this.tim[t]&&(i<this.tim[t+1]||null==this.tim[t+1]))if(-1==this.currentLrc.indexOf(this.lyrics[t])){var s=this.container.querySelectorAll("p");this.cPLrc&&this.cPLrc.classList.remove("lrc-active"),s[t].classList.add("lrc-active"),document.title=this.lyrics[t],this.cPLrc=s[t],this.index=38*t,this.currentLrc=this.lyrics[t],window.scrollTo(0,this.index)}else console.log("休息中")},this._e.addEventListener("timeupdate",function(){s._player(s._e.currentTime)})}module.exports={LrcPlayer:i};
},{}],"d6sW":[function(require,module,exports) {
var e=require("./player-list").PlayerList,r=require("./lrc-player").LrcPlayer,c=document.querySelector("#hu-music-player"),u=document.querySelector("#audio_name"),l=document.querySelector("#lrc-container"),a=document.querySelector("img"),i=0,n=new r(c,l);n.loadLrc(e[i].lyrics),c.src=e[i].play_url,u.innerHTML=e[i].audio_name,a.src=e[i].img,document.title=e[i].audio_name+" - huang zhenjie";
},{"./player-list":"PJFw","./lrc-player":"z74k"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.a736d9ef.js.map