function volleyball(year, h, w) {
    let holidays = Number(h);
    let weekends = Number(w);
    let games = (((48 - weekends) * 3 / 4) + weekends) + (holidays * (2 / 3));
    if (year == "leap") {
        games += games * 0.15
    }
    console.log(Math.floor(games));
}

volleyball("leap", 5, 2);
volleyball("normal", 3, 2);
volleyball("leap", 2, 3);
volleyball("normal", 11, 6);
volleyball("leap", 0, 1);
volleyball("normal", 6, 12);