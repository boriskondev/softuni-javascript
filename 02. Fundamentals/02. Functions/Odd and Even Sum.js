function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;
    let string = num.toString();
    for (let index = 0; index < string.length; index++) {
        current = Number(string[index]);
        if (current % 2 == 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(3495892137259234));