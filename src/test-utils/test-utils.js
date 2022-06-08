// test-utils.js
// https://testing-library.com/docs/react-testing-library/setup
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "../sagas/rootSagas";

import { rootReducer } from "../store/store";

let storeRedux;

// configure middlewares
const sagaMiddleware = createSagaMiddleware();

function render(
  Component,
  {
    initialState = {},
    middlewares = [],

    extraProps,
    sagas = rootSagas,
    ...renderOptions
  } = {}
) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState: initialState,
  });
  function Wrapper({ children, ...restProps }) {
    return (
      <Provider store={store} {...restProps}>
        {children}
      </Provider>
    );
  }

  storeRedux = store;

  if (sagas instanceof Function) {
    console.log("running sagas", sagas);
    sagaMiddleware.run(sagas);
  }

  return rtlRender(<Component {...store} {...extraProps} {...initialState} />, {
    wrapper: Wrapper,
    ...renderOptions,
  });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render, storeRedux };