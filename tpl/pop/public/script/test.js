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
    function aaa(){
        console.log('ni ni ni ni ni ni ni');

        core.init(this,{
            doccc:ccc,
            'stop':'a'
        });
        
        // var sss = core.init.stop('a');
        // return sss;

    }

    function bbb(){
        console.log('mei mei mei mei mei mei ');
    }

    function ccc(){
        console.log('不科学！！！');
        var sss = core.next('a');
        return sss;
    }

    core.init(this,{
        doaaa:aaa
        ,dobbb:bbb
    });

    // core.do_action('doaaa');

});