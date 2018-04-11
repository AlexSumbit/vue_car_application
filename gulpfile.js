let gulp            = require('gulp'),
    sourcemaps      = require('gulp-sourcemaps'),
    sass            = require('gulp-sass');
    sourcemaps      = require('gulp-sourcemaps');
    autoprefixer    = require('gulp-autoprefixer');
    browserSync     = require('browser-sync').create();


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch("js/**/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("scss/**/*.scss")
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
