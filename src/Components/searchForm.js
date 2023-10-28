
import{BsSearch} from "react-icons/bs"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"


const SearchForm = () => {
    const [result,setResult] = useState([])
    const [query,setQuery]=useState("")
    useEffect(()=>{
        const search = async ()=>{
            try {
                if (!query.trim()) {
                    setResult([])
                }
                const resSearch = await axios.get("http://localhost:3000/properties/search",{params : {query:query, limit:5}})
          setResult(resSearch.data.data)
          console.log(resSearch)
            } catch (error) {
                console.log(error)
            }
        }

search( )
    },[query])
  return (
    <>
    <form   id="search">
    <button id="search-btn"><BsSearch/></button>
    <input
      type="text"
      placeholder="Enter Your Location..."
    //   value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <div> 
        {result && result.length > 0 &&(
            <div> 
                {result.map(property =>(
                    <Link className="searchLink" to={`/property/${property._id}`} key={property._id}>
                    <div className="searchResult">
                        <img src={property.imgUrl}/>
                        <div id="searchContent">
                        <h4><FontAwesomeIcon icon={faLocationDot} /> {property.location}</h4>
                        <h5>{property.type} for {property.functionality}</h5>
                          <p>{property.description}</p>
                        </div>
                    </div></Link>
                ))}
            </div>
        )}
    </div>
    </form>
    
    </>
  )
}

export default SearchForm