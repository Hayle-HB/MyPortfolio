const { Router } = require("express");
const router = Router();
const testimonials = require('../datas/testimonials')


router.get("/testimonials", (req, res) => {
  res.send(JSON.stringify(testimonials));
});

router.post("/testimonials", (req, res) => {
  res.send({ testimonials: "Post testimonials" });
});

module.exports = router;
