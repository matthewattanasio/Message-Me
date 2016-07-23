var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sass = require('gulp-sass');
var port = process.env.port || 3000;

gulp.task('sass', function() {
    gulp.src('./app/src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/dist'));
});


gulp.task('watch', function() {
    gulp.watch('./app/index.html', ['html']);
    gulp.watch('./app/dist/**/*.js', ['js']);
    gulp.watch('./app/dist/**/*.css', ['css']);
    gulp.watch('./app/src/**/*.scss', ['sass']);
});

gulp.task('webpack', function() {
    gulp.src('app/src/js/app.js')
	  .pipe(webpack( require('./webpack.config.js') ))
	  .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'webpack']);
