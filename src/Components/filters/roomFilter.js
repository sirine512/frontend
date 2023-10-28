import React, { useState } from 'react';

const RoomFilter = ({ onNumberChange }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleNumberChange = (event) => {
    const nbr = event.target.value;
    if (event.target.checked) {
      const updatedNumbers = [...selectedNumbers, nbr];
      setSelectedNumbers(updatedNumbers);
      onNumberChange(updatedNumbers);
    } else {
      const updatedNumbers = selectedNumbers.filter((selectedNumber) => selectedNumber !== nbr);
      setSelectedNumbers(updatedNumbers);
      onNumberChange(updatedNumbers); 
    }
  };

  return (
    <>
      <div id="roomNumber">
        <h4>Number of Rooms</h4>
        <label>
          <input
            type="checkbox"
            value="1"
            onChange={handleNumberChange}
          />{' '}
          1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="2"
            onChange={handleNumberChange}
          />{' '}
          2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="3"
            onChange={handleNumberChange}
          />{' '}
          3
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="+4"
            onChange={handleNumberChange}
          />{' '}
          +4
        </label>
      </div>
    </>
  );
};

export default RoomFilter;
