function sumOfNumbers(n, m) {
    let firstNumber = Number(n);
    let secondNumber = Number(m);
    let sum = 0;
    for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
        sum += firstNumber;
    }
    console.log(sum);
}

sumOfNumbers("1", "5");