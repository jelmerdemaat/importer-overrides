var fs = require('fs'),
    path = require('path'),
    glob = require('glob'),
    gutil = require('gulp-util');

module.exports = function(url, prev, done) {
  var client = this.options.importerOptions.client || false;

  if(!client) {
    return new Error('No client given. Client directory must be specified.');
  }

  var base = this.options.importerOptions.base || './',
      optional = this.options.importerOptions.optional || false,
      debug = this.options.importerOptions.debug,
      fileName = path.parse(url).name,
      filePath = path.parse(url).dir,
      fileGlob = '/?(_)' + fileName + '.s@(a|c)ss',
      searchPath = path.join(client, filePath) + fileGlob;

  glob(searchPath, function(err1, files) {
    if(!err1 && files && files.length) {
      if(debug) {
        gutil.log(gutil.colors.yellow('Importer:'), gutil.colors.grey('Searched file pattern', searchPath));
        gutil.log(gutil.colors.yellow('Importer:'), 'Using file', gutil.colors.green(files[0]));
      }
      done({ file: files[0] });
    } else {
      searchPath =  path.join(base, filePath) + fileGlob;

      glob(searchPath, function(err2, files) {
        if(!err2 && files && files.length) {
          if(debug) {
            gutil.log(gutil.colors.yellow('Importer:'), gutil.colors.grey('Searched file pattern', searchPath));
            gutil.log(gutil.colors.yellow('Importer:'), 'Using file', gutil.colors.green(files[0]));
          }
          done({ file: files[0] });
        } else {
          if(optional && searchPath.indexOf(optional) > -1) {
            gutil.log(gutil.colors.yellow('Importer:'), 'Import', gutil.colors.red(fileName), 'not found and is optional match, skipping...');
            done({});
          } else {
            if(err1) {
              done(new Error(err1));
            } else {
              done(new Error(err2));
            }
          }
        }
      });
    }
  });
}
