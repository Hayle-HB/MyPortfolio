const Testimony = require("../models/testimonialsModel");

module.exports.handleFetchTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimony.find();
    res.status(200).send(testimonials);
  } catch (err) {
    console.log(err);
    res.status(500).send("unable to fetch the data");
  }
};
 
module.exports.handleAddTestimonials = async (req, res) => {
  const { name, testimony, description, socialLink, image } = req.body;

  try {
    const newTestimony = await Testimony.create({
      name,
      testimony,
      description,
      socialLink,
      image,
    });
    res.status(200).send(newTestimony);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to create the user");
  }
};
