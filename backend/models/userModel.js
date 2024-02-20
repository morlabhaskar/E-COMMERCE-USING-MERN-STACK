const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true,"Please add a name"],

        },
        email: {
            type: String,
            required:[true,"Please add a email"],
            unique:true,
            trim:true,
            match:[
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address"
            ]
        },
        password: {
            type: String,
            required:[true,"Please add a Password"],
            minLength:[6,"Password must be upto 6 characters"],
            
        },
        role: {
            type: String,
            required:[true],
            default:"customer",
            emum:["customer","admin"],

        },
        photo:{
            type: String,
            required:[true,"Please add a photo"],
            default:"https://i.ibb.co/4pDNDk1/avatar.png",

        },
        phone: {
            type:String,
            default:"+91 1234567890",
        },
        address: {
            type:String,
            //address,state,country
        }

    }
);

const User = mongoose.model("User",userSchema);
module.exports = User;