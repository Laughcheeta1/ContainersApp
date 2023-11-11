const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const createAccessToken = require("../libs/jwt");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require("../config");

const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) return res.status(400).json(["The email is already in use"]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token, { sameSite: "None", secure: "true" });

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({ message: ["User Not Found"] });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: ["Incorrect Password"] });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token, { sameSite: "None", secure: "true" });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = (req, res) => {
  res.cookie("token", "", {
    sameSite: "None",
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });

  return res.sendStatus(200);
};

const profile = async (req, res) => {
  const userSaved = await User.findById(req.user.id);

  if (!userSaved) return res.status(400).json({ message: "User not found" });
  return res.json({
    id: userSaved._id,
    username: userSaved.username,
    email: userSaved.email,
    createdAt: userSaved.createdAt,
    updatedAt: userSaved.updatedAt,
  });
};

const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    const userFound = await User.findById(user.id);

    if (!userFound) return res.status(401).json({ message: "Unauthorized" });

    return res.json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

module.exports = {
  register,
  login,
  logout,
  profile,
  verifyToken,
};
