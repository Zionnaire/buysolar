import React, { useState, useEffect } from 'react';

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      image2: "/images/batt.png"
    },
    {
      image2: "/images/batt1.png"
    },
    {
      image2: "/images/battery.png"
    },
    {
      image2: "/images/batt.png"
    },
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
    <section style={{ display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', borderRadius: '' , backgroundColor: 'white', padding: '30px'}}>
    <div style={{ display: 'flex', width: '90%' ,justifyContent: 'center', alignItems: 'center', borderRadius: '' }}>
        <div style={{ display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', borderRadius: '' }}>
   <div style={{display: 'flex',  width: '100%' ,justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'black', padding: '30px', gap: '20px',}}>
<div style={{display: 'flex', flexDirection: 'column',width: '100%' ,justifyContent: 'flex-start', alignItems: 'flex-start', padding: '30px', gap: '20px'}}>
<h6 style={{fontFamily: 'Poppins', fontSize: '15px', fontStyle: 'normal', fontweight: 600, lineHeight: '20px', color: '#00FF66'}}>Categories</h6>
<h1 style={{width: '60%', fontFamily: 'Poppins', fontSize: '40px', fontStyle: 'normal', fontweight: 600, lineHeight: '50px', color: 'white'}}>Enhance Your Light Experience</h1>
  
   <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: '10px' }}>
<div style={{width: '3.2rem', display: 'flex', flexDirection: 'column' ,fontFamily: 'Poppins', justifyContent: 'center', alignItems: 'center', borderRadius: '60%', backgroundColor: 'white', color: 'black', border:'2px solid white', gap: '1px', padding: '10px',}}>
<p style={{display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px',}}>23</p>
<p style={{display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px'}}>Hours</p>
</div>
<div style={{display: 'flex', width: '3.2rem', flexDirection: 'column' ,fontFamily: 'Poppins', justifyContent: 'center', alignItems: 'center', borderRadius: '60%', backgroundColor: 'white', color: 'black', border:'2px solid white', gap: '1px', padding: '10px'}}>
<p style={{display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px',}}>23</p>
<p style={{display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px'}}>Day</p>
</div>
<div style={{display: 'flex', width: '3.2rem', flexDirection: 'column' ,fontFamily: 'Poppins', justifyContent: 'center', alignItems: 'center', borderRadius: '60%', backgroundColor: 'white', color: 'black', border:'2px solid white', gap: '1px', padding: '10px',}}>
<p style={{display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px',}}>23</p>
<p style={{display:'flex', justifyContent: 'center', alignItems: 'center',fontSize: '12px' }}>Minutes</p>
</div>
<div style={{display: 'flex', width: '3.2rem', flexDirection: 'column' ,fontFamily: 'Poppins', justifyContent: 'center', alignItems: 'center', borderRadius: '60%', backgroundColor: 'white', color: 'black', border:'2px solid white', gap: '1px', padding: ' 10px'}}>
<p style={{display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px',}}>23</p>
<p style={{display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px'}}>Seconds</p>
</div>
   </div>
   <button style={{color: 'white', fontFamily: 'Poppins', fontSize: '20px', fontStyle: 'normal', fontweight: 600, backgroundColor: '#00FF66', padding: '10px 30px', border:'none', borderRadius:'5px',}}>Buy Now</button>
   
</div>
   <div style={rightDivStyle}>
        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={carouselItem}>
                <div style={rowInnerDivStyle}>
                  <img src={item.image2} alt='Product' style={heroImage} />
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div> </div>
    </div>
    
    </section>

  );
};
  
 
  
  const carouselContainer = {
    width: '100%',
    overflow: 'hidden',
  };
  
  const carousel = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  };
  
  const carouselItem = {
    flex: '0 0 100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const rightDivStyle = {
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: '20px',
    // padding: '25px'
  };
  
  const rowInnerDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '25px',
    color: 'white',
    // padding: '25px',
    width: '75%'
  };
  
  const heroImage = {
    maxWidth: '100%',
    height: 'auto',
  };
  

export default CategorySection;
