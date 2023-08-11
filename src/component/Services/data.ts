import {
  Home_Cleaning,
  Home_Management,
  Security,
  Whatsapp,
} from '../../assets/icons';
import {
  Bedroom_1,
  Bedroom_2,
  Bedroom_3,
  Bedroom_4,
  Bedroom_5,
  Bedroom_6,
} from '../../assets/images';
import { ServiceCardInterface, ServiceInterface } from './types';

export const serviceHeroValues: Array<ServiceInterface> = [
  {
    image: Bedroom_6,
  },
  {
    image: Bedroom_2,
  },
  {
    image: Bedroom_3,
  },
  {
    image: Bedroom_4,
  },
  {
    image: Bedroom_5,
  },
];

export const cardValues: Array<ServiceCardInterface> = [
  {
    heading: '24/7',
    icon: Whatsapp,
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    heading: 'Security',
    icon: Security,
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    heading: 'Home Management',
    icon: Home_Management,
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    heading: 'Home Cleaning',
    icon: Home_Cleaning,
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
