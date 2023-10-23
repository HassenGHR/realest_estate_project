import React, { useState } from "react";
import "../components/main.scss";
import "./addedListing.scss";

const AddedListing = () => {
  const [formData, setFormData] = useState({
    realtor: 1, // Set the realtor ID to an existing ID
    slug: "sample-slug",
    name:"jon Dow",
    title: "Sample Listing Title",
    address: "123 Sample St",
    city: "Sample City",
    state: "Sample State",
    description: "This is a sample listing description.",
    sale_type: "For Sale", // Options: "For Sale" or "For Rent"
    price: 100000, // Set the price to your desired value
    home_type: "House", // Options: "House", "Apartment", "Studio", "Villa", or "Land"
    photo_main: "",
    photo_1: "",
    photo_2: "",
    photo_3: "",
    photo_4: "",
    list_date: new Date().toISOString(), // Default value (current date)
  });

  // Handle file input changes
  const handleFileChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];

    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append("image", file);

    // Send the image to the server using an API (e.g., axios or fetch)
    // Replace 'your-upload-api-endpoint' with your actual API endpoint for uploading images
    fetch("your-upload-api-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the corresponding image URL in the state
        setFormData({ ...formData, [name]: data.image_url });
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="addedListing">
      <div className="listing-form">
        <h2>Create a New Listing</h2>
        <form onSubmit={handleSubmit}>
        <div className="secContent">
            <label htmlFor="title" className="custom-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="secContent">
            <label htmlFor="title" className="custom-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="secContent">
            <label htmlFor="address" className="custom-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="secContent">
            <label htmlFor="city" className="custom-label">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="secContent">
            <label htmlFor="state" className="custom-label">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="secContent">
            <label htmlFor="description" className="custom-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="secContent">
            <label htmlFor="sale_type" className="custom-label">
              Sale Type
            </label>
            <select
              id="sale_type"
              name="sale_type"
              value={formData.sale_type}
              onChange={handleChange}
              required
            >
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
          <div className="secContent">
            <label htmlFor="price" className="custom-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="secContent">
            <label htmlFor="home_type" className="custom-label">
              Home Type
            </label>
            <select
              id="home_type"
              name="home_type"
              value={formData.home_type}
              onChange={handleChange}
              required
            >
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="Villa">Villa</option>
              <option value="Land">Land</option>
            </select>
          </div>
          <div className="secContent">
            <label htmlFor="photo_main" className="custom-label">
              Main Photo
            </label>
            <input
              type="file"
              id="photo_main"
              name="photo_main"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
          </div>
          <div className="secContent">
            <label htmlFor="photo_1" className="custom-label">
              Photo 1
            </label>
            <input
              type="file"
              id="photo_1"
              name="photo_1"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className="secContent">
            <label htmlFor="photo_2" className="custom-label">
              Photo 2
            </label>
            <input
              type="file"
              id="photo_2"
              name="photo_2"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className="secContent">
            <label htmlFor="photo_3" className="custom-label">
              Photo 3
            </label>
            <input
              type="file"
              id="photo_3"
              name="photo_3"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className="secContent">
            <label htmlFor="photo_4" className="custom-label">
              Photo 4
            </label>
            <input
              type="file"
              id="photo_4"
              name="photo_4"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <button type="submit">Create Listing</button>
        </form>
      </div>
    </div>
  );
};

export default AddedListing;
