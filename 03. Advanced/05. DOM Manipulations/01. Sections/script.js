function create(words) {
   let contentDiv = document.querySelector("#content");

   for (word of words) {
      let pText = document.createTextNode(word);
      let p = document.createElement("p");
      p.appendChild(pText);
      p.style.display = "none";
      let div = document.createElement("div");
      div.appendChild(p);
      div.addEventListener("click", clickSection);
      contentDiv.appendChild(div);
   }

   function clickSection(e) {
      e.target.firstElementChild.style = "block";
   }
}