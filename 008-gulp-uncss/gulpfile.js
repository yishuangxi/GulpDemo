/**
 * Created by yishuangxi on 16/8/9.
 */

var gulp = require('gulp');
var gulp_uncss = require('gulp-uncss');

gulp.task('default', function(){
    return gulp.src('src/css/*.css')
        .pipe(gulp_uncss({
            html: ['src/html/index.html', 'src/html/about.html']
        }))
        .pipe(gulp.dest('dest'))
})