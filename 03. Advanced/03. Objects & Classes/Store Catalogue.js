function solve(arr) {
    let pricesObj = {};
    for (let i = 0; i < arr.length; i++) {
        let [product, price] = arr[i].split(" : ");
        pricesObj.hasOwnProperty(product) ? "pass" : pricesObj[product] = Number(price);
    }
    let letters = new Set(Object.keys(pricesObj).map(word => word[0]));
    let uniqueLetters = [];
    letters.forEach(elem => !uniqueLetters.includes(elem) ? uniqueLetters.push(elem) : "pass");
    uniqueLetters.sort((a, b) => a.localeCompare(b))

    const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})

    for (letter of uniqueLetters) {
        console.log(letter)
        for (let [key, value] of Object.entries(sortObject(pricesObj))) {
            if (key[0] == letter) {
                console.log(`  ${key}: ${value}`)
            }
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