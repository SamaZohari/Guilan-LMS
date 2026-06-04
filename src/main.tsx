import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/700.css";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <AuthProvider>
      <div
        style={{
          fontFamily: "Vazirmatn",
        }}
      >
        <App />
      </div>
    </AuthProvider>
  </React.StrictMode>
);