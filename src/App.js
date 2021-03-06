import React, { Component } from 'react';
import './App.css';
import DisplayReservations from './DisplayReservations';
import ReservationForm from './ReservationForm'

class App extends Component {
  constructor() {
    super()

    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(result => this.setState({ reservations: [...result] }))
      .catch(error => console.log(error.message))
  }

  makeReservation = (reservation) => {
    const fullReservation = {...reservation, number: this.state.reservations.length + 1}
    this.setState({ reservations: [...this.state.reservations, fullReservation] })
    console.log(fullReservation)
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(fullReservation),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .catch(error => console.log(error.message)) 
  }

  fetchUpdatedReservations = () => {
    console.log('fetch complete')
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(result => this.setState({ reservations: [...result] }))
      .catch(error => console.log(error.message))
  }

  deleteReservation = (id) => {
    const reservations = this.state.reservations.filter(reservation => {
      return reservation.id !== id
    })
    this.setState({ reservations })
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationForm makeReservation={ this.makeReservation }/>
          <DisplayReservations reservations={ this.state.reservations } deleteReservation={ this.deleteReservation }/>
        </div>
      </div>
    )
  }
}

export default App;
