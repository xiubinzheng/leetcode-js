function countWays(matrix) {
    let count = 0;

    function helper(matrix, i, j) {
        if (i === matrix.length - 1 && j === matrix[0].length - 1) {
            return 1;
        } else
            return helper(matrix, i + 1, j + 1) + helper(matrix, i, j + 1) + helper(matrix, i - 1, j + 1);

    }

    count = helper(matrix, matrix.length - 1, 0);
    return count;
}


let matrix = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];


console.log(countWays(matrix));