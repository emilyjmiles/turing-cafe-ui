import React from "react";
import './Card.css';

const Card = ({ id, name, date, time, number, cancelReservation }) => {
  return (
    <section className="single-card">
      <h2>{ name }</h2>
      <p>{ date }</p>
      <p>{ time } pm</p>
      <p>Number of Guests: { number }</p>
      <button onClick={ () => cancelReservation(id) }>Cancel</button>
    </section>
  );

};

export default Card;