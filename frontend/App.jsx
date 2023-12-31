import React from "react";
import logo from "./assets/dfinity.svg";
import Home from "./Home";
import { createClient } from "@connect2ic/core";
import { defaultProviders } from "@connect2ic/core/providers";
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react";
import "@connect2ic/core/style.css";

// Remove the canister import for counter

function App() {
  return (
    <div className="App">
      <div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="slogan">
          React Template
        </p>
        <p className="twitter">by <a href="https://twitter.com/miamaruq">@miamaruq</a></p>
      </header>

      <p className="examples-title">
        Examples
      </p>
      <div className="examples">
        <Home />
      </div>
    </div>
  );
}

const client = createClient({
  // Remove the canisters section
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
});

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
);