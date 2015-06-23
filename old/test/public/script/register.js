var 
__form_reg = $('#formreg'),   //form
__f = __form_reg[0],
chk={};

chk.username={}; 
chk.ultimate={};   //store async check state for ultimate submit
chk.stopMultiClick = false;
chk['event-src']='';   //who trigger event;

//校验函数
var formValide = form_valide;

//页面数据
function getFormData(){
    var 
    form_data = {
          'username' :  { 'ipt' : __f['username'],'tip':$('#username-tip'), 'ptip':$('#username-poptip') }
        , 'mverify' : { 'ipt' : __f['mverify'],'tip':$('#u-tip'), 'ptip':'' }
        , 'password' : { 'ipt' : __f['password'],'tip':$('#password-tip'), 'ptip': $('#password-poptip') } 
        , 'repassword' : { 'ipt' : __f['repassword'],'tip':$('#repassword-tip'), 'ptip':'' }         
        , 'verify' : { 'ipt' : __f['verify'],'tip':$('#verify-tip'), 'ptip':'' } 
    }

    var
    ifr_form_data = {
          'username' :  { 'ipt' : __f['username'],'tip':$('#username-tip'), 'ptip':$('#username-poptip') }
        , 'mverify' : { 'ipt' : __f['mverify'],'tip':$('#u-tip'), 'ptip':'' }
        , 'password' : { 'ipt' : __f['password'],'tip':$('#password-tip'), 'ptip': ''} 
        , 'repassword' : { 'ipt' : __f['repassword'],'tip':$('#repassword-tip'), 'ptip':'' }         
        , 'verify' : { 'ipt' : __f['verify'],'tip':$('#verify-tip'), 'ptip':'' } 
    }

    if(is_add_baby&&is_add_baby!=''){
        form_data.child = { 'ipt' : __f['child'],'tip':$('#username-tip'), 'ptip':'' } ;
        form_data.birthday = { 'ipt' : __f['birthday'],'tip':$('#birthday-tip'), 'ptip':$('#birthday-poptip') } ;
        
        ifr_form_data.child = { 'ipt' : __f['child'],'tip':$('#username-tip'), 'ptip':'' } ;
        ifr_form_data.birthday = { 'ipt' : __f['birthday'],'tip':$('#birthday-tip'), 'ptip':'' } ;
    }

    if (top.location != self.location){
            return ifr_form_data;
    }else
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

        if(tmp) chk['username']['type'] = 'email';
        // not email
        if(!tmp) {
                tmp = reg.mobile.test(val);   //mobile check
                if(tmp)
                        chk['username']['type'] = 'mobile';
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
    },
    repassword: function(input_obj,reg){
        var 
        pobj = input_obj[0],   //password object
        pipt = pobj.ipt,
        pval = pipt.value,
        iobj = input_obj[1],    //repassword object
        ipt = iobj.ipt,
        val = iobj.ipt.value,
        tmp = true;

        if(val!==pval)
                tmp = false;

        return tmp;
    },
    birthday: function(input_obj,reg){
        var 
        cobj = input_obj[0],   //child object
        cipt = cobj.ipt,
        cval = cipt.value,
        iobj = input_obj[1],    //birthday object
        ipt = iobj.ipt,
        val = ipt.value,
        tmp = true;

        tmp = reg.birthday.test(val);    //birthday check
        if(tmp){                                
                if(!cval)
                        tmp=false;
        }
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
                    // $(tip).addClass('show');
                    $(tip).addClass('show').html("返回数据不正确，请耐心等候");
                } else{
                    switch(ajaxdata.status){
                        case 0 :
                                $(ipt).addClass('u-verified');
                        break;                                        
                        case  1 :
                                $(tip).html('邮箱已被注册').addClass('show');
                                $(ipt).addClass('u-error').removeClass('u-verified').addClass('u-verified-err');
                        break;
                        case  2 :
                                $(tip).html('手机已被注册').addClass('show');
                                $(ipt).addClass('u-error').removeClass('u-verified').addClass('u-verified-err');
                        break;                                                
                    }
                }
                if(ajaxdata.status!=0)  tmp=false;
                else {
                    tmp=true;
                    if(chk['ultimate']['submit']){
                        //submit register
                        do_action('delaySubmit');
                    }
                }
        }
        chk['ultimate']['username'] = tmp;
        return tmp;
    },
    'sendmsg' : function(){                       
        if(chk['pre_sendmsg']){
                var data = chk['pre_sendmsg'];                
                tips(data['msg']);
                // $('.changeCode').trigger('click');
        }
    },
    'pcregister' : function(){                       
        if(chk['pre_pcregister']){
            var data = chk['pre_pcregister'];
            tips(data['info']);                                
            //iframe
            if (top.location != self.location){
                    top.top.location=jump_url;        
            }else{
                    top.location=jump_url;
            }
        }
    },
    'mobregister' : function(){                       
        if(chk['pre_mobregister']){
            var data = chk['pre_mobregister'];
            tips(data['info']);
            if (top.location != self.location){
                    top.top.location=jump_url;        
            }else{
                    top.location=jump_url;
            }
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
                            top.top.location=jump_url;        
                    }else{
                            tips('登录成功，感谢有您!');
                            top.location = jump_url;
                    }
                } else if (data.status == 0) {
                    //用户名不存在  或者 // //密码错误                                            
                    if(data.field_name!==''){
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
        $('.changeCode').trigger('click');
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
        return tmp
    }
}        

//after validate input value then exec this function
// this function implementation  interactive effect, like some tips, pop-msg
function tipBehavior(name,booler){
    if(name=="verify_m") {
        name="mverify";
    }
    var
    inputs = getFormData(),
    ipt = inputs[name] ? inputs[name]['ipt'] : '',
    tip = inputs[name] ? inputs[name]['tip'] : '',
    ptip = inputs[name] ? inputs[name]['ptip'] : '';

    //public tip method
    function commonTip(msg){
        if(booler){
            $(ipt).removeClass('u-error').removeClass('u-verified-err').addClass('u-verified');
            $(tip).removeClass('show');
            $(ptip).removeClass('show');
            $('.auth-tips-top').addClass('hide');
        }else{            
            $('.auth-tips-top').addClass('hide');   
            msg ? $(tip).html(msg).addClass('show') : $(tip).addClass('show') 
            $(ipt).addClass('u-error').removeClass('u-verified').addClass('u-verified-err');
        }
    }

    //keyup event will trigged this function, it wile generate the password strength
    function intimePasswordBehavior(lev){                        
        if(lev>=1){
            $('.pwdstr-item').removeClass('strengthB').removeClass('strengthC');
            $('.pwdstr-item').addClass('strengthA');
        }
        if(lev>2){
            $('.pwdstr-item').removeClass('strengthA').removeClass('strengthC');
            $('.pwdstr-item').addClass('strengthB');
        }
        if(lev>=4){
            $('.pwdstr-item').addClass('strengthC');
        }
    }

    if(name=='username'){
        commonTip('请输入正确的邮箱或手机号');
        if(booler){
            chk['username']['type']=='mobile'  ? $('#m_verify').removeClass('hide') : $('#m_verify').addClass('hide');

            //  if  chk['ultimate']['submit']=true , the submit opration right will change to async callback, 
            //  the function in __aft['xxx']
            chk['ultimate']['username'] = false;
            chk['ultimate']['submit']=false;

            //get data from back-end that to deal with
            api = {url:'/',data:{'ctl':'ajax' , 'act':'check_email_and_mobile' , 'email' : ipt.value, 'type':chk['username']['type'] ,'async' : false}};
            __pre('pre_username', api, __aft['username']); 

            //send mobile verify code
            $('.btn-send-msg').bind('click',function(){
                     chk['event-src'] = 'sendmsg';
                     if(!chk['msg-sendding']){
                             chk['msg-sendding'] = true;   // start countdown trigger, if true, user cannot send message for mobile
                             $(inputs['verify']['ipt']).trigger('blur',[true,ipt.value]);
                     }
            });
        }else{
            $('#m_verify').addClass('hide');
        }
    }
    if(name=='mverify'){
            commonTip();
    }
        //in-time get password level
    if(name=='intime_password'){
            if(chk['password']['level']){
                var 
                flag = chk['password']['level'];
                flag>=4 
                    ? intimePasswordBehavior(4)
                    : flag>2 
                        ? intimePasswordBehavior(3)
                        :  flag>=1 
                            ? intimePasswordBehavior(1)
                            :  $('.pwdstr-item').removeClass('strengthA').removeClass('strengthB').removeClass('strengthC');
            }else{
                $('.pwdstr-item').removeClass('strengthA').removeClass('strengthB').removeClass('strengthC');
            }
    }                
    if(name=='password'){                        
        commonTip();                        
        if(inputs['repassword']['ipt'].value){
            $(inputs['repassword']['ipt']).trigger('blur');
        }
    }
    if(name=='repassword'){
        commonTip();
    }
    if(name=='birthday'){
        commonTip();
    }
    if(name=='verify'){
        commonTip();
        if(booler){
            
            //  if  chk['ultimate']['submit']=true , the submit opration right will change to async callback, 
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

    function valideThenBehavior(fckopts,ele,regu,behavior){
        //form valide
        tmp = formValide(fckopts) (ele,regu) ();  
        //thenbehavior
        if(!behavior) behavior = regu;
        tipBehavior(behavior, tmp);
    }
    
    for(var ipt in inputs){                        
        if(ipt=='child') continue;
        var inpt = inputs[ipt]['ipt'];  
        if(!inpt) continue;

        //
        (function(ele){
            var 
            ipt = inputs[ele]['ipt'],
            tip =    inputs[ele]['tip'],
            ptip = inputs[ele]['ptip'],
            api ;

            //refresh this page will empty input value
            if(ipt)ipt.value='';

            //default click opration, will show info
            $(ipt).bind('click',function(){
                $('.auth-tips').removeClass('show');
                $('.auth-tips-top').removeClass('show');
                if(ptip!==''){
                        ptip.addClass('show');
                        $('.auth-tips-top').removeClass('hide');
                }
            });                                

            // default blur opration,  check input value
            //  < username >, < verify>,  will deal with some async data, and then exec some function in __aft['xxx'];
            if(ele=='username'){
                //blur  behavior  will  valide form then check back-end data and deal with
                $(ipt).bind('blur',function(){
                        //form valide
                       // tmp = formValide(chkopts)
                       // (inputs[ele],'username')
                       // ();
                       //  //valide behavior
                       //  tipBehavior('username',tmp);
                        valideThenBehavior(chkopts, inputs[ele], 'username');
                });
            }
            if(ele=='mverify'){
                $(ipt).bind('blur',function(){
                    //form valide
                   // tmp = formValide({'popmsg':false})
                   // (ipt.value,'verify_m')
                   // ();
                   // //valide behavior
                   // tipBehavior('verify_m',tmp);
                   valideThenBehavior({'popmsg':false}, ipt.value, 'verify_m');
                });
            }
            if(ele=='password'){
                $(ipt).bind('keyup',function(){
                   //form valide
                   // tmp = formValide(chkopts)
                   // (inputs[ele],'password')
                   // ();
                   // //valide behavior
                   // tipBehavior('intime_password',tmp);
                   valideThenBehavior(chkopts, inputs[ele], 'password','intime_password');
                });
                $(ipt).bind('blur',function(){
                    //form valide
                   // tmp = formValide(chkopts)
                   // (inputs[ele],'password')
                   // ();
                   // //valide behavior
                   // tipBehavior('password',tmp);
                   valideThenBehavior(chkopts, inputs[ele], 'password');
                });
            }
            if(ele=='repassword'){
                var pwd_item = inputs['password'];
                $(ipt).bind('blur',function(){
                    //form valide
                   // tmp = formValide(chkopts)
                   // ([ pwd_item, inputs[ele] ],'repassword')
                   // ();
                   // //valide behavior
                   // tipBehavior('repassword',tmp);
                   valideThenBehavior(chkopts, [ pwd_item, inputs[ele] ], 'repassword');
                });
            }
            if(is_add_baby==1){
                if(ele=='birthday'){
                    var chd_item = inputs['child'];
                    $(ipt).bind('blur',function(){
                        //form valide
                       // tmp = formValide(chkopts)
                       // ([ chd_item, inputs[ele] ],'birthday')
                       // ();
                       // //valide behavior
                       // tipBehavior('birthday',tmp);              
                       valideThenBehavior(chkopts, [ chd_item, inputs[ele] ], 'birthday');
                    });
                }
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
                                 var 
                                 ttt,
                                 that = $('.btn-send-msg');
                                 that.addClass('u-wait');
                                 
                                 // countdown 60 seconds
                                 var count = 60;
                                 ttt = setInterval(function(){
                                    that.html(--count+'秒');
                                    if(count==0){
                                        clearInterval(ttt);
                                        chk['msg-sendding'] = false;  // user can send message again;
                                        $('.btn-send-msg').removeClass('u-wait').html('重新发送');
                                    }
                                    if(count<0){
                                        clearInterval(ttt);
                                    }
                                 }, 1000);

                                api = {url:mobile_url , data:{'mobile':phone , 'code':ipt.value , 'async' : false}};
                                __pre('pre_sendmsg', api, __aft['sendmsg']);
                            }
                            add_action('send_mobile_msg',sendMobileMsg);
                        }
                   }

                   //form valide
                   // tmp = formValide({'popmsg':false})
                   // (ipt.value,'verify')
                   // ();

                   // //valide behavior
                   // tipBehavior('verify',tmp);
                   valideThenBehavior({'popmsg':false}, ipt.value, 'verify');
                });
            }
        })(ipt);
    }
}


//ultimate submit   second
function checkAndPostForm(){
    var 
    inputs = getFormData(),
    user_type = true,
    tmp_type = true;
    if(is_add_baby==1){
        user_type = formValide(chkopts)
                             (inputs['username'], 'username')
                             (inputs['password'],'password')
                             ([ inputs['password'], inputs['repassword'] ],'repassword')
                             ([ inputs['child'], inputs['birthday'] ],'birthday')
                             ();
    }else{
        user_type = formValide(chkopts)
                             (inputs['username'], 'username')
                             (inputs['password'],'password')
                             ([ inputs['password'], inputs['repassword'] ],'repassword')
                             ();
    }
    tmp_type = user_type;
    if(chk['username']['type']=='mobile'){
        user_type = formValide({'popmsg':false})
                              (inputs['mverify']['ipt'].value,'verify_m')
                              (inputs['verify']['ipt'].value,'verify')
                              ();
    }else{
        user_type = formValide({'popmsg':false})
                              (inputs['verify']['ipt'].value,'verify')
                              ();
    }

    if(user_type&tmp_type){        
         //wait for async opration 600 millisecond, if over 600 millisecond, please check your network
         function delaySubmit(){
            var tmp = true;                                 

            //check async data;
            for(var stat  in chk['ultimate']){                                        
               if(!chk['ultimate'][stat])
                       tmp = false;
            }            
            if(tmp){
                chk.stopMultiClick=true;
                do_action('register');  //post data
            }                               
         }
         setTimeout(delaySubmit, 600);
         add_action('delaySubmit',delaySubmit);
             
    }else{
        tips('请正确填写注册信息', 'alert');
        $('.changeCode').trigger('click');
    }
}

//submit form to back-end
function submitUser(){
    var 
    inputs = getFormData(),
    user_type = true,
    tmp_type = true;

    var child_value = (function(){
        if(is_add_baby){
            if(inputs['child'][ipt]) {
                return inputs['child']['ipt'].value;            
            }
        }
        return 1;
    })();

    var birthday_value = (function(){
        if(is_add_baby){
            if(inputs['birthday'][ipt]) return inputs['birthday']['ipt'].value;
        }
        return '';
    })();

    // mobile
    if(chk['username']['type']=='mobile'){
        var query={
                mobile              : inputs['username']['ipt'].value,
                mobile_pwd    : $.base64.encode(inputs['password']['ipt'].value),
                mobile_pwd_confirm  :  $.base64.encode(inputs['repassword']['ipt'].value),
                verify                 : inputs['verify']['ipt'].value,
                check_mobile : inputs['mverify']['ipt'].value,
                pid                     : register_pid,
                child                  : child_value ,
                birthday          : birthday_value,
                ajax                    :1
        };
        api = {"url" : mobile_post_url, data : query };
        __pre('pre_mobregister',api,__aft['mobregister']);
     }
     // pc
     else{             
        var query={
                email            : inputs['username']['ipt'].value,
                user_name : inputs['username']['ipt'].value,
                user_pwd    : $.base64.encode(inputs['password']['ipt'].value),
                user_pwd_confirm:$.base64.encode(inputs['repassword']['ipt'].value),
                verify            : inputs['verify']['ipt'].value,
                child             : child_value ,
                birthday          : birthday_value,
                ajax               :1
        };
        api = {"url" : pc_post_url, data : query };                                
        __pre('pre_pcregister',api,__aft['pcregister']);
     }
}
add_action('register', submitUser);



//bind method (click, blur)   first
bindInputDefaultEvent();

//校验
$('.submit-btn').click(function(){
    //change the submit opration right to __aft['xxx']  function
    if(!chk.stopMultiClick){
        chk['ultimate']['submit']=true;
        checkAndPostForm();
    }
});

//iframe
if (top.location != self.location){
    $('.container').removeClass('container').removeClass('bg-reg');
    $('.reg-content').removeClass('reg-content').css({'float':'none','width':'326px'});
    $('.auth-tips:first').removeClass('auth-tips').addClass('auth-tips-top');
    $('.auth-tips-top').addClass('hide');
    $('.response').hide();
    $('.response_title').removeClass('reg-title').removeClass('register-tit').html('').css('height','35px');
    $('#main').css('background','none');
    $('.submit-btn').addClass('pop-regist-btn');
}