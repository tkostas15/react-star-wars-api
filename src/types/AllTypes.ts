import { ReactElement } from "react";

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

// props
export interface FilmsTableProps {
  films: Array<FilmObject>;
}
export interface FilmInfoProps {
  info: Array<FilmObject>;
}
export interface HeaderProps {
  hasBack: number;
  onClickBack?: () => void;
}
export interface StarsProps {
  numberOfStars: number;
  maxDimension: number;
}
export interface SingleStarProps {
  dimension: number;
  opacity: number;
  position: { posX: number; posY: number };
}
export interface SpinnerProps {
  icon: string;
  ms: number;
}
export interface ModalProps {
  description: ReactElement | undefined;
  button: string;
  onButtonClick?: () => void;
  className?: string;
}
export interface UIButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactElement | string;
}
