const Products = require("../model/products.model");
const uploadFile = require("../utils/cloudinary");

const listproducts = async (req, res) => {
    console.log("Fetching products");
    try {
        const products = await Products.find();

        if (!products || products.length === 0) {
            return res.status(404).json({
                message: "No products found",
                success: false,
            });
        }
        res.status(200).json({
            message: "Products fetched successfully",
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while fetching products: " + error.message,
            success: false
        });
    }
};

const addproducts = async (req, res) => {
    console.log("Adding a new product");

      
    try {
        const fileRes = await uploadFile(req.file.path,"product_image")
        console.log(fileRes);

        const products = await Products.create({...req.body,
            image:{
                url:fileRes.url,
                public_id:fileRes.public_id
            },

        });
        console.log(products);
        if (!products) {
            return res.status(400).json({
                message: "Failed to add the product",
                success: false,
            });
        }
        return res.status(201).json({
            message: "Product added successfully",
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred while adding product: " + error.message,
            success: false
        });
    }
};

const updateproducts = async (req, res) => {
    console.log("Updating product");
    try {
        const products_id = req.params.products_id;
        console.log(products_id, req.body);
        const products = await Products.findByIdAndUpdate(products_id, req.body, { new: true, runValidators: true });
        if (!products) {
            return res.status(400).json({
                message: "Product not updated",
                success: false,
            });
        }
        res.status(200).json({
            message: "Product updated successfully",
            success: true,
            data: products,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred while updating product: " + error.message,
            success: false,
        });
    }
};

const deleteproducts = async (req, res) => {
    console.log("Deleting product");
    try {
        const products_id = req.params.products_id;
        console.log(products_id);

        const products = await Products.findByIdAndDelete(products_id);
        console.log(products);

        if (!products) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            data: products,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred while deleting product: " + error.message,
            success: false,
        });
    }
};

module.exports = {
    listproducts,
    addproducts,
    updateproducts,
    deleteproducts
};
