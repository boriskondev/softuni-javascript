function factorialDivision(firstNum, secondNum) {
    let firstResult = 1;
    let secondResult = 1;
    for (firstNum; firstNum > 0; firstNum--) {
        firstResult *= firstNum;
    }
    for (secondNum; secondNum > 0; secondNum--) {
        secondResult *= secondNum;
    }
    console.log(`${(firstResult / secondResult).toFixed(2)}`);
}

factorialDivision(5, 2)