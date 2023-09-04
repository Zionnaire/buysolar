// import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';


const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    // Add your carousel items here
    {
     
      image1: "/images/AppleLogo.png",
      image2: "/images/Herobg.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/batt.png",
      pText: "iPhone 14 Series",
       hText: "Up to 10% off Voucher",
       shopNow: "Shop Now",
       icon: <BsArrowRight />
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/battery.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/Mono-Solar-Panel.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/Herobg.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div style={heroSectionStyle}>
      <div style={leftDivStyle}>
        {/* Left content */}
        <div style={leftDivStyle}>
         <ul style={columnListStyle}>
           <li style={clickableItemStyle}>Panels</li>
           <li style={clickableItemStyle}>Battery</li>
           <li style={clickableItemStyle}>Charge Controller</li>
           <li style={clickableItemStyle}>Solar Electronics</li>
           <li style={clickableItemStyle}>Cables</li>
         </ul>
      </div>
      </div>
      <div style={rightDivStyle}>
        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={carouselItem}>
                <div style={rowInnerDivStyle}>
                  <div style={apple}>
                    <img src={item.image1} style={appleLogo} alt='' />
                    <p style={p_text}>{item.pText}</p>
                  </div>
                  <h1 style={h1_text}>{item.hText}</h1>
                  <div style={shop_now}>
                    <p>{item.shopNow}</p>
                    <div>{item.icon}</div>
                  </div>
                </div>
                <div style={rowInnerDivStyle}>
                  <img src={item.image2} alt='iPhone' style={heroImage} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const carouselContainer = {
  width: '100%',
  overflow: 'hidden',
  
};

const carousel = {
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
  
};

const carouselItem = {
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const heroSectionStyle = {
  backgroundColor: '#fff',
  color: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 5%',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  width: '100%',
  gap: '30px'
};

const leftDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  // width: '40%',
  backgroundColor: 'white',
  gap: '20px'
};

const columnListStyle = {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
  gap: '10px',
  whiteSpace: 'nowrap',
};

const clickableItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'ceneter',
  padding: '15px',
  cursor: 'pointer',
  gap: '15px',
  // textAlign: 'center',
  fontSize: '20px',
  borderRight: '1px solid #ccc',
   width: '100%',
   border: '1px solid white',
   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
};

const rightDivStyle = {
  backgroundImage: "url('/images/buysolar.png')", // Add this line
  backgroundSize: 'cover', // Add this line for image covering  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '75%',
  boxShadow: '5px 2px 4px #fff',
  borderRadius: '20px',
  padding: '25px'
};

const rowDivStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 5% 10px',
  
};

const rowInnerDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '25px',
  color: 'white',
  padding: '25px',
  width: '50%'
};

const apple = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

const appleLogo = {
  display: 'flex',
  justifyContent: 'flexStart',
};

const p_text = {
  fontFamily: 'Poppins',
  fontSize: '15px',
  fontWeight: '400',
  color: '#FAFAFA',
  lineHeight: '30px',
};

const h1_text = {
  fontFamily: 'Poppins',
  fontSize: '36px',
  fontWeight: '600',
  lineHeight: '50px',
  color: '#fff',
  width: '65%',
  
};

const shop_now = {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Poppins',
  fontSize: '15px',
  fontWeight: '400',
  color: '#FAFAFA',
  lineHeight: '30px',
  gap: '15px',
  textDecoration: 'line' 
};

const heroImage = {
  maxWidth: '60%',
  height: 'auto',
};

export default HeroSection;
