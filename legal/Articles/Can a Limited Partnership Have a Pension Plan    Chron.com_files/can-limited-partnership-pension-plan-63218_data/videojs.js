!function e(t,n,a){function d(i,s){if(!n[i]){if(!t[i]){var r="function"==typeof require&&require;if(!s&&r)return r(i,!0);if(o)return o(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var n=t[i][1][e];return d(n||e)},l,l.exports,e,t,n,a)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<a.length;i++)d(a[i]);return d}({1:[function(e,t,n){(function(t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function d(e){if(!e.ads.cancelPlayTimeout){if(l["default"].browser.IS_IOS&&l["default"].browser.IS_IPHONE&&!e.el_.hasAttribute("playsinline")){var t=e.currentWidth?e.currentWidth():e.width(),n=e.currentHeight?e.currentHeight():e.height(),a=i["default"].getComputedStyle(e.el_).position,d=i["default"].getComputedStyle(e.el_).top,o=r["default"].createElement("div");o.style.width=t+"px",o.style.height=n+"px",o.style.background="black",o.style.position=a,o.style.top=d,e.el_.parentNode.insertBefore(o,e.el_),e.el_.style.display="none",e.one(["adstart","adtimeout","adserror","adscanceled","adskip","playing"],function(){e.el_.style.display="block",o.remove()}),e.on("fullscreenchange",function(){o&&!e.isFullscreen()&&(e.el_.style.display="block",o.remove())})}e.ads.cancelPlayTimeout=i["default"].setTimeout(function(){e.ads.cancelPlayTimeout=null,e.paused()||e.pause(),e.ads._cancelledPlay=!0},1)}}n.__esModule=!0,n["default"]=d;var o=e(9),i=a(o),s=e(8),r=a(s),u="undefined"!=typeof window?window.videojs:void 0!==t?t.videojs:null,l=a(u)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";function a(e){e.ads.contentSrc=e.currentSrc();var t=function(){if("ad-playback"!==e.ads.state){var t=e.currentSrc();t!==e.ads.contentSrc&&(e.trigger({type:"contentupdate",oldValue:e.ads.contentSrc,newValue:t}),e.ads.contentSrc=t)}};e.on("loadstart",t),o["default"].setTimeout(t,1)}n.__esModule=!0,n["default"]=a;var d=e(9),o=function(e){return e&&e.__esModule?e:{"default":e}}(d)},{}],3:[function(e,t,n){(function(e){"use strict";function t(e,t){var n=e.textTracks(),a=function(n){"metadata"===n.kind&&(e.ads.cueTextTracks.setMetadataTrackMode(n),t(e,n))};if(n.length>0)for(var d=0;d<n.length;d++){var o=n[d];a(o)}else n.addEventListener("addtrack",function(e){var t=e.track;a(t)})}function a(e){}function d(e,t){return t}function o(e,t){return t.id}function i(e,t,n,a){e.ads.includedCues={};for(var d=0;d<t.length;d++){var o=t[d],i=this.getSupportedAdCue(e,o);if(-1===i)return void r["default"].log.warn("Skipping as this is not a supported ad cue.",o);var s=this.getCueId(e,o),c=o.startTime;if(u(e,s))return void r["default"].log("Skipping ad already seen with ID "+s);n(e,i,s,c),l(e,s),a!==undefined&&a(e,i)}}n.__esModule=!0,n.processMetadataTracks=t,n.setMetadataTrackMode=a,n.getSupportedAdCue=d,n.getCueId=o,n.processAdTrack=i;var s="undefined"!=typeof window?window.videojs:void 0!==e?e.videojs:null,r=function(e){return e&&e.__esModule?e:{"default":e}}(s),u=function(e,t){return t!==undefined&&e.ads.includedCues[t]},l=function(e,t){t!==undefined&&""!==t&&(e.ads.includedCues[t]=!0)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){(function(t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function d(e,t,n){t===undefined&&(t=!1);var a={};n!==undefined&&(a=n),a["{player.id}"]=this.options_["data-player"],a["{mediainfo.id}"]=this.mediainfo?this.mediainfo.id:"",a["{mediainfo.name}"]=this.mediainfo?this.mediainfo.name:"",a["{mediainfo.description}"]=this.mediainfo?this.mediainfo.description:"",a["{mediainfo.tags}"]=this.mediainfo?this.mediainfo.tags:"",a["{mediainfo.reference_id}"]=this.mediainfo?this.mediainfo.reference_id:"",a["{mediainfo.duration}"]=this.mediainfo?this.mediainfo.duration:"",a["{mediainfo.ad_keys}"]=this.mediainfo?this.mediainfo.ad_keys:"",a["{player.duration}"]=this.duration(),a["{timestamp}"]=(new Date).getTime(),a["{document.referrer}"]=u["default"].referrer,a["{window.location.href}"]=s["default"].location.href,a["{random}"]=Math.floor(1e12*Math.random()),p(this.mediainfo,a,"custom_fields"),p(this.mediainfo,a,"customFields");for(var d in a)e=e.split(d).join(f(a[d],t));return e=e.replace(/{pageVariable\.([^}]+)}/g,function(e,n){for(var a=void 0,d=s["default"],i=n.split("."),r=0;r<i.length;r++)r===i.length-1?a=d[i[r]]:d=d[i[r]];var u=void 0===a?"undefined":o(a);return null===a?"null":a===undefined?(c["default"].log.warn('Page variable "'+n+'" not found'),""):"string"!==u&&"number"!==u&&"boolean"!==u?(c["default"].log.warn('Page variable "'+n+'" is not a supported type'),""):f(String(a),t)})}n.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n["default"]=d;var i=e(9),s=a(i),r=e(8),u=a(r),l="undefined"!=typeof window?window.videojs:void 0!==t?t.videojs:null,c=a(l),f=function(e,t){return t?encodeURIComponent(e):e},p=function(e,t,n){if(e&&e[n])for(var a=e[n],d=Object.keys(a),o=0;o<d.length;o++){var i="{mediainfo."+n+"."+d[o]+"}";t[i]=a[d[o]]}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],5:[function(e,t,n){"use strict";function a(e){"playing"===e.type?i(this,e):"ended"===e.type?s(this,e):"loadstart"===e.type?r(this,e):"play"===e.type?u(this,e):this.ads.isInAdMode()&&(this.ads.isContentResuming()?o(this,"content",e):o(this,"ad",e))}n.__esModule=!0,n["default"]=a;var d=function(e,t){t.isImmediatePropagationStopped=function(){return!0},t.cancelBubble=!0,t.isPropagationStopped=function(){return!0}},o=function(e,t,n){d(0,n),e.trigger({type:t+n.type,state:e.ads.state,originalEvent:n})},i=function(e,t){e.ads.isInAdMode()&&(e.ads.isContentResuming()?e.ads._contentEnding&&o(e,"content",t):e.ads._cancelledPlay?d(0,t):o(e,"ad",t))},s=function(e,t){if(e.ads.isInAdMode()){if(e.ads.isContentResuming())return;o(e,"ad",t)}else o(e,"content",t)},r=function(e,t){if(e.ads._hasThereEverBeenALoadStart)if(e.ads.isAdPlaying())o(e,"ad",t);else{if(e.currentSrc()!==e.ads.contentSrc)return;o(e,"content",t)}},u=function(e,t){var n=e.ads._cancelledPlay&&!e.ads.isInAdMode();e.ads.isAdPlaying()?o(e,"ad",t):(e.ads.isContentResuming()||n)&&o(e,"content",t)}},{}],6:[function(e,t,n){(function(t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function d(e){var t=void 0;t=u["default"].browser.IS_IOS&&e.ads.isLive(e)&&e.seekable().length>0?e.currentTime()-e.seekable().end(0):e.currentTime();var n=e.$(".vjs-tech"),a=e.remoteTextTracks?e.remoteTextTracks():[],d=e.textTracks?e.textTracks():[],o=[],i=[],s={ended:e.ended(),currentSrc:e.currentSrc(),src:e.tech_.src(),currentTime:t,type:e.currentType()};n&&(s.nativePoster=n.poster,s.style=n.getAttribute("style"));for(var r=0;r<a.length;r++){var l=a[r];o.push({track:l,mode:l.mode}),l.mode="disabled"}s.suppressedRemoteTracks=o;for(var c=0;c<d.length;c++){var f=d[c];i.push({track:f,mode:f.mode}),f.mode="disabled"}return s.suppressedTracks=i,s}function o(e,t){if(!0===e.ads.disableNextSnapshotRestore)return void(e.ads.disableNextSnapshotRestore=!1);var n=e.$(".vjs-tech"),a=20,d=t.suppressedRemoteTracks,o=t.suppressedTracks,i=void 0,r=function(){for(var e=0;e<d.length;e++)i=d[e],i.track.mode=i.mode;for(var t=0;t<o.length;t++)i=o[t],i.track.mode=i.mode},l=function(){var n=void 0;u["default"].browser.IS_IOS&&e.ads.isLive(e)?t.currentTime<0&&(n=e.seekable().length>0?e.seekable().end(0)+t.currentTime:e.currentTime(),e.currentTime(n)):t.ended?e.currentTime(e.duration()):e.currentTime(t.currentTime),t.ended||e.play()},c=function f(){if(e.off("contentcanplay",f),e.ads.tryToResumeTimeout_&&(e.clearTimeout(e.ads.tryToResumeTimeout_),e.ads.tryToResumeTimeout_=null),n=e.el().querySelector(".vjs-tech"),n.readyState>1)return l();if(n.seekable===undefined)return l();if(n.seekable.length>0)return l();if(a--)s["default"].setTimeout(f,50);else try{l()}catch(t){u["default"].log.warn("Failed to resume the content after an advertisement",t)}};t.nativePoster&&(n.poster=t.nativePoster),"style"in t&&n.setAttribute("style",t.style||""),e.ads.videoElementRecycled()?(e.one("contentloadedmetadata",r),e.src({src:t.currentSrc,type:t.type}),e.load(),e.one("contentcanplay",c),e.ads.tryToResumeTimeout_=e.setTimeout(c,2e3)):e.ended()&&t.ended||(r(),e.play())}n.__esModule=!0,n.getPlayerSnapshot=d,n.restorePlayerSnapshot=o;var i=e(9),s=a(i),r="undefined"!=typeof window?window.videojs:void 0!==t?t.videojs:null,u=a(r)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){},{}],8:[function(e,t,n){(function(n){var a,d=void 0!==n?n:"undefined"!=typeof window?window:{},o=e(7);"undefined"!=typeof document?a=document:(a=d["__GLOBAL_DOCUMENT_CACHE@4"])||(a=d["__GLOBAL_DOCUMENT_CACHE@4"]=o),t.exports=a}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){(function(e){var n;n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){(function(t){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}var d=e(9),o=a(d),i="undefined"!=typeof window?window.videojs:void 0!==t?t.videojs:null,s=a(i),r=e(5),u=a(r),l=e(6),c=n(l),f=e(2),p=a(f),y=e(1),m=a(y),h=e(4),g=a(h),v=e(3),T=n(v),_=s["default"].getTech("Html5").Events,b=function(e){var t=e.$(".vjs-tech");t&&t.removeAttribute("poster")},w={timeout:5e3,prerollTimeout:100,postrollTimeout:100,debug:!1,stitchedAds:!1},k=function(e){var t=this,n=s["default"].mergeOptions(w,e),a=_.concat(["firstplay","loadedalldata","playing"]);t.on(a,u["default"]),t.on("ended",function(){t.hasClass("vjs-has-started")||t.addClass("vjs-has-started")}),t.on(["addurationchange","adcanplay"],function(){t.ads.snapshot&&t.currentSrc()===t.ads.snapshot.currentSrc||t.ads.isAdPlaying()&&t.play()}),t.on("nopreroll",function(){t.ads.nopreroll_=!0}),t.on("nopostroll",function(){t.ads.nopostroll_=!0}),t.on(["ads-ad-started","playing"],function(){t.removeClass("vjs-ad-loading")}),t.on("playing",function(){t.ads._cancelledPlay=!1}),t.one("loadstart",function(){t.ads._hasThereEverBeenALoadStart=!0}),t.ads={state:"content-set",disableNextSnapshotRestore:!1,_contentEnding:!1,_contentHasEnded:!1,_hasThereEverBeenALoadStart:!1,_inLinearAdMode:!1,adType:null,VERSION:"5.0.0",reset:function(){t.ads.disableNextSnapshotRestore=!1,t.ads._contentEnding=!1,t.ads._contentHasEnded=!1,t.ads.snapshot=null,t.ads.adType=null},startLinearAdMode:function(){"preroll?"!==t.ads.state&&"content-playback"!==t.ads.state&&"postroll?"!==t.ads.state||(t.ads._inLinearAdMode=!0,t.trigger("adstart"))},endLinearAdMode:function(){"ad-playback"===t.ads.state&&(t.ads._inLinearAdMode=!1,t.trigger("adend"),t.removeClass("vjs-ad-loading"))},skipLinearAdMode:function(){"ad-playback"!==t.ads.state&&t.trigger("adskip")},stitchedAds:function(e){return e!==undefined&&(this._stitchedAds=!!e),this._stitchedAds},videoElementRecycled:function(){if(t.ads.shouldPlayContentBehindAd(t))return!1;if(!this.snapshot)throw new Error("You cannot use videoElementRecycled while there is no snapshot.");var e=t.tech_.src()!==this.snapshot.src,n=t.currentSrc()!==this.snapshot.currentSrc;return e||n},isLive:function(e){return e.duration()===Infinity||"8"===s["default"].browser.IOS_VERSION&&0===e.duration()},shouldPlayContentBehindAd:function(e){return!s["default"].browser.IS_IOS&&!s["default"].browser.IS_ANDROID&&e.duration()===Infinity},isInAdMode:function(){return"ads-ready?"===t.ads.state||"preroll?"===t.ads.state||"ad-playback"===t.ads.state||"content-resuming"===t.ads.state},isContentResuming:function(){return"content-resuming"===t.ads.state},isAdPlaying:function(){return this._inLinearAdMode}},t.ads.stitchedAds(n.stitchedAds),t.ads.cueTextTracks=T,t.ads.adMacroReplacement=g["default"].bind(t),(0,p["default"])(t),t.on("contentupdate",t.ads.reset);var d={"content-set":{events:{adscanceled:function(){this.state="content-playback"},adsready:function(){this.state="ads-ready"},play:function(){this.state="ads-ready?",(0,m["default"])(t),b(t)},adserror:function(){this.state="content-playback"},adskip:function(){this.state="content-playback"}}},"ads-ready":{events:{play:function(){this.state="preroll?",(0,m["default"])(t)},adskip:function(){this.state="content-playback"},adserror:function(){this.state="content-playback"}}},"preroll?":{enter:function(){t.ads.nopreroll_?(t.trigger("readyforpreroll"),o["default"].setTimeout(function(){t.trigger("nopreroll")},1)):(t.addClass("vjs-ad-loading"),t.ads.adTimeoutTimeout=o["default"].setTimeout(function(){t.trigger("adtimeout")},n.prerollTimeout),t.ads._hasThereEverBeenALoadStart?t.trigger("readyforpreroll"):t.one("loadstart",function(){t.trigger("readyforpreroll")}))},leave:function(){o["default"].clearTimeout(t.ads.adTimeoutTimeout)},events:{play:function(){(0,m["default"])(t)},adstart:function(){this.state="ad-playback",t.ads.adType="preroll"},adskip:function(){this.state="content-playback"},adtimeout:function(){this.state="content-playback"},adserror:function(){this.state="content-playback"},nopreroll:function(){this.state="content-playback"}}},"ads-ready?":{enter:function(){t.addClass("vjs-ad-loading"),t.ads.adTimeoutTimeout=o["default"].setTimeout(function(){t.trigger("adtimeout")},n.timeout)},leave:function(){o["default"].clearTimeout(t.ads.adTimeoutTimeout),t.removeClass("vjs-ad-loading")},events:{play:function(){(0,m["default"])(t)},adscanceled:function(){this.state="content-playback"},adsready:function(){this.state="preroll?"},adskip:function(){this.state="content-playback"},adtimeout:function(){this.state="content-playback"},adserror:function(){this.state="content-playback"}}},"ad-playback":{enter:function(){t.ads.shouldPlayContentBehindAd(t)||(this.snapshot=c.getPlayerSnapshot(t)),t.ads.shouldPlayContentBehindAd(t)&&(this.preAdVolume_=t.volume(),t.volume(0)),t.addClass("vjs-ad-playing"),t.hasClass("vjs-live")&&t.removeClass("vjs-live"),b(t),t.ads.cancelPlayTimeout&&o["default"].setTimeout(function(){o["default"].clearTimeout(t.ads.cancelPlayTimeout),t.ads.cancelPlayTimeout=null},1)},leave:function(){t.removeClass("vjs-ad-playing"),t.ads.isLive(t)&&t.addClass("vjs-live"),t.ads.shouldPlayContentBehindAd(t)||c.restorePlayerSnapshot(t,this.snapshot),t.ads.shouldPlayContentBehindAd(t)&&t.volume(this.preAdVolume_)},events:{adend:function(){this.state="content-resuming",t.ads.adType=null},adserror:function(){this.state="content-resuming",t.trigger("adend")}}},"content-resuming":{enter:function(){this._contentHasEnded&&(o["default"].clearTimeout(t.ads._fireEndedTimeout),t.ads._fireEndedTimeout=o["default"].setTimeout(function(){t.trigger("ended")},1e3))},leave:function(){o["default"].clearTimeout(t.ads._fireEndedTimeout)},events:{contentupdate:function(){this.state="content-set"},contentresumed:function(){this.state="content-playback"},playing:function(){this.state="content-playback"},ended:function(){this.state="content-playback"}}},"postroll?":{enter:function(){t.ads._contentEnding=!0,this.snapshot=c.getPlayerSnapshot(t),t.ads.nopostroll_?o["default"].setTimeout(function(){t.ads.state="content-resuming",t.trigger("ended")},1):(t.addClass("vjs-ad-loading"),t.ads.adTimeoutTimeout=o["default"].setTimeout(function(){t.trigger("adtimeout")},n.postrollTimeout))},leave:function(){o["default"].clearTimeout(t.ads.adTimeoutTimeout),t.removeClass("vjs-ad-loading")},events:{adstart:function(){this.state="ad-playback",t.ads.adType="postroll"},adskip:function(){this.state="content-resuming",o["default"].setTimeout(function(){t.trigger("ended")},1)},adtimeout:function(){this.state="content-resuming",o["default"].setTimeout(function(){t.trigger("ended")},1)},adserror:function(){this.state="content-resuming",o["default"].setTimeout(function(){t.trigger("ended")},1)},contentupdate:function(){this.state="ads-ready?"}}},"content-playback":{enter:function(){t.ads.cancelPlayTimeout&&(o["default"].clearTimeout(t.ads.cancelPlayTimeout),t.ads.cancelPlayTimeout=null),t.trigger({type:"contentplayback",triggerevent:t.ads.triggerevent}),t.ads._cancelledPlay&&t.paused()&&t.play()},events:{adsready:function(){t.trigger("readyforpreroll")},adstart:function(){this.state="ad-playback","preroll"!==t.ads.adType&&(t.ads.adType="midroll")},contentupdate:function(){t.ads.shouldPlayContentBehindAd(t)||(0,m["default"])(t),t.paused()?this.state="content-set":this.state="ads-ready?"},contentended:function(){if(this._contentHasEnded)return void(this.state="content-resuming");this._contentEnding=!1,this._contentHasEnded=!0,this.state="postroll?"}}}},i=function(e){var a=t.ads.state,o=d[a].events;if(o){var i=o[e.type];i&&i.apply(t.ads)}if(a!==t.ads.state){var r=a,u=t.ads.state;t.ads.triggerevent=e.type,d[r].leave&&d[r].leave.apply(t.ads),d[u].enter&&d[u].enter.apply(t.ads),n.debug&&s["default"].log("ads",t.ads.triggerevent+" triggered: "+r+" -> "+u)}};t.on(_.concat(["adtimeout","contentupdate","contentplaying","contentended","contentresumed","adstart","adend","adskip","adsready","adserror","adscanceled","nopreroll"]),i),t.on("dispose",function(){t.ads.adTimeoutTimeout&&o["default"].clearTimeout(t.ads.adTimeoutTimeout),t.ads._fireEndedTimeout&&o["default"].clearTimeout(t.ads._fireEndedTimeout),t.ads.cancelPlayTimeout&&o["default"].clearTimeout(t.ads.cancelPlayTimeout),t.ads.tryToResumeTimeout_&&t.clearTimeout(t.ads.tryToResumeTimeout_)}),t.paused()||i({type:"play"})};(s["default"].registerPlugin||s["default"].plugin)("ads",k)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10]);