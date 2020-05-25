function solve(arr) {
    let newArr = []
    for (x in arr) {
        if (x % 2 != 0) {
            newArr.push(arr[x] * 2);
        }
    }
    console.log(newArr.reverse().join(" "));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3])