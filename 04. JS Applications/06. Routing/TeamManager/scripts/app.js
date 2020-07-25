import home from "../scripts/controllers/home.js";
import about from "../scripts/controllers/about.js";
import login, { loginPost, logout } from "../scripts/controllers/login.js";
import register,  { registerPost } from "../scripts/controllers/register.js";
import catalog from "../scripts/controllers/catalog.js";
import details from "../scripts/controllers/details.js";
import create from "../scripts/controllers/create.js";
import edit from "../scripts/controllers/edit.js";

$(() => {
    const app = Sammy("#main", function () {
        this.use("Handlebars", "hbs");

        this.userData = {
            loggedIn: false,
            hasTeam: false
        }
        this.get("index.html", home);
        this.get("#/home", home);
        this.get("/", home);
        this.get("#/about", about);

        this.get("#/register", register);
        this.get("#/login", login);
        this.get("#/logout", logout);

        this.post("#/register", (context) => { registerPost.call(context) });
        this.post("#/login", (context) => { loginPost.call(context) });

        this.get("#/catalog", catalog);
        this.get("#/catalog/:id", details);

        this.get("#/create", create);
        this.get("#/edit/:id", edit);
    });

    app.run();
});
