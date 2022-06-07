import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import reduxStore from "../store/store";
import { BrowserRouter } from "react-router-dom";

global.React = React;

describe("[TEST SUITE] Log in form", () => {
  beforeEach(() => {
    return render(
      <BrowserRouter>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });

  it('[TEST] Checks form exists"', () => {
    expect(screen.getByTestId("loginForm")).not.toBeNull();
  });
  it('[TEST] Checks password input exists"', () => {
    expect(screen.getByLabelText("password")).not.toBeNull();
  });
  it('[TEST] Checks username exists"', () => {
    expect(screen.getByLabelText("username")).not.toBeNull();
  });
});
