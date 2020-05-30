function solve(arr) {
    let townObj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let town = arr[i];
        let income = Number(arr[i + 1]);
        if (Object.keys(townObj).includes(town)) {
            townObj[town] += income;
        } else {
            townObj[town] = income;
        }
    }
    console.log(JSON.stringify(townObj))
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4'])