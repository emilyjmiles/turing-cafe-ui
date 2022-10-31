import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

class App extends Component {
  constructor () {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }));
  }

  addReservation = newResy => {
    this.setState({ reservations: [...this.state.reservations, newResy] });
  };

  cancelReservation = id => {
    const filteredResys = this.state.reservations.filter(resy => resy.id !== id);

    this.setState({ reservations: filteredResys });
  };

  render() {
    return (
      <div className="App" data-cy='App'>
        <h1 className='app-title' data-cy='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form' data-cy='resy-form'>
          <Form addReservation={ this.addReservation } />
        </div>
        <div className='resy-container' data-cy='resy-container'>
          <Reservations reservations={ this.state.reservations } cancelReservation={ this.cancelReservation } />
        </div>
      </div>
    );
  }
}

export default App;
