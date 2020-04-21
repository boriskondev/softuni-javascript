function lettersSum(product, number, price) {
    let controlNmber = Number(number);
    let productPrice = Number(price);
    let budget = 0;
    let index = 0;
    let points = 0;
    for (index; index <= product.length - 1; index++) {
        char = product[index];
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "y") {
            points += 3;
        } else {
            points += 1;
        }
    } 
    budget = points * controlNmber;
    if (budget <= productPrice) {
        let left = productPrice - budget
        console.log(`${product} bought. Money left: ${left.toFixed(2)}`);
    } else {
        console.log(`Cannot buy ${product}. Product value: ${budget.toFixed(2)}`);
    }

}

lettersSum("apple", 2, 20);
lettersSum("milk", 1.4, 8);