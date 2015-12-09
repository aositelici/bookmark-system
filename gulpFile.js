var gulp = require('gulp');
var exec = require('child_process').exec;

var paths = ['./routes/*','./*','./views/*','./public/javascripts/*','./public/stylesheets/*','./controller/*','./model/*','./helper/*'];

gulp.task('start',function(){
  exec('node app.js');
  gulp.watch(paths, ['start']);
});
