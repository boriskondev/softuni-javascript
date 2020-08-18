import { getAll } from "../data/content.js";

export async function home() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    let shoes = await getAll();

    if (shoes.length > 0) {

        shoes.sort((a, b) => {
            return b.peopleBought.length - a.peopleBought.length
        })

        Object.assign(this.app.userData, { shoes })
    }

    this.partial("./templates/home.hbs", this.app.userData);
}