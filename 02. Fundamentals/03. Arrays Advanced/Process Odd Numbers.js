function processOddNumbers(arr) {
    let newArr = []
    for (index in arr) {
        if (index % 2 != 0) {
            newArr.push(arr[index] * 2);
        }
    }
    console.log(newArr.reverse().join(" "))
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);