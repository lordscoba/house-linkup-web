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
import { MiniCostInterface, PropertyInterface } from './types';

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
