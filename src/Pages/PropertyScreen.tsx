import React, { useEffect } from 'react';
import PropertyHero from '../component/Property/PropertyHero';
import MinimumLivingCost from '../component/Property/MinimumLivingCost';
import ExploreHouseNearYou from '../component/reusableComponents/ExploreHouseNearYou';
import CustomerReviews from '../component/Property/CustomerReviews';
import Search from '../component/reusableComponents/Search';
import { useLocation } from 'react-router-dom';

type Props = {};

const PropertyScreen = (props: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
