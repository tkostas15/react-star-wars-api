import { rest } from "msw";
import mockFilmsResponse from "./mockFilmsResponse";
import mockFillmInfoResponse from "./mockFilmInfoResponse";

export const mockFilmsResponseHandlers = [
  rest.get("https://swapi.dev/api/films/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFilmsResponse));
  }),
  rest.get("https://swapi.dev/api/films/*/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFillmInfoResponse));
  }),
];
