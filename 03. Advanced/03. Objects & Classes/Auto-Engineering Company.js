function solve(arr) {
    let carsObj = {};
    for (info of arr) {
        let [brand, model, quantity] = info.split(" | ");
        quantity = Number(quantity);
        !carsObj.hasOwnProperty(brand) ? carsObj[brand] = {} : "pass";
        !carsObj[brand].hasOwnProperty(model) ? carsObj[brand][model] = quantity : carsObj[brand][model] += quantity;
    }
    for ([brand, model] of Object.entries(carsObj)) {
        console.log(brand);
        for ([model, quantity] of Object.entries(model)) {
            console.log(`###${model} -> ${quantity}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)