var gulp = require('gulp'),
    sass = require('gulp-sass'), //Подключаем Sass пакет
    uglify = require('gulp-uglifyjs'),
  	concat = require('gulp-concat'),
    // browserSync = require('browser-sync'), // Подключаем Browser Sync
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления
    htmlhint = require("gulp-htmlhint");
    // rigger = require('gulp-rigger');

const FileInjector = require('./fileInjector');
const workingDirectoryFI = 'E:\\Codyu\\Booklya_mobile\\app\\pages';
const urlBaseDirectoryFI = 'E:\\Codyu\\Booklya_mobile';
const templatesDirectoryFI = 'E:\\Codyu\\Booklya_mobile\\app\\template';

// gulp.task('html:build', function () {
//     gulp.src(['app/index.html']) //Выберем файлы по нужному пути
//         .pipe(rigger()) //Прогоним через rigger
//         .pipe(gulp.dest('app/build')) //Выплюнем их в папку build
//         .pipe(browserSync.reload({stream: true})); //И перезагрузим наш сервер для обновлений
// });

gulp.task('htmlhint', function () {
    return gulp.src('app/pages/output/*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter());
})



gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/build/css')) // Выгружаем результата в папку app/css
        // .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/plugin.js',
        // Берем все необходимые библиотеки
        'app/libs/jquery/dist/jquery.min.js'])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify())// Сжимаем JS файл
        .pipe(gulp.dest('app/js'));// Выгружаем в папку app/js
});

gulp.task('fileInjector', async () => {

    await FileInjector(workingDirectoryFI, templatesDirectoryFI, urlBaseDirectoryFI);
});

// gulp.task('browser-sync', function() { // Создаем таск browser-sync
//     browserSync({ // Выполняем browser Sync
//         server: { // Определяем параметры сервера
//             baseDir: 'app/build' // Директория для сервера - app
//         },
//         notify: false // Отключаем уведомления
//     });
// });

gulp.task('watch', ['sass', 'htmlhint', 'scripts', 'fileInjector'], function(){
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch(['app/**/*.html', `${workingDirectoryFI}/configs/*.js`], ['fileInjector']);

    gulp.watch('app/js/**/*.js', ['scripts']); // Наблюдение за JS файлами в папке js
    gulp.watch('app/**/*.html', ['htmlhint']); // Наблюдение за HTML файлами в корне проекта
});


gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);
