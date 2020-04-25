function accountBalance(input) {
    let sum = 0;
    let counter = 1;
    let loops = Number(input.shift());
    let currentSum = Number(input.shift());
    while (counter <= loops) {
        if (currentSum >= 0) {
            console.log(`Increase: ${currentSum.toFixed(2)}`);
            sum += currentSum;
        } else {
            console.log("Invalid operation!");
            break;
        }
        counter += 1;
        currentSum = Number(input.shift());
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance([3, 5.51, 69.42, 100]);