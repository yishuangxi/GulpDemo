/**
 * Created by yishuangxi on 16/8/9.
 */


var gulp = require('gulp')
var gulp_foreach = require('gulp-foreach')
var gulp_each = require('gulp-each')
var gulp_concat = require('gulp-concat')

gulp.task('foreach', function(){
    gulp.src('src/html/*.html')
        // .pipe(gulp_foreach(function(stream, file){
        //     console.log('file.name: ', file.name)
        //     return stream
        // }))
        .pipe(gulp_each(function(content, file, callback){
            for(var p in file){
                console.log(p)

            }
            console.log(content)
        }))
        .pipe(gulp.dest('dest/html'))
})