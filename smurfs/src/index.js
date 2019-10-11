import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// configure store
import { Provider } from "react-redux";
import configureStore from "./configureStore";

const store = configureStore();
console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root"));
