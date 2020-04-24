function journey(b, season) {
    let budget = Number(b);
    let location = "";
    let accommodation = "";
    let price = 0;

    if (season == "summer") {
        accommodation = "Camp";
    } else if (season == "winter") {
        accommodation = "Hotel";
    }

    if (budget <= 100) {
        location = "Bulgaria";
        if (season == "summer") {
            price = budget * 0.3;
        } else if (season == "winter") {
            price = budget * 0.7;
        }
    } else if (budget > 100 && budget <= 1000) {
        location = "Balkans";
        if (season == "summer") {
            price = budget * 0.4;
        } else if (season == "winter") {
            price = budget * 0.8;
        }
    } else if (budget > 1000) {
        location = "Europe";
        accommodation = "Hotel";
        price = budget * 0.9;
    }

    console.log(`Somewhere in ${location}`);
    console.log(`${accommodation} - ${price.toFixed(2)}`);
}

journey(50, "summer");
journey(75, "winter");
journey(312, "summer");
journey(678.53, "winter");
journey(1500, "summer");