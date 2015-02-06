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


var crypto = require('crypto');
var tpl = require('./tpl').tpl;
var formv = require('./toolkit').formv;


// var fs = require('fs');
// var ws = fs.createWriteStream('message.txt');

var app = koa();

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

login_stat=false,
admin_stat=false,

mixstr = '!@fdsg438)*e';

var posts = [
 {id:1,title:'hello',content:'this just test'}
,{id:2,title:'good',content:'i can\'t say any more'}
,{id:3,title:'ni mei',content:'just your sister'}
];

app
.get('/',index)
.get('/:title',index)
.get('/index.js',index)
.post('/',dealindex)
.post('/add',add)
.post('/remove',remove)
.post('/move',move)
.post('/get',get)
.post('/edit',edit)
.post('/logininfo',getLoginStat)
.post('/login',login);


var __getClass = function(object){
    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};


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

function *hgetUser(usr){	
	var user = yield hget('user',usr);
	user = JSON.parse(user);
	return user;
	
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
	login_stat=false,
	db_user,
	ck = this.cookies.get('gzgz');	
	if(ck){
		ck = decrypt(ck,mixstr);
		ck = JSON.parse(ck);

		// db_user = yield hget('user',ck['user']);
		// db_user = JSON.parse(db_user);
		db_user = yield hgetUser.call(this,ck['user']);
		if(db_user['passwd']==ck.pwd){
			login_stat = true;
		}
	}
	return login_stat;
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
			cookie_data = encrypt(cookie_data,mixstr);
			this.cookies.set('gzgz',cookie_data,{'signed':true,'max-age':7*24*3600,'httpOnly':true});
		} else
			this.body = '{"stat":0,"info":"login failed"}';
	}
}

function *index(){
	console.log(this.request.url);
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
	i=1,
	v;
	// this.acceptsEncodings('gzip', 'deflate', 'identity');
	exist = yield function(fn){sc.hexists(theme,'attr',fn);};
	if(exist){
		attr.push(yield hget(theme,'attr'));		
		all = yield function(fn){sc.hgetall(theme+'_data',fn);};		
		for(; i<all.length; i=i+2){
			dataitem = all[i];
			if(dataitem){
				data.push(JSON.parse(dataitem));
			}
		}
		tmp = yield render('index');
		ret = yield tpl(tmp,data);
		this.body = ret;
	}else{
		//init data,the first visit will set this
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
		}
	    tmp = yield render('index',{posts:posts});
	    tmp = tmp.split(/[=]{5,}/)[0];
	    this.body = tmp;
	}
}

function *dealindex(){
	var page = yield function(kkk){client.hexists('kixi','index',kkk)};	
	var body = yield parse.json(this);
}

/**
 * [*add description]
 * @Schema  hset('index','attr',val) hset('index_data','0',val)
 */
function *add(){
	if(yield loginStat){
		var body = yield parse.json(this);
		var 
		path = url.parse(body.location).pathname.replace('/','').replace(/(\.[\w]+)/,'').toLowerCase(),
		id   = 'id'+body.id,	
		path = path==''?'index':path;

		var exist = yield function(fn){sc.hexists(path,'attr',fn);};
		if(exist){
			exist = yield function(fn){sc.hexists(path+'_data',id,fn);};
			if(exist){
				var old = yield hget(path+'_data',id);
				old = JSON.parse(old);			
				if(!body.tcnt&&old.tcnt){
					var tmp = old.tcnt;
					body.tcnt = tmp;
				}else{
					// console.log(body);
				}
			}
			body = JSON.stringify(body);
			yield hset(path+'_data',id,body);
			
		}else{
			yield hset(path,'attr',JSON.stringify({'user':'xxx','passwd':'123456'}));
			yield hset(path+'_data',id,JSON.stringify(body));
		}
		this.body = 'ok';
	}else{
		this.body = 'login'
	}
}

/**
 * [*get rebuild the unit and save the unit propty into ssdb]
 * @Schema  hdel('index','attr',val) hdel('index_data','0',val)
 */
function *get(){
	if(yield loginStat){
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
	}else{
		this.body='login';
	}
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

		var exist = yield function(fn){sc.hexists(path+'_data',id,fn);};
		if(exist){		
			yield hdel(path+'_data',id);
		}	
		this.body = 'ok';
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
			var old = yield hget(path+'_data',id);
			yield hdel(path+'_data',id);
			yield hset(path+'_data',id,body);
		}
		this.body = 'ok';
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
		id   = 'id'+body.id,
		body = JSON.stringify(body);

		var exist = yield function(fn){sc.hexists(path+'_data',id,fn);};
		if(exist){	
			var old = yield hget(path+'_data',id);
			yield hdel(path+'_data',id);
			yield hset(path+'_data',id,body);
		}
		this.body = 'ok';
	}else{
		this.body='login';
	}
}


app.on('error', function(err){
  console.log(err);
});

app.listen(80);
