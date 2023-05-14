import gulp from "gulp";
import babel from "gulp-babel";
import GulpCleanCss from "gulp-clean-css";
import { deleteAsync } from "del";
import browserSync from "browser-sync";
import svgSprite from "gulp-svg-sprite";
import GulpImage from "gulp-image";
import htmlmin from "gulp-htmlmin";
import gutil from "gulp-util";
import gulpSourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";
import uglify from "gulp-uglify-es";
import notify from "gulp-notify";
import gulpSass from "gulp-sass";
import sass from "sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import combineMedia from "gulp-combine-media";

const sasss = gulpSass(sass);
const paths = {
  html: {
    src: "src/**/*.html",
    dest: "app",
  },
  styles: {
    src: { css: "src/css/**/*.css", sass: "src/css/**/*.scss" },
    dest: "app/css/",
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "app/js/",
  },
  imgs: {
    src: [
      "src/img/**.jpg",
      "src/img/**.png",
      "src/img/**.jpeg",
      "src/img/*.svg",
      "src/img/**/*.jpg",
      "src/img/**/*.png",
      "src/img/**/*.jpeg",
    ],
    dest: "app/img/",
  },
  svg: {
    src: "src/img/svg/**.svg",
    dest: "app/img/svg/",
  },
  resources: {
    src: "src/resources/**",
    dest: "app/",
  },
};

function clean() {
  return deleteAsync(["app/"]);
}

function stylesCss() {
  return gulp
    .src(paths.styles.src.css)
    .pipe(GulpCleanCss({ level: 2 }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function stylesSass() {
  return gulp
    .src(paths.styles.src.sass)
    .pipe(gulpSourcemaps.init())
    .pipe(concat("styles.scss"))
    .pipe(sasss({ outputStyle: "compressed" }).on("error", sasss.logError))
    .pipe(combineMedia())
    .pipe(postcss([autoprefixer(), cssnanoPlugin()]))
    .pipe(gulpSourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      gutil.env.type === "development" ? gulpSourcemaps.init() : gutil.noop()
    )
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(
      // gutil.env.type === "production"
      // ?
      uglify.default().on("error", notify.onError())
      // : gutil.noop()
    )
    .pipe(gulpSourcemaps.write("."))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

function images() {
  return gulp
    .src(paths.imgs.src)
    .pipe(GulpImage())
    .pipe(gulp.dest(paths.imgs.dest));
}

function svgSprites() {
  return gulp
    .src(paths.svg.src)
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(gulp.dest(paths.svg.dest));
}

const resources = () => {
  return gulp.src(paths.resources.src).pipe(gulp.dest(paths.resources.dest));
};

function htmlMinify() {
  return gulp
    .src(paths.html.src)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "app",
    },
  });

  gulp.watch(paths.html.src, htmlMinify);
  gulp.watch(paths.styles.src.css, stylesCss);
  gulp.watch(paths.styles.src.sass, stylesSass);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.imgs.src, images);
  gulp.watch(paths.resources.src, resources);
  gulp.watch(paths.svg.src, svgSprites);
}

const build = gulp.series(
  clean,
  gulp.parallel(htmlMinify, stylesCss, stylesSass, scripts),
  images,
  svgSprites,
  resources,
  watch
);

export { clean };
export { stylesCss as css };
export { stylesSass as sass };
export { scripts };
export { watch };
export { images };
export { svgSprites as svg };
export { resources };
export { htmlMinify };

export default build;
