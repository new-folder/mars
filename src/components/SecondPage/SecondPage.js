import React, { useState, useEffect } from 'react';
import './SecondPage.css';

const SecondPage = () => {
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  useEffect(() => {
    const updateBackground = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      
      // Рассчитываем позицию фона в зависимости от времени суток
      const totalMinutes = hours * 60 + minutes;
      const position = Math.floor((totalMinutes / 1440) * 4096);
      setBackgroundPosition(position);
    };

    // Обновляем сразу при загрузке
    updateBackground();
    
    // Обновляем каждую минуту
    const interval = setInterval(updateBackground, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="second-page" >
      <div 
        className="time-background"
        style={{ backgroundPositionX: -backgroundPosition }}
      >
        <div className="kosmodrom-container dynamic-scaling">
          <div className="kosmodrom-grid">
            <div className="kosmodrom-element kosmodrom-1"></div>
            <div className="kosmodrom-element kosmodrom-2"></div>
            <div className="kosmodrom-element kosmodrom-3"></div>
            <div className="kosmodrom-element kosmodrom-4"></div>
            <div className="kosmodrom-element kosmodrom-5"></div>
            <div className="kosmodrom-element kosmodrom-6"></div>
            <div className="kosmodrom-element kosmodrom-7"></div>
            <div className="kosmodrom-element center"></div>
            <div className="kosmodrom-element road-1"></div>
            <div className="kosmodrom-element road-2"></div>
            <div className="kosmodrom-element road-3"></div>
            <div className="kosmodrom-element road-4"></div>
            <div className="kosmodrom-element road-5"></div>
            <div className="kosmodrom-element road-6"></div>
            <div className="kosmodrom-element road-7"></div>
          </div>
        </div>
      </div>
            
    </div>
  );
};

export default SecondPage;