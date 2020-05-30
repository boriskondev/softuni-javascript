function solve(arr) {
    let townObj = {};
    for (let i = 0; i < arr.length; i++) {
        let [town, population] = arr[i].split(" <-> ");
        population = Number(population);
        if (Object.keys(townObj).includes(town)) {
            townObj[town] += population;
        } else {
            townObj[town] = population;
        }
    }
    Object.keys(townObj).forEach(x => console.log(`${x} : ${townObj[x]}`));
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)