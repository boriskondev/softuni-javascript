function convertor(radians) {
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}

convertor(3.1416);
convertor(6.2832);
convertor(0.7854);
convertor(0.5236);