import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/herosect'
import SectionTwo from '@/components/flashsales'
import Products from '@/components/product'
import BestSell from '@/components/bestSelling'
import CategorySection from '@/components/categories'
import ExploreProducts from '@/components/explore'
import ArrivalSection from '@/components/newArival'
import Addons from '@/components/addons'
import FooterSect from '@/components/footer'

// import ScrollToTopButton from '@/components/scroltop'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.general1}>
    <div className={styles.general2}>
    <div className={styles.general3}>
    <Navbar/>

<HeroSection/>
<SectionTwo/>
<Products/>
   <BestSell/>
   <CategorySection/>
   <ExploreProducts/>
   <ArrivalSection/>
 <Addons/>
 <FooterSect/>

   </div>
   
   </div>
   
     </div>
    </>
  )
}
