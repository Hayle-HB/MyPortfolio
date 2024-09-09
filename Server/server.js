const express = require("express");
const cors = require("cors");
const app = express();

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // replace with your front end's URL
  })
);

// Your routes and other middleware
app.get("/getData", (req, res) => {
  res.send({
    name: "Haylemeskel",
    age: 22,
    school: "AASTU"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
