function solve(arr) {
    const catalogueObj = {};
    for (let i = 0; i < arr.length; i++) {
        let [product, price] = arr[i].split(" : ");
        let letter = product[0]
        if (catalogueObj.hasOwnProperty(letter) == false) {
            catalogueObj[letter] = {};
        } 

        catalogueObj[letter][product] = Number(price);
    }
  
    for (letter of Object.keys(catalogueObj).sort((a, b) => a.localeCompare(b))) {
        console.log(letter);
        for (product of Object.keys(catalogueObj[letter]).sort((a, b) => a.localeCompare(b))) {
            console.log(`  ${product}: ${catalogueObj[letter][product]}`)
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)