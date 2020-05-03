function arrayManipulations(input) {
    let command;
    let number;
    let arr = input.shift().split(" ").map(Number);
    for (packedCommands of input) {
        command = packedCommands.split(" ")[0]
        switch (command) {
            case "Add":
                number = Number(packedCommands.split(" ")[1])
                arr.push(number);
                break;
            case "Remove":
                number = Number(packedCommands.split(" ")[1]);
                arr = arr.filter(x => x != number);
                break;
            case "RemoveAt":
                index = Number(packedCommands.split(" ")[1]);
                arr.splice(index, 1)
                break;
            case "Insert":
                number = Number(packedCommands.split(" ")[1]);
                index = Number(packedCommands.split(" ")[2]);
                arr.splice(index, 0, number)
                break;
        }
    }
    console.log(arr.join(" "));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);

