import { register as apiRegister } from "../data.js"

export default async function register() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs"),
        registerForm: await this.load("./templates/user/registerForm.hbs")
    };

    this.partial("./templates/user/registerPage.hbs", this.app.userData);
}

export async function registerPost() {
    if (this.params.username === "" ||
        this.params.password === "" ||
        this.params.repeatPassword === "") {
        alert("Information in one or more fields is missing!");
        return;
    }

    if (this.params.username.length < 3) {
        alert("Username must be at least 3 characters long!");
        return;
    }

    if (this.params.password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    if (this.params.password !== this.params.repeatPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const result = await apiRegister(this.params.username, this.params.password);
        if (result.hasOwnProperty("errorData")) {
            let error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;

    } catch (err) {
        alert(err.message);
        return;
    }

    this.redirect('#/login');
}