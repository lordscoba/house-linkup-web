import React from 'react';
import AboutHero from '../component/About/AboutHero';
import OurAdvantage from '../component/About/OurAdvantage';
import FlexibilityAndOptions from '../component/reusableComponents/FlexibilityAndOptions';
import Search from '../component/reusableComponents/Search';

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <AboutHero />
      <OurAdvantage />
      <FlexibilityAndOptions />
      <Search />
    </div>
  );
};

export default About;
