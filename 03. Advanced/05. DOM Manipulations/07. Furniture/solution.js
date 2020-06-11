function solve() {
  document.addEventListener('click', onClick);

  let tableBody = document.querySelector("tbody");

  function onClick(e) {
    let target = e.target;
    if (target.tagName === "BUTTON") {
      if (target.textContent === "Generate") {
        let textAreaValue = target.previousElementSibling.value;
        if (textAreaValue) {
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

            tableBody.appendChild(row)
          }
        } 
      } else if (target.textContent === "Buy") {
        console.log("BUY button");
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