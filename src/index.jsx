// libs
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// hooks
import { LocalesProvider } from "./hooks/useLocales";
// components
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <GlobalStyles>
    <LocalesProvider>
      <Router>
        <StrictMode>
          <App />
        </StrictMode>
      </Router>
    </LocalesProvider>
  </GlobalStyles>,
  document.getElementById("root")
);

reportWebVitals();
