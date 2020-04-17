function toyShop(tripPrice, puzzlesCount, dollsCount, bearsCount, minionsCount, trucksCount) {
    let trip = Number(tripPrice)
    let puzzles = Number(puzzlesCount);
    let dolls = Number(dollsCount);
    let bears = Number(bearsCount);
    let minions = Number(minionsCount);
    let trucks = Number(trucksCount);
    let toysCount = puzzles + dolls + bears + minions + trucks;
    let toysPrice = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);

    if (toysCount >= 50) {
        toysPrice = toysPrice - (toysPrice * 0.25);
    }

    toysPrice = toysPrice - (toysPrice * 0.10);

    if (toysPrice >= trip) {
        let moneyLeft = toysPrice - trip;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = trip - toysPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);