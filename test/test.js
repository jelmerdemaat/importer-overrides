var fs = require('fs'),
    sass = require('node-sass'),
    importer = require('../');

var expected = "#one { color: red; }#two { color: hotpink !important; }",
    result;

sass.render({
  file: 'test/client/client.scss',
  outputStyle: 'compact',
  importer: importer,
  importerOptions: {
    debug: true,
    client: 'test/client/',
    base: 'test/base/',
    optional: 'optional'
  }
}, function(error, result) {
  if(!error) {
    result = result.css.toString('utf-8').replace(/\n|\r/g, '');
    if(result === expected) {
      return true;
    } else {
      throw new Error('Result and expected code are not the same.');
    }
  } else {
    throw error;
  }
});
