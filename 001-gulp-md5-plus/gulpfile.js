/**
 * Created by yishuangxi on 16/7/28.
 */

var gulp = require('gulp')
var md5 = require('gulp-md5-plus')
gulp.task('md5:css', function(){
    gulp.src('src/css/*.css')
        .pipe(md5(10, 'dest/html/*.html'))
        .pipe(gulp.dest('dest/css'))
})


gulp.task('md5:js', function(){
    gulp.src('src/js/*.js')
        .pipe(md5(10, 'dest/html/*.html'))
        .pipe(gulp.dest('dest/js'))
})

gulp.task('md5:image', function(){
    gulp.src('src/image/*.png')
        .pipe(md5(10, 'dest/html/*.html'))
        .pipe(gulp.dest('dest/image'))
})