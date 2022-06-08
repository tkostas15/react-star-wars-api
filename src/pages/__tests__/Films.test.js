import Films from "../Films";
import { render, screen } from "../../test-utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "../../store/store";
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
        <Provider store={reduxStore}>
          <Films />
        </Provider>
      </BrowserRouter>
    );
    const { container, ...restProps } = render(FilmsWithBrowser, {
      initialState,
    });

    const table = await screen.findByTestId("films");
    expect(table).toMatchSnapshot();
    // console.log("table", table);
    expect(table).toBeInTheDocument();
  });
});
