function aggregateElements(arr) {
    let sum = 0;
    let inversedSum = 0;
    let contatenatedArr = arr.join("");
    let stop = arr.length;
    for (let i = 0; i < stop; i++) {
        let currentNum = Number(arr.shift());
        sum += currentNum;
        inversedSum += 1/currentNum;
    }
    console.log(sum);
    console.log(inversedSum);
    console.log(contatenatedArr);
}

aggregateElements([1, 2, 3]);