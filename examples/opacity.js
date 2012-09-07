
var rework = require('..')
  , read = require('fs').readFileSync;

rework(read('examples/opacity.css', 'utf8'))
  .vendors(['-webkit-', '-moz-'])
  .use(rework.opacity())
  .toString(function(css) {
    console.log(css);
  })
