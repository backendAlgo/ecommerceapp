import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

import "./index.css";
import App from "./App";
import "antd/dist/antd.css";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,

    // </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
