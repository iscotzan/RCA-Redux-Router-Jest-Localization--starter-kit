// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { LocalizeProvider } from "react-localize-redux";

const store = configureStore();
const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(
    <LocalizeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </LocalizeProvider>,
    root
  );
}

registerServiceWorker();
