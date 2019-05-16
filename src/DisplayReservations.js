import React from 'react';
import Card from './Card'
import './DisplayReservations.css';

const DisplayReservations = (props) => {

  let reservationCards = props.reservations.map(reservation => {
    return <Card {...reservation} key={ reservation.id } deleteReservation={ props.deleteReservation }/>
  })

  return(
    <section className="reservation-container">
      {reservationCards}
    </section>
  )

}

export default DisplayReservations