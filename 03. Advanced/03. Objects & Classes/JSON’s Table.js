function solve(arr) {
    let table = "<table>"
    for (row of arr) {
        let obj = JSON.parse(row);
        table += "\n\t<tr>"
        for (key of Object.keys(obj)) {
            table += `\n\t\t<td>${obj[key]}</td>`
        }
        table += "\n\t</tr>"
    }
    table += "\n</table>"
    console.log(table)
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)