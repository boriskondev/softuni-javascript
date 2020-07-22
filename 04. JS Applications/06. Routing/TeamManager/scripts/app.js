import home from "../scripts/controllers/home.js";
import about from "../scripts/controllers/about.js";
import login from "../scripts/controllers/login.js";
import register from "../scripts/controllers/register.js";

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

        // REGISTER
        this.get("#/register", register);

        // Къде държим контролерите?
        // Как съхраняваме потребителската сесия?
        // Как подаваме сесията на контролерите?
    });

    app.run();
});
