function specialSum(st, en, divide) {
    let start = Number(st);
    let end = Number(en);
    let divider = Number(divide);
    let sum = 0;

    for (start; start <= end; start++) {
        if (start % divider == 0) {
            sum += start;
        }
    }
    console.log(sum);
}

specialSum(10, 30, 7);
specialSum(61, 125, 25);