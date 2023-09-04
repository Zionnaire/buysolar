import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {

  return (
    <>
      <div style={genSect1}>
        <div style={genSect2}>
          <div style={genSect3}>
            <div style={loginPageStyle}>
              <div style={imageSectionStyle}>
                <img
                  src="/images/Side Image.png"
                  alt="Login Background"
                  style={imageStyle}
                />
              </div>
              <div style={loginDetailsStyle}>
                <h2 style={h2Style}>Log in to Buy Solar</h2>
                <h2 style={h5Style}>Enter your details below</h2>

                <div style={inputGroupStyle}>
                  <input
                    type="email"
                    placeholder="Email or Phone Number"
                    style={inputStyle}
                  />
                </div>
                <div style={inputGroupStyle}>
                  <input
                    type="password"
                    placeholder="Password"
                    style={inputStyle}
                  />
                </div>
               
                
                <div style={accountStyle}>
                <h5>Forgot password?</h5>
                <button style={buttonStyle}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Rest of your styles...
const genSect1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };
  
  const genSect2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: '0 auto',
    maxWidth: '1200px', // Add a maximum width as needed
  };
  
  const genSect3 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '60px 0',
    gap: '20px',
    backgroundColor: 'white',
    border: '1px solid white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  //   borderRadius: '10px',
  };
  
  
  const loginPageStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '80%',
    };
  
    const imageSectionStyle = {
      flex: 1,
      minWidth: '40%',
    };
  
    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    };
  
    const loginDetailsStyle = {
      flex: 1,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      minWidth: '60%',
      border: '1px solid white',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      gap: '15px'
    };
  
    const h2Style = {
      fontFamily: 'Inter',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '30px', /* 83.333% */
  letterSpacing: '1.44px' 
    };
  
    const h5Style = {
      fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '20px', /* 83.333% */
  letterSpacing: '1.44px' 
    };
  
    const inputGroupStyle = {
      marginBottom: '15px',
      width: '100%'
    };
  
    const inputStyle = {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    };
  
    const buttonStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    //   width: '30%',
      padding: '10px 40px',
      marginTop: '15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      color: '#FAFAFA',
      backgroundColor: '#000',
    };
  
    const googleButtonStyle = {
      backgroundColor: 'white',
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  
    const googleIconStyle = {
      marginRight: '10px',
    };
  
    const accountStyle ={
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }

export default LoginPage;
