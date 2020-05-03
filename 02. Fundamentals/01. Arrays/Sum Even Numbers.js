function sumEven(arr) {
    let sum = 0;
    let filteredArr = arr.map(Number).filter(x => x % 2 == 0);
    for (num of filteredArr) {
        sum += num
    }
    console.log(sum);
}

sumEven(['1','2','3','4','5','6']);