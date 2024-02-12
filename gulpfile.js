/*const gulp =require('gulp');
const  sass =require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass(){
    return gulp.src('./source/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/style'));
}

exports.sass = compilaSass;
exports.watch =function(){
    gulp.watch(' ./source/style/*.scss' , {ignoreInitial: false }, gulp.series(compilaSass));
}*/
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

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

exports.sass = compilaSass;
exports.images = compressImages;

exports.watch = function () {
    gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/images/**/*', { ignoreInitial: false }, gulp.series(compressImages));
};
