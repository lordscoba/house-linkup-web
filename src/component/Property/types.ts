export interface PropertyInterface {
  price: Number;
  location: string;
  image: string;
}

export type PropertyArrayType = Array<PropertyInterface>;

export interface MiniCostInterface {
  icon: string;
  title: string;
}

export type MiniCostArray = Array<MiniCostInterface>;

export interface FindHouseNearYouInterface {
  price: Number;
  NumOfBedRooms: Number;
  NumOfBathRooms: Number;
  SquareFt: Number;
  Year: Number;
  image: string;
  location: string;
}

export type FindHouseArray = Array<FindHouseNearYouInterface>;

export interface CustomerReviewsInterface {
  name: string;
  rating: Number;
  p: string;
}

export type CustomerReviewsArray = Array<CustomerReviewsInterface>;
