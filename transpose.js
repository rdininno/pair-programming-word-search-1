const transpose = function (matrix) {
  let result = [];
  //matrix[0].length is amount of rows
  for (let i = 0; i < matrix[0].length; i++) {
    let array = [];
    //matrix.length is amount of columns
      for (let j = 0; j < matrix.length; j++) {
        array.push(matrix[j][i]);
      }
    result.push(array);
  }
  return result;
};

module.exports = transpose;