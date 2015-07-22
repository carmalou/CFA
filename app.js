// node file to read/write txt into new json file
var fs = require('fs');
var Promise = require('bluebird');
var cfa = require('./codeforamerica.js');
var cfaInfo;
Promise.promisifyAll(fs);

fs.readFileAsync('./codeforamerica.txt', 'utf-8').then(cfa.turnIntoJSON).then(function(val) {
  return fs.writeFileAsync('./codeforamerica.json', JSON.stringify(val, null, 2));
}).catch(function(error) {
  console.log(error);
});
