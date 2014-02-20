var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var template = require('gulp-template');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

var deps = {
    dev: {
        js: ['bower_components/jquery/jquery.js', 'bower_components/underscore/underscore.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js', 'bower_components/ng-grid/ng-grid-2.0.7.debug.js'],
        css: ['bower_components/bootstrap/dist/css/{bootstrap,bootstrap-theme}.css', 'bower_components/ng-grid/ng-grid.css', 'bower_components/jquery.ui/themes/base/jquery.ui.theme.css', 'src/css/*.css'],
        image: ['bower_components/jquery.ui/themes/base/images/*.*'],
        font: ['bower_components/bootstrap/dist/fonts/*.*']
    }
};

var libs = {
    dev: {
        js: ['libs/underscore.js', 'libs/jquery.js', 'libs/bootstrap.js', 'libs/angular.js', 'libs/angular-route.js', 'libs/ng-grid-2.0.7.debug.js', 'libs/all.js'],
        css: ['css/bootstrap.css', 'css/bootstrap-theme.css', 'css/ng-grid.css', 'css/jquery.ui.theme.css', 'css/CGrid.css']
    }
};

gulp.task('clean', function() {
    return gulp.src('build', {
        read: false
    }).pipe(clean());
});

gulp.task('concat', ['clean'], function() {
    return gulp.src(['src/js/CGrid.js', 'src/js/*.js']).pipe(concat("all.js")).pipe(gulp.dest('build/libs/'));
});

gulp.task('copy', ['concat'], function() {
    gulp.src(deps.dev.js).pipe(gulp.dest('build/libs/'));
    gulp.src(deps.dev.css).pipe(gulp.dest('build/css/'));
    gulp.src(deps.dev.image).pipe(gulp.dest('build/css/images/'));
    gulp.src(deps.dev.font).pipe(gulp.dest('build/font/'));
});


gulp.task('template', ['copy'], function() {
    return gulp.src('src/**/*.html.tpl')
        .pipe(template({
            csss: libs.dev.css,
            scripts: libs.dev.js
        })).pipe(rename({
            extname: ''
        }))
        .pipe(gulp.dest('build/')).pipe(connect.reload());
});

gulp.task('connect', ['template'], connect.server({
    root: ['build/'],
    port: 9898,
    livereload: true,
    open: {
        browser: 'chrome'
    }
}));

gulp.task('watch', function() {
    gulp.watch('src/**/*.{js,css,html.tpl}', ['template']);
});

gulp.task('default', ['connect', 'watch']);