import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navGuide">
      <div className="navButton">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/visit">Find Us</Link>
        <Link to="/beersbeersbeers">Beer</Link>
        <Link to="/learn">Learn</Link>
      </div>
    </nav>
  );
}

export default Nav;
