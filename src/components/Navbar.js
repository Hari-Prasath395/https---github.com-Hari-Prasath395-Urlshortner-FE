import React from 'react';
import { RiLogoutCircleLine, RiFileList2Line, RiDashboardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success text-white">
      <div className="container">
        <Link className="navbar-brand" to="/urlshortner">URL Shortener</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/urls">
                <RiFileList2Line className="me-1" />
                List URLs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <RiDashboardLine className="me-1" />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <RiLogoutCircleLine className="me-1" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
