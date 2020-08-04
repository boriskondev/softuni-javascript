alert("It works!")

import { getHome } from "./js/controllers/home.js";
import { getLogin, getProfile, getRegister, registerPost } from "./js/controllers/user.js";

window.addEventListener("load", () => {
    const app = Sammy("body", function () {
        this.use("Handlebars", "hbs");

        this.get("#/home", getHome);
        this.get("#/login", getLogin);
        this.get("#/profile", getProfile);
        this.get("#/register", getRegister);

        this.post("#/register", ctx => { registerPost.call(ctx); })


    });

    app.run("#/home");
});
