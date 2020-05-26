function solve(arr) {
    let num = 1;
    let newArr = [];

    arr.forEach(element => {
        element === "add" ? newArr.push(num) : newArr.pop();
        num ++;
    });
    if (newArr.length == 0) {
        console.log("Empty");
    } else {
        newArr.forEach(x => console.log(x));
    }
}

solve(['add', 
'add', 
'add', 
'add']
);
