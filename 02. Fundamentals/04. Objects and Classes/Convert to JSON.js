function convertToJSON(name, lastName, hairColor) {
    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    };
    let string = JSON.stringify(object);
    console.log(string)
}

convertToJSON('George', 'Jones', 'Brown');