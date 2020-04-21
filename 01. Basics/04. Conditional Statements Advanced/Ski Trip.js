function skiStrip(stay, room, rating) {
    let days = Number(stay) - 1;
    let price = 0;
    if (room == "room for one person") {
        price = days * 18;
    } else if (room == "apartment") {
        price = days * 25;
        if (days < 10) {
            price = price - (price * 0.3);
        } else if (days >= 10 && days <= 15) {
            price = price - (price * 0.35);
        } else if (days > 15) {
            price = price - (price * 0.5);
        }
    } else if (room == "president apartment") {
        price = days * 35;
        if (days < 10) {
            price = price - (price * 0.1);
        } else if (days >= 10 && days <= 15) {
            price = price - (price * 0.15);
        } else if (days > 15) {
            price = price - (price * 0.2);
        }
    }

    if (rating == "positive") {
        price *= 1.25;
    } else if (rating == "negative") {
        price = price - (price * 0.1);
    }

    console.log(price.toFixed(2));
}

skiStrip(14, "apartment", "positive");
skiStrip(30, "president apartment", "negative");
skiStrip(12, "room for one person", "positive");
skiStrip(2, "apartment", "positive");