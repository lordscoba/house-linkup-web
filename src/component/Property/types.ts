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
