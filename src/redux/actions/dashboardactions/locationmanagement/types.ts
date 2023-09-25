export interface CreateNewRegionInterface {
  region: string;
  state: string;
}

export interface AddStateInterface {
  countryId: string;
  state: string;
}

export interface DeleteStateInterface {
  documentId: string;
  stateId: string;
}

export interface AddLocalGovInterface {
  countryId: string;
  stateId: string;
  local_government_name: string;
}

export interface DeleteLocalGovInterface {
  documentId: string | any;
  stateId: string | any;
  localGovId: string | any;
}
