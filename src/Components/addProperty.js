import axios from 'axios';
import React, { useState } from 'react';

const AddProperty = () => {
  const [propertyData, setPropertyData] = useState({
    type: '',
    functionality: '',
    location: '',
    price: '',
    roomNumber: '',
    description: '',
    imgUrl: '',
    _id: 'objectId'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPropertyData({ ...propertyData, [name]: value })
  };

  const handleSubmit = async (e)  => {
    e.preventDefault();
    try {
        console.log(JSON.stringify(propertyData));
        const response = await axios.post(
          "http://localhost:3000/properties/add",
         propertyData
        );
      } catch (error) {
        console.log("Error", error);
      }
  };

  return (
    <>
    <div className='addProperty'>
        <h1>Add Your Home</h1>
    <form onSubmit={handleSubmit} className='propertyForm'>
      <div>
      <input
        type="text"
        name="type"
        value={propertyData.type}
        onChange={handleInputChange}
        placeholder="Type"
        required
      />
       <input
        type="text"
        name="functionality"
        value={propertyData.functionality}
        onChange={handleInputChange}
        placeholder="Renting or Selling"
        required
      />
       <input
        type="text"
        name="location"
        value={propertyData.location}
        onChange={handleInputChange}
        placeholder="Location"
        required
      />
      <input
        type="number"
        name="price"
        value={propertyData.price}
        onChange={handleInputChange}
        placeholder="Price"
        required
      />
       <input
        type="number"
        name="roomNumber"
        value={propertyData.roomNumber}
        onChange={handleInputChange}
        placeholder="Number of rooms"
        required
      />
       <input
        type="text"
        name="description"
        value={propertyData.description}
        onChange={handleInputChange}
        placeholder="Add a description "
        required
      />
       <input
        type="url"
        name="imgUrl"
        value={propertyData.imgUrl}
        onChange={handleInputChange}
        placeholder="Enter The URL's Image "
        required
      />
      </div>
      <button type="submit" id='addBtn'>Publish</button>
    </form>
    </div></>
  );
};

export default AddProperty;
