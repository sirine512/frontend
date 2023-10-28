import axios from 'axios';
import React, { useState } from 'react'

const Reserve = ({id}) => {
    const [formData, setFormData] = useState({
        sender: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          console.log(JSON.stringify(formData));
          const response = await axios.post(
            "http://localhost:3000/contact/reserve",
            formData
          );
        } catch (error) {
          console.log("Error", error);
        }
      };
    
      return (
        <>
        <div className="registration">
          <h1>Reserve Now</h1>
          <form onSubmit={handleSubmit} className="registrationForm">
            <label id="regLabel">
              Username
              <br />
              <input
                type="text"
                name="sender"
                placeholder="Type Your Name..."
                value={formData.sender}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label id="regLabel">
              Email <br />
              <input
                type="email"
                name="email"
                placeholder="Type Your E-mail..."
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label id="regLabel">
              Message <br />
              <input
                type="text"
                name="message"
                placeholder="Type Your Message..."
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            
            <br />
            <button type="submit" id="logBtn">
              Reserve
            </button>
          </form>
        </div>
    </>
  );
}

export default Reserve