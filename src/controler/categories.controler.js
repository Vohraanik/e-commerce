const Categories = require("../model/categories.model");
const { param } = require("../routes/api/v1/categories.route");
const listcategories = async(req,res) => {
    // console.log("get categories");
    try {
        const categories = await Categories.find();
        if(!categories || categories.length === 0){
             res.status(404).json({
                message: "No categories found",
                success: false,
            })
        }

        res.status(200).json({
            message: "Categories fetched successfully",
            success: true,
            data: categories,
        })


    } catch (error) {
        res.status(500).json({
            message: "Error occurred while fetching products" + error.message,
            success: false        
        })
    }
}

const getcategories = async(req,res) => {
    try {
        console.log(req.params.category_id);
        const category = await Categories.findById(req.params.category_id);
        if(!category){
            res.status(404).json({
                message: "Category not found",
                success: false,
                })
                }
                res.status(200).json({
                    message: "Category fetched successfully",
                    success: true,
                    data: category,
                    })

    } catch (error) {
        res.status(500).json({
            message: "Error occurred while fetching category" + error.message,
            success: false        
        })
    }
}

const addcategories = (req,res) => {
    console.log("add categories");
}

const updatecategories = (req,res) => {
    console.log("update categories");
}

const deletecategories = (req,res) => {
    console.log("delete categories");
}

module.exports = {
    listcategories,
    getcategories,
    addcategories,
    updatecategories,
    deletecategories
}