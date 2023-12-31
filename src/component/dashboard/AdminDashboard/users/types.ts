export interface ImageInterface {
  url: string;
}

export interface TableInterface {
  image: Array<ImageInterface>;
  email: string;
  full_name: string;
  position: string;
  // startDate: string;
  active: boolean;
  blocked: boolean;
  de_activated: boolean;
  location: string;
  createdAt: string;
  role: string;
  phone_number?: string | any;
  username?: string | any;
  _id: string;
}

export type TableArrays = Array<TableInterface>;
