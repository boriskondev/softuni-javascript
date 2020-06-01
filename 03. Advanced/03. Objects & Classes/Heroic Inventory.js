function solve(arr) {
    let inventory = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(" / ");
        level = Number(level);
        items = items ? items.trim().split(", ") : [];
        inventory.push({name: name, level: level, items: items})
    }
    console.log(JSON.stringify(inventory));
}


solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

solve(['Jake / 1000 / Gauss, HolidayGrenade'])

solve(["Boris / 500"])