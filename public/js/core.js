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

function makeView(item){
    if(__getClass(item)!=='Object'){
        return [];
    }else{
        if(item.jquery){
            var 
            tmp_tpl = item.removeClass('hidden').prop('outerHTML');
            item.remove();
            return {
                'tpl': {'body'  : tmp_tpl,
                        'looper': (function(){
                                    return $(tmp_tpl).find('.looper').length ? $(tmp_tpl).find('.looper').prop('outerHTML') : '';
                                })()
                       }
            }
        }
    }
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

//base end



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

function rsp(name,condition){
    $(window).resize(function(){
        if(condition==true || $(condition).length){
            do_action(name);
        }
    });
}

count = 0;
function one(ele,opts,cb){
    if(!$(ele).length) return;
    var
    ttt,    
    defaults = {
        method : 'click',
        delay : 0
    };
    if(opts&&opts!='') opts = $.extend({},defaults,opts);
    else opts = defaults;

    if(opts.delay>10)opts.delay=10;

    if(count == 0){
        count = 1;
        $(ele).one(opts['method'],function(e){
            cb(e);
            if(opts['delay']!=0){
                // opts['ttt'] = setTimeout(function(){
                ttt = setTimeout(function(){
                    count = 0;
                }, delay);
            }
        });
    }
}

//toolbase end

window.__creatStyle = creatStyle;