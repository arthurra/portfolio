const { src, dest, watch, series } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

function scssTask() {
  return src("src/styles/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest("build/stylesheets", { sourcemaps: "./maps" }));
}

function htmlTask() {
  return src("src/**/*.html").pipe(dest("build"));
}

function fontTask() {
  return src("src/fonts/*").pipe(dest("build/fonts/"));
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
}

exports.default = series(htmlTask, fontTask, scssTask, serve, watchTask);
