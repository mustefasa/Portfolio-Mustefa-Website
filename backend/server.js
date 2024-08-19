const express =require('express')
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");

//App router
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is Ready at port 5000");
});

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
console.log(`server running on ${port}`)
});