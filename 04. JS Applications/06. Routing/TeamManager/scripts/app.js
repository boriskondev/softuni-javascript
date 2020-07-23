import home from "../scripts/controllers/home.js";
import about from "../scripts/controllers/about.js";
import login, { loginPost } from "../scripts/controllers/login.js";
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

        // HOME
        this.get("index.html", home);
        this.get("#/home", home);
        this.get("/", home);

        // ABOUT
        this.get("#/about", about);

        // LOGIN
        this.get("#/login", login);
        this.post("#/login", (context) => { loginPost.call(context) });

        // CATALOG
        this.get("#/catalog", catalog);

        // CATALOG DETAILS
        this.get("#/catalog/:id", details);

        // REGISTER
        this.get("#/register", register);
        this.post("#/register", (context) => { registerPost.call(context) });

        // CREATE
        this.get("#/create", create);

        // EDIT
        this.get("#/edit/:id", edit);

        // Къде държим контролерите?
        // Как съхраняваме потребителската сесия?
        // Как подаваме сесията на контролерите?
    });

    app.run();
});
