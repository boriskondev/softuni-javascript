import { showSuccess, showError } from "../notifications.js";
import { register as apiRegister, getEventsByCreator } from "../data.js";
import { login as apiLogin } from "../data.js";
import { logout as apiLogout } from "../data.js";

export async function register() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/user/register.hbs", this.app.userData);
}

export async function login() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/user/login.hbs", this.app.userData);
}

export async function profile() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const events = await getEventsByCreator();

    const context = Object.assign(this.app.userData, { events });

    this.partial("./templates/user/profile.hbs", context);
}

export async function registerPost() {
    try {
        if (this.params.username.length < 3) {
            throw new Error("Username must be at least 3 characters long");
        }

        if (this.params.password.length < 6) {
            throw new Error("Password must be atleast 6 characters long");
        }

        if (this.params.password !== this.params.rePassword) {
            throw new Error("Passwords don't match");
        }

        const result = await apiRegister(this.params.username, this.params.password);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showSuccess("User registration successful.");

        localStorage.setItem("username", result.username);
        localStorage.setItem("userId", result.objectId);

        this.redirect("#/home");

    } catch (err) {
        showError(err.message);
    }
}

export async function loginPost() {
    try {
        const result = await apiLogin(this.params.username, this.params.password);
        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;

        showSuccess("Login successful.");

        this.redirect("#/home")

    } catch (err) {
        showError(err.message);
    }
}

export async function logout() {
    try {
        const result = await apiLogout();
        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = "";
        this.app.userData.userId = "";

        showSuccess("Logout successful.");

        this.redirect("#/home");

    } catch (err) {
        showError(err.message);
    }
}