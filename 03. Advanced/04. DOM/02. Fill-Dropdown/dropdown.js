function addItem() {
    let selectMenu = document.getElementById("menu");
    let newItemText = document.getElementById("newItemText").value;
    let newItemValue = document.getElementById("newItemValue").value;
    let option = document.createElement("option");

    optionText = document.createTextNode(newItemText);
    option.appendChild(optionText);
    option.value = newItemValue;

    selectMenu.appendChild(option);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = ""; 
}