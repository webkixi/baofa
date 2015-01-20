function CurrentStyle(element){
    return element.currentStyle || document.defaultView.getComputedStyle(element, null);
};   
function __getClass(object){
    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};
function __getRect(element) {
  var offset = $(element).offset();
  offset.bottom = offset.top+$(element).height();
  offset.right = offset.left+$(element).width();
  offset.width = $(element).width();
  offset.height= $(element).height();
  return offset;
};

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

function creatstyle(name,cb){
    var nstyle ;
    if(!$('#'+name).length){
        nstyle = $('<style type="text/css" id="'+name+'"></style>');            
        $('head').append(nstyle);
    }else{
        nstyle = $('#'+name);
    }
    cb && cb.call(this,nstyle);
}

function tanbox(msg,cb){
    var docRect = __measureDoc();
    var scrollleft = docRect.sl;
    var scrolltop = docRect.st;
    var clientwidth = docRect.dw;
    var clientheight = docRect.dh;

    var tan = new tipsbox();
    tan.tipsBox = function(){
        // var tip = document.createElement('div');        
        var msg_left = Math.round((parseInt(clientwidth)-500)/2);
        var msg_top = Math.round((parseInt(clientheight)-500)/2);
        var tanboxhtml = '<div id="msgtan" style="display:none;background-color:#fff;z-Index:10000;width:500px;height:500px;position:fixed;top:'+msg_top+'px;left:'+msg_left+'px;"></div>';
        $('#msgtan').length ? 
        (function(){
            $('#msgtan').remove();
            $('body').append(tanboxhtml);
        })()
        : $('body').append(tanboxhtml);
        return $('#msgtan')[0];
    };
    tan.tipsItem = function(){
        var subtip = document.createElement('div');
        subtip.id = 'tancontent'
        subtip.style.cssText = 'width:100%;height:100%;text-align:center;display:'        
        return subtip;
    };
    tan.anim = function(item,container){
        $(container).fadeIn(1000);
    };

    if(cb) tan.pop(msg,'',cb);
    else
        tan.pop(msg);
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
        console.log(stat);
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
        var msg_left = Math.round((parseInt(clientwidth)-600)/2);
        var msg_top = Math.round((parseInt(clientheight)-300)/2);
        var tanboxhtml = '<div id="msgtan" style="overflow:auto;display:none;background-color:#fff;z-Index:10000;width:600px;height:auto;position:fixed;top:'+msg_top+'px;left:'+msg_left+'px;"></div>';
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
        subtip.style.cssText = 'width:100%;height:100%;text-align:center;display:'        
        return subtip;
    };
    tan.anim = function(item,container,stat){        
        if(stat!=='md'){
            $(container).fadeIn(1000).delay(2000).fadeOut('slow');        
        }else{
            $(container).fadeIn(300);
            $('body').bind('closetanbox',function(){
                $(container).fadeOut('slow');
            })
        }
    };

    if(cb) tan.pop(msg,stat,cb);
    else
        tan.pop(msg,stat);
}
window.tanbox = tanbox;

// function __measureDoc(){      
//     var doch = document.documentElement.clientHeight, docw = document.documentElement.clientWidth,
//     docST = document.documentElement.scrollTop||document.body.scrollTop,
//     docSL = document.documentElement.scrollLeft||document.body.scrollLeft;
//     return {dw:docw,dh:doch,st:docST,sl:docSL};
// };