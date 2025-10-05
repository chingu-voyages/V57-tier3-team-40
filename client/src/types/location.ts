export interface Suggestion {
  place_id: string;
  address: {
    city?: string;
    town?: string;
    village?: string;
    state?: string;
  };
}

export interface Location {
  city: string;
  state: string;
}
