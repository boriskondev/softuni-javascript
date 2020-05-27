function solve(matrix) {
    let sumsSet = new Set;
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        sumsSet.add(matrix[row].reduce((x, y) => x + y));
        for (let col = 0; col < matrix.length; col++) {
            sum += matrix[col][row];
        }
        sumsSet.add(sum);
        sum = 0;
    }
    console.log(sumsSet.size == 1 ? "true" : "false")
}

solve([[4, 5, 6], [6, 5, 4],[5, 5, 5]]);
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )