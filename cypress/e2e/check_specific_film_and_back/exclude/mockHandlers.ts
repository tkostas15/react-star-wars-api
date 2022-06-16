import { rest } from "msw";
import mockFilmResponse from "./mockFilmResponse";
import mockFilmsResponse from "./mockFilmsResponse";

export const mockHandlers = [
  rest.get("https://swapi.dev/api/films/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFilmsResponse));
  }),
  rest.get("https://swapi.dev/api/films/*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFilmResponse));
  }),
];
