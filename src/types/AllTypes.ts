// store slices
export interface AuthSlice {
  isAuthenticated: boolean;
  loginError: string;
  startingLogin: boolean;
  logoutError: string;
  startingLogout: boolean;
}
export interface FilmsSlice {
  fetchedFilms: Array<any>;
  sending: boolean;
  error: string;
  atLeastOneFetch: boolean;
}
export interface FilmSlice {
  fetchedInfo: Array<any>;
  sending: boolean;
  error: string;
  atLeastOneFetch: boolean;
}

// fetch response
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  ok?: boolean;
  json(): any;
}

// response for films and film info fetch
export interface FilmObject {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: string;
  edited: string;
  url: string;
}
export interface FilmsResponse {
  count: number;
  next: any;
  previous: any;
  results: Array<FilmObject>;
}

// store state
export interface StoreSlices {
  auth: AuthSlice;
  films: FilmsSlice;
  film: FilmSlice;
}
