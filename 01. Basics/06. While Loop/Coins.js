function coins(c) {
    let coinsCount = 0;
    let change = parseInt(Number(c) * 100);
    while (change > 0) {
        if (change >= 200) {
            coinsCount += 1;
            change -= 200;
        } else if (change >= 100) {
            coinsCount += 1;
            change -= 100;
        } else if (change >= 50) {
            coinsCount += 1;
            change -= 50;
        } else if (change >= 20) {
            coinsCount += 1;
            change -= 20;
        } else if (change >= 10) {
            coinsCount += 1;
            change -= 10;
        } else if (change >= 5) {
            coinsCount += 1;
            change -= 5;
        } else if (change >= 2) {
            coinsCount += 1;
            change -= 2;
        } else if (change >= 1) {
            coinsCount += 1;
            change -= 1;
        }
    }
    console.log(coinsCount);
}

coins(2.73);