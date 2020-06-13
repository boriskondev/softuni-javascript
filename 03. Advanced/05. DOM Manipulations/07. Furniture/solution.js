function solve() {
  document.addEventListener('click', onClick);

  let tableBody = document.querySelector("tbody");

  boughtItems = {
    itemsnames: [],
    itemsPrices: [],
    itemsDecfactor: []
  }

  function onClick(e) {
    let target = e.target;
    if (target.tagName === "BUTTON") {
      if (target.textContent === "Generate") {
        let textAreaValue = target.previousElementSibling.value;
        if (textAreaValue) {
          genClickedWithValue = true;
          let valueJSON = JSON.parse(textAreaValue);
          for (obj of valueJSON) {

            let row = document.createElement("tr");

            // First column
            let td = document.createElement("td")
            let img = document.createElement("img");
            img.src = obj.img
            row.appendChild(td).appendChild(img)

            // Second column
            td = document.createElement("td");
            let p = document.createElement("p");
            let pText = document.createTextNode(obj.name);
            p.appendChild(pText);
            row.appendChild(td).appendChild(p);

            // Third column
            td = document.createElement("td");
            p = document.createElement("p");
            let price = document.createTextNode(obj.price);
            p.appendChild(price);
            row.appendChild(td).appendChild(p);

            // Fourth column
            td = document.createElement("td");
            p = document.createElement("p");
            let decorator = document.createTextNode(obj.decFactor);
            p.appendChild(decorator);
            row.appendChild(td).appendChild(p);

            // Fifth column
            td = document.createElement("td");
            let input  = document.createElement("INPUT")
            input.setAttribute("type", "checkbox");
            row.appendChild(td).appendChild(input);

            tableBody.appendChild(row);
          }
        } 
      } else if (target.textContent === "Buy") {
        let allCheckboxes = [...document.querySelectorAll("input")];
        let allCheckboxesChecked = allCheckboxes.filter(x => x.disabled === false && x.checked === true);
        for (box of allCheckboxesChecked) {
          let boxRow = box.parentNode.parentNode;
          let outputDataParagraphs = [...boxRow.querySelectorAll("p")];
          let outputData = outputDataParagraphs.map(x => x.textContent);
          boughtItems.itemsnames.push(outputData[0]);
          boughtItems.itemsPrices.push(Number(outputData[1]));
          boughtItems.itemsDecfactor.push(Number(outputData[2]));
        }
        let boughtItemsNames = boughtItems.itemsnames.join(", ");
        let boughtItemsPrice = boughtItems.itemsPrices.reduce((a,b) => a + b, 0);
        let boughtItemsAverDecor = boughtItems.itemsDecfactor.reduce((a,b) => a + b, 0) / boughtItems.itemsnames.length;
        
        let textarea = document.querySelectorAll("textarea")[1];

        let result = ""

        result += `Bought furniture: ${boughtItemsNames}\n`;
        result += `Total price: ${boughtItemsPrice.toFixed(2)}\n`;
        result += `Average decoration factor: ${boughtItemsAverDecor}`;

        textarea.innerText = result;
      }
    }
  }
}



[
  {
      "img":"https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
      "name": "Sofa",
      "price": "259",
      "decFactor":"0.4"

  },
  {
      "img":"https://cdn.jysk.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/0/7011671065_3dr_sonoma.jpg",
      "name": "Wardrobe",
      "price": "120",
      "decFactor":"1.2"
  }
]