function featuredProduct(products) {
    let productsObj = {};

    for (let p = 0; p < products.length; p++) {
        if (productsObj.hasOwnProperty(products[p])) {
            productsObj[products[p]]++;
        } else {
            productsObj[products[p]] = 1;
        }
    }

    let productsObjSorted = Object.entries(productsObj).sort((a, b) => b[1] - a[1]);
    let mostEntries = productsObjSorted.reduce((acc, entry) => acc = acc > entry[1] ? acc : entry[1], 0);

    productsObjSorted = productsObjSorted.filter(pair => pair[1] === mostEntries);

    let finalProducts = [];

    productsObjSorted.forEach(list => finalProducts.push(list[0]));

    return finalProducts.sort()[finalProducts.length - 1];
}

let products1 = ["redShirt", "greenPants", "redShirt", "orangeShoes", "blackPants", "blackPants"];
let products2 = ["yellowShirt", "redHat", "blackShirt", "bluePants", "redHat", "pinkHat", "blackShirt", "yellowShirt",
"greenPants", "greenPants"];

console.log(featuredProduct(products1));
console.log(featuredProduct(products2));