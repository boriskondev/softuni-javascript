function solve(arr) {
    let towns = [];
    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(" |");
        let townObj = new Object;
        town = town.split("| ")[1];
        latitude = Number(Number(latitude.trim()).toFixed(2));
        longitude = Number(Number(longitude.trim()).toFixed(2));
        townObj["Town"] = town;
        townObj["Latitude"] = latitude;
        townObj["Longitude"] = longitude;
        towns.push(townObj);
    }
    console.log(JSON.stringify(towns))
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)