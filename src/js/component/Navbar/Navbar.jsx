import React from "react";
import PageLink from "./Screen.jsx";

const Navbar = () =>  {
    return (<nav className="navbar navbar-expand-sm bg-secondary d-flex justify-content-between">
    <div className="container-fluid">
      <div className="col d-flex justify-content-between">
        <a className="navbar-brand text-white" href="#">Start Boostrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse col justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <PageLink pageName="Home" state="active text-white"/>
          <PageLink pageName="About" state="" />
          <PageLink pageName="Services" state="" />
          <PageLink pageName="Contact" state="" />
        </ul>
      </div>
    </div>
  </nav>
 
)};

export default Navbar;