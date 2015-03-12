var koa = require('koa');
var views = require('co-views');
var router = require('koa-router');
var parse = require('co-body');
var statics = require('koa-static-cache');
var url = require('url');
var session = require('koa-session');
var exec = require('child_process').exec;
var markdown = require( "markdown-js" ).markdown;
var ssdb = require('ssdb');
var sc = ssdb.createClient();
// test github fork and merge to online

var _ = require('underscore');
var crypto = require('crypto');
var tpl = require('./tpl').tpl;
var tmpl = require('./tpl').tmpl;
var formv = require('./toolkit').formv;


var fs = require('fs');
// var ws = fs.createWriteStream('message.txt');

var
app = koa(),
render = views('views',{
    map:{html:'swig'}
});

app.use(router(app));
app.use(statics('./public',{
	// buffer: true,
	// gzip: true
}));
app.use(session(app));
app.keys = ['gzgzmixcookie'];
 
//socket push data to front-end
server = require('http').createServer(app.callback()),
io = require('socket.io')(server);



io.on('connection', function(socket){		
	// socket.broadcast.emit('hi');
	// io.emit('xxx', { 'data': msg });
	// socket.on('xxx',function(msg){

	// });	

	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

function pushMsgToFrontEnd(msg){
	var
	title = _subString(cleanHtml(msg.cnt).replace(/[\r\n]/g,''),16),
	des = _subString(cleanHtml(msg.cnt).replace(/[\r\n]/g,''),100,true);

	msg.title = title;
	msg.des = des;

	io.emit('xxx', { 'data': msg });
}


	//start 
	var
	_login_stat=false,
	_login_user,
	_login_user_pwr,
	_admin_stat=false,
	_group={},
	mixstr = '!@fdsg438)*e';

	_group[10000]={
		"user" : ['admin'],
		"power": ['all','add','remove','move','edit']
	};

	var posts = [
	 {id:1,title:'hello',content:'this just test'}
	,{id:2,title:'good',content:'i can\'t say any more'}
	,{id:3,title:'ni mei',content:'just your sister'}
	];

	app
	.get('/',index)
	.get('/:title',index)
	.get('/:id',index)
	.post('/add',add)
	.post('/remove',remove)
	.post('/move',move)
	.post('/get',get)
	.post('/edit',edit)
	.post('/logininfo',getLoginStat)
	.post('/login',login)
	.post('/tpl',getTpl)
	// .post('/list',getArticleList);
	.post('/:title',dealindex);

	//如果函数/生成器定义方式为 var abc=... 表示从数据库函数
	var hset = function(name,key,val){
		return function(fn){
			sc.hset(name,key,val,fn);
		}
	}

	var hget = function(name,key){
		return function(fn){
			sc.hget(name,key,fn);
		}
	}

	var hdel = function(name,key){
		return function(fn){
			sc.hdel(name,key,fn);
		}
	}

	var zset = function(name,key,score){
		return function(fn){
			sc.zset(name,key,score,fn);
		}
	}

	var zget = function(name,key){
		return function(fn){
			sc.zget(name,key,fn);
		}
	}

	var zdel = function(name,key){
		return function(fn){
			sc.zdel(name,key,fn);
		}
	}

	var zlist = function(name_start, name_end, limit){
		return function(fn){
			sc.zlist(name_start,name_end,limit,fn);
		}
	}

	var zrlist = function(name_start, name_end, limit){
		return function(fn){
			sc.zlist(name_start,name_end,limit,fn);
		}
	}

	var zscan = function(name,key_start,score_start,score_end,limit){
		return function(fn){
			sc.zscan(name,key_start,score_start,score_end,limit,fn);
		}
	}

	var zrscan = function(name,key_start,score_start,score_end,limit){
		return function(fn){
			sc.zrscan(name,key_start,score_start,score_end,limit,fn);
		}
	}

	var hgetUser = function *(usr){
		var user = yield hget('user',usr);
		user = JSON.parse(user);
		return user;
	}

	var hgetPage = function *(path){
		var 
		page = yield hget('page',path);
		page = JSON.parse(page);
		return page;
	}

	function *hgetRight(path){
		var
		page = yield hgetPage(path);
		if(_login_user){
			if(_login_user['user']==page['user'])
				return true;
		}
		return false;
	}

	function __getClass(object){
	    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
	};

	//加密
	function encrypt(str, secret) {
	    var cipher = crypto.createCipher('aes192', secret);
	    var enc = cipher.update(str, 'utf8', 'hex');
	    enc += cipher.final('hex');
	    return enc;
	}
	//解密
	function decrypt(str, secret) {
	    var decipher = crypto.createDecipher('aes192', secret);
	    var dec = decipher.update(str, 'hex', 'utf8');
	    dec += decipher.final('utf8');
	    return dec;
	}

	var co = function(ge){
		var 		
		ret,
		gen = ge();

		function cb(err,data){
			if(data){				
				exec(data);
			}else{
				exec();
			}			
		}

		function exec(data){
			if(data){
				ret = gen.next(data);				
			}else
				ret = gen.next();

			if(ret.done == false){
				if(typeof ret.value == 'function'){					
					ret.value(cb)
				}else
					exec(ret.value);
			}else{				
				return ret.value;
			}
		}
		exec();
	}

	function *loginStat(){
		var 
		_login_stat=false,
		db_user,
		ck = this.cookies.get('gzgz');	
		if(ck){
			ck = decrypt(ck,mixstr);
			ck = JSON.parse(ck);
			db_user = yield hgetUser(ck['user']);
			if(db_user['passwd']==ck.pwd)
				_login_stat = true;
			
			if(ck['user']=='admin')
				_admin_stat = true;

			_login_user = db_user;
			if(_group[db_user['gid']])
				_login_user_pwr = _group[db_user['gid']]['power'];
		}
		return _login_stat;
	}

	function *getLoginStat(){	
		if(yield loginStat) this.body = '{"stat":1}';
		else this.body = '{"stat":0}';
	}

	function *login(){
		var 
		body = yield parse.json(this),
		user = body.user,
		cookie_data = '';
		cookie_tmp='';
		passwd = body.passwd;		
		reset_passwd = body.reset_passwd;

		var valid_stat = formv()(user,'username');
		if(!valid_stat){
			this.body =  '{"stat":0,"info":"username invalide"}';
		}else{
			passwd = encrypt(passwd,mixstr);
			var db_user = JSON.parse(yield hget('user',user));
			if(db_user&&db_user['passwd']==passwd){			
				cookie_tmp = passwd;
				if(reset_passwd){
					reset_passwd = encrypt(reset_passwd,mixstr);
					db_user['passwd'] = reset_passwd;
					yield hset('user',user,JSON.stringify(db_user));
					cookie_tmp = reset_passwd;
				}
				db_user['passwd'] = passwd;
				yield hset('user',user,JSON.stringify(db_user));
				if(user=='admin'){
					cookie_data = '{"user":"admin","pwd":"'+cookie_tmp+'"}';
					this.body = '{"stat":1,"info":"admin login sucess"}';
				}else{
					cookie_data = '{"user":"'+user+'","pwd":"'+cookie_tmp+'"}';
					this.body = '{"stat":1,"info":"login sucess"}';
				}
				//store cookie
				cookie_data = encrypt(cookie_data,mixstr);
				this.cookies.set('gzgz',cookie_data,{'signed':true,'maxAge':7*24*3600*1000,'httpOnly':true});
			} else
				this.body = '{"stat":0,"info":"login failed"}';
		}
	}

	function *index(){
		var 
		exist,
		theme = 'index',
		attr = [],
		data = [],
		size=0,
		all,
		dataitem,
		tmp,
		ret,
		secu,
		user_info,
		v,
		router,
		pathname;

		router = this.req._parsedUrl;
		pathname = router.pathname.replace('/','');
		if(pathname=='list'){
			yield getArticleList;
			return false;
		}
		theme = pathname;
		if(!theme||theme=='')theme = 'index';

		// this.acceptsEncodings('gzip', 'deflate', 'identity');
		exist = yield function(fn){sc.hexists(theme,'attr',fn);};
		if(exist){
			attr.push(yield hget(theme,'attr'));
			all = yield function(fn){sc.hgetall(theme+'_data',fn);};
			for(var i=1; i<all.length; i=i+2){
				dataitem = all[i];
				if(dataitem){
					data.push(JSON.parse(dataitem));
				}
			}		
			yield renderPage;
			tmp = yield render('index');
		    tmp = yield tpl(tmp,data);
		    this.body = tmp;
		}else{
			//第一次访问，初始化admin数据
			if(theme=='index'){
				secu = encrypt('www123456',mixstr);
				user_info = {
					'user'  : 'admin',
					'des'   : 'admin',
					'passwd': secu,
					'uid'   : 10000,
					'gid'   : 10000
				};			
				yield hset('user','admin',JSON.stringify(user_info));
				yield renderPage;
			}else{
				if(_admin_stat){
					yield renderPage;
				}
			}
		}

		function *renderPage(){
			tmp = yield render('index');
		    tmp = tmp.split(/[=]{5,}/)[0];	    
		    this.body = tmp;
		}
	}


	function *dealindex(){
		router = this.req._parsedUrl;
		pathname = router.pathname.replace('/','');
		if(pathname=='list'){
			var 
			body = yield parse.json(this);
			if(!body.page) body.page=1;					
			this.body = yield getArticleList(body.page);
		}
	}

	/**
	 * [*add description]
	 * @Schema  hset('index','attr',val) hset('index_data','0',val)
	 */
	function *add(){	
		if(yield loginStat){
			var 
			body = yield parse.json(this),		
			path = url.parse(body.location).pathname.replace('/','')
													.replace(/(\.[\w]+)/,'')
													.toLowerCase(),
			t = new Date(),
			id   = 'id'+body.id,	
			path = path==''?'index':path,
			user_info,
			page_prop;

			var exist = yield function(fn){sc.hexists(path,'attr',fn);};
			if(exist){		
				// 回写数据
				if(_admin_stat||(yield hgetRight(path))){
					page_prop = JSON.parse(yield hget(path,'attr'));
					if(page_prop['user'] == _login_user['user']){
						
						//data
						exist = yield function(fn){sc.hexists(path+'_data',id,fn);};					
						if(exist){
							var old = yield hget(path+'_data',id);
							old = JSON.parse(old);
							if(!body.tcnt&&old.tcnt){
								var tmp = old.tcnt;
								body.tcnt = tmp;
							}
						}
						body.timer = t.getTime();
						body.author = _login_user['user'];
						body.tag = '';
						yield hset(path+'_data',id,JSON.stringify(body));
						yield storeIndex(path, body);
						this.body = 'ok';
					}else{					
						this.body = '您没有权限修改此页面';
					}
				}
			}else{
				//创建数据
				if(_admin_stat||(yield hgetRight(path))){
					var 
					page_info = {
						'user'  :_login_user['user'],
						'passwd':_login_user['passwd'],
						'page'  : path,					
						'mask'  : 700
					}
					//page
					yield hset('page',path,JSON.stringify(page_info)); //page info
					yield hset(path,'attr',JSON.stringify(page_info));
					
					//data
					body.timer = t.getTime();   
					body.author = _login_user['user'];
					body.tag = '';
					yield hset(path+'_data',id,JSON.stringify(body));
					this.body = 'ok';
					yield storeIndex(path, body);
				}else{
					this.body = '您没有权限修改此页面';
				}
			}
		}else{
			this.body = 'login'
		}
	}

	function *storeIndex(path,body){
		if(!body.id) return ;

		var
		exist=false;
		id  = path+'__id'+body.id;
		
		// exist = yield function(fn){sc.zexists(theme,'attr',fn);};
		yield zset(path ,id, body.timer);
		yield zset('all',id, body.timer);

		//tag index
		if(body.tag&&body.tag!=''){
			var 
			tag = id+'__'+body.tag;
			yield zset('tag',tag, body.timer);
		}
		//article index
		if(body.type&&body.type==1){
			exist = yield function(fn){ sc.zexists('article',id,fn);}
			if(!exist){
				yield zset('article',id, body.timer);
				pushMsgToFrontEnd(body);
			}
		}else{
			yield removeIndex(path,body,'article');
		}
	}

	function *removeIndex(path,body,type){
		if(!body.id) return ;

		var
		id  = path+'__id'+body.id;
		
		if(!type){
			yield zdel(path ,id);
			yield zdel('all',id);

			//tag index
			var 
			tag = id+'__'+body.tag;
			yield zdel('tag',tag);
			
			//article index	
			yield zdel('article',id);
		}
		if(type=='article'){
			yield zdel('article',id);	
		}
	}

	/**
	 * [*get rebuild the unit and save the unit propty into ssdb]
	 * @Schema  hdel('index','attr',val) hdel('index_data','0',val)
	 */
	function *get(){
		// if(yield loginStat){
		var 
		body = yield parse.json(this),
		path = url.parse(body.location).pathname.replace('/','').replace(/(\.[\w]+)/,'').toLowerCase(),
		path = path==''?'index':path;
		id   = 'id'+body.id;	

		var exist = yield function(fn){sc.hexists(path+'_data',id,fn);};
		if(exist){	
			var old = yield hget(path+'_data',id);
			this.body = old;
		}else{
			this.body = 'null';
		}
	}

	/**
	 * [*get rebuild the unit and save the unit propty into ssdb]
	 * @Schema  hdel('index','attr',val) hdel('index_data','0',val)
	 */
	function *getArticleList(page){
		var 
		len = 10,
		page_size = 10,
		page_start = 0,
		page_end = 10;
		if(!page) {
			page = 1;
		}

		page_start = (parseInt(page)-1)*page_size;
		page_end = parseInt(page)*page_size-1;
		
		var 
		list = yield function(fn){sc.zrange('article',page_start,page_end,fn)},
		article_list=[],
		article_titles=[];

		var
		tmp,
		tmp_page,
		tmp_id,
		tmp_obj;

		for(var i=0; i<len; i=i+2){
			if(typeof list[i] == 'string'){
				tmp = list[i].split('__');
				tmp_page = tmp[0];
				tmp_id = tmp[1];
				tmp_obj = yield hget(tmp_page+'_data',tmp_id);
				article_list.push(JSON.parse(tmp_obj));
			}
		}

		var 
		title,
		des,
		looper='',
		tpl = yield getTpl;

		var 
		i=0,
		cnt
		$ = yield tmpl(tpl.toString());
		for(; i<article_list.length; i++){
			cnt = $(article_list[i].cnt);
			if(cnt[0]._nodeName=='h1'){
				title = cnt[0].innerHTML;
				des = cleanHtml(article_list[i].cnt).replace(/[\r\n]/g,'');
				des = _subString(des,100,true);
			}else{
				title = _subString(cleanHtml(article_list[i].cnt).replace(/[\r\n]/g,''),16);
				des = _subString(cleanHtml(article_list[i].cnt).replace(/[\r\n]/g,''),100,true);
			}
			looper+=rpl($('._list').html(),{'title':title,'des':des});
		}
		$('._list').html(looper);
		return $('.pageto').prop('outerHTML');
		
	}

	function *formatAndRenderIO(tpl,data){

	}



	/* 2007-11-28 XuJian */  
	//截取字符串 包含中文处理  
	//(串,长度,增加...)  
	var _subString = function(str, len, hasDot)  
	{  
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

	function cleanHtml(html){
		return html.replace(/<[\/\!]*?[^<>]*?>/g,'');
	}

	var rpl=function(tmp,data){
		// console.log(data);
	    if(!data)return false;
	    tmp = tmp.replace(/\{\{(.*?)\}\}/gi,function(a,b){
	            return eval(b);
	        });
	    return tmp;
	}

	function *getTpl(){
		var 
		tpl,
		tmp_tpl,
		body;

		if(this.request.length>0){
			body = parse.json(this);
		}else{
			body = {};
		}
		
		if(body['tpl']&&body['tpl']!='') tpl = body['tpl']+'.html';
		else
			tpl = 'normal.html';

		return yield function(fn){ fs.readFile('tpl/lists/'+tpl,fn) };
		// this.body = yield function(fn){ fs.readFile('tpl/lists/'+tpl,fn) };

	}

	/**
	 * [*remove delete ssdb xxx_data data]
	 * @Schema  hdel('index','attr',val) hdel('index_data','0',val)
	 */
	function *remove(){
		if(yield loginStat){
			var 
			body = yield parse.json(this),
			path = url.parse(body.location).pathname.replace('/','').replace(/(\.[\w]+)/,'').toLowerCase(),
			path = path==''?'index':path,
			id   = 'id'+body.id;

			if(_admin_stat||(yield hgetRight(path))){
				var exist = yield function(fn){sc.hexists(path+'_data',id,fn);};
				if(exist){		
					yield hdel(path+'_data',id);
					yield removeIndex(path,body);
				}	
				this.body = 'ok';
			}else
				this.body='您没有权限修改此页面';
		}else{
			this.body='login';
		}
	}

	/**
	 * [*move move the unit and save the unit propty into ssdb]
	 * @Schema  hdel('index','attr',val) hdel('index_data','0',val)
	 */
	function *move(){
		if(yield loginStat){
			var 
			body = yield parse.json(this),
			path = url.parse(body.location).pathname.replace('/','').replace(/(\.[\w]+)/,'').toLowerCase(),
			path = path==''?'index':path,
			id   = 'id'+body.id,
			body = JSON.stringify(body);

			var exist = yield function(fn){sc.hexists(path+'_data',id,fn);};
			if(exist){
				if(_admin_stat||(yield hgetRight(path))){
					var old = yield hget(path+'_data',id);
					yield hdel(path+'_data',id);
					yield hset(path+'_data',id,body);
					this.body = 'ok';
				}else{
					this.body = '您没有权限修改此页面';
				}
			}
		}else{
			this.body='login';
		}
	}

	/**
	 * [*edit rebuild the unit and save the unit propty into ssdb]
	 * @Schema  hdel('index','attr',val) hdel('index_data','0',val)
	 */
	function *edit(){
		if(yield loginStat){
			var 
			body = yield parse.json(this),
			path = url.parse(body.location).pathname.replace('/','').replace(/(\.[\w]+)/,'').toLowerCase(),
			path = path==''?'index':path,
			id   = 'id'+body.id;		

			var exist = yield function(fn){sc.hexists(path+'_data',id,fn);};
			if(exist){	
				if(_admin_stat||(yield hgetRight(path))){
					var 
					old = yield hget(path+'_data',id);
					yield hdel(path+'_data',id);
					yield hset(path+'_data',id,JSON.stringify(body));				
					this.body = 'ok';
				}else{
					this.body = '您没有权限修改此页面';
				}
			}
		}else{
			this.body='login';
		}
	}


	app.on('error', function(err){
	  console.log(err);
	});

// });	//io

// app.listen(80);
server.listen(3000);



//代码见http://www.web-tinker.com/
// var WS='258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

// var pool=[]; //连接池

// require('net').createServer(function(o){
//   var key;
//   o.on('data',function(e){
//     if(!key){
//       var data=e.toString();
//       //Flash握手
//       if(data=='<policy-file-request/>\0')
//         return fs.readFile('policy.txt',function(err,data){
//           o.write(data+'\0');
//         });
//       //WebSocket握手
//       if(key=data.match(/Sec-WebSocket-Key: (.+)|$/)[1])
//         key=crypto.createHash('sha1').update(key+WS).digest('base64'),
//         o.write([
//           'HTTP/1.1 101 Switching Protocols',
//           'Upgrade: websocket',
//           'Connection: Upgrade',
//           'Sec-WebSocket-Accept: '+key
//         ].join('\r\n')+'\r\n\r\n');
//     }else{
//       //解析数据
//       var frame=decodeDataFrame(e);
//       //文本帧
//       if(frame.Opcode==1){
//         //转义数据
//         var content=frame.PayloadData.replace(/\W/g,function(e){
//           e=e.charCodeAt(0).toString(16);
//           if(e.length==3)e='0'+e;
//           return '\\'+(e.length>2?'u':'x')+e;
//         }),client=o.remoteAddress+":"+o.remotePort,buffer;
//         //包装成JSON格式，并做成一个数据帧
//         buffer=encodeDataFrame({
//           FIN:1,Opcode:1,
//           PayloadData:'{"client":"'+client+'","content":"'+content+'"}'
//         });
//         //对所有连接广播数据
//         for(i=0;i<pool.length;i++)pool[i].write(buffer);
//       };
//     };
//   });
//   //断开时从连接池中移除
//   o.on("close",function(){
//     for(i=0;i<pool.length;i++)if(pool[i]==o)pool.splice(i,1);
//   });
//   //捕获错误
//   o.on("error",function(){});
//   //放入连接池中
//   pool.push(o);
// }).listen(8000);

// /*
// 下面两个函数的说明见
// http://www.web-tinker.com/article/20307.html
// http://www.web-tinker.com/article/20306.html
// 这两篇文章
// */
// function encodeDataFrame(e){
//   var s=[],o=new Buffer(e.PayloadData),l=o.length;
//   //输入第一个字节
//   s.push((e.FIN<<7)+e.Opcode);
//   //输入第二个字节，判断它的长度并放入相应的后续长度消息
//   //永远不使用掩码
//   if(l<126)s.push(l);
//   else if(l<0x10000)s.push(126,(l&0xFF00)>>8,l&0xFF);
//   else s.push(
//     127, 0,0,0,0, //8字节数据，前4字节一般没用留空
//     (l&0xFF000000)>>24,(l&0xFF0000)>>16,(l&0xFF00)>>8,l&0xFF
//   );
//   //返回头部分和数据部分的合并缓冲区
//   return Buffer.concat([new Buffer(s),o]);
// };
// function decodeDataFrame(e){
//   var i=0,j,s,frame={
//     //解析前两个字节的基本数据
//     FIN:e[i]>>7,Opcode:e[i++]&15,Mask:e[i]>>7,
//     PayloadLength:e[i++]&0x7F
//   };
//   //处理特殊长度126和127
//   if(frame.PayloadLength==126)
//     frame.PayloadLength=(e[i++]<<8)+e[i++];
//   if(frame.PayloadLength==127)
//     i+=4, //长度一般用四字节的整型，前四个字节通常为长整形留空的
//     frame.PayloadLength=(e[i++]<<24)+(e[i++]<<16)+(e[i++]<<8)+e[i++];
//   //判断是否使用掩码
//   if(frame.Mask){
//     //获取掩码实体
//     frame.MaskingKey=[e[i++],e[i++],e[i++],e[i++]];
//     //对数据和掩码做异或运算
//     for(j=0,s=[];j<frame.PayloadLength;j++)
//       s.push(e[i+j]^frame.MaskingKey[j%4]);
//   }else s=e.slice(i,frame.PayloadLength); //否则直接使用数据
//   //数组转换成缓冲区来使用
//   s=new Buffer(s);
//   //如果有必要则把缓冲区转换成字符串来使用
//   if(frame.Opcode==1)s=s.toString();
//   //设置上数据部分
//   frame.PayloadData=s;
//   //返回数据帧
//   return frame;
// };
