const express = require("express");
const { productsControler } = require("../../../controler");

const app = express();
const router = express.Router();

router.get("/list-products",
productsControler.listproducts
);

router.post("/add-products",
productsControler.addproducts
);

router.put("/update-products",
productsControler.updateproducts
);

router.delete("/delete-products",
productsControler.deleteproducts
);


module.exports = router;