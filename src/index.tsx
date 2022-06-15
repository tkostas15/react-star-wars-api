import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reduxStore from "./store/store";
import { BrowserRouter } from "react-router-dom";

import { worker } from "./mocks/browser";

var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

//! if you need to use msw during development process you should set the
//! shouldEnableMsw boolean flag equal to true
const shouldEnableMsw = window.Cypress && isChrome;

const loadWorker = async () => {
  if (shouldEnableMsw) {
    await worker.start();
  }
};

loadWorker().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root")!);
  root.render(
    <BrowserRouter>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});
