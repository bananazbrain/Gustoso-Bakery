var gulp        = require('gulp'),
	  browserSync = require('browser-sync'),
	  reload      = browserSync.reload;


gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });

    gulp.watch("**/*.html").on("change", reload);
    gulp.watch("**/*.css").on("change", reload);
});

gulp.task('default', gulp.parallel('watch'));