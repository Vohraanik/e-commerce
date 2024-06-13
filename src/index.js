const express = require("express");
const route = require("./routes/api/v1/index");
const connectdb = require("./db/mongoosedb");
var cors = require('cors')


const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/v1",route);

connectdb();

app.listen(8080,()=>{
    console.log("server start at 8080 created");
})
