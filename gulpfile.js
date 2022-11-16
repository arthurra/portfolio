const { src, dest, watch, series } = require("gulp");
const browserSync = require("browser-sync").create();
// const sass = require("gulp-sass")(require("sass"));
const sass = require("gulp-sass")(require("sass"));
// const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

// Compile styles
// function styles() {
//   return src("src/styles/main.scss")
//     .pipe(sourcemaps.init())
//     .pipe(sass().on("error", sass.logError))
//     .pipe(autoprefixer())
//     .pipe(sourcemaps.write("./maps"))
//     .pipe(dest("build/stylesheets"))
//     .pipe(browserSync.stream());
// }
function scssTask() {
  return src("src/styles/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(dest("build/stylesheets", { sourcemaps: "./maps" }));
}

function htmlTask() {
  return src("src/**/*.html").pipe(dest("build"));
}

// Static server
function serve(cb) {
  browserSync.init({
    server: {
      baseDir: "build",
    },
  });
  cb();

  // watch("src/styles/**/*.scss", ["styles"]);
  // watch("src/**/*.html", ["html"]);
  // watch("src/styles/**/*.scss", series(styles));
  // watch("src/**/*.html", series(html));
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch("src/styles/**/*.scss", series(scssTask, browserSyncReload));
  watch("src/*.html", series(htmlTask, browserSyncReload));
}

// gulp.task("default", ["html", "styles", "serve"]);
// exports.default = series(html, styles, serve);
exports.default = series(htmlTask, scssTask, serve, watchTask);
// exports.default = function () {
//   watch("src/styles/**/*.scss", series(styles));
//   watch("src/**/*.html", series(html));
//   series(serve);
// };
