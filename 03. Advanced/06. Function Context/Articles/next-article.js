function getArticleGenerator(articles) {
    const contentDiv = document.querySelector("#content");

    function showNext() {
        if (articles.length > 0) {
            let articleText = articles.shift();
            let p = document.createElement("article");
            p.textContent = articleText;
            contentDiv.appendChild(p);
        }
    }
    return showNext;
}
