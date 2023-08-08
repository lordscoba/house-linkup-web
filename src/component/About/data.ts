import {
  BestPrice,
  Comfortable,
  Efficient,
  ExtraSecurity,
  Luxry,
  StrategicLocation,
} from '../../assets/icons';
import { AboutCardInterface } from './types';

export const AboutValues: Array<AboutCardInterface> = [
  {
    icon: Comfortable,
    text: "Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.",
    title: 'Comfortable',
  },
  {
    icon: ExtraSecurity,
    text: 'You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.',
    title: 'Extra security',
  },
  {
    icon: Luxry,
    text: 'Find out how we provide the highest standard of professional property management to give you all the benefits of property.',
    title: 'Luxury',
  },

  {
    icon: BestPrice,
    text: 'Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.',
    title: 'Best price',
  },
  {
    icon: StrategicLocation,
    text: 'located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.',
    title: 'Strategic location',
  },
  {
    icon: Efficient,
    text: 'Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent',
    title: 'Efficient',
  },
];
