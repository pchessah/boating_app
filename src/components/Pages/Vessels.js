import React from 'react';
import Hero from '../Hero/Hero';
import Banner from "../Banner/Banner"
import { Link } from 'react-router-dom';
import VesselsContainer from '../VesselsContainer/VesselsContainer';
 
const Vessels = () => {
    return (
        <div>
           <Hero hero="roomsHero">
               <Banner title="Our Vessels">
                   <Link to="/" className="btn-primary">
                       Return Home
                   </Link>
               </Banner>
               </Hero>
               <VesselsContainer/>
        </div>
    );
}
 
export default Vessels;