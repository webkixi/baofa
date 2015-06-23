//页面注册数据
var 
__form_log = $('#login-form'),   //form
__f = __form_log[0],
chk={};
chk.username={}; 
chk.ultimate={};  //store async check state for ultimate submit
chk['event-src']='';   //who trigger event;

 //校验函数
var formValide = form_valide;

//页面数据
function getFormData(){
    var 
    form_data = {
          'username' : { 'ipt' : __f['username'],'tip' : $('.lo-tips')[0], 'ptip' : '' }
        , 'password' : { 'ipt' : __f['password'],'tip' : '', 'ptip': '' }
        , 'verify'   : { 'ipt' : __f['verify'],'tip' : $('#verify-tip'), 'ptip':'' } 
        , 'mverify'  : { 'ipt' : __f['mverify'],'tip':$('#u-tip'), 'ptip':'' }
    }
    return form_data;
}

/*
*  校验开始
*  规则
*  校验
*/        
 //custom rule to replace default rule
var chkopts = {            
    username: function(input_obj,reg){   // username 长度大于8，小于20
        var 
        iobj = input_obj,
        ipt = iobj.ipt,
        val = iobj.ipt.value,
        tmp = reg.email.test(val);    //email check

        chk['username']={};
        if(tmp) chk['username']['type'] = 'email';
        // not email
        if(!tmp) {
                tmp = reg.mobile.test(val);   //mobile check
                if(tmp)
                        chk['username']['type'] = 'mobile';
        }
        if(!tmp){
            tmp = reg.username.test(val);   //username check
            if(tmp){
                var 
                len = __strlen(val);
                if(len<4||len>30){
                    tmp=false;
                }
            }
        }
        return tmp;
    },
    password: function(input_obj,reg){
        var 
        iobj = input_obj,
        ipt = iobj.ipt,
        val = iobj.ipt.value,
        tmp = true,
        level = (val.length>7) ? 0 + (val.length>7) + (/[a-z]/.test(val) && /[A-Z]/.test(val)) + (/\d/.test(val) && /\D/.test(val)) + (/\W/.test(val) && /\w/.test(val)) + (val.length > 12) : 0;  //level  0  1  2  3  4  password stronger
        if(val.length>20||/\s/.test(val)) level=0; //不包括空格
        if(level==0||!level){
                tmp = false;
        }
        chk['password']={};
        chk['password']['level']=level;
        return tmp;
    }
}

 //预处理
var __pre = function(name,api,cb){                
    var opts = {};
    opts[name] = api;
    opts[null] = [cb];
    init('chk',opts);
}

//预处理回调
var __aft = {
    'username' : function(){
        var 
        tmp = true;
        inputs = getFormData(),
        ipt = inputs['username']['ipt'],
        tip = inputs['username']['tip'];
        if(chk['pre_username']){
            var ajaxdata = chk['pre_username'];
            if(ajaxdata.status<0) {
                tmp=false;
                $(tip).addClass('show');
            } else{
                switch(ajaxdata.status){
                    case 0 :
                        $(ipt).addClass('u-verified');                        
                    break;                                        
                    case  1 :
                        $(tip).html('邮箱已被注册').addClass('show');
                        $(ipt).addClass('u-error').removeClass('u-verified');
                    break;
                    case  2 :
                        $(tip).html('手机已被注册').addClass('show');
                        $(ipt).addClass('u-error').removeClass('u-verified');
                    break;
                }
            }
            if(ajaxdata.status>0)  tmp=false;
            else {
                tmp=true;
                chk['ultimate']['username']=tmp;
            }
        }
        return tmp;
    },
    'sendmsg' : function(){                       
            if(chk['pre_sendmsg']){
                var data = chk['pre_sendmsg'];
                tips(data['msg']);
                // $('.changeCode').trigger('click');
            }
    },
    'pclogin' : function(){
        var inputs = getFormData();
        if(chk['pre_pclogin']){
            var data = chk['pre_pclogin'];
            if(data.status||data.status == 0){       
                if (data.status == 1) {
                    //iframe
                    if (top.location != self.location){
                        top.location=jump_url;        
                    }else{
                        tips('登录成功，感谢有您!');
                        window.location = jump_url;
                    }
                } else if (data.status == 0) {
                    //用户名不存在  或者密码错误                                                                
                    if(data.field_name=='verify') {
                        tipBehavior('verify',false);   
                    }else{
                        tipBehavior('username',false,'用户名或密码错误');
                    }
                    if(data.need_verify==1){
                        $('#verify-filed').removeClass('hide');
                    }                                                
                }else {
                    tipBehavior('username',false,'请输入正确的邮箱或手机号');
                }
            }
        }
        // $('.changeCode').trigger('click');
    },
    'verify' : function(){
        var 
        tmp = true;
        inputs = getFormData(),
        ipt = inputs['verify']['ipt'],
        tip = inputs['verify']['tip'];                        
        if(chk['pre_verify']){
            var data = chk['pre_verify'];                                
            if(data.status!=0){
                tmp=false;
                chk['event-src']='';
                chk['msg-sendding']=false;
                commonTip();
            }else{
                tmp=true;
                commonTip();
                chk['ultimate']['verify']=tmp;
                if(chk['ultimate']['submit']){
                    do_action('delaySubmit');
                }
                if(chk['event-src']=='sendmsg'){                                                
                    chk['event-src']='';                                                
                    do_action('send_mobile_msg');
                }
            }
        }

        function commonTip(){
            if(!tmp){
                $(tip).addClass('show');
                $(ipt).addClass('u-error').removeClass('u-verified').addClass('u-verified-err');
                $('.changeCode').trigger('click');
            }
            else{
                $(tip).removeClass('show');
                $(ipt).removeClass('u-error').removeClass('u-verified-err').addClass('u-verified');
            }
        }
        return tmp;
    }
}       

//On the result of validate input value, do something
function tipBehavior(name,booler,prompt){
    var
    inputs = getFormData(),
    ipt = inputs[name] ? inputs[name]['ipt'] : ''  ,
    tip = inputs[name] ? inputs[name]['tip'] : ''  ,
    ptip = inputs[name] ? inputs[name]['ptip'] :'' ;

    //public tip method
    function commonTip(msg){
        if(booler){
            $(ipt).removeClass('u-error').removeClass('u-verified-err').addClass('u-verified');
            $(tip).removeClass('show');
            $(ptip).removeClass('show');
        }else{
            msg ? $(tip).html(msg).addClass('show') : $(tip).addClass('show') 
            $(ipt).addClass('u-error').removeClass('u-verified').addClass('u-verified-err');
        }
    }

    if(name=='username'){
        prompt ? commonTip(prompt) : commonTip() ;
        if(booler){
            // if need async then use the fllow;

            //  if  chk['ultimate']['submit'] is true , the submit opration right will change to async callback, 
            //  the function in __aft['xxx']
            // chk['ultimate']['username'] = false;
            // chk['ultimate']['submit']=false;

            //get data from back-end that to deal with
            // api = {url:'/',data:{'ctl':'ajax' , 'act':'check_email_and_mobile' , 'email' : ipt.value, 'type':chk['username']['type'] ,'async' : false}};
            // __pre('pre_username', api, __aft['username']); 
            //send mobile verify code
            $('.btn-send-msg').bind('click',function(){
                 chk['event-src'] = 'sendmsg';
                 if(!chk['msg-sendding']){
                     chk['msg-sendding'] = true;   // start countdown trigger, if true, user cannot send message for mobile
                     $(inputs['verify']['ipt']).trigger('blur',[true,ipt.value]);
                 }
            });
        }
    }
    if(name=='mverify'){
        commonTip();
    }
    if(name=='verify'){
        commonTip();
        if(booler){
            //  if  chk['ultimate']['submit'] is true , the submit opration right will change to async callback, 
            //  the function in __aft['xxx']
            chk['ultimate']['verify'] = false;
            chk['ultimate']['submit']=false;

            //get data from back-end that to deal with
            api = {url:'/',data:{'ctl':'ajax' , 'act':'check_email_and_mobile' , 'verify' : ipt.value ,'async' : false}};
            __pre('pre_verify', api, __aft['verify']); 
        }
    }
}

 /*
*  bind input element default event method
*  click, blur, keyup
*/
function bindInputDefaultEvent(){
    var 
    inpt,
    tmp,
    inputs = getFormData();

    //verify code refrash
    $('.changeCode').bind('click',function(){
        var timenow = new Date().getTime();
        $('#verify_image1').attr("src", "verify.php?rand=" + timenow);
    });

    // .u-ipt is css class of input
    $('.u-ipt').bind('focus',function(){
        $(this).siblings('.u-placeholder').addClass('hide');
    });
    $('.u-ipt').bind('blur',function(){                        
        if(!this.value)
            $(this).siblings('.u-placeholder').removeClass('hide');
    });
    // input prompt
    $('.u-placeholder').click(function(){
        $(this).siblings('.u-ipt').trigger('focus');
    });


    for(var ipt in inputs){
        var inpt = inputs[ipt]['ipt']; 
        (function(ele){
            var 
            ipt = inputs[ele]['ipt'],
            tip =    inputs[ele]['tip'],
            ptip = inputs[ele]['ptip'],
            api ;

            if(ipt){
                ipt.value='';
            }

            if(ele=='username'){
                //blur  behavior  will  valide form then check back-end data and deal with
                $(ipt).bind('blur',function(){
                    //form valide
                   tmp = formValide(chkopts)
                   (inputs[ele],'username')
                   ();
                    //valide behavior
                    tipBehavior('username',tmp);
                });
            }
            if(ele=='mverify'){
                $(ipt).bind('blur',function(){
                    //form valide
                   tmp = formValide({'popmsg':false})
                   (ipt.value,'verify_m')
                   ();
                   //valide behavior
                   tipBehavior('mverify',tmp);
                });
            }
            if(ele=='verify'){
                $(ipt).bind('blur',function(){

                   //send mobile message
                   if(arguments.length>1){
                            //
                        var sendmsg = arguments[1];
                        var phone = arguments[2];
                        if(sendmsg && phone && tmp){
                            //send message to user phone;
                            function sendMobileMsg(){
                                 var that = $('.btn-send-msg');
                                 that.addClass('u-wait');
                                 
                                 // countdown 60 seconds
                                 var count = 60;
                                 chk['ttt'] = setInterval(function(){
                                    that.html(--count);
                                    if(count==0){
                                            clearInterval(chk['ttt']);
                                            chk['msg-sendding'] = false;  // user can send message again;
                                            $('.btn-send-msg').removeClass('u-wait').html('重新发送');
                                    }
                                 }, 1000);

                                api = {url:mobile_url , data:{'mobile':phone , 'code':ipt.value , 'async' : false}};
                                __pre('pre_sendmsg', api, __aft['sendmsg']);
                            }
                            add_action('send_mobile_msg',sendMobileMsg);
                       }
                   }

                   //form valide
                   tmp = formValide({'popmsg':false})
                   (ipt.value,'verify')
                   ();

                   //valide behavior
                   tipBehavior('verify',tmp);
                });
            }
        })(ipt)
    }
}

bindInputDefaultEvent();

//ultimate submit   second
function checkAndPostForm(){
    var inputs = getFormData();
    var user_type = true;
    
    user_type = formValide(chkopts)
                         (inputs['username'], 'username')
                         ();
    if(user_type){
         function delaySubmit(){
            var tmp = true;
            for(var stat  in chk['ultimate']){
               if(!chk['ultimate'][stat])
                    tmp = false;
            }
            if(tmp)
                do_action('loginto');
            else{
                // tips('请正确填写登陆信息', 'alert');
                // $('.changeCode').trigger('click');
            }
         }
         setTimeout(delaySubmit, 300);
         add_action('delaySubmit', delaySubmit);
    }else{
        // tips('请正确填写登录信息', 'alert');
    }
}

// submit to login
function submitLogin(){
    var inputs = getFormData();
    var query={
        email       : inputs['username']['ipt'].value,
        user_pwd    : $.base64.encode(inputs['password']['ipt'].value),
        auto_login  : $('#agree_userterm').val(),
        ajax               :1
    };
    if(!$('#verify-filed').hasClass('hide')){
        query['verify'] =  inputs['verify']['ipt'].value;
    }

    api = {"url" : login_url, data : query };
    __pre('pre_pclogin' , api , __aft['pclogin']); 
}

add_action('loginto',submitLogin);


//submit to gobuy
function submitGoBuy(){
    var inputs = getFormData();
    var query={
        email            : inputs['username']['ipt'].value,
        user_pwd    : $.base64.encode(inputs['password']['ipt'].value),
        auto_login  : $('#agree_userterm').val(),
        ajax               :1
    };
    if(!$('#verify-filed').hasClass('hide')){
        query['verify'] =  inputs['verify']['ipt'].value;
    }

    api = {"url" : login_url, data : query };
    __pre('pre_pclogin' , api , __aft['pclogin']); 
}

add_action('logingobuy',submitLogin);

//校验
$('#submit-btn-login').click(function(){
    //change the submit opration right to __aft['xxx']  function
    chk['ultimate']['submit']=true;
    checkAndPostForm();
});

$('.plusLink').click(function(){
    $(".moreLinksBox").toggleClass("hide");
    $(this).toggleClass("plusLinkOn");
});



if (top.location != self.location){
    $('.container').removeClass('container').removeClass('bg-reg');
    $('.reg-content').removeClass('reg-content').css({'float':'none','width':'326px'});
    $('.auth-tips:first').removeClass('auth-tips').addClass('auth-tips-top');
    $('.auth-tips-top').addClass('hide');
    $('.response').hide();
    $('.response_title').removeClass('reg-title').removeClass('register-tit').html('');
    $('#main').css('background','none');

    $('.btn-login').remove('btn-login').addClass('login-btn');
    $('.freereg-btn').removeClass('hide');

    //next  for gobuy
    $('.freereg-btn').click(function(){
        $('#for-login').remove();
        $('#for-gobuy').removeClass('hide');
        $('.m-reg-hd').remove();
        $('.m-pop-tit').html('<strong>免注册购买</strong>');

        __f = $('#gobuy-form')[0];   //init form
        bindInputDefaultEvent();  // rebind event to form element
    }) ;

    /**
     * [tabSwitch tab切换]
     */
    $.fn.tabSwitch = function(options){
        var opts = $.extend( {
            objev         : "click",                    //调用事件
            objBtn        : "a",                        //触发元素
            objBox        : ".m-reg-bd .m-regbd-c"      //目标元素
        }, options);
        var $this = $(this);        
        this.each(function(){
            $(this).find(opts.objBtn).on(opts.objev,function(){
                var index = $(this).index();
                $(this).addClass("on").siblings().removeClass("on");
                $(opts.objBox).eq(index).show().siblings().hide();
            });
        });
    };


    var tpl = '<div class="m-pop-reg">\
            <div class="m-pop-c">\
                <div class="m-pop-tit">\
                    <strong>唯一优品会员</strong>\
                </div>\
                <div class="m-reg-tab">\
                        <div class="m-reg-hd clear">\
                            <a href="javascript:;" class="on">登录</a>\
                            <a href="javascript:;">注册</a>\
                        </div><div class="m-reg-bd">\
                            <div id="ifr_login" class="m-regbd-c m-regbd-login" style="display:block;overflow:hidden;">\
                            </div>\
                            <div id="ifr_register" class="m-regbd-c">\
                            </div>\
                        </div>\
                    </div>\
                </div>\
        </div>';

    var 
    login = $('#main'),
    register;

    var  // for register
    pop_register_div   = document.createElement('div');
    pop_register_div.style.cssText = 'display:block;overflow:hidden;';
    
    var  // for register
    pop_register_ifram = document.createElement('iframe');
    pop_register_ifram.frameBorder=0;
    pop_register_ifram.scrolling='no';
    pop_register_ifram.src = '/index.php?ctl=user&act=register';
    pop_register_ifram.style.cssText = 'width:400px;height:430px;display:block;';

    pop_register_div.appendChild(pop_register_ifram);
    register = pop_register_div.outerHTML;


    $('body').append(tpl);
    $('#ifr_register').append(register);
    $('#ifr_login').append(login);
    $(".m-reg-hd").tabSwitch();
}