function solve() {
   const searchButton = document.querySelector("button");
   searchButton.addEventListener("click", search);

   let dataRows = [...document.querySelectorAll("tr")].slice(2);

   function search(e) {
      dataRows.forEach(x => x.removeAttribute("class"))
      let input = e.target.previousElementSibling.value;
      let matched = []
      for (row of dataRows) {
         let rowNodesArray = [...row.childNodes];
         let rowsWithText = rowNodesArray.filter(x => x.nodeName == "TD");
         let matchedRows = rowsWithText.filter(cell => cell.textContent.toLowerCase().includes(input) == true || cell.textContent.includes(input) == true);
         matchedRows.length > 0 ? matched.push(matchedRows[0]) : "pass"
      }
      matched.forEach(x => x.parentNode.setAttribute("class", "select"))
   }
}