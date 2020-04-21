function invalidNumber(input) {
    let number = Number(input);
    if (number != 0 && number < 100 || number > 200) {
        console.log("invalid");
    }
}

invalidNumber(75);
invalidNumber(-1);
invalidNumber(150);
invalidNumber(100);
invalidNumber(220);
invalidNumber(200)