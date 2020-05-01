function orders(order, quanitty) {
    let price = 0;
    switch (order) {
        case "coffee":
            price = 1.50;
            break;
        case "water":
            price = 1.00;
            break;
        case "coke":
            price = 1.40;
            break;
        case "snacks":
            price = 2.00;
            break;
    }
    let result = price * quanitty;
    return result.toFixed(2);
}

console.log(orders("water", 5));