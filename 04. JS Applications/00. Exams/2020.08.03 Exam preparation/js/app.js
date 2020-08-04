alert("!!!")

import home from "./controllers/home.js";
import { profile, register, login, logout, registerPost, loginPost } from "./controllers/user.js";
import { create } from "./controllers/event.js";

window.addEventListener("load", () => {
    const app = Sammy("body", function () {
        this.use("Handlebars", "hbs");

        this.userData = {
            username: localStorage.getItem("username") || "",
            userId: localStorage.getItem("userId") || "",
        };

        this.get("/", home);
        this.get("index.html", home);
        this.get("#/home", home);

        this.get("#/register", register);
        this.post("#/register", context => { registerPost.call(context); });

        this.get("#/login", login);
        this.post("#/login", context => { loginPost.call(context); });

        this.get("#/logout", logout);

        this.get("#/profile", profile);

        this.get("#/create", create);

        //
        // this.get('#/catalog', catalog);
        // this.get('#/my_movies', myMovies);
        //
        // this.get('#/details/:id', details);
        //
        // this.get('#/create', create);
        //
        // this.get('#/edit/:id', edit);
        //


        //
        // this.post('#/create', ctx => { createPost.call(ctx); });
        // this.post('#/edit/:id', ctx => { editPost.call(ctx); });
        // this.get('#/buy/:id', buyTicket);
        // this.get('#/delete/:id', deleteMovie);
    });

    app.run();
});