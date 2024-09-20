const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/testimonialsRouter");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);

// mongobd connection

const url =
  "mongodb+srv://hayle_hb:<password>@nodejs.b3kc1wk.mongodb.net/MyPortfolio?retryWrites=true&w=majority&appName=NodeJS";


mongoose
  .connect(url)
  .then(() => {
    app.listen(3000, () => {
      console.log("MongoDB connected and Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Connection error", err);
  });
