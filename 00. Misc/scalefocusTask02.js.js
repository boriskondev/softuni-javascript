function findLowestPrice(products, discounts) {
    let calculatedPrices = [];

    for (let p = 0; p < products.length; p++) {
        let initialPrice = Number(products[p][0]);
        let firstDiscount = products[p][1];
        let secondDiscount = products[p][2];

        let currentDiscounts = [firstDiscount, secondDiscount];

        let prices = []

        for (discount of currentDiscounts) {
            let priceNow = initialPrice;
            if (discount !== "EMPTY") {
                let discountParameters = discounts.find(d => d[0] === discount);
                let discountType = discountParameters[1];
                let discountAmount = Number(discountParameters[2]);

                if (discountType === "1") {
                    priceNow = Math.round(priceNow - (priceNow * (discountAmount / 100)));
                } else if (discountType === "2") {
                    priceNow -= discountAmount
                }
            }
            prices.push(priceNow);
        }
        prices = prices.sort((a, b) => a - b);
        calculatedPrices.push(prices[0]);
    }

    return  calculatedPrices.reduce((a, b) => a + b, 0);
}

let products = [["10", "d0", "d1"], ["15", "EMPTY", "EMPTY"], ["20", "d1", "EMPTY"]];
let discount = [["d0", "1", "27"], ["d1", "2", "5"]];

console.log(findLowestPrice(products, discount))