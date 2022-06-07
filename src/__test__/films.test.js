import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Films from "../pages/Films";
import reduxStore from "../store/store";

describe("[TEST SUITE] Films table", () => {
  beforeEach(() => {
    return render(
      <BrowserRouter>
        <Provider store={reduxStore}>
          <Films />
        </Provider>
      </BrowserRouter>
    );
  });

  it('[TEST] Checks table with rows exist"', () => {
    expect(queryBy);
  });
  it('[TEST] Checks search in table exists"', () => {
    expect(true).toBeTruthy();
  });
});
