import { rest } from "msw";
import mockFilmsResponse from "./mockFilmsResponse";

export const mockFilmsResponseHandlers = [
  rest.get("https://swapi.dev/api/films/", (req, res, ctx) => {
    return res(ctx.json(mockFilmsResponse));
  }),
];
