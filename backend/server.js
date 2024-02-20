const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute.js")

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(
    cors({
        origin:["http://localhost:3000"],
        credentials:true,
    })
)


//Routes
app.get("/",(req,res) => {
    res.send("Home Page...")
})

//userRoutes
app.use("/api/users",userRoute)











const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> {
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))
