import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li>
        <Link className='card-link' to={props.path}>
          <img className='card-image' src={props.src} alt='Project Image' />
        </Link>
      </li>
    </>
  );
}

export default CardItem;
