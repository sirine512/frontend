import React from "react"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"

function PriceSlider({ onPriceRangeChange }) {
  const [priceRange, setPriceRange] = React.useState([0, 1000000])

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    onPriceRangeChange(newValue); // Call the callback function and pass the updated value
  };

  return (
    <div>
      <Typography id="price-slider" gutterBottom>
        <h4>Price Range</h4>
      </Typography>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="price-slider"
        min={0}
        max={1000000}
      />
      <Typography>
        £{priceRange[0]} - £{priceRange[1]}
      </Typography>
    </div>
  );
}

export default PriceSlider;
