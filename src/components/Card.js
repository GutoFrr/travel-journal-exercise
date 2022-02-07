import React from "react";
import {ReactComponent as Gotinha} from "../images/gotinha.svg";

function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={require(`../images/${props.image}`)}></img>
      <div className="card--details">
        <div className="card--location">
          <Gotinha className="location-mark" />
          <p className="card--country">{props.country}</p>
          <a className="card--link" href={props.link} target='_blank' >
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <p className="card--date">{props.date}</p>
        <p className="card--description" /* style={{maxWidth: props.maxWidth}} */ >{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
