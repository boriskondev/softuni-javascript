function solve(arr) {
    let juicesObj = {};
    let bottlesObj = {}
    for (let i = 0; i < arr.length; i++) {
        let [juice, quantity] = arr[i].split(" => ");
        if (Object.keys(juicesObj).includes(juice)) {
            juicesObj[juice] += Number(quantity);
        } else {
            juicesObj[juice] = Number(quantity);
        }

        let currentJuice = juicesObj[juice];
        if (currentJuice >= 1000) {
            let bottles = Math.floor(currentJuice / 1000);
            let quantityLeft = currentJuice % 1000;
            !bottlesObj.hasOwnProperty(juice) ? bottlesObj[juice] = 0 : 'pass';
            bottlesObj[juice] += bottles;
            juicesObj[juice] = quantityLeft;

        }
    }
    for (let [key, value] of Object.entries(bottlesObj)) {
        if (value > 0) {
            console.log(`${key} => ${value}`);
        }
    } 
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);