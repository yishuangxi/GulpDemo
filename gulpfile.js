var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function(){
	var stream = gulp.src(['a.js', 'b.js'])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('bundle'));

	return stream;
});