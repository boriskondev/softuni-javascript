function solve(arr) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 0) {
            newArr.push(Number(arr[index]));
        }
    }
    console.log(newArr.join(" "))
}

solve(['20', '31', '40'])