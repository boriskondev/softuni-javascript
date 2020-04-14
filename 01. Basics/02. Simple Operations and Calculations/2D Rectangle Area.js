function rectangleArea(x1, y1, x2, y2) {
    let area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
    let circumference = 2 * (Math.abs(x1 - x2)) + 2 * (Math.abs(y1 - y2));
    console.log(area.toFixed(2))
    console.log(circumference.toFixed(2))
}

rectangleArea(60, 20, 10, 50)
rectangleArea(30, 40, 70, -10)
rectangleArea(600.25, 500.75, 100.50, -200.50)