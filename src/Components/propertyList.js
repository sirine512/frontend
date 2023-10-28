import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropertyDetail from "./propertyDetails";



const PropertyList = ({ property }) => {
  return (
    <>
      <div className="propertyCard">
        <img src={property.imgUrl} />
        <div className="propertyContent">
          <div id="cardContent">
            <div id="type">
              <h2>{property.type}</h2>
              <h3>{property.price} £</h3>
            </div><br />
              <h4><FontAwesomeIcon icon={faLocationDot} /> {property.location}</h4>
            

            <p>{property.description}</p>

            <Link to={`/property/${property._id}`} id="viewMore">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyList;
