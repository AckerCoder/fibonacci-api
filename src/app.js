const express = require("express");
const fibonacciRouter = require("./routers/fibonacci.router");

const app = express();

app.use(express.json());
app.use(fibonacciRouter);

module.exports = app;
