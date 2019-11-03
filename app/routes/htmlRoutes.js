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

    // Loads about page
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    // Loads 404 page
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/404.html"));
    });

}