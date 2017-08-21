var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is new Text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});