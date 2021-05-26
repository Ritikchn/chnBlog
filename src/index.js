import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider, DbProvider } from "./ContextApi";

ReactDOM.render(
  <UserProvider>
    <DbProvider>
      <App />
    </DbProvider>
  </UserProvider>,
  document.getElementById("root")
);
