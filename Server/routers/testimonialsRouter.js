const { Router } = require("express");
const {
  handleFetchTestimonials,
  handleAddTestimonials,
} = require("../controllers/testimonialsController");
const router = Router();
const testimonials = require("../datas/testimonials");
const upload = require("../controllers/ImageUploader/upload");

router.get("/file", handleFetchTestimonials);

router.post("/file", upload.single('file'),  handleAddTestimonials);

module.exports = router;
