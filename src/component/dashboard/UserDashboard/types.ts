export interface UserDashboardInterface {
  text: string;
  name: string;
  link: string;
}

export type UserDashboardArray = Array<UserDashboardInterface>;

// interface InteriorInterface {
//   data: string;
// }

export interface UserDashboardDataInterface {
  image: string | any;
  title: string;
  // likeIcon: string | any;
  // locationIcon: string | any;
  interior: string[];
  rating: number;
  reviews: number;
  address: string;
  rentPermonth: number;
}

export type UserDashboardDataArray = Array<UserDashboardDataInterface>;
