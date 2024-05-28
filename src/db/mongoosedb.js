const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://anikvohra3:anik123@cluster0.heqw9xn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(()=> console.log("connected to mongodb"))
        .catch((error)=>{
            console.log("error", error);
    });
    
} catch (error) {
    console.log("error", error);
    }
}

module.exports = connectdb;