function numberInRange(num) {
    let number = Number(num);
    if (number >= -100 && number <= 100) {
        if (number != 0) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    } else {
        console.log("No");
    }
}

numberInRange(-25)
numberInRange(0)
numberInRange(25)