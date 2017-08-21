var fs = require('fs');

fs.rename('myrenamedfile.txt', 'myrenamedfile1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});