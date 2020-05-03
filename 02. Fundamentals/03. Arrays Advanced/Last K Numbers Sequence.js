function lastKNumbers(n, k) {
    let arr = [1];
    let nextNum;
    for (let i = 1; i < n; i++) {
        nextNum = arr.slice(Math.max(0, i - k), i);
        nextNum = nextNum.reduce((a, b) => a + b, 0);
        arr.push(nextNum);
    }
    console.log(arr.join(" "))
}

lastKNumbers(6, 3);