import React from "react";
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs'

const SectionTwo = () => {
    return(
        <>
<div style={genSect1}>
<div style={genSect2}>
<div style={genSect3}>
<div style={todayStyle}>
    <div style={rectangle}></div>
    <h3>Today's</h3>
    </div>
    <div style={flashStyle}>
<div style={flashStyle1}>
<h1 style={H1_flash}>Flash Sales</h1>
<div style={timeStyle}>
<div style={dayStyle}>
<h3>Days</h3>
<div style={dayStyle2}>
<h2>03</h2>
<h2 style={colonStyle}>:</h2>
</div>
</div>
<div style={dayStyle}>
<h3>Hours</h3>
<div style={dayStyle2}>
<h2>03</h2>
<h2 style={colonStyle}>:</h2>
</div>
</div>
<div style={dayStyle}>
<h3>Minutes</h3>
<div style={dayStyle2}>
<h2>03</h2>
<h2 style={colonStyle}>:</h2>
</div>
</div>
<div style={dayStyle}>
<h3>Seconds</h3>
<div style={dayStyle2}>
<h2>03</h2>
<h2 style={colonStyle}></h2>

</div>
</div>
</div>
</div>
<div style={iconStyle}>
    <div style={arrowIcon}><BsArrowLeftShort/></div>
    <div style={arrowIcon}><BsArrowRightShort/></div>

</div>
    </div>

   </div>    
   </div>    
    </div>        
   
        </>
    )
}

const genSect1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',    
    backgroundColor: '#fff',
    padding: '0 0 0 30px',
    color: 'black'

}

const genSect2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',    
}
const genSect3 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',   
    padding: '5px 20px 0', 
    gap: '15px',

}

const todayStyle = {
display: 'flex',
flexDirection: 'row',
alignItems: 'center',
gap: '15px',
width: '80%'
}

const rectangle ={
    backgroundColor: '#DB4444', 
    color: 'red',
    border: '1px solid #DB4444 ',
    padding: '18px 8px',
    borderRadius: '3px'
}

const flashStyle ={
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
width: '100%',
}

const flashStyle1 ={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '200px'

    }



const H1_flash = {
    fontFamily: 'Inter',
fontSize: '36px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '48px', /* 133.333% */
letterSpacing: '1.44px', 
}

 const timeStyle ={
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
 }

 const dayStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '12px',
    
 }

 const dayStyle2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   gap: '35px',
   fontFamily: 'Poppins',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '18px'
 }

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

const colonStyle = {
    color: '#FFAD33'
}




export default SectionTwo;

