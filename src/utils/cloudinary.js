const cloudinary = require("cloudinary").v2



cloudinary.config({
    cloud_name: "dhh0gjl4v",
    api_key: "226664721714754",
    api_secret: "Gak4gN7D9oyvW7WRi17d7HIAv7k" // Click 'View Credentials' below to copy your API secret
});

const uploadFile = async (localpath, folderName) => {
    try {
        // Upload an image
        const uploadResult = await cloudinary.uploader.upload(localpath, {
            folder : folderName
        }).catch((error) => { console.log(error) });

        return uploadResult
    } catch (error) {
        console.log(error);
    }
}

module.exports = uploadFile;