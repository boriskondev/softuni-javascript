function solve() {
    document.addEventListener("click", onClick);

    // References to all and individual tasks sections
    let allSections = [...document.querySelectorAll("section")];

    let openSectionTasksDiv = [...allSections[1].childNodes][1];
    let inProgressSectionTasksDiv = [...allSections[2].childNodes][1];
    let completedSectionTasksDiv = [...allSections[3].childNodes][1];

    // References to Add Task section contents
    let nameOfTaskField = document.getElementById("task");
    let descriptionOfTaskField = document.getElementById("description");
    let dateOfTaskField = document.getElementById("date");
    let addButton = document.getElementById("add");

    function onClick(event) {
        event.preventDefault()

        if (event.target.textContent === "Add") {

            //console.log("Add clicked!")

            let nameOfTaskText = nameOfTaskField.value;
            let descriptionOfTaskText = descriptionOfTaskField.value;
            let dateOfTaskText = dateOfTaskField.value;

            if (nameOfTaskText !== "" &&
                descriptionOfTaskText !== "" &&
                dateOfTaskText !== "") {

                // Create task article
                let article = document.createElement("article");
                let articleContent = [];

                // Article heading
                let articleHeading = document.createElement("h3");
                articleHeading.textContent = nameOfTaskText;
                articleContent.push(articleHeading)

                // Article description
                let articleDescription = document.createElement("p");
                articleDescription.textContent = `Description: ${descriptionOfTaskText}`;
                articleContent.push(articleDescription)

                // Article due date
                let articleDueDate = document.createElement("p");
                articleDueDate.textContent = `Due date: ${dateOfTaskText}`;
                articleContent.push(articleDueDate)

                // Article buttons div
                let articleButtonsDiv = document.createElement("div");
                articleButtonsDiv.setAttribute("class", "flex")

                ////Start button
                let startButton = document.createElement("button");
                startButton.setAttribute("class", "green");
                startButton.textContent = "Start";
                articleButtonsDiv.appendChild(startButton);

                ////Delete button
                let deleteButton = document.createElement("button");
                deleteButton.setAttribute("class", "red");
                deleteButton.textContent = "Delete";
                articleButtonsDiv.appendChild(deleteButton);

                // Add buttons div to article elements array
                articleContent.push(articleButtonsDiv)

                // Append elements to article
                for (let el of articleContent) {
                    article.appendChild(el)
                }

                // Append article to "Open" tasks section
                openSectionTasksDiv.appendChild(article)
            }

        } else if (event.target.textContent === "Delete"){

            //console.log("Delete clicked!");

            let articleToDelete = event.target.parentNode.parentNode;
            let parentOfArticleToDelete = articleToDelete.parentNode;
            parentOfArticleToDelete.removeChild(articleToDelete);

        } else if (event.target.textContent === "Start") {

            //console.log("Start clicked!");

            // Remove article
            let articleToMove = event.target.parentNode.parentNode;
            let parentOfArticleToMove = articleToMove.parentNode;
            parentOfArticleToMove.removeChild(articleToMove);

            // Remove old buttons div
            let divToRemove = articleToMove.querySelector("div");
            articleToMove.removeChild(divToRemove)

            // Article new buttons div
            let articleButtonsDiv = document.createElement("div");
            articleButtonsDiv.setAttribute("class", "flex")

            ////Delete button
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "red");
            deleteButton.textContent = "Delete";
            articleButtonsDiv.appendChild(deleteButton);

            ////Finish button
            let finishButton = document.createElement("button");
            finishButton.setAttribute("class", "orange");
            finishButton.textContent = "Finish";
            articleButtonsDiv.appendChild(finishButton);

            // Add new buttons
            articleToMove.appendChild(articleButtonsDiv)

            // Append article to "In Progress" tasks section
            inProgressSectionTasksDiv.appendChild(articleToMove);
        }
        else if (event.target.textContent === "Finish") {

            //console.log("Finish clicked!");

            // Remove article
            let articleToMove = event.target.parentNode.parentNode;
            let parentOfArticleToMove = articleToMove.parentNode;
            parentOfArticleToMove.removeChild(articleToMove);

            // Remove old buttons div
            let divToRemove = articleToMove.querySelector("div");
            articleToMove.removeChild(divToRemove)

            // Append article to "Complete" tasks section
            completedSectionTasksDiv.appendChild(articleToMove);
        }
    }
}

