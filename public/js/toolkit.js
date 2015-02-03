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
        tip.style.cssText = 'display:none;width:100%;margin-top:10px;color:#fff;line-height:40px;font-size:16px;'+bgcolor;
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
        all      : /[\s\S]/,
        tips     : tips
    };
    if(opts&&__getClass(opts)=='Object'){
        old = $.extend({},block);
        block = $.extend(block,opts);
    }
    return function self(val,reg,msg,name) {
        var tips = block.tips;
        popmsg=true;
        if (!val){
            if(arguments.length==0){
                return ckstat;
            }
            else{       
                if(msg) tips(msg,'alert');
                else if(name) tips(name+'不能为空','alert');
                else    tips(reg+'不能为空','alert');
                ckstat = false;                    
                return function(){ 
                    if(arguments.length==0) self();
                    else{ 
                        return arguments.callee 
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
                if(arguments.length==0) self();
                else{
                    return arguments.callee 
            }
            };
        }
        return self;
    };
}

// function __measureDoc(){      
//     var doch = document.documentElement.clientHeight, docw = document.documentElement.clientWidth,
//     docST = document.documentElement.scrollTop||document.body.scrollTop,
//     docSL = document.documentElement.scrollLeft||document.body.scrollLeft;
//     return {dw:docw,dh:doch,st:docST,sl:docSL};
// };