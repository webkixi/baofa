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