import React from "react";
import "./AddTesimony.css";
const img = "C:\\Users\\HP\\Downloads\\night.gif";
const AddTestimony = () => {
  return (
    <div className="addTestimony-container">
      <form id="upload-form">
        <div className="form-group">
          <input type="text" name="name" placeholder=" " required />
          <label htmlFor="name">Enter your name</label>
        </div>

        <div className="form-group">
          <textarea name="testimony" placeholder=" " required></textarea>
          <label htmlFor="testimony">Testimony</label>
        </div>

        <div className="form-group">
          <textarea name="description" placeholder=" " required></textarea>
          <label htmlFor="description"></label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="socialLink[linkedin]"
            placeholder=" "
            required
          />
          <label htmlFor="socialLink[linkedin]">LinkedIn URL</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="socialLink[telegram]"
            placeholder=" "
            required
          />
          <label htmlFor="socialLink[telegram]">Telegram URL</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="socialLink[email]"
            placeholder=" "
            required
          />
          <label htmlFor="socialLink[email]">Email address</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="socialLink[instagram]"
            placeholder=" "
            required
          />
          <label htmlFor="socialLink[instagram]">Instagram URL</label>
        </div>

        <div className="form-group">
          <input type="file" name="file" required />
          <label htmlFor="file">Upload Profile Picture</label>
        </div>

        <button type="submit">Submit Testimonial</button>
      </form>
    </div>
  );
};

export default AddTestimony;
