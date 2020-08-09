alert("The app works!")

import { home } from "./controllers/home.js";
import { register, registerPost, login, loginPost, logout } from "./controllers/user.js";
import { add, addPost, movieDetails, edit, editPost, deleteGet, like } from "./controllers/movie.js";

window.addEventListener("load", () => {
    const app = Sammy("#container", function () {
        this.use("Handlebars", "hbs");

        this.userData = {
            userEmail: localStorage.getItem("userEmail") || "",
            userId: localStorage.getItem("userId") || ""
        };

        // OK
        this.get("/", home);
        this.get("index.html", home);
        this.get("#/home", home);

        // OK
        this.get("#/register", register);
        this.post("#/register", context => { registerPost.call(context); });

        // OK
        this.get("#/login", login);
        this.post("#/login", context => { loginPost.call(context); } );

        // OK
        this.get("#/logout", logout);

        // OK
        this.get("#/add", add);
        this.post("#/add", context => { addPost.call(context); } );

        // OK
        this.get("#/details/:id", movieDetails);

        // OK
        this.get("#/edit/:id", edit);
        this.post("#/edit/:id", context => { editPost.call(context); });

        this.get("#/delete/:id", deleteGet);

        this.get("#/like/:id", like);
    });

    app.run();
});