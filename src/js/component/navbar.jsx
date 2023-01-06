import React from "react";

const Navbar = () => {
    return (
       
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">Start Boostrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <form className="d-flex">
      <div className="collapse navbar-collapse" id="navbarDark">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
            <a className="nav-link text-light" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Services</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Contact
            </a>
          </li>
        </ul>
        
      </div>
      </form>
    </div>
  </nav>
    )
}

export default Navbar;