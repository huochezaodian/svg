const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const gulpSync = require('gulp-sync')(gulp);

const config = {
	'svg_dir': './svg-icon/**/*.svg',
	'dist_dir': './dist',
};

const spritesConfig = {
	selector: "icon-%f",
	pngPath: "../png/sprite.png",
	baseSize: 16,
	templates: {
        css: require("fs").readFileSync("./sprites.css", "utf-8")
    }
};

//清理文件
gulp.task('clean',function(){
	return gulp.src(config.dist_dir)
		.pipe(plugins.clean());
});

//生成spirtes svg 
gulp.task('sprites-svg', function () {
    return gulp.src(config.svg_dir)
        .pipe(plugins.svgSprites(spritesConfig))
        .pipe(gulp.dest(config.dist_dir)) 
        // .pipe(plugins.filter("**/*.svg"))  
        // .pipe(plugins.svg2png())           
        // .pipe(gulp.dest(config.dist_dir));;
});
 
//生成spirtes png
gulp.task('svg2png', function () {
    return gulp.src(config.dist_dir + '/svg/sprite.svg')
        .pipe(plugins.svg2png())
        .pipe(gulp.dest(config.dist_dir + '/png'));
});

gulp.task('default', gulpSync.sync(['clean', 'sprites-svg', 'svg2png']));