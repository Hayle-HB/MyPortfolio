const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./models/testimonialsRouter");

app.use(cors());
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server running on port 5000");
});
