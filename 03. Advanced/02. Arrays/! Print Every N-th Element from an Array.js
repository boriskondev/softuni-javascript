function solve(arr) {
    let newArr = [];
    let step = Number(arr.pop());
    newArr.push(arr.shift());
    if (arr.length > step) {
        for (i = 1; i < arr.length; i+=step) {
            newArr.push(arr[i])
        }
    }
    newArr.forEach(x => console.log(x));
}

solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)

solve(['dsa',
'asd', 
'test', 
'tset', 
'2']
)

solve(['1', 
'2',
'3', 
'4', 
'5', 
'6']
)