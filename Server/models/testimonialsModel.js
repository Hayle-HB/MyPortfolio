const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema({
  linkedin: { type: String, required: true },
  telegram: { type: String, required: true },
  email: { type: String, required: true },
  instagram: { type: String, required: true },
});

const testimonySchema = new mongoose.Schema({
  name: { type: String, required: true },
  testimony: { type: String, required: true },
  description: { type: String, required: true },
  socialLink: { type: socialLinkSchema, required: true },
  image: { type: String, required: true },
});

const Testimony = mongoose.model("Testimony", testimonySchema);

module.exports = Testimony;


