const app = require("./app");
const connectDb = require("./db");

connectDb();
app.listen(4000);
console.log("Server listening on port", 4000);
