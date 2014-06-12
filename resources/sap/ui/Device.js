/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
if(window.jQuery&&window.jQuery.sap&&window.jQuery.sap.declare){window.jQuery.sap.declare("sap.ui.Device",false)}if(typeof window.sap!=="object"&&typeof window.sap!=="function"){window.sap={}}if(typeof window.sap.ui!=="object"){window.sap.ui={}}(function(){if(typeof window.sap.ui.Device==="object"||typeof window.sap.ui.Device==="function"){var c="1.20.6";window.sap.ui.Device._checkAPIVersion(c);return}var d={};function p(i,w){return("000"+String(i)).slice(-w)}var F=0,E=1,W=2,I=3,D=4,T=5;var g=function(){this.defaultComponent='DEVICE';this.sWindowName=(window.top==window)?"":"["+window.location.pathname.split('/').slice(-1)[0]+"] ";this.log=function(i,s,a){a=a||this.defaultComponent||'';var b=new Date(),e={time:p(b.getHours(),2)+":"+p(b.getMinutes(),2)+":"+p(b.getSeconds(),2),date:p(b.getFullYear(),4)+"-"+p(b.getMonth()+1,2)+"-"+p(b.getDate(),2),timestamp:b.getTime(),level:i,message:s||"",component:a||""};if(window.console){var f=e.date+" "+e.time+" "+this.sWindowName+e.message+" - "+e.component;switch(i){case F:case E:console.error(f);break;case W:console.warn(f);break;case I:console.info?console.info(f):console.log(f);break;case D:console.debug?console.debug(f):console.log(f);break;case T:console.trace?console.trace(f):console.log(f);break}}return e}};var l=new g();l.log(I,"Device API logging initialized");d._checkAPIVersion=function(s){var v="1.20.6";if(v!=s){l.log(W,"Device API version differs: "+v+" <-> "+s)}};var h={};function j(e,f,a){if(!h[e]){h[e]=[]}h[e].push({oListener:a,fFunction:f})};function k(e,f,a){var b=h[e];if(!b){return this}for(var i=0,q=b.length;i<q;i++){if(b[i].fFunction===f&&b[i].oListener===a){b.splice(i,1);break}}if(b.length==0){delete h[e]}};function n(e,a){var b=h[e],f;if(b){b=b.slice();for(var i=0,q=b.length;i<q;i++){f=b[i];f.fFunction.call(f.oListener||window,a)}}};var O={"WINDOWS":"win","MACINTOSH":"mac","LINUX":"linux","IOS":"iOS","ANDROID":"Android","BLACKBERRY":"bb","WINDOWS_PHONE":"winphone"};function o(a){function b(){var s=navigator.platform;if(s.indexOf("Win")!=-1){var t=/windows NT 6.(\d)/i;var f=a.match(t);var v="";if(f){if(f[1]==1){v="7"}else if(f[1]>1){v="8"}}return{"name":O.WINDOWS,"versionStr":v}}else if(s.indexOf("Mac")!=-1){return{"name":O.MACINTOSH,"versionStr":""}}else if(s.indexOf("Linux")!=-1){return{"name":O.LINUX,"versionStr":""}}l.log(I,"OS detection returned no result");return null}a=a||navigator.userAgent;var e=/\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;var f=a.match(e);if(f){var i=/iPhone|iPad|iPod/;var q=/PlayBook|BlackBerry/;if(f[0].match(i)){f[3]=f[3].replace(/_/g,".");return({"name":O.IOS,"versionStr":f[3]})}else if(f[2].match(/Android/)){f[2]=f[2].replace(/\s/g,"");return({"name":O.ANDROID,"versionStr":f[3]})}else if(f[0].match(q)){return({"name":O.BLACKBERRY,"versionStr":f[4]})}else{return b()}}else if(a.indexOf("(BB10;")>0){e=/\sVersion\/([\d.]+)\s/;f=a.match(e);if(f){return{"name":O.BLACKBERRY,"versionStr":f[1]}}else{return{"name":O.BLACKBERRY,"versionStr":'10'}}}else{e=/Windows Phone (?:OS )?([\d.]*)/;f=a.match(e);if(f){return({"name":O.WINDOWS_PHONE,"versionStr":f[1]})}else{return b()}}};function r(){d.os=o()||{};d.os.OS=O;d.os.version=d.os.versionStr?parseFloat(d.os.versionStr):-1;if(d.os.name){for(var b in O){if(O[b]===d.os.name){d.os[b.toLowerCase()]=true}}}}r();var B={"INTERNET_EXPLORER":"ie","FIREFOX":"ff","CHROME":"cr","SAFARI":"sf","ANDROID":"an"};var u=navigator.userAgent;
/*!
	 * Taken from jQuery JavaScript Library v1.7.1
	 * http://jquery.com/
	 *
	 * Copyright 2011, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 * Copyright 2011, The Dojo Foundation
	 * Released under the MIT, BSD, and GPL Licenses.
	 *
	 * Date: Mon Nov 21 21:11:03 2011 -0500
	 */
function y(a){var b=(a||u).toLowerCase();var e=/(webkit)[ \/]([\w.]+)/;var f=/(opera)(?:.*version)?[ \/]([\w.]+)/;var i=/(msie) ([\w.]+)/;var q=/(trident)\/[\w.]+;.*rv:([\w.]+)/;var s=/(mozilla)(?:.*? rv:([\w.]+))?/;var V=e.exec(b)||f.exec(b)||i.exec(b)||q.exec(b)||b.indexOf("compatible")<0&&s.exec(b)||[];var t={browser:V[1]||"",version:V[2]||"0"};t[t.browser]=true;return t};function z(a){var b=y(a);var e=a||u;if(b.mozilla){if(e.match(/Firefox\/(\d+\.\d+)/)){var v=parseFloat(RegExp.$1);return{name:B.FIREFOX,versionStr:""+v,version:v,mozilla:true,mobile:false}}else{return{mobile:i.test(e),mozilla:true}}}else if(b.webkit){var f=e.toLowerCase().match(/webkit[\/]([\d.]+)/);if(f){var w=f[1]}var i=/Mobile/;if(e.match(/Chrome\/(\d+\.\d+).\d+/)){var v=parseFloat(RegExp.$1);return{name:B.CHROME,versionStr:""+v,version:v,mobile:i.test(e),webkit:true,webkitVersion:w}}else if(e.match(/Android .+ Version\/(\d+\.\d+)/)){var v=parseFloat(RegExp.$1);return{name:B.ANDROID,versionStr:""+v,version:v,mobile:i.test(e),webkit:true,webkitVersion:w}}else{var q=/Version\/(\d+\.\d+).*Safari/;if(q.test(e)){var v=parseFloat(q.exec(e)[1]);return{name:B.SAFARI,versionStr:""+v,version:v,mobile:i.test(e),webkit:true}}else{return{mobile:i.test(e),webkit:true,webkitVersion:w}}}}else if(b.msie||b.trident){var v;if(document.documentMode&&!a){if(document.documentMode===7){v=8.0}else{v=parseFloat(document.documentMode)}}else{v=parseFloat(b.version)}return{name:B.INTERNET_EXPLORER,versionStr:""+v,version:v,msie:true,mobile:false}}return{name:"",versionStr:"",version:-1,mobile:false}};d._testUserAgent=z;function A(){d.browser=z();d.browser.BROWSER=B;if(d.browser.name){for(var b in B){if(B[b]===d.browser.name){d.browser[b.toLowerCase()]=true}}}}A();d.support={};d.support.touch=!!(('ontouchstart'in window)||window.DocumentTouch&&document instanceof window.DocumentTouch);d.support.matchmedia=!!window.matchMedia;var m=d.support.matchmedia?window.matchMedia("screen and (max-width:0px)"):null;d.support.matchmedialistener=!!(m&&m.addListener);if(d.browser.safari&&d.browser.version<6){d.support.matchmedialistener=false}d.support.orientation=!!("orientation"in window&&"onorientationchange"in window);d.support.retina=(window.retina||window.devicePixelRatio>=2);d.support.websocket=('WebSocket'in window);d.support.input={};d.support.input.placeholder=('placeholder'in document.createElement("input"));d.media={};var R={"SAP_3STEPS":"3Step","SAP_4STEPS":"4Step","SAP_6STEPS":"6Step","SAP_STANDARD":"Std"};d.media.RANGESETS=R;d.media._predefinedRangeSets={};d.media._predefinedRangeSets[R.SAP_3STEPS]={points:[520,960],unit:"px",name:R.SAP_3STEPS,names:["S","M","L"]};d.media._predefinedRangeSets[R.SAP_4STEPS]={points:[520,760,960],unit:"px",name:R.SAP_4STEPS,names:["S","M","L","XL"]};d.media._predefinedRangeSets[R.SAP_6STEPS]={points:[241,400,541,768,960],unit:"px",name:R.SAP_6STEPS,names:["XS","S","M","L","XL","XXL"]};d.media._predefinedRangeSets[R.SAP_STANDARD]={points:[600,1024],unit:"px",name:R.SAP_STANDARD,names:["Phone","Tablet","Desktop"]};var _=R.SAP_STANDARD;var C=d.support.matchmedialistener?0:100;var G={};var H=null;function J(f,t,a){a=a||"px";var q="screen";if(f>0){q=q+" and (min-width:"+f+a+")"}if(t>0){q=q+" and (max-width:"+t+a+")"}return q};function K(a){if(!d.support.matchmedialistener&&H==Q()[0]){return}if(G[a].timer){clearTimeout(G[a].timer);G[a].timer=null}G[a].timer=setTimeout(function(){var b=M(a,false);if(b){n("media_"+a,b)}},C)};function L(s,i){var q=G[s].queries[i];var a={from:q.from,unit:G[s].unit};if(q.to>=0){a.to=q.to}if(G[s].names){a.name=G[s].names[i]}return a};function M(a,b){if(G[a]){var e=G[a].queries;var f=null;for(var i=0,s=e.length;i<s;i++){var q=e[i];if((q!=G[a].currentquery||b)&&d.media.matches(q.from,q.to,G[a].unit)){if(!b){G[a].currentquery=q}if(!G[a].noClasses&&G[a].names&&!b){N(a,G[a].names[i])}f=L(a,i)}}return f}l.log(W,"No queryset with name "+a+" found",'DEVICE.MEDIA');return null};function N(s,a,b){var e="sapUiMedia-"+s+"-";P(e+a,b,e)};function P(s,b,a){var e=document.documentElement;if(e.className.length==0){if(!b){e.className=s}}else{var f=e.className.split(" ");var q="";for(var i=0;i<f.length;i++){if((a&&f[i].indexOf(a)!=0)||(!a&&f[i]!=s)){q=q+f[i]+" "}}if(!b){q=q+s}e.className=q}};function Q(){return[document.documentElement.clientWidth,document.documentElement.clientHeight]};function S(v,a){if(a==="em"||a==="rem"){var s=window.getComputedStyle||function(e){return e.currentStyle};var x=s(document.documentElement).fontSize;var f=(x&&x.indexOf("px")>=0)?parseFloat(x,10):16;return v*f}return v};function U(f,t,e){f=S(f,e);t=S(t,e);var w=Q()[0];var a=f<0||f<=w;var b=t<0||w<=t;return a&&b};function V(f,t,a){var q=J(f,t,a);var m=window.matchMedia(q);return m&&m.matches};d.media.matches=d.support.matchmedia?V:U;d.media.attachHandler=function(f,a,s){var b=s||_;j("media_"+b,f,a)};d.media.detachHandler=function(f,a,s){var b=s||_;k("media_"+b,f,a)};d.media.initRangeSet=function(s,a,b,e,f){var t;if(!s){t=d.media._predefinedRangeSets[_]}else if(s&&d.media._predefinedRangeSets[s]){t=d.media._predefinedRangeSets[s]}else{t={name:s,unit:(b||"px").toLowerCase(),points:a||[],names:e,noClasses:!!f}}if(d.media.hasRangeSet(t.name)){return;l.log(I,"Range set "+t.name+" hase already been initialized",'DEVICE.MEDIA')}s=t.name;t.queries=[];t.timer=null;t.currentquery=null;t.listener=function(){return K(s)};var v,w,x;var w1=t.points;for(var i=0,x1=w1.length;i<=x1;i++){v=(i==0)?0:w1[i-1];w=(i==w1.length)?-1:w1[i];x=J(v,w,t.unit);t.queries.push({query:x,from:v,to:w})};if(t.names&&t.names.length!=t.queries.length){t.names=null}G[t.name]=t;if(d.support.matchmedialistener){var y1=t.queries;for(var i=0;i<y1.length;i++){var q=y1[i];q.media=window.matchMedia(q.query);q.media.addListener(t.listener)}}else{if(window.addEventListener){window.addEventListener("resize",t.listener,false);window.addEventListener("orientationchange",t.listener,false)}else{window.attachEvent("onresize",t.listener)}}t.listener()};d.media.getCurrentRange=function(s){if(!d.media.hasRangeSet(s)){return null}return M(s,true)};d.media.hasRangeSet=function(s){return s&&!!G[s]};d.media.removeRangeSet=function(s){if(!d.media.hasRangeSet(s)){l.log(I,"RangeSet "+s+" not found, thus could not be removed.",'DEVICE.MEDIA');return}for(var x in R){if(s===R[x]){l.log(W,"Cannot remove default rangeset - no action taken.",'DEVICE.MEDIA');return}}var a=G[s];if(d.support.matchmedialistener){var q=a.queries;for(var i=0;i<q.length;i++){q[i].media.removeListener(a.listener)}}else{if(window.removeEventListener){window.removeEventListener("resize",a.listener,false);window.removeEventListener("orientationchange",a.listener,false)}else{window.detachEvent("onresize",a.listener)}}N(s,"",true);delete h["media_"+s];delete G[s]};var X={"TABLET":"tablet","PHONE":"phone","DESKTOP":"desktop","COMBI":"combi"};var Y=d.os.windows&&d.os.version===8;d.system={};function Z(a){var t=$();var s={};s.tablet=(d.support.touch||!!a)&&t;s.phone=(d.support.touch||!!a)&&!t;s.desktop=(!s.tablet&&!s.phone)||Y;s.combi=(s.desktop&&s.tablet);s.SYSTEMTYPE=X;for(var b in X){P("sap-"+X[b],!s[X[b]])}return s};function $(){var a=(/(?=android)(?=.*mobile)/i.test(navigator.userAgent));if(d.os.name===d.os.OS.IOS){return/ipad/i.test(navigator.userAgent)}else{if(d.support.touch){var b=window.devicePixelRatio?window.devicePixelRatio:1;if((d.os.name===d.os.OS.ANDROID)&&d.browser.webkit&&(d.browser.webkitVersion>537.10)){b=1}var t=(Math.min(window.screen.width/b,window.screen.height/b)>=600);if(s1()&&(window.screen.height===552||window.screen.height===553)&&(/Nexus 7/i.test(navigator.userAgent))){t=true}return t}else{var e=(d.os.name===d.os.OS.ANDROID)&&!a;return e}}};function a1(a){d.system=Z(a);if(d.system.tablet||d.system.phone){d.browser.mobile=true}}a1();d.orientation={};d.resize={};d.orientation.attachHandler=function(f,a){j("orientation",f,a)};d.resize.attachHandler=function(f,a){j("resize",f,a)};d.orientation.detachHandler=function(f,a){k("orientation",f,a)};d.resize.detachHandler=function(f,a){k("resize",f,a)};function b1(i){i.landscape=s1(true);i.portrait=!i.landscape};function c1(){b1(d.orientation);n("orientation",{landscape:d.orientation.landscape})};function d1(){e1(d.resize);n("resize",{height:d.resize.height,width:d.resize.width})};function e1(i){i.width=Q()[0];i.height=Q()[1]};function f1(){var w=d.orientation.landscape;var i=s1();if(w!=i){c1()}if(!k1){k1=window.setTimeout(g1,150)}};function g1(){d1();k1=null};var h1=false;var i1=false;var j1;var k1;var l1;var m1=Q()[1];var n1=Q()[0];var o1=false;var p1;var q1=/INPUT|TEXTAREA|SELECT/;var r1=d.os.ios&&d.browser.name==="sf"&&((d.system.phone&&d.os.version>=7&&d.os.version<7.1)||(d.system.tablet&&d.os.version>=7));function s1(f){if(d.support.touch&&d.support.orientation){if(o1&&f){return!d.orientation.landscape}if(o1){return d.orientation.landscape}}else{if(d.support.matchmedia&&d.support.orientation){return!!window.matchMedia("(orientation: landscape)").matches}}var s=Q();return s[0]>s[1]};function t1(e){if(e.type=="resize"){if(r1&&q1.test(document.activeElement.tagName)&&!h1){return}var w=Q()[1];var i=Q()[0];var t=new Date().getTime();if(w===m1&&i===n1){return}i1=true;if((m1!=w)&&(n1==i)){if(!p1||(t-p1>300)){o1=(w<m1)}d1()}else{n1=i}p1=t;m1=w;if(l1){window.clearTimeout(l1);l1=null}l1=window.setTimeout(v1,1200)}else if(e.type=="orientationchange"){h1=true}if(j1){clearTimeout(j1);j1=null}j1=window.setTimeout(u1,50)};function u1(){if(h1&&i1){c1();d1();h1=false;i1=false;if(l1){window.clearTimeout(l1);l1=null}}j1=null};function v1(){h1=false;i1=false;l1=null};d._update=function(a){u=navigator.userAgent;l.log(W,"Device API values manipulated: NOT PRODUCTIVE FEATURE!!! This should be only used for test purposes. Only use if you know what you are doing.");A();r();a1(a)};e1(d.resize);b1(d.orientation);window.sap.ui.Device=d;if(d.support.touch&&d.support.orientation){window.addEventListener("resize",t1,false);window.addEventListener("orientationchange",t1,false)}else{if(window.addEventListener){window.addEventListener("resize",f1,false)}else{window.attachEvent("onresize",f1)}}d.media.initRangeSet();if(sap.ui.define){sap.ui.define("sap/ui/Device",[],function(){return d})}}());
