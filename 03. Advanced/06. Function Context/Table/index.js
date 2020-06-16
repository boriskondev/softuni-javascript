function solve(){
    document.querySelector("tbody").addEventListener("click", onClick);

    let allRowsWithData = [...document.querySelectorAll("tr")].slice(1);

    function onClick(e) {
        let row = e.target.parentNode;
        if (e.target.parentNode.nodeName === "TR") {
            if (row.parentNode.nodeName === "TBODY") {
                if (row.style.backgroundColor !== "") {
                    row.style.backgroundColor = ""
                } else {
                    allRowsWithData.forEach(x => x.style.backgroundColor = "");
                    row.style.backgroundColor = "#413f5e"
                }
            }
        }
    }
}