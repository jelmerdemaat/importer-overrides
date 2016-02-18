A custom [Sass importer](https://github.com/sass/node-sass#importer--v200---experimental)
that lets you swap import files for overrides if they are available.

For use with Gulp ([for now](#todo)) because of `gutil.log`.

[GitHub](https://github.com/jelmerdemaat/importer-overrides) | [NPM](https://www.npmjs.com/package/importer-overrides) | [@jelmerdemaat](https://twitter.com/jelmerdemaat)

[![Build Status](https://travis-ci.org/jelmerdemaat/importer-overrides.svg?branch=master)](https://travis-ci.org/jelmerdemaat/importer-overrides)
[![bitHound Code](https://www.bithound.io/github/jelmerdemaat/importer-overrides/badges/code.svg)](https://www.bithound.io/github/jelmerdemaat/importer-overrides)
[![bitHound Dependencies](https://www.bithound.io/github/jelmerdemaat/importer-overrides/badges/dependencies.svg)](https://www.bithound.io/github/jelmerdemaat/importer-overrides/master/dependencies/npm)


## Use

Basic setup:

```js
var importer = require('importer-overrides');

sass({
  importer: importer,
  importerOptions: {
    debug: true,                    // or false
    client: 'src/client/folder/',   // required
    base: 'src/base/folder/',       // defaults to Gulpfile dir ('./')
    optional: 'imports'             // filepaths that match string are optional
  }
})
```

## Todo
- [ ] Take out the gutil dependency

## License
MIT © Jelmer de Maat
