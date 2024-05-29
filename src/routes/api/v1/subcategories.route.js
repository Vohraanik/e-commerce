const express = require("express");
const { subcategoriesControler } = require("../../../controler");

const app = express();
const router = express.Router();

router.get("/list-subcategories",
    subcategoriesControler.listsubcategories
);

router.post("/add-subcategories",
    subcategoriesControler.addsubcategories
);

router.put("/update-subcategories",
    subcategoriesControler.updatesubcategories
);

router.delete("/delete-subcategories",
    subcategoriesControler.deletesubcategories
);


module.exports = router;