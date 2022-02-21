const buildPath = './build/';
const srcPath = './src/';

const path = {
    build: {
        html: buildPath,
        js: buildPath + 'js/',
        lib: buildPath + 'js/',
        css: buildPath + 'css/',
        images: buildPath + 'images/',
        fonts: buildPath + 'fonts/',
    },
    src: {
        html: srcPath + '[^_]*.html',
        js: srcPath + 'js/**/*.js',
        lib: srcPath + 'lib/**/*.js',
        css: srcPath + 'css/**/*.{scss,css}',
        images: srcPath + 'images/**',
        fonts: srcPath + 'fonts/**',
    },
    watch: {
        html: srcPath + '**/*.html',
        js: srcPath + 'js/**/*.js',
        lib: srcPath + 'lib/**/*.js',
        images: srcPath + 'images/**/*.{png,jpg,svg,gif}',
        css: srcPath + 'css/**/*.{scss,css}'
    },
    clean: buildPath
};

module.exports = path;
