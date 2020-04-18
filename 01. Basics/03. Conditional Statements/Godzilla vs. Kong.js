function movie(budget, actors, price) {
    let movieBudget = Number(budget);
    let actorsCount = Number(actors);
    let clothesPrice = Number(price);
    let totalCosts = 0;

    totalCosts += 0.1 * movieBudget;

    if (actorsCount > 150) {
        clothesPrice = clothesPrice - (clothesPrice * 0.1);
    }

    totalCosts += clothesPrice * actorsCount;

    if (totalCosts > movieBudget) {
        let needed = totalCosts - movieBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`);
    } else {
        let left = movieBudget - totalCosts;
        console.log("Action!");
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
    }
}

movie(20000, 120, 55.5)
movie(15437.62, 186, 57.99)
movie(9587.88, 222, 55.68)