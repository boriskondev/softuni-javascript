import { getAll } from "../data.js";

export async function home() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const token = localStorage.getItem("userToken");

    const movies = await getAll();

    if (token) {
        const movies = await getAll();
        this.app.userData.movies = movies;
        this.partial("./templates/home.hbs", this.app.userData);
    } else {
        this.partial("./templates/home.hbs", this.app.userData);
    }
}