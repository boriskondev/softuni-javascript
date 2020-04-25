function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let roomVolume = width * length * height;
    let transportedVolume = 0;
    let command = input.shift();
    while (command != "Done") {
        transportedVolume += Number(command);
        if (transportedVolume < roomVolume) {
            command = input.shift();
        } else {
            console.log(`No more free space! You need ${transportedVolume - roomVolume} Cubic meters more.`);
            break;
        }
    }
    if (command == "Done") {
        console.log(`${roomVolume - transportedVolume} Cubic meters left.`);
    }
}

moving([10, 10, 2, 20, 20, 20, 20, 122]);
moving([10, 1, 2, 4, 6, "Done"]);