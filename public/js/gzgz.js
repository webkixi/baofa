(function(){	

	var 
	Class = {create: function(item) {  return function() {this.initialize.apply(this, arguments);} } }
	
	typeof idindex =='undefined' ? idindex=0 : idindex=idindex;
	// console.log(idindex);

	var 
	// zone = {},
	pendraw = false,
	_wangs = new HashMap(),
    gzgz = Class.create(); 

    gzgz.prototype = {
	    initialize: function(item) {	    	
	    	var 
	    	login_button='';

	    	this._body = $('body');
	    	if(!$('#drawselect').length)
	    		$('body').append("<div id='drawselect' title='右键编辑' style='z-index:1001;position:absolute;left:0;top:0;display:none;'></div>");

	    	this._gzs = [];
	    	this._pen = $('#drawselect');

	    	var 
	    	_pen = this._pen,
	    	_body = this._body,
	    	_that = this;
	    	this.length = item.length;

	    	$(item).each(function(i){
	    		 var thegz = this;
	    		 item[i].setAttribute('gzindex',i); _that._gzs.push(item[i]);

	    		 $(this).find('.wangwang').each(function(){
			    	__clientput(this);
			    	if(this.parentNode.className!=='gzgz'){
			    		scope = this.parentNode;
			    	}else if(this.parentNode.className=='gzgz'){
			    		scope = this.parentNode;
			    	}
			    	var iddex = $(this).attr('idindex');
			    	if(iddex>=idindex) idindex=parseInt(iddex)+1;
	    			new _unitDiv(this,this.parentNode);
	    		}); 
	    	});
	    		
    		var 
    		thegz,
    		thegzrect,
    		pos = {},
    		scope;

    		$(_pen)
			.on('mousedown',function(e){
				e = e||arguments[0];
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
			});
    		
    		$(document)
    		.mousedown(function(e){
    			e = e||arguments[0];		    			
    			// if(e.target == thegz) {		    			
    			if(e.target.className=='gzgz'){		    				
    				thegz = e.target;
		    		thegzrect = __getRect(thegz);
	    			pendraw = true;		    			
	    			if(e.which == 1){		    				
						_pen.show();
						_pen.css({'left':e.pageX,'top':e.pageY,'width':0,'height':0});
						pos.startX = e.pageX;
						pos.startY = e.pageY;
					}
				}
				$('#gzmenu').hide();
				_pen.html('');
    		})
    		.mousemove(function(e){
				e=e||arguments[0];
				if(e.which==1&&pendraw){
					if(e.pageX<thegzrect.left){
    					tips('超出绘制区域，请在绘制区域操作!',1000);
    					return false;
    				}else{
						_pen.css({'background-color':'red','width':e.pageX-parseInt(pos.startX),'height':e.pageY-parseInt(pos.startY)});
    				}
				}						
			})
			.mouseup(function(e){
				e = e||arguments[0];
				pendraw = false;  // 				
				if(_rzaction){
					$(document).trigger('resizeunit');
					_rzaction = false;
				}
				if(_pen.width()>30&&_pen.height()>30){
					kkk = e.ctrlKey ? new preCreatSubDiv(_pen,thegz,'float') : new preCreatSubDiv(_pen,thegz);
				}else if(_pen.width()>3&&_pen.height()>3)
					tips('最小30x30',1000);						
				pos = {};						
			});
			
	        return this;
	    }
	}

	function initContextMenu(){
		console.l
		var 
		gzmenu ='<div id="gzmenu" class="list-group">~lists~</div>',
		lists = zone.login_stat
			  ? 
				'<a class="edit list-group-item">编辑 </a>\
				<a class="listarticle list-group-item">文章列表<span class="badge">14</span></a>\
				<a class="clone list-group-item">克隆</a> \
				<a class="remove list-group-item">删除</a>'
			  :
				'<a class="sign list-group-item">注册/登录</a>';
		
		gzmenu = gzmenu.replace('~lists~',lists);
		$('#gzmenu').remove();
		$('body').append(gzmenu); 

		$('#gzmenu .list-group-item').mousedown(function(e){
			e=e||arguments[0];
			e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);				
			
			if(this.className.indexOf('sign')>-1){
				menuLogin();		
			}
			if(this.className.indexOf('listarticle')>-1){
				renderMenuList(opdiv);
			}
			if(this.className.indexOf('remove')>-1){
				if( confirm('确认要删除吗？') ){
					__remove(opdiv);
				}else{
					tips('请小心操作','alert');
				}
			}
			if(this.className.indexOf('clone')>-1){
				menuClone(opdiv);
			}
			var editor;
			if(this.className.indexOf('edit')>-1){
				// start edit content(markdown)
				menuEdit();
			}
		});
	}
	add_action('fun_menu',initContextMenu);
	// do_action('fun_menu'); 

	creatStyle('gzgzgz',function(gzgzgz){
		gzgzgz.text('#gzmenu{position:absolute;width:150px;display:none;}\
				#gzmenu .list-group-item{padding:7px 15px;}\
			');
		// gzgzgz.text('#gzmenu{position:absolute;width:150px;background-color:#fff;display:none;border:1px solid #666;border-bottom-width:0;}\
		// 			#gzmenu ul{padding:0;margin:0}\
		// 			#gzmenu li{list-style:none;text-indent:1em;}\
		// 			#gzmenu li {display:block;height:30px;line-height:30px;border-bottom:1px solid #666;text-decoration:none;color:#666;font:12px/30px tahoma;}\
		// 			#gzmenu li:hover{background:#eee;color:black;} ');
	});	

	function renderMenuList(src){
		var 
		tpl,
		api = {
			'list_data' : {'url':'/list','data':JSON.stringify( {'page':1 } ),'type':'html'} , 
			'normal_tpl': {'url':'/tpl','type':'html'}
		};
		if(src){
			needs('zone', {
				lists  : api['list_data'] ,
				list_insert_to : function(){				
					do_action('insertCnt',opdiv,zone.lists,'list');
				} ,
				list_save : function(){
					//列表格子的识别class				
					$(opdiv.div).addClass('wangwang-list');
					__put(opdiv.div);
				}
			});
		}else{
			needs('zone', {
				lists  : api['list_data'] ,
				list_insert_to : function(){				
					$('.pageto').parent().html(zone.lists);
				}
			});
		}
	}

	function menuClone(src){
		var clone = src.div.cloneNode(true);
		$(clone).attr('idindex',idindex);
		$(clone).css('left',parseInt($(clone).css('left'))+30+'px');
		$(clone).css('top',parseInt($(clone).css('top'))+20+'px');
		$(src.container).append(clone);
		__clone(src,clone);
		new _unitDiv(clone,src.container);
		tips('clone ok',1000);
	}

	function menuEdit(){
		var epic_opts = {
		    container: 'epiceditor',
		    textarea: null,
		    basePath: 'js',
		    parser: marked,
		    file: {
		        name: 'epiceditor',
		        defaultContent: '',
		        autoSave: 100
		    },    
		    autogrow: false
		}
		/*epiceditor*/
		maskerBox("<div id='epiceditor' style='height:300px;'>\
			</div><div class='form'>\
			<span id='submit'>提交</span>\
			<span>&nbsp;&nbsp;</span>\
			<span id='close'>取消</span>\
			<span>&nbsp;&nbsp;</span>\
			<span id='article'>文章</span>\
			<div style='display:inline-block;height:18px;'><form id='cnt-property'>\
			<input style='vertical-align:middle;' name='article' id='edit-form-article' type='checkbox' value=0> \
			</form></div>\
			</div>",{"width":"600px"});

		editor = new EpicEditor(epic_opts).load();		

		function insertDataToEditor(){
			if(zone.dbgetobj.tcnt){
				editor.importFile(null,zone.dbgetobj.tcnt,'text');
			}

			//article
			if(zone.dbgetobj.type&&zone.dbgetobj.type==1)
				$('#edit-form-article').attr('checked',true);
			
			aftInsertDataToEditor();
		}

		/*ace editor*/
		/*tanbox("<div id='editor' style='width:600px;height:300px;'>hello world\n\n\n\n\n\n\n</div><div class='form' style='text-align:center;'><span id='submit'>提交</span><span>&nbsp;&nbsp;</span><span id='close'>取消</span></div>",'md');
		var editor = ace.edit("editor");
    	editor.setTheme("ace/theme/tomorrow");
    	editor.session.setMode("ace/mode/html");
    	editor.setAutoScrollEditorIntoView(true);
    	editor.setOption("maxLines", 60);	
    	*/

    	function aftInsertDataToEditor(){
	    	one('#submit',{"delay":10},function(){
	    	// $('#submit').click(function(){
	    		editor.save(true);
				var 
				content = editor.exportFile(null, 'html', true),
				Tcontent = editor.exportFile(null, 'text', true),
				data = {'cnt':content,'tcnt':Tcontent},
				cnt_form = $('#cnt-property')[0];
				data['is-article'] = cnt_form['article'].checked ? 1 : 0;

				// save data to local store
				editor.save(true);

				insertCntTodiv(opdiv,content);
				
				__put(opdiv.div,data,'md');
			});

			$('#close').click(function(){
				$('body').trigger('close_masker_box');
				editor.unload();
			});	
		}

		__dbget(opdiv.idindex,insertDataToEditor);
	}

	var insertCntTodiv = function(odiv,cnt,stat){
		if($(odiv.div).find('.md-article').length){
			$(odiv.div).find('.md-article').html(cnt);
		}else{
			if(stat=='list'){
				if($(odiv.div).find('.md-body').length){
					$(odiv.div).find('.md-body').html(cnt);
				}else{
					$(odiv.div).prepend('<div class="md-wrap clearfix"><div class="md-body">'+cnt+'</div></div>');
				}				
			}
			else{
				$(odiv.div).prepend('<div class="md-wrap clearfix"><div class="md-body ">'+cnt+'</div></div>');			
			}
		}
		do_action('code_highlight');
	}
	add_action('insertCnt',insertCntTodiv,insertCntTodiv.length);

	var getLoginInfo = function(){
		
		needs('zone',{
			'login_info' : {'url':'/logininfo'}
			,'loginstat' : stat
		});

		function stat(){
			if(zone.login_info.stat == 0){
				zone.login_stat = false;
			}else{
				zone.login_stat = true;
			}
			do_action('fun_menu');
		}
		
	}
	// bug
	function initArticleList(){
		if($('._list').length>0){
			renderMenuList();
		}
	}
	getLoginInfo();
	initArticleList();
	
	function menuLogin(){				
		// maskerBox("<div id='sign' style=''><br/><br/><input type='text' id='user' /><br/><br /><input type='password' id='passwd' /></div><div class='form'><span id='login'>提交</span><span>&nbsp;&nbsp;</span><span class='close'>取消</span></div>",{"width":"400px"});
		maskerBox('<div class="form-group">\
				    <label for="user">用户名</label>\
				    <input type="text" class="form-control" id="user" placeholder="输入用户名">\
				  </div>\
				  <div class="form-group">\
				    <label for="passwd">Password</label>\
				    <input type="password" class="form-control" id="passwd" placeholder="密码">\
				  </div>\
				  <div class="form">\
				  	<span id="login">提交</span>\
				  	<span>&nbsp;&nbsp;</span>\
				  	<span class="close">取消</span>\
				  </div>',{"width":"400px"});
		$('#login').click(function(){
			toLogin();
		});
		$('.close').click(function(){
			$('body').trigger('close_masker_box');
		});
	}
	add_action('login',menuLogin);

	function toLogin(){
		var user = $('#user').val();
		var passwd = $('#passwd').val();
		var formv = form_valide()(user,'username');
		var data = {
			'user':user,
			'passwd':passwd
		};

		if(formv){
			needs('zone',{
				to_login:{'url':'/login','data':JSON.stringify(data)},
				aft_login:getloginStat
			});
		}

		function getloginStat(){
			if(zone.to_login.stat = 1){
				tips('登录成功！');
				zone.login_stat = true;
				$('.sign').remove();
			}
			else{
				zone.login_stat = false;
				tips('用户名或密码错误');
			}
			do_action('fun_menu');
		}
	}	

	var preCreatSubDiv = function(item,container,type){
		var 
		rect = __getRect(item),
		crect = __getRect(container),
		position,
		_unit,
		rzunit = '<div class="rzunit" >1</div>';
		
		(type=='float') 
		? position = 'float:left;' 
		: position = 'position:absolute;';

		$(container).append('<div idindex="'+idindex+'" class="wangwang" style="left:'+(rect.left-crect.left)+'px;top:'+(rect.top-crect.top)+'px;width:'+rect.width+'px;height:'+rect.height+'px;'+position+'">'+rzunit+'</div>');		
		
		_unit = $('div[idindex='+idindex+']')[0];
		_unit.setAttribute('gzindex',$(container).attr('gzindex'));
		_unit.gzindex = $(container).attr('gzindex');
		__put(_unit);
		new _unitDiv(_unit,container);
	}	

	$(document).mousemove(function(e){
		e = e||arguments[0];
		if(e.which==1&&_rzaction===true){
			$(_rzobj.div).css({'width':e.pageX-_rzrect.left,'height':e.pageY-_rzrect.top});
		}
	});

	//reszie wangwangs 
	$(document).bind('resizeunit',function(){
		__edit(_rzobj);
	});

	var 
	_nrect,
	_rzrect, 
	_rzobj, 
	_rzaction=false,  //drga item  to resize wangwang
	unitdrag = false,   //
	cloneunit = false,
	tt,
	opdiv,  //use for clone, remove 

	_unitDiv = Class.create();
	_unitDiv.prototype = {
		initialize: function(item,container) {			
			var theunit;
			var _unit;
			var pos={};
			var _rect = __getRect(item),
			_crect = __getRect(container);
			
			var that = theunit = this;
			that.idindex = $(item).attr('idindex');			
			that.type = 'absolute';
			that.div = _unit = item;
			this.father='gzgz';
			if(container.className.indexOf('gzgz')==-1){
				this.father = container.getAttribute('idindex');
			}
			that.container = container;
			that.dragitem;
			
			$(_unit).children('.rzunit').mousedown(function(e){
				e = e||arguments[0];
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
				_rzaction=true;
				_rzrect = __getRect(this.parentNode);
				// _rzobj = this.parentNode;
				_rzobj = that;
			});					
			
			$(_unit).mouseover(function(e){						
				e = e||arguments[0];				
				if(cloneunit) {
					if($('body').data('cloneunit')){
						cloneunit=false;
						var 
						clone = $('body').data('cloneunit');	
						clone.style.left = null;
						clone.style.top = null;
						$(clone)
							.css({'position':'absolute','background-color':'red','left':0,'top':0})
							.attr('idindex',idindex);
						tt = e.target;						
						tt.appendChild(clone);
						$('body').data('cloneunit',null);						
						new _unitDiv(clone,tt);
						__put(_unit);
					}
				}
			});

			
			$(_unit).mousedown(function(e){	
				// _rect = __getRect(e.target);
				_rect = __getRect(this);
				_crect = __getRect(that.container);	
				e = e||arguments[0];				
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
				$(this).css('z-index',2000);
				unitdrag   = true;
				cloneunit  = false;
				_nrect     = __getRect(this);
				pos.startX = e.pageX;
				pos.startY = e.pageY;	
				if(e.ctrlKey){
					that.dragitem = that.div;
				}

			}).contextmenu(function(e){				
				opdiv = null;
				e = e||arguments[0];
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
				e.preventDefault();
				unitdrag = pendraw = false;
				that.rightmenu(e);
				opdiv = that;
			});		

			

			var endleft,endtop;
			$(container).mousemove(function(e){
				e = e||arguments[0];							
				if(that.type==='absolute'&&unitdrag&&e.ctrlKey){					
					endleft = _nrect.left+(e.pageX-pos.startX)-_crect.left;
					endtop  = _nrect.top+(e.pageY-pos.startY)-_crect.top;
					endleft = endleft < 0 ? 0 : endleft+_nrect.width > _crect.right-_crect.left ? (_crect.right-_crect.left-_nrect.width) : endleft;
					endtop  = endtop  < 0 ? 0 : endtop+_nrect.height>_crect.bottom-_crect.top   ? (_crect.bottom-_crect.top-_nrect.height) : endtop;
					if(that.dragitem == that.div){
						that.div.style.left = endleft+'px';
						that.div.style.top = endtop+'px';
					}
				}
			});

			$(_unit).mouseup(function(e){
				e = e||arguments[0];
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
				that.div.style.zIndex = 1000;			
				if(unitdrag&&e.ctrlKey){					
					that.move = {"left":that.div.style.left,"top":that.div.style.top}
					__move(that);
					if(e.altKey) {
						cloneunit = true;				
						that.dataclone(that);						
					}
				}				
				unitdrag = false;
				that.dragitem = 'undefined';
				pos={};
			});
			// console.log(e.relatedTarget);
		},	
		dataclone : function (item){
			$('body').data('cloneunit',item.div);
			__remove(item);

			return;
		},		
		rect:function(){
			return __getRect(this.div);
		},
		rightmenu:function(e){
			var rightmenu = $('#gzmenu');
			rightmenu.css({'display':'block','left':e.pageX-5+'px','top':e.pageY-5+'px','z-index':9999});			
		}
	}//end unit


	//stack opration
	function __clientput(unit){
		var 
		obj;
		if(!unit.hasOwnProperty('location')){
			obj = {
				'gzindex':$(unit).attr('gzindex'),
				'id'    : $(unit).attr('idindex'),
				'class' : unit.className,
				'css'   : (function(){  var ncss,css; ncss = (css = unit.style.cssText.toLowerCase()).lastIndexOf(';')<(css.length-1) ? css+';' : css; return ncss;})(),
				'cnt'   : (function(){ 
							if($(unit).find('.md-body').length) return $(unit).find('.md-body').html();
							else return '';
						  })(),				
				'unit'  : unit.outerHTML,
				'location': window.location.href
			};
		}else{
			obj = unit;
		}
		_wangs.put(obj.id,obj);
		idindex++;
	}

	function __put(unit,content,type){
		var 
		obj={},
		tcnt;		
		
		if(!unit.hasOwnProperty('location')){
			obj = {
				'gzindex':$(unit).attr('gzindex'),
				'id'    : $(unit).attr('idindex'),
				'class' : unit.className,
				'css'   : (function(){  var ncss,css; ncss = (css = unit.style.cssText.toLowerCase()).lastIndexOf(';')<(css.length-1) ? css+';' : css; return ncss;})(),
				'unit'  : unit.outerHTML,
				'location': window.location.href
			};
			if(type=='md'){
				obj['cnt']  = content['cnt'];
				obj['tcnt'] = content['tcnt'];
				obj['type'] = content['is-article'];
			}
		}else{
			obj = unit;
		}

		_wangs.put(obj.id,obj);
		idindex++;		
		needs('zone',{
			putstat:{'url':'/add','data':JSON.stringify(obj)}
			,afun:[addfun,[type]]
		});
	}

	function addfun(type){
		if(zone.putstat.responseText=='ok'){
			zone.putstat= null;
			console.log('put ok');

			if(type&&type=='md'){
				tips('提交成功!');
			}
		}else{
			// console.log(zone.putstat);
			// do_action('login');
		}
	}

	//stack opration
	function __clone(src,clone){
		var obj;
		if(src.hasOwnProperty('father')&&src.father!=='gzgz'){			
			__put(src.container);
			return;
		}
		__put(clone);
	}	

	// function __get(id,fromback,cb){
	function __get(id){

		// if(!cb)cb = function(){};
		// if(fromback){
		// 	var obj = {'id':id,'location': window.location.href}
		// 	needs('zone',{
		// 		getbackobj:{'url':'/get','data':JSON.stringify(obj)},
		// 		null:[cb]
		// 	});
		// }
		// else
		return _wangs.get(id);
	}	

	function __dbget(id,cb){
		var 
		funs = [],
		getdata,
		obj = _wangs.get(id);

		if(!obj) 
			return false;
		if(obj.tcnt)
			getdata = obj;
		else
			getdata = {'url':'/get','data':JSON.stringify(obj)};
		

		if(cb){
			if(__getClass(cb)=='Function'){
				funs.push(cb);
			}else if(__getClass(cb)=='Array'){
				funs = cb;
			}else{
				funs.push(function(){});
			}
		}

		needs('zone',{
			dbgetobj:getdata,
			'null':funs
		});

	}

	function __edit(item){
		if(!item)return false;

		var 
		opdiv = item,
		nowrect = __getRect(opdiv.div),
		obj = __get(opdiv.idindex);

		opdiv.div.style.width = nowrect.width;
		opdiv.div.style.height = nowrect.height;
		obj.css = opdiv.div.style.cssText.toLowerCase();
		obj.unit = opdiv.div.outerHTML;

		if(opdiv.hasOwnProperty('father')&&opdiv.father!=='gzgz'){
			__put(opdiv.container);
			return;
		}
	    console.log('edit ok');
	    __put(obj);
	 //    needs('zone',{
		// 	editstat:{'url':'/edit','data':JSON.stringify(obj)}
		// },editfun);		
	}
	var editfun = function(){
		if(zone.editstat.responseText=='ok'){
			zone.editstat= null;
			console.log('edit ok');
		}
	}

	function __move(item){    	
		if(!item)return false;

		var 
		obj,
		opdiv = item,
		nowrect = opdiv.move;

		opdiv.div.style.left = nowrect.left;
		opdiv.div.style.top = nowrect.top;

		if(opdiv.hasOwnProperty('father')&&opdiv.father!=='gzgz'){
			obj = __get(opdiv.father);
			var kkbb = $(obj.unit).find('.wangwang[idindex='+opdiv.idindex+']').prop('outerHTML');
			obj.unit = obj.unit.replace(kkbb,opdiv.div.outerHTML);
			console.log('move ok');
			__put(obj);
			return;
		}

		obj = __get(opdiv.idindex);
		obj.css = opdiv.div.style.cssText.toLowerCase();
		obj.unit = opdiv.div.outerHTML;
		console.log('move ok');
		__put(obj);
	}

	function __remove(item){
		if(!item)return false;

		var 
		opdiv = item,
		obj,
		key;

		if(opdiv.idindex){
			obj = __get(opdiv.idindex);
			key = opdiv.idindex;			
		}else{
			key = $(item).attr('idindex');
			obj = __get(key);
		}

		if(opdiv.hasOwnProperty('father')&&opdiv.father!=='gzgz'){
			$(opdiv.div).remove();
			obj = __get(opdiv.father);
			var kkbb = $(obj.unit).find('.wangwang[idindex='+opdiv.idindex+']').prop('outerHTML');
			obj.unit = obj.unit.replace(kkbb,'');
			console.log('remove ok');
			__put(obj);
			return;
		}
		_wangs.remove(key);

		var removefun=function(){
			if(zone.removestat.responseText=='ok'){				
				zone.removestat= null;
				console.log('remove ok');			
				$(opdiv.div).remove();
			}else{
				do_action('login');
			}
		}
		needs('zone',{
			removestat:{'url':'/remove','data':JSON.stringify(obj)}
		},removefun);	
	}
	

	$.fn.gzgz = function(){
      	return new gzgz(this);
    };

})(jQuery);

$(function(){
	$('.gzgz').gzgz();
});