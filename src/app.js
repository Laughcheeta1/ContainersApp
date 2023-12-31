const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const containerRoutes = require("./routes/containers.routes");
const commodatumRoutes = require("./routes/commodatum.routes");
const customerRoutes = require("./routes/customer.routes");
const itemsRoutes = require("./routes/items.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", containerRoutes);
app.use("/api", commodatumRoutes);
app.use("/api", customerRoutes);
app.use("/api", itemsRoutes);
module.exports = app;
