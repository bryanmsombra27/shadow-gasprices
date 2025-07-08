export interface GasStationResponse {
  places: Place[];
  message: string;
}

export interface Place {
  place_id: string;
  name: string;
  cre_id: string;
  latitude: number;
  longitude: number;
  price_id: null | string;
  price_place_id: null | string;
  regular: number | null;
  premium: number | null;
  diesel: number | null;
  distance: number;
}
