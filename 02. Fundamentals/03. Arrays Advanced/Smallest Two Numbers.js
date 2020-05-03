function smallestOfTwo(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let result = sortedArr.slice(0, 2)
    console.log(result.join(" "));
}

smallestOfTwo([30, 15, 50, 5]);
smallestOfTwo([3, 0, 10, 4, 7, 3]);