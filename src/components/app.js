import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Card from './Card';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
       <Hero />
       <Card />
      </div>
    );
  }
}