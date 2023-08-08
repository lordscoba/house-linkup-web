import React from 'react';
import PropertyHero from '../component/Property/PropertyHero';
import MinimumLivingCost from '../component/Property/MinimumLivingCost';

type Props = {};

const PropertyScreen = (props: Props) => {
  return (
    <div>
      <PropertyHero />
      <MinimumLivingCost />
    </div>
  );
};

export default PropertyScreen;
