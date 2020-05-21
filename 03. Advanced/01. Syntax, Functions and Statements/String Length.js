function stringLength(firstString, secondString, thirdString) {
    let total = (firstString.length + secondString.length + thirdString.length);
    console.log(total);
    console.log(Math.floor(total / 3));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3')