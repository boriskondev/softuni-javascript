import { getAll } from "../data/content.js";

export async function home() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const search = this.params.search || "";

    let movies = await getAll(search);

    if (movies.length > 0) {
        Object.assign(this.app.userData, { movies, search })
    }

    this.partial("./templates/home.hbs", this.app.userData);
}