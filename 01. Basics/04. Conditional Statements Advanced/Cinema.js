function cinema(ticket, r, c) {
    let rows = Number(r);
    let columns = Number(c);
    let price = 0;
    let total = 0;
    if (ticket == "Premiere") {
        price = 12;
    } else if (ticket == "Normal") {
        price = 7.50;
    } else if (ticket == "Discount") {
        price = 5;
    } 
    total = price * (rows * columns);
    console.log(`${total.toFixed(2)} leva`);
}

cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);