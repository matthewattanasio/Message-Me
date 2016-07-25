'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var connect = require('gulp-connect');

var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var order = require('gulp-order');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('watch', function() {
    gulp.watch('./app/dist/css/**/*.css', ['css']);
    gulp.watch(['./*.html'], ['html']);
    gulp.watch('./app/src/js/**/*.js', ['webpack']);
    gulp.watch('./app/src/scss/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    //root: 'app',
    livereload: true
  });
});

gulp.task('css', function() {

	gulp.src([
			'./app/src/vendor/bootstrap/dist/css/bootstrap.css',
			'./app/src/vendor/bootstrap-material-design/dist/css/bootstrap-material-design.css',
			'./app/src/vendor/bootstrap-material-design/dist/css/ripples.css',
			'./app/dist/css/style.css'
			])
		.pipe(concat('main.css'))
		//.pipe(uglify())
		.pipe(gulp.dest('./app/dist/css'));
		//.pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src('./app/src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/dist/css'))
    .pipe(connect.reload());
});

gulp.task('webpack', function() {
    gulp.src('app/src/js/app.js')
	  .pipe(webpack( require('./webpack.config.js') ))
	  .pipe(gulp.dest('./app/dist/js'))
	  .pipe(connect.reload());
});

gulp.task('default', ['connect','watch','webpack','sass','css']);
