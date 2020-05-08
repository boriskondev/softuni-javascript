function city(name, area, population, country, postCode) {
    let cityObject = {
        name: name,
        area: area,
        population: population, 
        country: country,
        postCode: postCode,
    };
    for (let key in cityObject) {
        console.log(`${key} -> ${cityObject[key]}`);
    }
}

city("Sofia"," 492", "1238438", "Bulgaria", "1000");