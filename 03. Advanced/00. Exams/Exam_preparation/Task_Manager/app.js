function solve() {
    // References to all and individual tasks sections

    let sections = document.querySelectorAll("section");
    let openTasksDiv = sections.item(1).querySelectorAll("div").item(1);
    let inProgressTasksDiv = sections.item(2).querySelectorAll("div").item(1)
    let completeTasksDiv = sections.item(3).querySelectorAll("div").item(1)

    // References to Add Task section contents
    let nameOfTask = document.getElementById("task");
    let descriptionOfTask = document.getElementById("description");
    let dateOfTask = document.getElementById("date");

    let addButton = document.getElementById("add");

    addButton.addEventListener("click", addTask);

    function addTask(event) {
        event.preventDefault()

        let nameOfTaskValue = nameOfTask.value;
        let descriptionOfTaskValue = descriptionOfTask.value;
        let dateOfTaskValue = dateOfTask.value;

        if (nameOfTaskValue !== "" &&
            descriptionOfTaskValue !== "" &&
            dateOfTaskValue !== "") {

            // Create task article
            let article = document.createElement("article");

            // Article heading
            let articleHeading = document.createElement("h3");
            articleHeading.textContent = nameOfTaskValue;
            article.appendChild(articleHeading)

            // Article description
            let articleDescription = document.createElement("p");
            articleDescription.textContent = `Description: ${descriptionOfTaskValue}`;
            article.appendChild(articleDescription)

            // Article due date
            let articleDueDate = document.createElement("p");
            articleDueDate.textContent = `Due Date: ${dateOfTaskValue}`;
            article.appendChild(articleDueDate)

            // Article buttons div
            let articleButtonsDiv = document.createElement("div");
            articleButtonsDiv.setAttribute("class", "flex")

            // Start button
            let startButton = document.createElement("button");
            startButton.setAttribute("class", "green");
            startButton.textContent = "Start";
            articleButtonsDiv.appendChild(startButton);

            // Delete button
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "red");
            deleteButton.textContent = "Delete";
            articleButtonsDiv.appendChild(deleteButton);

            // Finish button
            let finishButton = document.createElement("button");
            finishButton.setAttribute("class", "orange");
            finishButton.textContent = "Finish";

            // Add buttons div to article elements array
            article.appendChild(articleButtonsDiv)

            // Append article to "Open" tasks section
            openTasksDiv.appendChild(article)

            startButton.addEventListener("click", () => {
                inProgressTasksDiv.appendChild(article);
                startButton.remove();
                articleButtonsDiv.appendChild(finishButton);
            });

            deleteButton.addEventListener("click", () => {
                article.remove();
            });

            finishButton.addEventListener("click", () => {
                articleButtonsDiv.remove()
                completeTasksDiv.appendChild(article)
            });
        }
    }
}

