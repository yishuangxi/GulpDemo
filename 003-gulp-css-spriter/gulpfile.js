/**
 * Created by yishuangxi on 16/7/28.
 */

var gulp = require('gulp')
var spriter = require('gulp-css-spriter')
gulp.task('spriter', function(){
    gulp.src('src/css/*.css')
        .pipe(spriter({
            'spriteSheet': './dest/image/icon/sprite.png',
            'pathToSpriteSheetFromCSS': '../image/icon/sprite.png'
        }))
        .pipe(gulp.dest('dest/css'))
})
