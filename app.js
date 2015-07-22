// node file to read/write txt into new json file
var fs = require('fs');
var cfa = require('./codeforamerica.js');
var tab = '\t';
var newLine = '\n';
var comma = ',';
var cfaInfo;

fs.readFile('./codeforamerica.txt', 'utf-8', function(error, data) {
  if(error) {
    console.log(error);
  } else {
    cfaInfo = cfa.turnIntoJSON(data, newLine);
    console.log(cfaInfo);
  }
});

// var writeFile = fs.writeFile('./codeforamerica.json', 'utf-8', function(error) {
//   if(error) {
//     console.log(error);
//   }
// });
