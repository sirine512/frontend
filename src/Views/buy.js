import React, { useEffect, useState } from "react";
import PropertyList from "../Components/propertyList";
import axios from "axios";
import "../Style/style.css";
import Footer from "../Components/footer";
import PriceSlider from "../Components/filters/priceSlider";
import RoomFilter from "../Components/filters/roomFilter";
import TypeFilter from "../Components/filters/typeFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const Buy = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const buyingData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/properties/buy");
        setProperties(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    buyingData();
  }, []);

  const [filters, setFilters] = useState({
    types: [],
    priceRange: [0, 1000000],
    numberOfRooms: [],
  });

  const applyFilters = async () => {
    try {
      const response = await axios.post("http://localhost:3000/properties/buy/filter", filters);
      setProperties(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <div className="allContent">
        <div className="filter">
          <h2 id="filter-title"><FontAwesomeIcon icon={faSliders} />{'  '}Filters</h2>
          <PriceSlider
            onPriceRangeChange={(priceRange) => {
              setFilters({ ...filters, priceRange });
            }}
          />
          <TypeFilter
            onTypeChange={(types) => {
              setFilters({ ...filters, types });
              console.log(types)
            }}
          />
          <RoomFilter
            onNumberChange={(numberOfRooms) => {
              setFilters({ ...filters, numberOfRooms });
              console.log(numberOfRooms)
            }}
          />
          <button onClick={applyFilters}>Apply Filters</button>
        </div>

        <div className="cards">
          {properties.map((property, i) => (
            <PropertyList key={i} property={property} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Buy;
