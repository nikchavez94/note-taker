const apiRouter = require("express").Router();
const noteRoutes = require("./noteRoutes.js");

apiRouter.use("/", noteRoutes);

module.exports = apiRouter