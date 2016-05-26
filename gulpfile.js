// Gulpfile.js
var gulp = require('gulp')
    , nodemon = require('gulp-nodemon')
    , jshint = require('gulp-jshint');

var less = require('gulp-less');
var path = require('path');

var source = require('./assets/source.json')

gulp.task('less', function () {
    return gulp.src(source.less)
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('lint', function () {
    gulp.src('app_client/**/*.js')
        .pipe(jshint())
})

gulp.task('dev', function () {
    nodemon({
        script: 'bin/www',
        ext: 'html js',
        ignore: [
                'bower_components/',
                'node_modules/',
                'public'
            ],
        tasks: ['lint'] })
        .on('restart', function () {
            console.log('restarted!')
        })
})


gulp.task('default', ['dev']);
