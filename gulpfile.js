var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('serve', function() {
  gulp.src('src')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: 'http://localhost:8000/app/'
    }));
});