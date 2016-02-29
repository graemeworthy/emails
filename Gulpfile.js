var gulp = require('gulp');
var swig = require('gulp-swig');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var replace = require('gulp-replace');

gulp.task('default', function() {
  gulp.src('./src/*.html')
    // Run template engine
    .pipe(swig())
    // Change [[vars]] to {{vars}} to make them work in mandril
    .pipe(replace('[[', '{{'))
    .pipe(replace(']]', '}}'))
    // Rename and output .html files to .mjml to make mjml compiler work
    .pipe(rename(function (path) {
      path.extname = ".mjml";
    }))
    .pipe(gulp.dest('./mjml/'))
    // Run mjml compiler from bash, sinces gulp mjml compiler not fully functional working :(
    .pipe(shell([
      "export filename=<%= file.path %>; name=$(basename $filename .mjml); mjml -r $filename -o ./dist/$name.html"
    ]))
});