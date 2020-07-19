import monkeys from "./monkeys.js";

window.addEventListener("load", async () => {
    const monkeysSection = document.querySelector("section");

    const mainText = await (await fetch("mainTemplate.hbs")).text();
    const mainTemplate = Handlebars.compile(mainText);
    Handlebars.registerPartial("monkey", await (await fetch("monkeyTemplate.hbs")).text());

    monkeysSection.innerHTML = mainTemplate({monkeys});

    document.addEventListener("click", onClick);

    function onClick(e) {
        if (e.target.tagName === "BUTTON"){
            const monkeyDivParagraph = e.target.parentNode.querySelector("p");
            if (monkeyDivParagraph.style.display === "none") {
                monkeyDivParagraph.style.display = "block";
            } else {
                monkeyDivParagraph.style.display = "none";
            }
        }
    }
});
