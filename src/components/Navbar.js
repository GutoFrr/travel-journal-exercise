import React from 'react';
import {ReactComponent as Mundinho} from "../images/mundinho.svg";

function Navbar() {
  return (
      <nav className="nav--container">
          {/* <img className="nav--image" src={require("../images/mundinho.svg")}></img> */}
          <Mundinho className="nav--image" />
          <h1 className="nav--title">my travel journal.</h1>
      </nav>
  );
}

export default Navbar;
