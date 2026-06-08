import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from "./globalContext/Context.jsx";
import App from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Context>
        <App />
      </Context>
    </Router>
  </StrictMode>,
);
