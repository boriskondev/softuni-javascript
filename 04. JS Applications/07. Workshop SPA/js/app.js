import {showInfo, hideLoading} from "./notifications.js"
import home from "./controllers/home.js"
import register, { registerPost } from "./controllers/register.js"
import login, { loginPost } from "./controllers/login.js"
import logout from "./controllers/logout.js"
import catalog, { details, create, createPost, edit, buyTicket } from "./controllers/movies.js"

window.addEventListener("load", () => {
    const app = Sammy("#container", function () {
        this.use("Handlebars", "hbs");

        this.userData = {
            username: localStorage.getItem("username") || "",
            userId: localStorage.getItem("userId") ||"",
            movies: []
        }

        showInfo("It works!")

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
        this.post("#/create", context => { createPost.call(context); });

        this.get("#/edit/:id", edit);

        this.post("#/buy/:id", context => { buyTicket.call(context); });
    })
    
    app.run();
})