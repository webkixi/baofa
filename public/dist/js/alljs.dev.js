/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.io=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){module.exports=_dereq_("./lib/")},{"./lib/":2}],2:[function(_dereq_,module,exports){var url=_dereq_("./url");var parser=_dereq_("socket.io-parser");var Manager=_dereq_("./manager");var debug=_dereq_("debug")("socket.io-client");module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri=="object"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var io;if(opts.forceNew||opts["force new connection"]||false===opts.multiplex){debug("ignoring socket cache for %s",source);io=Manager(source,opts)}else{if(!cache[id]){debug("new io instance for %s",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_("./manager");exports.Socket=_dereq_("./socket")},{"./manager":3,"./socket":5,"./url":6,debug:10,"socket.io-parser":46}],3:[function(_dereq_,module,exports){var url=_dereq_("./url");var eio=_dereq_("engine.io-client");var Socket=_dereq_("./socket");var Emitter=_dereq_("component-emitter");var parser=_dereq_("socket.io-parser");var on=_dereq_("./on");var bind=_dereq_("component-bind");var object=_dereq_("object-component");var debug=_dereq_("debug")("socket.io-client:manager");var indexOf=_dereq_("indexof");var Backoff=_dereq_("backo2");module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&"object"==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||"/socket.io";this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.randomizationFactor(opts.randomizationFactor||.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState="closed";this.uri=uri;this.connected=[];this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}};Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){this.nsps[nsp].id=this.engine.id}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug("readyState %s",this.readyState);if(~this.readyState.indexOf("open"))return this;debug("opening %s",this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState="opening";this.skipReconnect=false;var openSub=on(socket,"open",function(){self.onopen();fn&&fn()});var errorSub=on(socket,"error",function(data){debug("connect_error");self.cleanup();self.readyState="closed";self.emitAll("connect_error",data);if(fn){var err=new Error("Connection error");err.data=data;fn(err)}else{self.maybeReconnectOnOpen()}});if(false!==this._timeout){var timeout=this._timeout;debug("connect attempt will timeout after %d",timeout);var timer=setTimeout(function(){debug("connect attempt timed out after %d",timeout);openSub.destroy();socket.close();socket.emit("error","timeout");self.emitAll("connect_timeout",timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug("open");this.cleanup();this.readyState="open";this.emit("open");var socket=this.engine;this.subs.push(on(socket,"data",bind(this,"ondata")));this.subs.push(on(this.decoder,"decoded",bind(this,"ondecoded")));this.subs.push(on(socket,"error",bind(this,"onerror")));this.subs.push(on(socket,"close",bind(this,"onclose")))};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit("packet",packet)};Manager.prototype.onerror=function(err){debug("error",err);this.emitAll("error",err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on("connect",function(){socket.id=self.engine.id;if(!~indexOf(self.connected,socket)){self.connected.push(socket)}})}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connected,socket);if(~index)this.connected.splice(index,1);if(this.connected.length)return;this.close()};Manager.prototype.packet=function(packet){debug("writing packet %j",packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i])}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){this.skipReconnect=true;this.backoff.reset();this.readyState="closed";this.engine&&this.engine.close()};Manager.prototype.onclose=function(reason){debug("close");this.cleanup();this.backoff.reset();this.readyState="closed";this.emit("close",reason);if(this._reconnection&&!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug("reconnect failed");this.backoff.reset();this.emitAll("reconnect_failed");this.reconnecting=false}else{var delay=this.backoff.duration();debug("will wait %dms before reconnect attempt",delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug("attempting reconnect");self.emitAll("reconnect_attempt",self.backoff.attempts);self.emitAll("reconnecting",self.backoff.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug("reconnect attempt error");self.reconnecting=false;self.reconnect();self.emitAll("reconnect_error",err.data)}else{debug("reconnect success");self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll("reconnect",attempt)}},{"./on":4,"./socket":5,"./url":6,backo2:7,"component-bind":8,"component-emitter":9,debug:10,"engine.io-client":11,indexof:42,"object-component":43,"socket.io-parser":46}],4:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],5:[function(_dereq_,module,exports){var parser=_dereq_("socket.io-parser");var Emitter=_dereq_("component-emitter");var toArray=_dereq_("to-array");var on=_dereq_("./on");var bind=_dereq_("component-bind");var debug=_dereq_("debug")("socket.io-client:socket");var hasBin=_dereq_("has-binary");module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};if(this.io.autoConnect)this.open();this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,"open",bind(this,"onopen")),on(io,"packet",bind(this,"onpacket")),on(io,"close",bind(this,"onclose"))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if("open"==this.io.readyState)this.onopen();return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift("message");this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};if("function"==typeof args[args.length-1]){debug("emitting packet with ack id %d",this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug("transport is open - connecting");if("/"!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug("close (%s)",reason);this.connected=false;this.disconnected=true;delete this.id;this.emit("disconnect",reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit("error",packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug("emitting event %j",args);if(null!=packet.id){debug("attaching ack callback to event");args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug("sending ack %j",args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){debug("calling ack %s with %j",packet.id,packet.data);var fn=this.acks[packet.id];fn.apply(this,packet.data);delete this.acks[packet.id]};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit("connect");this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug("server disconnect (%s)",this.nsp);this.destroy();this.onclose("io server disconnect")};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug("performing disconnect (%s)",this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose("io client disconnect")}return this}},{"./on":4,"component-bind":8,"component-emitter":9,debug:10,"has-binary":38,"socket.io-parser":46,"to-array":50}],6:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_("parseuri");var debug=_dereq_("debug")("socket.io-client:url");module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+"//"+loc.host;if("string"==typeof uri){if("/"==uri.charAt(0)){if("/"==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.hostname+uri}}if(!/^(https?|wss?):\/\//.test(uri)){debug("protocol-less url %s",uri);if("undefined"!=typeof loc){uri=loc.protocol+"//"+uri}else{uri="https://"+uri}}debug("parse %s",uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port="80"}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port="443"}}obj.path=obj.path||"/";obj.id=obj.protocol+"://"+obj.host+":"+obj.port;obj.href=obj.protocol+"://"+obj.host+(loc&&loc.port==obj.port?"":":"+obj.port);return obj}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{debug:10,parseuri:44}],7:[function(_dereq_,module,exports){module.exports=Backoff;function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||1e4;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0}Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation}return Math.min(ms,this.max)|0};Backoff.prototype.reset=function(){this.attempts=0};Backoff.prototype.setMin=function(min){this.ms=min};Backoff.prototype.setMax=function(max){this.max=max};Backoff.prototype.setJitter=function(jitter){this.jitter=jitter}},{}],8:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if("string"==typeof fn)fn=obj[fn];if("function"!=typeof fn)throw new Error("bind() requires a function");var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],9:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],10:[function(_dereq_,module,exports){module.exports=debug;function debug(name){if(!debug.enabled(name))return function(){};return function(fmt){fmt=coerce(fmt);var curr=new Date;var ms=curr-(debug[name]||curr);debug[name]=curr;fmt=name+" "+fmt+" +"+debug.humanize(ms);window.console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}}debug.names=[];debug.skips=[];debug.enable=function(name){try{localStorage.debug=name}catch(e){}var split=(name||"").split(/[\s,]+/),len=split.length;for(var i=0;i<len;i++){name=split[i].replace("*",".*?");if(name[0]==="-"){debug.skips.push(new RegExp("^"+name.substr(1)+"$"))}else{debug.names.push(new RegExp("^"+name+"$"))}}};debug.disable=function(){debug.enable("")};debug.humanize=function(ms){var sec=1e3,min=60*1e3,hour=60*min;if(ms>=hour)return(ms/hour).toFixed(1)+"h";if(ms>=min)return(ms/min).toFixed(1)+"m";if(ms>=sec)return(ms/sec|0)+"s";return ms+"ms"};debug.enabled=function(name){for(var i=0,len=debug.skips.length;i<len;i++){if(debug.skips[i].test(name)){return false}}for(var i=0,len=debug.names.length;i<len;i++){if(debug.names[i].test(name)){return true}}return false};function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}try{if(window.localStorage)debug.enable(localStorage.debug)}catch(e){}},{}],11:[function(_dereq_,module,exports){module.exports=_dereq_("./lib/")},{"./lib/":12}],12:[function(_dereq_,module,exports){module.exports=_dereq_("./socket");module.exports.parser=_dereq_("engine.io-parser")},{"./socket":13,"engine.io-parser":25}],13:[function(_dereq_,module,exports){(function(global){var transports=_dereq_("./transports");var Emitter=_dereq_("component-emitter");var debug=_dereq_("debug")("engine.io-client:socket");var index=_dereq_("indexof");var parser=_dereq_("engine.io-parser");var parseuri=_dereq_("parseuri");var parsejson=_dereq_("parsejson");var parseqs=_dereq_("parseqs");module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&"object"==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.host=uri.host;opts.secure=uri.protocol=="https"||uri.protocol=="wss";opts.port=uri.port;if(uri.query)opts.query=uri.query}this.secure=null!=opts.secure?opts.secure:global.location&&"https:"==location.protocol;if(opts.host){var pieces=opts.host.split(":");opts.hostname=pieces.shift();if(pieces.length){opts.port=pieces.pop()}else if(!opts.port){opts.port=this.secure?"443":"80"}}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:"localhost");this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if("string"==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||"/engine.io").replace(/\/$/,"")+"/";this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||"t";this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||["polling","websocket"];this.readyState="";this.writeBuffer=[];this.callbackBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized||null;this.open()}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_("./transport");Socket.transports=_dereq_("./transports");Socket.parser=_dereq_("engine.io-parser");Socket.prototype.createTransport=function(name){debug('creating transport "%s"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf("websocket")!=-1){transport="websocket"}else if(0==this.transports.length){var self=this;setTimeout(function(){self.emit("error","No transports available")},0);return}else{transport=this.transports[0]}this.readyState="opening";var transport;try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug("setting transport %s",transport.name);var self=this;if(this.transport){debug("clearing existing transport %s",this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on("drain",function(){self.onDrain()}).on("packet",function(packet){self.onPacket(packet)}).on("error",function(e){self.onError(e)}).on("close",function(){self.onClose("transport close")})};Socket.prototype.probe=function(name){debug('probing transport "%s"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug('probe transport "%s" opened',name);transport.send([{type:"ping",data:"probe"}]);transport.once("packet",function(msg){if(failed)return;if("pong"==msg.type&&"probe"==msg.data){debug('probe transport "%s" pong',name);self.upgrading=true;self.emit("upgrading",transport);if(!transport)return;Socket.priorWebsocketSuccess="websocket"==transport.name;debug('pausing current transport "%s"',self.transport.name);self.transport.pause(function(){if(failed)return;if("closed"==self.readyState)return;debug("changing transport and sending upgrade packet");cleanup();self.setTransport(transport);transport.send([{type:"upgrade"}]);self.emit("upgrade",transport);transport=null;self.upgrading=false;self.flush()})}else{debug('probe transport "%s" failed',name);var err=new Error("probe error");err.transport=transport.name;self.emit("upgradeError",err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error("probe error: "+err);error.transport=transport.name;freezeTransport();debug('probe transport "%s" failed because of error: %s',name,err);self.emit("upgradeError",error)}function onTransportClose(){onerror("transport closed")}function onclose(){onerror("socket closed")}function onupgrade(to){if(transport&&to.name!=transport.name){debug('"%s" works - aborting "%s"',to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener("open",onTransportOpen);transport.removeListener("error",onerror);transport.removeListener("close",onTransportClose);self.removeListener("close",onclose);self.removeListener("upgrading",onupgrade)}transport.once("open",onTransportOpen);transport.once("error",onerror);transport.once("close",onTransportClose);this.once("close",onclose);this.once("upgrading",onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug("socket open");this.readyState="open";Socket.priorWebsocketSuccess="websocket"==this.transport.name;this.emit("open");this.flush();if("open"==this.readyState&&this.upgrade&&this.transport.pause){debug("starting upgrade probes");for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if("opening"==this.readyState||"open"==this.readyState){debug('socket receive: type "%s", data "%s"',packet.type,packet.data);this.emit("packet",packet);this.emit("heartbeat");switch(packet.type){case"open":this.onHandshake(parsejson(packet.data));break;case"pong":this.setPing();break;case"error":var err=new Error("server error");err.code=packet.data;this.emit("error",err);break;case"message":this.emit("data",packet.data);this.emit("message",packet.data);break}}else{debug('packet received with socket readyState "%s"',this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit("handshake",data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if("closed"==this.readyState)return;this.setPing();this.removeListener("heartbeat",this.onHeartbeat);this.on("heartbeat",this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if("closed"==self.readyState)return;self.onClose("ping timeout")},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug("writing ping packet - expecting pong within %sms",self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){this.sendPacket("ping")};Socket.prototype.onDrain=function(){for(var i=0;i<this.prevBufferLen;i++){if(this.callbackBuffer[i]){this.callbackBuffer[i]()}}this.writeBuffer.splice(0,this.prevBufferLen);this.callbackBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(this.writeBuffer.length==0){this.emit("drain")}else{this.flush()}};Socket.prototype.flush=function(){if("closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug("flushing %d packets in socket",this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit("flush")}};Socket.prototype.write=Socket.prototype.send=function(msg,fn){this.sendPacket("message",msg,fn);return this};Socket.prototype.sendPacket=function(type,data,fn){if("closing"==this.readyState||"closed"==this.readyState){return}var packet={type:type,data:data};this.emit("packetCreate",packet);this.writeBuffer.push(packet);this.callbackBuffer.push(fn);this.flush()};Socket.prototype.close=function(){if("opening"==this.readyState||"open"==this.readyState){this.readyState="closing";var self=this;function close(){self.onClose("forced close");debug("socket closing - telling transport to close");self.transport.close()}function cleanupAndClose(){self.removeListener("upgrade",cleanupAndClose);self.removeListener("upgradeError",cleanupAndClose);close()}function waitForUpgrade(){self.once("upgrade",cleanupAndClose);self.once("upgradeError",cleanupAndClose)}if(this.writeBuffer.length){this.once("drain",function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}return this};Socket.prototype.onError=function(err){debug("socket error %j",err);Socket.priorWebsocketSuccess=false;this.emit("error",err);this.onClose("transport error",err)};Socket.prototype.onClose=function(reason,desc){if("opening"==this.readyState||"open"==this.readyState||"closing"==this.readyState){debug('socket close with reason: "%s"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);setTimeout(function(){self.writeBuffer=[];self.callbackBuffer=[];self.prevBufferLen=0},0);this.transport.removeAllListeners("close");this.transport.close();this.transport.removeAllListeners();this.readyState="closed";this.id=null;this.emit("close",reason,desc)}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./transport":14,"./transports":15,"component-emitter":9,debug:22,"engine.io-parser":25,indexof:42,parsejson:34,parseqs:35,parseuri:36}],14:[function(_dereq_,module,exports){var parser=_dereq_("engine.io-parser");var Emitter=_dereq_("component-emitter");module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState="";this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized}Emitter(Transport.prototype);Transport.timestamps=0;Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type="TransportError";err.description=desc;this.emit("error",err);return this};Transport.prototype.open=function(){if("closed"==this.readyState||""==this.readyState){this.readyState="opening";this.doOpen()}return this};Transport.prototype.close=function(){if("opening"==this.readyState||"open"==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if("open"==this.readyState){this.write(packets)}else{throw new Error("Transport not open")}};Transport.prototype.onOpen=function(){this.readyState="open";this.writable=true;this.emit("open")};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit("packet",packet)};Transport.prototype.onClose=function(){this.readyState="closed";this.emit("close")}},{"component-emitter":9,"engine.io-parser":25}],15:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_("xmlhttprequest");var XHR=_dereq_("./polling-xhr");var JSONP=_dereq_("./polling-jsonp");var websocket=_dereq_("./websocket");exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL="https:"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if("open"in xhr&&!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error("JSONP disabled");return new JSONP(opts)}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling-jsonp":16,"./polling-xhr":17,"./websocket":19,xmlhttprequest:20}],16:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_("./polling");var inherit=_dereq_("component-inherit");module.exports=JSONPPolling;var rNewline=/\n/g;var rEscapedNewline=/\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);
this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener("beforeunload",function(){if(self.script)self.script.onerror=empty},false)}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement("script");if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError("jsonp poll error",e)};var insertAt=document.getElementsByTagName("script")[0];insertAt.parentNode.insertBefore(script,insertAt);this.script=script;var isUAgecko="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement("iframe");document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement("form");var area=document.createElement("textarea");var id=this.iframeId="eio_iframe_"+this.index;var iframe;form.className="socketio";form.style.position="absolute";form.style.top="-1000px";form.style.left="-1000px";form.target=id;form.method="POST";form.setAttribute("accept-charset","utf-8");area.name="d";form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)}catch(e){self.onError("jsonp polling iframe removal error",e)}}try{var html='<iframe src="javascript:0" name="'+self.iframeId+'">';iframe=document.createElement(html)}catch(e){iframe=document.createElement("iframe");iframe.name=self.iframeId;iframe.src="javascript:0"}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,"\\\n");this.area.value=data.replace(rNewline,"\\n");try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState=="complete"){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling":18,"component-inherit":21}],17:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_("xmlhttprequest");var Polling=_dereq_("./polling");var Emitter=_dereq_("component-emitter");var inherit=_dereq_("component-inherit");var debug=_dereq_("debug")("engine.io-client:polling-xhr");module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL="https:"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!=="string"&&data!==undefined;var req=this.request({method:"POST",data:data,isBinary:isBinary});var self=this;req.on("success",fn);req.on("error",function(err){self.onError("xhr post error",err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug("xhr poll");var req=this.request();var self=this;req.on("data",function(data){self.onData(data)});req.on("error",function(err){self.onError("xhr poll error",err)});this.pollXhr=req};function Request(opts){this.method=opts.method||"GET";this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug("xhr open %s: %s",this.method,this.uri);xhr.open(this.method,this.uri,this.async);if(this.supportsBinary){xhr.responseType="arraybuffer"}if("POST"==this.method){try{if(this.isBinary){xhr.setRequestHeader("Content-type","application/octet-stream")}else{xhr.setRequestHeader("Content-type","text/plain;charset=UTF-8")}}catch(e){}}if("withCredentials"in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug("xhr data %s",this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit("success");this.cleanup()};Request.prototype.onData=function(data){this.emit("data",data);this.onSuccess()};Request.prototype.onError=function(err){this.emit("error",err);this.cleanup(true)};Request.prototype.cleanup=function(fromError){if("undefined"==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}if(fromError){try{this.xhr.abort()}catch(e){}}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(e){}if(contentType==="application/octet-stream"){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{data="ok"}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return"undefined"!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent("onunload",unloadHandler)}else if(global.addEventListener){global.addEventListener("beforeunload",unloadHandler,false)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling":18,"component-emitter":9,"component-inherit":21,debug:22,xmlhttprequest:20}],18:[function(_dereq_,module,exports){var Transport=_dereq_("../transport");var parseqs=_dereq_("parseqs");var parser=_dereq_("engine.io-parser");var inherit=_dereq_("component-inherit");var debug=_dereq_("debug")("engine.io-client:polling");module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_("xmlhttprequest");var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name="polling";Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState="pausing";function pause(){debug("paused");self.readyState="paused";onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug("we are currently polling - waiting to pause");total++;this.once("pollComplete",function(){debug("pre-pause polling complete");--total||pause()})}if(!this.writable){debug("we are currently writing - waiting to pause");total++;this.once("drain",function(){debug("pre-pause writing complete");--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug("polling");this.polling=true;this.doPoll();this.emit("poll")};Polling.prototype.onData=function(data){var self=this;debug("polling got data %s",data);var callback=function(packet,index,total){if("opening"==self.readyState){self.onOpen()}if("close"==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if("closed"!=this.readyState){this.polling=false;this.emit("pollComplete");if("open"==this.readyState){this.poll()}else{debug('ignoring poll - transport state "%s"',this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug("writing close packet");self.write([{type:"close"}])}if("open"==this.readyState){debug("transport open - closing");close()}else{debug("transport not open - deferring close");this.once("open",close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit("drain")};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?"https":"http";var port="";if(false!==this.timestampRequests){query[this.timestampParam]=+new Date+"-"+Transport.timestamps++}if(!this.supportsBinary&&!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&&("https"==schema&&this.port!=443||"http"==schema&&this.port!=80)){port=":"+this.port}if(query.length){query="?"+query}return schema+"://"+this.hostname+port+this.path+query}},{"../transport":14,"component-inherit":21,debug:22,"engine.io-parser":25,parseqs:35,xmlhttprequest:20}],19:[function(_dereq_,module,exports){var Transport=_dereq_("../transport");var parser=_dereq_("engine.io-parser");var parseqs=_dereq_("parseqs");var inherit=_dereq_("component-inherit");var debug=_dereq_("debug")("engine.io-client:websocket");var WebSocket=_dereq_("ws");module.exports=WS;function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name="websocket";WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;this.ws=new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}this.ws.binaryType="arraybuffer";this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError("websocket error",e)}};if("undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;for(var i=0,l=packets.length;i<l;i++){parser.encodePacket(packets[i],this.supportsBinary,function(data){try{self.ws.send(data)}catch(e){debug("websocket closed before onclose event")}})}function ondrain(){self.writable=true;self.emit("drain")}setTimeout(ondrain,0)};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!=="undefined"){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?"wss":"ws";var port="";if(this.port&&("wss"==schema&&this.port!=443||"ws"==schema&&this.port!=80)){port=":"+this.port}if(this.timestampRequests){query[this.timestampParam]=+new Date}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query="?"+query}return schema+"://"+this.hostname+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&&!("__initialize"in WebSocket&&this.name===WS.prototype.name)}},{"../transport":14,"component-inherit":21,debug:22,"engine.io-parser":25,parseqs:35,ws:37}],20:[function(_dereq_,module,exports){var hasCORS=_dereq_("has-cors");module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if("undefined"!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}}},{"has-cors":40}],21:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],22:[function(_dereq_,module,exports){exports=module.exports=_dereq_("./debug");exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function useColors(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}exports.formatters.j=function(v){return JSON.stringify(v)};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?"%c":"")+this.namespace+(useColors?" %c":" ")+args[0]+(useColors?"%c ":" ")+"+"+exports.humanize(this.diff);if(!useColors)return args;var c="color: "+this.color;args=[args[0],c,"color: inherit"].concat(Array.prototype.slice.call(args,1));var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if("%"===match)return;index++;if("%c"===match){lastC=index}});args.splice(lastC,0,c);return args}function log(){return"object"==typeof console&&"function"==typeof console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(namespaces){try{if(null==namespaces){localStorage.removeItem("debug")}else{localStorage.debug=namespaces}}catch(e){}}function load(){var r;try{r=localStorage.debug}catch(e){}return r}exports.enable(load())},{"./debug":23}],23:[function(_dereq_,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_("ms");exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length]}function debug(namespace){function disabled(){}disabled.enabled=false;function enabled(){var self=enabled;var curr=+new Date;var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if("string"!==typeof args[0]){args=["%o"].concat(args)}var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){if(match==="%")return match;index++;var formatter=exports.formatters[format];if("function"===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--}return match});if("function"===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args)}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args)}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn}function enable(namespaces){exports.save(namespaces);var split=(namespaces||"").split(/[\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;namespaces=split[i].replace(/\*/g,".*?");if(namespaces[0]==="-"){exports.skips.push(new RegExp("^"+namespaces.substr(1)+"$"))}else{exports.names.push(new RegExp("^"+namespaces+"$"))}}}function disable(){exports.enable("")}function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true}}return false}function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}},{ms:24}],24:[function(_dereq_,module,exports){var s=1e3;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if("string"==typeof val)return parse(val);return options.long?long(val):short(val)};function parse(str){var match=/^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||"ms").toLowerCase();switch(type){case"years":case"year":case"y":return n*y;case"days":case"day":case"d":return n*d;case"hours":case"hour":case"h":return n*h;case"minutes":case"minute":case"m":return n*m;case"seconds":case"second":case"s":return n*s;case"ms":return n}}function short(ms){if(ms>=d)return Math.round(ms/d)+"d";if(ms>=h)return Math.round(ms/h)+"h";if(ms>=m)return Math.round(ms/m)+"m";if(ms>=s)return Math.round(ms/s)+"s";return ms+"ms"}function long(ms){return plural(ms,d,"day")||plural(ms,h,"hour")||plural(ms,m,"minute")||plural(ms,s,"second")||ms+" ms"}function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+" "+name;return Math.ceil(ms/n)+" "+name+"s"}},{}],25:[function(_dereq_,module,exports){(function(global){var keys=_dereq_("./keys");var hasBinary=_dereq_("has-binary");var sliceBuffer=_dereq_("arraybuffer.slice");var base64encoder=_dereq_("base64-arraybuffer");var after=_dereq_("after");var utf8=_dereq_("utf8");var isAndroid=navigator.userAgent.match(/Android/i);var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);var dontSendBlobs=isAndroid||isPhantomJS;exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:"error",data:"parser error"};var Blob=_dereq_("blob");exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if("function"==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if("function"==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}if(data&&data.base64){return encodeBase64Object(packet,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(""+encoded)};function encodeBase64Object(packet,callback){var message="b"+exports.packets[packet.type]+packet.data.data;return callback(message)}function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message="b"+exports.packets[packet.type];if(Blob&&packet.data instanceof Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(",")[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data=="string"||data===undefined){if(data.charAt(0)=="b"){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length>1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType==="blob"){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType==="blob"&&Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary=="function"){callback=supportsBinary;supportsBinary=null}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback("0:")}function setLengthHeader(message){return message.length+":"+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(""))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!="string"){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType==="function"){callback=binaryType;binaryType=null}var packet;if(data==""){return callback(err,0,1)}var length="",n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(":"!=chr){length+=chr}else{if(""==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=""}}if(length!=""){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p==="string"){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p==="string";var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded==="string"){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType==="function"){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength="";for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg="";for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./keys":26,after:27,"arraybuffer.slice":28,"base64-arraybuffer":29,blob:30,"has-binary":31,utf8:33}],26:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],27:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error("after called too many times")}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}function noop(){}},{}],28:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start<0){start+=bytes}if(end<0){end+=bytes}if(end>bytes){end=bytes}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],29:[function(_dereq_,module,exports){(function(chars){"use strict";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64="";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];base64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+"="}else if(len%3===1){base64=base64.substring(0,base64.length-2)+"=="}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]==="="){bufferLength--;if(base64[base64.length-2]==="="){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63}return arraybuffer}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],30:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var b=new Blob(["hi"]);return b.size==2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;for(var i=0;i<ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}module.exports=function(){if(blobSupported){return global.Blob}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],31:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_("isarray");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&"object"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(obj.hasOwnProperty(key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{isarray:32}],32:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=="[object Array]"}},{}],33:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports=="object"&&exports;var freeModule=typeof module=="object"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global=="object"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output="";while(++index<length){value=array[index];if(value>65535){value-=65536;
output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value)}return output}function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&63|128)}function encodeCodePoint(codePoint){if((codePoint&4294967168)==0){return stringFromCharCode(codePoint)}var symbol="";if((codePoint&4294965248)==0){symbol=stringFromCharCode(codePoint>>6&31|192)}else if((codePoint&4294901760)==0){symbol=stringFromCharCode(codePoint>>12&15|224);symbol+=createByte(codePoint,6)}else if((codePoint&4292870144)==0){symbol=stringFromCharCode(codePoint>>18&7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString="";while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex>=byteCount){throw Error("Invalid byte index")}var continuationByte=byteArray[byteIndex]&255;byteIndex++;if((continuationByte&192)==128){return continuationByte&63}throw Error("Invalid continuation byte")}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error("Invalid byte index")}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&255;byteIndex++;if((byte1&128)==0){return byte1}if((byte1&224)==192){var byte2=readContinuationByte();codePoint=(byte1&31)<<6|byte2;if(codePoint>=128){return codePoint}else{throw Error("Invalid continuation byte")}}if((byte1&240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&15)<<12|byte2<<6|byte3;if(codePoint>=2048){return codePoint}else{throw Error("Invalid continuation byte")}}if((byte1&248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&15)<<18|byte2<<12|byte3<<6|byte4;if(codePoint>=65536&&codePoint<=1114111){return codePoint}}throw Error("Invalid UTF-8 detected")}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:"2.0.0",encode:utf8encode,decode:utf8decode};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return utf8})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],34:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rtrimLeft=/^\s+/;var rtrimRight=/\s+$/;module.exports=function parsejson(data){if("string"!=typeof data||!data){return null}data=data.replace(rtrimLeft,"").replace(rtrimRight,"");if(global.JSON&&JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return new Function("return "+data)()}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],35:[function(_dereq_,module,exports){exports.encode=function(obj){var str="";for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+="&";str+=encodeURIComponent(i)+"="+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split("&");for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split("=");qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],36:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];module.exports=function parseuri(str){var src=str,b=str.indexOf("["),e=str.indexOf("]");if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,";")+str.substring(e,str.length)}var m=re.exec(str||""),uri={},i=14;while(i--){uri[parts[i]]=m[i]||""}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,":");uri.authority=uri.authority.replace("[","").replace("]","").replace(/;/g,":");uri.ipv6uri=true}return uri}},{}],37:[function(_dereq_,module,exports){var global=function(){return this}();var WebSocket=global.WebSocket||global.MozWebSocket;module.exports=WebSocket?ws:null;function ws(uri,protocols,opts){var instance;if(protocols){instance=new WebSocket(uri,protocols)}else{instance=new WebSocket(uri)}return instance}if(WebSocket)ws.prototype=WebSocket.prototype},{}],38:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_("isarray");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&"object"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{isarray:39}],39:[function(_dereq_,module,exports){module.exports=_dereq_(32)},{}],40:[function(_dereq_,module,exports){var global=_dereq_("global");try{module.exports="XMLHttpRequest"in global&&"withCredentials"in new global.XMLHttpRequest}catch(err){module.exports=false}},{global:41}],41:[function(_dereq_,module,exports){module.exports=function(){return this}()},{}],42:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],43:[function(_dereq_,module,exports){var has=Object.prototype.hasOwnProperty;exports.keys=Object.keys||function(obj){var keys=[];for(var key in obj){if(has.call(obj,key)){keys.push(key)}}return keys};exports.values=function(obj){var vals=[];for(var key in obj){if(has.call(obj,key)){vals.push(obj[key])}}return vals};exports.merge=function(a,b){for(var key in b){if(has.call(b,key)){a[key]=b[key]}}return a};exports.length=function(obj){return exports.keys(obj).length};exports.isEmpty=function(obj){return 0==exports.length(obj)}},{}],44:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];module.exports=function parseuri(str){var m=re.exec(str||""),uri={},i=14;while(i--){uri[parts[i]]=m[i]||""}return uri}},{}],45:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_("isarray");var isBuf=_dereq_("./is-buffer");exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if("object"==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&&"object"==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&&"object"==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./is-buffer":47,isarray:48}],46:[function(_dereq_,module,exports){var debug=_dereq_("debug")("socket.io-parser");var json=_dereq_("json3");var isArray=_dereq_("isarray");var Emitter=_dereq_("component-emitter");var binary=_dereq_("./binary");var isBuf=_dereq_("./is-buffer");exports.protocol=4;exports.types=["CONNECT","DISCONNECT","EVENT","BINARY_EVENT","ACK","BINARY_ACK","ERROR"];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug("encoding packet %j",obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str="";var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+="-"}if(obj.nsp&&"/"!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=",";nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=",";str+=json.stringify(obj.data)}debug("encoded %j as %s",obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if("string"==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments===0){this.emit("decoded",packet)}}else{this.emit("decoded",packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error("got binary data when not reconstructing a packet")}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit("decoded",packet)}}}else{throw new Error("Unknown type: "+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf="";while(str.charAt(++i)!="-"){buf+=str.charAt(i);if(i+1==str.length)break}if(buf!=Number(buf)||str.charAt(i)!="-"){throw new Error("Illegal attachments")}p.attachments=Number(buf)}if("/"==str.charAt(i+1)){p.nsp="";while(++i){var c=str.charAt(i);if(","==c)break;p.nsp+=c;if(i+1==str.length)break}}else{p.nsp="/"}var next=str.charAt(i+1);if(""!==next&&Number(next)==next){p.id="";while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i+1==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug("decoded %s as %j",str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:"parser error"}}},{"./binary":45,"./is-buffer":47,"component-emitter":9,debug:10,isarray:48,json3:49}],47:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],48:[function(_dereq_,module,exports){module.exports=_dereq_(32)},{}],49:[function(_dereq_,module,exports){(function(window){var getClass={}.toString,isProperty,forEach,undef;var isLoader=typeof define==="function"&&define.amd;var nativeJSON=typeof JSON=="object"&&JSON;var JSON3=typeof exports=="object"&&exports&&!exports.nodeType&&exports;if(JSON3&&nativeJSON){JSON3.stringify=nativeJSON.stringify;JSON3.parse=nativeJSON.parse}else{JSON3=window.JSON=nativeJSON||{}}var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name=="bug-string-char-index"){isSupported="a"[0]!="a"}else if(name=="json"){isSupported=has("json-stringify")&&has("json-parse")}else{var value,serialized='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(name=="json-stringify"){var stringify=JSON3.stringify,stringifySupported=typeof stringify=="function"&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)==="0"&&stringify(new Number)==="0"&&stringify(new String)=='""'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)==="1"&&stringify([value])=="[1]"&&stringify([undef])=="[null]"&&stringify(null)=="null"&&stringify([undef,getClass,null])=="[null,null,null]"&&stringify({a:[value,true,false,null,"\x00\b\n\f\r	"]})==serialized&&stringify(null,value)==="1"&&stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&stringify(new Date(-864e13))=='"-271821-04-20T00:00:00.000Z"'&&stringify(new Date(864e13))=='"+275760-09-13T00:00:00.000Z"'&&stringify(new Date(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"'}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name=="json-parse"){var parse=JSON3.parse;if(typeof parse=="function"){try{if(parse("0")===0&&!parse(false)){value=parse(serialized);var parseSupported=value["a"].length==5&&value["a"][0]===1;if(parseSupported){try{parseSupported=!parse('"	"')}catch(exception){}if(parseSupported){try{parseSupported=parse("01")!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse("1.")!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has("json")){var functionClass="[object Function]";var dateClass="[object Date]";var numberClass="[object Number]";var stringClass="[object String]";var arrayClass="[object Array]";var booleanClass="[object Boolean]";var charIndexBuggy=has("bug-string-char-index");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty={}.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}var PrimitiveTypes={"boolean":1,number:1,string:1,undefined:1};var isHostType=function(object,property){var type=typeof object[property];return type=="object"?!!object[property]:!PrimitiveTypes[type]};forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!="function"&&isHostType(object,"hasOwnProperty")?object.hasOwnProperty:isProperty;for(property in object){if(!(isFunction&&property=="prototype")&&hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property=="prototype")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property=="prototype")&&isProperty.call(object,property)&&!(isConstructor=property==="constructor")){callback(property)}}if(isConstructor||isProperty.call(object,property="constructor")){callback(property)}}}return forEach(object,callback)};if(!has("json-stringify")){var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};var leadingZeroes="000000";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix="\\u00";var quote=function(value){var result='"',index=0,length=value.length,isLarge=length>10&&charIndexBuggy,symbols;if(isLarge){symbols=value.split("")}for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=isLarge?symbols[index]:charIndexBuggy?value.charAt(index):value[index]}}return result+'"'};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value=="object"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,"toJSON")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+"."+toPaddedString(3,milliseconds)+"Z"}else{value=null}}else if(typeof value.toJSON=="function"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,"toJSON"))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return"null"}className=getClass.call(value);if(className==booleanClass){return""+value}else if(className==numberClass){return value>-1/0&&value<1/0?""+value:"null"}else if(className==stringClass){return quote(""+value)}if(typeof value=="object"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?"null":element)}result=results.length?whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":"["+results.join(",")+"]":"[]"}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+":"+(whitespace?" ":"")+element)}});result=results.length?whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":"{"+results.join(",")+"}":"{}"}stack.pop();return result}};JSON3.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(typeof filter=="function"||typeof filter=="object"&&filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" ");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10)}}return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[])}}if(!has("json-parse")){var fromCharCode=String.fromCharCode;var Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value="@",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort()}}value+=fromCharCode("0x"+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode>=48&&charCode<=57){if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){abort()}isSigned=false;for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)=="true"){Index+=4;return true}else if(source.slice(Index,Index+5)=="false"){Index+=5;return false}else if(source.slice(Index,Index+4)=="null"){Index+=4;return null}abort()}}return"$"};var get=function(value){var results,hasMembers;if(value=="$"){abort()}if(typeof value=="string"){if((charIndexBuggy?value.charAt(0):value[0])=="@"){return value.slice(1)}if(value=="["){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="]"){break}if(hasMembers){if(value==","){value=lex();if(value=="]"){abort()}}else{abort()}}if(value==","){abort()}results.push(get(value))}return results}else if(value=="{"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="}"){break}if(hasMembers){if(value==","){value=lex();if(value=="}"){abort()}}else{abort()}}if(value==","||typeof value!="string"||(charIndexBuggy?value.charAt(0):value[0])!="@"||lex()!=":"){abort()}results[value.slice(1)]=get(lex())}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value=="object"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};JSON3.parse=function(source,callback){var result,value;Index=0;Source=""+source;result=get(lex());if(lex()!="$"){abort()}Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result}}}if(isLoader){define(function(){return JSON3})}})(this)},{}],50:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}return array}},{}]},{},[1])(1)});
/*
* MonoEvent Beta
* Event library for mobile
* Copyright (c) 2014 Yiguo Chan
* Released under the MIT Licenses
*
* Mail : chenmnkken@gmail.com
* Date : 2014-05-28
*/

(function( define, window ){

define(function(){

'use strict';

var eventProps = 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which touches changedTouches fireData'.split( ' ' ),

    isIOS = !!~navigator.userAgent.toLowerCase().indexOf('iphone os'),
    doubleTapSetupCount = 0,
    eventHooks = {};

var Event = function( event ){
    // 无new实例化
    if( !(this instanceof Event) ){
        return new Event( event );
    }

    if( event && event.type ){
        this.originalEvent = event;
        this.type = event.type;

        this.isDefaultPrevented = ( event.defaultPrevented ||
            event.getPreventDefault && event.getPreventDefault() ) ? true : false;
    }
    else{
        this.type = event;
    }

    this.timeStamp = event && event.timeStamp || Date.now();
};

Event.prototype = {

    // 模拟DOM LV2的阻止默认事件的方法
    preventDefault : function(){
        // DOM LV3
        this.isDefaultPrevented = true;
        var e = this.originalEvent;

        if( e ){
            e.preventDefault();
        }
    },

    // 模拟DOM LV2阻止事件冒泡的方法
    stopPropagation : function(){
        // DOM LV3
        this.isPropagationStopped = true;
        var e = this.originalEvent;

        if( e ){
            e.stopPropagation();
        }
    },

    // 模拟DOM LV3阻止同类型事件冒泡的方法
    stopImmediatePropagation : function(){
        this.isImmediatePropagationStopped = true;
        this.stopPropagation();
    },

    // 判定是否阻止了默认事件
    isDefaultPrevented : false,

    // 判定是否阻止了冒泡
    isPropagationStopped : false,

    // 判定是否阻止了同类型事件的冒泡
    isImmediatePropagationStopped : false

};

eventHooks.tap = {

    types : [ 'touchstart', 'touchend' ],

    setup : function( options ){
        var originalHandle = options.handle,
            startTx, startTy,

            handles = {

                touchstart : function( e ){
                    var touches = e.touches[0];

                    startTx = touches.clientX;
                    startTy = touches.clientY;
                },

                touchend : function( e ){
                    var touches = e.changedTouches[0],
                        endTx = touches.clientX,
                        endTy = touches.clientY;

                    e.type = options.type;

                    if( Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6 ){
                        originalHandle.call( this, e );
                    }
                }

            };

        ne.addSpecialEvent( options, handles, this.types, originalHandle );
    },

    teardown : function( options ){
        this.types.forEach(function( item ){
            var newOptions = ne.mergeOptions( options, item, true );
            ne.removeEvent( newOptions );
        });
    }

};

eventHooks.doubleTap = {

    types : [ 'touchstart', 'touchend', 'click' ],

    setup : function( options ){
        var originalHandle = options.handle,
            firstTouchEnd = true,
            lastTime = 0,
            lastTx = null,
            lastTy = null,            
            startTx, startTy, dTapTimer, startTime,

            handles = {

                touchstart : function( e ){     
                    if( dTapTimer ){
                        clearTimeout( dTapTimer );
                        dTapTimer = null;
                    }

                    var touches = e.touches[0];

                    startTx = touches.clientX;
                    startTy = touches.clientY;
                },

                touchend : function( e ){
                    var touches = e.changedTouches[0],
                        endTx = touches.clientX,
                        endTy = touches.clientY,
                        now = Date.now(),
                        duration = now - lastTime;

                    e.type = options.type;

                    if( Math.abs(startTx - endTx) < 6 && Math.abs(startTx - endTx) < 6 ){
                        if( duration < 501 ){
                            if( lastTx !== null &&
                                Math.abs(lastTx - endTx) < 45 &&
                                Math.abs(lastTy - endTy) < 45 &&
                                (!options.selector || e.isFake || ne.existDoubleTap(this, e.target, options.selector)) ){

                                firstTouchEnd = true;
                                lastTx = lastTy = null;
                                delete e.isFake;
                                originalHandle.call( e.target, e );
                            }
                        }
                        else{
                            lastTx = endTx;
                            lastTy = endTy;
                        }
                    }
                    else{
                        firstTouchEnd = true;
                        lastTx = lastTy = null;
                    }

                    lastTime = now;
                }

            },

            bodyHandles = {
                touchstart : function(){
                    startTime = Date.now();
                },

                touchend : function( e ){
                    var noLongTap = Date.now() - startTime < 501,
                        handles;

                    if( firstTouchEnd ){
                        firstTouchEnd = false;
                        if( noLongTap ){
                            handles = ne.existDoubleTap( this, e.target, options.selector );

                            if( Array.isArray(handles) ){
                                dTapTimer = setTimeout(function(){
                                    handles.forEach(function( item ){
                                        e.isFake = true;
                                        item.handle( e );
                                    });            

                                    firstTouchEnd = true;
                                    lastTx = lastTy = null;
                                }, 400 );
                            }
                        }
                    }
                    else{
                        firstTouchEnd = true;
                    }
                }
            };

        if( isIOS ){
            handles.click = function(){
                if( dTapTimer ){
                    clearTimeout( dTapTimer );
                    dTapTimer = null;
                    firstTouchEnd = true;
                }
            };

            if( !doubleTapSetupCount ){
                [ 'touchstart', 'touchend' ].forEach(function( item ){
                    ne.addEvent({
                        elems : [ document.body ],
                        type : item,
                        dataName : item,
                        namespace : 'likedoubleTap',
                        capture : true,
                        handle : bodyHandles[ item ]
                    });
                });
            }
        }

        ne.addSpecialEvent( options, handles, this.types, originalHandle );    
    },
    
    teardown : function( options ){
        this.types.forEach(function( item ){
            var newOptions = ne.mergeOptions( options, item, true );

            ne.removeEvent( newOptions );
        });

        if( isIOS && !doubleTapSetupCount ){
            [ 'touchstart', 'touchend' ].forEach(function( item ){
                ne.removeEvent({
                    elems : [ document.body ],
                    type : item,
                    dataName : item,
                    namespace : 'likedoubleTap',
                    capture : true  
                });
            });
        }
    }    
};

eventHooks.longTap = {

    types : [ 'touchstart', 'touchmove', 'touchend' ],

    setup : function( options ){
        var originalHandle = options.handle,
            startTx, startTy, lTapTimer,

            clearTimer = function(){
                clearTimeout( lTapTimer );
                lTapTimer = null;
            },

            handles = {

                touchstart : function( e ){     
                    if( lTapTimer ){
                        clearTimer();                    
                    }

                    var touches = e.touches[0],
                        self = this;

                    startTx = touches.clientX;
                    startTy = touches.clientY;
                    e.type = options.type;

                    lTapTimer = setTimeout(function(){
                        originalHandle.call( self, e );
                    }, 750 );

                    e.preventDefault();
                },

                touchmove : function( e ){
                    var touches = e.touches[0],
                        moveTx = touches.clientX,
                        moveTy = touches.clientY;

                    if( lTapTimer && (Math.abs(moveTx - startTx) > 5 || Math.abs(moveTy - startTy) > 5) ){
                        clearTimer();                            
                    }
                },

                touchend : function(){
                    if( lTapTimer ){
                        clearTimer();                            
                    }
                }

            };

        ne.addSpecialEvent( options, handles, this.types, originalHandle );    
    }
    
};

eventHooks.swipe = {

    types : [ 'touchstart', 'touchmove', 'touchend' ],

    setup : function( options ){
        var originalHandle = options.handle,
            startTx, startTy, isTouchMove,

            handles = {

                touchstart : function( e ){     
                    var touches = e.touches[0];

                    startTx = touches.clientX;
                    startTy = touches.clientY;
                    isTouchMove = false;
                },

                touchmove : function( e ){
                    isTouchMove = true;
                },

                touchend : function( e ){
                    if( !isTouchMove ){
                        return;
                    }    

                    var touches = e.changedTouches[0],
                        endTx = touches.clientX,
                        endTy = touches.clientY,
                        distanceX = startTx - endTx,
                        distanceY = startTy - endTy,
                        isSwipe = false;

                    e.type = options.type;

                    if( Math.abs(distanceX) >= Math.abs(distanceY) ){
                        if( distanceX > 60 ){
                            isSwipe = true;
                            if( options.type === 'swipeLeft' ){
                                originalHandle.call( this, e );
                            }
                        }
                        else if( distanceX < -60 ){
                            isSwipe = true;
                            if( options.type === 'swipeRight' ){
                                originalHandle.call( this, e );
                            }
                        }
                    }
                    else{
                        if( distanceY > 60 ){
                            isSwipe = true;                            
                            if( options.type === 'swipeUp' ){
                                originalHandle.call( this, e );
                            }
                        }
                        else if( distanceY < -60 ){
                            isSwipe = true;     
                            if( options.type === 'swipeDown' ){
                                originalHandle.call( this, e );
                            }                            
                        }
                    }                                

                    if( isSwipe && options.type === 'swipe' ){
                        originalHandle.call( this, e );
                    }
                }

            };

        ne.addSpecialEvent( options, handles, this.types, originalHandle );    
    }
    
};

eventHooks.longTap.teardown = eventHooks.swipe.teardown = eventHooks.tap.teardown;
eventHooks.swipeLeft = eventHooks.swipeRight = eventHooks.swipeUp = eventHooks.swipeDown = eventHooks.swipe;

var ne = {

    cache : {},

    uuid : 2,

    guid : Date.now() + ( Math.random() + '' ).slice( -8 ),

    isWindow : function( obj ){
        return obj && obj === obj.window;
    },

    // 判断是否为空对象
    isEmptyObject : function( obj ){
        var name;
        for( name in obj ){
            return false;
        }
        return true;
    },

    /*
     * 判断一个DOM元素是否绑定了doubleTap事件
     * @param { HTMLElement } 代理元素
     * @param { HTMLElement } 触发事件的目标元素
     * @param { String } 事件代理的选择器
     * @return { Array/Boolean } 绑定了doubleTap事件则返回事件handles数组，否则返回false
     */
    existDoubleTap : function( elem, target, selector ){
        var filter = ne.delegateFilter,
            dataName = 'special_' + ( selector ? selector + '_' : '' ) + 'doubleTap_touchend',
            flag = false,
            data;
        
        while( target ){
            if( selector ){
                data = ne.data( elem, dataName );

                if( filter(target, selector) ){
                    flag = true;
                }
            }
            else{
                data = ne.data( target, dataName );

                if( Array.isArray(data) ){
                    flag = true;
                }
            }

            if( flag ){
                return data;
            }
            else{
                target = target.parentNode;
            }
        }

        return false;
    },

    /*
     * 根据原来的事件配置对象创建一个新的对象
     * @param { Object } 原事件配置对象
     * @param { String } 新的事件类型
     * @param { Boolean } 是否卸载
     * @return { Object } 返回新创建的对象
     */
    mergeOptions : function( source, type, isTeardown ){
        var target = {
            type : type,
            elems : source.elems,
            selector : source.selector,
            extraData : source.extraData,
            originalType : source.type,
            namespace : source.namespace,
            dataName : ( source.selector ? source.selector + '_' : '' ) + type
        };

        if( isTeardown ){
            target.handle = source.handle;
        }

        return target;
    },

    /*
     * 获取和设置元素的缓存索引值，小于3的索引值都是为特殊元素准备的
     * window 的索引为 0，document 的索引为 1，
     * document.documentElement 的索引为2
     * @param { HTMLElement }
     * @param { Boolean } 为ture的时如果元素没有索引值将创建一个
     * @return { Number } 返回元素的索引值
     */
    getCacheIndex : function( elem, isSet ){
        if( elem.nodeType === 1 ){
            var guid = ne.guid;

            return !isSet || guid in elem ?
                elem[ guid ] :
                ( elem[ guid ] = ++ne.uuid );
        }

        return ne.isWindow( elem ) ? 0 :
            elem.nodeType === 9 ? 1 :
            elem.tagName === 'HTML' ? 2 : -1;
    },

    /*
     * 写入/获取缓存
     * @param { HTMLElement }
     * @param { String } 缓存的key
     * @param { Anything } 缓存的值
     * @return { Anything } 缓存的值
     */
    data : function( elem, name, val ){
        var isUndefined = val === undefined,
            index = ne.getCacheIndex( elem, !isUndefined ),
            _cache, result;

        if( index !== undefined ){
            if( !(index in ne.cache) && !isUndefined ){
                ne.cache[ index ] = {};
            }

            _cache = ne.cache[ index ];

            if( !_cache ){
                return;
            }

            result = _cache[ name ];

            if( isUndefined || result !== undefined ){
                return result;
            }

            if( !isUndefined ){
                _cache[ name ] = val;
                return val;
            }
        }
    },

    /*
     * 移除缓存
     * @param { HTMLElement }
     * @param { String } 缓存的一级命名空间
     * @param { String } 缓存的key
     */
    removeData : function( elem, name ){
        var index = ne.getCacheIndex( elem ),
            _cache;

        if( index in ne.cache ){
            // 有参数就删除指定的数据
            _cache = ne.cache[ index ];
            if( name ){
                delete _cache[ name ];
            }

            if( ne.isEmptyObject(_cache) ){
                delete ne.cache[ index ];
            }

            // 索引值小于3都无需删除DOM元素上的索引值
            if( index < 3 ){
                return;
            }

            // 缓存中无数据了则删除DOM元素上的索引值
            if( _cache === undefined ){
                try{
                    delete elem[ ne.guid ];
                }
                catch( _ ){
                    elem.removeAttribute( ne.guid );
                }
            }
        }
    },

    /*
     * 添加特殊事件的handle缓存
     * @param { HTMLElement } 
     * @param { Function } 原事件处理器
     * @param { Object } 配置对象
     * @param { Object } 用于模拟各种类型的事件处理器
     */
    addSpecialData : function( elem, originalHandle, options, handles ){
        var specialName, specialData, name, item;

        if( options.type === 'doubleTap' ){
            doubleTapSetupCount++;    
        }

        for( name in handles ){
            specialName = 'special_' + ( options.selector ? options.selector + '_' : '' ) + options.type + '_' + name;
            specialData = ne.data( elem, specialName, [] );

            specialData.push({
                originalHandle : originalHandle,
                handle : handles[ name ]
            });
        }
    },

    /*
     * 将Nodelist转换成真实数组
     * @param { Nodelist }
     * @return { Array } 真实的数组
     */
    makeArray : function( source, target ){
        target = target || [];

        var i = 0,
            len = source.length;

        if( source !== null && source !== undefined ){
            if( Array.isArray(source) && Array.isArray(target) && !target.length ){
                return source;
            }

            for( ; i < len; i++ ){
                target[ target.length++ ] = source[i];
            }
        }

        return target;
    },

    /*
     * 绑定事件的内部方法
     * @param { Object } 参数集合
     * elems : DOM 数组
     * selector : 事件代理的选择器
     * type : 事件类型
     * dataName : 缓存事件处理器的key
     * handle : 事件处理器
     * capture : 是否捕获
     * extraData : 附加数据
     * namespace : 命名空间
     */
    addEvent : function( options ){
        var capture = options.capture === undefined ? false : options.capture,
            selector = options.selector,
            dataName = options.dataName,
            elems = options.elems,
            len = elems.length,
            i = 0,
            handles, eventHandle, elem,
            eventData = {
                type : options.originalType || options.type,
                handle : options.handle
            };

        if( options.namespace ){
            eventData.namespace = options.namespace;
        }

        if( options.extraData ){
            eventData.extraData = options.extraData;
        }

        for( ; i < len; i++ ){
            elem = elems[i];
            handles = this.data( elem, dataName, [] );

            // 将事件处理器添加到缓存的数组中，待统一执行
            handles.push( eventData );

            // 确保该元素只绑定一次同类型的事件
            if( handles.length === 1 ){
                // 生成一个统一的事件处理方法
                eventHandle = ne.eventHandle( elem, selector );
                // 然后将该方法也缓存到数组的第一个索引中，方便之后的事件卸载
                handles.unshift({ handle : eventHandle });

                elem.addEventListener( options.type, eventHandle, capture );
            }
        }
    },

    /*
     * 卸载事件的内部方法
     * @param { Object } 参数集合 参数解说同addEvent
     */
    removeEvent : function( options ){
        var capture = options.capture === undefined ? false : options.capture,
            namespace = options.namespace,
            dataName = options.dataName,
            handle = options.handle,
            elems = options.elems,
            type = options.originalType || options.type,
            len = elems.length,
            nameArr = dataName.split( '_' ),
            i = 0,
            // specialName的命名规则是 'special_' + 原生的事件类型
            // dataName有可能带有选择器的的前缀
            specialName = 'special_' +
                ( options.selector ? options.selector + '_' : '' ) +
                options.originalType + '_' +
                nameArr[ nameArr.length - 1 ],

            handles, result, specialHandles, specialHandle, elem, j;

        for( ; i < len; i++ ){
            elem = elems[i];
            handles = this.data( elem, dataName );

            if( handles ){
                specialHandles = this.data( elem, specialName );

                // 卸载指定的事件处理器
                for( j = 1; j < handles.length; j++ ){
                    result = handles[j];

                    if( specialHandles ){
                        specialHandle = specialHandles[ j - 1 ];

                        if( specialHandle && specialHandle.originalHandle === handle ){
                            handle = specialHandle.handle;
                        }
                    }

                    if( result.type === type &&
                        (!namespace || result.namespace === namespace) &&
                        (!handle || result.handle === handle) ){

                        handles.splice( j, 1 );

                        if( specialHandles ){
                            specialHandles.splice( j - 1, 1 );
                        }

                        if( options.originalType === 'doubleTap' && dataName === 'touchend' ){
                            doubleTapSetupCount--;
                        }

                        if( handle ){
                            break;
                        }

                        j--;
                    }
                }

                // 没有指定函数名或只剩下一个【统一的事件处理器】将卸载所有的事件处理器
                if( handles.length === 1 ){
                    // 卸载统一的事件处理器
                    elem.removeEventListener( options.type, handles[0].handle, capture );

                    // 删除缓存中的该事件类型的所有数据
                    this.removeData( elem, dataName );

                    if( specialHandles ){
                        this.removeData( elem, specialName );
                    }
                }
            }
        }
    },

    addSpecialEvent : function( options, handles, types, originalHandle ){
        var len = options.elems.length,
            i = 0;

        for( ; i < len; i++ ){
            ne.addSpecialData( options.elems[i], originalHandle, options, handles )
        }

        types.forEach(function( item ){
            var newOptions = ne.mergeOptions( options, item );

            if( handles[item] ){
                newOptions.handle = handles[ item ];
                ne.addEvent( newOptions );
            }
        });
    },

    /*
     * 模拟事件触发器
     * @param { HTMLElement }
     * @param { String } 事件类型
     * @param { Array } 事件处理器的数组
     * @param { String } 命名空间
     * @param { Array } 附加参数
     */
    fireEvent : function( elem, type, namespace, fireData ){
        var i = 1,
            handles = this.data( elem, type ),
            len, event, parent, result, isPropagationStopped;

        if( handles ){
            // 修正Event对象
            event = {
                target : elem,
                currentTarget : elem,
                type : type,
                stopPropagation : function(){
                    isPropagationStopped = true;
                }
            };

            if( fireData ){
                event.fireData = fireData;
            }

            if( !namespace ){
                handles[0].handle.call( elem, event );
            }
            else{
                len = handles.length;
                for( ; i < len; i++ ){
                    result = handles[i];
                    if( result.namespace === namespace ){
                        result.handle.call( elem, event );
                    }
                }
            }

            parent = elem.parentNode;
            // 模拟事件冒泡
            if( parent && !isPropagationStopped ){
                this.fireEvent( parent, type, null, namespace, fireData );
            }
        }
    },

    /*
     * 事件代理的DOM元素过滤器，判断是否符合 selector 的匹配
     * @param { HTMLElement }
     * @param { String } 基本类型的选择器( tag, class, id )
     * @return { Boolean } 是否匹配
     */
    delegateFilter : function( elem, selector ){
        var tagName, className, name, index;
        // class
        if( ~selector.indexOf('.') ){
            className = elem.className;
            index = selector.indexOf( '.' );
            name = ' ' + selector.substring( index + 1 ) + ' ';
            tagName = selector.substring( 0, index ).toUpperCase();
            return (!tagName || elem.tagName === tagName) && (className && !!~(' ' + className + ' ').indexOf(name));
        }
        // id
        if( ~selector.indexOf('#') ){
            index = selector.indexOf( '#' );
            name = selector.substring( index + 1 );
            tagName = selector.substring( 0, index ).toUpperCase();
            return (!tagName || elem.tagName === tagName) && (elem.id === name);
        }
        // tag
        return elem.tagName.toLowerCase() === selector;
    },

    // 模拟一个可写的、统一的Event接口对象，该对象包含了常见的标准属性和方法。
    createEvent : function( event ){
        var sourceEvent = event,
            target = event.target,
            len = eventProps.length,
            i = 0,
            type;

        // 创建Event对象
        event = Event( sourceEvent );
        // 将原生的Event的某些常见的标准属性合并到新Event中
        for( ; i < len; i++ ){
            event[ eventProps[i] ] = sourceEvent[ eventProps[i] ];
        }

        type = event.type;
        return event;
    },

    /*
     * 生成一个统一的事件处理器，来依次执行该元素绑定的所有事件处理器
     * @param { HTMLElement }
     * @param { String/Function } 事件代理的选择器或事件处理器(若为事件处理器将不予理会)
     * @return { Function }
     */
    eventHandle : function( elem, selector ){
        return function( event ){
            event = ne.createEvent( event );

            var orginalTarget = event.target,
                fireData = event.fireData,
                isDelegate = false,
                type = event.type,
                target = elem,
                dataName = type,
                i = 1,
                handles, len, j, filter, result, name;

            if( !event.currentTarget ){
                event.currentTarget = ne.data( orginalTarget, 'currentTarget' ) || elem;
            }

            // 如果有 selector 则用 target 与 selector 进行匹配，匹配成功才执行事件处理器
            // 这就是事件代理的简单原理，利用事件冒泡的特性
            if( selector ){
                filter = ne.delegateFilter;
                // 事件代理时将 this 指向 event.target，否则默认指向 elem
                target = orginalTarget;
                // 选择器 + 事件类型的方式来区分事件代理
                dataName = selector + '_' + type;

                for( ; target !== elem; target = target.parentNode || elem ){
                    if( filter(target, selector) ){
                        isDelegate = true;
                        break;
                    }
                }
            }

            if( !selector || isDelegate ){
                handles = ne.data( elem, dataName );

                if( handles ){
                    len = handles.length;

                    for( ; i < len; i++ ){
                        // 针对只执行一次即卸载的事件的特殊处理
                        j = handles[i] ? i : i - 1;
                        result = handles[j];

                        // 将缓存的附加数据添加到event对象中
                        if( result.extraData || fireData ){
                            if( result.extraData ){
                                event.extraData = {};

                                for( name in result.extraData ){
                                    event.extraData[ name ] = result.extraData[ name ];
                                }
                            }

                            if( fireData ){
                                event.extraData = {};

                                for( name in fireData ){
                                    event.extraData[ name ] = fireData[ name ];
                                }
                            }

                            try{
                                event.originalEvent.fireData = null;
                                delete event.originalEvent.fireData;
                            }
                            catch( _ ){};

                            delete event.fireData;
                        }
                        // 附加数据不能共享以确保不冲突
                        else{
                            delete event.extraData;
                        }

                        if( result.handle.call(target, event) === false ){
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
        };
    }

};

var init = function( selector, context ){
    var elems;
    this.length = 0;

    if( !selector ){
        return this;
    }

    // selector为字符串
    if( typeof selector === 'string' ){
        selector = selector.trim();
        context = context || document;
        elems = context.querySelectorAll( selector, context );
        return ne.makeArray( elems, this );
    }

    // selector为DOM节点、document、document.documentElement
    if( selector.nodeType || ne.isWindow(selector) ){
        this[0] = selector;
        this.length = 1;
        return this;
    }

    // selector为Nodelist
    if( typeof selector.length === 'number' ){
        return ne.makeArray( selector, this );
    }
};

var MonoEvent = function( selector, context ){
    return new init( selector, context );
};

init.prototype = MonoEvent.prototype;

// 绑定和卸载事件供外部调用的原型方法的拼装
[{ methodName : 'on', aliasName : 'setup' },
  { methodName : 'un', aliasName : 'teardown' }].forEach(function( item ){

    MonoEvent.prototype[ item.methodName ] = function( type, selector, extraData, fn, one ){
        var types = type.match( /[^\s]+/g ),
            len = types.length,
            isOn = item.methodName === 'on',
            isOne = isOn && one === true,
            options = {},
            i = 0,
            special, dataName, originalFn;

        if( len === 1 ){
            type = types[0];
            types = type.split( '.' );
            type = types[0];
            options.namespace = types[1];
            special = eventHooks[ type ];
            dataName = type;
        }
        // 多个事件类型循环绑定或卸载
        else{
            for( ; i < len; i++ ){
                this[ isOne ? 'one' : item.methodName ]( types[i], selector, extraData, fn );
            }
            return this;
        }

        // 处理相关的参数
        if( !fn ){
            if( selector ){
                if( typeof selector === 'function' ){
                    fn = selector;
                    selector = extraData = null;
                }
                else if( typeof selector === 'object' ){
                    fn = extraData;
                    extraData = selector;
                    selector = null;
                }
                else if( typeof selector === 'string' ){
                    fn = extraData;
                    // 事件代理时缓存的name格式为：选择器 + '_' + 事件类型 => '.demo_click'
                    dataName = selector + '_' + type;
                    extraData = null;
                }
            }
            else if( extraData ){
                if( typeof extraData === 'function' ){
                    fn = extraData;
                    extraData = null;
                }
            }
        }
        else if( typeof selector === 'string' ){
            dataName = selector + '_' + type;
        }

        // one方法的实现，执行真正的事件处理器前先卸载该事件
        if( isOne ){
            originalFn = fn;
            fn = function( e ){
                var originalEvent = e.originalEvent,
                    args = [ e ];

                MonoEvent( e.currentTarget ).un( type, selector, fn );
                originalFn.apply( this, args );
            };
        }

        options.elems = this;
        options.type = type;
        options.handle = fn;
        options.dataName = dataName;
        options.selector = selector;
        options.extraData = extraData;

        // 特殊事件的绑定和卸载分支
        if( special && special[item.aliasName] ){
            special[ item.aliasName ]( options );
        }
        else{
            ne[ isOn ? 'addEvent' : 'removeEvent' ]( options );
        }

        return this;
    };

});

MonoEvent.prototype.fire = function( type, fireData ){
    var types = type.split( '.' ),
        namespace = types[1],
        len = this.length,
        i = 0,
        special;

    type = types[0];
    special = eventHooks[ type ];

    if( special && special.trigger ){
        special.trigger( this, namespace, fireData );
        return this;
    }

    for( ; i < len; i++ ){
        ne.fireEvent( this[i], type, namespace, fireData );
    }

    return this;
};

MonoEvent.prototype.one = function( type, selector, extraData, fn ){
    return this.on( type, selector, extraData, fn, true );
};

window.MonoEvent = MonoEvent;

});

})( typeof define === 'function' && (define.amd || define.cmd) ? define : 
    function ( name, deps, factory ) { 
        if( typeof name === 'function' ){
            factory = name;
        }
        
        if( typeof deps === 'function' ){
            factory = deps;
        }
        
        if( factory ){
            factory();
        }
    }
, window );

/**
 * EpicEditor - An Embeddable JavaScript Markdown Editor (https://github.com/OscarGodson/EpicEditor)
 * Copyright (c) 2011-2012, Oscar Godson. (MIT Licensed)
 */(function(e,t){function n(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}function r(e,t){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n])}function i(t,n){var r=t,i=null;return e.getComputedStyle?i=document.defaultView.getComputedStyle(r,null).getPropertyValue(n):r.currentStyle&&(i=r.currentStyle[n]),i}function s(e,t,n){var s={},o;if(t==="save"){for(o in n)n.hasOwnProperty(o)&&(s[o]=i(e,o));r(e,n)}else t==="apply"&&r(e,n);return s}function o(e){var t=parseInt(i(e,"border-left-width"),10)+parseInt(i(e,"border-right-width"),10),n=parseInt(i(e,"padding-left"),10)+parseInt(i(e,"padding-right"),10),r=e.offsetWidth,s;return isNaN(t)&&(t=0),s=t+n+r,s}function u(e){var t=parseInt(i(e,"border-top-width"),10)+parseInt(i(e,"border-bottom-width"),10),n=parseInt(i(e,"padding-top"),10)+parseInt(i(e,"padding-bottom"),10),r=parseInt(i(e,"height"),10),s;return isNaN(t)&&(t=0),s=t+n+r,s}function a(e,t,r){r=r||"";var i=t.getElementsByTagName("head")[0],s=t.createElement("link");n(s,{type:"text/css",id:r,rel:"stylesheet",href:e,name:e,media:"screen"}),i.appendChild(s)}function f(e,t,n){e.className=e.className.replace(t,n)}function l(e){return e.contentDocument||e.contentWindow.document}function c(e){var t;return typeof document.body.innerText=="string"?t=e.innerText:(t=e.innerHTML.replace(/<br>/gi,"\n"),t=t.replace(/<(?:.|\n)*?>/gm,""),t=t.replace(/&lt;/gi,"<"),t=t.replace(/&gt;/gi,">")),t}function h(e,t){return t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=t.replace(/\n/g,"<br>"),t=t.replace(/<br>\s/g,"<br>&nbsp;"),t=t.replace(/\s\s\s/g,"&nbsp; &nbsp;"),t=t.replace(/\s\s/g,"&nbsp; "),t=t.replace(/^ /,"&nbsp;"),e.innerHTML=t,!0}function p(e){return e.replace(/\u00a0/g," ").replace(/&nbsp;/g," ")}function d(){var e=-1,t=navigator.userAgent,n;return navigator.appName=="Microsoft Internet Explorer"&&(n=/MSIE ([0-9]{1,}[\.0-9]{0,})/,n.exec(t)!=null&&(e=parseFloat(RegExp.$1,10))),e}function v(){var t=e.navigator;return t.userAgent.indexOf("Safari")>-1&&t.userAgent.indexOf("Chrome")==-1}function m(){var t=e.navigator;return t.userAgent.indexOf("Firefox")>-1&&t.userAgent.indexOf("Seamonkey")==-1}function g(e){var t={};return e&&t.toString.call(e)==="[object Function]"}function y(){var e=arguments[0]||{},n=1,r=arguments.length,i=!1,s,o,u,a;typeof e=="boolean"&&(i=e,e=arguments[1]||{},n=2),typeof e!="object"&&!g(e)&&(e={}),r===n&&(e=this,--n);for(;n<r;n++)if((s=arguments[n])!=null)for(o in s)if(s.hasOwnProperty(o)){u=e[o],a=s[o];if(e===a)continue;i&&a&&typeof a=="object"&&!a.nodeType?e[o]=y(i,u||(a.length!=null?[]:{}),a):a!==t&&(e[o]=a)}return e}function b(e){var n=this,r=e||{},i,s,o={container:"epiceditor",basePath:"epiceditor",textarea:t,clientSideStorage:!0,localStorageName:"epiceditor",useNativeFullscreen:!0,file:{name:null,defaultContent:"",autoSave:100},theme:{base:"/themes/base/epiceditor.css",preview:"/themes/preview/github.css",editor:"/themes/editor/epic-dark.css"},focusOnLoad:!1,shortcut:{modifier:18,fullscreen:70,preview:80},string:{togglePreview:"Toggle Preview Mode",toggleEdit:"Toggle Edit Mode",toggleFullscreen:"Enter Fullscreen"},parser:typeof marked=="function"?marked:null,autogrow:!1,button:{fullscreen:!0,preview:!0,bar:"auto"}},u,a={minHeight:80,maxHeight:!1,scroll:!0};n.settings=y(!0,o,r);var f=n.settings.button;n._fullscreenEnabled=typeof f=="object"?typeof f.fullscreen=="undefined"||f.fullscreen:f===!0,n._editEnabled=typeof f=="object"?typeof f.edit=="undefined"||f.edit:f===!0,n._previewEnabled=typeof f=="object"?typeof f.preview=="undefined"||f.preview:f===!0;if(typeof n.settings.parser!="function"||typeof n.settings.parser("TEST")!="string")n.settings.parser=function(e){return e};return n.settings.autogrow&&(n.settings.autogrow===!0?n.settings.autogrow=a:n.settings.autogrow=y(!0,a,n.settings.autogrow),n._oldHeight=-1),n.settings.theme.preview.match(/^https?:\/\//)||(n.settings.theme.preview=n.settings.basePath+n.settings.theme.preview),n.settings.theme.editor.match(/^https?:\/\//)||(n.settings.theme.editor=n.settings.basePath+n.settings.theme.editor),n.settings.theme.base.match(/^https?:\/\//)||(n.settings.theme.base=n.settings.basePath+n.settings.theme.base),typeof n.settings.container=="string"?n.element=document.getElementById(n.settings.container):typeof n.settings.container=="object"&&(n.element=n.settings.container),n.settings.file.name||(typeof n.settings.container=="string"?n.settings.file.name=n.settings.container:typeof n.settings.container=="object"&&(n.element.id?n.settings.file.name=n.element.id:(b._data.unnamedEditors||(b._data.unnamedEditors=[]),b._data.unnamedEditors.push(n),n.settings.file.name="__epiceditor-untitled-"+b._data.unnamedEditors.length))),n.settings.button.bar==="show"&&(n.settings.button.bar=!0),n.settings.button.bar==="hide"&&(n.settings.button.bar=!1),n._instanceId="epiceditor-"+Math.round(Math.random()*1e5),n._storage={},n._canSave=!0,n._defaultFileSchema=function(){return{content:n.settings.file.defaultContent,created:new Date,modified:new Date}},localStorage&&n.settings.clientSideStorage&&(this._storage=localStorage,this._storage[n.settings.localStorageName]&&n.getFiles(n.settings.file.name)===t&&(s=n._defaultFileSchema(),s.content=n.settings.file.defaultContent)),this._storage[n.settings.localStorageName]||(u={},u[n.settings.file.name]=n._defaultFileSchema(),u=JSON.stringify(u),this._storage[n.settings.localStorageName]=u),n._previewDraftLocation="__draft-",n._storage[n._previewDraftLocation+n.settings.localStorageName]=n._storage[n.settings.localStorageName],n._eeState={fullscreen:!1,preview:!1,edit:!1,loaded:!1,unloaded:!1},n.events||(n.events={}),this}b.prototype.load=function(t){function O(t){if(n.settings.button.bar!=="auto")return;if(Math.abs(g.y-t.pageY)>=5||Math.abs(g.x-t.pageX)>=5)h.style.display="block",p&&clearTimeout(p),p=e.setTimeout(function(){h.style.display="none"},1e3);g={y:t.pageY,x:t.pageX}}function M(e){e.keyCode==n.settings.shortcut.modifier&&(N=!0),e.keyCode==17&&(C=!0),N===!0&&e.keyCode==n.settings.shortcut.preview&&!n.is("fullscreen")&&(e.preventDefault(),n.is("edit")&&n._previewEnabled?n.preview():n._editEnabled&&n.edit()),N===!0&&e.keyCode==n.settings.shortcut.fullscreen&&n._fullscreenEnabled&&(e.preventDefault(),n._goFullscreen(T)),N===!0&&e.keyCode!==n.settings.shortcut.modifier&&(N=!1),e.keyCode==27&&n.is("fullscreen")&&n._exitFullscreen(T),C===!0&&e.keyCode==83&&(n.save(),e.preventDefault(),C=!1),e.metaKey&&e.keyCode==83&&(n.save(),e.preventDefault())}function _(e){e.keyCode==n.settings.shortcut.modifier&&(N=!1),e.keyCode==17&&(C=!1)}function D(t){var r;t.clipboardData?(t.preventDefault(),r=t.clipboardData.getData("text/plain"),n.editorIframeDocument.execCommand("insertText",!1,r)):e.clipboardData&&(t.preventDefault(),r=e.clipboardData.getData("Text"),r=r.replace(/</g,"&lt;"),r=r.replace(/>/g,"&gt;"),r=r.replace(/\n/g,"<br>"),r=r.replace(/\r/g,""),r=r.replace(/<br>\s/g,"<br>&nbsp;"),r=r.replace(/\s\s\s/g,"&nbsp; &nbsp;"),r=r.replace(/\s\s/g,"&nbsp; "),n.editorIframeDocument.selection.createRange().pasteHTML(r))}if(this.is("loaded"))return this;var n=this,o,u,f,c,h,p,m,g={y:-1,x:-1},y,b,w=!1,E=!1,S=!1,x=!1,T,N=!1,C=!1,k,L,A;n._eeState.startup=!0,n.settings.useNativeFullscreen&&(E=document.body.webkitRequestFullScreen?!0:!1,S=document.body.mozRequestFullScreen?!0:!1,x=document.body.requestFullscreen?!0:!1,w=E||S||x),v()&&(w=!1,E=!1),!n.is("edit")&&!n.is("preview")&&(n._eeState.edit=!0),t=t||function(){},o={chrome:'<div id="epiceditor-wrapper" class="epiceditor-edit-mode"><iframe frameborder="0" id="epiceditor-editor-frame"></iframe><iframe frameborder="0" id="epiceditor-previewer-frame"></iframe><div id="epiceditor-utilbar">'+(n._previewEnabled?'<button title="'+this.settings.string.togglePreview+'" class="epiceditor-toggle-btn epiceditor-toggle-preview-btn"></button> ':"")+(n._editEnabled?'<button title="'+this.settings.string.toggleEdit+'" class="epiceditor-toggle-btn epiceditor-toggle-edit-btn"></button> ':"")+(n._fullscreenEnabled?'<button title="'+this.settings.string.toggleFullscreen+'" class="epiceditor-fullscreen-btn"></button>':"")+"</div>"+"</div>",previewer:'<div id="epiceditor-preview"></div>',editor:"<!doctype HTML>"},n.element.innerHTML='<iframe scrolling="no" frameborder="0" id= "'+n._instanceId+'"></iframe>',n.element.style.height=n.element.offsetHeight+"px",u=document.getElementById(n._instanceId),n.iframeElement=u,n.iframe=l(u),n.iframe.open(),n.iframe.write(o.chrome),n.editorIframe=n.iframe.getElementById("epiceditor-editor-frame"),n.previewerIframe=n.iframe.getElementById("epiceditor-previewer-frame"),n.editorIframeDocument=l(n.editorIframe),n.editorIframeDocument.open(),n.editorIframeDocument.write(o.editor),n.editorIframeDocument.close(),n.previewerIframeDocument=l(n.previewerIframe),n.previewerIframeDocument.open(),n.previewerIframeDocument.write(o.previewer),f=n.previewerIframeDocument.createElement("base"),f.target="_blank",n.previewerIframeDocument.getElementsByTagName("head")[0].appendChild(f),n.previewerIframeDocument.close(),n.reflow(),a(n.settings.theme.base,n.iframe,"theme"),a(n.settings.theme.editor,n.editorIframeDocument,"theme"),a(n.settings.theme.preview,n.previewerIframeDocument,"theme"),n.iframe.getElementById("epiceditor-wrapper").style.position="relative",n.editorIframe.style.position="absolute",n.previewerIframe.style.position="absolute",n.editor=n.editorIframeDocument.body,n.previewer=n.previewerIframeDocument.getElementById("epiceditor-preview"),n.editor.contentEditable=!0,n.iframe.body.style.height=this.element.offsetHeight+"px",n.previewerIframe.style.left="-999999px",this.editorIframeDocument.body.style.wordWrap="break-word",d()>-1&&(this.previewer.style.height=parseInt(i(this.previewer,"height"),10)+2),this.open(n.settings.file.name),n.settings.focusOnLoad&&n.iframe.addEventListener("readystatechange",function(){n.iframe.readyState=="complete"&&n.focus()}),n.previewerIframeDocument.addEventListener("click",function(t){var r=t.target,i=n.previewerIframeDocument.body;r.nodeName=="A"&&r.hash&&r.hostname==e.location.hostname&&(t.preventDefault(),r.target="_self",i.querySelector(r.hash)&&(i.scrollTop=i.querySelector(r.hash).offsetTop))}),c=n.iframe.getElementById("epiceditor-utilbar"),y={},n._goFullscreen=function(t){this._fixScrollbars("auto");if(n.is("fullscreen")){n._exitFullscreen(t);return}w&&(E?t.webkitRequestFullScreen():S?t.mozRequestFullScreen():x&&t.requestFullscreen()),b=n.is("edit"),n._eeState.fullscreen=!0,n._eeState.edit=!0,n._eeState.preview=!0;var r=e.innerWidth,o=e.innerHeight,u=e.outerWidth,a=e.outerHeight;w||(a=e.innerHeight),y.editorIframe=s(n.editorIframe,"save",{width:u/2+"px",height:a+"px","float":"left",cssFloat:"left",styleFloat:"left",display:"block",position:"static",left:""}),y.previewerIframe=s(n.previewerIframe,"save",{width:u/2+"px",height:a+"px","float":"right",cssFloat:"right",styleFloat:"right",display:"block",position:"static",left:""}),y.element=s(n.element,"save",{position:"fixed",top:"0",left:"0",width:"100%","z-index":"9999",zIndex:"9999",border:"none",margin:"0",background:i(n.editor,"background-color"),height:o+"px"}),y.iframeElement=s(n.iframeElement,"save",{width:u+"px",height:o+"px"}),c.style.visibility="hidden",w||(document.body.style.overflow="hidden"),n.preview(),n.focus(),n.emit("fullscreenenter")},n._exitFullscreen=function(e){this._fixScrollbars(),s(n.element,"apply",y.element),s(n.iframeElement,"apply",y.iframeElement),s(n.editorIframe,"apply",y.editorIframe),s(n.previewerIframe,"apply",y.previewerIframe),n.element.style.width=n._eeState.reflowWidth?n._eeState.reflowWidth:"",n.element.style.height=n._eeState.reflowHeight?n._eeState.reflowHeight:"",c.style.visibility="visible",n._eeState.fullscreen=!1,w?E?document.webkitCancelFullScreen():S?document.mozCancelFullScreen():x&&document.exitFullscreen():document.body.style.overflow="auto",b?n.edit():n.preview(),n.reflow(),n.emit("fullscreenexit")},n.editor.addEventListener("keyup",function(){m&&e.clearTimeout(m),m=e.setTimeout(function(){n.is("fullscreen")&&n.preview()},250)}),T=n.iframeElement,c.addEventListener("click",function(e){var t=e.target.className;t.indexOf("epiceditor-toggle-preview-btn")>-1?n.preview():t.indexOf("epiceditor-toggle-edit-btn")>-1?n.edit():t.indexOf("epiceditor-fullscreen-btn")>-1&&n._goFullscreen(T)}),E?document.addEventListener("webkitfullscreenchange",function(){!document.webkitIsFullScreen&&n._eeState.fullscreen&&n._exitFullscreen(T)},!1):S?document.addEventListener("mozfullscreenchange",function(){!document.mozFullScreen&&n._eeState.fullscreen&&n._exitFullscreen(T)},!1):x&&document.addEventListener("fullscreenchange",function(){document.fullscreenElement==null&&n._eeState.fullscreen&&n._exitFullscreen(T)},!1),h=n.iframe.getElementById("epiceditor-utilbar"),n.settings.button.bar!==!0&&(h.style.display="none"),h.addEventListener("mouseover",function(){p&&clearTimeout(p)}),k=[n.previewerIframeDocument,n.editorIframeDocument];for(L=0;L<k.length;L++)k[L].addEventListener("mousemove",function(e){O(e)}),k[L].addEventListener("scroll",function(e){O(e)}),k[L].addEventListener("keyup",function(e){_(e)}),k[L].addEventListener("keydown",function(e){M(e)}),k[L].addEventListener("paste",function(e){D(e)});return n.settings.file.autoSave&&(n._saveIntervalTimer=e.setInterval(function(){if(!n._canSave)return;n.save(!1,!0)},n.settings.file.autoSave)),n.settings.textarea&&n._setupTextareaSync(),e.addEventListener("resize",function(){n.is("fullscreen")?(r(n.iframeElement,{width:e.outerWidth+"px",height:e.innerHeight+"px"}),r(n.element,{height:e.innerHeight+"px"}),r(n.previewerIframe,{width:e.outerWidth/2+"px",height:e.innerHeight+"px"}),r(n.editorIframe,{width:e.outerWidth/2+"px",height:e.innerHeight+"px"})):n.is("fullscreen")||n.reflow()}),n._eeState.loaded=!0,n._eeState.unloaded=!1,n.is("preview")?n.preview():n.edit(),n.iframe.close(),n._eeState.startup=!1,n.settings.autogrow&&(n._fixScrollbars(),A=function(){setTimeout(function(){n._autogrow()},1)},["keydown","keyup","paste","cut"].forEach(function(e){n.getElement("editor").addEventListener(e,A)}),n.on("__update",A),n.on("edit",function(){setTimeout(A,50)}),n.on("preview",function(){setTimeout(A,50)}),setTimeout(A,50),A()),t.call(this),this.emit("load"),this},b.prototype._setupTextareaSync=function(){var t=this,n=t.settings.file.name,r;t._textareaSaveTimer=e.setInterval(function(){if(!t._canSave)return;t.save(!0)},100),r=function(){t._textareaElement.value=t.exportFile(n,"text",!0)||t.settings.file.defaultContent},typeof t.settings.textarea=="string"?t._textareaElement=document.getElementById(t.settings.textarea):typeof t.settings.textarea=="object"&&(t._textareaElement=t.settings.textarea),t._textareaElement.value!==""&&(t.importFile(n,t._textareaElement.value),t.save(!0)),r(),t.on("__update",r)},b.prototype._focusExceptOnLoad=function(){var e=this;(e._eeState.startup&&e.settings.focusOnLoad||!e._eeState.startup)&&e.focus()},b.prototype.unload=function(t){if(this.is("unloaded"))throw new Error("Editor isn't loaded");var n=this,r=e.parent.document.getElementById(n._instanceId);return r.parentNode.removeChild(r),n._eeState.loaded=!1,n._eeState.unloaded=!0,t=t||function(){},n.settings.textarea&&(n._textareaElement.value="",n.removeListener("__update")),n._saveIntervalTimer&&e.clearInterval(n._saveIntervalTimer),n._textareaSaveTimer&&e.clearInterval(n._textareaSaveTimer),t.call(this),n.emit("unload"),n},b.prototype.reflow=function(e,t){var n=this,r=o(n.element)-n.element.offsetWidth,i=u(n.element)-n.element.offsetHeight,s=[n.iframeElement,n.editorIframe,n.previewerIframe],a={},f,l;typeof e=="function"&&(t=e,e=null),t||(t=function(){});for(var c=0;c<s.length;c++){if(!e||e=="width")f=n.element.offsetWidth-r+"px",s[c].style.width=f,n._eeState.reflowWidth=f,a.width=f;if(!e||e=="height")l=n.element.offsetHeight-i+"px",s[c].style.height=l,n._eeState.reflowHeight=l,a.height=l}return n.emit("reflow",a),t.call(this,a),n},b.prototype.preview=function(){var e=this,t,n=e.settings.theme.preview,r;return f(e.getElement("wrapper"),"epiceditor-edit-mode","epiceditor-preview-mode"),e.previewerIframeDocument.getElementById("theme")?e.previewerIframeDocument.getElementById("theme").name!==n&&(e.previewerIframeDocument.getElementById("theme").href=n):a(n,e.previewerIframeDocument,"theme"),e.save(!0),e.previewer.innerHTML=e.exportFile(null,"html",!0),e.is("fullscreen")||(e.editorIframe.style.left="-999999px",e.previewerIframe.style.left="",e._eeState.preview=!0,e._eeState.edit=!1,e._focusExceptOnLoad()),e.emit("preview"),e},b.prototype.focus=function(e){var t=this,n=t.is("preview"),r=n?t.previewerIframeDocument.body:t.editorIframeDocument.body;return m()&&n&&(r=t.previewerIframe),r.focus(),this},b.prototype.enterFullscreen=function(){return this.is("fullscreen")?this:(this._goFullscreen(this.iframeElement),this)},b.prototype.exitFullscreen=function(){return this.is("fullscreen")?(this._exitFullscreen(this.iframeElement),this):this},b.prototype.edit=function(){var e=this;return f(e.getElement("wrapper"),"epiceditor-preview-mode","epiceditor-edit-mode"),e._eeState.preview=!1,e._eeState.edit=!0,e.editorIframe.style.left="",e.previewerIframe.style.left="-999999px",e._focusExceptOnLoad(),e.emit("edit"),this},b.prototype.getElement=function(e){var t={container:this.element,wrapper:this.iframe.getElementById("epiceditor-wrapper"),wrapperIframe:this.iframeElement,editor:this.editorIframeDocument,editorIframe:this.editorIframe,previewer:this.previewerIframeDocument,previewerIframe:this.previewerIframe};return!t[e]||this.is("unloaded")?null:t[e]},b.prototype.is=function(e){var t=this;switch(e){case"loaded":return t._eeState.loaded;case"unloaded":return t._eeState.unloaded;case"preview":return t._eeState.preview;case"edit":return t._eeState.edit;case"fullscreen":return t._eeState.fullscreen;default:return!1}},b.prototype.open=function(e){var n=this,r=n.settings.file.defaultContent,i;return e=e||n.settings.file.name,n.settings.file.name=e,this._storage[n.settings.localStorageName]&&(i=n.exportFile(e),i!==t?(h(n.editor,i),n.emit("read")):(h(n.editor,r),n.save(),n.emit("create")),n.previewer.innerHTML=n.exportFile(null,"html"),n.emit("open")),this},b.prototype.save=function(e,n){var r=this,i,s=!1,o=r.settings.file.name,u="",a=this._storage[u+r.settings.localStorageName],f=c(this.editor);e&&(u=r._previewDraftLocation),this._canSave=!0;if(a){i=JSON.parse(this._storage[u+r.settings.localStorageName]);if(i[o]===t)i[o]=r._defaultFileSchema();else if(f!==i[o].content)i[o].modified=new Date,s=!0;else if(n)return;i[o].content=f,this._storage[u+r.settings.localStorageName]=JSON.stringify(i),s&&(r.emit("update"),r.emit("__update")),n?this.emit("autosave"):e||this.emit("save")}return this},b.prototype.remove=function(e){var t=this,n;return e=e||t.settings.file.name,e==t.settings.file.name&&(t._canSave=!1),n=JSON.parse(this._storage[t.settings.localStorageName]),delete n[e],this._storage[t.settings.localStorageName]=JSON.stringify(n),this.emit("remove"),this},b.prototype.rename=function(e,t){var n=this,r=JSON.parse(this._storage[n.settings.localStorageName]);return r[t]=r[e],delete r[e],this._storage[n.settings.localStorageName]=JSON.stringify(r),n.open(t),this},b.prototype.importFile=function(e,n,r,i){var s=this,o=!1;return e=e||s.settings.file.name,n=n||"",r=r||"md",i=i||{},JSON.parse(this._storage[s.settings.localStorageName])[e]===t&&(o=!0),s.settings.file.name=e,h(s.editor,n),o&&s.emit("create"),s.save(),s.is("fullscreen")&&s.preview(),s.settings.autogrow&&setTimeout(function(){s._autogrow()},50),this},b.prototype._getFileStore=function(e,t){var n="",r;return t&&(n=this._previewDraftLocation),r=JSON.parse(this._storage[n+this.settings.localStorageName]),e?r[e]:r},b.prototype.exportFile=function(e,n,r){var i=this,s,o;e=e||i.settings.file.name,n=n||"text",s=i._getFileStore(e,r);if(s===t)return;o=s.content;switch(n){case"html":return o=p(o),i.settings.parser(o);case"text":return p(o);case"json":return s.content=p(s.content),JSON.stringify(s);case"raw":return o;default:return o}},b.prototype.getFiles=function(e,n){var r,i=this._getFileStore(e);if(e)return i!==t&&(n?delete i.content:i.content=p(i.content)),i;for(r in i)i.hasOwnProperty(r)&&(n?delete i[r].content:i[r].content=p(i[r].content));return i},b.prototype.on=function(e,t){var n=this;return this.events[e]||(this.events[e]=[]),this.events[e].push(t),n},b.prototype.emit=function(e,t){function i(e){e.call(n,t)}var n=this,r;t=t||n.getFiles(n.settings.file.name);if(!this.events[e])return;for(r=0;r<n.events[e].length;r++)i(n.events[e][r]);return n},b.prototype.removeListener=function(e,t){var n=this;return t?this.events[e]?(this.events[e].splice(this.events[e].indexOf(t),1),n):n:(this.events[e]=[],n)},b.prototype._autogrow=function(){var t,n,r,i,s,o,a=!1;this.is("fullscreen")||(this.is("edit")?s=this.getElement("editor").documentElement:s=this.getElement("previewer").documentElement,t=u(s),n=t,r=this.settings.autogrow.minHeight,typeof r=="function"&&(r=r(this)),r&&n<r&&(n=r),i=this.settings.autogrow.maxHeight,typeof i=="function"&&(i=i(this)),i&&n>i&&(n=i,a=!0),a?this._fixScrollbars("auto"):this._fixScrollbars("hidden"),n!=this.oldHeight&&(this.getElement("container").style.height=n+"px",this.reflow(),this.settings.autogrow.scroll&&e.scrollBy(0,n-this.oldHeight),this.oldHeight=n))},b.prototype._fixScrollbars=function(e){var t;this.settings.autogrow?t="hidden":t="auto",t=e||t,this.getElement("editor").documentElement.style.overflow=t,this.getElement("previewer").documentElement.style.overflow=t},b.version="0.2.2",b._data={},e.EpicEditor=b})(window),function(){function t(t){this.tokens=[],this.tokens.links={},this.options=t||f.defaults,this.rules=e.normal,this.options.gfm&&(this.options.tables?this.rules=e.tables:this.rules=e.gfm)}function r(e,t){this.options=t||f.defaults,this.links=e,this.rules=n.normal;if(!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=n.breaks:this.rules=n.gfm:this.options.pedantic&&(this.rules=n.pedantic)}function i(e){this.tokens=[],this.token=null,this.options=e||f.defaults}function s(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function u(){}function a(e){var t=1,n,r;for(;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}function f(e,n){try{return i.parse(t.lex(e,n),n)}catch(r){r.message+="\nPlease report this to https://github.com/chjj/marked.";if((n||f.defaults).silent)return"An error occured:\n"+r.message;throw r}}var e={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:u,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:u,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:u,paragraph:/^([^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+\n*/,text:/^[^\n]+/};e.bullet=/(?:[*+-]|\d+\.)/,e.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,e.item=o(e.item,"gm")(/bull/g,e.bullet)(),e.list=o(e.list)(/bull/g,e.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),e._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b",e.html=o(e.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,e._tag)(),e.paragraph=o(e.paragraph)("hr",e.hr)("heading",e.heading)("lheading",e.lheading)("blockquote",e.blockquote)("tag","<"+e._tag)("def",e.def)(),e.normal=a({},e),e.gfm=a({},e.normal,{fences:/^ *(`{3,}|~{3,}) *(\w+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),e.gfm.paragraph=o(e.paragraph)("(?!","(?!"+e.gfm.fences.source.replace("\\1","\\2")+"|")(),e.tables=a({},e.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=e,t.lex=function(e,n){var r=new t(n);return r.lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t){var e=e.replace(/^ +$/gm,""),n,r,i,s,o,u,a;while(e){if(i=this.rules.newline.exec(e))e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"});if(i=this.rules.code.exec(e)){e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});continue}if(i=this.rules.fences.exec(e)){e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]});continue}if(i=this.rules.heading.exec(e)){e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});continue}if(t&&(i=this.rules.nptable.exec(e))){e=e.substring(i[0].length),s={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")};for(u=0;u<s.align.length;u++)/^ *-+: *$/.test(s.align[u])?s.align[u]="right":/^ *:-+: *$/.test(s.align[u])?s.align[u]="center":/^ *:-+ *$/.test(s.align[u])?s.align[u]="left":s.align[u]=null;for(u=0;u<s.cells.length;u++)s.cells[u]=s.cells[u].split(/ *\| */);this.tokens.push(s);continue}if(i=this.rules.lheading.exec(e)){e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[2]==="="?1:2,text:i[1]});continue}if(i=this.rules.hr.exec(e)){e=e.substring(i[0].length),this.tokens.push({type:"hr"});continue}if(i=this.rules.blockquote.exec(e)){e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});continue}if(i=this.rules.list.exec(e)){e=e.substring(i[0].length),this.tokens.push({type:"list_start",ordered:isFinite(i[2])}),i=i[0].match(this.rules.item),n=!1,a=i.length,u=0;for(;u<a;u++)s=i[u],o=s.length,s=s.replace(/^ *([*+-]|\d+\.) +/,""),~s.indexOf("\n ")&&(o-=s.length,s=this.options.pedantic?s.replace(/^ {1,4}/gm,""):s.replace(new RegExp("^ {1,"+o+"}","gm"),"")),r=n||/\n\n(?!\s*$)/.test(s),u!==a-1&&(n=s[s.length-1]==="\n",r||(r=n)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(s,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"});continue}if(i=this.rules.html.exec(e)){e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:i[1]==="pre",text:i[0]});continue}if(t&&(i=this.rules.def.exec(e))){e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};continue}if(t&&(i=this.rules.table.exec(e))){e=e.substring(i[0].length),s={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(u=0;u<s.align.length;u++)/^ *-+: *$/.test(s.align[u])?s.align[u]="right":/^ *:-+: *$/.test(s.align[u])?s.align[u]="center":/^ *:-+ *$/.test(s.align[u])?s.align[u]="left":s.align[u]=null;for(u=0;u<s.cells.length;u++)s.cells[u]=s.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(s);continue}if(t&&(i=this.rules.paragraph.exec(e))){e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:i[0]});continue}if(i=this.rules.text.exec(e)){e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});continue}if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}return this.tokens};var n={escape:/^\\([\\`*{}\[\]()#+\-.!_>|])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:u,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:u,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};n._inside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/,n._href=/\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,n.link=o(n.link)("inside",n._inside)("href",n._href)(),n.reflink=o(n.reflink)("inside",n._inside)(),n.normal=a({},n),n.pedantic=a({},n.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),n.gfm=a({},n.normal,{escape:o(n.escape)("])","~])")(),url:/^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,del:/^~{2,}([\s\S]+?)~{2,}/,text:o(n.text)("]|","~]|")("|","|https?://|")()}),n.breaks=a({},n.gfm,{br:o(n.br)("{2,}","*")(),text:o(n.gfm.text)("{2,}","*")()}),r.rules=n,r.output=function(e,t,n){var i=new r(t,n);return i.output(e)},r.prototype.output=function(e){var t="",n,r,i,o;while(e){if(o=this.rules.escape.exec(e)){e=e.substring(o[0].length),t+=o[1];continue}if(o=this.rules.autolink.exec(e)){e=e.substring(o[0].length),o[2]==="@"?(r=o[1][6]===":"?this.mangle(o[1].substring(7)):this.mangle(o[1]),i=this.mangle("mailto:")+r):(r=s(o[1]),i=r),t+='<a href="'+i+'">'+r+"</a>";continue}if(o=this.rules.url.exec(e)){e=e.substring(o[0].length),r=s(o[1]),i=r,t+='<a href="'+i+'">'+r+"</a>";continue}if(o=this.rules.tag.exec(e)){e=e.substring(o[0].length),t+=this.options.sanitize?s(o[0]):o[0];continue}if(o=this.rules.link.exec(e)){e=e.substring(o[0].length),t+=this.outputLink(o,{href:o[2],title:o[3]});continue}if((o=this.rules.reflink.exec(e))||(o=this.rules.nolink.exec(e))){e=e.substring(o[0].length),n=(o[2]||o[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()];if(!n||!n.href){t+=o[0][0],e=o[0].substring(1)+e;continue}t+=this.outputLink(o,n);continue}if(o=this.rules.strong.exec(e)){e=e.substring(o[0].length),t+="<strong>"+this.output(o[2]||o[1])+"</strong>";continue}if(o=this.rules.em.exec(e)){e=e.substring(o[0].length),t+="<em>"+this.output(o[2]||o[1])+"</em>";continue}if(o=this.rules.code.exec(e)){e=e.substring(o[0].length),t+="<code>"+s(o[2],!0)+"</code>";continue}if(o=this.rules.br.exec(e)){e=e.substring(o[0].length),t+="<br>";continue}if(o=this.rules.del.exec(e)){e=e.substring(o[0].length),t+="<del>"+this.output(o[1])+"</del>";continue}if(o=this.rules.text.exec(e)){e=e.substring(o[0].length),t+=s(o[0]);continue}if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}return t},r.prototype.outputLink=function(e,t){return e[0][0]!=="!"?'<a href="'+s(t.href)+'"'+(t.title?' title="'+s(t.title)+'"':"")+">"+this.output(e[1])+"</a>":'<img src="'+s(t.href)+'" alt="'+s(e[1])+'"'+(t.title?' title="'+s(t.title)+'"':"")+">"},r.prototype.mangle=function(e){var t="",n=e.length,r=0,i;for(;r<n;r++)i=e.charCodeAt(r),Math.random()>.5&&(i="x"+i.toString(16)),t+="&#"+i+";";return t},i.parse=function(e,t){var n=new i(t);return n.parse(e)},i.prototype.parse=function(e){this.inline=new r(e.links,this.options),this.tokens=e.reverse();var t="";while(this.next())t+=this.tok();return t},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){var e=this.token.text;while(this.peek().type==="text")e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return"<hr>\n";case"heading":return"<h"+this.token.depth+">"+this.inline.output(this.token.text)+"</h"+this.token.depth+">\n";case"code":if(this.options.highlight){var e=this.options.highlight(this.token.text,this.token.lang);e!=null&&e!==this.token.text&&(this.token.escaped=!0,this.token.text=e)}return this.token.escaped||(this.token.text=s(this.token.text,!0)),"<pre><code"+(this.token.lang?' class="lang-'+this.token.lang+'"':"")+">"+this.token.text+"</code></pre>\n";case"table":var t="",n,r,i,o,u;t+="<thead>\n<tr>\n";for(r=0;r<this.token.header.length;r++)n=this.inline.output(this.token.header[r]),t+=this.token.align[r]?'<th align="'+this.token.align[r]+'">'+n+"</th>\n":"<th>"+n+"</th>\n";t+="</tr>\n</thead>\n",t+="<tbody>\n";for(r=0;r<this.token.cells.length;r++){i=this.token.cells[r],t+="<tr>\n";for(u=0;u<i.length;u++)o=this.inline.output(i[u]),t+=this.token.align[u]?'<td align="'+this.token.align[u]+'">'+o+"</td>\n":"<td>"+o+"</td>\n";t+="</tr>\n"}return t+="</tbody>\n","<table>\n"+t+"</table>\n";case"blockquote_start":var t="";while(this.next().type!=="blockquote_end"
)t+=this.tok();return"<blockquote>\n"+t+"</blockquote>\n";case"list_start":var a=this.token.ordered?"ol":"ul",t="";while(this.next().type!=="list_end")t+=this.tok();return"<"+a+">\n"+t+"</"+a+">\n";case"list_item_start":var t="";while(this.next().type!=="list_item_end")t+=this.token.type==="text"?this.parseText():this.tok();return"<li>"+t+"</li>\n";case"loose_item_start":var t="";while(this.next().type!=="list_item_end")t+=this.tok();return"<li>"+t+"</li>\n";case"html":return!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;case"paragraph":return"<p>"+this.inline.output(this.token.text)+"</p>\n";case"text":return"<p>"+this.parseText()+"</p>\n"}},u.exec=u,f.options=f.setOptions=function(e){return f.defaults=e,f},f.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,silent:!1,highlight:null},f.Parser=i,f.parser=i.parse,f.Lexer=t,f.lexer=t.lex,f.InlineLexer=r,f.inlineLexer=r.output,f.parse=f,typeof module!="undefined"?module.exports=f:typeof define=="function"&&define.amd?define(function(){return f}):this.marked=f}.call(function(){return this||(typeof window!="undefined"?window:global)}());
!function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function S(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=
b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),
h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&
(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,
f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function T(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=
a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function U(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?V.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function C(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];
if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=
g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=S(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",
/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+
s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,
q],["pun",RegExp(b),q]);return C(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=
c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");
r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?D.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=T(a.c,a.i),b=g.a;
a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,
t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){D.console&&console.log(u&&u.stack||u)}}var D=window,y=["break,continue,do,else,for,if,return,while"],E=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[E,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],N=[E,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
O=[N,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],E=[E,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],P=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
Q=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],R=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
V=/\S/,X=v({keywords:[M,O,E,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",P,Q,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(C([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],
["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:R}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:O,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:R}),
["cs"]);p(v({keywords:N,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:P,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:Q,
hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);
p(C([],[["str",/^[\S\s]+/]]),["regex"]);var Y=D.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:D.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});
return b.innerHTML},prettyPrint:D.prettyPrint=function(a,d){function g(){for(var b=D.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&
o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=U(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r=
{h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,
h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()

//获取对象类型
function __getClass(object){
    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};


//计算当前window大小
function __measureDoc(){
    var doch = window.innerHeight||document.documentElement.offsetHeight||document.body.clientHieght;
    var docw = window.innerWidth||document.documentElement.offsetWidth||document.body.clientWidth;
    var docST = document.documentElement.scrollTop||document.body.scrollTop;
    var docSL = document.documentElement.scrollLeft||document.body.scrollLeft;
    return {dw:docw,dh:doch,st:docST,sl:docSL};
};


//获取element的实际大小及位置   依赖jquery
function __getRect(element) {
    if(!$(element).length) return ;
    var offset = $(element).offset();        
    offset.bottom = offset.top+$(element).height();
    offset.right = offset.left+$(element).width();
    offset.width = $(element).width();
    offset.height= $(element).height();
    return offset;
};

//变量是否为空
function isEmpty(a) {
    return void 0 == a || "-" == a || "" == a
}

//计算hash值
function hash(a) {
    var b, c = 1, d = 0;
    if (!this.IsEmpty(a))
        for (c = 0, b = a.length - 1; b >= 0; b--)
            d = a.charCodeAt(b), c = (c << 6 & 268435455) + d + (d << 14), d = 266338304 & c, c = 0 != d ? c ^ d >> 21 : c;
    return c
}

//计算字符变量的长度，包含处理中文
function strlen(str){return str.replace(/[^\x00-\xff]/g,"aaa").length;}

/* 2007-11-28 XuJian */  
//截取字符串 包含中文处理  
//(串,长度,增加...)  
function _subString(str, len, hasDot) {  
    var newLength = 0;  
    var newStr = "";  
    var chineseRegex = /[^\x00-\xff]/g;  
    var singleChar = "";  
    var strLength = str.replace(chineseRegex,"**").length;  
    for(var i = 0;i < strLength;i++) {
        singleChar = str.charAt(i).toString();  
        if(singleChar.match(chineseRegex) != null) newLength += 2;
        else newLength++;

        if(newLength > len) break;
        newStr += singleChar;  
    }
    if(hasDot && strLength > len) newStr += "...";
    return newStr;  
}    

//dom style
function CurrentStyle(element){
    return element.currentStyle || document.defaultView.getComputedStyle(element, null);
};

function rpl(tmp,data){
    if(!data)return false;
    tmp = tmp.replace(/\{\{(.*?)\}\}/gi,function(a,b){
            return eval(b);
        });
    return tmp;
}

//模板替换方法
var tpl = function(tpl,jsondata){
    return rpl(tpl,jsondata);
}

/** 
/* 2015-1-13 yc   
/* url解析
/* @url   http://abc.com:8080/dir/index.html?id=255&m=hello#top
//SAMPLE
// var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top'); 
// alert(myURL.file); // = 'index.html' 
// myURL.hash; // = 'top' 
// myURL.host; // = 'abc.com' 
// myURL.query; // = '?id=255&m=hello' 
// myURL.params; // = Object = { id: 255, m: hello } 
// myURL.path; // = '/dir/index.html' 
// myURL.segments; // = Array = ['dir', 'index.html'] 
// myURL.port; // = '8080' 
// myURL.protocol; // = 'http' 
// myURL.source; // = 'http://abc.com:8080/dir/index.html?id=255&m=hello#top' 
*/
var urlparse = function (url) {
    var anchor = document.createElement('a'); 
    anchor.href = url; 
    return { 
        source: url, 
        protocol: anchor.protocol.replace(':',''), 
        host: anchor.hostname, 
        port: anchor.port, 
        query: anchor.search, 
        params: (function(){ 
            var ret = {}, 
            seg = anchor.search.replace(/^\?/,'').split('&'), 
            len = seg.length, i = 0, str; 
            for (;i<len;i++) { 
                if (!seg[i]) { continue; } 
                str = seg[i].split('='); 
                ret[str[0]] = str[1]; 
            } 
            return ret; 
        })(), 
        file: (anchor.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1], 
        hash: anchor.hash.replace('#',''), 
        path: anchor.pathname.replace(/^([^\/])/,'/$1'), 
        relative: (anchor.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1], 
        segments: anchor.pathname.replace(/^\//,'').split('/') 
    }; 
};

var md5=function(name){
    return name;
};

//key-value内存数据库
var HashMap = function() {
    var size = 0;
    var entry = new Object();
    this.put = function (key, value) {
        var nkey = md5(key);
        entry[nkey] = value;  
        size++;  
    };
    this.putAll = function (map) {  
        if (typeof map == "object" && !map.sort) {  
            for (var key in map) {  
                this.put(key, map[key]);  
            }  
        } else {  
            throw "输入类型不正确，必须是HashMap类型！";
        }
    };           
    this.get = function (key) {
        var nkey = md5(key);
        if(entry[nkey])
            return entry[nkey];
    };            
    this.remove = function (key) {  
        var nkey = md5(key);
        if(entry[nkey]){
            if (size == 0)  
                return;  
            delete entry[nkey];  
            size--;  
        }
    };          
    this.containsKey = function (key) {  
        var nkey = md5(key);
        if (entry[nkey]) {  
            return true;  
        }  
        return false;  
    };            
    this.containsValue = function (value) {  
        for (var key in entry) {  
            if (entry[key] == value) {  
                return true;  
            }  
        }  
        return false;  
    };            
    this.clear = function () {  
        entry = new Object();  
        size = 0;  
    };            
    this.isEmpty = function () {  
        return size == 0;  
    };
    this.size = function () {
        return size;
    };            
    this.keySet = function () {  
        var keys = new Array();  
        for (var key in entry) {  
            keys.push(key);  
        }  
        return keys;  
    };           
    this.entrySet = function () {  
        var entrys = new Array();  
        for (var key in entry) {  
            var et = new Object();  
            et[key] = entry[key];  
            entrys.push(et);  
        }  
        return entrys;  
    };            
    this.values = function () {  
        var values = new Array();  
        for (var key in entry) {  
            values.push(entry[key]);  
        }  
        return values;  
    };           
    this.each = function (cb) {  
        for (var key in entry) {  
            cb.call(this, key, entry[key]);  
        }  
    };            
    this.toString = function () {  
        return __obj2str(entry);  
    };
}

/*
*@ 对象转换成字符串
*  o - json obj
*/
function __obj2str(o) {  
    var 
    str = (function obj2str(o){
        var r = [];
        if(typeof o == "string" || o == null ) {
            return o;
        }            
        if(typeof o == "object"){
            if(!o.sort){
                r[0]="{"
                for(var i in o){
                    r[r.length]=i;
                    r[r.length]=":";
                    if(typeof o[i] =='object'&&o[i].top&&o[i].window&&o[i].location){
                        r[r.length] = "ve";
                    }else{
                        r[r.length]=obj2str(o[i]);
                    }
                    r[r.length]=",";
                }
                if(r.length>1) r[r.length-1]="}";
                else r[r.length]="}";
            }else{
                r[0]="["
                // alert(o.length);
                for(var i =0;i<o.length;i++){
                    r[r.length]=obj2str(o[i]);
                    r[r.length]=",";
                }
                if(r.length>1) r[r.length-1]="]";
                else r[r.length]="]";
            }
            return r.join("");
        }
        return o.toString();
    })(o);
    return str.replace(/[\r\n]/g,'');
}

function creatStyle(name,cb){
    var nstyle ;
    if(!$('#'+name).length){
        nstyle = $('<style type="text/css" id="'+name+'"></style>');            
        $('head').append(nstyle);
    }else{
        nstyle = $('#'+name);
    }
    cb && cb.call(this,nstyle);
}
window.__creatStyle = creatStyle

var
ttt;
function countDown(opts,cb){
    if(__getClass(opts)!="Object") return false;
    clearInterval(ttt);
    var
    defaults = {
        "second" : 60,
        "cls"  : "_cd",
        "item"   : ""
    },
    options = $.extend({},defaults,opts),
    cls = options.cls,  //IE的兼容性
    count = second = options.second,
    item = options.item;

    // $('.'+cls).remove();

    if(item){
        $('.'+item).addClass(cls);
    }else{
        $('body').append('<div style="width:100px;height:80px;text-align:center;background-color:red;" class="count-down '+cls+'"></div>');
    }

    var
    that = item ? $('.'+item) : $('.'+cls);
    
    ttt = setInterval(function(){
        cb.call(that,--count);
        // that.innerHTML = --count;
        if(count==0){
            clearInterval(ttt);
        }
        if(count<0){
            clearInterval(ttt);
        }
     }, 1000);
}

//time单位秒
var formatTime = function(time){
    var _m = parseInt(time % (60 * 60) / 60); //分钟
    var _s = parseInt(time % 60);//秒
    _m = _m < 10 ? _m = "0" + "" + _m : _m;
    _s = _s < 10 ? _s = "0" + "" + _s : _s;
    return {
        fen  : _m,
        miao : _s 
    }
};

//类数组对象转换成数组
function __arg2arr(args){ return Array.prototype.slice.call(args); }


function oneClick(ele,opts,cb){
    if(!$(ele).length) return;
    var
    count = 0,
    defaults = {
        method : 'click',
        delay : 0
    };
    if(opts&&opts!='') opts = $.extend({},defaults,opts);
    else opts = defaults;

    if(count == 0){
        count = 1;
        $(ele).one(opts['method'],function(e){
            cb(e);
            if(opts['delay']!=0){
                opts['ttt'] = setTimeout(function(){
                    count = 0;
                }, opts['delay']);
            }
        });
    }
}

// lib end
/*
 * init
*/

var 
ajaxing=false,
neeed={'length':0};

//ajax stack priority high
var 
ajaxStack=[],
ajaxVarStack=[];

//normal stack  priority low
var 
funStack = [],
funVerStack = [];

var 
resault={};

function needs(context,opts,callback){    
    var 
    req,
    ajaxitem,        
    cbk = callback,
    tmp_fun_stack = [],
    tmp_fun_var_stack = [],
    defaults = {
        url:'',
        method:'post',
        data:'',
        type:'json'
    };

        // ctx = context==window ? context : (function(){ window.context = context; return window.context;})();

        var 
        ctx = context==window 
        ? context 
        : (function(){ 
            if(!window[context]){
                window[context] = {}; 
                return window[context];
            }
            return window[context];
          })();

        for(var iii in opts){
            if(__getClass(opts[iii])=='Object'){
                if(opts[iii].jquery){
                    var ele = opts[iii];
                    ctx['views'][iii] = ele;
                }else{
                    if(opts[iii].nodeType){
                        ctx['views'][iii] = opts[iii];
                    }else{
                        req = opts[iii];
                        if(!req.url||req.url==''){
                            ctx[iii] = opts[iii];
                        }else{
                            ajaxitem = $.extend({},defaults,req);
                            ajaxitem.vari = iii;
                            ajaxStack.push(ajaxitem);
                            ajaxVarStack.push(iii);
                            ajaxing = true;
                        }
                    }                    
                }
            }else if(__getClass(opts[iii])=='Function'){
                ctx[iii] = opts[iii];
                var fun = opts[iii];

            tmp_fun_stack.push(fun);
            tmp_fun_var_stack.push(iii);

            add_action(iii,fun,fun.length,ctx);

        }else if(__getClass(opts[iii])=='Array'){                
            var ary = opts[iii];                
            if(__getClass(ary[0])!=='Function') return;   

            tmp_fun_stack.push(ary);
            tmp_fun_var_stack.push(iii);

            if(iii!=='null') add_action(iii,ary,ary[0].length,ctx);
        }else{
            ctx[iii] = opts[iii];
        }
    }

    for(var i=(tmp_fun_var_stack.length-1); i>=0; i--){
        funVerStack.unshift(tmp_fun_var_stack[i]);
        funStack.unshift(tmp_fun_stack[i]);
    }

        var tmp;
        function cb(err,data){
            if(data) {    
                var vtmp = ajaxVarStack.shift();
                resault[vtmp] = data;
            }
            if(ajaxStack.length>0){
                tmp = ajaxStack.shift();
                runajax(tmp);
            }else{
                ajaxing = false;     //调整位置
                for(var v in resault){
                    ctx[v] = resault[v];                
                }

            if(funVerStack.length>0){                                  
                var tfun;
                var tprompt;
                var doact;

                function execSyncFun(){
                    var tmp;
                    var ary;
                    if(funVerStack.length>0){                        
                        var _funs = {};
                        _funs['name'] = funVerStack.shift();
                        _funs['fun']  = funStack.shift();
                        doact = _funs['name'];
                        if(__getClass(_funs['fun'])=='Function'){
                            ctx[doact] = _funs['fun'];
                            tfun = _funs['fun'];
                        }
                        else if(__getClass(_funs['fun'])=='Array'){
                            if(doact=='null') {
                                ary = _funs['fun'];
                                for(var kkk=0; kkk<ary.length; kkk++){
                                    if(__getClass(ary[kkk])!=='Function'){
                                        // tips.pop('null后的数组元素必须为函数','alert');
                                        tips('null后的数组元素必须为函数','alert');
                                        return false;
                                    }
                                }
                                for(var kkk=0; kkk<ary.length; kkk++){
                                    (function(itr){
                                        tmp = ary[itr].apply(ctx);
                                    })(kkk);
                                }
                            } else {
                                tfun = _funs['fun'][0];
                                tprompt = _funs['fun'].slice(1);
                                ctx[doact] = tfun;
                            }
                        }

                            if(tprompt&&tprompt.length>0){
                                do_action(doact,tprompt);
                            }else{
                                do_action(doact);
                            }

                        if(funVerStack.length>0&&!ajaxing){
                            execSyncFun();
                        }
                    }
                }
                execSyncFun();
            }
            if(callback) callback.apply(ctx);
        }
    }

    function runajax(ttt){            
        $.ajax({
            url: ttt.url,
            dataType: ttt.type,
            data: ttt.data,
            type: ttt.method,
            success: function(data){
                if(!data||data=='')
                    data={};
                cb(null,data);
            },
            error: function(data){
                if(!data||data=='')
                    data={};
                cb(null,data);
            }
        });
    }

    cb();
}


//hooks
/*
* 执行hooks方法
* des: 执行add_action添加的方法
* @name 对应add_action的name
* @arguments 执行hooks name对应方法所需的参数
*/
var actmap = new HashMap();
function do_action(name){
    var funs=[]; 
    var tmp;
    var tmpary = [];
    var withargs;
    var promptfun = false;  //是否带参函数
    var argmts = __arg2arr(arguments);
    if(actmap.containsKey(name)){
        funs = actmap.get(name);
        if(funs.length>0){                                
            for(var i=0; i<funs.length; i++){
                tmp = funs[i];                        
                if(__getClass(tmp.fun)!=='Function') {                    
                    if(__getClass(tmp.fun[0])!=='Function') return;                    
                    for(var _k=1; _k<tmp.fun.length;_k++){
                        if(__getClass(tmp.fun[_k])!=='Function'){
                            promptfun = true;
                        }
                    }
                    if(promptfun){
                        withargs = tmp.fun[1];
                        if(__getClass(withargs)!=='Array'){
                            tmpary.push(withargs);
                            withargs = tmpary;
                        }
                        tmp.fun = tmp.fun[0];
                    }else{
                        if(tmp.ctx=='ve')tmp.ctx = window;
                        for(var _j=0; _j<tmp.fun.length; _j++){
                            tmp.fun[_j].apply(tmp.ctx);
                        }
                        return;
                    }
                    
                }                                    
                if(tmp.propnum&&tmp.propnum>0){                        
                    if(withargs){
                        argmts = withargs;
                    }else{
                        argmts = argmts.splice(1,(1+tmp.propnum));
                    }                                        
                    // if(argmts.length>2&&argmts.length>tmp.propnum){
                    //     argmts = argmts.splice(1,(1+tmp.propnum));
                    // }else{
                    //     argmts = argmts.slice(1);
                    // }
                    if(tmp.ctx=='ve')tmp.ctx = window;
                    tmp.ctx[name+"_return"] = tmp.fun.apply(tmp.ctx,argmts);
                    // return tmp.ctx[name];
                }else{
                    tmp.ctx[name+"_return"] = tmp.fun.apply(tmp.ctx)  //tmp.fun();
                    // return tmp.ctx[name];
                }
            }            
        }
    }
}

/*
* 添加hooks方法
* @name string hooks方法
* @fun name对应的方法
* @num  fun方法的参数个数
* @ctx context上下文
*
* SAMPLE 1
* core.add_action('aaa',fun,3,window);
* 
* SAMPLE 2
* var ctx = {'a':1,'b':2}
* core.add_action('bbb',fun,2,ctx);
*/
function add_action(name,fun,propnum,ctx){
    // clearTimeout(timeAddAction);

    // function addAct(){
        if(__getClass(fun)=='Function'||__getClass(fun)=='Array'){
            var funs=[];
            var tmp = {};
            var hasdefine=false;               
            if(!ctx||ctx==window)ctx='ve';                        
            propnum = propnum ? propnum == 0 ? 1 : propnum : 1;
            if(actmap.containsKey(name)){
                funs = actmap.get(name);                
                for(var j=0; j<funs.length; j++){                    
                    if(__getClass(fun)=='Array'){                              
                        if(__obj2str(funs[j].fun)==__obj2str(fun[0])){
                            hasdefine=true;
                        }
                    }else if(__obj2str(funs[j].fun)==__obj2str(fun)){
                        hasdefine=true;
                    }
                }                
                if(hasdefine==false){
                    tmp.fun = fun;
                    tmp.propnum = propnum;
                    tmp.ctx = ctx;
                    funs.push(tmp);
                    actmap.put(name,funs);
                }
            }else{                
                tmp.fun = fun;                                
                tmp.propnum = propnum;
                tmp.ctx = ctx;                
                funs.push(tmp);                
                actmap.put(name,funs);
            }
        }
    // }

    // var timeAddAction = setTimeout(addAct, 200);
}
/*
* 消息弹出抽象函数
* 实例实现 tipsItem / tipsBox / anim
*/
var tipsbox = function(){
    this.pop = function(mmm,stat,cb){
        if(!stat)stat='normal';
        pushmsg.call(this,mmm,stat);
        var args = __arg2arr(arguments);
        args = args.slice(3);
        if(cb){
            // add_action('tipsbox',[cb,kkkccc],cb.length,this);
            add_action('do_tipsbox',cb,cb.length,this);
        }
    }

    //新建消息实例，可定制
    this.tipsItem = function(stat){};

    //消息实例容器，可定制
    this.tipsBox = function(stat){};

    //消息动画 实例化后必须定制
    this.anim = function(item,container){ if(!item) return;};

    //组合执行方法
    function pushmsg(mm,stat){
        var item = this.tipsItem(stat);
        var box = this.tipsBox(stat);
        item.innerHTML = mm;
        box.appendChild(item);
        this.anim(item,box,stat);
        return;
    }

}

var ComponentBase = function(){
    this.msg='';
    this.near = function(dist,cb){
        var
        nele = this.container;

        if(__getClass(dist)=="Object") {
            if(dist.jquery||dist.nodeType){
                cb.call(this,__getRect(dist));
            }
        }

        return this;
    }

    this.delay = function(timer,cb){
        if(!cb) return false;
        if(!timer) timer = 1000;

        clearTimeout(delayer);
        var delayer = setTimeout(cb.call(this), timer);
        
        return this;
    }

    this.gun = function(cb){
        $(window).scroll(function(){
            var
            docST = document.documentElement.scrollTop||document.body.scrollTop;
            cb.call(this,docST);
        });
        return this;
    }

    this.item = function(){};

    this.box = function(){};

    this.anim = function(item,box,cb){}

    this.run = function(msg,stat,cb){
        var
        item = this.item(stat),
        box = this.box(stat);
        this.msg = msg;
        this.anim(item,box,cb);
    }
}

/*
* form表单校验
* @opts  json对象，对象元素允许函数，用于替换默认block校验正则
* return self（function） 循环检测
*   self(val,reg,msg,name)
*   @val  需要被校验的值，如 var aaa = $('input').val();中的aaa
*   @reg  block的对象key值
*   @msg  弹出提示信息，如为空，提示默认信息
*   @name 弹出信息的名称

* SAMPLE
* var fcker = fck(chkopts)
              (user,'username',null,'昵称')
              (telephone,'mobile','请输入正确的手机号码')
              (comment,'notempty',null,'评论')
              (code,'verify','验证码不正确')
              ();
*/
function form_valide(opts) {        
    var ckstat=true;
    var tmp;
    var old;
    var popmsg=true;   //允许弹出消息
    var block = {
        email    : /^[\.a-zA-Z0-9_=-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        username : /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/, 
        verify   : /^[a-z\d]{4}$/i,
        verify_m : /^[\d]{6}$/,
        mobile   : /^(13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8})$/, //手机
        url      : /^http[s]?:\/\/([\w-]+\.)+[\w-]+([\w-.\/?%&=]*)?$/, //url
        ip4      : /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/, //ip地址
        notempty : /^\S+$/, //非空
        qq       : /^[1-9]*[1-9][0-9]*$/, //QQ号码
        idcard   : /^[1-9]([0-9]{14}|[0-9]{17})$/, //身份证
        birthday : /^(\d{4})[\.-](\d{1,2})[\.-](\d{1,2})$/,
        all      : /[\s\S]/,
        tips     : tips,
        popmsg : true
    };
    if(opts&&__getClass(opts)=='Object'){
        old = $.extend({},block);
        block = $.extend(block,opts);
    }
    return function self(val,reg,msg,name) {
        var tips = block.tips;
        popmsg=block.popmsg;        
        if (!val){
            if(arguments.length==0){                
                return ckstat;
            }
            else{       
                if(popmsg){
                    if(msg) tips(msg,'alert');
                    else if(name) tips(name+'不能为空','alert');
                    else tips(reg+'不能为空','alert');
                }
                ckstat = false;
                return function(){ 
                    if(arguments.length==0) return ckstat;
                    else{
                        return arguments.callee;
                    }
                };
            }
        }
        reg = reg || 'username';
        if(__getClass(block[reg])=='Function'){
            popmsg = false;
            var fun = block[reg];                   
            tmp = val=='' ? false : fun.call(this,val,old);            
            if(!tmp) ckstat = false;
        }else{
            tmp = val=='' ? false : block[reg].test(val);
        }
        if(!tmp) {
            ckstat = false;
            if(popmsg){
                if(!msg){
                    if(name) tips(name+'数据不正确','alert');
                    else     tips(reg+'数据不正确','alert');
                }
                else
                    tips(msg,'alert');
            }
            return function(){ 
                if(arguments.length==0) return ckstat; 
                else{
                    return arguments.callee;
                }
            };
        }
        return self;
    };
}
/*
* msgtips 消息弹出窗，为tipsbox抽象的实例
* @msg 传入的消息
* @stat 传入状态，目前支持normal,alert
* @cb  动画结束后的回调函数
*/
var msgtips = function(msg,stat,cb){
    var msg_left, msg_top;
    var docRect = __measureDoc();
    var scrollleft = docRect.sl;
    var scrolltop = docRect.st;
    var clientwidth = docRect.dw;
    var clientheight = docRect.dh;  

    var msgtip = new tipsbox();
    //新建消息实例，可定制
    msgtip.tipsItem =function(stat){
        var tip = document.createElement('div');
        var subtip = document.createElement('div');
        var bgcolor='background-color:#4ba2f9;';
        tip.className = 'showmsg';
        if(stat=='alert'){
            bgcolor='background-color:rgb(211, 13, 21);';
        }
        tip.style.cssText = 'display:none;width:100%;text-align:center; margin-top:10px;color:#fff;line-height:40px;font-size:16px;'+bgcolor;
        return tip;
    }

    //消息实例容器，可定制
    msgtip.tipsBox=function(stat){            
        msg_left = Math.round((parseInt(clientwidth)-300)/2);
        msg_top = 'top:0;';
        if(stat=='alert'){
            msg_top = Math.round((parseInt(clientheight)-150)/2);
            msg_top = 'top:'+msg_top+'px;height:200px;overflow:hidden;';
        }
        $('#msgcontainer').length ? '' : $('body').append('<div id="msgcontainer" style="z-Index:10030;width:300px;position:fixed;top:10px;'+msg_top+'left:'+msg_left+'px;"></div>');
        return $('#msgcontainer')[0];
    }

    msgtip.anim=function(item,container){
        clearTimeout(ggg);
        $(item).fadeIn('slow').delay(2000).animate({'height':0,'opacity':0,'margin':0},300);
        var ggg = setTimeout(function(){
            $(item).remove();
            if($('.showmsg').length==0) $(container).remove();
            do_action('do_tipsbox');
        }, 3000);
    }

    if(cb) msgtip.pop(msg,stat,cb);
    else
        msgtip.pop(msg,stat);
}
window.tips = msgtips;

function tanbox(msg,stat,cb){
    var docRect = __measureDoc();
    var scrollleft = docRect.sl;
    var scrolltop = docRect.st;
    var clientwidth = docRect.dw;
    var clientheight = docRect.dh;
    if(!stat) stat='normal';


    var tan = new tipsbox();
    tan.tipsBox = function(stat){
        // var tip = document.createElement('div');
        var 
        box_width = 600,
        box_height = 300;
        if(tanbox.attr.box.width) box_width = tanbox.attr.box.width;
        if(tanbox.attr.box.height) box_height = tanbox.attr.box.height;        
        tanbox.attr.box={};
        var msg_left = Math.round((parseInt(clientwidth)-box_width)/2);
        var msg_top = Math.round((parseInt(clientheight)-box_height)/2);
        var tanboxhtml = '<div id="msgtan" style="display:none;background-color:#fff;z-Index:10000;width:'+box_width+'px;height:'+box_height+'px:auto;position:fixed;top:'+msg_top+'px;left:'+msg_left+'px;"></div>';
        $('#msgtan').length ? 
        (function(){
            $('#msgtan').remove();
            $('body').append(tanboxhtml);
        })()
        : $('body').append(tanboxhtml);
        return $('#msgtan')[0];
    };
    tan.tipsItem = function(stat){
        var subtip = document.createElement('div');
        subtip.id = 'tancontent'
        subtip.style.cssText = 'width:100%;height:100%;display:block;'        
        return subtip;
    };
    tan.anim = function(item,container,stat){              
        if(stat=='md'||stat!=='sign'){            
            $(container).fadeIn(300);
            $('body').bind('closetanbox',function(){
                $(container).fadeOut('slow');
            });
        }else{          
            $(container).fadeIn(1000).delay(2000).fadeOut('slow');        
        }
    };

    if(cb) tan.pop(msg,stat,cb);
    else
        tan.pop(msg,stat);
}
tanbox.attr = {'box':{},'item':{}};

function maskBox(msg,stat,cb){    
    var 
    docRect = __measureDoc()
    scroll_left   = docRect.sl,
    scroll_top    = docRect.st,
    client_width  = docRect.dw,
    client_height = docRect.dh,
    mask_tpl='',
    container_tpl ='',
    cent_tpl ='';
    tan = new tipsbox();

    if(!stat) stat='normal';

    tan.tipsBox = function(stat){
        $('#bg_container').remove();
        box_left  = Math.round((parseInt(client_width)-400)/2),
        box_top   = Math.round((parseInt(client_height)-566)/2);
        container_tpl = document.getElementById('bg_container');
        if(!container_tpl){
            container_tpl = document.createElement('div');
            container_tpl.id = 'bg_container';
            container_tpl.style.cssText = 'width:400px;height:566px;\
                                    display:block;position:fixed;z-Index:10001;\
                                    left:'+box_left+'px;\
                                    top :'+box_top+'px;';
        }
        $('body').append(container_tpl);
        return container_tpl;
    };

    tan.tipsItem = function(stat){
        $('#maskcontent').remove();
        cent_tpl   = document.createElement('div');
        cent_tpl.id  = 'maskcontent'
        cent_tpl.style.cssText = 'width:100%;height:100%;display:block;position:relative;\
                                background-color:#fff;';

        return cent_tpl;
    };

    tan.anim = function(item,box,stat){
        $('#maskbox').remove();
        if(stat=='md'||stat!=='sign'){
            mask_tpl = document.getElementById('mask_tpl');
            if(!mask_tpl){
                mask_tpl   = document.createElement('div');
                mask_tpl.id  = 'maskbox';
                mask_tpl.style.cssText = 'width:100%;height:100%;display:block;\
                                          position:fixed;left:0;top:0;\
                                          background-color:#000;opacity:0.6;z-Index:10000;';

                $('body').append(mask_tpl);                    
            }

            var closebtn = new Image();
            closebtn.id = 'closePop';
            closebtn.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM4MTM0MjVBMkQwMTFFNEIwOTA4MDQ4M0IwOUIzQTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM4MTM0MjZBMkQwMTFFNEIwOTA4MDQ4M0IwOUIzQTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzgxMzQyM0EyRDAxMUU0QjA5MDgwNDgzQjA5QjNBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzgxMzQyNEEyRDAxMUU0QjA5MDgwNDgzQjA5QjNBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi/jzu8AAABWSURBVHjalJDRDcBACEKF/UdzJ5u0adLzkEv5xEcUkZkVjxBeN8duOPgN4BD6eqA4pya4n9RDpWZs61XxxWP8FE1B6dEUxPTWmAqqEA0sQzzA2+wSYABDMBR7Ctr/ZwAAAABJRU5ErkJggg==';
            
            $('#maskcontent').append(closebtn);
            $(closebtn).css({'position':'absolute','right':'30px','top':'20px','cursor':'pointer'});

            $('#maskbox').show();
            $(box).fadeIn(300);
            $('#closePop').click(function(){
                    $(box).remove();
                    $('#maskbox').remove();
            })
        }else{          
            $(box).fadeIn(1000).delay(2000).fadeOut('slow');        
        }
    };

    if(cb) tan.pop(msg,stat,cb);
    else
        tan.pop(msg,stat);

    return tan;
}


function maskerBox(msg,stat,cb){
    var 
    defaults = {
        "width"  : "400px",
        "height" : "566px"
    },

    mask = '.m-layer,.m-layer .lymask{top:0;left:0;width:100%;height:100%;}\n\
.m-layer{display:none;position:fixed;_position:absolute;z-index:5000;}\n\
.m-layer .lymask{position:absolute;background:#000;opacity:0.5;filter:alpha(opacity=50);}\n\
.m-layer .lytable{table-layout:fixed;width:100%;height:100%;}\n\
.m-layer .lytd{width:100%;height:100%;vertical-align:middle;}\n\
.m-layer .lywrap{position:relative;margin:0 auto; background: #fff;}\n\
.m-layer-show{display:block;}\n\
#closePop{position:absolute;right:10px;top:10px;}';

    __creatStyle('maskerbox',function(style){
        style.append(mask);
    }),
    tan = new tipsbox();

    tan.tipsBox = function(stat){
        $('.m-layer').remove();
        var 
        tmp_box = '<div class="m-layer m-layer-show"></div>';
        tmp_box_o = $(tmp_box)[0];
        $('body').append(tmp_box_o);

        var box = tmp_box_o;
        return box;
    };

    tan.tipsItem = function(stat){
        cent_tpl   = document.createElement('div');
        cent_tpl.className  = 'boxitem';

        return cent_tpl;
    };

    tan.anim = function(item,box,stat){            
        var box_width='width:400px;'
        if(__getClass(stat)=='Object'){
            if(stat.width) box_width = 'width:'+stat.width;
        }
        
        var closebtn = new Image();
        closebtn.id = 'closePop';
        closebtn.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM4MTM0MjVBMkQwMTFFNEIwOTA4MDQ4M0IwOUIzQTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM4MTM0MjZBMkQwMTFFNEIwOTA4MDQ4M0IwOUIzQTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzgxMzQyM0EyRDAxMUU0QjA5MDgwNDgzQjA5QjNBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzgxMzQyNEEyRDAxMUU0QjA5MDgwNDgzQjA5QjNBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi/jzu8AAABWSURBVHjalJDRDcBACEKF/UdzJ5u0adLzkEv5xEcUkZkVjxBeN8duOPgN4BD6eqA4pya4n9RDpWZs61XxxWP8FE1B6dEUxPTWmAqqEA0sQzzA2+wSYABDMBR7Ctr/ZwAAAABJRU5ErkJggg==';

        var ccc = '<div class="lymask"></div><table class="lytable"><tbody><tr><td class="lytd"><div class="lywrap" style="padding:10px;'+box_width+'"></div></td></tr></tbody></table>';
        $(box).html(ccc);
        $msg = $(msg);
        $(box).find('.lywrap').html(msg);
        $('.lywrap').append(closebtn);

        $(box).show();

        $('body').on('close_masker_box',function(){
            $(".m-layer").removeClass('m-layer-show');
        });

        $(".lyclose").click(function(){
            // $(".m-layer").removeClass('m-layer-show');
            $('body').trigger('close_masker_box');
        });
    };

    if(cb) tan.pop(msg,stat,cb);
    else
        tan.pop(msg,stat);

    return tan;
}
//why has the bug, i don't know,so i git push again and try it
(function(){	

	var 
	Class = {create: function(item) {  return function() {this.initialize.apply(this, arguments);} } }
	
	typeof idindex =='undefined' ? idindex=0 : idindex=idindex;
	// console.log(idindex);

	var 
	pendraw = false,
	_wangs = new HashMap(),
    gzgz = Class.create(); 

	var 
	_nrect,
	_rzrect, 
	_rzobj, 
	_rzaction=false,  //drga item  to resize wangwang
	unitdrag = false,   //
	cloneunit = false,
	tt,
	opdiv;  //use for clone, remove 


    /*
    * @item is a gzgz
    */
    gzgz.prototype = {

	    initialize: function(item) {	    	
	    	var 
	    	login_button='';

	    	this._body = $('body');
	    	if(!$('#drawselect').length)
	    		$('body').append("<div id='drawselect' title='右键编辑' style='z-index:1001;position:absolute;left:0;top:0;display:none;'></div>");

	    	this._gzs = [];
	    	this._pen = $('#drawselect');

	    	var 
	    	_pen = this._pen,
	    	_body = this._body,
	    	_that = this;
	    	this.length = item.length;

	    	//init page then put per wangwang to _wangs stack;
	    	$(item).each(function(i){
	    		 var thegz = this;
	    		 item[i].setAttribute('gzindex',i); _that._gzs.push(item[i]);

	    		 $(this).find('.wangwang').each(function(){
			    	__clientput(this);
			    	if(this.parentNode.className!=='gzgz'){
			    		scope = this.parentNode;
			    	}else if(this.parentNode.className=='gzgz'){
			    		scope = this.parentNode;
			    	}
			    	var iddex = $(this).attr('idindex');
			    	if(iddex>=idindex) idindex=parseInt(iddex)+1;
	    			new _unitDiv(this,this.parentNode);
	    		}); 
	    	});
	    		
    		var 
    		thegz,
    		thegzrect,
    		pos = {},
    		scope;

    		$(_pen)
			.on('mousedown',function(e){
				e = e||arguments[0];
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
			});
    		
    		$(document)
    		.mousedown(function(e){
    			e = e||arguments[0];		    			
    			// if(e.target == thegz) {		    			
    			if(e.target.className=='gzgz'){		    				
    				thegz = e.target;
		    		thegzrect = __getRect(thegz);
	    			pendraw = true;		    			
	    			if(e.which == 1){		    				
						_pen.show();
						_pen.css({'left':e.pageX,'top':e.pageY,'width':0,'height':0});
						pos.startX = e.pageX;
						pos.startY = e.pageY;
					}
				}
				$('#gzmenu').hide();
				_pen.html('');
    		})
    		.mousemove(function(e){
				e=e||arguments[0];
				if(e.which==1&&pendraw){
					if(e.pageX<thegzrect.left){
    					tips('超出绘制区域，请在绘制区域操作!',1000);
    					return false;
    				}else{
						_pen.css({'background-color':'red','width':e.pageX-parseInt(pos.startX),'height':e.pageY-parseInt(pos.startY)});
    				}
				}						
			})
			.mouseup(function(e){
				e = e||arguments[0];
				pendraw = false;  // 				
				if(_rzaction){
					$(document).trigger('resizeunit');
					_rzaction = false;
				}
				if(_pen.width()>30&&_pen.height()>30){
					kkk = e.ctrlKey ? new preCreatSubDiv(_pen,thegz,'float') : new preCreatSubDiv(_pen,thegz);
				}else if(_pen.width()>3&&_pen.height()>3)
					tips('最小30x30',1000);						
				pos = {};						
			});
			
	        return this;
	    },
	    run:function(cb){
	    	cb.call(this,_wangs);
	    }
	}

	//右键菜单初始化
	function initContextMenu(badge){
		badge = !badge ? 0 : badge;
		var 
		gzmenu ='<div id="gzmenu" class="list-group">~lists~</div>',
		lists = zone.login_stat
			  ? 
				'<a class="edit list-group-item">编辑 </a>\
				<a class="updattime list-group-item" title="移动端置前显示,暂未开启">更新置前</a>\
				<a class="listarticle list-group-item">文章列表<span class="badge">'+badge+'</span></a>\
				<a class="clone list-group-item">克隆</a> \
				<a class="resetpwd list-group-item">更改密码</a> \
				<a class="remove list-group-item">删除</a>'
			  :
			  	'<a class="sign list-group-item">注册/登录</a>';			  	
		
		gzmenu = gzmenu.replace('~lists~',lists);
		$('#gzmenu').remove();
		$('body').append(gzmenu); 

		$('#gzmenu .list-group-item').mousedown(function(e){
			e=e||arguments[0];
			e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);				
			
			if(this.className.indexOf('sign')>-1){
				menuLogin();	
				// do_action('login');
			}
			if(this.className.indexOf('resetpwd')>-1){
				menuLogin('reset');
				// do_action('login');
			}
			if(this.className.indexOf('listarticle')>-1){
				renderMenuList(opdiv);
			}
			if(this.className.indexOf('remove')>-1){
				if( confirm('确认要删除吗？') ){
					__remove(opdiv);
				}else{
					tips('请小心操作','alert');
				}
			}
			if(this.className.indexOf('clone')>-1){
				menuClone(opdiv);
			}
			var editor;
			if(this.className.indexOf('edit')>-1){
				// start edit content(markdown)
				menuEdit();
			}
		});
	}
	add_action('fun_menu',initContextMenu);
	// do_action('fun_menu'); 

	//动态插入css
	creatStyle('gzgzgz',function(gzgzgz){
		gzgzgz.text('#gzmenu{position:absolute;width:150px;display:none;}\
				#gzmenu .list-group-item{padding:7px 15px;}\
			');
		// gzgzgz.text('#gzmenu{position:absolute;width:150px;background-color:#fff;display:none;border:1px solid #666;border-bottom-width:0;}\
		// 			#gzmenu ul{padding:0;margin:0}\
		// 			#gzmenu li{list-style:none;text-indent:1em;}\
		// 			#gzmenu li {display:block;height:30px;line-height:30px;border-bottom:1px solid #666;text-decoration:none;color:#666;font:12px/30px tahoma;}\
		// 			#gzmenu li:hover{background:#eee;color:black;} ');
	});	

	//文章列表渲染
	function renderMenuList(src,page){
		var 
		tpl,
		page = !page ? 1 : page;
		api = {
			'list_data' : {'url':'/list','data':JSON.stringify( {'page':page } ),'type':'html'} , 
			'normal_tpl': {'url':'/tpl','type':'html'}
		};
		if(src){
			needs('zone', {
				lists  : api['list_data'] ,
				list_insert_to : function(){				
					do_action('insertCnt',opdiv,zone.lists,'list');
				} ,
				list_save : function(){
					//列表格子的识别class				
					$(opdiv.div).addClass('wangwang-list');
					__put(opdiv.div);
				}
			});
		}else{
			needs('zone', {
				lists  : api['list_data'] ,
				list_insert_to : function(){				
					$('.pageto').parent().html(zone.lists);

					//init pager event
					$('.page-pre').click(function(){
						var
						page_to = $(this).attr('pageid');
						do_action('renderList',null,page_to);
					});

					$('.page-next').click(function(){
						var
						page_to = $(this).attr('pageid');
						do_action('renderList',null,page_to);
					});
				}
			});
		}


	}
	add_action('renderList',renderMenuList,renderMenuList.length);

	//clone odiv
	function menuClone(src){
		var clone = src.div.cloneNode(true);
		$(clone).attr('idindex',idindex);
		$(clone).css('left',parseInt($(clone).css('left'))+30+'px');
		$(clone).css('top',parseInt($(clone).css('top'))+20+'px');
		$(src.container).append(clone);
		__clone(src,clone);
		new _unitDiv(clone,src.container);
		tips('clone ok',1000);
	}

	//弹出文章编辑框
	function menuEdit(){
		var epic_opts = {
		    container: 'epiceditor',
		    textarea: null,
		    basePath: 'js',
		    parser: marked,
		    file: {
		        name: 'epiceditor',
		        defaultContent: '',
		        autoSave: 100
		    },    
		    autogrow: false
		}

		/*弹出编辑框*/
		maskerBox("<div id='epiceditor' style='height:300px;'>\
			</div><div class='form'>\
			<a class='btn btn-default' id='submit'>提交</a>\
			<a class='btn btn-default' id='close'>取消</a>\
			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\
			<span id='article'>选项</span>\
			<div style='display:inline-block;height:18px;'><form id='cnt-property'>\
			<select name='article' id='edit-form-article'>\
			<option value='0'>类型</option>\
			<option value='1'>文章</option>\
			<option value='2'>tile</option>\
			</select>\
			<select name='colors' id='edit-form-colors'>\
			<option value='0'>颜色</option>\
			<option class='asks' value='asks'>asks</option>\
			<option class='feels' value='feels'>feels</option>\
			<option class='has' value='has'>has</option>\
			<option class='hates' value='hates'>hates</option>\
			<option class='hopes' value='hopes'>hopes</option>\
			<option class='is' value='is'>is</option>\
			<option class='likes' value='likes'>likes</option>\
			<option class='loves' value='loves'>loves</option>\
			<option class='needs' value='needs'>needs</option>\
			<option class='says' value='says'>says</option>\
			<option class='shares' value='shares'>shares</option>\
			<option class='thinks' value='thinks'>thinks</option>\
			<option class='wants' value='wants'>wants</option>\
			<option class='was' value='was'>was</option>\
			<option class='will' value='will'>will</option>\
			<option class='white' value='white'>white</option>\
			<option class='wonders' value='wonders'>wonders</option>\
			<option class='empty' value='empty'>empty</option>\
			</select>\
			</form></div>\
			</div>",{"width":"70%"});

		editor = new EpicEditor(epic_opts).load();		

		//从数据接口中拿到数据后第一步
		function insertDataToEditor(){
			if(zone.dbgetobj.tcnt){
				editor.importFile(null,zone.dbgetobj.tcnt,'text');
			}

			//article
			if(zone.dbgetobj.type&&zone.dbgetobj.type==1){
				// $('#edit-form-article').attr('checked',true);
				$("#edit-form-article").val("1");
			}
			
			aftInsertDataToEditor();
		}

		/*ace editor*/
		/*tanbox("<div id='editor' style='width:600px;height:300px;'>hello world\n\n\n\n\n\n\n</div><div class='form' style='text-align:center;'><span id='submit'>提交</span><span>&nbsp;&nbsp;</span><span id='close'>取消</span></div>",'md');
		var editor = ace.edit("editor");
    	editor.setTheme("ace/theme/tomorrow");
    	editor.session.setMode("ace/mode/html");
    	editor.setAutoScrollEditorIntoView(true);
    	editor.setOption("maxLines", 60);	
    	*/
    
    	//从数据接口中拿到数据后第二步
    	function aftInsertDataToEditor(){
	    	oneClick('#submit',{"delay":10},function(){
	    	// $('#submit').click(function(){
	    		editor.save(true);
				var 
				content = editor.exportFile(null, 'html', true),
				Tcontent = editor.exportFile(null, 'text', true),
				data = {'cnt':content,'tcnt':Tcontent},
				cnt_form = $('#cnt-property')[0];
				// data['is-article'] = cnt_form['article'].checked ? 1 : 0;
				data['is-article'] = cnt_form['article'].value;
				data['is-color'] = cnt_form['colors'].value;

				opdiv.div.className = '';
				$(opdiv.div).addClass('wangwang').addClass( (data['is-color']==0 ? '' : data['is-color']) );				

				// save data to local store
				editor.save(true);

				insertCntTodiv(opdiv,content);
				
				__put(opdiv.div,data,'md');
			});

			$('#close').click(function(){
				$('body').trigger('close_masker_box');
				editor.unload();
			});	
		}

		//初始化编辑框内的内容
		__dbget(opdiv.idindex,insertDataToEditor);
	}

	//init login pop pannle
	function menuLogin(stat){
		var
		custom_width = {"width":"35%"};
		if(zone['rsp']){
			custom_width = {"width":"70%"};
		}
		maskerBox('<div class="form-group">\
				    <label for="user">用户名</label>\
				    <input type="text" class="form-control" id="user" placeholder="输入用户名">\
				  </div>\
				  <div class="form-group">\
				    <label for="passwd">Password</label>\
				    <input type="password" class="form-control" id="passwd" placeholder="密码">\
				  </div>\
				  <div id="resetpwd" class="hide">\
				  	<div class="form-group">\
				    	<label for="newpasswd">新密码</label>\
				    	<input type="password" class="form-control" name="newpwd" id="newpasswd" placeholder="新密码">\
				    </div>\
				    <div class="form-group">\
				    	<label for="cfpasswd">确认新密码</label>\
				    	<input type="password" class="form-control" name="cfpwd"  id="cfpasswd" placeholder="确认新密码">\
			    	</div>\
				  </div>\
				  <div class="form">\
				  	<span id="login">登录</span>\
				  	<span>&nbsp;&nbsp;</span>\
				  	<span class="close">取消</span>\
				  </div>',custom_width);
		
		if(stat=='reset'){
			$('#resetpwd').removeClass('hide');
		}
		$('#login').click(function(){
			toLogin(stat);
		});
		$('.close').click(function(){
			$('body').trigger('close_masker_box');
		});
	}
	add_action('login',menuLogin);

	//put login info to back-end;
	function toLogin(stat){
		var
		chkopts = {
			username: function(val,reg){   // username 长度大于8，小于20 
		        	var 		        
			        tmp = reg.email.test(val);    //email check		        
			        if(!tmp) {
			            tmp = reg.mobile.test(val);   //mobile check
			            if(!tmp){
			            	tmp = reg.username.test(val);
			            	if(tmp){
			            		zone['usertype'] = 'text';
			            	}
			            }else{
			            	zone['usertype'] = 'mobile';	
			            }
			        }else{
			        	zone['usertype'] = 'email';
			        }
			        if(tmp){
		                var 
		                len = strlen(val);
		                if(len<4||len>30){
		                	tips('用户名必须大于4字，小于20字');
		                    tmp=false;
		                }
		            }
		            if(!tmp)tips('请正确填写用户名');
			        return tmp;
		    },	
		    password: function(val,reg){
		        var 		        
		        tmp = true,
		        level = (val.length>5) ? 0 + (val.length>7) + (/[a-z]/.test(val) && /[A-Z]/.test(val)) + (/\d/.test(val) && /\D/.test(val)) + (/\W/.test(val) && /\w/.test(val)) + (val.length > 12) : 0;  //level  0  1  2  3  4  password stronger
		        
		        if(val.length>20||/\s/.test(val)) level=0; //不包括空格
		        if(level==0||!level){
		        	tips('请输入6～20位密码');
		            tmp = false;
		        }
		        zone['password']={};
		        zone['password']['level']=level;
		        return tmp;
		    },
		    repassword: function(input_obj,reg){
		        var 
		        pobj = input_obj[0],   //password object
		        pval = pobj.value,
		        iobj = input_obj[1],    //repassword object
		        val = iobj.value,
		        tmp = true;
		        if(val!==pval){
		        	tips('两次输入密码不匹配');
	                tmp = false;
		        }

		        return tmp;
		    }
		},
		user = $('#user').val(),
		passwd = $('#passwd').val(),
		newpasswd = $('#newpasswd').val(),
		cfpasswd = $('#cfpasswd').val(),
		formv = false;

		if(!stat){			
			formv = form_valide(chkopts)
							   (user,'username')
							   ();
		}
		else if(stat=='reset'){		
			formv = form_valide(chkopts)
							   (user,'username')
							   (newpasswd,'password')
							   ([$('#newpasswd')[0],$('#cfpasswd')[0]],'repassword')
							   ();
		}

		if(formv){
			var
			data = {
				'user':user,
				'passwd':passwd
			};

			if(stat=='reset'){
				data['newpasswd'] = newpasswd;
				data['cfpasswd'] = cfpasswd;
				data['stat'] = 'reset';
			}

			needs('zone',{
				to_login:{'url':'/login','data':JSON.stringify(data)},
				aft_login:getloginStat
			});
		}

		function getloginStat(){
			if(zone.to_login.stat == 1){
				stat=='reset'? tips('修改成功！') : tips('登录成功！');
				zone.login_stat = true;
				$('.sign').remove();
			}
			else{
				zone.login_stat = false;
				tips('用户名或密码错误');
			}
			do_action('fun_menu');
		}
	}	

	//插入内容到odiv
	function insertCntTodiv(odiv,cnt,stat){
		if($(odiv.div).find('.md-article').length){
			$(odiv.div).find('.md-article').html(cnt);
		}else{
			if($(odiv.div).find('.md-body').length){
				$(odiv.div).find('.md-body').html(cnt);
			}else{
				$(odiv.div).prepend('<div class="md-wrap clearfix"><div class="md-body">'+cnt+'</div></div>');
			}		
			// if(stat=='list'){
			// 	if($(odiv.div).find('.md-body').length){
			// 		$(odiv.div).find('.md-body').html(cnt);
			// 	}else{
			// 		$(odiv.div).prepend('<div class="md-wrap clearfix"><div class="md-body">'+cnt+'</div></div>');
			// 	}				
			// }
			// else{
			// 	$(odiv.div).prepend('<div class="md-wrap clearfix"><div class="md-body ">'+cnt+'</div></div>');			
			// }
		}
		do_action('code_highlight');
	}	
	add_action('insertCnt',insertCntTodiv,insertCntTodiv.length);

	
	//获取登录信息
	function getLoginInfo(){
		
		needs('zone',{
			'login_info' : {'url':'/logininfo'}
			,'loginstat' : stat
		});

		function stat(){
			if(zone.login_info.stat == 0){
				zone.login_stat = false;
			}else{
				zone.login_stat = true;
			}
			do_action('fun_menu');
		}
	}

	//初始化文章列表
	function initArticleList(){
		if($('._list').length>0){
			renderMenuList();
		}
	}
	//渲染页面后第一步同步用户状态
	getLoginInfo();
	initArticleList();
	
	

	//_unitDiv的准备工作
	var preCreatSubDiv = function(item,container,type){
		var 
		rect = __getRect(item),
		crect = __getRect(container),
		position,
		_unit,
		rzunit = '<div class="rzunit" >1</div>';
		
		(type=='float') 
		? position = 'position:relative;float:left;' 
		: position = 'position:absolute;';

		$(container).append('<div idindex="'+idindex+'" class="wangwang" style="left:'+(rect.left-crect.left)+'px;top:'+(rect.top-crect.top)+'px;width:'+rect.width+'px;height:'+rect.height+'px;'+position+'">'+rzunit+'</div>');		
		
		_unit = $('div[idindex='+idindex+']')[0];
		_unit.setAttribute('gzindex',$(container).attr('gzindex'));
		_unit.gzindex = $(container).attr('gzindex');
		__put(_unit);
		new _unitDiv(_unit,container);
	}	

	//resize grid size
	$(document).mousemove(function(e){
		e = e||arguments[0];
		if(e.which==1&&_rzaction===true){
			$(_rzobj.div).css({'width':e.pageX-_rzrect.left,'height':e.pageY-_rzrect.top});
		}
	});

	//reszie wangwangs 
	$(document).bind('resizeunit',function(){
		__edit(_rzobj);
	});
	

	//build a obj and init it's property;
	_unitDiv = Class.create();
	_unitDiv.prototype = {
		initialize: function(item,container) {			
			var theunit;
			var _unit;
			var pos={};
			var _rect = __getRect(item),
			_crect = __getRect(container);
			
			var that = theunit = this;
			that.idindex = $(item).attr('idindex');			
			that.type = 'absolute';
			that.div = _unit = item;
			this.father='gzgz';
			if(container.className.indexOf('gzgz')==-1){
				this.father = container.getAttribute('idindex');
			}
			that.container = container;
			that.dragitem;
			
			
			//start resize grid
			$(_unit).children('.rzunit').mousedown(function(e){
				if(zone.login_stat){
					e = e||arguments[0];
					e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
					_rzaction=true;
					_rzrect = __getRect(this.parentNode);
					_rzobj = that;
				}
			});			
			
			//put one grid into a other grid that one is father one is son
			$(_unit).mouseover(function(e){						
				e = e||arguments[0];				
				if(cloneunit) {
					if($('body').data('cloneunit')){
						cloneunit=false;
						var 
						clone = $('body').data('cloneunit');	
						clone.style.left = null;
						clone.style.top = null;
						$(clone)
							.css({'position':'absolute','background-color':'red','left':0,'top':0})
							.attr('idindex',idindex);
						tt = e.target;						
						tt.appendChild(clone);
						$('body').data('cloneunit',null);						
						new _unitDiv(clone,tt);
						__put(_unit);
					}
				}
			});

			//start drag one grid
			$(_unit).mousedown(function(e){	
				if(zone.login_stat){
					// _rect = __getRect(e.target);
					_rect = __getRect(this);
					_crect = __getRect(that.container);
					$('#gzmenu').hide();

					e = e||arguments[0];				
					e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
					$(this).css('z-index',2000);
					unitdrag   = true;
					cloneunit  = false;
					_nrect     = __getRect(this);
					pos.startX = e.pageX;
					pos.startY = e.pageY;	
					if(e.ctrlKey){
						that.dragitem = that.div;
					}
				}
			})
			//right click one gird then pop a oprate menu list,then ....
			.contextmenu(function(e){				
				opdiv = null;
				e = e||arguments[0];
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
				e.preventDefault();
				unitdrag = pendraw = false;
				that.rightmenu(e);
				opdiv = that;
			});

			//drag one grid move in container
			var endleft,endtop;
			$(container).mousemove(function(e){
				e = e||arguments[0];							
				if(that.type==='absolute'&&unitdrag&&e.ctrlKey){					
					endleft = _nrect.left+(e.pageX-pos.startX)-_crect.left;
					endtop  = _nrect.top+(e.pageY-pos.startY)-_crect.top;
					endleft = endleft < 0 ? 0 : endleft+_nrect.width > _crect.right-_crect.left ? (_crect.right-_crect.left-_nrect.width) : endleft;
					endtop  = endtop  < 0 ? 0 : endtop+_nrect.height>_crect.bottom-_crect.top   ? (_crect.bottom-_crect.top-_nrect.height) : endtop;
					if(that.dragitem == that.div){
						that.div.style.left = endleft+'px';
						that.div.style.top = endtop+'px';
					}
				}
			});

			//end drag one grid
			$(_unit).mouseup(function(e){
				e = e||arguments[0];
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
				that.div.style.zIndex = 1000;			
				if(unitdrag&&e.ctrlKey){					
					that.move = {"left":that.div.style.left,"top":that.div.style.top}
					__move(that);
					if(e.altKey) {
						cloneunit = true;				
						that.dataclone(that);						
					}
				}				
				unitdrag = false;
				that.dragitem = 'undefined';
				pos={};
			});
			// console.log(e.relatedTarget);
		},	
		dataclone : function (item){
			$('body').data('cloneunit',item.div);
			__remove(item);

			return;
		},		
		rect:function(){
			return __getRect(this.div);
		},
		//set menulist pop at where that your mouse right click
		rightmenu:function(e){
			var rightmenu = $('#gzmenu');
			rightmenu.css({'display':'block','left':e.pageX-5+'px','top':e.pageY-5+'px','z-index':9999});			
		}
	}
	//end unit



	//equipment one gird to a json object and put it to global stack "_wangs" in memery
	function __clientput(unit){
		var 
		obj;
		if(!unit.hasOwnProperty('location')){
			obj = {
				'gzindex':$(unit).attr('gzindex'),
				'id'    : $(unit).attr('idindex'),
				'class' : unit.className,
				'css'   : (function(){  var ncss,css; ncss = (css = unit.style.cssText.toLowerCase()).lastIndexOf(';')<(css.length-1) ? css+';' : css; return ncss;})(),
				'cnt'   : (function(){ 
							if($(unit).find('.md-body').length) return $(unit).find('.md-body').html();
							else return '';
						  })(),				
				'unit'  : unit.outerHTML,
				'location': window.location.href
			};
		}else{
			obj = unit;
		}
		_wangs.put(obj.id,obj);
		idindex++;
	}

	//equipment one grid as a json object then put the json object to back-end;
	function __put(unit,content,type){		
		var 
		obj={},
		tcnt;		
		
		if(!unit.hasOwnProperty('location')){
			obj = {
				'gzindex':$(unit).attr('gzindex'),
				'id'    : $(unit).attr('idindex'),
				'class' : unit.className,
				'css'   : (function(){  var ncss,css; ncss = (css = unit.style.cssText.toLowerCase()).lastIndexOf(';')<(css.length-1) ? css+';' : css; return ncss;})(),
				'unit'  : unit.outerHTML,
				'location': window.location.href
			};
			if(type=='md'){
				obj['cnt']  = content['cnt'];
				obj['tcnt'] = content['tcnt'];
				obj['type'] = content['is-article'];
			}
		}else{
			obj = unit;
		}

		_wangs.put(obj.id,obj);
		idindex++;		
		needs('zone',{
			putstat:{'url':'/add','data':JSON.stringify(obj)}
			,afun:[addfun,[type]]
		});
	}

	function addfun(type){
		if(zone.putstat.responseText=='ok'){
			zone.putstat= null;
			console.log('put ok');

			if(type&&type=='md'){
				tips('提交成功!');
			}
		}else{
			// console.log(zone.putstat);
			// do_action('login');
		}
	}

	//clone one grid then show it and save it to back-end
	function __clone(src,clone){
		var obj;
		if(src.hasOwnProperty('father')&&src.father!=='gzgz'){			
			__put(src.container);
			return;
		}
		__put(clone);
	}	

	// function __get(id,fromback,cb){
	// get json object from global stack that we had put it into global stack "_wangs"
	function __get(id){
		return _wangs.get(id);
	}	

	//get json object from back-end
	function __dbget(id,cb){
		var 
		funs = [],
		getdata,
		obj = _wangs.get(id);

		if(!obj) 
			return false;
		if(obj.tcnt)
			getdata = obj;
		else
			getdata = {'url':'/get','data':JSON.stringify(obj)};
		

		if(cb){
			if(__getClass(cb)=='Function'){
				funs.push(cb);
			}else if(__getClass(cb)=='Array'){
				funs = cb;
			}else{
				funs.push(function(){});
			}
		}

		needs('zone',{
			dbgetobj:getdata,
			'gogogo':funs
		});

	}

	//resize one grid and save it to back-end
	function __edit(item){
		if(!item)return false;

		var 
		opdiv = item,
		nowrect = __getRect(opdiv.div),
		obj = __get(opdiv.idindex);

		opdiv.div.style.width = nowrect.width;
		opdiv.div.style.height = nowrect.height;
		obj.css = opdiv.div.style.cssText.toLowerCase();
		obj.unit = opdiv.div.outerHTML;

		if(opdiv.hasOwnProperty('father')&&opdiv.father!=='gzgz'){
			__put(opdiv.container);
			return;
		}
	    console.log('edit ok');
	    __put(obj);
	 //    needs('zone',{
		// 	editstat:{'url':'/edit','data':JSON.stringify(obj)}
		// },editfun);		
	}
	var editfun = function(){
		if(zone.editstat.responseText=='ok'){
			zone.editstat= null;
			console.log('edit ok');
		}
	}

	//move one grid and save it to back-end
	function __move(item){    	
		if(!item)return false;

		var 
		obj,
		opdiv = item,
		nowrect = opdiv.move;

		opdiv.div.style.left = nowrect.left;
		opdiv.div.style.top = nowrect.top;

		if(opdiv.hasOwnProperty('father')&&opdiv.father!=='gzgz'){
			obj = __get(opdiv.father);
			var kkbb = $(obj.unit).find('.wangwang[idindex='+opdiv.idindex+']').prop('outerHTML');
			obj.unit = obj.unit.replace(kkbb,opdiv.div.outerHTML);
			console.log('move ok');
			__put(obj);
			return;
		}

		obj = __get(opdiv.idindex);
		obj.css = opdiv.div.style.cssText.toLowerCase();
		obj.unit = opdiv.div.outerHTML;
		console.log('move ok');
		__put(obj);
	}

	//delete one grid and sava it to back-end;
	function __remove(item){
		if(!item)return false;

		var 
		opdiv = item,
		obj,
		key;

		if(opdiv.idindex){
			obj = __get(opdiv.idindex);
			key = opdiv.idindex;			
		}else{
			key = $(item).attr('idindex');
			obj = __get(key);
		}

		if(opdiv.hasOwnProperty('father')&&opdiv.father!=='gzgz'){
			$(opdiv.div).remove();
			obj = __get(opdiv.father);
			var kkbb = $(obj.unit).find('.wangwang[idindex='+opdiv.idindex+']').prop('outerHTML');
			obj.unit = obj.unit.replace(kkbb,'');
			console.log('remove ok');
			__put(obj);
			return;
		}
		_wangs.remove(key);

		var removefun=function(){
			if(zone.removestat.responseText=='ok'){				
				zone.removestat= null;
				console.log('remove ok');
				$(opdiv.div).remove();
			}else{
				do_action('login');
			}
			// do_action('renderList');
		}
		needs('zone',{
			removestat:{'url':'/remove','data':JSON.stringify(obj)}
		},removefun);	
	}

	//jquery plugin;
	$.fn.gzgz = function(){
      	return new gzgz(this);
    };

})(jQuery);

$(function(){
	var 
	st,
	gz = $('.gzgz').gzgz();
	gz.run(function(_wangs){		
		
		//make scroll true
		$('.wangwang')
		.mouseenter(function(){
			$(this).css('overflow-y','auto');
		})
		.mouseleave(function(){
			$(this).css('overflow','hidden');	
		});

		do_action('renderList');


		var 
		ne_i=1,
		ne = MonoEvent,
		$box = ne( '.wangwang' );

		//response style for mobile
		function rzRespons(){
			var
			doc = __measureDoc();
			con = __getRect($('.container'));				
			if(doc.dw<768){
				zone['rsp']=true;
				var 
				w_left=0,
				diff = doc.dw,
				diff_w = con.width,
				diff_h = doc.dh;				
				$('.nav-top').removeClass('hide');

				$('.wangwang').each(function(i,v){					
					this.style.cssText = 'width:'+diff_w+'px;min-height:'+diff_h+'px;border:none;float: left;display:none;';
					if(i==0){
						this.style.display = 'block';
					}
				});

				$box.on( 'swipeLeft', function( e ){
					if(ne_i<$box.length){						
						ne_animate(ne_i,diff,'left');
						ne_i++;
					}
				});				

				$box.on( 'swipeRight', function( e ){
					if(ne_i>1){						
						ne_animate(ne_i,diff,'right');
						ne_i--;
					}
				});

				$box.on( 'swipeUp swipeDown', function( e ){});

				function ne_animate(iii,diff,stat,cb){
					var 
					to_left;
					$('.wangwang').each(function(i,v){						
						if(stat == 'right'){
							if(i==iii-1){
								$('.gzgz').css('width',diff_w*2+'px');
								$($box[iii-2]).show().animate({'margin-left': "+="+diff},800,function(){
									$($box[iii-1]).hide();
									$('.gzgz').css('width','100%');
									if(cb)cb();
								});
							}
						}else{
							if(i==iii-1){
								$($box[iii]).show();
								$('.gzgz').css('width',diff_w*2+'px');
								$(this).animate({'margin-left': "-="+diff},800,function(){
									$(this).hide();
									$('.gzgz').css('width','100%');
									if(cb)cb();
								});
							}
						}
					});
				}
			}else{
				$box.un( 'swipeLeft swipeRight swipeUp swipeDown' );

				var
				ididx=0;
				zone['rsp']=false;
				$('.wangwang').each(function(){
					$(this).removeClass('col-sm-12');
					ididx = $(this).attr('idindex');
					var
					item_feather = _wangs.get(ididx);
					this.style.cssText = item_feather.css;
					this.className = item_feather['class'];
					$(this).find('.md-article').css({'margin':'15px'});
				});
				$('.nav-top').addClass('hide');
			}
		}

		//init response style
		rzRespons();
		$(window).resize(function() {
			rzRespons();
		});
	});
});