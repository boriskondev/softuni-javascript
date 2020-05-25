function solve(arr) {
    let obj = {};
    let key;
    let value;
    for (let i = 0; i < arr.length; i+=2) {
        key = arr[i];
        value = arr[i+1];
        obj[key] = Number(value);
    }
    console.log(obj)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])