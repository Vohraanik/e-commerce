const Subcategories = require("../model/subcategories.model");


const listSubcategories = async (req, res) => {
    try {
       
        const subcategories = await Subcategories.find();
      
        if (!subcategories || subcategories.length === 0) {
            return res.status(404).json({
                message: "No subcategories found",
                success: false,
            });
        }
        res.status(200).json({
            message: "Subcategories fetched successfully",
            success: true,
            data: subcategories,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while fetching subcategories: " + error.message,
            success: false
        });
    }
};

const getSubcategories = async (req, res) => {
    try {
        console.log(req.params.subcategories_id);
        const subcategory = await Subcategories.findById(req.params.subcategories_id);
        console.log(subcategory);
        if (!subcategory) {
            return res.status(404).json({
                message: "Subcategory not found",
                success: false,
            });
        }
        res.status(200).json({
            message: "Subcategory fetched successfully",
            success: true,
            data: subcategory,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while fetching subcategory: " + error.message,
            success: false
        });
    }
};

const addSubcategories = async (req, res) => {
    try {
       
        const subcategory = await Subcategories.create(req.body);
        if (!subcategory) {
            return res.status(400).json({
                message: "Name and description are required",
                success: false,
            });
        }
        return res.status(201).json({
            message: "Subcategory added successfully",
            success: true,
            data: subcategory,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred while adding subcategory: " + error.message,
            success: false,
        });
    }
};

const updateSubcategories = async (req, res) => {
    try {
        console.log(req.params.subcategories_id,req.body);
        const subcategories_id = req.params.subcategories_id;
        const subcategory = await Subcategories.findByIdAndUpdate(subcategories_id, req.body, { new: true, runValidators: true });
        if (!subcategory) {
            return res.status(400).json({
                message: "Subcategory not updated",
                success: false,
            });
        }
        res.status(200).json({
            message: "Subcategory updated successfully",
            success: true,
            data: subcategory,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred while updating subcategory: " + error.message,
            success: false,
        });
    }
};

const deleteSubcategories = async (req, res) => {
    console.log(req.subcategories_id);
    try {
        const subcategoryId = req.params.subcategories_id;
        console.log(subcategoryId);
        
        const subcategory = await Subcategories.findByIdAndDelete(subcategoryId);
        console.log(subcategory);
        
        if (!subcategory) {
            return res.status(404).json({
                message: "Subcategory not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Subcategory deleted successfully",
            success: true,
            data: subcategory,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred while deleting subcategory: " + error.message,
            success: false,
        });
    }
};


const filterCategory = async (req,res) => {
    try {
        const subcategoryFilter = await Subcategories.find({categories_id:req.params.categories_id});
        console.log(subcategoryFilter);
        if (!subcategoryFilter || subcategoryFilter.length === 0) {
            return res.status(404).json({
                message: "No subcategories found",
                success: false,
            });
        }
        res.status(200).json({
            message: "Subcategories fetched successfully",
            success: true,
            data: subcategoryFilter,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while fetching subcategories: " + error.message,
            success: false
        });
    }
}

module.exports = {
    listSubcategories,
    getSubcategories,
    addSubcategories,
    updateSubcategories,
    deleteSubcategories,
    filterCategory
};
