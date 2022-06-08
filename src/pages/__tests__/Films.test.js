import Films from "../Films";
import { render, screen } from "../../test-utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import { initialState } from "./exclude/initialState";
import { server } from "../../mocks/server";
import { mockFilmsResponseHandlers } from "./exclude/mockFilmsResponseHandlers";

describe("Films", () => {
  it("dummy", () => {
    expect(true).toBe(true);
  });

  it("should load table", async () => {
    server.use(...mockFilmsResponseHandlers);

    const FilmsWithBrowser = () => (
      <BrowserRouter>
        <Films />
      </BrowserRouter>
    );
    const { container, ...restProps } = render(FilmsWithBrowser, {
      initialState,
    });

    const table = await screen.findByTestId("films");
    expect(table).toMatchSnapshot();
    expect(table).toBeInTheDocument();
  });
});
