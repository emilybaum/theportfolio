var path = require("path");

module.exports = function (app, passport) {
    // Loads index page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Loads portfolio page
    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });

    // Loads contact page
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });
}