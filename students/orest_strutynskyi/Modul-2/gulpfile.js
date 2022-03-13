const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	webpack = require('webpack-stream'),
	fileinclude = require('gulp-file-include'),
	del = require("del"),
	cleanCSS = require('gulp-clean-css'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass')(require('sass'));

const path = require('./gulp/pathConfig.js');
const webpackConfig = require('./gulp/webpackConfig.js');
const isDev = process.argv.includes('--dev');

function style() {
	return gulp.src(path.src.css, { sourcemaps: isDev })
		.pipe(sass())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(cleanCSS())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(browserSync.stream());
}

function images() {
	return gulp.src(path.src.images)
		.pipe(gulp.dest(path.build.images))
}

function fonts() {
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts));
}

function html(cb) {
	gulp.src(path.src.html)
		.pipe(fileinclude())
		.pipe(gulp.dest(path.build.html))
		.pipe(browserSync.stream());

	cb();
}

function js() {
	return gulp.src(path.src.js)
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(path.build.js))
		.pipe(browserSync.stream());
}

function server(cb) {
	browserSync.init({
		host: 'localhost',
		port: 3000,
		tunnel: false,
		server: path.build.html
	});

	cb();
}

function clean(cb) {
	del(path.clean);

	cb();
}

function watch() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.css], style);
	gulp.watch([path.watch.css], images);
	gulp.watch([path.watch.css], style).on('change', browserSync.reload)
}

exports.html = html;
exports.js = js;
exports.clean = clean;
exports.style = style;
exports.style = images
exports.fonts = fonts;

if (isDev) {
	exports.default = gulp.series(
		html,
		js,
		fonts,
		style,
		images,
		gulp.parallel(watch, server)
	);
} else {
	exports.default = gulp.series(clean, html, js, fonts, images, style);
}
