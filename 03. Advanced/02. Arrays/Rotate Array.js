function solve(arr) {
    let rotations = Number(arr.pop() % arr.length);
    let i = 1;
    while (i <= rotations) {
        arr.unshift(arr.pop());
        i++
    }
    console.log(arr.join(" "))
}

solve(['1', 
'2', 
'3', 
'4', 
'2']
)

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
)