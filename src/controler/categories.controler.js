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


const addcategories = async (req, res) => {
    try {
    console.log(req.body);
   const category = await Categories.create(req.body);

        if (!category) {
            return res.status(400).json({
                message: "Name and description are required",
                success: false,
            });
        }

        return res.status(201).json({
            message: "Category added successfully",
            success: true,
            data: category,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred while adding category: " + error.message,
            success: false,
        });
    }
};

const updatecategories = async (req, res) => {
    try {
        console.log(req.body);
        const category_id = (req.params.category_id)
        const category = await Categories.findByIdAndUpdate(category_id,req.body,{new:true,runValidators:true});
        console.log(category);

        if (!category) {
            return res.status(400).json({
                message: "Category not update",
                success: false,
                });
            };

          res.status(200).json({
            message: "Category updated successfully",
            success: true,
            data: category,
          })  

    } catch (error) {
            return res.status(500).json({
                message: "Error occurred while updating category: " + error.message,
                success: false,
                });
            };
};


const deletecategories = async (req, res) => {
    try {
        const category = await Categories.findByIdAndDelete(req.params.category_id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Category deleted successfully",
            success: true,
            data:category
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred while deleting category: " + error.message,
            success: false,
            data:category,
        });
    }
};

module.exports = {
    listcategories,
    getcategories,
    addcategories,
    updatecategories,
    deletecategories
}