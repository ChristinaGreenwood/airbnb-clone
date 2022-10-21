import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Card from './Card';
import data from './data';

export default class App extends Component {
  render() {
    const cards = data.map(item => {
      return (
        <Card 
          key={item.id}
          {...item}
          // img={item.coverimg}
          // rating={item.stats.rating}
          // reviewCount={item.stats.reviewCount}
          // location={item.location}
          // title={item.title}
          // price={item.price}
          // openSpots={item.openSpots}
        />
      )
  })   
    return (
      <div className='app'>
        <NavBar />
        <div className='center'>
        <Hero />
        <section className="cards-list">
                {cards}
          </section>
          </div>
        </div>
    );
  }
}