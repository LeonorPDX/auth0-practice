import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

ReactDOM.render(
  <Router>
    <Auth0Provider>
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById("root")
);
