import {
  House_1,
  House_2,
  House_3,
  House_4,
  House_5,
  House_6,
  PropertyBg,
  mini_Icon_1,
  mini_Icon_2,
  mini_Icon_3,
  mini_Icon_4,
  mini_Icon_5,
  mini_Icon_6,
} from '../../assets/icons';
import {
  CustomerReviewsInterface,
  FindHouseNearYouInterface,
  MiniCostInterface,
  PropertyInterface,
} from './types';

export const propertyValues: Array<PropertyInterface> = [
  {
    image: House_1,
    location: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    price: 195000,
  },
  {
    image: House_2,
    location: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    price: 695000,
  },
  {
    image: House_3,
    location: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    price: 795000,
  },
  {
    image: House_4,
    location: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    price: 395000,
  },

  {
    image: House_5,
    location: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    price: 295000,
  },
  {
    image: House_6,
    location: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    price: 995000,
  },
];

export const miniCostValues: Array<MiniCostInterface> = [
  {
    icon: mini_Icon_1,
    title: 'Pay as Little as possible!',
  },
  {
    icon: mini_Icon_2,
    title: 'Enjoy wisdom of community!',
  },
  {
    icon: mini_Icon_3,
    title: `Let's somebody else take care of Landlord!`,
  },
  {
    icon: mini_Icon_4,
    title: 'Enjoy peaceful Environment!',
  },
  {
    icon: mini_Icon_5,
    title: 'Stay Safe! Save Money!',
  },
  {
    icon: mini_Icon_6,
    title: 'Pay for what you use !',
  },
];

export const findHouseNearYouValues: Array<FindHouseNearYouInterface> = [
  {
    image: House_1,
    location: 'Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout',
    NumOfBathRooms: 4,
    NumOfBedRooms: 2,
    price: 490000,
    SquareFt: 1931,
    Year: 2,
  },
  {
    image: House_2,
    location: '44, Arinola Street, Ori Okuta. Ikorodu',
    NumOfBathRooms: 7,
    NumOfBedRooms: 4,
    price: 250000,
    SquareFt: 1334,
    Year: 3,
  },
  {
    image: House_3,
    location: '5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja',
    NumOfBathRooms: 2,
    NumOfBedRooms: 2,
    price: 195000,
    SquareFt: 1000,
    Year: 3,
  },
  {
    image: House_4,
    location: '31,Herbert Macaulay Way, Sabo, Yaba',
    NumOfBathRooms: 4,
    NumOfBedRooms: 1,
    price: 470000,
    SquareFt: 1936,
    Year: 2,
  },
  {
    image: House_5,
    location: '5, Dele Ogundele Street, Oregun, Ikeja',
    NumOfBathRooms: 7,
    NumOfBedRooms: 3,
    price: 250000,
    SquareFt: 1334,
    Year: 3,
  },
  {
    image: House_6,
    location: '10 Lekki Phase 1, P.O. Box 10141, Marina',
    NumOfBathRooms: 2,
    NumOfBedRooms: 2,
    price: 195000,
    SquareFt: 1000,
    Year: 3,
  },
];

export const customerReviewsValues: Array<CustomerReviewsInterface> = [
  {
    name: 'Felix Jimoh',
    p: '“I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient.” ',
    rating: 5.0,
  },
  {
    name: 'David T.',
    p: '“EcoHaven Realty is an amazing real estate agency that truly understands the importance of sustainability and eco-friendliness. They helped me find a beautiful home that was not only environmentally conscious.” ',
    rating: 4.5,
  },
  {
    name: 'Susan Lanre',
    p: `“I recently sold my home with EcoHaven Realty, and I couldn't be happier with the experience. The team was knowledgeable, professional, and really took the time to understand what was important to me.” `,
    rating: 4.6,
  },
  {
    name: 'Lorey Sane',
    p: '“I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient. ',
    rating: 4.4,
  },
  {
    name: 'Felix Fletcher',
    p: '“I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient. ',
    rating: 4.8,
  },
  {
    name: 'Ben Rice',
    p: '“I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient. ',
    rating: 4.9,
  },
  {
    name: 'Gray Cook',
    p: '“I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient. ',
    rating: 4.4,
  },
  {
    name: 'James Robert',
    p: '“I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient. ',
    rating: 4.2,
  },
];
