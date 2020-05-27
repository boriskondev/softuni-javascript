function solve(arr) {
    let newArr = [];
    newArr.push(arr.shift());
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= newArr[newArr.length - 1]) {
            newArr.push(arr[i]);
        }
    }
    newArr.forEach(x => console.log(x));
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )
