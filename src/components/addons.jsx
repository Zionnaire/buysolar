
import {TbTruckDelivery} from 'react-icons/tb'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {SiAdguard} from 'react-icons/si'
import ScrollToTopButton from './scroltop'
import Link from 'next/link'

const Addons = () =>{
    return(
        <div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', padding: '15px 0', backgroundColor: '#fff'}}>
<div style={{display: 'flex', width: '90%' ,justifyContent: 'center',alignItems: 'center',}}>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', gap: '25px', color: '#fff', padding: '20px 0'}}>

<div style={{display: 'flex', flexDirection: 'column' , width: '30%', justifyContent: 'center',alignItems: 'center', gap: '15px', color: '#000',}}>
<Link href="">
<div style={{display: 'flex' ,justifyContent: 'center', alignItems:'center', color: '#fff', padding: '20px', borderRadius: '50%', border: '8px solid grey', backgroundColor:'black'}}><TbTruckDelivery/></div>
</Link>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>FREE AND FAST DELIVERY</h1>
<p style={{fontFamily: 'Poppins',fontSize: '15px',fontWeight: '400',}}>Free delivery for all orders over $140</p>
</div>

<div style={{display: 'flex', flexDirection: 'column' , width: '30%', justifyContent: 'center', alignItems: 'center', gap: '15px', color: '#000',}}>
    <Link href=''>
<div style={{display: 'flex',justifyContent: 'center', alignItems:'center', color: '#fff',padding: '20px', borderRadius: '50%', border: '8px solid grey', backgroundColor:'black'}}><RiCustomerService2Fill/></div>
</Link>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>24/7 CUSTOMER SERVICE</h1>
<p style={{fontFamily: 'Poppins',fontSize: '15px',fontWeight: '400',}}>Friendly 24/7 customer support</p>
</div>
<div style={{display: 'flex', flexDirection: 'column', width: '30%', justifyContent: 'center',alignItems: 'center', gap: '15px', color: '#000',}}>
<Link href=''>
<div style={{display: 'flex' ,justifyContent: 'center', alignItems:'center', color: '#fff',padding: '20px', borderRadius: '50%', border: '8px solid grey', backgroundColor:'black'}}><SiAdguard/></div>
</Link>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>MONEY BACK GUARANTEE</h1>
<p style={{fontFamily: 'Poppins',fontSize: '15px',fontWeight: '400'}}>We reurn money within 30 days</p>
</div>
<ScrollToTopButton/>
</div>
</div>
</div>
    )
}
 export default Addons;
