
'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

////////
// - SCSS/CSS
///////



// Compile CSS
gulp.task('compile_scss', function() {
  // place code for your default task here
    gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed('./src/assets/css'))
    .pipe(gulp.dest('./src/assets/css'));

});

// detect changes in SCSS
gulp.task('watch_scss', function(){
  gulp.watch('./src/assets/scss/**/*.scss', ['compile_scss']);
  // place code for your default task here
});

// Run tasks
gulp.task('default', ['watch_scss']);
