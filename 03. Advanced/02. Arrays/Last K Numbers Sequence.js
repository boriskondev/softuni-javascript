function solve(elements, step) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let newArr = [1];
    let nextNum;
    for (let i = 1; i < elements; i++) {
        if (newArr.length <= step) {
            nextNum = newArr.reduce(reducer);
        } else {
            arrToSum = newArr.slice(i-step, i+1);
            nextNum = arrToSum.reduce(reducer);
        }
        newArr.push(nextNum);
    }
    console.log(newArr.join(" "))
}

solve(6, 3);
solve(8, 2)