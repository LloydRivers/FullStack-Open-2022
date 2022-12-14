import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import App from "./App";

export const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
