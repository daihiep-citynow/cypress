// libs
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// hooks
import { LocalesProvider } from "./hooks/useLocales";
// context
import { PageProvider, CheckoutProvider, RefreshProvider } from "./contexts";
// components
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <GlobalStyles>
    <LocalesProvider>
      <PageProvider>
        <CheckoutProvider>
          <RefreshProvider>
            <Router>
              <StrictMode>
                <App />
              </StrictMode>
            </Router>
          </RefreshProvider>
        </CheckoutProvider>
      </PageProvider>
    </LocalesProvider>
  </GlobalStyles>,
  document.getElementById("root")
);

reportWebVitals();
