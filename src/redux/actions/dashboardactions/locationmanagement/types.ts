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
export interface getLocalGovByIdInterface {
  countryId: string;
  stateId: string;
}
export interface getTownsByIdInterface {
  countryId: string;
  stateId: string;
  local_govId: string;
}

export interface deleteLocaGovInterface {
  countryId: string;
  stateId: string;
  localGovId: string;
}
