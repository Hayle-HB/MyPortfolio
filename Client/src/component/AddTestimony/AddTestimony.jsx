import React, { useState } from "react";
import "./AddTesimony.css";
const AddTestimony = () => {
  const [formData, setFormData] = useState({
    name: "",
    testimony: "",
    description: "",
    socialLink: {
      linkedin: "",
      telegram: "",
      email: "",
      instagram: "",
    },
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("socialLink")) {
      const socialField = name.split("[")[1].slice(0, -1);
      setFormData((prevData) => ({
        ...prevData,
        socialLink: {
          ...prevData.socialLink,
          [socialField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file uploads and other form data
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("testimony", formData.testimony);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("linkedin", formData.socialLink.linkedin);
    formDataToSend.append("telegram", formData.socialLink.telegram);
    formDataToSend.append("email", formData.socialLink.email);
    formDataToSend.append("instagram", formData.socialLink.instagram);
    formDataToSend.append("image", 'formData.image'); // Append image file
    console.log(formData.image);
    try {
      const response = await fetch("http://localhost:3000/api/testimonials", {
        method: "POST",
        body: formDataToSend, // FormData includes the file and other inputs
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Testimonial submitted successfully:", data);
      } else {
        console.error("Error submitting testimonial:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="addTestimony-container">
      <h1>Add Testimonials about ME</h1>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                onChange={handleInputChange}
              />
              <br />
              <textarea
                id="testimony"
                name="testimony"
                rows="4"
                placeholder="Write your testimony in at most 15 words"
                required
                onChange={handleInputChange}
              ></textarea>
              <br />
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Provide more description"
                required
                onChange={handleInputChange}
              ></textarea>
              <br />
            </div>

            <div className="form-column">
              <h3>Social Links</h3>
              <input
                type="url"
                id="linkedin"
                name="socialLink[linkedin]"
                placeholder="LinkedIn URL"
                required
                onChange={handleInputChange}
              />
              <br />
              <input
                type="url"
                id="telegram"
                name="socialLink[telegram]"
                placeholder="Telegram URL"
                required
                onChange={handleInputChange}
              />
              <br />
              <input
                type="email"
                id="email"
                name="socialLink[email]"
                placeholder="Email address"
                required
                onChange={handleInputChange}
              />
              <br />
              <input
                type="url"
                id="instagram"
                name="socialLink[instagram]"
                placeholder="Instagram URL"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="drag-drop-img">
            <label>Profile Picture</label>
            <input
              type="file"
              id="image"
              name="image"
              required
              onChange={handleImageChange}
            />
            <br />
          </div>
          <button type="submit">Submit Testimonial</button>
        </form>
      </div>
    </div>
  );
};

export default AddTestimony;
