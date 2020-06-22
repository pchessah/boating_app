import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

const Landing = () => (
  <Hero hero="defaultHero">
    <Banner title="Boaters" subtitle="For all your aqua transport needs">
      <Link to="/" className="btn-primary">
        See More
      </Link>
    </Banner>
  </Hero>
);

export default Landing;

Hero.defaultProps = {
  hero: "defaultHero",
};
