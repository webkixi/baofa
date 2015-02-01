function tips(msg,stat){
    console.log(msg);
}
var __getClass = function(object){
    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};
function form_valide(opts) {        
    var ckstat=true;
    var tmp;
    var old;
    var popmsg=true;   //允许弹出消息
    var block = {
        email    : /^\n+/,
        username : /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
        verify   : /^[a-z\d]{4}$/i,
        verify_m : /^[\d]{6}$/,            
        mobile   : /^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$/, //手机       
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
                    if(arguments.length==0) return ckstat;
                    else return arguments.callee;
                };
                // return self;
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
            if(popmsg){
                if(!msg){
                    if(name) tips(name+'数据不正确','alert');
                    else     tips(reg+'数据不正确','alert');
                }
                else
                    tips(msg,'alert');
                ckstat = false;
            }
            return function(){ 
                if(arguments.length==0) return ckstat;
                else return arguments.callee;
            };
        }
        return self;
    };
}

exports.formv = form_valide;