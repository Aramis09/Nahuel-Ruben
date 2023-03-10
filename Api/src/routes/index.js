const {Router} = require("express");
const productsRouter = require("./subRoutes/productsRouter");
const platformsRouter = require("./subRoutes/platformsRouter");
const mainRouter = Router();

mainRouter.use("/products",productsRouter);
mainRouter.use("/platforms",platformsRouter);

module.exports = mainRouter;