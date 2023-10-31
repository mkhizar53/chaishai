import React from 'react';
import './Homepage.css'; // Include your styles
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage-container">
          <div className="content">
            <h1>A SIP OF HOME BROUGHT TO YOU </h1>
            <Link to="/reserve">
              <button className="reserve-button">RESERVE TODAY</button>
            </Link>
          </div>
        </div>
    );
};

export default HomePage;
