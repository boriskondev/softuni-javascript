function solve(arr) {
    let newArr = [];
    for (num of arr) {
        num >= 0 ? newArr.push(num) : newArr.unshift(num);
    }
    newArr.forEach(x => console.log(x))
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])