Custom [Sass importer](https://github.com/sass/node-sass#importer--v200---experimental) for use with Gulp.

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
