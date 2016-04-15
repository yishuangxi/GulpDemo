var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('concat', function(){
	var stream = gulp.src(['a.js', 'b.js'])
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('bundle'));

	return stream;
});