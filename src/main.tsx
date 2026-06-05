import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/700.css";

import {
  AuthProvider,
} from "./context/AuthContext";

import {
  ThemeProvider,
} from "./context/ThemeContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);