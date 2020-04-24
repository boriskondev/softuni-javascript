function fishingBoat(b, season, f) {
    let budget = Number(b);
    let fishermen = Number(f);
    let price = 0;

    if (season == "Spring") {
        price = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        price = 4200;
    } else if (season == "Winter") {
        price = 2600;
    }

    if (fishermen <= 6) {
        price *= 0.9;
    } else if (fishermen > 6 && fishermen <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if (fishermen % 2 == 0 && season != "Autumn") {
        price *= 0.95;
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}

fishingBoat("3000", "Summer", 11);
fishingBoat("3600", "Autumn", 6);
fishingBoat("2000", "Winter", 13);