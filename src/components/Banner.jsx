import React from "react";

function Banner(props) {
  return (
    <div className="banner">
      <h1 className="banner-text">{props.title}</h1>
      <p>Shaheersystems all repos here.</p>
    </div>
  );
}

export default Banner;
