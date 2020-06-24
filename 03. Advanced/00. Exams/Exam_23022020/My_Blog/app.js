function solve() {

    let articlesSection = document.querySelector("main section");
    let archivesSectionUl = document.querySelector(".archive-section ul");
    let archivedArticles = [];

    let articleAuthor = document.querySelector("#creator");
    let articleTitle = document.querySelector("#title");
    let articleCategory = document.querySelector("#category");
    let articleContent = document.querySelector("#content");

    let createButton = document.querySelector(".btn.create");
    createButton.addEventListener("click", onClick);

    function onClick(event) {

        event.preventDefault()

        if (articleAuthor.value !== "" && articleTitle.value !== "" &&
            articleCategory.value !== "" && articleContent.value !== "") {

            let article = document.createElement("article");

            // Article heading
            let newArticleHeading = document.createElement("h1");
            newArticleHeading.textContent = articleTitle.value;
            article.appendChild(newArticleHeading);

            // Article category
            let newArticleCategory = document.createElement("p");
            newArticleCategory.innerHTML = `Category: <strong>${articleCategory.value}</strong>`;
            article.appendChild(newArticleCategory);

            // Article creator
            let newArticleAuthor = document.createElement("p");
            newArticleAuthor.innerHTML = `Creator: <strong>${articleAuthor.value}</strong>`;
            article.appendChild(newArticleAuthor);

            // Article text
            let newArticleText = document.createElement("p");
            newArticleText.textContent = articleContent.value;
            article.appendChild(newArticleText);

            // Article buttons
            let buttonsDiv = document.createElement("div");
            buttonsDiv.setAttribute("class", "buttons")

            // Delete button
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "btn delete");
            deleteButton.textContent = "Delete";

            // Archive button
            let archiveButton = document.createElement("button");
            archiveButton.setAttribute("class", "btn archive");
            archiveButton.textContent = "Archive";

            buttonsDiv.appendChild(deleteButton);
            buttonsDiv.appendChild(archiveButton);
            article.appendChild(buttonsDiv);

            articlesSection.appendChild(article)

            // Delete button functionality
            deleteButton.addEventListener("click", () => {
                article.remove()
            });

            // Archive button functionality
            archiveButton.addEventListener("click", () => {
                article.remove()

                let newListElement = document.createElement("li")
                newListElement.textContent = newArticleHeading.textContent;
                archivedArticles.push(newListElement);

                archivesSectionUl.innerHTML = ''
                archivedArticles.sort(
                    (a, b) => a.textContent.localeCompare(b.textContent))
                    .forEach(li => archivesSectionUl.appendChild(li));
            });
        }
    }
}