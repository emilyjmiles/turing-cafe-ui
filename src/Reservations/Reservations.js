import React from "react";
import './Reservations.css';
import Card from "../Card/Card";

const Reservations = ({ reservations, cancelReservation }) => {
  const resyCard = reservations.map(resy => {
    return (
      <Card
        key={ resy.id }
        id={ resy.id }
        name={ resy.name }
        date={ resy.date }
        time={ resy.time }
        number={ resy.number }
        cancelReservation={ cancelReservation }
      />
    );
  });

  return (
    <section className='resy-cards'>
      { resyCard }
    </section>
  );
};

export default Reservations;