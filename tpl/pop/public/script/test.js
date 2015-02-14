<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<link rel="stylesheet" href="{$TMPL}/vetpl/public/style/reset.css">
<link rel="stylesheet" href="{$TMPL}/vetpl/public/style/app_down.css">
<title>唯一优品客户端下载_唯一优品</title>
    <script type="text/javascript" src="{$TMPL}/vetpl/Script/Jquery.1.8.3.min.js"></script>
</head>

<body>
    <div class="app_down_bg">
        <div class="app_down_box center">
            <div class="nav">
                {foreach from=$nav_list item=a}<a href="{$a.url}#f=download_nav&md={$MODULE_NAME}" {if $a.blank!=false} target="_blank" {/if} {if $title==$a.name}class="selected"{/if}>{$a.name}</a>{/foreach}
            </div>

            <div class="app1">
                <a href="http://www.ve.cn#f=download_app&md={$MODULE_NAME}" title="唯一优品"></a>
                <div class="clear"></div>
                <div class="app_down fr">
                    <a href="https://itunes.apple.com/us/app/wei-yi-you-pin/id912303412?l=zh&ls=1&mt=8" target="_blank" title="下载iphone app"></a>
                    <a href="{url x="download#downloadApp"}#f=download_app&md={$MODULE_NAME}" target="_blank" title="下载android app"></a>
                </div>
            </div>
            <div class="app2"></div>
            <div class="app3"></div>
            <div class="app4"></div>
            <div class="app5"></div>
            <div class="app6"></div>
            <div class="app7"></div>
            <div class="copyright">
                <p>{$COPYRIGHT}<br/>
                    <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备14068931号-1</a> | <a target="_blank" href="{$TMPL}/vetpl/Style_ve2/Img/yyzz.jpg">营业执照</a> | <a target="_blank" href="{$TMPL}/vetpl/Style_ve2/Img/bbbd.jpg">中华财险</a> | <a target="_blank" href="{$TMPL}/vetpl/Style_ve2/Img/spxk.jpg">食品流通许可证 SP4401061410023262</a></p>
            </div>
            <div class="footer-link">
                    <a href="javascript:;" title="可信网站身份验证" rel="nofollow"><img src="{$TMPL}/vetpl/Style_ve2/Img/f_logo_01.jpg"></a>
                    <a href="http://www.gzaic.gov.cn/GZCX/WebUI/credit/qiyeInfo.htm" target="_blank" title="广州市工商行政管理局" rel="nofollow"><img src="{$TMPL}/vetpl/Style_ve2/Img/f_logo_02.jpg"></a>
                    <a href="javascript:;" title="" rel="nofollow"><img src="{$TMPL}/vetpl/Style_ve2/Img/f_logo_03.jpg"></a>
                    <a href="javascript:;" title="" rel="nofollow"><img src="{$TMPL}/vetpl/Style_ve2/Img/f_logo_04.jpg"></a>
                    <a href="javascript:;" title="" rel="nofollow"><img src="{$TMPL}/vetpl/Style_ve2/Img/f_logo_05.jpg"></a>
                    <a href="javascript:;" title="" rel="nofollow"><img src="{$TMPL}/vetpl/Style_ve2/Img/f_logo_06.jpg"></a>
            </div>
        </div>
    </div>

    <?php echo init_js();?><!-- requireJS -->
    <script type="text/javascript">
        require(['global/g','tpl/toolbar'],function(core,templet){
            // console.log(templet);
            
            window.core = core;
            //EXAMPLE 1
            // core.init(this,{
            //  user: {url:'/',data:{'ctl':'ajax','act':'logininfo'} }
            //  ,pc:  {url:'/',data:{'ctl':'ajax','act':'logininfo'} }
            // },next);

            // function next(){
            //  console.log('function next');
            // }

            //EXAMPLE 2
            // var zone={};
            // core.init(zone,{                     
            //  user: {url:'/',data:{'ctl':'ajax','act':'logininfo'} }
            //  ,pc:  {url:'/',data:{'ctl':'ajax','act':'logininfo'} }
            //  ,www:  {url:'/',data:{'ctl':'ajax','act':'logininfo'} }
            //  ,fun_aa: aaa
            //  ,fun_bb : bbb
            // });

            // function aaa(x,y,c){             
            //  console.log('function abc');
            //  console.log(zone.user);
            //  console.log(zone.fun_aa);   
            // }

            // function bbb(){
            //  console.log('function bbb');
            //  console.log(zone.fun_bb);
            // }
            

            //EXAMPLE 3  
            // core.init(this,{                     
            //  user: {url:'/',data:{'ctl':'ajax','act':'logininfo'} }
            //  ,nav : $('.nav').value
            // });

            //EXAMPLE 4   带参数的函数自执行
            // init(this,{
            //     ttips: [pushmsg,msg]
            // });  

            
            //EXAMPLE 5   批量执行函数方法
            // function aaa(xxx,yyy){
            //  console.log('ni ni ni ni ni ni ni');
            //  console.log(xxx);
            //  console.log(yyy);
            // }
            // function bbb(){
            //  console.log('mei mei mei mei mei mei ');
            // }            

            // var ccc='123';
            // var ddd='456';
            // // core.init(this,{
            // //   doaaa:[aaa, [ccc,ddd]]
            // // });

            // core.add_action('nnn',aaa,aaa.length);
            // core.do_action('nnn',ccc,ddd);


            //EXAMPLE 6
            // var zone={};
            // core.init(zone,{                     
            //  ldtpl: {url:'/test.html',type:'html'}
            //  ,null: [loadtpl]                
            // });
            // function loadtpl(){
            //  // console.log(zone.ldtpl);
            //  // do_action('ldtpl');
            // }


            //EXAMPLE 7   有名批量函数执行
            // function aaa(){
            //  console.log('ni ni ni ni ni ni ni');    
            //  console.log(jdata)
            //  // console.log(xxx);
            // }

            // function bbb(){
            //  console.log('mei mei mei mei mei mei ');
            //  console.log(lulu);
            // }            

            // var ccc='123';
            // var ddd='456';

            // core.init(this,{
            //  jdata: {url:'/',data:{'ctl':'ajax','act':'logininfo'} }
            //  ,doaaa:[aaa, bbb]
            //  ,lulu:templet
            // });

            // core.do_action('doaaa');



            //EXAMPLE    hashmap
            // var aaa = new core.hashmap();
            // aaa.put('abc',{'xxx':'123','yyy':'456'});
            // var bbb = aaa.get('abc');
            // console.log(bbb);


            //EXAMPLE 9   类promise
            core.init(this,{
                doaaa:aaa ,
                dobbb:bbb
            });

            function aaa(){
                core.stop('a');
                console.log('ni ni ni ni ni ni ni');
                core.init(this,{
                    doccc  : ccc
                    // 'stop' : 'a' 
                });             
                console.log('aaaaaaaaaaaaa');
            }

            function bbb(){
                console.log('mei mei mei mei mei mei ');
            }

            function ccc(){
                console.log('cccccccccccccccc');
                core.init(this,{
                    doddd  : ddd
                });
                return core.next('a');
            }

            function ddd(){
                console.log('ddddddddddddddd');
            }

            // core.do_action('doaaa');

        });
            
    </script>


{include file="vetpl/piwik.html"}
{include file="common/common_tree.html"}
</body>

</html>
