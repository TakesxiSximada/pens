const gulp = require('gulp');
const compass = require('gulp-compass');


gulp.task('compass', function (){
    gulp.src('./sass/*.scss')
        .pipe(compass({
            bundle_exec: true,
            config_file: './config.rb',
            css: 'stylesheets',
            sass: 'sass',
        }))
        .pipe(gulp.dest('stylesheets'));
})


gulp.task('watch', function (){
    gulp.watch('./sass/*.scss', ['compass']);
});



gulp.task('default', ['watch']);
