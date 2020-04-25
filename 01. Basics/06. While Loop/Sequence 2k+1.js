function sequence(num) {
    let number = Number(num);
    let current = 1;
    while (current <= number) {
        console.log(current);
        current = (current * 2) + 1;
    }
}

sequence(31);