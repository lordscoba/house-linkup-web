export interface BuyRent {
  label: string;
  value: String[];
}

export type BuyRentData = Array<BuyRent>;

export interface LocationInterface {
  label: string;
  value: String[];
}

export type LocationData = Array<LocationInterface>;

export interface HouseTypeInterface {
  label: string;
  value: String[];
}

export type HouseTypeData = Array<HouseTypeInterface>;

export interface PriceInterface {
  label: string;
  value: String[];
}

export type PriceListData = Array<PriceInterface>;

//ADVANTAGES

export interface AdvantagesInterface {
  header: string;
  p: string;
  icon: string | any;
}

export type AdvantagesData = Array<AdvantagesInterface>;

//Reviews
export interface ReviewsInterface {
  icon: string | any;
  p: string;
  name: string;
  rating: Number;
  location: string;
}

export type ReviewsData = Array<ReviewsInterface>;
