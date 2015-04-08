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

function rpl(tmp,ve){
    if(!ve)return false;
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
                }, delay);
            }
        });
    }
}

// lib end