const express = require("express");
const { categoriesControler } = require("../../../controler");
const app = express();
const router = express.Router();

router.get("/list-categories",
    categoriesControler.listcategories
);

router.post("/",(req,res)=>{
    res.send("post request")
    console.log("Post");
});

router.put("/",(req,res)=>{
    res.send("put request")
});

router.delete("/",(req,res)=>{
    res.send("delete request")
});


module.exports = router;