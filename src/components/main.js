import React from "react";
import data from "./data";
import Card from "./Card";

function Main() {
    const cardElement = data.map((item) => {
        return <Card 
              img={item.coverimg}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              location={item.location}
              title={item.title}
              price={item.price}
        />
      })
    return (
        <div>
        <section className="cards-list">
            {cardElement}
        </section>
        </div>
    )
}

export default Main;