// import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';


const ArrivalSection = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [currentIndex3, setCurrentIndex3] = useState(2);
  const [currentIndex4, setCurrentIndex4] = useState(3);

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
    setCurrentIndex1((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentIndex2((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentIndex3((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentIndex4((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (

     <div style={{display: 'flex', width: '100%' ,justifyContent: 'center', gap: '15px', padding: '15px 0', backgroundColor: '#fff'}}>
<div style={{display: 'flex', width: '90%' ,justifyContent: 'center',gap: '15px',}}>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'center', gap: '15px', color: '#fff', padding: '20px 0'}}>
  
      <div style={{display: 'flex', width: '50%',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', backgroundColor: '#000', }}>

        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex1 * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={{  minWidth: '100%', display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',}}>
               <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px', color: '#fff',}}>
                  <img src={item.image2} alt='iPhone' style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center',}} />
                </div>
              <div style={rowInnerDivStyle}>
             
                  <h1 style={h1_text}>{item.hText}</h1>
                  <div style={shop_now}>
                    <p>{item.shopNow}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      <div style={{display: 'flex', width: '50%',flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', color: '#fff',}}>
      <div style={{display: 'flex',width: '100%', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: '#000'}}>
  
        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex2 * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={carouselItem}>
                <div style={rowInnerDivStyle}>
                
                  <h1 style={h1_text}>{item.hText}</h1>
                  <div style={shop_now}>
                    <p>{item.shopNow}</p>
                  
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
<div style={{display: 'flex',width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '15px',}}>
<div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px', color: '#fff',backgroundColor: '#000'}}>

<div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex3 * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={{  minWidth: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',}}>
                  <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px', color: '#fff',}}>
                  <img src={item.image2} alt='iPhone' style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center',}} />
                </div>
                <div style={rowInnerDivStyle}>
           
                  <h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',color: '#fff',width: '100%',}}>{item.hText}</h1>
                  <div style={shop_now}>
                    <p>{item.shopNow}</p>
                   
                  </div>
                </div>
              
              </div>
            ))}
       
        </div>
      </div>
</div>
<div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px', color: '#fff', backgroundColor: '#000'}}>

        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex4 * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={{  minWidth: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',}}>
                  <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px', color: '#fff',}}>
                  <img src={item.image2} alt='iPhone' style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'flex-start',}} />
                </div>
                <div style={rowInnerDivStyle}>
           
                  <h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',color: '#fff',width: '100%',}}>{item.hText}</h1>
                  <div style={shop_now}>
                    <p>{item.shopNow}</p>
                   
                  </div>
                </div>
              
              </div>
            ))}
       
        </div>
      </div>
</div>
</div>
      </div>
    </div>
    </div>
    </div>
  
  );
};

const carouselContainer = {
  width: '70%',
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
  justifyContent: 'center',
  alignItems: 'center'
};

const rowInnerDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
//   alignItems: 'center',
  gap: '25px',
  color: 'white',
  padding: '25px',
  width: '100%'
};

const h1_text = {
  fontFamily: 'Poppins',
  fontSize: '30px',
  fontWeight: '600',
  lineHeight: '50px',
  color: '#fff',
  width: '100%',

  
};

const shop_now = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fontFamily: 'Poppins',
  fontSize: '15px',
  fontWeight: '400',
  color: '#FAFAFA',
  gap: '15px',
};

const heroImage = {
  maxWidth: '100%',
  height: 'auto',
};

export default ArrivalSection;
