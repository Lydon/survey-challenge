import React from "react";
import { createStore } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { scReducers } from "@sc/sdk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App";

declare let window: Window & { __REDUX_DEVTOOLS_EXTENSION__: Function };

const persistConfig = {
    key: "sc:persist",
    storage
};

const persistedReducer = persistReducer(persistConfig, scReducers);

const SCStore = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(SCStore);

render(
    <React.StrictMode>
        <Provider store={SCStore}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.body.appendChild(document.createElement("div"))
);
