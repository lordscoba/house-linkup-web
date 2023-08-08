import React from 'react';
import PropertyHero from '../component/Property/PropertyHero';
import MinimumLivingCost from '../component/Property/MinimumLivingCost';
import ExploreHouseNearYou from '../component/Property/ExploreHouseNearYou';
import CustomerReviews from '../component/Property/CustomerReviews';
import Search from '../component/reusableComponents/Search';

type Props = {};

const PropertyScreen = (props: Props) => {
  return (
    <div>
      <PropertyHero />
      <MinimumLivingCost />
      <ExploreHouseNearYou />
      <CustomerReviews />
      <Search />
    </div>
  );
};

export default PropertyScreen;
