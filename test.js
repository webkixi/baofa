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



var _ = require('underscore');
var crypto = require('crypto');
var tpl = require('./tpl').tpl;
var formv = require('./toolkit').formv;


var fs = require('fs');
// var ws = fs.createWriteStream('message.txt');

var
app = koa();
app.use(router(app));
app.use(statics('./public',{
	// buffer: true,
	// gzip: true
}));
app.use(session(app));
app.keys = ['gzgzmixcookie'];
var render = views('views',{
    map:{html:'swig'}
});

//
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
.post('/tpl',gettpl)
.post('/list',getArticleList);
// .post('/:title',dealindex);

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
		yield getArticleList;
	}
	// var page = yield function(kkk){client.hexists('kixi','index',kkk)};	
	// var body = yield parse.json(this);
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
		yield zset('article',id, body.timer);
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
function *getArticleList(len){
	if(!len) len = 10;
	
	var 
	body = yield parse.json(this);
	if(body['len']&&body['len']>0) len = body['len'];
	
	var 
	list = yield zrscan('article','','','',len);
	
	var 
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
			article_list.push(tmp_obj);
		}
	}

	this.body = article_list;
}



function *gettpl(){
	var 
	tpl,
	tmp_tpl,
	body;

	if(this.request.length>0){
		body = yield parse.json(this);
	}else{
		body = {};
	}
	
	if(body['tpl']&&body['tpl']!='') tpl = body['tpl']+'.html';
	else
		tpl = 'normal.html';

	tmp_tpl = yield function(fn){ fs.readFile('tpl/lists/'+tpl,fn) };

	// console.log(tmp_tpl.toString());
	// this.body = '{"value":"abc"}';
	var aaa=tmp_tpl.toString();
	this.body = aaa;

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

app.listen(80);
