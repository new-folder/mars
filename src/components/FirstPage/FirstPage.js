import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css';

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="first-page" onClick={() => navigate('/second-page')}>
      <div className="background-container">
        <img 
          src="img/first-background.jpg" 
          alt="Background" 
          className="background-image"
        />
      </div>
      <img 
        src="img/name.svg" 
        alt="Logo" 
        className="first-name"
      />
    </div>
  );
};

export default FirstPage;