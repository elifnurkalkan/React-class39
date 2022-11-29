import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
    </div>
  );
}
