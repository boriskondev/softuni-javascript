function condenseArray(input) {
    let numbers = input;
    let condensed = [];

    while (numbers.length > 1) {
        for (let i = 0; i < numbers.length - 1; i += 1) {
            condensed.push(numbers[i] + numbers[i + 1]);
        }
        numbers = condensed;
        condensed = [];
    }
    console.log(numbers[0]);
}

condenseArray([2, 10, 3]);