function minNumber(input) {
    let range = Number(input.shift());
    let currentNumber = Number(input.shift());
    let i = 0;
    let min = Number.MAX_SAFE_INTEGER;
    while (i <= range) {
        if (currentNumber < min) {
            min = currentNumber;
        }
        i += 1;
        currentNumber = Number(input.shift());
    }
    console.log(min);
}

minNumber([3, -10, 20, -30]);