function addAndSubtract(numOne, numTwo, numThree) {
    function sum(x , y) {
        return x + y;
    }
    function subtract(x, y) {
        return x - y;
    }

    let sumResult = sum(numOne, numTwo);
    let subtractResult = subtract(sumResult, numThree);

    return subtractResult;
}

console.log(addAndSubtract(23, 6, 10));