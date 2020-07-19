window.addEventListener("load", () => {
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
            const templateFn = Handlebars.compile(templateString);
            rootEl.innerHTML = templateFn({towns});
        }
    }
});
