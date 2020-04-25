function sumOfSeries(n) {
    let end = Number(n);
    let counter = 1;
    let sum = 0;
    for (counter; counter <= end; counter++) {
        sum += counter * counter;
    }
    console.log(sum);
}

sumOfSeries(7);
sumOfSeries(4);