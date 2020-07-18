window.addEventListener("load", async () => {
     const catsSection = document.querySelector("#allCats")

     const ulText = await (await fetch("ulTemplate.hbs")).text();
     const ulTemplate = Handlebars.compile(ulText);
     Handlebars.registerPartial("cat", await (await fetch("catTemplate.hbs")).text());
     catsSection.innerHTML = ulTemplate({cats});

     document.addEventListener("click", onClick);

     function onClick(e) {
          if (e.target.tagName === "BUTTON"){
               const statusDiv = e.target.parentNode.querySelector(".status");
               if (statusDiv.style.display === "none") {
                    statusDiv.style.display = "block";
                    e.target.innerHTML = "Hide status code";
               } else {
                    statusDiv.style.display = "none";
                    e.target.innerHTML = "Show status code";
               }
          }
     }
})