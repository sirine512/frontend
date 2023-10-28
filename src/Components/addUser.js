import React, { useState } from "react";
import axios from "axios";
import "../Style/style.css";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
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
        "http://localhost:3000/users/add",
        formData
      );
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="registration">
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit} className="registrationForm">
        <label id="regLabel">
          Username
          <br />
          <input
            type="text"
            name="name"
            placeholder="Type Your Name..."
            value={formData.name}
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
          Password <br />
          <input
            type="password"
            name="password"
            placeholder="Type Your Password..."
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label id="regLabel">
          User role {'  '}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            id="role"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </label>
        <br />
        <button type="submit" id="logBtn">
          Register
        </button>
      </form>
    </div>
  );
};

export default AddUser;
