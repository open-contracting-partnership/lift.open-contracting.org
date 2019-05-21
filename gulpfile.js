var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
// let postcss = require('gulp-postcss');

function style() {
  return gulp.src('build/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('build/scss/*.scss', style);
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('build/js/*.js').on('change', browserSync.reload);
}

// gulp.task('css', () => {
//     return gulp.src('build/css/*.css')
//         .pipe(postcss())
//         .pipe(gulp.dest('dist/css'));
// });


// gulp.task('default', gulp.parallel('watch'));

exports.style = style;
exports.watch = watch;
