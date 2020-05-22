function fruit(fruitType, weight, price) {
    let weightInKilos = weight / 1000;
    let totalPrice = weightInKilos * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);