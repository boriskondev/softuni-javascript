function solve(matrix) {
    let biggebiggestNum = -100000;
    for (arr of matrix) {
        let currentBiggest = arr.sort((a, b) => a - b)[arr.length-1];
        if (currentBiggest > biggebiggestNum) {
            biggebiggestNum = currentBiggest;
        }
    }
    console.log(biggebiggestNum);
}

solve([[20, 50, 10], [8, 33, 145]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);