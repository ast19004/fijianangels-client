// if (process.env.NODE_ENV !== "production") {
require("dotenv").config();
// }

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const careReviewRoutes = require("./routes/forms/carereview");

const cors = require("cors");

const path = require("path");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
// const userRoutes = require("./routes/user");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text({ type: "text/plain" }));

app.use(express.static(path.join(__dirname + "/public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization,");
  next();
});

app.post("/send-email", () => {
  console.log("Backend");
});
// app.use(careReviewRoutes);

mongoose
  .connect(uri)
  .then((result) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
