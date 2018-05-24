function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      let temp = matrix[i];
      matrix[j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(JSON.stringify(matrix));
  console.log(" ");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
  console.log(JSON.stringify(matrix));
}

let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

rotate(matrix1);
/*
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/

let actual = [[3, 2, 1], [6, 5, 4], [9, 8, 7]];
