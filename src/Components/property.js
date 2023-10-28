import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Property = (property) => {
    console.log(property)
  return (
    <div className="searchLink">
                    <div className="searchResult">
                        <img src={property.imgUrl}/>
                        <div id="searchContent">
                        <h4><FontAwesomeIcon icon={faLocationDot} /> {property.location}</h4>
                        <h5>{property.type} for {property.functionality}</h5>
                          <p>{property.description}</p>
                        </div>
                    </div>
                    </div>
  )
}

export default Property