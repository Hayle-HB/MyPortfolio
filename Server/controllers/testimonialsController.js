const uploadImage = require("../controllers/ImageUploader/uploadImage");
const Testimony = require("../models/testimonialsModel");
const path = require("path");

module.exports.handleFetchTestimonials = async (req, res) => {
  // try {
  //   const testimonials = await Testimony.find();
  //   res.status(200).send(testimonials);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send("unable to fetch the data");
  // }

  const filePath = path.join(__dirname, "../../../Demo/views/index.html"); // Update path as needed
  res.sendFile(filePath);
};

module.exports.handleAddTestimonials = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const { url, error } = await uploadImage(req.file);

    if (error) {
      console.error("Error uploading to Cloudinary:", error);
      return res.status(500).json({ error: "Failed to upload image" });
    }

    const {
      name,
      testimony,
      description,
      linkedin,
      telegram,
      email,
      instagram,
    } = req.body;

    const testimonyData = {
      name,
      testimony,
      description,
      socialLinks: {
        linkedin,
        telegram,
        email,
        instagram,
      },
      image: url,
    };

    const newTestimony = await Testimony.create(testimonyData);
    return res.status(200).json(newTestimony); // Return response here
  } catch (error) {
    console.error("Error handling testimony:", error);
    return res.status(500).json({
      error: "Server error occurred while processing the testimonial",
    });
  }
};
