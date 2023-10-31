import React from 'react';
import './Homepage.css'; // Include your styles
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const HomePage = () => {
    return (
        <div className="homepage-container">
          <div className="content">
            <h1>A SIP OF HOME BROUGHT TO YOU </h1>
            <Link to="/reserve">
              <Button className="reserve-button">RESERVE TODAY</Button>
            </Link>
          </div>
        </div>
    );
};

export default HomePage;
