function wrongResult(numOne, numTwo, numThree) {
    let result = ""
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = "Positive";
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = "Negative";
    } else {
        if (numOne >= 0) {
            if (numTwo < 0 && numThree < 0) {
                result = "Positive";
            } else {
                result = "Negative";
            }
        } else {
            if (numTwo < 0 && numThree < 0) {
                result = "Negative";
            } else {
                result = "Positive";
            }
        }
    }
    return result;
}

console.log(wrongResult(5, 12, -15));
console.log(wrongResult(-6, -12, 14));
console.log(wrongResult(-1, -2, -3));
console.log(wrongResult(-1, 0, 1));