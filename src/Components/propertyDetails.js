import { faBed, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reserve from "./reserve";

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const details = async () => {
      try {
        if (!id.trim()) {
          setProperties([]);
        }
        const res = await axios.get(
          `http://localhost:3000/properties/byid/${id}`
        );
        setProperties(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    details();
  }, [id]);
  console.log(properties);
  return (
    <>
      <div className="propDetails">
        <div className="details">
          <img src={properties.imgUrl}></img>
          <div id="detailsContent">
            <h1>
              {properties.type} for {properties.functionality}
            </h1>
            <h3>{properties.price} £</h3>
            <h4>
              <FontAwesomeIcon icon={faLocationDot} /> {properties.location}
            </h4>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faBed} /> {properties.roomNumber}{" "}
              Bedroom(s)
            </h4>

            <p>{properties.description}</p>
          </div>
        </div>
        <div className="reserve">
        <Reserve id={properties._id}/>

        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
