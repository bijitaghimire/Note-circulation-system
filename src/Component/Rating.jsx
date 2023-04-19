import React, { useState } from 'react'
// import PropTypes from 'prop-types';
// import {fontAwesomeIcon} from "@fontawesome/react-fontawesome";
import '../Styles/Rating.css';


const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    
    return (
      <div className=" d-flex p-2 ">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= ((rating && hover) || hover) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

 export default Rating
