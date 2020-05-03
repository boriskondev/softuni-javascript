function equalArrays(f, s) {
    let firstArr = f.map(Number);
    let secondArr = s.map(Number);
    let identical = true;
    for (let i = 0; i <= firstArr.length; i++) {
        if (firstArr[i] != secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            identical = false;
            break;
        }
    }
    if (identical) {
        let sum = 0;
        for (num of firstArr) {
            sum += num;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);