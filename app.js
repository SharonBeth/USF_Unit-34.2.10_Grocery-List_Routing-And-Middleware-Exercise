//SEtting ups the constants. This section currently needs 2 locally installed items: express & morgan.
//Then the ./ means files need to be locally added in this same folder as this file. Which is: expressError & middleware
const express = require("express");

const ExpressError = require("./expressError");
const middleware = require('./middleware');
const itemsRoutes = require('./routes/items')
const app = require("./34.2.10_Express-shopping-list-Solution/express-shopping-list-solution/app");


app.use(express.json());
app.use("/items", itemsRoutes);

app.get('/favicon.ico', (req, res) => res.sendStatus(204))

// 404 handler
app.use(function (req, res, next) {
    return next(new ExpressError("Not Found", 404));
});

// generic error handler
app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;

    // set the status and alert the user
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});

module.exports = app