import React, { useState, useEffect } from 'react';
import {AiOutlineVerticalAlignTop} from 'react-icons/ai'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to monitor the scroll position
    window.addEventListener('scroll', handleScroll);
    
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Show the button when the user scrolls down 20 pixels from the top
    if (window.scrollY > 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <button
    className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
    onClick={scrollToTop}
    style={{
      display: isVisible ? 'block' : 'none', // Show or hide based on isVisible state
      position: 'fixed',
      bottom: '20px',
      right: '30px',
      zIndex: 99,
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      fontSize: '18px',
      border: '4px solid grey',
      cursor: 'pointer',
      padding: '10px',
    }}
  >
      <AiOutlineVerticalAlignTop/>
    </button>
  );
}


  
export default ScrollToTopButton;
