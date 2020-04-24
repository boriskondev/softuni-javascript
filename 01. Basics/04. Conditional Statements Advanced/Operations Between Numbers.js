function operationsBetweenNumbers(number1, number2, operator) {
    let n1 = Number(number1);
    let n2 = Number(number2);
    let evenOrOdd = "";
    let result = 0;

    switch (operator) {
        case "+":
            result = n1 + n2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else{
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
            break;
        case "-":
            result = n1 - n2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else{
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
            break;
        case "*":
            result = n1 * n2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else{
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
            break;
        case "/":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${(n1 / n2).toFixed(2)}`);
            }
            break;
        case "%":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${(n1 % n2)}`);
            }
            break;
        default:
            break;
    }
}

operationsBetweenNumbers(10, 12, "+");
operationsBetweenNumbers(10, 1, "-");
operationsBetweenNumbers(123, 12, "/");
operationsBetweenNumbers(10, 3, "%");
operationsBetweenNumbers(112, 0, "/");
operationsBetweenNumbers(10, 0, "%");
