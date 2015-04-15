//why has the bug, i don't know,so i git push again and try it
(function(){	

	var 
	Class = {create: function(item) {  return function() {this.initialize.apply(this, arguments);} } }
	
	typeof idindex =='undefined' ? idindex=0 : idindex=idindex;
	// console.log(idindex);

	var 
	pendraw = false,
	_wangs = new HashMap(),
    gzgz = Class.create(); 

	var 
	_nrect,
	_rzrect, 
	_rzobj, 
	_rzaction=false,  //drga item  to resize wangwang
	unitdrag = false,   //
	cloneunit = false,
	tt,
	opdiv;  //use for clone, remove 


    /*
    * @item is a gzgz
    */
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

	    	//init page then put per wangwang to _wangs stack;
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

				//resize wangwang
				if(e.which==1&&_rzaction===true){
					var the_div = $(_rzobj.div);
					the_div.css({'width':e.pageX-_rzrect.left,'height':e.pageY-_rzrect.top});
					if(the_div.hasClass('md-tile')){
						the_div.css('line-height',(e.pageY-_rzrect.top)+'px');
					}
				}

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
	    },
	    run:function(cb){
	    	cb.call(this,_wangs);
	    }
	}

	//右键菜单初始化
	function initContextMenu(badge){
		badge = !badge ? 0 : badge;
		var 
		gzmenu ='<div id="gzmenu" class="list-group">~lists~</div>',
		lists = zone.login_stat
			  ? 
				'<a class="edit list-group-item">编辑 </a>\
				<a class="updattime list-group-item" title="移动端置前显示,暂未开启">更新置前</a>\
				<a class="listarticle list-group-item">文章列表<span class="badge">'+badge+'</span></a>\
				<a class="clone list-group-item">克隆</a> \
				<a class="resetpwd list-group-item">更改密码</a> \
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
				// do_action('login');
			}
			if(this.className.indexOf('resetpwd')>-1){
				menuLogin('reset');
				// do_action('login');
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

	//动态插入css
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

	//文章列表渲染
	function renderMenuList(src,page){
		var 
		tpl,
		page = !page ? 1 : page;
		api = {
			'list_data' : {'url':'/list','data':JSON.stringify( {'page':page } ),'type':'html'} , 
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

					//init pager event
					$('.page-pre').click(function(){
						var
						page_to = $(this).attr('pageid');
						do_action('renderList',null,page_to);
					});

					$('.page-next').click(function(){
						var
						page_to = $(this).attr('pageid');
						do_action('renderList',null,page_to);
					});
				}
			});
		}


	}
	add_action('renderList',renderMenuList,renderMenuList.length);

	//clone odiv
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

	//弹出文章编辑框
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

		/*弹出编辑框*/
		maskerBox("<div id='epiceditor' style='height:300px;'>\
			</div>\
			<div class='form'>\
			<a class='btn btn-default' id='submit'>提交</a>\
			<a class='btn btn-default' id='close'>取消</a>\
			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\
			<span id='article'>选项</span>\
			<div style='display:inline-block;height:18px;'><form id='cnt-property'>\
			<select name='article' id='edit-form-article'>\
			<option value='0'>类型</option>\
			<option value='1'>文章</option>\
			<option value='2'>tile</option>\
			</select>\
			<select name='colors' id='edit-form-colors'>\
			<option value='0'>颜色</option>\
			<option class='asks' value='asks'>asks</option>\
			<option class='feels' value='feels'>feels</option>\
			<option class='has' value='has'>has</option>\
			<option class='hates' value='hates'>hates</option>\
			<option class='hopes' value='hopes'>hopes</option>\
			<option class='is' value='is'>is</option>\
			<option class='likes' value='likes'>likes</option>\
			<option class='loves' value='loves'>loves</option>\
			<option class='needs' value='needs'>needs</option>\
			<option class='says' value='says'>says</option>\
			<option class='shares' value='shares'>shares</option>\
			<option class='thinks' value='thinks'>thinks</option>\
			<option class='wants' value='wants'>wants</option>\
			<option class='was' value='was'>was</option>\
			<option class='will' value='will'>will</option>\
			<option class='white' value='white'>white</option>\
			<option class='wonders' value='wonders'>wonders</option>\
			<option class='empty' value='empty'>empty</option>\
			</select>\
			</form></div>\
			</div>",{"width":"70%"});

		editor = new EpicEditor(epic_opts).load();

		//从数据接口中拿到数据后第一步
		//设置编辑器状态
		function insertDataToEditor(){
			if(zone.dbgetobj.tcnt){
				editor.importFile(null,zone.dbgetobj.tcnt,'text');
			}

			//type
			if(zone.dbgetobj.type){
				$("#edit-form-article").val(zone.dbgetobj.type);
			}
			
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
    
    	//从数据接口中拿到数据后第二步
    	//bind some event
    	function aftInsertDataToEditor(){
	    	oneClick('#submit',{"delay":10},function(){
	    	// $('#submit').click(function(){
	    		editor.save(true);
				var 
				content = editor.exportFile(null, 'html', true),
				Tcontent = editor.exportFile(null, 'text', true),
				data = {'cnt':content,'tcnt':Tcontent},
				cnt_form = $('#cnt-property')[0];
				// data['is-article'] = cnt_form['article'].checked ? 1 : 0;
				data['is-article'] = cnt_form['article'].value;
				data['is-color'] = cnt_form['colors'].value;

				opdiv.div.className = '';
				$(opdiv.div).addClass('wangwang').addClass( (data['is-color']==0 ? '' : data['is-color']) );				

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

		//初始化编辑框内的内容
		__dbget(opdiv.idindex,insertDataToEditor);
	}

	//init login pop pannle
	function menuLogin(stat){
		var
		custom_width = {"width":"35%"};
		if(zone['rsp']){
			custom_width = {"width":"70%"};
		}
		maskerBox('<div class="form-group">\
				    <label for="user">用户名</label>\
				    <input type="text" class="form-control" id="user" placeholder="输入用户名">\
				  </div>\
				  <div class="form-group">\
				    <label for="passwd">Password</label>\
				    <input type="password" class="form-control" id="passwd" placeholder="密码">\
				  </div>\
				  <div id="resetpwd" class="hide">\
				  	<div class="form-group">\
				    	<label for="newpasswd">新密码</label>\
				    	<input type="password" class="form-control" name="newpwd" id="newpasswd" placeholder="新密码">\
				    </div>\
				    <div class="form-group">\
				    	<label for="cfpasswd">确认新密码</label>\
				    	<input type="password" class="form-control" name="cfpwd"  id="cfpasswd" placeholder="确认新密码">\
			    	</div>\
				  </div>\
				  <div class="form">\
				  	<span id="login">登录</span>\
				  	<span>&nbsp;&nbsp;</span>\
				  	<span class="close">取消</span>\
				  </div>',custom_width);
		
		if(stat=='reset'){
			$('#resetpwd').removeClass('hide');
		}
		$('#login').click(function(){
			toLogin(stat);
		});
		$('.close').click(function(){
			$('body').trigger('close_masker_box');
		});
	}
	add_action('login',menuLogin);

	//put login info to back-end;
	function toLogin(stat){
		var
		chkopts = {
			username: function(val,reg){   // username 长度大于8，小于20 
		        	var 		        
			        tmp = reg.email.test(val);    //email check		        
			        if(!tmp) {
			            tmp = reg.mobile.test(val);   //mobile check
			            if(!tmp){
			            	tmp = reg.username.test(val);
			            	if(tmp){
			            		zone['usertype'] = 'text';
			            	}
			            }else{
			            	zone['usertype'] = 'mobile';	
			            }
			        }else{
			        	zone['usertype'] = 'email';
			        }
			        if(tmp){
		                var 
		                len = strlen(val);
		                if(len<4||len>30){
		                	tips('用户名必须大于4字，小于20字');
		                    tmp=false;
		                }
		            }
		            if(!tmp)tips('请正确填写用户名');
			        return tmp;
		    },	
		    password: function(val,reg){
		        var 		        
		        tmp = true,
		        level = (val.length>5) ? 0 + (val.length>7) + (/[a-z]/.test(val) && /[A-Z]/.test(val)) + (/\d/.test(val) && /\D/.test(val)) + (/\W/.test(val) && /\w/.test(val)) + (val.length > 12) : 0;  //level  0  1  2  3  4  password stronger
		        
		        if(val.length>20||/\s/.test(val)) level=0; //不包括空格
		        if(level==0||!level){
		        	tips('请输入6～20位密码');
		            tmp = false;
		        }
		        zone['password']={};
		        zone['password']['level']=level;
		        return tmp;
		    },
		    repassword: function(input_obj,reg){
		        var 
		        pobj = input_obj[0],   //password object
		        pval = pobj.value,
		        iobj = input_obj[1],    //repassword object
		        val = iobj.value,
		        tmp = true;
		        if(val!==pval){
		        	tips('两次输入密码不匹配');
	                tmp = false;
		        }

		        return tmp;
		    }
		},
		user = $('#user').val(),
		passwd = $('#passwd').val(),
		newpasswd = $('#newpasswd').val(),
		cfpasswd = $('#cfpasswd').val(),
		formv = false;

		if(!stat){			
			formv = form_valide(chkopts)
							   (user,'username')
							   ();
		}
		else if(stat=='reset'){		
			formv = form_valide(chkopts)
							   (user,'username')
							   (newpasswd,'password')
							   ([$('#newpasswd')[0],$('#cfpasswd')[0]],'repassword')
							   ();
		}

		if(formv){
			var
			data = {
				'user':user,
				'passwd':passwd
			};

			if(stat=='reset'){
				data['newpasswd'] = newpasswd;
				data['cfpasswd'] = cfpasswd;
				data['stat'] = 'reset';
			}

			needs('zone',{
				to_login:{'url':'/login','data':JSON.stringify(data)},
				aft_login:getloginStat
			});
		}

		function getloginStat(){
			if(zone.to_login.stat == 1){
				stat=='reset'? tips('修改成功！') : tips('登录成功！');
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

	//插入内容到odiv
	function insertCntTodiv(odiv,cnt,stat){
		if($(odiv.div).find('.md-article').length){
			$(odiv.div).find('.md-article').html(cnt);
		}else{
			if($(odiv.div).find('.md-body').length){
				$(odiv.div).find('.md-body').html(cnt);
			}else{
				$(odiv.div).prepend('<div class="md-wrap clearfix"><div class="md-body">'+cnt+'</div></div>');
			}		
			// if(stat=='list'){
			// 	if($(odiv.div).find('.md-body').length){
			// 		$(odiv.div).find('.md-body').html(cnt);
			// 	}else{
			// 		$(odiv.div).prepend('<div class="md-wrap clearfix"><div class="md-body">'+cnt+'</div></div>');
			// 	}				
			// }
			// else{
			// 	$(odiv.div).prepend('<div class="md-wrap clearfix"><div class="md-body ">'+cnt+'</div></div>');			
			// }
		}
		do_action('code_highlight');
	}	
	add_action('insertCnt',insertCntTodiv,insertCntTodiv.length);

	
	//获取登录信息
	function getLoginInfo(){
		
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

	//初始化文章列表
	function initArticleList(){
		if($('._list').length>0){
			renderMenuList();
		}
	}
	//渲染页面后第一步同步用户状态
	getLoginInfo();
	initArticleList();
	
	

	//_unitDiv的准备工作
	var preCreatSubDiv = function(item,container,type){
		var 
		rect = __getRect(item),
		crect = __getRect(container),
		position,
		_unit,
		rzunit = '<div class="rzunit" >1</div>';
		
		(type=='float') 
		? position = 'position:relative;float:left;' 
		: position = 'position:absolute;';

		$(container).append('<div idindex="'+idindex+'" class="wangwang" style="left:'+(rect.left-crect.left)+'px;top:'+(rect.top-crect.top)+'px;width:'+rect.width+'px;height:'+rect.height+'px;'+position+'">'+rzunit+'</div>');		
		
		_unit = $('div[idindex='+idindex+']')[0];
		_unit.setAttribute('gzindex',$(container).attr('gzindex'));
		_unit.gzindex = $(container).attr('gzindex');
		__put(_unit);
		new _unitDiv(_unit,container);
	}	

	//resize grid size
	//reszie wangwangs 
	$(document).bind('resizeunit',function(){
		var
		md_tile,
		$wangs = $(_rzobj.div);
		if(md_tile = $wangs.find('.md-tile')){
			$(md_tile).children('h1').css('line-height',($wangs.height()-70)+'px');
			$wangs.children('.md-wrap').html($(md_tile).prop('outerHTML'));
		}
		__edit(_rzobj);
	});
	

	//build a obj and init it's property;
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
			
			
			//start resize grid
			$(_unit).children('.rzunit').mousedown(function(e){
				if(zone.login_stat){
					e = e||arguments[0];
					e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
					_rzaction=true;
					_rzrect = __getRect(this.parentNode);
					_rzobj = that;
				}
			});			
			
			//put one grid into a other grid that one is father one is son
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

			//start drag one grid
			$(_unit).mousedown(function(e){	
				if(zone.login_stat){
					// _rect = __getRect(e.target);
					_rect = __getRect(this);
					_crect = __getRect(that.container);
					$('#gzmenu').hide();

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
				}
			})
			//right click one gird then pop a oprate menu list,then ....
			.contextmenu(function(e){				
				opdiv = null;
				e = e||arguments[0];
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
				e.preventDefault();
				unitdrag = pendraw = false;
				that.rightmenu(e);
				opdiv = that;
			});

			//drag one grid move in container
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

			//end drag one grid
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
		//set menulist pop at where that your mouse right click
		rightmenu:function(e){
			var rightmenu = $('#gzmenu');
			rightmenu.css({'display':'block','left':e.pageX-5+'px','top':e.pageY-5+'px','z-index':9999});			
		}
	}
	//end unit



	//equipment one gird to a json object and put it to global stack "_wangs" in memery
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

	//equipment one grid as a json object then put the json object to back-end;
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

	//clone one grid then show it and save it to back-end
	function __clone(src,clone){
		var obj;
		if(src.hasOwnProperty('father')&&src.father!=='gzgz'){			
			__put(src.container);
			return;
		}
		__put(clone);
	}	

	// function __get(id,fromback,cb){
	// get json object from global stack that we had put it into global stack "_wangs"
	function __get(id){
		return _wangs.get(id);
	}	

	//get json object from back-end
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
			'gogogo':funs
		});

	}

	//resize one grid and save it to back-end
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

	//move one grid and save it to back-end
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

	//delete one grid and sava it to back-end;
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
			// do_action('renderList');
		}
		needs('zone',{
			removestat:{'url':'/remove','data':JSON.stringify(obj)}
		},removefun);	
	}

	//jquery plugin;
	$.fn.gzgz = function(){
      	return new gzgz(this);
    };

})(jQuery);

$(function(){
	var 
	st,
	gz = $('.gzgz').gzgz();
	gz.run(function(_wangs){		
		
		//make scroll true
		$('.wangwang')
		.mouseenter(function(){
			if(!$(this).find('.md-tile').length)
				$(this).css('overflow-y','auto');
		})
		.mouseleave(function(){
			$(this).css('overflow','hidden');	
		});

		do_action('renderList');


		var 
		ne_i=1,
		ne = MonoEvent,
		$box = ne( '.wangwang' );

		//response style for mobile
		function rzRespons(){
			var
			doc = __measureDoc();
			con = __getRect($('.container'));				
			if(doc.dw<768){
				zone['rsp']=true;
				var 
				w_left=0,
				diff = doc.dw,
				diff_w = con.width,
				diff_h = doc.dh;				
				$('.nav-top').removeClass('hide');

				$('.wangwang').each(function(i,v){					
					this.style.cssText = 'width:'+diff_w+'px;min-height:'+diff_h+'px;border:none;float: left;display:none;';
					if(i==0){
						this.style.display = 'block';
					}
				});

				$box.on( 'swipeLeft', function( e ){
					if(ne_i<$box.length){						
						ne_animate(ne_i,diff,'left');
						ne_i++;
					}
				});				

				$box.on( 'swipeRight', function( e ){
					if(ne_i>1){						
						ne_animate(ne_i,diff,'right');
						ne_i--;
					}
				});

				$box.on( 'swipeUp swipeDown', function( e ){});

				function ne_animate(iii,diff,stat,cb){
					var 
					to_left;
					$('.wangwang').each(function(i,v){						
						if(stat == 'right'){
							if(i==iii-1){
								$('.gzgz').css('width',diff_w*2+'px');
								$($box[iii-2]).show().animate({'margin-left': "+="+diff},800,function(){
									$($box[iii-1]).hide();
									$('.gzgz').css('width','100%');
									if(cb)cb();
								});
							}
						}else{
							if(i==iii-1){
								$($box[iii]).show();
								$('.gzgz').css('width',diff_w*2+'px');
								$(this).animate({'margin-left': "-="+diff},800,function(){
									$(this).hide();
									$('.gzgz').css('width','100%');
									if(cb)cb();
								});
							}
						}
					});
				}
			}else{
				$box.un( 'swipeLeft swipeRight swipeUp swipeDown' );

				var
				ididx=0;
				zone['rsp']=false;
				$('.wangwang').each(function(){
					$(this).removeClass('col-sm-12');
					ididx = $(this).attr('idindex');
					var
					item_feather = _wangs.get(ididx);
					this.style.cssText = item_feather.css;
					this.className = item_feather['class'];
					$(this).find('.md-article').css({'margin':'15px'});
				});
				$('.nav-top').addClass('hide');
			}
		}

		//init response style
		rzRespons();
		$(window).resize(function() {
			rzRespons();
		});
	});
});