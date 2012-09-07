
var rework = require('..')
  , read = require('fs').readFileSync;

rework(read('examples/prefix-selectors.css', 'utf8'))
  .use(rework.prefixSelectors('#dialog'))
  .toString(function(css) {
      console.log(css);
    })
