const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./source/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/style'));
}

function compressImages() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compressJS() {
    return gulp.src('./source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
}

exports.sass = compilaSass;
exports.images = compressImages;
exports.js = compressJS;

exports.watch = function () {
    gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/images/**/*', { ignoreInitial: false }, gulp.series(compressImages));
    gulp.watch('./source/js/*.js', { ignoreInitial: false }, gulp.series(compressJS));
};
