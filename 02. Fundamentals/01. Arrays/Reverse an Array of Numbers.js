function reverseArray(num, arr) {
    let newArr = arr.slice(0, num);
    console.log(newArr.reverse().join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]);