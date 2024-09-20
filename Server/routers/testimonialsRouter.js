const { Router } = require("express");
const {
  handleFetchTestimonials, handleAddTestimonials,
} = require("../controllers/testimonialsController");
const router = Router();
const testimonials = require("../datas/testimonials");

router.get("/testimonials", handleFetchTestimonials); 

router.post("/testimonials", handleAddTestimonials);

module.exports = router;
