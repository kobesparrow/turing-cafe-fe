import React, { Component } from 'react';
import './ReservationForm.css'

class ReservationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makeReservation(this.state)
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name='name'
            value = { this.state.name }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            placeholder="Date (mm/dd)"
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Time"
            name='time'
            value={this.state.time}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Number of guests"
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button>Make Reservation</button>
        </form>
      </div>
    )
  }
}

export default ReservationForm;