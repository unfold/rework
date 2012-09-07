
var rework = require('..')
  , read = require('fs').readFileSync;

rework(read('examples/at2x.css', 'utf8'))
  .vendors(['-webkit-', '-moz-'])
  .use(rework.at2x())
  .toString(function(css) {
    console.log(css);
  })
