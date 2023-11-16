const crypto = require("crypto");

const generateRandomKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const TOKEN_SECRET = generateRandomKey();

module.exports = TOKEN_SECRET;
