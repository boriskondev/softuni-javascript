function convertToObject(json) {
    let object = JSON.parse(json);
    for (let key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');