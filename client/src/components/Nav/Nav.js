import React from "react";
import "./Nav.css";

const Nav = props => (<wrapper className="nav-wrapper">
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">101</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="/about">About
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menus</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Gallery</a>
        </li>
      </ul>
    </div>
  </nav>
</wrapper>);

export default Nav;
