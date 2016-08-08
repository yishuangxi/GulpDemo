/**
 * Created by yishuangxi on 16/7/28.
 */
var path = require('path')
var gulp = require('gulp')
var gulpWebpack = require('gulp-webpack')

gulp.task('webpack', function(){
    gulp.src('src/js/*.js')
        .pipe(gulpWebpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dest/js'))
})
