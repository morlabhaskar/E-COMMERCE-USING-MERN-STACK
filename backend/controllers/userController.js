const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const generateToken = () => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};


// --------------------------------------------------------------------------------------------
//Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be upto 6 characters");
  }
  //check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email has already been registered");
  }

  //create new user
  const user = await User.create({
    name,
    email,
    password,
  });
  //generate token
  const token = generateToken(user._id);

  if (user) {
    const { _id, name, email, role } = user;
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // if errors are there to try two these two lines are removed
      //   secure: true,
      //   sameSite: none,
    });
    //send user data
    res.status(201).json({
      _id,
      name,
      email,
      role,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  // res.send("Register User...");
});


// ------------------------------------------------------------------
//login
const loginUser = asyncHandler(async (req, res) => {
  //validate Request
  if (!email || !password) {
    res.status(400);
    throw new Error("Please ass email and Password");
  }
  //check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User does not exist");

  }

  //user exists,check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  //generateToken
  const token = generateToken(user._id);
  if (user && passwordIsCorrect) {
    const newUser = await User.findOne({ email }).select("-password");
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // if errors are there to try two these two lines are removed
      //   secure: true,
      //   sameSite: none,
    });
    //send user data
    res.status(201).json(newUser);
  } else {
    res.status(400);
    throw new Error("Invalid email and Password");
  }
  // res.send("Login User...");
});

// --------------------------------------------------------------------
//logout user
const logout = asyncHandler(async (req,res) => {
  res.cookie("token","", {
    path:'/',
    httpOnly:true,
    expires:new Date(0),
  });
  return res.status(200).json({message:"Successfully Logged Out"})
});


//get user
const getUser = asyncHandler (async (req,res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (user) {
    res.status(200).json(user);
  }
  else {
    res.status(400);
    throw new Error("User Not Found");
  }
})


module.exports = {
  registerUser,
  loginUser,
  logout,
  getUser
};
