function alcoholMarket(whiskeyPrice, beer, wine, brandy, whiskey) {
    let brandyPrice = whiskeyPrice / 2;
    let winePrice = brandyPrice - (0.4 * brandyPrice);
    let beerPrice = brandyPrice - (0.8 * brandyPrice);
    let totalBrandy = brandy * brandyPrice;
    let totalWine = wine * winePrice;
    let totalBeer = beer * beerPrice;
    let totalWhiskey = whiskey * whiskeyPrice;
    let total = totalBeer + totalWine + totalBrandy + totalWhiskey;
    console.log(total.toFixed(2));
}

alcoholMarket(50, 10, 3.5, 6.5, 1);
alcoholMarket(63.44, 3.57, 6.35, 8.15, 2.5);