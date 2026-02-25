if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { uploadFile, sendEmail } = require("./middleware/upload");
const reviewRoutes = require("./routes/forms/carereview");
const employmentRoutes = require('./routes/forms/employment');
const careRequestRoutes = require('./routes/forms/homecarerequest');


const path = require("path");
// const swaggerUi = require("swagger-ui-express"),
//   swaggerDocument = require("./swagger.json");

const PORT = process.env.PORT || 5001;
const uri = `${ process.env.MONGODB_URI }`;

const mongoose = require("mongoose");

const express = require('express');
const app = express();
const cors = require("cors");

// Middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization,");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(bodyParser.text({ type: "text/plain" }));
// const bodyParser = require("body-parser");


app.use(reviewRoutes);
app.use(employmentRoutes);
app.use(careRequestRoutes);
// app.post("/send-email", uploadFile, sendEmail);

app.use(express.static(path.join(__dirname, "public")));
// Debugging: Log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server
mongoose
  .connect(uri, {
    dbName: 'main'  // Ensures the "main" database is used
  })
  .then((result) => {
    // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
