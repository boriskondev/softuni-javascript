function smallShop (product, city, count) {
    let productsCount = Number(count);
    let price = 0;
    if (city == "Sofia") {
        if (product == "coffee") {
            price = 0.5;
        } else if (product == "water") {
            price = 0.8;
        } else if (product == "beer") {
            price = 1.2;
        } else if (product == "sweets") {
            price = 1.45;
        } else if (product == "peanuts") {
            price = 1.6;
        }
    } else if (city == "Plovdiv") {
        if (product == "coffee") {
            price = 0.4;
        } else if (product == "water") {
            price = 0.7;
        } else if (product == "beer") {
            price = 1.15;
        } else if (product == "sweets") {
            price = 1.30;
        } else if (product == "peanuts") {
            price = 1.50;
        }
    } else if (city == "Varna") {
        if (product == "coffee") {
            price = 0.45;
        } else if (product == "water") {
            price = 0.7;
        } else if (product == "beer") {
            price = 1.10;
        } else if (product == "sweets") {
            price = 1.35;
        } else if (product == "peanuts") {
            price = 1.55;
        }
    }

    console.log(price * productsCount);
}

smallShop("coffee", "Varna", 2)
smallShop("peanuts", "Plovdiv", 1)
smallShop("beer", "Sofia", 6)
smallShop("water", "Plovdiv", 3)
smallShop("sweets", "Sofia", 2.23)