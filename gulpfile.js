var gulp = require('gulp');
var through = require('through2');
var replace = require('gulp-replace');

var linuxArr = []

gulp.task('default', function () {
  gulp.src(['docs/linux/**'])
    .pipe(through.obj(function (file, enc, callback) {
      this.push(file.path);
      callback();
    })).on('data', function (data) {
      if (data.includes('/linux/')) {
        if (data.includes('.md') && !data.includes('README')) {
          let newdata = data.substring(data.lastIndexOf('linux/') + 4, data.lastIndexOf('.md'))
          linuxArr.push(newdata)
        }
      }
      
    }).on('end', function() {
      gulp.src('config.js')
      .pipe(replace('\'linux-children\'', JSON.stringify(linuxArr)))
      .pipe(gulp.dest('docs/.vuepress'));
    })
});