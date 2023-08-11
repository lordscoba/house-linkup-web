import React from 'react';
import ServiceHero from '../component/Services/ServiceHero';
import ServiceCard from '../component/Services/ServiceCard';
import ExploreHouseNearYou from '../component/reusableComponents/ExploreHouseNearYou';
import FlexibilityAndOptions from '../component/reusableComponents/FlexibilityAndOptions';
import Search from '../component/reusableComponents/Search';

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <ServiceHero />
      <ServiceCard />
      <ExploreHouseNearYou />
      <FlexibilityAndOptions />
      <Search />
    </div>
  );
};

export default Services;
