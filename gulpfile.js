'use strict';

// Модули
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var concat = require('gulp-concat');
var rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');

 
// Таск превода из SCSS в CSS
gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
}))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream());
});
 

// Таск минификация CSS
gulp.task('css', function () {
  return gulp.src('app/css/**/*.css')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
}))
  .pipe(rename({suffix: ".min"}))
  .pipe(gulp.dest('app/bild/css'))
});


// Таск Объединение и Минификация JS файлов
gulp.task('compress', function () {
  return gulp.src('app/js/**/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify({toplevel: true}))
  .pipe(rename({suffix: ".min"}))
  .pipe(gulp.dest('app/bild/js'))
});


// Таск Browser-Sync
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "app/"
      }
  });
});


// Таск Слежения
gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('app/css/**/*.css', gulp.series('css'));
  gulp.watch('app/js/**/*.js', gulp.series('compress'));
  gulp.watch('app/*.html').on('change', browserSync.reload);
});


// Таск Default
gulp.task('default', gulp.parallel('browser-sync', 'watch'));
