/**
 * Created by yishuangxi on 16/7/28.
 */

var gulp = require('gulp')
var fileinclude = require('gulp-file-include')
gulp.task('file-include', function(){
    gulp.src('src/html/*.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('dest/html'))
})
