import React from 'react';
import './card.css'

const Card = ({ name, date, time, number, id, deleteReservation }) => {
  return(
    <article className="reservation-card">
      <h3>{ name }</h3>
      <h4>{ date }</h4>
      <h4>{ time }</h4>
      <h4>Number of guests: { number }</h4>
      <button onClick={ () => deleteReservation(id) }>Delete Reservation</button>
    </article>
  )
}

export default Card;