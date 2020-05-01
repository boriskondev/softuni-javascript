function simpleCalculator(numOne, numTwo, operator) {
    let result = 0;
    switch (operator) {
        case "multiply":
            const multiply = (x, y) => x * y;
            result = multiply(numOne, numTwo);
            break;
        case "divide":
            const divide = (x, y) => x / y;
            result = divide(numOne, numTwo);
            break;
        case "add":
            const add = (x, y) => x + y;
            result = add(numOne, numTwo);
            break;
        case "subtract":
            const subtract = (x, y) => x - y;
            result = subtract(numOne, numTwo);
            break;
    }
    return result
}

console.log(simpleCalculator(5, 5, "multiply"));
console.log(simpleCalculator(40, 8, "divide"));