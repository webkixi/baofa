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

var rpl=function(tmp,data){
    if(!data)return false;
    tmp = tmp.replace(/\{\{(.*?)\}\}/gi,function(a,b){            
            return eval(b);
        });
    return tmp;
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
window.tanbox = tanbox;



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
            closebtn.src = '/app/Tpl/ve_2_1/vetpl/Style/Css/img/icon-close.png';
            
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
window.maskbox = maskBox;

function rsp(name,condition){
    $(window).resize(function(){
        if(condition==true || $(condition).length){
            do_action(name);
        }
    });
}
window.rsp = rsp;

function one(ele,opts,cb){
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