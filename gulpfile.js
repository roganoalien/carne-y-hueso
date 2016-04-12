var gulp = require('gulp'),
	imagemin = require('imagemin'),
	cleanCSS = require('gulp-clean-css');

gulp.task('optimize-img', function(){
	new imagemin()
		.src('img/*/*.{jpg,png}')
		.dest('build/img/')
		.use(imagemin.jpegtran({progressive: true}))
		.run(function(err, files){
			console.log(files[0]);
		});
});

gulp.task('minify-css', function(){
	//minificar css
	return gulp.src('css/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('build/css'));
});

gulp.task('default', ['optimize-img', 'minify-css']);