import React from "react";
import logo from "./logo.png";
function Card(props) {
  return (
    <div className="card">
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="new-window"
      >
        <span class="material-icons new">open_in_new</span>
      </a>
      <div className="info">
        <img src={logo} alt="logo" />
        <div className="project">
          <h3>{props.name}</h3>
        </div>
      </div>
      <div className="desc">
        <p>{props.desc}</p>
      </div>
      <div className="category">
        <span>Created at {props.date}</span>
      </div>
    </div>
  );
}

export default Card;
