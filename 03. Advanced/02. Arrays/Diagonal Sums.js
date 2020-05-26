function solve(matrix) {
    let leftDiag = 0;
    let rightDiag = matrix[0].length - 1;
    let leftSum = 0;
    let rightSum = 0;
    for (arr of matrix) {
        leftSum += arr[leftDiag++];
        rightSum += arr[rightDiag--];
        }
    console.log(`${leftSum} ${rightSum}`);
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);