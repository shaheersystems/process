import React from "react";

function Banner(props) {
  return (
    <div className="banner">
      <h1 className="banner-text">{props.title}</h1>
      <p>Process is here to make your process of project tracking easy.</p>
    </div>
  );
}

export default Banner;
