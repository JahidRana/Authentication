const UserRegInfo = require("../models/userRegInfo");
const bcrypt = require("bcrypt");

//user Register
exports.userRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserRegInfo.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserRegInfo({
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


//user Login
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await UserRegInfo.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
