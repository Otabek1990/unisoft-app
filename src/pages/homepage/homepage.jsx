import React from 'react'
import About from '../../components/about/about';
import Blog from '../../components/blog/blog';
import HomeHeader from '../../components/homeHeader/homeHeader';
import './homepage.css'
import Numbers from '../../components/numbers/numbers';
import Partners from '../../components/partners/partners';
import Services from '../../components/services/services';
import ServiceVisual from '../../components/serviceVisuals/services-visual';
import Navbar from '../../components/navbar/navbar2';
const Homepage = ()=>{
    return(
        <div className="homepage">
            <Navbar/>
            <HomeHeader/>
            <About/>
            <Services/>
            <ServiceVisual/>
            <Numbers/>
            <Blog/>
            <Partners/>
        </div>
    )
}
export default Homepage;