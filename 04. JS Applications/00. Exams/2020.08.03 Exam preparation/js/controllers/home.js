import { getEvents } from "../data.js";

export async function home() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const events = await getEvents();

    const context = Object.assign(this.app.userData, { events });

    this.partial("./templates/home.hbs", context);
}

