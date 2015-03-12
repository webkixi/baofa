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
tips = msgtips;

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
.m-layer{display:none;position:fixed;_position:absolute;z-index:2999;}\n\
.m-layer .lymask{position:absolute;background:#000;opacity:0.5;filter:alpha(opacity=50);}\n\
.m-layer .lytable{table-layout:fixed;width:100%;height:100%;}\n\
.m-layer .lytd{width:100%;height:100%;vertical-align:middle;}\n\
.m-layer .lywrap{position:relative;margin:0 auto; background: #fff;padding:15px;}\n\
.m-layer-show{display:block;}\n';

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
        var 
        box_width='width:400px;'        
        
        if(__getClass(stat)=='Object'){            
            if(stat.width) box_width = 'width:'+stat.width;
        }
        
        var 
        closebtn = '<img id="closePop" style="position:absolute;right:20px;top:20px;cursor:pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM4MTM0MjVBMkQwMTFFNEIwOTA4MDQ4M0IwOUIzQTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM4MTM0MjZBMkQwMTFFNEIwOTA4MDQ4M0IwOUIzQTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzgxMzQyM0EyRDAxMUU0QjA5MDgwNDgzQjA5QjNBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzgxMzQyNEEyRDAxMUU0QjA5MDgwNDgzQjA5QjNBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi/jzu8AAABWSURBVHjalJDRDcBACEKF/UdzJ5u0adLzkEv5xEcUkZkVjxBeN8duOPgN4BD6eqA4pya4n9RDpWZs61XxxWP8FE1B6dEUxPTWmAqqEA0sQzzA2+wSYABDMBR7Ctr/ZwAAAABJRU5ErkJggg==">',
        ccc = '<div class="lymask"></div><table class="lytable"><tbody><tr><td class="lytd"><div class="lywrap" style="'+box_width+'"></div></td></tr></tbody></table>';

        $(box).html(ccc);
        $msg = $(msg);
        $(box).find('.lywrap').html(msg).append(closebtn);

        $(box).show();
        $("#closePop").click(function(){
            $(".m-layer").removeClass('m-layer-show');
            // $(box).remove();
        });

        $('body').bind('close_masker_box',function(){
            $(".m-layer").removeClass('m-layer-show');
            // $(box).remove();
        });
    };

    if(cb) tan.pop(msg,stat,cb);
    else
        tan.pop(msg,stat);

    return tan;
}