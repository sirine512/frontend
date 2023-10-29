import React from 'react'

const LocationFilter = () => {
  return (
    <>
     <label id="locations">
          Locations
          <select
            name="location"
            // value={.location}
            // onChange={handleChange}
          >
            <option value="location">
              <input type="checkbox"></input>
            </option>
          </select>
        </label>
    </>
  )
}

export default LocationFilter