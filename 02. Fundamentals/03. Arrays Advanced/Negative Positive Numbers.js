function negativePositive(arr) {
    let newArr = [];
    for (const el of arr) {
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }
    for (const el of newArr) {
        console.log(el);
    }
}

negativePositive([7, -2, 8, 9]);