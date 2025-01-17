import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import Services from "../Services/Services";
import FeaturedVessels from "../FeaturedVessels/FeaturedVessels";

const Landing = () => (
  <>
  <Hero hero="defaultHero">
    <Banner title="Boaters" subtitle="For all your aqua transport needs">
      <Link to="/vessels" className="btn-primary">
        See More
      </Link>
    </Banner>
  </Hero>
  <Services/>
  <FeaturedVessels/>
  </>
);

export default Landing;

Hero.defaultProps = {
  hero: "defaultHero",
};
