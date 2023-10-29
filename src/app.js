const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const containerRoutes = require("./routes/containers.routes");
const commodatumRoutes = require("./routes/commodatum.routes");
const customerRoutes = require("./routes/customer.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:4000",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", containerRoutes);
app.use("/api", commodatumRoutes);
app.use("/api", customerRoutes);
// TODO: add the remaining models routes
// TODO: add coments to everything
module.exports = app;
