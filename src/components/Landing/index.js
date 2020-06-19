import React from 'react';
import Hero from '../Hero/Hero';

const Landing = () => (
 <Hero hero = "defaultHero"/>
);

export default Landing;

Hero.defaultProps = {
  hero: "defaultHero"
}
