function oneToN(n) {
    num = Number(n);
    for (let current = 1; current <= num; current += 3) {
        console.log(current);
    }
}

oneToN(10);
oneToN(7);
oneToN(15);