const express = require("express");
const router = express.Router();

const categoriesRouter  = require("./categories.route");
const subcategorisRouter = require("./subcategories.route");
const productsRouter = require("./products.route");

router.use("/categories",categoriesRouter);
router.use("/subcategories",subcategorisRouter);
router.use("/products",productsRouter)

module.exports = router;