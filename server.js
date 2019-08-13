var express = require("express");

var app = express();
var PORT = process.env.PORT || 3301;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

// Routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});