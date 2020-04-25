function maxNumber(input) {
    let range = Number(input.shift());
    let currentNumber = Number(input.shift());
    let i = 0;
    let max = Number.MIN_SAFE_INTEGER;
    while (i <= range) {
        if (currentNumber > max) {
            max = currentNumber;
        }
        i += 1;
        currentNumber = Number(input.shift());
    }
    console.log(max);
}

maxNumber([3, -10, 20, -30]);