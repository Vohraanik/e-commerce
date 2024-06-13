const express = require("express");
const { productsControler } = require("../../../controler");
const upload = require("../../../middleware/upload");

const app = express();
const router = express.Router();

router.get("/list-products",
productsControler.listproducts
);

router.post("/add-products",
upload.single("image"),    
productsControler.addproducts
);

router.put("/update-products/:products_id",
productsControler.updateproducts
);

router.delete("/delete-products/:products_id",
productsControler.deleteproducts
);


module.exports = router;