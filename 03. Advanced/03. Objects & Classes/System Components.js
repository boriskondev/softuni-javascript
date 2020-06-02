function solve(input) {
    let catalogue = {};
    for (let info of input) {
        let [system, component, subcomponent] = info.split(" | ");
        if (!catalogue.hasOwnProperty(system)) {
            catalogue[system] = {};
        }

        if (!catalogue[system].hasOwnProperty(component)) {
            catalogue[system][component] = [];
        }

        catalogue[system][component].push(subcomponent);
    }
    
    for (let system of Object.keys(catalogue).sort((a, b) =>
    {return Object.keys(catalogue[b]).length - Object.keys(catalogue[a]).length || a.localeCompare(b)})) {
    console.log(system);
    for (let component of Object.keys(catalogue[system]).sort((a, b) =>
        catalogue[system][b].length - catalogue[system][a].length)) {
        console.log(`|||${component}`);
        for (let subComponent of catalogue[system][component]) {
            console.log(`||||||${subComponent}`);
        }
    }
}
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)