import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron fluid text-center" id="jumbotronMain" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
    {props.children}
  </div>);

export default Jumbotron;
