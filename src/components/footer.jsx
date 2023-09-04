import {AiOutlineSend} from 'react-icons/ai'
import Link from 'next/link';
const FooterSect = () => {
    return(

<div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', padding: '15px 0', backgroundColor: '#000'}}>
<div style={{display: 'flex', width: '90%' ,justifyContent: 'center', alignItems: 'center', padding: '15px 0'}}>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center',gap: '20px', color: '#fff',}}>
    <div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center', gap: '25px', color: '#fff', padding: '20px'}}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Exclusive</h1>
<ul style={ulStyle}>
    <li style={{fontFamily: 'Poppins',fontSize: '16px',fontWeight: '400', listStyle: 'none'}}><Link href="">Subscribe</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="">Get 10% off your first order</Link></li>
</ul>
<div style={{width: '100%', position: "relative", display: 'flex', justifyContent: 'center', alignItems:'center'}}>
<input type="email" placeholder="Enter your email" style={{width: '100%',padding: '3px 0', display: 'flex', justifyContent: 'center', alignItems:'center'}}/>
<div style={{position: "absolute", right: '3px', color: '#000', bottom: '0px', }}><AiOutlineSend/></div>
</div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center',gap: '25px', color: '#fff', padding: '20px'}}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Support</h1>
<ul style={ulStyle}>
    <li style={{fontFamily: 'Poppins',fontSize: '16px',fontWeight: '400', listStyle: 'none'}}><Link href="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="">exclusive@gmail.com</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="">+88015-88888-9999</Link></li>

</ul>

    </div>
    <div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center', gap: '25px', color: '#fff', padding: '20px'}}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Account</h1>
<ul style={ulStyle}>
    <li style={{fontFamily: 'Poppins',fontSize: '16px',fontWeight: '400',listStyle: 'none'}}><Link href="">My Account</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="">Login/Register</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="">Cart</Link></li>

</ul>

    </div>
    <div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center', gap: '25px', color: '#fff', padding: '20px'}}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Quick Links</h1>
<ul style={ulStyle}>
    <li style={{fontFamily: 'Poppins',fontSize: '16px',fontWeight: '400', listStyle: 'none'}}><Link href="">Privacy Policy</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="">Terms of Use</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400',listStyle: 'none'}}><Link href="">FAQ</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="">Contact</Link></li>

</ul>

    </div>
    <div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center', gap: '25px', color: '#fff',}}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Download App</h1>
<ul style={ulStyle}>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="">Save $3 with App New User Only</Link></li>
</ul>


</div>
</div>
    </div>
    </div>
    )
}


const ulStyle ={display: 'flex', flexDirection: 'column',width: '100%',justifyContent: 'center',gap: '5px'}


export default FooterSect;