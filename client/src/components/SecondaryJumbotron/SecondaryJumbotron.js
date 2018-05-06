import React from "react";
import "./SecondaryJumbotron.css";

const SecondaryJumbotron = props => (
  <div className="jumbotron fluid text-center" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
    {props.children}
</div>);

export default SecondaryJumbotron;
