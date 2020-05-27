function solve(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    arr.forEach(x => console.log(x));
}

solve(['test', 
'Deny', 
'omen', 
'Default',]
)