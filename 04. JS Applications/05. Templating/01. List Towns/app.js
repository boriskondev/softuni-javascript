window.addEventListener("load", () => {
    // Loading template/s -> text.
    const templateString = document.querySelector("#main-template").innerHTML;
    Handlebars.registerPartial("town", document.querySelector("#town-template").innerHTML);

    const loadButton = document.querySelector("#btnLoadTowns");
    loadButton.addEventListener("click", renderTowns);

    const input = document.querySelector("#towns");
    const rootEl = document.querySelector("#root");

    function renderTowns(e) {
        e.preventDefault();

        if (input.value) {
            const towns = input.value.split(", ");

            // Compiling template -> function.
            const templateFn = Handlebars.compile(templateString);

            // Generating template with out data (variables) -> HTML text.
            const generatedHtml = templateFn({towns});

            // Adding the generated HTML in DOM.
            rootEl.innerHTML = generatedHtml;
        }
    }
});
