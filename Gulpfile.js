var gulp = require('gulp');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var shell = require('gulp-shell');
var swig = require('gulp-swig');
var gutil = require('gulp-util');

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
      "export filename=<%= file.path %>; name=$(basename $filename .mjml); mjml -r $filename -o ./dist/$name.html; sed -i '1i<!-- Dont change this template. Make changes here https://github.com/Boligportal/emails -->' ./dist/$name.html"
    ]))
});
