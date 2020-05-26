function solve(arr) {
    let rotations = Number(arr.pop());
    let travel;
    let i = 1;
    while (i <= rotations) {
        travel = arr.pop();
        arr.unshift(travel);
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