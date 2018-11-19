///npm i gulp --save-dev
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('copyhtml', function() {
gulp.src('src/**/*.html').pipe(gulp.dest('build'));
  });

//npm install  gulp-sass --save-dev
gulp.task('sass', function () {
  return gulp.src('src/style/main.scss')
  .pipe(plumber())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
            browsers: ['last 42 versions'],
            cascade: false
        }))
  .pipe(gulp.dest('./build/style/')); });

//npm install --save-dev gulp-watch
gulp.task('watch', function () {
  gulp.watch("src/style/*.scss", ['sass']); });
//npm install browser-sync gulp --save-dev

gulp.task('default', ['sass']);

gulp.task('w', ['watch', 'sass']);

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
});
