import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css';

// Lazy load
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isLoaded) {
          // Загрузка для SecondPage
          if (src.includes('first-background')) {
            const secondPageImg = new Image();
            secondPageImg.src = src.replace('first-background', 'second-background');
          }
          
          // Загружаем текущее изображение
          const img = new Image();
          img.src = src;
          img.onload = () => setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01
    });

    const currentRef = imgRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [src, isLoaded]);

  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : ''}
      alt={alt}
      className={className}
      loading="lazy" 
    />
  );
};

// Загрузка для SecondPage
const usePreloadSecondPageImages = () => {
  useEffect(() => {
    const secondPageImages = [
      'img/panorama.jpg',
    ];

    secondPageImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
};

const FirstPage = () => {
  const navigate = useNavigate();
  usePreloadSecondPageImages(); 

  return (
    <div className="first-page" onClick={() => navigate('/second-page')}>
      <div className="background-container">
        <LazyImage 
          src="img/first-background.jpg" 
          alt="Background" 
          className="background-image"
        />
      </div>
      <LazyImage 
        src="img/name.png" 
        alt="Logo" 
        className={`first-name fade-animation`}
      />
    </div>
  );
};

export default FirstPage;