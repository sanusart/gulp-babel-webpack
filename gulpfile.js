var gulp = require('gulp');
var webpack = require('webpack-stream');
var path = require("path");

gulp.task('es6', function() {
  return gulp.src('./src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch(path.resolve(__dirname, "src/**/*.js"), ['es6']);
});

gulp.task('default', ['es6','watch']);
