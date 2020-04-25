function numberOnThirdPower(n) {
    let num = Number(n);
    let type = "odd"
    let counter = 1;
    if (num % 2 == 0) {
        type = "even"
    }

    for (counter; counter <= num; counter++) {
        if (counter % 2 == 0 && type == "even" || counter % 2 != 0 && type == "odd") {
            console.log(`Current number: ${counter}. Cube: ${Math.pow(counter, 3)}`);
        }
    }
}

numberOnThirdPower(5);
numberOnThirdPower(6);