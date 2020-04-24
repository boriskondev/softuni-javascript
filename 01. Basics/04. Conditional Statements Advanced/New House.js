function newHouse(flowers, count, bud) {
    let flowers_count = Number(count);
    let budget = Number(bud);
    let price = 0;
    let total = 0;
    if (flowers == "Roses") {
        price = 5;
        if (flowers_count > 80) {
            price = price - (price * 0.1);
        }
    } else if (flowers == "Dahlias") {
        price = 3.80;
        if (flowers_count > 90) {
            price = price - (price * 0.15);
        }
    } else if (flowers == "Tulips") {
        price = 2.80;
        if (flowers_count > 80) {
            price = price - (price * 0.15);
        }
    } else if (flowers == "Narcissus") {
        price = 3;
        if (flowers_count < 120) {
            price = price * 1.15;
        }
    } else if (flowers == "Gladiolus") {
        price = 2.50;
        if (flowers_count < 80) {
            price = price * 1.20;
        }
    }
    total = price * flowers_count;
    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${flowers_count} ${flowers} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}

newHouse("Roses", 55, 200);
newHouse("Tulips", 88, 260);
newHouse("Narcissus", 119, 360);