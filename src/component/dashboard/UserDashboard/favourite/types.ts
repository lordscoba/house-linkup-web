export interface FavouriteInterface {
  image: string | any;
  price: number;
  title: string;
  street: string;
  date: string;
  numOfStirs: number;
  meters: number;
  fit: string;
}

export type FavouriteDataArray = Array<FavouriteInterface>;
