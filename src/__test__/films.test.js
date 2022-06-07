import React from "react";
import { render, screen } from "@testing-library/react";
import Films from "../pages/Films";
import { Provider } from "react-redux";
import reduxStore from "../store/store";
import { BrowserRouter } from "react-router-dom";
import { exceptionFilmsHandler } from "../mocks/handlers";
import { server as mswServer } from "../mocks/server";

global.React = React;
const appContents = (
  <BrowserRouter>
    <Provider store={reduxStore}>
      <Films />
    </Provider>
  </BrowserRouter>
);

describe("[TEST SUITE] Films table check", () => {
  it('[TEST] fetch succedeed! A films table should be on screen"', async () => {
    render(appContents);

    const btTable = await screen.findByTestId("bootstrapTableWrapper");
    expect(btTable).toBeInTheDocument();
  });

  it("[TEST] fetch failed. An error message and retry button should be on screen", async () => {
    mswServer.use(exceptionFilmsHandler);
    render(appContents);

    // error message
    const errorMessage = await screen.findByText(
      /Spacecraft's electronics crashed/
    );
    expect(errorMessage).toBeInTheDocument();

    // retry button
    const retryButton = await screen.findByText(/Retry/);
    expect(retryButton).toBeInTheDocument();
  });
});
