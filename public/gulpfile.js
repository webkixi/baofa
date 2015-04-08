fs                  = require('fs');
path                = require('path');
gulp                = require('gulp');
gutil               = require('gulp-util');
webpack             = require('webpack');
//WebpackDevServer    = require("webpack-dev-server");
pkg                 = require('./package.json');
// webpackDevConfig    = require('./webpack.config.js')
// webpackProductionConfig    = require('./webpack.production.config.js')
// webpackDevCompiler  = webpack(webpackDevConfig);
// webpackProductionCompiler  = webpack(webpackProductionConfig);

browserSync = require('browser-sync');
reload = browserSync.reload;

var clean = require('gulp-clean'),
minifycss = require('gulp-minify-css');

var path = require('path');
var concat = require('gulp-concat');
var through = require('through2');
var PluginError = gutil.PluginError;

var uglify = require('gulp-uglify');
var cp = require('child_process');




Array.prototype.S=String.fromCharCode(2);
Array.prototype.in_array=function(e) {
    var r=new RegExp(this.S+e+this.S);
    return (r.test(this.S+this.join(this.S)+this.S));
}

function comboDirs(xxx){
    var 
    comboContent = [],
    cnt = '',
    cur_dir = '',
    files = [],
    ext_name = '.js',
    len = 0;
    iii = 1;

    if(!xxx)xxx='\n';

    return through.obj(function comboFile(file,enc,cb){
        if (file.isNull()) {
            cb();
            return;
        }

        if (file.isStream()) {
            this.emit('error', new PluginError('gulp-concat',  'Streaming not supported'));
            cb();
            return;
        }
        
        cur_dir = path.dirname(file.path);
        if(cur_dir+'/' !== file.base){
            cur_dir = cur_dir.replace(file.base,'');
            files = fs.readdirSync(file.base+cur_dir);
        }else{
            cur_dir = cur_dir.substr(cur_dir.lastIndexOf('/')+1)
            files = fs.readdirSync(file.base);
        }
        ext_name = path.extname(file.path);
        if(files.in_array('index'+ext_name)){
            this.push(file);
        }else{
            len = files.length;                     
            file.path = file.base + cur_dir + ext_name;

            if(len==1){
                this.push(file);
            }else{
                if(iii==1){                 
                    comboContent.push(file.contents.toString('utf-8'));
                    iii++;
                }else{
                    if(iii == len){                     
                        cnt = comboContent.join(xxx)+file.contents.toString('utf-8');
                        file.contents = new Buffer(cnt);
                        comboContent = [];
                        iii = 1;
                        this.push(file);
                    }else{                      
                        iii++;
                        comboContent.push(file.contents.toString('utf-8'));
                    }
                }
            }
        }
        cb();
    });
}

module.exports = comboDirs;

var combo_js = [];
var combo_dev_js = [];

// Load plugins
$ = require('gulp-load-plugins')()

gulp.task('clean',function(){
    gulp.src('./dist/*',{read:false})
    .pipe(clean());
});

gulp.task('css',function(){
    return gulp.src(['./src/css/common/*.css'])
    .pipe(minifycss())  //执行压缩
    // .pipe(comboDirs())
    .pipe(concat('common.css'))
    .pipe(gulp.dest('./dist/css'))   //输出文件夹 
});


gulp.task('vendor',function(){
    combo_js.push('./dist/js/tmp/vendor.js');
    combo_dev_js.push('./dist/js/tmp/vendor.dev.js');

    return gulp.src(['./src/js/vendor/*.js'])
    .pipe(concat('vendor.dev.js'))
    .pipe(gulp.dest('./dist/js/tmp'))   //输出文件夹 
    .pipe(uglify())
    // .pipe(comboDirs())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/js/tmp'))   //输出文件夹 
});

gulp.task('global',function(){
    combo_js.push('./dist/js/tmp/global.js');
    combo_dev_js.push('./dist/js/tmp/global.dev.js');
    return gulp.src(['./src/js/global/*.js'])
    .pipe(concat('global.dev.js'))
    .pipe(gulp.dest('./dist/js/tmp'))   //输出文件夹 
    .pipe(uglify())
    // .pipe(comboDirs())
    .pipe(concat('global.js'))
    .pipe(gulp.dest('./dist/js/tmp'))   //输出文件夹 
});

gulp.task('modules',function(){
    combo_js.push('./dist/js/tmp/modules.js');
    combo_dev_js.push('./dist/js/tmp/modules.dev.js');
    return gulp.src(['./src/js/modules/*.js'])
    .pipe(concat('modules.dev.js'))
    .pipe(gulp.dest('./dist/js/tmp'))   //输出文件夹 
    .pipe(uglify())
    // .pipe(comboDirs())
    .pipe(concat('modules.js'))
    .pipe(gulp.dest('./dist/js/tmp'))   //输出文件夹 
});

gulp.task('js',function(){
    // gulp.start('vendor');
    gulp.start(['vendor'],function(){
        gulp.start(['global'],function(){            
            gulp.start(['modules'],function(){
                gulp.src(combo_js)
                .pipe(concat('alljs.js'))
                .pipe(gulp.dest('./dist/js'))
                .on('end',function(){
                    gulp.src(combo_dev_js)
                    .pipe(concat('alljs.dev.js'))
                    .pipe(gulp.dest('./dist/js'))
                    .on('end',function(){
                        cp.exec('rm ./dist/js/tmp -r',function(){
                            return console.log('tmp dir clean');
                        })
                    })
                })
            })
        })
    });
});

gulp.task('default',[],function(){
    gulp.start(['clean','css'],function(){
        gulp.start('js')
    })
});


/*
* webpack 压缩
 */
// gulp.task('js',function(cb){
//     webpack({
//         entry: './src/js/global/main.js',
//         output: {
//             path: './dist/js', // 图片和 JS 会到这里来
//             filename: 'bundle.js'
//         }
//     }, function(err, stats) {
//         if(err) throw new gutil.PluginError("webpack", err);
//         gutil.log("[webpack]", stats.toString({
//             // output options
//         }));
//         cb();
//         return;
//     });
// });