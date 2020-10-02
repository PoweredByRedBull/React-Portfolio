import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='img/block.png' label='Game' path='/services' />
            <CardItem path='/services' />
            <CardItem path='/services' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
