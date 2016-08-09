/**
 * Created by yishuangxi on 16/8/9.
 */

var gulp = require('gulp')
var gulp_extract_css = require('gulp-extract-css')

gulp.task('extract', function () {
    gulp.src('src/css/*.css')
        .pipe(gulp_extract_css({
            log: true,
            takeout: [
                {
                    styleprefix: '',
                    filename: 'about.css'
                },
                {
                    styleprefix: '',
                    filename: 'index.css'
                }
            ]
        }))
        .pipe(gulp.dest('dest/css'))
})