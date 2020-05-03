function evenAndOddSubtraction(arr) {
    let filteredEvens = arr.filter(x => x % 2 == 0);
    let filteredOdds = arr.filter(x => x % 2 != 0);
    let evensSum = 0;
    let oddsSum = 0;
    for (num of filteredEvens) {
        evensSum += num
    }
    for (num of filteredOdds) {
        oddsSum += num
    }
    console.log(evensSum - oddsSum);
}

evenAndOddSubtraction([1,2,3,4,5,6]);