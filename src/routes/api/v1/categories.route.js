const express = require("express");
const { categoriesControler } = require("../../../controler");
const app = express();
const router = express.Router();


router.get("/list-categories",
    categoriesControler.listcategories
);
router.get("/list-categories/:category_id",
    categoriesControler.getcategories
);
router.post("/add-categories",
categoriesControler.addcategories
);

router.put("/update-categories",
categoriesControler.updatecategories 
);

router.delete("/delete-categories",
    categoriesControler.deletecategories
);


module.exports = router;