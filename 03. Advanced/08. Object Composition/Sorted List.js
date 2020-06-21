function solve() {
    let instance = {
        data: [],
        size: 0,
        add,
        remove,
        get
    }

    function add(element) {
        instance.data.push(element);
        instance.data.sort((a, b) => a - b);
        instance.size++;
    }

    function remove(index) {
        if (index >= 0 && index < instance.data.length) {
            instance.data.splice(index, 1);
            instance.data.sort((a, b) => a - b);
            instance.size--;
            return instance
        }
    }

    function get(index) {
        if (index >= 0 && index < instance.data.length) {
            return instance.data[index];
        }
    }

    return instance
}

let list = solve();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

