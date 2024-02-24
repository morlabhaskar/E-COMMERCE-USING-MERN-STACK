require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute.js")
const errorHandler = require("./middleware/errormiddleware.js")


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

//error middleware
app.use(errorHandler);

//Routes
app.get("/",(req,res) => {
    res.send("Home Page...")
})

//userRoutes
app.use("/api/users",userRoute)













//port listen
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})

//dB connection status
mongoose
    .connect(process.env.MONGO_URL,
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // }
        )
    .then(()=> {
        console.log("DB is Connected!")
        
    })
    .catch((err) => console.log(err))
