import React, { useState, useEffect } from 'react';// import {  FaEye } from 'react-icons/fa';
import {AiTwotoneStar, AiOutlineHeart, AiOutlineEye} from 'react-icons/ai';
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs'

const productsArray = [
    {
      image: '/images/batt.png',   
       favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'HAVIT HV-G92 Gamepad',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
  
    },
    {
      image: '/images/battery.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'AK-900 Wired Keyboard',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
    },
  
    {
      image: '/images/batt.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'IPS LCD Gaming Monitor',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
    },
    {
      image: '/images/battery.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'S-Series Comfort Chair ',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
  
    },
  ];

const ExploreProducts = () => {

    //   const [numItemsPerSlide, setNumItemsPerSlide] = useState(2);
      const [currentIndex, setCurrentIndex] = useState(0);
      const [hoverIndex, setHoverIndex] = useState(null); // Add hover state

    return(
        <>
        <section style={{ display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '90%' ,justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '' }}>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'flex-start', alignItems: 'center', gap: '12px'}}>
    <div style={{backgroundColor: '#DB4444', padding: '18px 9px', borderRadius: '3px'}}></div>
    <h3 style={{color: '#DB4444', fontSize: '12px', fontWeight: '200'}}>Our Products</h3>
</div>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'space-between', alignItems: 'center', gap: '15px', paddingTop: '10px'}}>
    <h1 style={{color: '#000', width: '60%', fontFamily: 'Inter',fontSize: '30px',fontStyle: 'normal',fontWeight: 600,lineHeight: '48px',letterSpacing: '1.44px' }}>
    Explore Our Products
        </h1>
        <div style={iconStyle}>
    <div style={arrowIcon}><BsArrowLeftShort/></div>
    <div style={arrowIcon}><BsArrowRightShort/></div>

</div></div>

<div style={{ display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', gap: '20px', }}>
{productsArray.map((product, index) => (
              <div
                key={index}
                style={{ display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', gap: '20px',
                  ...productContainerStyle,
                
                }}
                onMouseEnter={() => setHoverIndex(index)} // Set hover state on mouse enter
                onMouseLeave={() => setHoverIndex(null)}  // Reset hover state on mouse leave
              >
             <button style={btnStyle}>{product.percentilePrice}</button>

                <div style={iconContainerStyle}>
                    
                  {product.favouriteIcon && <div style={favouriteIconStyle}>{product.favouriteIcon}</div>}
                  {product.viewIcon && <div style={viewIconStyle}>{product.viewIcon}</div>}
                </div>
               <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative'}}> <img src={product.image} alt='' style={productImageStyle} />
                <button style={{ ...btnStyle, display: hoverIndex === index ? 'flex' : 'none', padding: '10px 50px', whiteSpace: 'nowrap', color: '#fff', justifyContent: 'center',cursor: 'pointer', alignItems: 'center', position: 'absolute' }}>{/* Button visibility */}
                  Add to Cart
                </button>
                </div>
                <div style={productDetailsStyle}>
                  <div>{product.name}</div>
                  <div style={productPriceStyle}>
                    <div>{product.flashPrice}</div>
                    <div style={{ marginLeft: '10px', textDecoration: 'line-through' }}>{product.actualPrice}</div>
                  </div>
                  <div style={rateContainerStyle}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} style={{ marginLeft: '5px', color: '#FFAD33', backgroundColor: 'white', borderRadius: '50%' }}>
                        {product.rateIcon}
                      </div>
                    ))}
                    <div style={{ marginLeft: '5px', color: 'black' }}>({product.rateCount})</div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            <div style={{ display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', gap: '20px', }}>
{productsArray.map((product, index) => (
              <div
                key={index}
                style={{ display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', gap: '20px',
                  ...productContainerStyle,
                
                }}
                onMouseEnter={() => setHoverIndex(index)} // Set hover state on mouse enter
                onMouseLeave={() => setHoverIndex(null)}  // Reset hover state on mouse leave
              >
             <button style={btnStyle}>{product.percentilePrice}</button>

                <div style={iconContainerStyle}>
                    
                  {product.favouriteIcon && <div style={favouriteIconStyle}>{product.favouriteIcon}</div>}
                  {product.viewIcon && <div style={viewIconStyle}>{product.viewIcon}</div>}
                </div>
               <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative'}}> <img src={product.image} alt='' style={productImageStyle} />
                <button style={{ ...btnStyle, display: hoverIndex === index ? 'flex' : 'none', padding: '10px 50px', whiteSpace: 'nowrap', color: '#fff', justifyContent: 'center',cursor: 'pointer', alignItems: 'center', position: 'absolute' }}>{/* Button visibility */}
                  Add to Cart
                </button>
                </div>
                <div style={productDetailsStyle}>
                  <div>{product.name}</div>
                  <div style={productPriceStyle}>
                    <div>{product.flashPrice}</div>
                    <div style={{ marginLeft: '10px', textDecoration: 'line-through' }}>{product.actualPrice}</div>
                  </div>
                  <div style={rateContainerStyle}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} style={{ marginLeft: '5px', color: '#FFAD33', backgroundColor: 'white', borderRadius: '50%' }}>
                        {product.rateIcon}
                      </div>
                    ))}
                    <div style={{ marginLeft: '5px', color: 'black' }}>({product.rateCount})</div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            <button style={{backgroundColor: 'black', color: '#FAFAFA', display: 'flex', padding: '15px 50px', maginBottom: '15px', borderRadius: '10px', border:'none',justifyContent: 'center', alignItems: 'center', }}>View All Products</button>
            </div>

            </div>

        </section>
        </>
    )
}

const productContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  


  };
  
  const productImageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  };
  
  const iconContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '30px',
    left: '100px',
    
  };
  
  const btnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '80px',
    left: '40px',
    width: '15%',
    backgroundColor: '#DB4444',
    border: '1px solid #DB4444',
    borderRadius: '5px',
  };
  
  const favouriteIconStyle = {
    color: 'black',
  };
  
  const viewIconStyle = {
    color: 'black',
  };
  
  const productDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'black',
    width: '70%',
    padding: '10px',
    gap: '5px',
    textAlign: 'center'
  };
  
  const productPriceStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5px',
  };
  
  const rateContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFAD33',
  };

  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
   
 }

 const arrowIcon ={
    borderRadius: '50%',
    backgroundColor: '#F5F5F5',
    padding: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    
 }
export default ExploreProducts;