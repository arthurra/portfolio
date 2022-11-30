let { src, dest, watch, series } = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps");

function scssTask() {
  return src("src/styles/main.scss", { sourcemaps: true })
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(dest("build/stylesheets", { sourcemaps: "./maps" }));
}

function htmlTask() {
  return src("src/**/*.html").pipe(dest("build"));
}

function fontTask() {
  return src("src/fonts/*").pipe(dest("build/fonts/"));
}

function imageTask() {
  return src("src/images/**/*").pipe(dest("build/images/"));
}

// Static server
function serve(cb) {
  browserSync.init({
    server: {
      baseDir: "build",
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch("src/styles/**/*.scss", series(scssTask, browserSyncReload));
  watch("src/*.html", series(htmlTask, browserSyncReload));
  watch("src/fonts/*", series(fontTask));
  watch("src/images/*", series(imageTask));
}

exports.default = series(
  htmlTask,
  fontTask,
  imageTask,
  scssTask,
  serve,
  watchTask
);
