const express = require("express");
const route = require("./routes/api/v1/index");
const connectdb = require("./db/mongoosedb");


const app = express();

app.use(express.json());
app.use("/api/v1",route);

connectdb();

app.listen(3000,()=>{
    console.log("server created");
})
