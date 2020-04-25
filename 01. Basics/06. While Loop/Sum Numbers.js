function sumNumbers(input) {
    let sum = 0;
    let currentNum = input.shift();
    while (currentNum != "Stop") {
        sum += Number(currentNum);
        currentNum = input.shift();
    }
    console.log(sum);
}

sumNumbers(["10", "20", "30", "45", "Stop"]);