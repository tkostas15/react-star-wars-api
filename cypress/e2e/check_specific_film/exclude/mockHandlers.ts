import { rest } from "msw";
import mockFilmResponse from "./mockFilmResponse";

export const mockHandlers = [
  rest.get("https://swapi.dev/api/films/*/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFilmResponse));
  }),
];
