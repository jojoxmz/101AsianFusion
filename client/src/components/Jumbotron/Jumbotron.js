import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron fluid text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
</div>);

export default Jumbotron;
