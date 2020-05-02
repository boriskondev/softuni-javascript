function test(firstNum, secondNum, ...input) {
    // ... behaves like *args in Python
    console.log(firstNum);
    console.log(secondNum);
    console.log(input);
}

test(10, 20, 30, 40, 50);