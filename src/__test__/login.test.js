import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

describe("[TEST SUITE] Log in form", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);

  beforeEach(() => {
    return render(
      <BrowserRouter>
        <Provider store={store}>
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
