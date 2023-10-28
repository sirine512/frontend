import React, { useState} from 'react';

function TypeFilter({ onTypeChange }) {
  const [selectedTypes, setSelectedTypes] = useState([]);

    const handleTypeChange = (event) => {
      const type = event.target.value;
      if (event.target.checked) {
        const updatedTypes = [...selectedTypes, type];
        setSelectedTypes(updatedTypes);
        onTypeChange(updatedTypes);
      } else {
        const updatedTypes = selectedTypes.filter((selectedType) => selectedType !== type);
        setSelectedTypes(updatedTypes);
        onTypeChange(updatedTypes); 
      }
    };



  return (
    <div id="typePart">
      <h4>Type</h4>
      <label>
        <input
          type="checkbox"
          value="Villa"
          onChange={handleTypeChange}
        /> Villa
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Apartment"
          onChange={handleTypeChange}
        /> Apartment
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="House"
          onChange={handleTypeChange}
        /> House
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Condo"
          onChange={handleTypeChange}
        /> Condo
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Studio"
          onChange={handleTypeChange}
        /> Studio
      </label>
    </div>
  );
}

export default TypeFilter;
