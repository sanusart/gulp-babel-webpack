var gulp = require('gulp');
var webpack = require('webpack-stream');
var webserver = require('gulp-webserver');
var path = require("path");

gulp.task('es6', function() {
  return gulp.src('./src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch(path.resolve(__dirname, "src/**/*.js"), ['es6']);
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['es6','webserver','watch']);
