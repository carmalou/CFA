// node file to read/write txt into new json file
var fs = require('fs');
var stringify = require('node-stringify');
var cfa = require('./codeforamerica.js');
var tab = '\t';
var newLine = '\n';
var comma = ',';
var cfaInfo;

fs.readFile('./codeforamerica.txt', 'utf-8', function(error, data) {
  if(error) {
    console.log(error);
  } else {
    cfaInfo = cfa.turnIntoJSON(data, newLine, comma);
    console.log(cfaInfo);
  }
});

// var writeFile = fs.writeFile('./codeforamerica.json', firstSplit, function(error) {
//   if(error) {
//     console.log(error);
//   }
// });
