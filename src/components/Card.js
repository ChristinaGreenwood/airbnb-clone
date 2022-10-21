import React from "react";

function Card(props) {
    console.log(props.openSpots)
    let bagdeText 
    if (props.openSpots === 0) {
        bagdeText= "SOLD OUT"
    } else if (props.location === "online") {
        bagdeText = "online"
    }
    return (
        <div className="card">
            {bagdeText && <div className="card--badge">{bagdeText}</div>}
            <img src="src/images/katie-zaferes.png" className="card--image" />
            <div className="card--stats">
                <img src="src/images/star.png" className="card--star" />
                <span>{props.stats.rating}</span> 
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
export default Card;