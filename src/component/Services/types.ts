export interface ServiceInterface {
  image: string;
}

export type ServiceBgArray = Array<ServiceInterface>;

export interface ServiceCardInterface {
  icon: string;
  heading: string;
  p: string;
}

export type ServiceCardArray = Array<ServiceCardInterface>;
