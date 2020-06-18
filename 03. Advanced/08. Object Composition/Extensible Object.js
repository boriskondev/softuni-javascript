function solve() {
    let prototype = {};
    let instance = Object.create(prototype);

    instance.extend = function (template) {
        for (let property in template) {
            if (typeof template[property] === "function") {
                prototype[property] = template[property];
            } else {
                instance[property] = template[property];
            }
        }
    }
    return instance
}

let result = solve({
    extensionMethod: function () {/*Haha*/},
    extensionProperty: 'someString'
}
)

console.log(result)