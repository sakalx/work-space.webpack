const
    gulp = require('gulp'),                   // Подключаем Gulp
    clean = require('gulp-clean'),             // Подключаем Разрушитель  для удаления папок
    svgmin = require('gulp-svgmin'), 		       // Подключаем svgmin       для минимизации SVG
    svgSprite = require('gulp-svg-sprite');        // Подключаем svg-sprite   для склевание SVG

// Создаем таск clean SVG-folder---------------------удаляем прошлые svg sprite
gulp.task('svg-clean', function() {
  return gulp.src([
    'src/svg/minified',
    'src/svg/symbol',
    'src/svg/view',
  ], {read: false}).pipe(clean());
});

// Создаем таск svg-min---------------------минифицируем svg
gulp.task('svg-min', function() {
  return gulp.src('src/svg/original/**/*.svg').
      pipe(svgmin({
        plugins: [
          {removeDoctype: false},
          {removeTitle: true},
          {cleanupNumericValues: {floatPrecision: 1}},
        ],
      })).pipe(gulp.dest('src/svg/minified/'));
});

// Создаем таск SVG sprite
gulp.task('svg-sprite',
    function() {
      return gulp.src('minified/*.svg', {cwd: 'src/svg/'}).pipe(svgSprite({
        shape: {
          dimension: {maxWidth: 32, maxHeight: 32},  // Set maximum dimensions
          spacing: {padding: 3}                      // Add padding
        },
        mode: {
          view: {bust: false},                       // Activate the «view» mode
          symbol: true		  	                         // Activate the «symbol» mode
        },
      })).pipe(gulp.dest('src/svg/'));
    });
