
var rework = require('..')
  , read = require('fs').readFileSync;

rework(read('examples/prefix-value.css', 'utf8'))
  .vendors(['-webkit-', '-moz-'])
  .use(rework.prefix('transition'))
  .use(rework.prefixValue('transform'))
  .toString(function(css) {
      console.log(css);
    })
