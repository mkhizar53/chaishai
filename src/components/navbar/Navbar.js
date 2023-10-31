import React, { useState } from "react";
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            {/* Logo on the left */}
            <a className="navbar-brand" href="/">
                <img src="logo.png" alt="Logo" style={{ height: '50px', width: '50px' }} />
            </a>

            {/* Toggle button for small screens */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation items */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navvv" href="/about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link cta-button2" href="/reserve">
                            Reserve
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;