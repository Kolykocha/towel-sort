
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let i = 0,arr = [];
    if (matrix) {
        let step = matrix.length;
        while (i < step) {
            if (i % 2 === 0) {
                arr = arr.concat(matrix[i]);
            } else {
                matrix[i].sort(function (a, b) {return b-a});
                arr = arr.concat(matrix[i]);
            }
            i++;
        }
        return arr;
    }
    return [];
}
