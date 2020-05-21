function mathOperations(firstNum, secondNum, operator) {
    let result;
    switch (operator) {

        case "+":
        result = firstNum + secondNum;
        break;

        case "-":
        result = firstNum - secondNum;
        break;

        case "*":
        result = firstNum * secondNum;
        break;

        case "/":
        result = firstNum / secondNum;
        break;

        case "%":
        result = firstNum % secondNum;
        break;

        case "**":
        result = firstNum ** secondNum;
        break;

    }
    console.log(result);
}

mathOperations(5, 6, "+");
mathOperations(10, 6, "-");