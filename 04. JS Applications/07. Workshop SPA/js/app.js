alert("It works!");

// 55:26

import home from "./controllers/home.js"
import register, { registerPost } from "./controllers/register.js"
import login, { loginPost } from "./controllers/login.js"
import logout from "./controllers/logout.js"
import catalog, { details, create, edit } from "./controllers/movies.js"

window.addEventListener("load", () => {
    const app = Sammy("#container", function () {
        this.use("Handlebars", "hbs");

        this.userData = {
            username: "",
            userId: ""
        }

        this.get("/", home);
        this.get("index.html", home);
        this.get("#/home", home);

        this.get("#/register", register);
        this.post("#/register", context => { registerPost.call(context); });

        this.get("#/login", login);
        this.post("#/login", context => { loginPost.call(context); });

        this.get("#/logout", logout);

        this.get("#/catalog", catalog);
        this.get("#/details/:id", details);
        this.get("#/create", create);
        this.get("#/edit/:id", edit);
    })
    
    app.run();
})