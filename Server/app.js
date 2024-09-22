require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/testimonialsRouter");
const mongoose = require("mongoose");
const upload = require("./controllers/ImageUploader/upload");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);
 
// mongobd connection

const mongoUri = process.env.MONGODB_URI;

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(3000, () => {
      console.log("MongoDB connected and Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Connection error", err);
  });
 