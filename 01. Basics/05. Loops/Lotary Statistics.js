function lottery(n) {
    let end = Number(n);
    let counter = 1;
    let oddsOneDigit = 0;
    let evens = 0;
    let oddsDivisible7 = 0;
    let divisible100 = 0;
    for (counter; counter <= end; counter++) {
        if (counter < 10 && counter % 2 != 0) {
            oddsOneDigit += 1;
        } 
        if (counter % 2 == 0) {
            evens += 1;
        }
        if (counter % 2 != 0 && counter % 10 == 7) {
            oddsDivisible7 += 1;
        }
        if (100 % counter == 0) {
            divisible100 += 1;
        }
    }

    console.log(`${(oddsOneDigit / end * 100).toFixed(2)}%`);
    console.log(`${(evens / end * 100).toFixed(2)}%`);
    console.log(`${(oddsDivisible7 / end * 100).toFixed(2)}%`);
    console.log(`${(divisible100 / end * 100).toFixed(2)}%`);
}

lottery(49);
