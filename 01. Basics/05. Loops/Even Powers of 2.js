function evenPowersOf2(num) {
    let end = Number(num)
    let current_power = 0;
    for (current_power; current_power <= end; current_power++) {
        if (current_power % 2 == 0) {
            console.log(2 ** current_power);
        }
    }
}

evenPowersOf2(3);
evenPowersOf2(4);
evenPowersOf2(6);
evenPowersOf2(7);