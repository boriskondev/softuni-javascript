function solve(arr) {
    let keyValuePair;
    let key;
    let value;
    let keyValuePairsArr = [];
    let newArr = []
    for (let i = 0; i <= arr.length; i+=2) {
        keyValuePair = arr.slice(i, i+2);
        [key, value] = keyValuePair;
        value = Number(value);
        if (keyValuePair.length > 0) {
            keyValuePairsArr.push(key);
            keyValuePairsArr.push(value)
            newArr.push(keyValuePairsArr)
            keyValuePairsArr = []
        }
    }
    let arrToMap = new Map(newArr);
    let mapToObj = Object.fromEntries(arrToMap);
    console.log(mapToObj)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])