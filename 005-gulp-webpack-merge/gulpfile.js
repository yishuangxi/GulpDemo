/**
 * Created by yishuangxi on 16/8/8.
 */

var path = require('path')
var gulp = require('gulp')
var gulp_webpack = require('gulp-webpack')
var gulp_file_include = require('gulp-file-include')
var gulp_autoprefixer = require('gulp-autoprefixer')
var gulp_cssnano = require('gulp-cssnano')
var gulp_md5_plus = require('gulp-md5-plus')
var gulp_concat = require('gulp-concat')
var gulp_clean = require('gulp-clean')
var gulp_css_spriter = require('gulp-css-spriter')
var gulp_cdn_replace = require('gulp-cdn-replace')

gulp.task('html:include', function () {
    return gulp.src('src/html/*.html')
        .pipe(gulp_file_include())
        .pipe(gulp.dest('dest/html'))

})

gulp.task('css:common', function () {
    var time = new Date().getTime()
    return gulp.src('src/css/common/*.css')
        .pipe(gulp_autoprefixer())
        .pipe(gulp_cssnano())
        .pipe(gulp_concat('common.css'))
        .pipe(gulp.dest('src/css'))
})

gulp.task('css', ['html:include', 'css:common'], function () {
    var time = new Date().getTime()
    return gulp.src('src/css/*.css')
        .pipe(gulp_css_spriter({
            'spriteSheet': './dest/image/page-sprite-' + time + '.png',
            'pathToSpriteSheetFromCSS': '../image/page-sprite-' + time + '.png'
        }))
        .pipe(gulp_autoprefixer())
        .pipe(gulp_cssnano())
        .pipe(gulp_md5_plus(5, 'dest/html/*.html'))
        .pipe(gulp.dest('dest/css'))
})

gulp.task('js', ['html:include'], function () {
    return gulp.src('src/js/*.js')
        .pipe(gulp_md5_plus(5, 'dest/html/*.html'))
        .pipe(gulp.dest('dest/js'))
})

gulp.task('image:common', ['html:include'], function () {
    return gulp.src('src/image/common/*.png')
        .pipe(gulp_md5_plus(5, 'dest/html/*.html'))
        .pipe(gulp.dest('dest/image/common'))
})


gulp.task('image', ['image:common'])

gulp.task('clean', function(){
    gulp.src('dest', {read: false})
        .pipe(gulp_clean())
})

gulp.task('build', ['clean', 'js', 'css', 'image'])