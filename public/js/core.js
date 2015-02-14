//md5
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t),e=(n>>16)+(t>>16)+(r>>16);return e<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,u,o,c,f){return t(r(t(t(e,n),t(o,f)),c),u)}function u(n,t,r,u,o,c,f){return e(t&r|~t&u,n,t,o,c,f)}function o(n,t,r,u,o,c,f){return e(t&u|r&~u,n,t,o,c,f)}function c(n,t,r,u,o,c,f){return e(t^r^u,n,t,o,c,f)}function f(n,t,r,u,o,c,f){return e(r^(t|~u),n,t,o,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;var e,i,a,h,d,g=1732584193,l=-271733879,v=-1732584194,C=271733878;for(e=0;e<n.length;e+=16)i=g,a=l,h=v,d=C,g=u(g,l,v,C,n[e],7,-680876936),C=u(C,g,l,v,n[e+1],12,-389564586),v=u(v,C,g,l,n[e+2],17,606105819),l=u(l,v,C,g,n[e+3],22,-1044525330),g=u(g,l,v,C,n[e+4],7,-176418897),C=u(C,g,l,v,n[e+5],12,1200080426),v=u(v,C,g,l,n[e+6],17,-1473231341),l=u(l,v,C,g,n[e+7],22,-45705983),g=u(g,l,v,C,n[e+8],7,1770035416),C=u(C,g,l,v,n[e+9],12,-1958414417),v=u(v,C,g,l,n[e+10],17,-42063),l=u(l,v,C,g,n[e+11],22,-1990404162),g=u(g,l,v,C,n[e+12],7,1804603682),C=u(C,g,l,v,n[e+13],12,-40341101),v=u(v,C,g,l,n[e+14],17,-1502002290),l=u(l,v,C,g,n[e+15],22,1236535329),g=o(g,l,v,C,n[e+1],5,-165796510),C=o(C,g,l,v,n[e+6],9,-1069501632),v=o(v,C,g,l,n[e+11],14,643717713),l=o(l,v,C,g,n[e],20,-373897302),g=o(g,l,v,C,n[e+5],5,-701558691),C=o(C,g,l,v,n[e+10],9,38016083),v=o(v,C,g,l,n[e+15],14,-660478335),l=o(l,v,C,g,n[e+4],20,-405537848),g=o(g,l,v,C,n[e+9],5,568446438),C=o(C,g,l,v,n[e+14],9,-1019803690),v=o(v,C,g,l,n[e+3],14,-187363961),l=o(l,v,C,g,n[e+8],20,1163531501),g=o(g,l,v,C,n[e+13],5,-1444681467),C=o(C,g,l,v,n[e+2],9,-51403784),v=o(v,C,g,l,n[e+7],14,1735328473),l=o(l,v,C,g,n[e+12],20,-1926607734),g=c(g,l,v,C,n[e+5],4,-378558),C=c(C,g,l,v,n[e+8],11,-2022574463),v=c(v,C,g,l,n[e+11],16,1839030562),l=c(l,v,C,g,n[e+14],23,-35309556),g=c(g,l,v,C,n[e+1],4,-1530992060),C=c(C,g,l,v,n[e+4],11,1272893353),v=c(v,C,g,l,n[e+7],16,-155497632),l=c(l,v,C,g,n[e+10],23,-1094730640),g=c(g,l,v,C,n[e+13],4,681279174),C=c(C,g,l,v,n[e],11,-358537222),v=c(v,C,g,l,n[e+3],16,-722521979),l=c(l,v,C,g,n[e+6],23,76029189),g=c(g,l,v,C,n[e+9],4,-640364487),C=c(C,g,l,v,n[e+12],11,-421815835),v=c(v,C,g,l,n[e+15],16,530742520),l=c(l,v,C,g,n[e+2],23,-995338651),g=f(g,l,v,C,n[e],6,-198630844),C=f(C,g,l,v,n[e+7],10,1126891415),v=f(v,C,g,l,n[e+14],15,-1416354905),l=f(l,v,C,g,n[e+5],21,-57434055),g=f(g,l,v,C,n[e+12],6,1700485571),C=f(C,g,l,v,n[e+3],10,-1894986606),v=f(v,C,g,l,n[e+10],15,-1051523),l=f(l,v,C,g,n[e+1],21,-2054922799),g=f(g,l,v,C,n[e+8],6,1873313359),C=f(C,g,l,v,n[e+15],10,-30611744),v=f(v,C,g,l,n[e+6],15,-1560198380),l=f(l,v,C,g,n[e+13],21,1309151649),g=f(g,l,v,C,n[e+4],6,-145523070),C=f(C,g,l,v,n[e+11],10,-1120210379),v=f(v,C,g,l,n[e+2],15,718787259),l=f(l,v,C,g,n[e+9],21,-343485551),g=t(g,i),l=t(l,a),v=t(v,h),C=t(C,d);return[g,l,v,C]}function a(n){var t,r="";for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(255&n[t>>5]>>>t%32);return r}function h(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function d(n){return a(i(h(n),8*n.length))}function g(n,t){var r,e,u=h(n),o=[],c=[];for(o[15]=c[15]=void 0,u.length>16&&(u=i(u,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^u[r],c[r]=1549556828^u[r];return e=i(o.concat(h(t)),512+8*t.length),a(i(c.concat(e),640))}function l(n){var t,r,e="0123456789abcdef",u="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),u+=e.charAt(15&t>>>4)+e.charAt(15&t);return u}function v(n){return unescape(encodeURIComponent(n))}function C(n){return d(v(n))}function m(n){return l(C(n))}function s(n,t){return g(v(n),v(t))}function A(n,t){return l(s(n,t))}function p(n,t,r){return t?r?s(t,n):A(t,n):r?C(n):m(n)}"function"==typeof define&&define.amd?define(function(){return p}):n.md5=p}(window);

function __arg2arr(args){ return Array.prototype.slice.call(args); }

function __obj2str(o) {  
    (function obj2str(o){
        var r = [];
        if(typeof o == "string" || o == null ) {
            return o;
        }
        if(__getClass(o)=='Function'){
            return o.toString();
        }
        if(__getClass(o)=='Array'){
            return o.toString();
        }
        // if(typeof o == "object"){
        if(__getClass(o)=='Object'){
            if(!o.sort){
                r[0]="{"
                for(var i in o){
                    r[r.length]=i;
                    r[r.length]=":";
                    if(typeof o[i] =='object'&&o[i].top&&o[i].window&&o[i].location){
                        r[r.length] = 'window';
                    }else{
                        r[r.length]=obj2str(o[i]);
                    }
                    r[r.length]=",";
                }
                r[r.length-1]="}"
            }else{
                r[0]="["
                // alert(o.length);
                for(var i =0;i<o.length;i++){
                    r[r.length]=obj2str(o[i]);
                    r[r.length]=",";
                }
                r[r.length-1]="]"
            }
            return r.join("");
        }
        return o.toString();
    })(o);
} 


function __measureDoc(){      
    if(!jQuery.support.opacity){
        var 
        doch = document.documentElement.clientHeight||document.body.clientHeight, 
        docw = document.documentElement.clientWidth||document.body.clientWidth,
        docST = document.documentElement.scrollTop||document.body.scrollTop,
        docSL = document.documentElement.scrollLeft||document.body.scrollLeft;
        return {dw:docw,dh:doch,st:docST,sl:docSL};
    }else{        
        var 
        doch = document.body.clientHeight||document.documentElement.clientHeight,
        docw = document.body.clientWidth||document.documentElement.clientWidth,
        docST = document.body.scrollTop||document.documentElement.scrollTop,
        docSL = document.body.scrollLeft||document.documentElement.scrollLeft;
        return {dw:docw,dh:doch,st:docST,sl:docSL};
    }
};

function HashMap() {  
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

//模板替换方法
function tpl(tpl,jsondata){
    if(__getClass(tpl)=='String'){

    }
    
    if(__getClass(tpl)=='Object'){

    }

    if(__getClass(tpl)=='Array'){

    }
    // return vg.rpl(tpl,jsondata).gettmp();
}


/*
 * init
*/

var 
ctx,
neeed={'length':0};

//ajax stack priority high
var 
ajaxStack=[],
ajaxVarStack=[],
ajaxResultStack=[];

//normal stack  priority low
var 
funStack = [],
funVerStack = [],
funResultStack = [];

var resault={};

//stack数据集合
var all_stacks=[];


function needs(context,opts,callback){
    var 
    req,
    ajaxitem,
    cbk = callback,
    defaults = {
        url:'',
        method:'post',
        data:'',
        type:'json'
    };


    //normal stack  priority low
    if(funVerStack.length){
        var 
        pre_stacks = {
            'ctx' : ctx,
            'resault' : resault,
            'fun_stack' : funStack,
            'fun_ver_stack' : funVerStack,
            'fun_result_stack' : funResultStack
        };
        all_stacks.push(pre_stacks);
    }

    ctx = context==window ? context : (function(){ window.context = context; return window.context;})();
    //ajax stack priority high
    ajaxStack=[];
    ajaxVarStack=[];
    ajaxResultStack=[];


    funStack = [];
    funVerStack = [];
    funResultStack = [];

    resault={};
    for(var iii in opts){            
        if(__getClass(opts[iii])=='Object'){
            if(opts[iii].jquery){
                var ele = opts[iii];
                ctx['views'][iii] = ele;
                // console.log(ele);
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
                    }
                }                    
            }
        }else if(__getClass(opts[iii])=='Function'){
            var fun = opts[iii];
            funStack.push(fun);
            funVerStack.push(iii);
            add_action(iii,fun,fun.length,ctx);

        }else if(__getClass(opts[iii])=='Array'){                
            var ary = opts[iii];                
            if(__getClass(ary[0])!=='Function') return;                
            funStack.push(ary);
            funVerStack.push(iii);                
            if(iii!=='null') add_action(iii,ary,ary[0].length,ctx);
        }else{
            if(iii='stop') needs.stop(opts[iii]);
            else
                ctx[iii] = opts[iii];
        }
    }

    var tmp;
    function cb(err,data){
        if(data) {    
            var vtmp = ajaxVarStack.shift();
            resault[vtmp] = data;
            ajaxResultStack.push(data);
        }
        if(ajaxStack.length>0){
            tmp = ajaxStack.shift();
            runajax(tmp);
        }else{
            for(var v in resault){
                ctx[v] = resault[v];                
            }
            ajaxStack=[];
            ajaxVarStack=[];
            ajaxResultStack=[];
            // resault={};

            if(funVerStack.length>0){                                  
                var tfun;
                var tprompt;
                var doact;
                // for(var i=0; i<funVerStack.length; i++){
                //     (function(j){
                //         doact = funVerStack[j];
                //         if(__getClass(funStack[j])=='Function'){
                //             ctx[doact] = funStack[j];
                //         }
                //         else if(__getClass(funStack[j])=='Array'){
                //             if(doact=='null') {
                //                 var ary = funStack[j];
                //                 for(var kkk=0; kkk<ary.length; kkk++){
                //                     if(__getClass(ary[kkk])!=='Function'){
                //                         // tips.pop('null后的数组元素必须为函数','alert');
                //                         tips('null后的数组元素必须为函数','alert');
                //                         return false;
                //                     }
                //                 }
                //                 for(var kkk=0; kkk<ary.length; kkk++){
                //                     (function(itr){
                //                         ary[itr].apply(ctx);
                //                     })(kkk);
                //                 }
                //             } else {
                //                 doact = funVerStack[j];
                //                 tfun = funStack[j][0];
                //                 tprompt = funStack[j].slice(1);
                //                 ctx[doact] = tfun;
                //             }
                //         }
                //         if(tprompt&&tprompt.length>0){  
                //             do_action(doact,tprompt);                       
                //         }else{   
                //             do_action(doact)                             
                //         }
                //     })(i)
                // }

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
                            tmp = do_action(doact,tprompt);
                        }else{
                            tmp = do_action(doact);
                        }

                        if(tmp){
                            if(tmp['done']=='next'){
                                var rst = needs.restore(tmp['value']);
                                if(rst['done']==true){
                                    execSyncFun();    
                                }
                            }else{
                                execSyncFun();
                            }
                        }else{
                            execSyncFun();
                        }
                    }
                }
                add_action('init_exec',execSyncFun);

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

needs.stop = function(name){        
    var pre_neeed;
    if(!name) return false;
    if(!all_stacks.length) return false;

    if(all_stacks.length>0){            
        pre_neeed = all_stacks.shift();
        neeed[name] = pre_neeed;
        neeed['length'] = parseInt(neeed['length'])+1;
    }

    do_action('init_exec');

    // return {'value':name,'done':'stop'};
}

needs.next = function(name){
    if(!name) return false;
    if(neeed.length<=0) return false;
    if(!neeed[name]) return false;                
    return {'value':name,'done':'next'};
}    

needs.restore = function(name){        
    var restore_neeed;
    var rtn = {'value':undefined,'done':false};
    if(!name) return rtn;
    if(neeed.length<=0) return rtn;
    if(!neeed[name]) return rtn;
    restore_neeed = neeed[name];

    funStack = restore_neeed['fun_stack'];
    funVerStack = restore_neeed['fun_ver_stack'];
    funResultStack = restore_neeed['fun_result_stack'];
    ctx = restore_neeed['ctx'];
    resault = restore_neeed['resault'];

    return {'value':undefined,'done':true};
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
                    tmp.ctx[name] = tmp.fun.apply(tmp.ctx,argmts);
                    return tmp.ctx[name];
                }else{
                    tmp.ctx[name] = tmp.fun.apply(tmp.ctx)  //tmp.fun();
                    return tmp.ctx[name];
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
                    }else if(__obj2str(funs[j])==__obj2str(fun)){
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
        this.anim(item,box);
        return;
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