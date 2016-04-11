var gulp = require('gulp'),
	imagemin = require('imagemin');

gulp.task('optimize-img', function(){
	new imagemin()
			.src('img/not-optimized/*.jpg')
			.dest('img')
			.use(imagemin.jpegtran({progressive: true}))
			.run(function (err, file) {
				console.log(files[0]);
			});
});

gulp.task('default', ['optimize-img']);