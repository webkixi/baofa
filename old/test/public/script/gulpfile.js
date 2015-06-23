var gulp = require('gulp'); 

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


var srcs = ['./vecommon.js','./jquery.base64.js','./login.js'];
var register = ['./vecommon.js','./jquery.base64.js','./register.js'];
// 合并，压缩文件
gulp.task('login', function() {
    gulp.src(srcs)
        .pipe(concat('_login.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('login.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('reg', function() {
    gulp.src(register)
        .pipe(concat('_reg.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('register.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});