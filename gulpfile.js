var gulp = require('gulp');
var sass = require('gulp-sass');
// var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var sourcemaps = require("gulp-sourcemaps");

function style() {
  return gulp.src('build/scss/main.scss')
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest('build/css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer({
      browsers: ['> .5% or last 2 versions'],
      cascade: false
    }), cssnano()]))
    .pipe(sourcemaps.write())
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

gulp.task('default', watch);


exports.style = style;
exports.watch = watch;
