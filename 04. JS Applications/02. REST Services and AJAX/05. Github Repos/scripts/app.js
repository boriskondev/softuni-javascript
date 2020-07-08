function loadRepos() {
	let inputField = document.querySelector("#username");
	let reposUl = document.querySelector("#repos");

	let baseUrl = "https://api.github.com/users/";
	let repos = "/repos";

	if (inputField.value !== "") {
		let fetchUrl = baseUrl + inputField.value + repos;
		reposUl.innerHTML = ""
		fetch(fetchUrl)
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else if (response.status === 401) {
					console.warn("UNAUTHORIZED!");
				}
				else if (response.status === 404) {
					console.warn("MISSING RESOURCE!");
				} else if (response.status === 500) {
					console.warn("SERVER ERROR!");
				}
			})
			.then((result) => (
				result.forEach(element => createLiElement(element.full_name, element.html_url))
			));
	}
	
	function createLiElement(repoName, repoURL) {
		let listItem = document.createElement("li");
		let anchor = document.createElement("a");
		anchor.setAttribute("href", repoURL);
		anchor.textContent = repoName;
		listItem.appendChild(anchor);
		reposUl.appendChild(listItem);
	}
}