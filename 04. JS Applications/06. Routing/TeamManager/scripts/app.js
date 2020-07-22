$(() => {
    const app = Sammy("#main", function () {
        this.use("Handlebars", "hbs");

        // this === Sammy.Application
        this.get("index.html", function () {
            // this === Sammy.EventContext
            this.render("./templates/register/registerForm.hbs").then(function (html) {
                // this === Sammy.RenderContext
                this.swap(html)
            });
        });
    });
    app.run();
});
