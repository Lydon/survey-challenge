import React from "react";
import { createStore } from "redux";
import { render } from "react-dom";
import { scReducers } from "@sc/sdk";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

declare let window: Window & { __REDUX_DEVTOOLS_EXTENSION__: Function };

createStore(
    scReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
