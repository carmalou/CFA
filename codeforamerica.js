exports.turnIntoJSON = function turnIntoJSON(data) {
  var temp;
  var tempArr = [];

console.log(typeof data);

  data = data.split('\n');

  // console.log(data[data.length - 1]);

  if(data[data.length - 1] == '') {
    data.pop();
  }

  for(i = 0; i < data.length; i++) {
    data[i] = data[i].split('\t');
  }

  for(i = 1; i < data.length; i++) {
    temp = {};

    for(j = 0; j < data[i].length; j++) {
      temp[data[0][j]] = data[i][j];
    }
    // console.log(temp);
    tempArr.push(temp);
  }

  // console.log(tempArr);
  return tempArr;
};
