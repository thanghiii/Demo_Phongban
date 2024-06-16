import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/reset-css.css";
import "./assets/global.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
