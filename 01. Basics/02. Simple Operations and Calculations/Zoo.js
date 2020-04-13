function zoo(dogFoodPrice, regularFoodPrize) {
    let totalPrize = (dogFoodPrice * 2.50) + (regularFoodPrize * 4);
    console.log(`${totalPrize.toFixed(2)} lv.`);
}

zoo(5, 4);