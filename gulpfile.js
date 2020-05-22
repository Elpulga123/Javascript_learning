var gulp = require('gulp');
var sass = require('gulp-sass');
var { watch } = require('gulp');
var browserSync = require('browser-sync').create();

function style() {
    return gulp.src(['./src/sass/*.scss',
        './bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
        './bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
        './bower_components/animate.css/animate.css'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream())
}

function js() {
    return gulp.src([
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/owl.carousel/dist/owl.carousel.min.js',
        './bower_components/animate-js/animate.js',
        'src/js/*.js'])
        .pipe(gulp.dest('./src/js'))
        .pipe(browserSync.stream()) // tự động refresh lại trang
}

function watchSystem() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    watch('./src/sass/*.scss', style).on('change', browserSync.reload);
    watch('./src/**/*.html').on('change', browserSync.reload)
    watch('./src/**/*.js').on('change', browserSync.reload)
}

module.exports = {
    js: js,
    style: style,
    watch: watchSystem
}