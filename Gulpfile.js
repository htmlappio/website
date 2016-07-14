var gulp = require('gulp');
var cors = require('cors');
var serve = require('gulp-serve');
var connect = require('gulp-connect');

gulp.task('serve', serve('./'));

gulp.task('serve-prod', serve({
  root: ['./'],
  port: 3000,
  middleware: function(req, res) {
    return [cors()];
  }
}));

gulp.task('connect', function() {
  connect.server({
    root: './',
    middleware: function() {
        return [cors()];
    }
  });
});

gulp.task('default', ['connect']);
