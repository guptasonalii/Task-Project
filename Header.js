import React from 'react';
import '../Style.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container ps-auto">
          <a class="navbar-brand" href="#">
        Logo
        </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-toggle2-on"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#new-arrivals">New Arrivals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#deal">Deal of the day</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
