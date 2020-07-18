// Темплейт без наши данни
window.addEventListener("click", () => {
    const rootEl = document.querySelector("#root");

    // Зареждане на темплейт -> текст.
    const templateString = "<h1>This is a heading</h1>";

    // Компилиране на темплейт -> функция.
    const templateFn = Handlebars.compile(templateString);

    // Изпълнение на темплейта с нашите данни (променливи) -> текст HTML.
    const generatedHtml = templateFn({});

    // Поставяне на генерирания HTML в DOM.
    rootEl.innerHTML = generatedHtml;
})

// ----------------------------------------------------------------------------

// Темплейт с променливи
window.addEventListener("click", () => {
    const rootEl = document.querySelector("#root");

    // Зареждане на темплейт -> текст.
    const templateString = "<h1>{{heading}}</h1><div>{{text}}</div>";

    // Компилиране на темплейт -> функция.
    const templateFn = Handlebars.compile(templateString);

    // Изпълнение на темплейта с нашите данни (променливи) -> текст HTML.
    const generatedHtml = templateFn(
        {heading: "Welcome to the new world order!",
            text: "Nobody expected the riot burning in the capital of Russia."});

    // Поставяне на генерирания HTML в DOM.
    rootEl.innerHTML = generatedHtml;
});
