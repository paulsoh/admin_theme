'use strict';

var path = require('path');
var ignore = require('gulp-ignore');
var gulp = require('gulp');
var less = require('gulp-less');
var rimraf = require('gulp-rimraf');
//CONFIG PATHS
var config = {
  assets_blue: 'blue/assets',
  assets_green: 'green/assets',
  assets_yellow: 'yellow/assets',
  assets_purple: 'purple/assets',
  assets_blue_hori: 'blue_hori/assets',
  assets_green_hori: 'green_hori/assets',
  assets_purple_hori: 'purple_hori/assets',
  assets_yellow_hori: 'yellow_hori/assets',
  assets_dark: 'dark/assets',
  assets_dark_hori: 'dark_hori/assets',
  assets_multicolor: 'multicolor/assets',
  assets_multicolor_hori: 'multicolor_hori/assets',
  assets_boxed: 'boxed/assets',
  assets_boxed_hori: 'boxed_hori/assets',
  assets_blue_rtl: 'blue_rtl/assets',
  assets_boxed_hori_rtl: 'boxed_hori_rtl/assets',
	build: 'css'
};

//TASKS
// ------------- Blue ---------------
gulp.task('less-blue',['clean-blue'], function () {
  gulp.src(['!'+config.assets_blue + '/less/icons/**/*.less', config.assets_blue + '/less/**/*.less'])  
    .pipe(less({
      paths: [config.assets_blue +'/less/']
    }))
    .pipe(gulp.dest(config.assets_blue + "/" + config.build));
});


gulp.task('clean-blue', function(cb){
	//return rimraf(config.assets_blue + "/" + config.build, cb);
	return gulp.src(config.assets_blue + "/" + config.build + '/**/*.css', { read: false }) // much faster
  	.pipe(ignore('bootstrap.min.css'))
  	.pipe(rimraf());
});

// ------------- Blue PHP ---------------
gulp.task('less-blue_PHP',['clean-blue_PHP'], function () {
  gulp.src(['!'+config.assets_blue_PHP + '/less/icons/**/*.less', config.assets_blue_PHP + '/less/**/*.less'])  
    .pipe(less({
      paths: [config.assets_blue_PHP +'/less/']
    }))
    .pipe(gulp.dest(config.assets_blue_PHP + "/" + config.build));
});


gulp.task('clean-blue_PHP', function(cb){
  //return rimraf(config.assets_blue + "/" + config.build, cb);
  return gulp.src(config.assets_blue_PHP + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});


// ------------- green ---------------
gulp.task('less-green',['clean-green'], function () {
  gulp.src(['!'+config.assets_green + '/less/icons/**/*.less', config.assets_green + '/less/**/*.less']) 
    .pipe(less({
      paths: [config.assets_green +'/less/']
    }))
    .pipe(gulp.dest(config.assets_green + "/" + config.build));
});


gulp.task('clean-green', function(cb){
	return gulp.src(config.assets_green + "/" + config.build + '/**/*.css', { read: false }) // much faster
  	.pipe(ignore('bootstrap.min.css'))
  	.pipe(rimraf());
});


// ------------- yellow ---------------
gulp.task('less-yellow',['clean-yellow'], function () {
  gulp.src(['!'+config.assets_yellow + '/less/icons/**/*.less', config.assets_yellow + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_yellow +'/less/']
    }))
    .pipe(gulp.dest(config.assets_yellow + "/" + config.build));
});


gulp.task('clean-yellow', function(cb){
	return gulp.src(config.assets_yellow + "/" + config.build + '/**/*.css', { read: false }) // much faster
  	.pipe(ignore('bootstrap.min.css'))
  	.pipe(rimraf());
});

// ------------- Purple ---------------
gulp.task('less-purple',['clean-purple'], function () {
  gulp.src(['!'+config.assets_purple + '/less/icons/**/*.less', config.assets_purple + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_purple +'/less/']
    }))
    .pipe(gulp.dest(config.assets_purple + "/" + config.build));
});


gulp.task('clean-purple', function(cb){
  return gulp.src(config.assets_purple + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});


// ------------- Blue_horizontal ---------------
gulp.task('less-blue_hori',['clean-blue_hori'], function () {
  gulp.src(['!'+config.assets_blue_hori + '/less/icons/**/*.less', config.assets_blue_hori + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_blue_hori +'/less/']
    }))
    .pipe(gulp.dest(config.assets_blue_hori + "/" + config.build));
});


gulp.task('clean-blue_hori', function(cb){
  return gulp.src(config.assets_blue_hori + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});


// ------------- Green_horizontal ---------------
gulp.task('less-green_hori',['clean-green_hori'], function () {
  gulp.src(['!'+config.assets_green_hori + '/less/icons/**/*.less', config.assets_green_hori + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_green_hori +'/less/']
    }))
    .pipe(gulp.dest(config.assets_green_hori + "/" + config.build));
});


gulp.task('clean-green_hori', function(cb){
  return gulp.src(config.assets_green_hori + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});

// ------------- Purple_horizontal ---------------
gulp.task('less-purple_hori',['clean-purple_hori'], function () {
  gulp.src(['!'+config.assets_purple_hori + '/less/icons/**/*.less', config.assets_purple_hori + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_purple_hori +'/less/']
    }))
    .pipe(gulp.dest(config.assets_purple_hori + "/" + config.build));
});


gulp.task('clean-purple_hori', function(cb){
  return gulp.src(config.assets_purple_hori + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});


// ------------- Yellow_horizontal ---------------
gulp.task('less-yellow_hori',['clean-yellow_hori'], function () {
  gulp.src(['!'+config.assets_yellow_hori + '/less/icons/**/*.less', config.assets_yellow_hori + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_yellow_hori +'/less/']
    }))
    .pipe(gulp.dest(config.assets_yellow_hori + "/" + config.build));
});


gulp.task('clean-yellow_hori', function(cb){
  return gulp.src(config.assets_yellow_hori + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});



// ------------- Dark ---------------
gulp.task('less-dark',['clean-dark'], function () {
  gulp.src(['!'+config.assets_dark + '/less/icons/**/*.less', config.assets_dark + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_dark +'/less/']
    }))
    .pipe(gulp.dest(config.assets_dark + "/" + config.build));
});


gulp.task('clean-dark', function(cb){
  return gulp.src(config.assets_dark + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});



// ------------- Dark_horizontal ---------------
gulp.task('less-dark_hori',['clean-dark_hori'], function () {
  gulp.src(['!'+config.assets_dark_hori + '/less/icons/**/*.less', config.assets_dark_hori + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_dark_hori +'/less/']
    }))
    .pipe(gulp.dest(config.assets_dark_hori + "/" + config.build));
});


gulp.task('clean-dark_hori', function(cb){
  return gulp.src(config.assets_dark_hori + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});


// ------------- Multicolor ---------------
gulp.task('less-multicolor',['clean-multicolor'], function () {
  gulp.src(['!'+config.assets_multicolor + '/less/icons/**/*.less', config.assets_multicolor + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_multicolor +'/less/']
    }))
    .pipe(gulp.dest(config.assets_multicolor + "/" + config.build));
});


gulp.task('clean-multicolor', function(cb){
  return gulp.src(config.assets_multicolor + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});



// ------------- Multicolor_horizontal ---------------
gulp.task('less-multicolor_hori',['clean-multicolor_hori'], function () {
  gulp.src(['!'+config.assets_multicolor_hori + '/less/icons/**/*.less', config.assets_multicolor_hori + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_multicolor_hori +'/less/']
    }))
    .pipe(gulp.dest(config.assets_multicolor_hori + "/" + config.build));
});


gulp.task('clean-multicolor_hori', function(cb){
  return gulp.src(config.assets_multicolor_hori + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});


// ------------- Boxed Layout ---------------
gulp.task('less-boxed',['clean-boxed'], function () {
  gulp.src(['!'+config.assets_boxed + '/less/icons/**/*.less', config.assets_boxed + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_boxed +'/less/']
    }))
    .pipe(gulp.dest(config.assets_boxed + "/" + config.build));
});


gulp.task('clean-boxed', function(cb){
  return gulp.src(config.assets_boxed + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});

// ------------- Boxed-Horizontal Layout ---------------
gulp.task('less-boxed_hori',['clean-boxed_hori'], function () {
  gulp.src(['!'+config.assets_boxed_hori + '/less/icons/**/*.less', config.assets_boxed_hori + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_boxed_hori +'/less/']
    }))
    .pipe(gulp.dest(config.assets_boxed_hori + "/" + config.build));
});


gulp.task('clean-boxed_hori', function(cb){
  return gulp.src(config.assets_boxed_hori + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});

// ------------- Blue RTL Layout ---------------
gulp.task('less-blue_rtl',['clean-blue_rtl'], function () {
  gulp.src(['!'+config.assets_blue_rtl + '/less/icons/**/*.less', config.assets_blue_rtl + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_blue_rtl +'/less/']
    }))
    .pipe(gulp.dest(config.assets_blue_rtl + "/" + config.build));
});


gulp.task('clean-blue_rtl', function(cb){
  return gulp.src(config.assets_blue_rtl + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});

// ------------- Blue RTL -Horizontal Layout ---------------
gulp.task('less-blue_hori_rtl',['clean-blue_hori_rtl'], function () {
  gulp.src(['!'+config.assets_blue_hori_rtl + '/less/icons/**/*.less', config.assets_blue_hori_rtl + '/less/**/*.less'])
    .pipe(less({
      paths: [config.assets_blue_hori_rtl +'/less/']
    }))
    .pipe(gulp.dest(config.assets_blue_hori_rtl + "/" + config.build));
});


gulp.task('clean-blue_hori_rtl', function(cb){
  return gulp.src(config.assets_blue_hori_rtl + "/" + config.build + '/**/*.css', { read: false }) // much faster
    .pipe(ignore('bootstrap.min.css'))
    .pipe(rimraf());
});

gulp.task('default', function() {
 console.log( "\nMinton - Gulp Command List \n" );
 console.log( "----------------------------\n" );
 console.log( "gulp less-blue" );
 console.log( "gulp less-green" );
 console.log( "gulp less-yellow" );
 console.log( "gulp less-purple" );
 console.log( "gulp less-blue_hori" );
 console.log( "gulp less-green_hori" );
 console.log( "gulp less-purple_hori" );
 console.log( "gulp less-yellow_hori" );
 console.log( "gulp less-dark" );
 console.log( "gulp less-dark_hori" );
 console.log( "gulp less-multicolor" );
 console.log( "gulp less-multicolor_hori" );
  console.log( "gulp less-blue_rtl" );
   console.log( "gulp less-blue_hori_rtl" );
 console.log( "----------------------------\n" );
});