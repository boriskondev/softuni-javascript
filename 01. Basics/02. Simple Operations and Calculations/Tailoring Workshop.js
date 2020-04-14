function tailoringWorkshop(tablesCount, tablesLength, tablesWidth) {
    let tables = Number(tablesCount);
    let length = Number(tablesLength);
    let width = Number(tablesWidth);
    let covers = tables * (length + 2 * 0.30) * (width + 2 * 0.30);
    let square_covers = tables * (length / 2) * (length / 2);
    let price_dollars = covers * 7 + square_covers * 9;
    let price_leva = price_dollars * 1.85;
    console.log(`${price_dollars.toFixed(2)} USD`);
    console.log(`${price_leva.toFixed(2)} BGN`);
}

tailoringWorkshop(5, 1, 0.5);
tailoringWorkshop(10, 1.2, 0.65);