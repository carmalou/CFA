// node file to read/write txt into new json file
var fs = require('fs');
var space = ' ';

var cfaInfo = fs.readFileSync('/codeforamerica.txt', function(error, data) {
  if(error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

function turnIntoJSON(data, space) {
    var firstSplit = data.split(space);
    return firstSplit;
}

var writeFile = fs.writeFile('./codeforamerica.json', firstSplit, function(error) {
  if(error) {
    console.log(error);
  }
});

turnIntoJSON(firstSplit, space);
console.log(firstSplit);
