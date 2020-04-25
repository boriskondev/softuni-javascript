function vowelsSum(text) {
    let index = 0;
    let sum = 0;
    for (index; index <= text.length - 1; index++) {
        char = text[index];
        if (char == "a") {
            sum += 1;
        } else if (char == "e") {
            sum += 2;
        } else if (char == "i") {
            sum += 3;
        } else if (char == "o") {
            sum += 4;
        } else if (char == "u") {
            sum += 5;
        }
    }

    console.log(sum);
}

vowelsSum("hello");