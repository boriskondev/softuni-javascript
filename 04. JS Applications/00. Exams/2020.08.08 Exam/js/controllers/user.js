// import { showSuccess, showError } from "../notifications.js";
import { register as apiRegister } from "../data.js";
import { login as apiLogin } from "../data.js";
import { logout as apiLogout } from "../data.js";

export async function register() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/user/register.hbs", this.app.userData);
}

export async function registerPost() {
    console.log(this.params)
    try {
        if (this.params.email === "") {
            throw new Error("Email field must be filled.");
        }

        if (this.params.password.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }

        if (this.params.password !== this.params.repeatPassword) {
            throw new Error("Passwords don't match");
        }

        const result = await apiRegister(this.params.email, this.params.password);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        alert("Successful registration!");
        // showSuccess("User registration successful.");

        localStorage.setItem("userEmail", result.email);
        localStorage.setItem("userId", result.objectId);

        this.redirect("#/home");

    } catch (err) {
        alert(err.message);
        // showError(err.message);
    }
}

export async function login() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/user/login.hbs", this.app.userData);
}

export async function loginPost() {
    try {
        const result = await apiLogin(this.params.email, this.params.password);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.email = result.email;
        this.app.userData.userId = result.objectId;

        alert("Login successful.");
        // showSuccess("Login successful.");

        this.redirect("#/home")

    } catch (err) {
        alert(err.message);
        // showError(err.message);
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

        alert("Successful logout.");
        // showSuccess("Logout successful.");

        this.redirect("#/login");

    } catch (err) {
        alert(err.message);
        // showError(err.message);
    }
}

// export async function profile() {
//     this.partials = {
//         header: await this.load("./templates/common/header.hbs"),
//         footer: await this.load("./templates/common/footer.hbs")
//     };
//
//     const events = await getEventsByCreator();
//
//     const context = Object.assign(this.app.userData, { events });
//
//     this.partial("./templates/user/profile.hbs", context);
// }
//