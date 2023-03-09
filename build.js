const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/dubai-polls/runtime.js',
    './dist/dubai-polls/polyfills.js',
    './dist/dubai-polls/main.js'
  ];
  await fs.ensureDir('dubai-polls-build');
  await fs.removeSync('dubai-polls-build/dubai-polls.js');
  await concat(files, 'dubai-polls-build/dubai-polls.js');

})();
