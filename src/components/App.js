import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Rotation from './rotation/Rotation';
import Aircrafts from './aircrafts/Aircrafts';
import Flights from './flights/Flights';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <section className="app__content">
          <Aircrafts></Aircrafts>
          <Rotation></Rotation>
          <Flights></Flights>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
