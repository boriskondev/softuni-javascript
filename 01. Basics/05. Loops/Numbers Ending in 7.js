function numbersEnding7() {
    let counter = 1;
    for (counter; counter <= 1000; counter++) {
        if (counter % 10 == 7) {
            console.log(counter);
        }
    }
}

numbersEnding7()