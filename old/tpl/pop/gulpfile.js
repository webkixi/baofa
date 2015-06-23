/**
 * @Date: 2014-04-03 11:55:13
 * @Author: pjg.pw (iampjg@gmail.com)
 * @Version: $Id: gulpfile.js 2869 2014-05-28 12:43:51Z pjg.pw $
 *
 * Revise the js generation by Louis Chan
 */

var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
//var jsdoc       = require('gulp-jsdoc');
var spritesmith = require('gulp.spritesmith');
var concat = require('gulp-concat');
var path = require('path');
var fs = require('fs');
var crypto = require('crypto');
var Transform = require('stream').Transform;
var iconv = require('iconv-lite');
var swig = require('swig');
var through2 = require('through2');
var rd = require('rd');
//var imagemin = require('gulp-imagemin');

//生成cssmap的物理路径
var php_push_path =  './';//此路径，测试和预发布的指向都不一样

var cssmap_jsonPath = path.join(__dirname, 'css', 'css.map.json');
var cssmap_phpPath = path.join(php_push_path,'css.map.php');
var cfghas_phpPath = path.join(php_push_path,'cfg.has.php');


var paths = {
    less: ['css/less/*.less'],
    css: ['css/*.css'],
    sprite: 'css/sprite',
    script: ['js/src/**/*.js', 'js/config.json', 'js/config.dev.json', 'js/path.json', 'js/shim.json'],
    tpl: ['tpl/**/*.html'],
    doc: ['js/src/**/*.js', 'README.md'],
    dist: ['js/dist/*.js'],
    optimize: 'js/src',
    clearCache: [
        path.join(__dirname, '..', '..', 'app/Tpl/ve_2_1/**/*')
    ]
};
var pool = {};

var cfgtpl = 'require.config({{ cfg|json|raw }}); window._VE_Cfg = {{ usercfg|json|raw }}';

//配置文件参数

var jsMapPath = path.join(__dirname, 'js', 'js.map.json');
var pathPath = path.join(__dirname, 'js', 'path.json');
var shimPath = path.join(__dirname, 'js', 'shim.json');
var tplPath = path.join(__dirname, 'tpl');


//配置文件
var _config = JSON.parse(fs.readFileSync(path.join(__dirname, 'js/ver_config.json')));


var _buildCfg = function(ENV) {
    this.ENV = ENV || '';
    this.domain = 'www.ve.cn';
    this.theme = _config.theme;
    this.urls = (ENV == 'dev') ? _config.urls.dev : _config.urls.real; 
    this.staticDomain = ((_config[ENV].CDN == 'ON' && _config.CDNDomain != '') ? _config.CDNDomain : _config[ENV].staticDomain) + '/';
    this.staticPath = ((_config[ENV].staticDomain != '') ? (_config[ENV].staticDomain + '/') : '') + 'statics/' + _config.theme + '/';
    this.jsLibPath = (_config[ENV].CDN == 'ON' ? _config.CDNDomain : _config[ENV].staticDomain) + '/statics/Lib/';
};

var md5 = function(text) {
    return crypto.createHash('md5').update(text).digest('hex');
};

var mixin = function(dest, source){
    for(var p in source){
        dest[p] = source[p];
    }
    return dest;
};

//同步删除目录
var rmdirSync = (function() {
    function iterator(url, dirs) {
        var stat = fs.statSync(url);
        if (stat.isDirectory()) {
            dirs.unshift(url); //收集目录
            inner(url, dirs);
        } else if (stat.isFile()) {
            fs.unlinkSync(url); //直接删除文件
        }
    }

    function inner(path, dirs) {
        var arr = fs.readdirSync(path);
        for (var i = 0, el; el = arr[i++];) {
            iterator(path + "/" + el, dirs);
        }
    }
    return function(dir, cb) {
        cb = cb || function() {};
        var dirs = [];

        try {
            iterator(dir, dirs);
            for (var i = 0, el; el = dirs[i++];) {
                fs.rmdirSync(el); //一次性删除所有收集到的目录
            }
            cb();
        } catch (e) { //如果文件或目录本来就不存在，fs.statSync会报错，不过我们还是当成没有异常发生
            e.code === "ENOENT" ? cb() : cb(e);
        }
    };
})();

//生成cssmap
var buildCssMap = function(uri) {
    var cssPath = path.join(__dirname,'css');
    var _uri = uri ? uri : cssPath;
    var _isCssMap = fs.existsSync(cssmap_jsonPath);
    if (_isCssMap) {
        fs.unlinkSync(cssmap_jsonPath);
    }
    var files = [];
    var phparr = [];
    fs.readdirSync(_uri).forEach(function(file) {
        var fullPath = path.join(_uri, file);
        var stat = fs.lstatSync(fullPath);
        if (stat !== undefined && file.indexOf('.css') !== -1 && false === stat.isDirectory() ) {
            var soure = fs.readFileSync(fullPath);
            var _has = md5(soure).substring(0, 10);

            var _name = file.replace('.css', '');
            files.push('"'+_name+'":"'+_has+'"');
            phparr.push('\''+_name+'\' => \''+_has+'\'');
        }
    });
    console.log(cssmap_jsonPath);
    fs.writeFileSync(cssmap_jsonPath, '{'+files+'}');
    fs.writeFileSync(cssmap_phpPath, '<?php'+'\r\n'+'return array('+phparr+')'+'\r\n'+'?>');

};

// build config.js hash
var buildCfgJsHas = function(){
    var cfgjs_Path = path.join(__dirname, 'js', 'config.dev.js'); 
    var soure = fs.readFileSync(cfgjs_Path);
    var _has = md5(soure);
    console.log('config ===> ' + _has);
    fs.writeFileSync(cfghas_phpPath, '<?php'+'\r\n'+'return array("cfghas" => "'+ _has +'")'+'\r\n'+'?>', 'utf8');
};

// Task clear cache   '\r\n'
gulp.task('clear.cache', function() {
    var dirs = [
        path.join(__dirname, '..', '..', 'public/runtime/app/tpl_caches/'),
        path.join(__dirname, '..', '..', 'public/runtime/app/tpl_compiled/'),
        path.join(__dirname, '..', '..', 'public/runtime/data/')
    ];

    dirs.forEach(function(v) {
        console.log(v);
        rmdirSync(v);
    });
});

// Task sprite
var _time_sprite;
gulp.task('sprite', function() {
    if (_time_script) {
        clearTimeout(_time_sprite);
    }
    _time_sprite = setTimeout(function() {
        var dirs = fs.readdirSync(paths.sprite);
        dirs.forEach(function(dir) {
            if (dir.indexOf('.') === 0) {
                return;
            }
            var pngPatn = path.join(paths.sprite, dir);
            //console.log('pngPatn -->   '+pngPatn);

            var stat = fs.statSync(pngPatn);

            if (stat.isDirectory()) {

                var pngPath = path.join(__dirname, 'css/img/sp_' + dir + '.png');
                var srcPath = path.join(__dirname, paths.sprite + '/' + dir)

                var _buildPng = function(has) {
                    var _has = has ? has : md5(srcPath).substring(2, 10);
                    return gulp.src(paths.sprite + '/' + dir + '/*.png').pipe(spritesmith({
                        engine:'pngsmith',
                        algorithm: 'binary-tree',
                        padding: 5,
                        imgName: 'sp_' + dir + '.png',
                        cssName: '_sp_' + dir + '.less',
                        imgPath: 'img/sp_' + dir + '.png?_=' + _has,
                        cssFormat: 'css',
                        cssOpts: {
                            cssClass: function(item) {
                                return '.icon-' + dir + '-' + item.name + '()';
                            }
                        }
                    }))
                };
                //雪碧图png文件是否存在的判断
                var _isPng = fs.existsSync(pngPath);
                if (_isPng) {
                    var pngSource = fs.readFileSync(pngPath);
                    var pngHas = md5(pngSource).substring(2, 10);
                }
                var spriteData = pngHas ? _buildPng(pngHas) : _buildPng();
                spriteData.img.pipe(gulp.dest('css/img'));
                spriteData.css.pipe(gulp.dest('css/less'));

            }
        });

    }, 200);

});
var synchro = function(dir){
    var js_file_name = dir + ".js";   
    var js_fullPath = path.join(__dirname, 'js/dist/'+js_file_name);
    var is_jsfile = fs.existsSync(js_fullPath);
    if (is_jsfile) {
        var js_soure = fs.readFileSync(js_fullPath);
        var js_hash = md5(js_soure);
    }
    return through2.obj(function (data, enc, cb) {
        pool.dev.cacheBust[dir] = js_hash;
        // pool.test.cacheBust[dir] = js_hash;
        // pool.release.cacheBust[dir] = js_hash;
        // pool.deploy.cacheBust[dir] = js_hash;
        console.log("combined " +  dir + " -> " + js_file_name + ' -> ' + js_hash);
        cb();
    },
    function () {
        if(++pool.checkcomplete == pool.count){
            console.log("->generation is completed!");
        // var hash = md5(data.contents); //32 digital
        // pool.dev.cacheBust[dir] = hash;
        // pool.test.cacheBust[dir] = hash;
        // pool.release.cacheBust[dir] = hash;
        // pool.deploy.cacheBust[dir] = hash;
            generate();
        }
    });
};
var buildCfg = function(name){
    var cfg = new _buildCfg(name);
    pool["~" + name] = cfg;
    pool[name] = {
        baseUrl : cfg.staticPath + (name == "test" || name == "dev" ? "js/src" : "js/dist"),
        paths : (name == "test" || name == "dev") ? pool.trdPatryMap : pool.pathsMap,
        shim : pool.shimMap,
        cacheBust : {}
    };
};

var generateCfgs = function(name){
    var __file = path.join(__dirname, 'js', 'config' + (name != 'deploy' ? '.' + name : '') + '.js'),
        cfg = swig.render(cfgtpl, {
            locals : {
                cfg : pool[name],
                usercfg : pool["~" + name]
            }
        });

    fs.writeFileSync(__file, cfg);
};
var generate = function(){
    generateCfgs("dev");
    generateCfgs("debug");
    // generateCfgs("test");
    // generateCfgs("release");
    // generateCfgs("deploy");
};

// 合并包文件
var _time_script;
gulp.task('js', function() {
    //clear first
    pool = {};
    
    //automatic generate js.map.json
    var tmp = {};
    rd.eachSync(paths.optimize, function(f, s){
        var file =  fs.statSync(f);
        if(!file.isDirectory()){
            var name = f.replace(path.join(__dirname,  paths.optimize) , "");
            name = name.substr(1);
            name = name.substr(0, name.length - ".js".length);
            name = name.replace("\\", "/");
            tmp[name] =  path.dirname(name);
        }
    });
    fs.writeFileSync(jsMapPath, JSON.stringify(tmp));
    console.log("-->generated js.map.json");
    tmp = null;
    //read pre-defined mapping from jsMapPath,pathPath, shimPath
    var userJsMap = JSON.parse(fs.readFileSync(jsMapPath, "utf-8")),
        trdPatryMap = JSON.parse(fs.readFileSync(pathPath, 'utf-8')),
        shimMap = JSON.parse(fs.readFileSync(shimPath, 'utf-8'));
        allIn = {};
    pool.trdPatryMap = trdPatryMap;
    //init pool variables
    allIn = mixin({}, trdPatryMap);
    mixin(allIn, userJsMap);
    
    pool.pathsMap = allIn;
    
    pool.shimMap = shimMap;

    userJsMap = trdPatryMap = shimMap = allIn = null;
    
    //build configurations and Hash
    buildCfg("dev");
    buildCfg("debug");
    // buildCfg("test");
    // buildCfg("release");
    // buildCfg("deploy");
    buildCfgJsHas();
    //
    
    if (_time_script) {
        clearTimeout(_time_script);
    }
    _time_script = setTimeout(function() {
        var dirs = fs.readdirSync(paths.optimize);
        pool.count = dirs.length;
        pool.checkcomplete = 0;
        dirs.forEach(function(dir) {
            if (dir.indexOf('.') === 0) {
                return;
            }
            var stat = fs.statSync(path.join(paths.optimize, dir));
            if (stat.isDirectory()) {
                //console.log(paths.optimize + '/' + dir + '/*.js');
                var stream = gulp.src(paths.optimize + '/' + dir + '/*.js')
                    .pipe(concat(dir + '.js'))
                    .pipe(uglify())
                    .pipe(gulp.dest('js/dist'))
                    //.pipe(syncConfig(dir));
                    .pipe(synchro(dir));
            }
        });
    }, 200);
});

// Task less
var _time_less;
gulp.task('less', function() {
    if (_time_less) {
        clearTimeout(_time_less);
    }
    _time_less = setTimeout(function() {
        gulp.src(['css/less/*.less', '!css/less/_*.less'])
            .pipe(less({
                compress: true,
                paths: [path.join(__dirname, 'css', 'less')]
            }))
            //.pipe(minifycss({keepBreaks:false})) //keepBreaks:false,则为CSS不换行
            .pipe(gulp.dest('css'))
            .on("end",function(){
            	gulp.start('cssmap');
            })
    }, 400);
});

//优化雪碧图
gulp.task('imgmin',['sp'], function () {
    return gulp.src('css/img/sp_*.png')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('dist'));
});

// Task cssmap
var _time_cssmap;
gulp.task('cssmap',function() {
    if (_time_script) {
        clearTimeout(_time_script);
    }
    _time_script = setTimeout(function() {
        buildCssMap();
    },200);
});

//build 模板
var _time_tpl;
gulp.task('tpl', function() {
    if (_time_tpl) {
        clearTimeout(_time_tpl);
    }
    _time_tpl = setTimeout(function() {
        var files = fs.readdirSync(tplPath);
        var floders = [];
        files.forEach(function(file) {
            if (file.indexOf('.') !== 0) {
                var stat = fs.lstatSync(path.join(tplPath, file));
                if (stat !== undefined && stat.isDirectory()) {
                    floders.push(file);
                }
            }
        });
        //遍历目录下的html,生成js
        floders.forEach(function(floder) {
            var htmlPath = path.join(tplPath, floder);
            var htmls = fs.readdirSync(htmlPath);
            var tplData = {};
            var outPath = path.join(__dirname, 'js', 'src', 'tpl', floder + '.js');

            htmls.forEach(function(html) {
                if (html.indexOf('.html') !== -1) {
                    html_name = html.replace('.html', '');
                    tplData[html_name] = fs.readFileSync(path.join(htmlPath, html), 'utf-8').replace(/\n/g, '')
                        .replace(/\t/g, '')
                        .replace(/\r/g, '')
                        .replace(/    /g, '');

                    console.log('build tpl: ' + floder + '/' + html);
                }

            });

            //生成js
            var js = [
                'define(\'tpl/' + floder + '\', [], function(){',
                'return ' + JSON.stringify(tplData) + ';',
                '});'
            ];

            fs.writeFileSync(outPath, js.join('\r\n'));

            //console.log(js.join('\r\n'));
        });
    }, 200);
});

// Task doc
// var _time_doc;
// gulp.task('doc', function() {
//     if(_time_doc){
//         clearTimeout(_time_doc);
//     }
//     _time_doc = setTimeout(function(){
//         gulp.src(paths.doc)
//             .pipe(jsdoc.parser({
//                 plugins: ['plugins/markdown'],
//                 "markdown": {
//                     "parser": "gfm"
//                 }
//             }))
//             .pipe(jsdoc.generator('./doc',{
//                 path            : 'ink-docstrap',
//                 theme           : 'flatly',
//                 systemName      : 'FeBuilder',
//                 linenums        : true,
//                 collapseSymbols : true,
//                 inverseNav      : false
//             },{
//                 'private': false,
//                 monospaceLinks: false,
//                 cleverLinks: true,
//                 outputSourceFiles: true
//             }));
//     }, 1000);
// });

// 生成批处理文件
gulp.task('bat', function() {
    var rootPath = path.join(__dirname);
    var disk = rootPath.split('')[0];
    if (disk !== '/') {
        var cmd = [disk + ':'];
        cmd.push('cd ' + rootPath);
        cmd.push('call gulp sprite');
        cmd.push('call gulp less');
        cmd.push('call gulp js');
        cmd.push('call gulp tpl');
        cmd.push('start gulp watch');
        fs.writeFileSync(path.join(__dirname, 'startGulp.cmd'), cmd.join('\r\n'));
    } else {
//      var sh = ['#!/bin/sh'];
//      var shFile = path.join(__dirname, 'tool.sh');
//      sh.push('gulp');
//      fs.writeFileSync(shFile, sh.join('\n'));
//      fs.chmodSync(shFile, 0755);
    }
});

// 自动删除可清理的冲突文件
var clear = function() {
    var count = 0;
    var getFiles = function(uri, callback) {
        var files = [];
        fs.readdirSync(uri).forEach(function(file) {
            var fullPath = path.join(uri, file);
            var stat = fs.lstatSync(fullPath);
            if (stat !== undefined &&
                file.indexOf('.mine') !== -1 &&
                false === stat.isDirectory()) {
                files.push({
                    path: uri,
                    file: file.replace('.mine', '')
                });
            }
        });
        callback(files);
    };

    //清除css
    getFiles(path.join(__dirname, 'css'), function(files) {
        files.forEach(function(info) {
            fs.readdirSync(info.path).forEach(function(file) {
                if (file.indexOf(info.file) !== -1) {
                    var filePath = path.join(info.path, file);
                    fs.unlinkSync(filePath);
                    console.log('delete: ' + filePath);
                    count++;
                }
            });
        });
    });

    //清除less
    getFiles(path.join(__dirname, 'css', 'less'), function(files) {
        files.forEach(function(info) {
            fs.readdirSync(info.path).forEach(function(file) {
                if (file.indexOf('_sp_') !== 0) {
                    return false;
                }
                if (file.indexOf(info.file) !== -1) {
                    var filePath = path.join(info.path, file);
                    fs.unlinkSync(filePath);
                    console.log('delete: ' + filePath);
                    count++;

                }
            });
        });
    });

    //清除js
    getFiles(path.join(__dirname, 'js'), function(files) {
        files.forEach(function(info) {
            fs.readdirSync(info.path).forEach(function(file) {
                var allow = [
                    'js.map.json',
                    'config.js',
                    'config.dev.js',
                    'config.release.js',
                    'config.test.js'
                ];
                var isIn = false;

                allow.forEach(function(af) {
                    if (file.indexOf(af) !== -1) {
                        var filePath = path.join(info.path, file);
                        fs.unlinkSync(filePath);
                        console.log('delete: ' + filePath);
                        count++;
                    }
                });
            });
        });
    });

    //清除 tpl js
    getFiles(path.join(__dirname, 'js', 'src', 'tpl'), function(files) {
        files.forEach(function(info) {
            fs.readdirSync(info.path).forEach(function(file) {
                if (file.indexOf(info.file) !== -1) {
                    var filePath = path.join(info.path, file);
                    fs.unlinkSync(filePath);
                    console.log('delete: ' + filePath);
                    count++;
                }
            });
        });
    });
    return count;

};


// Task clear cache
gulp.task('clear.svn', function() {
    clear();
});

// Rerun the task when a file changes
var _time_watch;
gulp.task('watch', function() {
    if (_time_watch) {
        clearTimeout(_time_watch);
    }
    _time_watch = setTimeout(function() {
        gulp.watch(paths.script, ['js']);
        //gulp.watch(paths.doc, ['doc']);
        gulp.watch(paths.sprite + '/**/*.png', ['sprite']);
        //gulp.watch(paths.clearCache, ['clear.cache']);
        gulp.watch(paths.less, ['less']);
        gulp.watch(paths.tpl, ['tpl']);
        // gulp.watch(paths.css, ['cssmap']);
    }, 500);
});

// Run default task
gulp.task('default', [
    'sprite',
    //'clear.cache',
    'js',
    'less',
    'cssmap'
],function(){
    gulp.run('watch')
});