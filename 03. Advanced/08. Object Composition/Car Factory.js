function carFactory(obj) {
    let outputObj = {};

    Object.assign(outputObj, {model: obj.model});

    let engine = {};

    if (obj.power <= 90) {
        engine = { power: 90, volume: 1800 };
    } else if (obj.power > 90 && obj.power <= 120) {
        engine = { power: 120, volume: 2400 };
    } else if (obj.power > 120 && obj.power <= 200) {
        engine = { power: 200, volume: 3500 };
    }

    Object.assign(outputObj, {engine: engine});

    Object.assign(outputObj, {carriage: {type: obj.carriage, color: obj.color}});

    let wheelsSize = new Array(4);

    if (obj.wheelsize % 2 === 0) {
        wheelsSize.fill(obj.wheelsize - 1);
    } else {
        wheelsSize.fill(obj.wheelsize);
    }

    Object.assign(outputObj, {wheels: wheelsSize});

    return outputObj;
}

carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
)

carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
)